"use client";

import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import HeroHeaderSection from "./components/HeroHeaderSection";
import ProjectOverviewSection from "./components/ProjectOverviewSection";
import CTASection from "./components/CTASection";
import VideoSwiperSection from "./components/VideoSwiperSection";
import PremiumLifeSection from "./components/PremiumLifeSection";
import ContactCTASection from "./components/ContactCTASection";
import PremiumUnitPlanSection from "./components/PremiumUnitPlanSection";
import ComplexPlanSection from "./components/ComplexPlanSection";
import LocationEnvironmentSection from "./components/LocationEnvironmentSection";
import GallerySection from "./components/GallerySection";
import InterestRegistrationSection from "./components/InterestRegistrationSection";
import Footer from "./components/Footer";

export default function Home() {
  // 구조화된 데이터 (JSON-LD) - SEO 최적화
  // 여러 스키마 타입을 사용하여 검색 엔진 최적화 강화

  // 1. ResidentialComplex 스키마 - 아파트 정보
  const residentialComplexData = {
    "@context": "https://schema.org",
    "@type": "ResidentialComplex",
    name: "어나드범어",
    alternateName: "Anadeu Beomeo",
    description:
      "대구 수성구 범어동에 위치한 어나드범어 프리미엄 아파트. 범어역 도보 1분, 명문 학군, 하이엔드 커뮤니티 시설을 갖춘 프리미엄 라이프스타일의 시작.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "범어동",
      addressRegion: "수성구",
      addressCountry: "KR",
      streetAddress: "대구광역시 수성구 범어동 일원",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "35.8594",
      longitude: "128.6314",
    },
    telephone: "010-2735-5664",
    url: "https://anadeubeomeo.com",
    sameAs: [],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "지하철역",
        value: "범어역 도보 1분",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "명문 학군",
        value: "범어동 학원가 인접",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "커뮤니티 시설",
        value: "피트니스, 골프연습장, 프라이빗 라운지",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "호텔식 컨시어지",
        value: "24시간 컨시어지 서비스",
      },
    ],
    numberOfBedrooms: "2-4",
    numberOfBathroomsTotal: "2-3",
    floorSize: {
      "@type": "QuantitativeValue",
      value: "59-114",
      unitCode: "MTK",
    },
  };

  // 2. Organization 스키마 - 사업자 정보
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "어나드범어",
    alternateName: "Anadeu Beomeo",
    url: "https://anadeubeomeo.com",
    logo: "https://anadeubeomeo.com/land_logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "010-2735-5664",
      contactType: "분양 문의",
      areaServed: "KR",
      availableLanguage: "Korean",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "범어동",
      addressRegion: "수성구",
      addressCountry: "KR",
      streetAddress: "대구광역시 수성구 범어동 일원",
    },
  };

  // 3. LocalBusiness 스키마 - 로컬 SEO 강화
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "어나드범어 분양센터",
    alternateName: "Anadeu Beomeo Sales Center",
    image: "https://anadeubeomeo.com/land_logo.png",
    telephone: "010-2735-5664",
    address: {
      "@type": "PostalAddress",
      addressLocality: "범어동",
      addressRegion: "수성구",
      addressCountry: "KR",
      streetAddress: "대구광역시 수성구 범어동 일원",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "35.8594",
      longitude: "128.6314",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
  };

  // 4. BreadcrumbList 스키마 - 검색 결과에 경로 표시
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: "https://anadeubeomeo.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "어나드범어",
        item: "https://anadeubeomeo.com",
      },
    ],
  };

  // 5. FAQPage 스키마 - 자주 묻는 질문 (검색 결과에 FAQ 표시)
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "어나드범어는 어디에 위치해 있나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "어나드범어는 대구광역시 수성구 범어동에 위치한 프리미엄 아파트입니다. 범어역 도보 1분 거리에 있어 교통이 매우 편리합니다.",
        },
      },
      {
        "@type": "Question",
        name: "어나드범어 분양 문의는 어떻게 하나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "어나드범어 분양 문의는 010-2735-5664로 연락하시거나, 웹사이트의 관심고객 등록 섹션에서 온라인으로 등록하실 수 있습니다.",
        },
      },
      {
        "@type": "Question",
        name: "어나드범어의 주요 특징은 무엇인가요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "어나드범어는 범어역 역세권, 명문 학군, 호텔식 컨시어지 서비스, 하이엔드 커뮤니티 시설(피트니스, 골프연습장, 프라이빗 라운지)을 갖춘 프리미엄 아파트입니다.",
        },
      },
      {
        "@type": "Question",
        name: "어나드범어의 세대수와 평형대는 어떻게 되나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "어나드범어는 공동주택 604세대와 오피스텔 146실로 구성되어 있으며, 59㎡부터 114㎡까지 다양한 평형대를 제공합니다.",
        },
      },
    ],
  };

  return (
    <>
      {/* 구조화된 데이터 (JSON-LD) - SEO 최적화 */}
      {/* ResidentialComplex 스키마 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(residentialComplexData),
        }}
      />
      {/* Organization 스키마 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      {/* LocalBusiness 스키마 - 로컬 SEO 강화 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      {/* BreadcrumbList 스키마 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      {/* FAQPage 스키마 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <Navigation />
      <div>
        <main className="flex-grow flex flex-col">
          <HeroSection />
          <HeroHeaderSection />
          <ProjectOverviewSection />
          <CTASection />
          {/* <VideoSwiperSection /> */}
          <PremiumLifeSection />
          <ContactCTASection />
          <ComplexPlanSection />
          <PremiumUnitPlanSection />
          <LocationEnvironmentSection />
          <GallerySection />
          <InterestRegistrationSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
