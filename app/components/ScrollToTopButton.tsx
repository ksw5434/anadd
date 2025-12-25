"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { scrollToTarget } from "@/app/utils/scrollTo";

/**
 * 스크롤 투 탑 버튼 컴포넌트
 * 오른쪽 하단에 고정되어 페이지 상단으로 스크롤 이동
 */
export default function ScrollToTopButton() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // 마운트 상태 확인 (SSR 호환성)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 스크롤 위치 감지
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsVisible(scrollY > 300);
    };

    // 초기 스크롤 위치 확인
    handleScroll();

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMounted]);

  // 맨 위로 스크롤 이동하는 함수
  const scrollToTop = () => {
    scrollToTarget(0);
  };

  // 서버 사이드에서는 아무것도 렌더링하지 않음 (Hydration 오류 방지)
  if (!isMounted) {
    return null;
  }

  // 버튼 렌더링
  const buttonElement = (
    <button
      onClick={scrollToTop}
      className={`flex flex-col items-center justify-center gap-1 size-14 
        rounded-full bg-[#ecb613]/90 hover:bg-[#ecb613] text-white shadow-lg 
        shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 
        transform hover:scale-105 active:scale-95 group backdrop-blur-sm border 
        border-[#ecb613]/30 ${
          isVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      aria-label="맨 위로 이동"
      style={{
        position: "fixed",
        bottom: "32px", // bottom-20 (80px = 5rem)
        right: "24px", // right-20 (80px = 5rem)
        zIndex: 10001,
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

  // body에 직접 Portal로 렌더링
  return createPortal(buttonElement, document.body);
}
