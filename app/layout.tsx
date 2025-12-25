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
    "대구 수성구 범어동에 위치한 어나드범어 프리미엄 아파트. 범어역 도보 3분, 명문 학군, 하이엔드 커뮤니티 시설을 갖춘 프리미엄 라이프스타일의 시작. 청약 일정 및 분양 정보 안내.",
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
  metadataBase: new URL("https://anadeubeomeo.com"), // 실제 도메인으로 변경 필요
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://anadeubeomeo.com", // 실제 도메인으로 변경 필요
    siteName: "어나드범어",
    title: "어나드범어 | 대구 수성구 범어동 프리미엄 아파트",
    description:
      "대구 수성구 범어동에 위치한 어나드범어 프리미엄 아파트. 범어역 도보 3분, 명문 학군, 하이엔드 커뮤니티 시설을 갖춘 프리미엄 라이프스타일의 시작.",
    images: [
      {
        url: "/og-image.jpg", // OG 이미지 경로 (추후 추가 필요)
        width: 1200,
        height: 630,
        alt: "어나드범어 프리미엄 아파트",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "어나드범어 | 대구 수성구 범어동 프리미엄 아파트",
    description:
      "대구 수성구 범어동에 위치한 어나드범어 프리미엄 아파트. 범어역 도보 3분, 명문 학군, 하이엔드 커뮤니티 시설.",
    images: ["/og-image.jpg"],
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
