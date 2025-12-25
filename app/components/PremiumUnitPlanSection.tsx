"use client";

import { useState } from "react";

interface UnitType {
  id: string;
  label: string;
  type: string;
  exclusiveArea: string;
  supplyArea: string;
  contractArea: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  floorPlanImage: string;
  interiorImage: string;
  isoViewImage: string;
}

export default function PremiumUnitPlanSection() {
  const [selectedUnit, setSelectedUnit] = useState("84A");

  const unitTypes: UnitType[] = [
    {
      id: "59",
      label: "59㎡",
      type: "59㎡ Type",
      exclusiveArea: "59.00",
      supplyArea: "78.00",
      contractArea: "120.00",
      description: "컴팩트한 효율 설계",
      features: [
        {
          title: "효율적인 공간 배치",
          description: "작은 면적에서도 최대한의 공간 활용을 위한 설계입니다.",
        },
        {
          title: "수납 공간 최적화",
          description: "벽면 수납과 다목적 공간으로 실용성을 높였습니다.",
        },
      ],
      floorPlanImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAY6e_EaEJowcnZvtBOhqIR94bO9cjq1zg6YtIr7FpSHfxXl1WVkrgpgyDrIRU5kRhgzNA0gT7JeqKuTvJ5u5GFz6-lt1T0zaQTEblNLj1K1-ftPbnzbxxhSma1FE-WCo6Vup4Bg6NQChUv060hUXUtaWNBbOFhg2SFE5MKQLVH2rwEXJtxpw9GAQImNrIg5-893bkVucZcjmTNZrEmo4Ip8PECTf0GCvyMBS23c6cWVfDvDAzptbkX9PT7w6GOJtbd3tO-89d--4V4",
      interiorImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAsRs1hzIzWWYKJYl95B9vWtC3ObZkxjFJh3Tb9hYhk5bJ5a1jHUW0U76sQIIQO0LEF2ManSvDpbYYa8d99zTCiD1QAgdEUG5QpJXizSXAzW-vZ_l9eZWJOQ1LibwfgZfdXIDEZn_iTOeuqDBHYa3_fcAsEHz7w_BT2uWttHeOS1v1bXkCkhuNDSNbgIUrIdCMpaipwYocbl4IWkQkd-yLp14nxX1eWUq8JLxVOsxsnrVaX3Syt7AxoNDboaDJj_iqaK34lSiLvHYts",
      isoViewImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBD6OnwiuoxaRzA96_0dZW2yzwGE0buLtBnqs5h4Df_IHrzMb1NLhhhn8VFJfTp83QhEJxAt_Ah-xphjYetjXLv1il0JYfY-uozB7vM_lon37k9EwqofOu2hOhbkQtWdBldryQJet83wt9ggnd1YbEAYfjHMwKDXyKTzv61oyx2sMAlSl6OtAkBgAywwYsCAtY_67aOR2QTM5dxQjEv7346OYcPt7gIDuDOblmIoXGVcIJG2nWNeXfJYFdL9c4Hhe3hhpqX-KkWHexb",
    },
    {
      id: "74",
      label: "74㎡",
      type: "74㎡ Type",
      exclusiveArea: "74.00",
      supplyArea: "98.00",
      contractArea: "145.00",
      description: "균형잡힌 공간 구성",
      features: [
        {
          title: "넓은 거실 공간",
          description: "가족이 함께 모일 수 있는 여유로운 거실을 제공합니다.",
        },
        {
          title: "분리형 침실",
          description: "프라이버시를 보장하는 독립적인 침실 공간입니다.",
        },
      ],
      floorPlanImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAY6e_EaEJowcnZvtBOhqIR94bO9cjq1zg6YtIr7FpSHfxXl1WVkrgpgyDrIRU5kRhgzNA0gT7JeqKuTvJ5u5GFz6-lt1T0zaQTEblNLj1K1-ftPbnzbxxhSma1FE-WCo6Vup4Bg6NQChUv060hUXUtaWNBbOFhg2SFE5MKQLVH2rwEXJtxpw9GAQImNrIg5-893bkVucZcjmTNZrEmo4Ip8PECTf0GCvyMBS23c6cWVfDvDAzptbkX9PT7w6GOJtbd3tO-89d--4V4",
      interiorImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAsRs1hzIzWWYKJYl95B9vWtC3ObZkxjFJh3Tb9hYhk5bJ5a1jHUW0U76sQIIQO0LEF2ManSvDpbYYa8d99zTCiD1QAgdEUG5QpJXizSXAzW-vZ_l9eZWJOQ1LibwfgZfdXIDEZn_iTOeuqDBHYa3_fcAsEHz7w_BT2uWttHeOS1v1bXkCkhuNDSNbgIUrIdCMpaipwYocbl4IWkQkd-yLp14nxX1eWUq8JLxVOsxsnrVaX3Syt7AxoNDboaDJj_iqaK34lSiLvHYts",
      isoViewImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBD6OnwiuoxaRzA96_0dZW2yzwGE0buLtBnqs5h4Df_IHrzMb1NLhhhn8VFJfTp83QhEJxAt_Ah-xphjYetjXLv1il0JYfY-uozB7vM_lon37k9EwqofOu2hOhbkQtWdBldryQJet83wt9ggnd1YbEAYfjHMwKDXyKTzv61oyx2sMAlSl6OtAkBgAywwYsCAtY_67aOR2QTM5dxQjEv7346OYcPt7gIDuDOblmIoXGVcIJG2nWNeXfJYFdL9c4Hhe3hhpqX-KkWHexb",
    },
    {
      id: "84A",
      label: "84㎡ A",
      type: "84㎡ A Type",
      exclusiveArea: "84.95",
      supplyArea: "112.50",
      contractArea: "164.23",
      description: "채광과 통풍이 우수한 4Bay 판상형 구조",
      features: [
        {
          title: "4Bay 판상형 맞통풍 설계",
          description: "채광과 환기가 우수하여 쾌적한 실내환경을 제공합니다.",
        },
        {
          title: "대형 팬트리 & 드레스룸",
          description: "넉넉한 수납공간 확보로 공간 활용성을 극대화했습니다.",
        },
        {
          title: "가변형 벽체 및 알파룸",
          description: "라이프스타일에 따라 공간을 자유롭게 구성할 수 있습니다.",
        },
        {
          title: "'ㄷ'자형 주방 설계",
          description: "효율적인 주방 동선과 넉넉한 조리 공간을 제공합니다.",
        },
      ],
      floorPlanImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAY6e_EaEJowcnZvtBOhqIR94bO9cjq1zg6YtIr7FpSHfxXl1WVkrgpgyDrIRU5kRhgzNA0gT7JeqKuTvJ5u5GFz6-lt1T0zaQTEblNLj1K1-ftPbnzbxxhSma1FE-WCo6Vup4Bg6NQChUv060hUXUtaWNBbOFhg2SFE5MKQLVH2rwEXJtxpw9GAQImNrIg5-893bkVucZcjmTNZrEmo4Ip8PECTf0GCvyMBS23c6cWVfDvDAzptbkX9PT7w6GOJtbd3tO-89d--4V4",
      interiorImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAsRs1hzIzWWYKJYl95B9vWtC3ObZkxjFJh3Tb9hYhk5bJ5a1jHUW0U76sQIIQO0LEF2ManSvDpbYYa8d99zTCiD1QAgdEUG5QpJXizSXAzW-vZ_l9eZWJOQ1LibwfgZfdXIDEZn_iTOeuqDBHYa3_fcAsEHz7w_BT2uWttHeOS1v1bXkCkhuNDSNbgIUrIdCMpaipwYocbl4IWkQkd-yLp14nxX1eWUq8JLxVOsxsnrVaX3Syt7AxoNDboaDJj_iqaK34lSiLvHYts",
      isoViewImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBD6OnwiuoxaRzA96_0dZW2yzwGE0buLtBnqs5h4Df_IHrzMb1NLhhhn8VFJfTp83QhEJxAt_Ah-xphjYetjXLv1il0JYfY-uozB7vM_lon37k9EwqofOu2hOhbkQtWdBldryQJet83wt9ggnd1YbEAYfjHMwKDXyKTzv61oyx2sMAlSl6OtAkBgAywwYsCAtY_67aOR2QTM5dxQjEv7346OYcPt7gIDuDOblmIoXGVcIJG2nWNeXfJYFdL9c4Hhe3hhpqX-KkWHexb",
    },
    {
      id: "84B",
      label: "84㎡ B",
      type: "84㎡ B Type",
      exclusiveArea: "84.50",
      supplyArea: "111.00",
      contractArea: "162.00",
      description: "확장형 구조 설계",
      features: [
        {
          title: "확장형 발코니",
          description: "넓은 발코니 공간으로 실외 활동 공간을 확보했습니다.",
        },
        {
          title: "오픈형 주방",
          description: "거실과 연결된 오픈형 주방으로 공간감을 높였습니다.",
        },
      ],
      floorPlanImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAY6e_EaEJowcnZvtBOhqIR94bO9cjq1zg6YtIr7FpSHfxXl1WVkrgpgyDrIRU5kRhgzNA0gT7JeqKuTvJ5u5GFz6-lt1T0zaQTEblNLj1K1-ftPbnzbxxhSma1FE-WCo6Vup4Bg6NQChUv060hUXUtaWNBbOFhg2SFE5MKQLVH2rwEXJtxpw9GAQImNrIg5-893bkVucZcjmTNZrEmo4Ip8PECTf0GCvyMBS23c6cWVfDvDAzptbkX9PT7w6GOJtbd3tO-89d--4V4",
      interiorImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAsRs1hzIzWWYKJYl95B9vWtC3ObZkxjFJh3Tb9hYhk5bJ5a1jHUW0U76sQIIQO0LEF2ManSvDpbYYa8d99zTCiD1QAgdEUG5QpJXizSXAzW-vZ_l9eZWJOQ1LibwfgZfdXIDEZn_iTOeuqDBHYa3_fcAsEHz7w_BT2uWttHeOS1v1bXkCkhuNDSNbgIUrIdCMpaipwYocbl4IWkQkd-yLp14nxX1eWUq8JLxVOsxsnrVaX3Syt7AxoNDboaDJj_iqaK34lSiLvHYts",
      isoViewImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBD6OnwiuoxaRzA96_0dZW2yzwGE0buLtBnqs5h4Df_IHrzMb1NLhhhn8VFJfTp83QhEJxAt_Ah-xphjYetjXLv1il0JYfY-uozB7vM_lon37k9EwqofOu2hOhbkQtWdBldryQJet83wt9ggnd1YbEAYfjHMwKDXyKTzv61oyx2sMAlSl6OtAkBgAywwYsCAtY_67aOR2QTM5dxQjEv7346OYcPt7gIDuDOblmIoXGVcIJG2nWNeXfJYFdL9c4Hhe3hhpqX-KkWHexb",
    },
    {
      id: "114",
      label: "114㎡",
      type: "114㎡ Type",
      exclusiveArea: "114.00",
      supplyArea: "150.00",
      contractArea: "220.00",
      description: "프리미엄 와이드 타입",
      features: [
        {
          title: "와이드형 거실",
          description: "넓고 여유로운 거실 공간으로 프리미엄 라이프를 제공합니다.",
        },
        {
          title: "마스터 침실",
          description: "독립적인 욕실과 드레스룸을 갖춘 마스터 침실입니다.",
        },
        {
          title: "다목적 공간",
          description: "서재, 취미 공간 등으로 활용 가능한 다목적 공간입니다.",
        },
      ],
      floorPlanImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAY6e_EaEJowcnZvtBOhqIR94bO9cjq1zg6YtIr7FpSHfxXl1WVkrgpgyDrIRU5kRhgzNA0gT7JeqKuTvJ5u5GFz6-lt1T0zaQTEblNLj1K1-ftPbnzbxxhSma1FE-WCo6Vup4Bg6NQChUv060hUXUtaWNBbOFhg2SFE5MKQLVH2rwEXJtxpw9GAQImNrIg5-893bkVucZcjmTNZrEmo4Ip8PECTf0GCvyMBS23c6cWVfDvDAzptbkX9PT7w6GOJtbd3tO-89d--4V4",
      interiorImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAsRs1hzIzWWYKJYl95B9vWtC3ObZkxjFJh3Tb9hYhk5bJ5a1jHUW0U76sQIIQO0LEF2ManSvDpbYYa8d99zTCiD1QAgdEUG5QpJXizSXAzW-vZ_l9eZWJOQ1LibwfgZfdXIDEZn_iTOeuqDBHYa3_fcAsEHz7w_BT2uWttHeOS1v1bXkCkhuNDSNbgIUrIdCMpaipwYocbl4IWkQkd-yLp14nxX1eWUq8JLxVOsxsnrVaX3Syt7AxoNDboaDJj_iqaK34lSiLvHYts",
      isoViewImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBD6OnwiuoxaRzA96_0dZW2yzwGE0buLtBnqs5h4Df_IHrzMb1NLhhhn8VFJfTp83QhEJxAt_Ah-xphjYetjXLv1il0JYfY-uozB7vM_lon37k9EwqofOu2hOhbkQtWdBldryQJet83wt9ggnd1YbEAYfjHMwKDXyKTzv61oyx2sMAlSl6OtAkBgAywwYsCAtY_67aOR2QTM5dxQjEv7346OYcPt7gIDuDOblmIoXGVcIJG2nWNeXfJYFdL9c4Hhe3hhpqX-KkWHexb",
    },
  ];

  const currentUnit = unitTypes.find((unit) => unit.id === selectedUnit) || unitTypes[2];

  return (
    <div id="premium-unit-plan" className="layout-container flex h-full grow flex-col bg-background-light dark:bg-background-dark">
      {/* 헤더 섹션 */}
      <header className="w-full px-4 md:px-8 py-12 md:py-20 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">
            Premium Residence
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4 text-gray-900 dark:text-white">
            PREMIUM UNIT PLAN
          </h1>
          <p className="text-gray-600 dark:text-text-gold text-lg md:text-xl font-light">
            당신의 라이프스타일에 맞춘 혁신 설계
            <br className="hidden md:inline" />
            <span className="text-sm md:text-base opacity-80 mt-2 block md:inline md:mt-0">
              공간의 미학을 담은 어나드범어의 평면을 소개합니다.
            </span>
          </p>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-20">
        {/* 탭 네비게이션 */}
        <div className="mb-12 border-b border-border-gold/30">
          <nav
            aria-label="Tabs"
            className="flex gap-8 overflow-x-auto scrollbar-hide w-full justify-start md:justify-center px-4"
          >
            {unitTypes.map((unit) => (
              <button
                key={unit.id}
                onClick={() => setSelectedUnit(unit.id)}
                className={`group flex flex-col items-center min-w-[60px] pb-4 border-b-[3px] transition-colors ${
                  selectedUnit === unit.id
                    ? "border-primary"
                    : "border-transparent hover:border-primary/50"
                }`}
              >
                <span
                  className={`text-base font-bold transition-colors ${
                    selectedUnit === unit.id
                      ? "text-primary text-lg font-extrabold"
                      : "text-gray-500 dark:text-text-gold group-hover:text-primary"
                  }`}
                >
                  {unit.label}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* 콘텐츠 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* 왼쪽 컬럼: 이미지 */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* 메인 평면도 이미지 */}
            <div className="relative bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-border-gold/30 aspect-[4/3] group">
              <div className="absolute inset-0 p-8 flex items-center justify-center bg-white">
                <img
                  alt={`${currentUnit.type} Floor Plan`}
                  className="w-full h-full object-contain opacity-90 transition-transform duration-500 group-hover:scale-105"
                  src={currentUnit.floorPlanImage}
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-background-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-border-gold/50 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">zoom_in</span>
                <span className="text-xs text-white font-medium">크게 보기</span>
              </div>
            </div>

            {/* 썸네일 / ISO 뷰 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-dark rounded-lg overflow-hidden border border-border-gold/20 aspect-video relative cursor-pointer hover:border-primary transition-colors group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${currentUnit.interiorImage}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white font-bold tracking-wider text-sm border border-white/30 px-3 py-1 rounded backdrop-blur-sm">
                    INTERIOR
                  </span>
                </div>
              </div>
              <div className="bg-surface-dark rounded-lg overflow-hidden border border-border-gold/20 aspect-video relative cursor-pointer hover:border-primary transition-colors group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${currentUnit.isoViewImage}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white font-bold tracking-wider text-sm border border-white/30 px-3 py-1 rounded backdrop-blur-sm">
                    ISO VIEW
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽 컬럼: 상세 정보 */}
          <div className="lg:col-span-5 flex flex-col h-full">
            {/* 타입 정보 블록 */}
            <div className="mb-8 border-b border-border-gold/30 pb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full border border-primary/30">
                  주거전용
                </span>
                {currentUnit.id === "84A" || currentUnit.id === "84B" ? (
                  <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-bold rounded-full border border-white/10">
                    확장형
                  </span>
                ) : null}
              </div>
              <h2 className="text-4xl font-extrabold text-white mb-2">
                {currentUnit.type.split(" ")[0]}{" "}
                {currentUnit.type.includes("A") || currentUnit.type.includes("B") ? (
                  <span className="text-primary">{currentUnit.type.split(" ")[1]}</span>
                ) : (
                  <span className="text-primary">Type</span>
                )}
              </h2>
              <p className="text-text-gold text-sm font-medium">{currentUnit.description}</p>
            </div>

            {/* 면적 정보 그리드 */}
            <div className="bg-surface-dark rounded-xl p-6 border border-border-gold/20 mb-8">
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div className="border-r border-border-gold/20 pr-4">
                  <p className="text-text-gold text-xs mb-1">전용면적</p>
                  <p className="text-white text-xl font-bold font-display">
                    {currentUnit.exclusiveArea}
                    <span className="text-sm font-normal ml-1 text-gray-400">㎡</span>
                  </p>
                </div>
                <div className="pl-4">
                  <p className="text-text-gold text-xs mb-1">공급면적</p>
                  <p className="text-white text-xl font-bold font-display">
                    {currentUnit.supplyArea}
                    <span className="text-sm font-normal ml-1 text-gray-400">㎡</span>
                  </p>
                </div>
                <div className="col-span-2 border-t border-border-gold/20 pt-4 flex justify-between items-center">
                  <p className="text-text-gold text-xs">계약면적</p>
                  <p className="text-white text-lg font-bold">
                    {currentUnit.contractArea}
                    <span className="text-sm font-normal ml-1 text-gray-400">㎡</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 주요 특징 리스트 */}
            <div className="flex-grow">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">verified</span>
                Key Features
              </h3>
              <ul className="space-y-4 mb-10">
                {currentUnit.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <span className="bg-primary/10 text-primary rounded-full p-1 mt-0.5 group-hover:bg-primary group-hover:text-black transition-colors">
                      <span className="material-symbols-outlined text-sm block">check</span>
                    </span>
                    <div>
                      <strong className="text-gray-200 block text-sm mb-0.5">
                        {feature.title}
                      </strong>
                      <p className="text-gray-500 text-sm">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button className="flex-1 bg-primary hover:bg-yellow-500 text-background-dark font-bold py-4 px-6 rounded-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined">360</span>
                e-모델하우스 보기
              </button>
              <button className="flex-1 bg-transparent border border-primary/50 text-primary hover:bg-primary/10 font-bold py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">calculate</span>
                분양가 확인하기
              </button>
            </div>
          </div>
        </div>

        {/* 디스클레이머 */}
        <div className="mt-16 pt-8 border-t border-border-gold/20">
          <p className="text-gray-500 dark:text-gray-600 text-xs leading-relaxed">
            ※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.
            <br />
            ※ 평면도, 아이소메트릭, 인테리어 이미지는 인허가 과정이나 실제 시공 시 변경될 수 있습니다.
            <br />
            ※ 발코니 확장에 따른 마감재 내역 등은 견본주택에서 반드시 확인하시기 바랍니다.
          </p>
        </div>
      </main>
    </div>
  );
}

