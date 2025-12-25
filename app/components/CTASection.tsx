"use client";

import InterestRegistrationButton from "./InterestRegistrationButton";

export default function CTASection() {
  return (
    <section className="py-16 bg-neutral-100 dark:bg-surface-dark border-t border-neutral-200 dark:border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
          범어의 자부심, 지금 만나보세요
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
          프리미엄 라이프스타일의 시작. 자세한 분양 일정과 혜택을 안내해
          드립니다.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <InterestRegistrationButton />
          <button className="bg-white dark:bg-white/5 hover:bg-neutral-50 dark:hover:bg-white/10 text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/10 font-bold py-3 px-8 rounded-lg transition-all">
            문의전화 053-792-7777
          </button>
        </div>
      </div>
    </section>
  );
}
