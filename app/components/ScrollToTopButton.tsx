"use client";

import { createPortal } from "react-dom";
import { useLocomotiveScroll } from "@/app/hooks/useLocomotiveScroll";
import { scrollToTarget } from "@/app/utils/scrollTo";

/**
 * 스크롤 투 탑 버튼 컴포넌트
 * 오른쪽 하단에 고정되어 페이지 상단으로 스크롤 이동
 */
export default function ScrollToTopButton() {
  const { scrollY, isMounted } = useLocomotiveScroll({ threshold: 300 });
  const isVisible = scrollY > 300;

  // 맨 위로 스크롤 이동하는 함수
  const scrollToTop = () => {
    scrollToTarget(0);
  };

  // 서버 사이드에서는 아무것도 렌더링하지 않음 (Hydration 오류 방지)
  if (!isMounted) {
    return null;
  }

  // 버튼 렌더링 (Locomotive Scroll과의 호환성을 위해 항상 렌더링하되 opacity로 제어)
  const buttonElement = (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 right-20 z-[9999] flex flex-col items-center justify-center gap-1 size-16 rounded-full bg-[#ecb613]/90 hover:bg-[#ecb613] text-white shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 transform hover:scale-105 active:scale-95 group backdrop-blur-sm border border-[#ecb613]/30 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      aria-label="맨 위로 이동"
      style={{
        // z-index를 인라인 스타일로도 설정하여 확실하게 적용 (ChannelTalk보다 높게)
        zIndex: 10001,
        // Locomotive Scroll과의 호환성을 위해 position을 명시적으로 설정
        position: "fixed",
        // 포인터 이벤트가 제대로 작동하도록 설정
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      {/* 화살표 아이콘 */}
      <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-y-0.5">
        arrow_upward
      </span>
      {/* TOP 텍스트 */}
      <span className="text-[10px] font-semibold tracking-wide">TOP</span>
    </button>
  );

  // body에 직접 Portal로 렌더링하여 Locomotive Scroll의 영향을 받지 않도록 함
  return createPortal(buttonElement, document.body);
}
