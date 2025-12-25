"use client";

import { useState } from "react";

interface TimelineItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  date: string;
  isActive: boolean;
}

export default function InterestRegistrationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    privacy: false,
  });

  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      icon: "home_work",
      title: "모델하우스 오픈",
      description: "그랜드 오픈 및 관람 시작",
      date: "10월 예정",
      isActive: true,
    },
    {
      id: 2,
      icon: "star",
      title: "특별공급 청약",
      description: "신혼부부/생애최초 등 특별공급 접수",
      date: "10월 20일",
      isActive: false,
    },
    {
      id: 3,
      icon: "how_to_vote",
      title: "1순위 청약",
      description: "청약홈(Applyhome) 인터넷 접수",
      date: "10월 21일",
      isActive: false,
    },
    {
      id: 4,
      icon: "emoji_events",
      title: "당첨자 발표",
      description: "개별 문자 안내 및 홈페이지 게시",
      date: "10월 28일",
      isActive: false,
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 로직
    console.log("Form submitted:", formData);
  };

  return (
    <div
      id="interest-registration"
      className="relative min-h-screen flex flex-col justify-center w-full bg-background-light dark:bg-background-dark"
    >
      {/* 장식 배경 패턴 */}
      <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10 z-0 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/40 blur-[100px]"></div>
        <div className="w-full h-full bg-[linear-gradient(rgba(236,182,19,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(236,182,19,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="layout-container relative z-10 flex h-full grow flex-col">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
            {/* 왼쪽 컬럼: 정보 & 일정 */}
            <div className="flex-1 w-full lg:sticky lg:top-20">
              {/* 헤드라인 섹션 */}
              <div className="mb-10 animate-fade-in-up">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider mb-4">
                  PREMIUM MEMBERSHIP
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight text-slate-900 dark:text-white">
                  어나드범어 프리미엄의 시작,
                  <br />
                  <span className="text-primary">지금 바로 등록하세요</span>
                </h2>
                <p className="text-slate-600 dark:text-text-gold text-lg leading-relaxed max-w-xl">
                  VIP 관심고객으로 등록하시면 청약 일정, 분양가, 모델하우스 오픈
                  정보를 가장 먼저 문자메시지로 받아보실 수 있습니다.
                </p>
              </div>

              {/* 연락처 정보 카드 */}
              <div className="mb-12 p-6 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-slate-500 dark:text-text-gold text-sm font-medium mb-1">
                      24시간 분양 문의
                    </p>
                    <h1 className="text-3xl lg:text-4xl font-bold text-primary tracking-[-0.02em]">
                      053-792-7777
                    </h1>
                  </div>
                  <a
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-background-dark hover:bg-white transition-colors duration-300"
                    href="tel:1600-0000"
                  >
                    <span className="material-symbols-outlined">call</span>
                  </a>
                </div>
              </div>

              {/* 타임라인 일정 */}
              <div className="relative pl-2">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-primary">
                    calendar_month
                  </span>
                  <span>분양 캘린더 (예정)</span>
                </h3>

                {/* 타임라인 스타일링 */}
                <div className="absolute left-[19px] top-14 bottom-4 w-[2px] bg-slate-200 dark:bg-[#332d19]"></div>

                <div className="space-y-8">
                  {timelineItems.map((item) => (
                    <div key={item.id} className="relative flex gap-6 group">
                      <div
                        className={`relative z-10 flex-none w-10 h-10 rounded-full bg-white dark:bg-surface-dark border-2 flex items-center justify-center shadow-lg transition-all duration-300 ${
                          item.isActive
                            ? "border-primary group-hover:scale-110"
                            : "border-slate-300 dark:border-[#4a4025] group-hover:border-primary"
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-sm transition-colors ${
                            item.isActive
                              ? "text-primary"
                              : "text-slate-400 dark:text-border-gold group-hover:text-primary"
                          }`}
                        >
                          {item.icon}
                        </span>
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                          <h4 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <span
                            className={`font-medium text-sm ${
                              item.isActive
                                ? "text-primary bg-primary/10 px-2 py-0.5 rounded"
                                : "text-slate-500 dark:text-text-gold"
                            }`}
                          >
                            {item.date}
                          </span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-text-gold">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 오른쪽 컬럼: 등록 폼 */}
            <div className="flex-1 w-full max-w-lg mx-auto lg:max-w-md">
              <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100 dark:border-[#4a4025] relative overflow-hidden group/form">
                {/* 골드 액센트 라인 */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60"></div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    관심고객 등록
                  </h3>
                  <p className="text-slate-500 dark:text-text-gold text-sm">
                    상담을 원하시는 고객님의 정보를 입력해 주세요.
                    <br />
                    담당자가 확인 후 신속하게 연락드리겠습니다.
                  </p>
                </div>

                <form
                  action="#"
                  className="space-y-6"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  {/* 성함 입력 */}
                  <div className="space-y-2 group/input">
                    <label
                      className="block text-sm font-semibold text-slate-700 dark:text-text-gold transition-colors group-focus-within/input:text-primary"
                      htmlFor="name"
                    >
                      성함
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-border-gold group-focus-within/input:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          person
                        </span>
                      </div>
                      <input
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-[#4a4025] rounded-lg leading-5 bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-border-gold focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-all shadow-sm"
                        id="name"
                        name="name"
                        placeholder="이름을 입력해주세요"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  {/* 연락처 입력 */}
                  <div className="space-y-2 group/input">
                    <label
                      className="block text-sm font-semibold text-slate-700 dark:text-text-gold transition-colors group-focus-within/input:text-primary"
                      htmlFor="phone"
                    >
                      연락처
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-border-gold group-focus-within/input:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          smartphone
                        </span>
                      </div>
                      <input
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-[#4a4025] rounded-lg leading-5 bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-border-gold focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-all shadow-sm"
                        id="phone"
                        name="phone"
                        placeholder="010-0000-0000"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  {/* 거주지역 선택 */}
                  <div className="space-y-2 group/input">
                    <label
                      className="block text-sm font-semibold text-slate-700 dark:text-text-gold transition-colors group-focus-within/input:text-primary"
                      htmlFor="location"
                    >
                      거주지역
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-border-gold group-focus-within/input:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          location_on
                        </span>
                      </div>
                      <select
                        className="block w-full pl-10 pr-10 py-3 border border-slate-200 dark:border-[#4a4025] rounded-lg leading-5 bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-all shadow-sm appearance-none"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                      >
                        <option className="text-gray-500" disabled value="">
                          지역을 선택해주세요
                        </option>
                        <option value="daegu">대구광역시</option>
                        <option value="gyeongbuk">경상북도</option>
                        <option value="other">기타 지역</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400 dark:text-border-gold">
                        <span className="material-symbols-outlined">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 개인정보 동의 체크박스 */}
                  <div className="pt-2">
                    <div className="relative flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          className="h-5 w-5 rounded border-slate-300 dark:border-[#4a4025] text-primary focus:ring-primary bg-slate-50 dark:bg-background-dark"
                          id="privacy"
                          name="privacy"
                          type="checkbox"
                          checked={formData.privacy}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          className="font-medium text-slate-700 dark:text-text-gold"
                          htmlFor="privacy"
                        >
                          <span className="text-primary font-bold">[필수]</span>{" "}
                          개인정보 수집 및 이용에 동의합니다.
                        </label>
                        <p className="text-slate-400 dark:text-border-gold mt-1 text-xs">
                          귀하의 정보는 분양정보 제공 목적으로만 사용됩니다.
                          <a
                            className="underline hover:text-primary ml-1"
                            href="#"
                          >
                            자세히 보기
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 제출 버튼 */}
                  <button
                    className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-background-dark bg-primary hover:bg-[#d9a60e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform hover:-translate-y-0.5 active:translate-y-0 mt-4"
                    type="submit"
                  >
                    관심고객 등록하기
                    <span className="material-symbols-outlined ml-2 text-lg">
                      arrow_forward
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
