"use client";

export default function ContactCTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-background-dark border-t border-white/5">
      {/* 배경 장식 */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          {/* 텍스트 영역 */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              더 자세한 정보가 필요하신가요?
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-xl">
              어나드범어의 프리미엄 가치를 모델하우스에서 직접 확인해보세요.
              <br className="hidden md:inline" /> 전문 상담사가 상세한 분양 정보를 안내해 드립니다.
            </p>
          </div>

          {/* 버튼 영역 */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="flex items-center justify-center gap-2 h-14 px-8 rounded-lg bg-primary hover:bg-primary/90 text-background-dark font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(236,182,19,0.3)]">
              <span className="material-symbols-outlined">calendar_month</span>
              <span>방문 예약하기</span>
            </button>
            <button className="flex items-center justify-center gap-2 h-14 px-8 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-lg transition-all duration-300">
              <span className="material-symbols-outlined">call</span>
              <span>전화 상담</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

