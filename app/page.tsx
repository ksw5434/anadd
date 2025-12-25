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
    let resizeTimeout: NodeJS.Timeout | null = null;
    let updateTimeout: NodeJS.Timeout | null = null;
    const imageLoadHandlers: Array<() => void> = [];
    let handleResize: (() => void) | null = null;

    const initLocomotiveScroll = async () => {
      if (scrollRef.current) {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        scroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          smoothMobile: true, // 모바일에서도 부드러운 스크롤 활성화
          resetNativeScroll: true,
          lerp: 0.1, // 선형 보간 값 (낮을수록 부드러움, 0.05~0.15 권장)
          multiplier: 1, // 스크롤 속도 배율
          class: "is-revealed", // 스크롤 초기화 클래스
          scrollbarContainer: false, // 스크롤바 숨김
          getSpeed: true, // 스크롤 속도 감지
          getDirection: true, // 스크롤 방향 감지
        });

        // Locomotive Scroll 인스턴스를 window에 저장하여 다른 컴포넌트에서 접근 가능하도록 함
        (window as any).locomotiveScroll = scroll;

        // 이미지 로드 완료 후 스크롤 업데이트
        const images = scrollRef.current.querySelectorAll("img");
        let loadedImages = 0;
        const totalImages = images.length;

        const handleImageLoad = () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            if (updateTimeout) clearTimeout(updateTimeout);
            updateTimeout = setTimeout(() => {
              scroll?.update();
            }, 100);
          }
        };

        if (totalImages === 0) {
          // 이미지가 없으면 바로 업데이트
          if (updateTimeout) clearTimeout(updateTimeout);
          updateTimeout = setTimeout(() => {
            scroll?.update();
          }, 100);
        } else {
          images.forEach((img) => {
            if (img.complete) {
              handleImageLoad();
            } else {
              img.addEventListener("load", handleImageLoad);
              img.addEventListener("error", handleImageLoad);
              imageLoadHandlers.push(() => {
                img.removeEventListener("load", handleImageLoad);
                img.removeEventListener("error", handleImageLoad);
              });
            }
          });
        }

        // 리사이즈 이벤트에 스크롤 업데이트 연결 (디바운싱 적용)
        handleResize = () => {
          if (resizeTimeout) clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(() => {
            scroll?.update();
          }, 150);
        };

        window.addEventListener("resize", handleResize);

        // 초기 업데이트 (약간의 지연을 두어 레이아웃이 안정화된 후 실행)
        if (updateTimeout) clearTimeout(updateTimeout);
        updateTimeout = setTimeout(() => {
          scroll?.update();
        }, 500);
      }
    };

    initLocomotiveScroll();

    // cleanup 함수
    return () => {
      // 타이머 정리
      if (resizeTimeout) clearTimeout(resizeTimeout);
      if (updateTimeout) clearTimeout(updateTimeout);

      // 이미지 이벤트 리스너 제거
      imageLoadHandlers.forEach((cleanup) => cleanup());

      // 리사이즈 이벤트 리스너 제거
      if (handleResize) {
        window.removeEventListener("resize", handleResize);
      }

      // locomotive-scroll 인스턴스 제거
      if (scroll) {
        scroll.destroy();
        (window as any).locomotiveScroll = null;
      }
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
