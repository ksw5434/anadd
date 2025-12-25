"use client";

export default function LocationEnvironmentSection() {
  const features = [
    {
      id: 1,
      icon: "train",
      title: "쾌속 교통망",
      description:
        "대구 지하철 2호선 범어역 초역세권 프리미엄과 달구벌대로, KTX 동대구역이 인접한 사통팔달 교통의 요지입니다.",
      highlights: [
        "지하철 2호선 범어역 도보 3분",
        "동대구역 복합환승센터 인접",
      ],
    },
    {
      id: 2,
      icon: "school",
      title: "명문 학세권",
      description:
        "대구를 대표하는 범어동 학원가와 명문 초·중·고교가 도보권에 위치하여 자녀를 위한 최상의 교육 환경을 제공합니다.",
      highlights: [
        "범어동 명문 학원가 인접",
        "도보 통학 안심 학군",
      ],
    },
    {
      id: 3,
      icon: "park",
      title: "생활 인프라",
      description:
        "법원, 검찰청 등 행정타운과 백화점, 대형마트, 그리고 범어공원의 쾌적한 자연까지 모두 누리는 중심 생활권입니다.",
      highlights: [
        "범어공원 숲세권 힐링 라이프",
        "신세계백화점 및 관공서 인접",
      ],
    },
  ];

  const stats = [
    { value: "No.1", label: "범어동 입지 가치" },
    { value: "3min", label: "범어역 도보 거리" },
    { value: "Top", label: "명문 학군 중심" },
    { value: "Full", label: "완벽한 생활 인프라" },
  ];

  return (
    <main id="location-environment" className="flex-grow flex flex-col items-center w-full pb-20 bg-background-dark">
      {/* 헤더 텍스트 섹션 */}
      <section className="w-full max-w-[1280px] px-4 lg:px-10 pt-16 pb-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-4">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2">
            Premium Location
          </span>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            어나드범어의 <span className="text-primary">압도적 입지 가치</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mt-4">
            교육, 교통, 생활의 중심에서 누리는 프리미엄 라이프.
            <br className="hidden md:block" />
            대구의 자부심, 범어의 중심에서 가장 빛나는 삶이 시작됩니다.
          </p>
        </div>
      </section>

      {/* 메인 콘텐츠: 지도 & 상세 정보 */}
      <section className="w-full max-w-[1280px] px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 h-full">
          {/* 왼쪽 컬럼: 인프라 상세 정보 */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group bg-surface-dark/50 hover:bg-surface-dark border border-border-dark hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-4">
                  {/* 아이콘 */}
                  <div className="p-3 rounded-xl bg-background-dark text-primary group-hover:scale-110 transition-transform duration-300 border border-border-dark">
                    <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                  </div>

                  {/* 텍스트 콘텐츠 */}
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      {feature.id === 1 && (
                        <>
                          대구 지하철 2호선{" "}
                          <span className="text-white font-semibold">범어역 초역세권</span>{" "}
                          프리미엄과 달구벌대로, KTX 동대구역이 인접한 사통팔달 교통의 요지입니다.
                        </>
                      )}
                      {feature.id === 2 && (
                        <>
                          대구를 대표하는{" "}
                          <span className="text-white font-semibold">범어동 학원가</span>와 명문
                          초·중·고교가 도보권에 위치하여 자녀를 위한 최상의 교육 환경을 제공합니다.
                        </>
                      )}
                      {feature.id === 3 && (
                        <>
                          법원, 검찰청 등 행정타운과 백화점, 대형마트, 그리고{" "}
                          <span className="text-white font-semibold">범어공원</span>의 쾌적한
                          자연까지 모두 누리는 중심 생활권입니다.
                        </>
                      )}
                    </p>

                    {/* 하이라이트 리스트 */}
                    <ul className="space-y-1">
                      {feature.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                          <span className="material-symbols-outlined text-primary text-[16px]">
                            check_circle
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 오른쪽 컬럼: 지도 시각화 */}
          <div className="lg:col-span-7 relative h-[500px] lg:h-auto min-h-[500px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-border-dark shadow-2xl shadow-black/50">
              {/* 지도 이미지 */}
              <div
                className="w-full h-full bg-cover bg-center opacity-80 hover:opacity-100 transition-opacity duration-700"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAv8M86QbFQfpRrQqW9iq-WBs7RDhGM4v3ZRyv8PUCPP1KeOFV8sEA4uabzlo0rjuaHRCEXgPAJhFxIwL-9zIoAlokWnGHgYZDHC4m5Q_B8ih_KrEzgh6i7hgweN5ZJl4opxr4IZTinb2bcKB2eDT6N22jfu4i7Iflet2lFBouCA3CKXjcXaKICAq825_48qbyXxb6nPjT9ZdfD7cvNyIsuP4li_maCBbeKJFtHJkNmkJPxnieHuOJZF_UfSIMzpeF9qJuIO7jO8EbV')`,
                  filter: "grayscale(100%) sepia(20%) brightness(50%) contrast(120%)",
                }}
              ></div>

              {/* 오버레이 그라데이션 */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60"></div>

              {/* 메인 위치 핀 (펄스 효과) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10">
                <div className="relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <div className="relative inline-flex items-center justify-center p-3 rounded-full bg-primary text-background-dark shadow-[0_0_20px_rgba(236,182,19,0.6)]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                    </svg>
                  </div>
                </div>
                <div className="mt-2 px-4 py-2 bg-background-dark/90 backdrop-blur-md border border-primary/30 rounded-lg shadow-lg">
                  <span className="text-white font-bold text-sm whitespace-nowrap">
                    어나드범어 사업지
                  </span>
                </div>
              </div>

              {/* 지하철역 핀 */}
              <div className="absolute top-[60%] left-[30%] flex flex-col items-center group cursor-pointer opacity-80 hover:opacity-100 transition-opacity hover:z-20">
                <div className="p-1.5 bg-border-dark rounded-full border border-white/20 text-white shadow-lg">
                  <span className="material-symbols-outlined text-sm block">train</span>
                </div>
                <span className="mt-1 text-[10px] text-gray-300 font-medium bg-black/50 px-1.5 rounded">
                  범어역
                </span>
              </div>

              {/* 학교 핀 */}
              <div className="absolute top-[35%] left-[65%] flex flex-col items-center group cursor-pointer opacity-80 hover:opacity-100 transition-opacity hover:z-20">
                <div className="p-1.5 bg-border-dark rounded-full border border-white/20 text-white shadow-lg">
                  <span className="material-symbols-outlined text-sm block">school</span>
                </div>
                <span className="mt-1 text-[10px] text-gray-300 font-medium bg-black/50 px-1.5 rounded">
                  경신고
                </span>
              </div>

              {/* 공원 핀 */}
              <div className="absolute top-[20%] left-[40%] flex flex-col items-center group cursor-pointer opacity-80 hover:opacity-100 transition-opacity hover:z-20">
                <div className="p-1.5 bg-border-dark rounded-full border border-white/20 text-white shadow-lg">
                  <span className="material-symbols-outlined text-sm block">park</span>
                </div>
                <span className="mt-1 text-[10px] text-gray-300 font-medium bg-black/50 px-1.5 rounded">
                  범어공원
                </span>
              </div>

              {/* 지도 컨트롤 (줌 버튼) */}
              <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                <button className="w-10 h-10 bg-surface-dark border border-border-dark rounded-lg text-white hover:text-primary hover:border-primary flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </button>
                <button className="w-10 h-10 bg-surface-dark border border-border-dark rounded-lg text-white hover:text-primary hover:border-primary flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined">remove</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 추가 통계 스트립 */}
      <section className="w-full max-w-[1280px] px-4 lg:px-10 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-border-dark/50 border-t border-b border-border-dark py-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-2"
            >
              <span className="text-primary text-3xl font-bold mb-1">{stat.value}</span>
              <span className="text-gray-400 text-xs md:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

