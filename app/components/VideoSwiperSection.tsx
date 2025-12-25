"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function VideoSwiperSection() {
  // 비디오 소스 배열 - 추후 업데이트 예정
  const videoSources: string[] = [
    // 예시: "/videos/video1.mp4",
    // 예시: "/videos/video2.mp4",
    // 예시: "/videos/video3.mp4",
  ];

  return (
    // sticky 효과를 위한 wrapper - 스크롤 공간 확보
    <div className="relative" style={{ height: "200vh" }}>
      {/* sticky 섹션 - 상단에 자석처럼 붙음 */}
      <section className="sticky top-0 w-full h-screen relative overflow-hidden z-10">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-white/50",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
          }}
          navigation={true}
          loop={videoSources.length > 1}
          className="w-full h-full"
        >
          {videoSources.length > 0 ? (
            // 비디오가 있을 때
            videoSources.map((src, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <div className="w-full h-full relative">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={src} type="video/mp4" />
                    브라우저가 비디오 태그를 지원하지 않습니다.
                  </video>
                  {/* 비디오 오버레이 (선택사항) */}
                  <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                </div>
              </SwiperSlide>
            ))
          ) : (
            // 비디오가 없을 때 플레이스홀더
            <SwiperSlide className="w-full h-full">
              <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white/50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    비디오 콘텐츠 준비 중
                  </h3>
                  <p className="text-white/70">
                    곧 멋진 영상을 만나보실 수 있습니다
                  </p>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>

        {/* 커스텀 스타일 */}
        <style jsx global>{`
          .swiper-pagination {
            bottom: 2rem !important;
          }
          .swiper-pagination-bullet {
            width: 12px !important;
            height: 12px !important;
            margin: 0 6px !important;
            opacity: 1 !important;
          }
          .swiper-button-next,
          .swiper-button-prev {
            color: white !important;
            width: 48px !important;
            height: 48px !important;
            background: rgba(255, 255, 255, 0.1) !important;
            border-radius: 50% !important;
            backdrop-filter: blur(10px) !important;
            transition: all 0.3s ease !important;
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: rgba(255, 255, 255, 0.2) !important;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 20px !important;
            font-weight: bold !important;
          }
          .swiper-button-next {
            right: 2rem !important;
          }
          .swiper-button-prev {
            left: 2rem !important;
          }
        `}</style>
      </section>
    </div>
  );
}
