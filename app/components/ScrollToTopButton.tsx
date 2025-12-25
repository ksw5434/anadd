"use client";

import { useState, useEffect } from "react";

/**
 * 스크롤 투 탑 버튼 컴포넌트
 * 오른쪽 하단에 고정되어 페이지 상단으로 스크롤 이동
 */
export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 위치 감지 로직 (Locomotive Scroll 지원)
  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    if (typeof window === "undefined") return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Locomotive Scroll 인스턴스 확인
          const locomotiveScroll = (window as any).locomotiveScroll;
          const scrollContainer = document.querySelector(
            "[data-scroll-container]"
          ) as HTMLElement;

          let scrollY = 0;

          if (locomotiveScroll && scrollContainer) {
            // Locomotive Scroll이 있는 경우 - scroll 인스턴스에서 직접 스크롤 위치 가져오기
            try {
              // Locomotive Scroll의 scroll 속성 사용
              scrollY = locomotiveScroll.scroll?.y || 0;
              
              // 만약 scroll 속성이 없으면 transform에서 추출
              if (scrollY === 0) {
                const transform =
                  window.getComputedStyle(scrollContainer).transform;
                if (transform && transform !== "none") {
                  const matrix = transform.match(/matrix.*\((.+)\)/);
                  if (matrix) {
                    const values = matrix[1].split(", ");
                    scrollY = Math.abs(parseFloat(values[5] || values[1] || "0"));
                  }
                }
              }
            } catch (e) {
              // 에러 발생 시 transform 방식으로 fallback
              const transform =
                window.getComputedStyle(scrollContainer).transform;
              if (transform && transform !== "none") {
                const matrix = transform.match(/matrix.*\((.+)\)/);
                if (matrix) {
                  const values = matrix[1].split(", ");
                  scrollY = Math.abs(parseFloat(values[5] || values[1] || "0"));
                }
              }
            }
          } else if (scrollContainer) {
            // Locomotive Scroll이 없지만 컨테이너가 있는 경우
            const transform =
              window.getComputedStyle(scrollContainer).transform;
            if (transform && transform !== "none") {
              const matrix = transform.match(/matrix.*\((.+)\)/);
              if (matrix) {
                const values = matrix[1].split(", ");
                scrollY = Math.abs(parseFloat(values[5] || values[1] || "0"));
              }
            } else {
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

          // 스크롤 위치가 300px 이상이면 버튼 표시
          setIsVisible(scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Locomotive Scroll 이벤트 리스너 등록 (지연 후)
    const setupLocomotiveScroll = () => {
      const locomotiveScroll = (window as any).locomotiveScroll;
      if (locomotiveScroll) {
        try {
          // Locomotive Scroll의 scroll 이벤트 사용
          locomotiveScroll.on("scroll", (obj: any) => {
            // 이벤트 객체 구조에 따라 다를 수 있음
            const scrollY = Math.abs(
              obj?.scroll?.y || obj?.y || obj?.currentElements?.scroll?.y || 0
            );
            setIsVisible(scrollY > 300);
          });
        } catch (e) {
          // 이벤트 등록 실패 시 일반 스크롤 감지 사용
          console.warn("Locomotive Scroll 이벤트 등록 실패:", e);
        }
      }
    };

    // Locomotive Scroll 초기화 대기 (약간의 지연 후)
    setTimeout(() => {
      setupLocomotiveScroll();
      handleScroll();
    }, 1000);

    // 초기 스크롤 위치 확인 (약간의 지연 후)
    setTimeout(handleScroll, 500);

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
      const locomotiveScroll = (window as any).locomotiveScroll;
      if (locomotiveScroll) {
        try {
          locomotiveScroll.off("scroll");
        } catch (e) {
          // 무시
        }
      }
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

  // 맨 위로 스크롤 이동하는 함수
  const scrollToTop = () => {
    // Locomotive Scroll 인스턴스 찾기
    const scrollContainer = document.querySelector(
      "[data-scroll-container]"
    ) as HTMLElement;

    if (scrollContainer) {
      // Locomotive Scroll이 있는 경우
      const locomotiveScroll = (window as any).locomotiveScroll;
      if (locomotiveScroll) {
        // Locomotive Scroll의 scrollTo 메서드 사용
        locomotiveScroll.scrollTo(0, {
          duration: 1000,
          easing: [0.25, 0.0, 0.35, 1.0],
        });
      } else {
        // Locomotive Scroll이 아직 초기화되지 않은 경우 일반 스크롤 사용
        scrollContainer.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } else {
      // 일반 스크롤 사용
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // 버튼이 보이지 않으면 렌더링하지 않음
  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[100] flex flex-col items-center justify-center gap-1 w-16 h-20 rounded-full bg-background-dark/90 hover:bg-background-dark text-white shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 transform hover:scale-105 active:scale-95 group backdrop-blur-sm border border-white/10"
      aria-label="맨 위로 이동"
    >
      {/* 화살표 아이콘 */}
      <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-y-0.5">
        arrow_upward
      </span>
      {/* TOP 텍스트 */}
      <span className="text-[10px] font-semibold tracking-wide">TOP</span>
    </button>
  );
}

