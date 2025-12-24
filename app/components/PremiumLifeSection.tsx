"use client";

export default function PremiumLifeSection() {
  const features = [
    {
      id: 1,
      title: "명문 학군과 교통",
      description:
        "범어의 중심에서 누리는 쾌속 교통망과 대구 최고의 명문 학군이 만나는 교육의 중심지입니다.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDDWuAPcCo3m2mo26_5xpKVakiz8O07pu1Nixv6vmEh9IM4Vo1cLflj5BoPcZf2RuIromBwsSaIx1KlBK4RAuwRZGZ1m7gSh-Y8pZCr5Ov9rmvji7Rz5POXyhmJYGv63DDRAKOkWSQExHkNNnvDtwf-324QGXU2vcUu_cLm4uB8aXUXjiTQqLmrBZn1fPFxbCcOG00VtEmA_q_KMO80ZdY6TwrrT_3sJ4rowIrku6g5okYTHL-vNuA6Xx-W6jVndlatz5Feu4uYtfrp",
      icon: "school",
    },
    {
      id: 2,
      title: "하이엔드 커뮤니티",
      description:
        "피트니스, 골프연습장, 프라이빗 라운지 등 입주민의 품격을 높여주는 전용 커뮤니티 시설을 제공합니다.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA6eLmIpijcJa8bYJN5rife8sAAsTydC8rz5sJbB24StDCG2PWm00R1Ydipexk82eAZNzg1sm-JDpnzlcKu5W_xarn7DnT0KCkU6thBIoPOqPke-t5dJp776X4IO-s6CvlU0fdOd5AJuMZJW43eDcsa5wtjG1vH6F5e4LRgMK0MwV6vgUlZSCUtQr7RV-ruGxkMG4RFz3GpDhjY8Cn2FVhzGTWoM3UR5RW5l6bPDXGr5K7u_ZsXPwYTiXimRN8FqPfKGNtGEq70Ur1x",
      icon: "fitness_center",
    },
    {
      id: 3,
      title: "친환경 조경 설계",
      description:
        "도심 속에서 사계절의 변화를 느끼며 힐링할 수 있는 테마 정원과 산책로가 조성됩니다.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCu_ShH_CT1mZRgaOIPMD5PimechoIPnVDMaBuHE7a9qwXdd8m7w6cVkVH29SDfYxLWgmghl2gwn_hVzN7rGsihpT4bScqIVBitAT4PQYLyxbqSIJ0zXsz7AwsjAh-qzGCQLk-1qwMhwnCh775nBTX4JEqUX_NHrIu7ORYaEAvEj8qd7whGLhjC7CakKQ_D8GQ5aDQW6EKLjWDan1uxSjUIZDoO0_RViWB9m31BMWqG8BPNSWY5gSURBvibr17gRwtNiPU25HP0CWlY",
      icon: "park",
    },
    {
      id: 4,
      title: "최첨단 스마트 시스템",
      description:
        "AI 기반의 통합 보안 시스템과 스마트폰으로 제어하는 홈 IoT로 안전하고 편리한 생활을 약속합니다.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAYM57kjHVns7RxeYBk8OGGQuXbJTQPR9Y-8YaOnBSSe90g4oQZo8VeqSYwgiiIkGlOJo0lwQ0LrzUh4NashmJBVgpIxMCc4rX4x17vV1cL_I5omhRj71VpjoOJetzkBCmmT-2Ao75inGPNgzVtqAXWKWVOAhZHyrgC2Y7OLrv3f5unDC0yeaQ9VN0c1qUVbrbB4KtngfJpHJIs5RC4JmqiBWedsA5FpT5mcPTSw81osg6kMNfTDqOZ4tzeiJd_5AZer1N9KOo9cTBG",
      icon: "security",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col w-full bg-background-dark">
      {/* 헤더 섹션 */}
      <header className="relative w-full pt-20 pb-12 md:pt-32 md:pb-20 px-6 flex flex-col items-center justify-center text-center z-10">
        <div className="max-w-4xl mx-auto space-y-4 animate-fade-in-up">
          {/* PREMIUM LIFE 배지 */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary text-xs md:text-sm font-bold tracking-widest uppercase">
              Premium Life
            </span>
          </div>

          {/* 메인 제목 */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            어나드범어가 선사하는
            <br className="hidden md:block" />{" "}
            <span className="text-primary">특별한 가치</span>
          </h2>

          {/* 서브타이틀 */}
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed pt-4">
            범어의 중심에서 만나는 하이엔드 라이프스타일.
            <br className="md:hidden" /> 당신의 삶을 완벽하게 채워줄 네 가지 프리미엄을 확인하세요.
          </p>
        </div>
      </header>

      {/* 특징 그리드 섹션 */}
      <main className="flex-grow w-full px-4 md:px-10 lg:px-20 pb-20 max-w-[1400px] mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[16/10] cursor-pointer ring-1 ring-white/10 hover:ring-primary/50 transition-all duration-500 shadow-2xl"
            >
              {/* 배경 이미지 */}
              <div className="absolute inset-0 bg-gray-900">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1 opacity-80"
                  src={feature.image}
                  alt={feature.title}
                />
              </div>

              {/* 그라데이션 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent opacity-90"></div>

              {/* 콘텐츠 */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col justify-end h-full">
                {/* 아이콘 (호버 시 나타남) */}
                <div className="mb-auto transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    {feature.icon}
                  </span>
                </div>

                {/* 텍스트 콘텐츠 */}
                <div className="space-y-3 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md transform translate-y-0 transition-transform duration-500">
                    {feature.description}
                  </p>

                  {/* Read More 링크 (호버 시 나타남) */}
                  <div className="pt-4 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span>Read More</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

