"use client";

export default function HeroSection() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col">
      {/* 배경 이미지 및 오버레이 */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(34, 29, 16, 0.4) 0%, rgba(34, 29, 16, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBeZvNEhg1sQKLwypvLhuWuRf4OUWO4c5h9Jzp6YmU_d88rJXLSRHZN0wTTqDZgxTK9X9o2sk8WQ-x-zIMTTd9m6QNhpwTI6KhyyFOjDBFJuIJUKT7FORLNuqG4WQlDM0XcUoIpua_KDXZcWquFHjjeFCEVw4D3UrOMvi_wvVZhS0QfN6qf7alfcRBIsAwSMaRszcppHrRxff_O1QpwR1HbsTQfs1N88bhPTpeQp0xnvo9QSHBzqbrrJjLbcKsnXmO9YnSMLIwTvJcI")`,
        }}
      />

      {/* 콘텐츠 컨테이너 */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-40 w-full max-w-[1440px] mx-auto pt-20">
        <div className="max-w-[800px] flex flex-col gap-8 animate-fade-in-up">
          {/* 메인 헤딩 */}
          <div className="flex flex-col gap-4 text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-12 bg-primary"></span>
              <span className="text-primary font-bold uppercase tracking-widest text-sm">
                Honors Beomeo
              </span>
            </div>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              범어의 자부심,
              <br />
              <span className="text-primary">그 이상의 가치</span>
            </h1>
            <h2 className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-[600px] mt-2">
              대구의 중심에서 누리는 하이엔드 라이프스타일의 시작.
              <br className="hidden md:block" />
              당신만을 위한 특별한 공간이 준비되어 있습니다.
            </h2>
          </div>

          {/* 주요 특징 칩 */}
          <div className="flex gap-3 flex-wrap py-2">
            <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full border border-primary/30 bg-background-dark/50 backdrop-blur-sm px-5 transition-transform hover:scale-105 cursor-default">
              <span className="material-symbols-outlined text-primary text-[18px]">
                directions_subway
              </span>
              <p className="text-white text-sm font-medium">범어역 도보 1분</p>
            </div>
            <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full border border-primary/30 bg-background-dark/50 backdrop-blur-sm px-5 transition-transform hover:scale-105 cursor-default">
              <span className="material-symbols-outlined text-primary text-[18px]">
                landscape
              </span>
              <p className="text-white text-sm font-medium">영구 조망권</p>
            </div>
            <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full border border-primary/30 bg-background-dark/50 backdrop-blur-sm px-5 transition-transform hover:scale-105 cursor-default">
              <span className="material-symbols-outlined text-primary text-[18px]">
                concierge
              </span>
              <p className="text-white text-sm font-medium">호텔식 컨시어지</p>
            </div>
          </div>

          {/* CTA 버튼 */}
          <div className="pt-4">
            <button className="group flex min-w-[200px] w-fit cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary hover:bg-[#d9a50f] text-background-dark text-base font-bold leading-normal tracking-wide shadow-[0_0_20px_rgba(236,182,19,0.3)] transition-all">
              <span>청약 안내받기</span>
              <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">
                arrow_right_alt
              </span>
            </button>
            <p className="mt-3 text-white/50 text-xs font-medium pl-1">
              * 사전 예약 고객에게는 특별 혜택이 제공됩니다.
            </p>
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-80 cursor-pointer scroll-down-animate"
        onClick={handleScrollDown}
      >
        <span className="text-white text-xs uppercase tracking-widest font-medium">
          Scroll Down
        </span>
        <span className="material-symbols-outlined text-white text-3xl">
          keyboard_arrow_down
        </span>
      </div>
    </section>
  );
}
