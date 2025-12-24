"use client";

import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-background-dark/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* 로고 섹션 */}
          <div className="flex items-center gap-3 text-white cursor-pointer group">
            <div className="size-8 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-3xl">
                apartment
              </span>
            </div>
            <h2 className="text-white text-xl font-bold tracking-tight">
              Anadd Beomeo
            </h2>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-10">
            <div className="flex items-center gap-8">
              <a
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors"
                href="#"
              >
                사업안내
              </a>
              <a
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors"
                href="#"
              >
                단지안내
              </a>
              <a
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors"
                href="#"
              >
                세대안내
              </a>
              <a
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors"
                href="#"
              >
                분양안내
              </a>
              <a
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors"
                href="#"
              >
                오시는 길
              </a>
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
              <a
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                사업안내
              </a>
              <a
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                단지안내
              </a>
              <a
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                세대안내
              </a>
              <a
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                분양안내
              </a>
              <a
                className="text-white/80 hover:text-primary text-sm font-semibold transition-colors"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                오시는 길
              </a>
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
