"use client";

import { useEffect, useRef } from "react";
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
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scroll: any = null;

    const initLocomotiveScroll = async () => {
      if (scrollRef.current) {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        scroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          smoothMobile: false,
          resetNativeScroll: true,
        });
      }
    };

    initLocomotiveScroll();

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  // 구조화된 데이터 (JSON-LD) - SEO 최적화
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ResidentialComplex",
    name: "어나드범어",
    alternateName: "Anadeu Beomeo",
    description:
      "대구 수성구 범어동에 위치한 프리미엄 아파트. 범어역 도보 3분, 명문 학군, 하이엔드 커뮤니티 시설을 갖춘 프리미엄 라이프스타일의 시작.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "범어동",
      addressRegion: "수성구",
      addressCountry: "KR",
      streetAddress: "대구광역시 수성구 범어동 일원",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "35.8594", // 실제 좌표로 변경 필요
      longitude: "128.6314", // 실제 좌표로 변경 필요
    },
    telephone: "1600-XXXX",
    url: "https://anadeubeomeo.com", // 실제 도메인으로 변경 필요
    sameAs: [
      // 소셜 미디어 링크가 있다면 추가
    ],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "지하철역",
        value: "범어역 도보 3분",
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
    ],
    numberOfBedrooms: "2-4",
    numberOfBathroomsTotal: "2-3",
    floorSize: {
      "@type": "QuantitativeValue",
      value: "59-114",
      unitCode: "MTK",
    },
  };

  return (
    <>
      {/* 구조화된 데이터 (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Navigation을 스크롤 컨테이너 밖으로 이동하여 z-index 문제 해결 */}
      <Navigation />
      <div ref={scrollRef} data-scroll-container>
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
