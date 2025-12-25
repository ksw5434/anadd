"use client";

import { useEffect } from "react";
import ChannelService from "./channel-service";

export default function ChannelTalk() {
  useEffect(() => {
    // 채널톡 플러그인 키 (환경 변수에서 가져오기)
    const pluginKey = process.env.NEXT_PUBLIC_CHANNEL_TALK_PLUGIN_KEY;

    // 플러그인 키가 없으면 채널톡을 초기화하지 않음
    if (!pluginKey) {
      console.warn(
        "⚠️ 채널톡 플러그인 키가 설정되지 않았습니다. .env.local 파일에 NEXT_PUBLIC_CHANNEL_TALK_PLUGIN_KEY를 추가해주세요."
      );
      return;
    }

    // 채널톡 스크립트 로드
    ChannelService.loadScript();

    // 스크립트 로딩 완료를 기다린 후 부팅
    // ChannelIO 스크립트가 완전히 로드될 때까지 대기
    const checkChannelIO = setInterval(() => {
      if (window.ChannelIO && window.ChannelIOInitialized) {
        clearInterval(checkChannelIO);

        // 채널톡 부팅 설정
        ChannelService.boot(
          {
            pluginKey: pluginKey,
            appearance: "dark", // 다크모드로 명시적 설정 (HTML에 dark 클래스가 강제 적용되어 있음)
            language: "ko", // 언어 설정
            trackDefaultEvent: true, // 기본 이벤트 트래킹 활성화
            trackUtmSource: true, // UTM 소스 트래킹 활성화
            zIndex: 10000, // z-index 설정 (다른 요소 위에 표시)
          },
          (error, user) => {
            // 부팅 완료 콜백
            if (error) {
              console.error("❌ 채널톡 부팅 실패:", error);
            } else {
              console.log(
                "✅ 채널톡 부팅 성공",
                user ? `사용자: ${user.name || user.id}` : ""
              );
            }
          }
        );
      }
    }, 100); // 100ms마다 확인

    // 최대 10초 대기 후 타임아웃
    const timeout = setTimeout(() => {
      clearInterval(checkChannelIO);
      if (!window.ChannelIO || !window.ChannelIOInitialized) {
        console.error("❌ 채널톡 스크립트 로딩 타임아웃");
      }
    }, 10000);

    // 컴포넌트 언마운트 시 정리
    return () => {
      clearInterval(checkChannelIO);
      clearTimeout(timeout);
      // 필요시 주석 해제
      // ChannelService.shutdown();
    };
  }, []);

  // 채널톡은 스크립트로 자동 렌더링되므로 별도의 JSX 반환 불필요
  return null;
}
