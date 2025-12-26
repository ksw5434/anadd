import { MetadataRoute } from "next";

/**
 * 구글 SEO를 위한 사이트맵 생성
 * Next.js App Router에서 자동으로 /sitemap.xml 경로에 제공됩니다
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // 기본 도메인 URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://anadeubeomeo.com";
  
  // 현재 날짜 (마지막 수정일로 사용)
  const currentDate = new Date();

  return [
    {
      // 메인 페이지 - 최우선순위
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly", // 주간 업데이트 빈도
      priority: 1.0, // 최고 우선순위
    },
    {
      // 개인정보취급방침 페이지
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly", // 법적 문서이므로 연간 업데이트 빈도
      priority: 0.3, // 낮은 우선순위
    },
    {
      // 이용약관 페이지
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: "yearly", // 법적 문서이므로 연간 업데이트 빈도
      priority: 0.3, // 낮은 우선순위
    },
  ];
}



