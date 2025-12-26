import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ChannelTalk from "./components/channel-talk/channel-talk";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "어나드범어 | 대구 수성구 범어동 프리미엄 아파트",
    template: "%s | 어나드범어",
  },
  description:
    "대구 수성구 범어동에 위치한 어나드범어 프리미엄 아파트. 범어역 도보 3분, 명문 학군, 하이엔드 커뮤니티 시설을 갖춘 프리미엄 라이프스타일의 시작.",
  keywords: [
    "어나드범어",
    "Anadeu Beomeo",
    "대구 아파트",
    "수성구 아파트",
    "범어동 아파트",
    "범어역 아파트",
    "대구 분양",
    "수성구 분양",
    "범어동 분양",
    "프리미엄 아파트",
    "하이엔드 아파트",
    "대구 신축 아파트",
    "범어역 역세권",
    "명문 학군 아파트",
    "대구 청약",
    "어나드범어 분양가",
    "어나드범어 모델하우스",
    "어나드범어 평면도",
    "어나드범어 입지환경",
  ],
  authors: [{ name: "어나드범어" }],
  creator: "어나드범어",
  publisher: "어나드범어",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // 메타데이터 베이스 URL 설정 (절대 경로 이미지 URL 생성에 사용)
  metadataBase: new URL("https://anadeubeomeo.com"), // 실제 도메인으로 변경 필요
  alternates: {
    canonical: "/",
  },
  // 오픈 그래프 메타 태그 - 네이버 검색 및 소셜 미디어 공유 최적화
  openGraph: {
    type: "website", // 웹사이트 타입 지정
    locale: "ko_KR", // 한국어 로케일 설정
    url: "https://anadeubeomeo.com", // 페이지의 정규화된 URL (실제 도메인으로 변경 필요)
    siteName: "어나드범어", // 사이트 이름
    title: "어나드범어 | 대구 수성구 범어동 프리미엄 아파트",
    description:
      "대구 수성구 범어동에 위치한 어나드범어 프리미엄 아파트. 범어역 도보 3분, 명문 학군, 하이엔드 커뮤니티 시설을 갖춘 프리미엄 라이프스타일의 시작.",
    images: [
      {
        // 오픈 그래프 이미지 설정
        // 네이버 가이드라인: 150x150 이상, 5KB 이상, 가로:세로 비율 3:1 이하
        url: "/og-image.jpg", // OG 이미지 경로 (public/og-image.jpg 파일 필요)
        width: 1200, // 이미지 너비 (150 이상 요구사항 충족)
        height: 630, // 이미지 높이 (비율 1.9:1로 3:1 요구사항 충족)
        alt: "어나드범어 프리미엄 아파트", // 이미지 대체 텍스트
        type: "image/jpeg", // 이미지 타입 명시
      },
    ],
  },
  // Twitter 카드 메타 태그 - 트위터 공유 최적화
  twitter: {
    card: "summary", // 네이버 가이드라인 권장 타입 (summary 또는 summary_large_image)
    title: "어나드범어 | 대구 수성구 범어동 프리미엄 아파트",
    description:
      "대구 수성구 범어동에 위치한 어나드범어 프리미엄 아파트. 범어역 도보 3분, 명문 학군, 하이엔드 커뮤니티 시설을 갖춘 프리미엄 라이프스타일의 시작.",
    images: ["https://anadeubeomeo.com/og-image.jpg"], // 절대 URL 사용 권장
    // domain: "anadeubeomeo.com", // 사이트 도메인 (선택사항)
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Google Search Console 인증 코드로 변경 필요
  },
  // 추가 SEO 메타 태그
  other: {
    "geo.region": "KR-27",
    "geo.placename": "대구광역시 수성구 범어동",
    "geo.position": "35.8594;128.6314",
    ICBM: "35.8594, 128.6314",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <head>
        <meta
          name="naver-site-verification"
          content="0a1ff8b14db2b099d06ba63eb0057daf833fa6ed"
        />
        <meta
          name="naver-site-verification"
          content="4850c829c9ed8dda6884201e1398a2bb61c27a91"
        />

        {/* Vimeo 도메인 사전 연결 - 비디오 로딩 속도 최적화 */}
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
        {/* Material Symbols 폰트 로드 */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased relative bg-background-light dark:bg-background-dark font-display text-white overflow-x-hidden`}
      >
        {children}
        <ScrollToTopButton />
        <ChannelTalk />
      </body>
    </html>
  );
}
