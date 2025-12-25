"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Hook configuration options
 */
export interface UseLocomotiveScrollOptions {
  /** Threshold in pixels to trigger scrolled state (default: 80) */
  threshold?: number;
  /** Enable debug logging (default: false) */
  debug?: boolean;
  /** Polling interval in ms for fallback scroll detection (default: 200) */
  pollingInterval?: number;
}

/**
 * Hook return value
 */
export interface UseLocomotiveScrollReturn {
  /** Current scroll Y position in pixels */
  scrollY: number;
  /** Whether scroll position is above threshold */
  isScrolled: boolean;
  /** Whether the hook has mounted (for SSR compatibility) */
  isMounted: boolean;
}

/**
 * Custom hook for detecting scroll position with Locomotive Scroll support
 *
 * Handles both Locomotive Scroll (transform-based) and native scroll,
 * with automatic detection and proper cleanup.
 *
 * @param options - Configuration options
 * @returns Current scroll state
 *
 * @example
 * function MyComponent() {
 *   const { scrollY, isScrolled } = useLocomotiveScroll({ threshold: 100 });
 *
 *   return (
 *     <nav className={isScrolled ? "scrolled" : ""}>
 *       Current position: {scrollY}px
 *     </nav>
 *   );
 * }
 */
export function useLocomotiveScroll(
  options: UseLocomotiveScrollOptions = {}
): UseLocomotiveScrollReturn {
  const { threshold = 80, debug = false, pollingInterval = 200 } = options;

  const [isMounted, setIsMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Use ref to prevent stale closure issues
  const tickingRef = useRef(false);
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<MutationObserver | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const locomotiveHandlerRef = useRef<((obj: any) => void) | null>(null);

  // Mount detection (SSR compatibility)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  /**
   * Extract scroll position from various sources
   */
  const getScrollPosition = useCallback((): number => {
    // Get Locomotive Scroll instance and container
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const locomotiveScroll = (window as any).locomotiveScroll;
    const scrollContainer = document.querySelector(
      "[data-scroll-container]"
    ) as HTMLElement;

    let position = 0;

    // Strategy 1: Try Locomotive Scroll instance API
    if (locomotiveScroll && scrollContainer) {
      try {
        // Try to get scroll position from instance
        position = Math.abs(locomotiveScroll.scroll?.y || 0);

        if (position > 0) {
          if (debug) console.log("Scroll from Locomotive API:", position);
          return position;
        }
      } catch (e) {
        if (debug) console.warn("Locomotive API access failed:", e);
      }
    }

    // Strategy 2: Extract from CSS transform matrix
    if (scrollContainer) {
      const transform = window.getComputedStyle(scrollContainer).transform;

      if (transform && transform !== "none") {
        const matrix = transform.match(/matrix.*\((.+)\)/);
        if (matrix) {
          const values = matrix[1].split(", ");
          // Y translation is at index 5 for matrix() or index 1 for translateY()
          position = Math.abs(parseFloat(values[5] || values[1] || "0"));

          if (position > 0) {
            if (debug) console.log("Scroll from transform:", position);
            return position;
          }
        }
      }

      // Fallback to scrollTop if no transform
      position = scrollContainer.scrollTop || 0;
      if (position > 0) {
        if (debug) console.log("Scroll from container scrollTop:", position);
        return position;
      }
    }

    // Strategy 3: Native window scroll (fallback)
    position =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (debug) console.log("Scroll from window:", position);
    return position;
  }, [debug]);

  /**
   * Update scroll state (throttled with requestAnimationFrame)
   */
  const updateScrollPosition = useCallback(() => {
    if (!tickingRef.current) {
      window.requestAnimationFrame(() => {
        const position = getScrollPosition();
        setScrollY(position);
        setIsScrolled(position > threshold);
        tickingRef.current = false;
      });
      tickingRef.current = true;
    }
  }, [getScrollPosition, threshold]);

  /**
   * Setup scroll detection
   */
  useEffect(() => {
    // Only run on client side after mount
    if (typeof window === "undefined" || !isMounted) return;

    // Initial scroll position check (delayed to ensure DOM ready)
    const initialCheckTimeout = setTimeout(updateScrollPosition, 100);

    // Get references
    const scrollContainer = document.querySelector(
      "[data-scroll-container]"
    ) as HTMLElement;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const locomotiveScroll = (window as any).locomotiveScroll;

    // Strategy 1: Locomotive Scroll event listener
    if (locomotiveScroll) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const locomotiveHandler = (obj: any) => {
          const position = Math.abs(
            obj?.scroll?.y || obj?.y || obj?.currentElements?.scroll?.y || 0
          );
          setScrollY(position);
          setIsScrolled(position > threshold);
        };

        locomotiveScroll.on("scroll", locomotiveHandler);
        locomotiveHandlerRef.current = locomotiveHandler;

        if (debug) console.log("Locomotive Scroll event listener registered");
      } catch (e) {
        if (debug) console.warn("Failed to register Locomotive listener:", e);
      }
    }

    // Strategy 2: DOM event listeners (fallback/supplement)
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateScrollPosition, {
        passive: true,
      });
    }

    // Window scroll events (fallback for native scroll)
    window.addEventListener("scroll", updateScrollPosition, { passive: true });
    window.addEventListener("resize", updateScrollPosition, { passive: true });

    // Strategy 3: MutationObserver for transform changes
    if (scrollContainer) {
      observerRef.current = new MutationObserver(updateScrollPosition);
      observerRef.current.observe(scrollContainer, {
        attributes: true,
        attributeFilter: ["style", "class"],
      });
    }

    // Strategy 4: Polling fallback (for cases where events don't fire)
    pollingIntervalRef.current = setInterval(
      updateScrollPosition,
      pollingInterval
    );

    // Cleanup function
    return () => {
      clearTimeout(initialCheckTimeout);

      // Remove Locomotive event listener
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const locomotiveScroll = (window as any).locomotiveScroll;
      if (locomotiveScroll && locomotiveHandlerRef.current) {
        try {
          // FIXED: Remove specific handler, not all scroll listeners
          locomotiveScroll.off("scroll", locomotiveHandlerRef.current);
          if (debug) console.log("Locomotive Scroll listener removed");
        } catch (e) {
          if (debug) console.warn("Failed to remove Locomotive listener:", e);
        }
      }

      // Remove DOM event listeners
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", updateScrollPosition);
      }
      window.removeEventListener("scroll", updateScrollPosition);
      window.removeEventListener("resize", updateScrollPosition);

      // Disconnect observer
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      // Clear polling interval
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
      }
    };
  }, [isMounted, updateScrollPosition, threshold, debug, pollingInterval]);

  return {
    scrollY,
    isScrolled,
    isMounted,
  };
}
