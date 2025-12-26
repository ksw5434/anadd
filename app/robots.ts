import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // 모든 검색 엔진 봇 허용
        allow: "/", // 모든 경로 허용
      },
    ],
    sitemap: "https://anadeubeomeo.com/sitemap.xml", // 실제 도메인으로 변경 필요
  };
}


