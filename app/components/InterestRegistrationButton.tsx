"use client";

interface InterestRegistrationButtonProps {
  className?: string; // 추가 스타일링을 위한 className prop
  onClick?: () => void; // 클릭 핸들러 (선택사항)
}

/**
 * 관심고객등록 버튼 컴포넌트
 * 네비게이션 바에서 사용되는 CTA 버튼
 */
export default function InterestRegistrationButton({
  className = "",
  onClick,
}: InterestRegistrationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 bg-primary hover:bg-[#d9a60e] text-background-dark px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 ${className}`}
    >
      <span>관심고객등록</span>
      <span className="material-symbols-outlined text-sm">arrow_forward</span>
    </button>
  );
}


