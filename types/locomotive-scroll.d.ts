declare module "locomotive-scroll" {
  export interface LocomotiveScrollOptions {
    el: HTMLElement;
    smooth?: boolean;
    smoothMobile?: boolean;
    resetNativeScroll?: boolean;
    lerp?: number;
    multiplier?: number;
    class?: string;
    scrollbarContainer?: HTMLElement | false;
    scrollbarClass?: string;
    scrollingClass?: string;
    draggingClass?: string;
    smoothClass?: string;
    initClass?: string;
    getSpeed?: boolean;
    getDirection?: boolean;
    inertia?: number;
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    update(): void;
    destroy(): void;
    start(): void;
    stop(): void;
    scrollTo(
      target: string | number | HTMLElement,
      options?: {
        offset?: number;
        duration?: number;
        easing?: number[];
        disableLerp?: boolean;
        callback?: () => void;
      }
    ): void;
    on(event: string, func: (...args: unknown[]) => void): void;
    off(event: string, func: (...args: unknown[]) => void): void;
  }
}
