/**
 * Scroll configuration options
 */
export interface ScrollToOptions {
  /** Offset from target position (negative = above target) */
  offset?: number;
  /** Scroll duration in milliseconds */
  duration?: number;
  /** Easing curve for animation */
  easing?: number[];
}

/**
 * Default scroll options
 */
const DEFAULT_OPTIONS: ScrollToOptions = {
  offset: -80, // Account for fixed navbar
  duration: 1000,
  easing: [0.25, 0.0, 0.35, 1.0], // Cubic bezier curve
};

/**
 * Scrolls to a target element or position, with automatic Locomotive Scroll detection
 *
 * @param target - Element ID (string), HTMLElement, or numeric position (0 for top)
 * @param options - Scroll configuration options
 *
 * @example
 * // Scroll to top
 * scrollToTarget(0);
 *
 * @example
 * // Scroll to section by ID
 * scrollToTarget("about-section");
 *
 * @example
 * // Scroll to element with custom offset
 * scrollToTarget(element, { offset: -100 });
 */
export function scrollToTarget(
  target: string | HTMLElement | number,
  options: ScrollToOptions = {}
): void {
  const config = { ...DEFAULT_OPTIONS, ...options };

  // Get the scroll container (Locomotive Scroll uses data-scroll-container)
  const scrollContainer = document.querySelector(
    "[data-scroll-container]"
  ) as HTMLElement;

  // Get the Locomotive Scroll instance if available
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const locomotiveScroll = (window as any).locomotiveScroll;

  // Handle numeric target (scroll to position)
  if (typeof target === "number") {
    if (locomotiveScroll) {
      locomotiveScroll.scrollTo(target, {
        duration: config.duration,
        easing: config.easing,
      });
    } else if (scrollContainer) {
      scrollContainer.scrollTo({
        top: target,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: target,
        behavior: "smooth",
      });
    }
    return;
  }

  // Handle element target (string ID or HTMLElement)
  const targetElement =
    typeof target === "string" ? document.getElementById(target) : target;

  if (!targetElement) {
    console.warn(`scrollToTarget: Target element not found:`, target);
    return;
  }

  // Use Locomotive Scroll if available
  if (locomotiveScroll) {
    locomotiveScroll.scrollTo(targetElement, {
      offset: config.offset,
      duration: config.duration,
      easing: config.easing,
    });
  } else {
    // Fallback to native smooth scroll
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
