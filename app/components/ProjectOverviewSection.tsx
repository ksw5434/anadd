"use client";

export default function ProjectOverviewSection() {
  return (
    <section className="py-20 px-6 lg:px-10 bg-background-light dark:bg-background-dark">
      <div className="max-w-[1120px] mx-auto">
        {/* 섹션 헤딩 */}
        <div className="mb-12 md:mb-16 border-l-4 border-primary pl-6">
          <h3 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">
            Project Overview
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
            사업개요
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-lg">
            대구의 새로운 랜드마크, 어나드범어의 가치를 확인하세요.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* 왼쪽 컬럼: 이미지 */}
          <div className="relative group">
            {/* 장식 요소 */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl z-0 hidden md:block"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/30 rounded-br-3xl z-0 hidden md:block"></div>

            {/* 메인 이미지 */}
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl shadow-black/50 aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMi5ClXbAHJUkKP0rQAN08DtyU7rLPLln94qc-Quy5aG7TZfc7mGtvd0mjAiXHwiEAdCrYbZl6V0j9sThUvToG1UzULRaA0sp3y3d5QXJCN11sBmNFoAErGYWCMjhiHOtxylZQLjYQrJRqc17uCgA9_O3BKwPcjs-7D6qtXadOmKk4lsinKkTW691OF1s0uzOJHogHUabvz_F9kW5NXHByXBwZdpOpniSfjswe2MJnpU8h2v0BexTxrTHfWOTWONIep8_6lPNgit7x")`,
                }}
              />

              {/* 플로팅 배지 */}
              <div className="absolute bottom-6 left-6 right-6 bg-surface-dark/95 backdrop-blur border border-white/10 p-4 rounded-xl shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider">
                    Premium Location
                  </p>
                  <p className="text-white font-bold">수성구 범어동</p>
                </div>
                <div className="bg-primary/20 p-2 rounded-full text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽 컬럼: 데이터 리스트 */}
          <div className="flex flex-col h-full justify-center">
            <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 md:p-10 shadow-xl border border-neutral-100 dark:border-white/5">
              {/* 리스트 아이템 1: 사업명 */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-5 border-b border-neutral-200 dark:border-white/10 group">
                <div className="flex items-center gap-3 w-32 shrink-0 mb-1 sm:mb-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    domain
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400 font-medium text-sm">
                    사업명
                  </span>
                </div>
                <div className="flex-1 sm:text-right">
                  <span className="text-neutral-900 dark:text-white font-bold text-lg group-hover:text-primary transition-colors">
                    어나드범어 신축공사
                  </span>
                </div>
              </div>

              {/* 리스트 아이템 2: 대지위치 */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-5 border-b border-neutral-200 dark:border-white/10 group">
                <div className="flex items-center gap-3 w-32 shrink-0 mb-1 sm:mb-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    map
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400 font-medium text-sm">
                    대지위치
                  </span>
                </div>
                <div className="flex-1 sm:text-right">
                  <span className="text-neutral-900 dark:text-white font-medium">
                    대구광역시 수성구 범어동 일원
                  </span>
                </div>
              </div>

              {/* 리스트 아이템 3: 건축규모 */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-5 border-b border-neutral-200 dark:border-white/10 group">
                <div className="flex items-center gap-3 w-32 shrink-0 mb-1 sm:mb-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    straighten
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400 font-medium text-sm">
                    건축규모
                  </span>
                </div>
                <div className="flex-1 sm:text-right">
                  <span className="text-neutral-900 dark:text-white font-medium">
                    지하 6층 ~ 지상 37층
                  </span>
                </div>
              </div>

              {/* 리스트 아이템 4: 세대수 */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-5 border-b border-neutral-200 dark:border-white/10 group">
                <div className="flex items-center gap-3 w-32 shrink-0 mb-1 sm:mb-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    groups
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400 font-medium text-sm">
                    세대수
                  </span>
                </div>
                <div className="flex-1 sm:text-right">
                  <span className="text-neutral-900 dark:text-white font-medium">
                    아파트 <span className="text-primary font-bold">000</span>
                    세대 / 오피스텔{" "}
                    <span className="text-primary font-bold">000</span>실
                  </span>
                </div>
              </div>

              {/* 리스트 아이템 5: 대지면적 */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-5 group">
                <div className="flex items-center gap-3 w-32 shrink-0 mb-1 sm:mb-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    aspect_ratio
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400 font-medium text-sm">
                    대지면적
                  </span>
                </div>
                <div className="flex-1 sm:text-right">
                  <span className="text-neutral-900 dark:text-white font-medium">
                    0,000.00㎡
                  </span>
                </div>
              </div>
            </div>

            {/* 미니 CTA */}
            <div className="mt-8 flex justify-end">
              <a
                className="inline-flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-primary transition-colors text-sm font-semibold"
                href="#"
              >
                <span>상세 배치도 보기</span>
                <span className="material-symbols-outlined text-base">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
