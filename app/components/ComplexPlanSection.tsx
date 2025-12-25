"use client";

import Image from "next/image";

export default function ComplexPlanSection() {
  return (
    <section
      id="complex-plan"
      className="layout-container flex h-full grow flex-col py-20 md:py-28 relative overflow-hidden"
    >
      {/* 고정 배경 이미지 레이어 - 스크롤과 무관하게 고정 */}
      <div
        className="inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: "url(/display_img05.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* 배경 오버레이 - 콘텐츠 가독성을 위한 반투명 레이어 */}
      <div className="fixed inset-0 bg-background-light/30 dark:bg-background-dark/20 -z-[9]"></div>
      {/* 헤더 섹션 */}
      <header className="relative z-10 w-full px-4 md:px-8 mb-12 md:mb-16 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">
            Complex Plan
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4 text-gray-900 dark:text-white">
            단지 배치도
          </h2>
          <p className="text-gray-600 dark:text-text-gold text-lg md:text-xl font-light">
            어나드범어의 혁신적인 단지 설계를 확인하세요
            <br className="hidden md:inline" />
            <span className="text-sm md:text-base opacity-80 mt-2 block md:inline md:mt-0">
              최적의 배치로 완성된 프리미엄 라이프스타일
            </span>
          </p>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* 단지 배치도 이미지 영역 */}
        <div className="relative bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-border-gold/30 mb-8 group">
          {/* 장식 요소 */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl z-0 hidden md:block"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/30 rounded-br-3xl z-0 hidden md:block"></div>

          {/* 배치도 이미지 컨테이너 */}
          <div className="relative z-10 w-full h-[1580px]  p-8 md:p-12 bg-white flex items-center justify-center ">
            {/* 실제 배치도 이미지 */}

            <div className="w-full h-full relative rounded-xl overflow-hidden ">
              <Image
                src="https://www.anadd.co.kr/sub/complex.jpg"
                alt="어나드범어 단지 배치도"
                fill
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* 추가 정보 카드 그리드 */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* 커뮤니티 시설 카드 */}
          <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-border-gold/30 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary text-2xl">
                  fitness_center
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                커뮤니티
              </h3>
            </div>
            <p className="text-gray-600 dark:text-text-gold text-sm leading-relaxed">
              프리미엄 라이프스타일을 위한 다양한 커뮤니티 시설을 갖춘 단지 설계
            </p>
          </div>

          {/* AiQ 시스템 카드 */}
          <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-border-gold/30 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary text-2xl">
                  smart_home
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                AiQ 시스템
              </h3>
            </div>
            <p className="text-gray-600 dark:text-text-gold text-sm leading-relaxed">
              스마트 홈 시스템으로 편리하고 안전한 생활 환경을 제공합니다
            </p>
          </div>

          {/* 이동통신 설비 카드 */}
          <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-border-gold/30 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary text-2xl">
                  signal_cellular_alt
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                이동통신 설비
              </h3>
            </div>
            <p className="text-gray-600 dark:text-text-gold text-sm leading-relaxed">
              최적의 통신 환경을 위한 이동통신 설비 협의 완료
            </p>
          </div>
        </div>

        {/* 디스클레이머 */}
        <div className="mt-12 pt-8 border-t border-border-gold/20">
          <div className="bg-gray-50 dark:bg-surface-dark/50 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-border-gold/20">
            <p className="text-gray-600 dark:text-text-gold text-xs md:text-sm leading-relaxed">
              ※ 상기 단지 배치도 및 동호 배치표는 소비자의 이해를 돕기 위해
              제작된 것으로 실제와 다를 수 있습니다.
              <br />
              ※ 본 웹페이지에 기재된 내용은 소비자의 이해를 돕기 위한 것으로
              제작 과정상 오류가 있을 수 있으니 반드시 견본주택에서 확인하시기
              바랍니다.
              <br />※ 설계 및 개발계획 관련 내용은 인허가 과정 및 해당기관 또는
              지자체의 사정에 따라 변경될 수 있습니다.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
