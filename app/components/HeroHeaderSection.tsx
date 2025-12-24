"use client";

export default function HeroHeaderSection() {
  return (
    <header className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGkLBKg_D_1ky_eBSwOVwyqxXl3KmIir9StOGdFYmNThjleCRkEj5pVw9XgWN8xDkFkIstMIdCoYLm4H9cAv2br1CjxCkRSSx33YBdtcruLc7py6DFiihxF6sDCJDiEccwX44qS6Ekjvr4Y2JnsUhwkRRKg1SFQV_XTUpsi-rdIpoGvvxu_cXZKf6efELcXyi4YCKgkeqxW1XUUU5GM3IJ21RAIdCSz7_vklzFvNsowsHL2_B4stOFlaMA7LRxtvOd0Uzr1sTei5-Q")`,
        }}
      />

      {/* 오버레이 */}
      <div className="absolute inset-0 bg-background-dark/80 bg-gradient-to-t from-background-dark to-transparent"></div>

      {/* 콘텐츠 */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
        {/* PREMIUM RESIDENTIAL 배지 */}
        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold tracking-wider mb-4 uppercase">
          Premium Residential
        </span>

        {/* 메인 제목 */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          Anadeu Beomeo
        </h2>

        {/* 서브타이틀 */}
        <p className="text-neutral-300 text-lg font-light max-w-2xl mx-auto">
          대구 수성구 범어동, 품격의 차이를 만드는 새로운 기준
        </p>
      </div>
    </header>
  );
}

