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
 * 스크롤을 대상 요소나 위치로 이동하는 함수
 *
 * @param target - 요소 ID (string), HTMLElement, 또는 숫자 위치 (0은 맨 위)
 * @param options - 스크롤 설정 옵션
 *
 * @example
 * // 맨 위로 스크롤
 * scrollToTarget(0);
 *
 * @example
 * // ID로 섹션으로 스크롤
 * scrollToTarget("about-section");
 *
 * @example
 * // 커스텀 오프셋과 함께 요소로 스크롤
 * scrollToTarget(element, { offset: -100 });
 */
export function scrollToTarget(
  target: string | HTMLElement | number,
  options: ScrollToOptions = {}
): void {
  const config = { ...DEFAULT_OPTIONS, ...options };

  // 숫자 타겟 처리 (위치로 스크롤)
  if (typeof target === "number") {
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
    return;
  }

  // 요소 타겟 처리 (ID 문자열 또는 HTMLElement)
  const targetElement =
    typeof target === "string" ? document.getElementById(target) : target;

  if (!targetElement) {
    console.warn(`scrollToTarget: 대상 요소를 찾을 수 없습니다:`, target);
    return;
  }

  // 네이티브 부드러운 스크롤 사용
  const elementPosition = targetElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset + (config.offset || 0);

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
