"use client";

import { useState } from "react";

interface UnitType {
  id: string;
  label: string;

  floorPlanImage: string;
}

export default function PremiumUnitPlanSection() {
  const [selectedUnit, setSelectedUnit] = useState("84A");

  const unitTypes: UnitType[] = [
    {
      id: "136",
      label: "136",
      floorPlanImage: "https://www.anadd.co.kr/sub/unit01.jpg",
    },
    {
      id: "139",
      label: "139",
      floorPlanImage: "https://www.anadd.co.kr/sub/unit02.jpg",
    },
    {
      id: "153A",
      label: "153A",
      floorPlanImage: "https://www.anadd.co.kr/sub/unit03.jpg",
    },
    {
      id: "153B",
      label: "153B",
      floorPlanImage: "https://www.anadd.co.kr/sub/unit04.jpg",
    },
    {
      id: "153C",
      label: "153C",
      floorPlanImage: "https://www.anadd.co.kr/sub/unit05.jpg",
    },
    {
      id: "156A1",
      label: "156A1",
      floorPlanImage: "https://www.anadd.co.kr/sub/unit06.jpg",
    },
    {
      id: "156A2",
      label: "156A2",
      floorPlanImage: "https://www.anadd.co.kr/sub/unit07.jpg",
    },
    {
      id: "156B",
      label: "156B",
      floorPlanImage: "https://www.anadd.co.kr/sub/unit08.jpg",
    },
    {
      id: "156C",
      label: "156C",
      floorPlanImage: "https://www.anadd.co.kr/sub/unit09.jpg",
    },
    {
      id: "160",
      label: "160",
      floorPlanImage: "https://www.anadd.co.kr/sub/unit10.jpg",
    },
    {
      id: "168",
      label: "168",
      floorPlanImage: "https://www.anadd.co.kr/sub/unit11.jpg",
    },
    {
      id: "170",
      label: "170",
      floorPlanImage: "https://www.anadd.co.kr/sub/unit12.jpg",
    },
    {
      id: "226P",
      label: "226P",
      floorPlanImage: "https://www.anadd.co.kr/sub/unit13.jpg",
    },
    {
      id: "244P",
      label: "244P",
      floorPlanImage: "https://www.anadd.co.kr/sub/unit14.jpg",
    },
  ];

  const currentUnit =
    unitTypes.find((unit) => unit.id === selectedUnit) || unitTypes[2];

  return (
    <div
      id="premium-unit-plan"
      className="layout-container flex h-full grow flex-col bg-background-light dark:bg-background-dark"
    >
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
            className="flex gap-4 overflow-x-auto scrollbar-hide w-full justify-start md:justify-center px-4"
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
        <div className="">
          {/* 왼쪽 컬럼: 이미지 */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* 메인 평면도 이미지 */}
            <div className="relative bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-border-gold/30 aspect-[4/3] group">
              <div className="absolute inset-0 p-8 flex items-center justify-center bg-white">
                <img
                  alt={`${currentUnit.id} Floor Plan`}
                  className="w-full h-full object-contain opacity-90 transition-transform duration-500 group-hover:scale-105"
                  src={currentUnit.floorPlanImage}
                />
              </div>
            </div>

            {/* 썸네일 / ISO 뷰 */}
          </div>

          {/* 오른쪽 컬럼: 상세 정보 */}
        </div>

        {/* 디스클레이머 */}
        <div className="mt-16 pt-8 border-t border-border-gold/20">
          <p className="text-gray-500 dark:text-gray-600 text-xs leading-relaxed">
            ※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을
            수 있습니다.
            <br />
            ※ 평면도, 아이소메트릭, 인테리어 이미지는 인허가 과정이나 실제 시공
            시 변경될 수 있습니다.
            <br />※ 발코니 확장에 따른 마감재 내역 등은 견본주택에서 반드시
            확인하시기 바랍니다.
          </p>
        </div>
      </main>
    </div>
  );
}
