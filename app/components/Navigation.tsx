"use client";

import { useState, useEffect } from "react";
import { scrollToTarget } from "@/app/utils/scrollTo";
import InterestRegistrationButton from "./InterestRegistrationButton";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 스크롤 위치 감지
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollY > 80);
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
  }, []);

  // 섹션으로 스크롤 이동하는 함수
  const scrollToSection = (sectionId: string) => {
    scrollToTarget(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[90] transition-all duration-300 ${
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
              <button
                onClick={() => scrollToSection("project-overview")}
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors"
              >
                사업안내
              </button>
              <button
                onClick={() => scrollToSection("premium-life")}
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors"
              >
                프리미엄
              </button>
              <button
                onClick={() => scrollToSection("complex-plan")}
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors"
              >
                단지배치도
              </button>
              <button
                onClick={() => scrollToSection("location-environment")}
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors"
              >
                로케이션
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors"
              >
                갤러리
              </button>
            </div>
            <InterestRegistrationButton
              onClick={() => scrollToSection("interest-registration")}
            />
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
              <button
                onClick={() => scrollToSection("project-overview")}
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors text-left"
              >
                사업안내
              </button>
              <button
                onClick={() => scrollToSection("premium-life")}
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors text-left"
              >
                프리미엄
              </button>
              <button
                onClick={() => scrollToSection("complex-plan")}
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors text-left"
              >
                단지배치도
              </button>
              <button
                onClick={() => scrollToSection("location-environment")}
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors text-left"
              >
                로케이션
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors text-left"
              >
                갤러리
              </button>
              <InterestRegistrationButton
                className="mt-2"
                onClick={() => scrollToSection("interest-registration")}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
