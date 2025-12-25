"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 스크롤 감지 로직 (Locomotive Scroll 지원)
  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    if (typeof window === "undefined") return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Locomotive Scroll의 스크롤 컨테이너 찾기
          const scrollContainer = document.querySelector(
            "[data-scroll-container]"
          ) as HTMLElement;

          let scrollY = 0;

          if (scrollContainer) {
            // Locomotive Scroll은 transform을 사용하므로 스타일에서 추출
            const transform =
              window.getComputedStyle(scrollContainer).transform;
            if (transform && transform !== "none") {
              // matrix(1, 0, 0, 1, x, y) 형식에서 y 값 추출
              const matrix = transform.match(/matrix.*\((.+)\)/);
              if (matrix) {
                const values = matrix[1].split(", ");
                // y 값은 5번째 인덱스 (0-based)
                scrollY = Math.abs(parseFloat(values[5] || values[1] || "0"));
              }
            } else {
              // transform이 없으면 scrollTop 사용
              scrollY = scrollContainer.scrollTop || 0;
            }
          } else {
            // 일반 스크롤 (Locomotive Scroll이 없는 경우)
            scrollY =
              window.scrollY ||
              window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0;
          }

          // 디버깅용 로그

          // 스크롤 위치가 80px 이상이면 배경 블러 효과 적용
          setIsScrolled(scrollY > 80);
          ticking = false;
        });
        ticking = true;
      }
    };

    // 초기 스크롤 위치 확인 (약간의 지연 후)
    setTimeout(handleScroll, 100);

    // Locomotive Scroll 컨테이너의 스크롤 이벤트 감지
    const scrollContainer = document.querySelector(
      "[data-scroll-container]"
    ) as HTMLElement;

    if (scrollContainer) {
      // Locomotive Scroll 컨테이너에 직접 이벤트 리스너 추가
      scrollContainer.addEventListener("scroll", handleScroll, {
        passive: true,
      });
    }

    // window 스크롤 이벤트도 감지 (fallback)
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Locomotive Scroll의 scroll 이벤트도 감지
    window.addEventListener("scroll", handleScroll, { passive: true });

    // resize 이벤트도 감지하여 정확한 스크롤 위치 확인
    window.addEventListener("resize", handleScroll, { passive: true });

    // MutationObserver로 transform 변경 감지 (Locomotive Scroll용)
    let observer: MutationObserver | null = null;
    if (scrollContainer) {
      observer = new MutationObserver(() => {
        handleScroll();
      });
      observer.observe(scrollContainer, {
        attributes: true,
        attributeFilter: ["style", "class"],
      });
    }

    // cleanup: 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-90 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md shadow-lg bg-background-dark/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* 로고 섹션 */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="로고"
              width={120}
              height={40}
              className="h-auto"
            />
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-10">
            <div className="flex items-center gap-8">
              <button className="text-white/80 hover:text-primary text-sm font-semibold transition-colors">
                사업안내
              </button>
              <button className="text-white/80 hover:text-primary text-sm font-semibold transition-colors">
                단지안내
              </button>
              <button className="text-white/80 hover:text-primary text-sm font-semibold transition-colors">
                세대안내
              </button>
              <button className="text-white/80 hover:text-primary text-sm font-semibold transition-colors">
                분양안내
              </button>
              <button className="text-white/80 hover:text-primary text-sm font-semibold transition-colors">
                오시는 길
              </button>
            </div>
            <button className="flex items-center gap-2 bg-primary hover:bg-[#d9a60e] text-background-dark px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">
              <span>관심고객등록</span>
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10 mt-2 pt-4">
            <div className="flex flex-col gap-4">
              <button className="text-white/80 hover:text-primary text-sm font-semibold transition-colors text-left">
                사업안내
              </button>
              <button className="text-white/80 hover:text-primary text-sm font-semibold transition-colors text-left">
                단지안내
              </button>
              <button className="text-white/80 hover:text-primary text-sm font-semibold transition-colors text-left">
                세대안내
              </button>
              <button className="text-white/80 hover:text-primary text-sm font-semibold transition-colors text-left">
                분양안내
              </button>
              <button className="text-white/80 hover:text-primary text-sm font-semibold transition-colors text-left">
                오시는 길
              </button>
              <button className="flex items-center gap-2 bg-primary hover:bg-[#d9a60e] text-background-dark px-6 py-2.5 rounded-lg text-sm font-bold transition-all mt-2">
                <span>관심고객등록</span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
