"use client";

import { useState } from "react";

interface GalleryItem {
  id: number;
  category: string;
  categoryEn: string;
  title: string;
  image: string;
  aspectRatio: string; // "3/4", "4/3", "9/16", "video", "square"
}

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("전체");

  const filters = ["전체", "외관", "인테리어", "커뮤니티", "조경"];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: "인테리어",
      categoryEn: "Interior",
      title: "오픈형 거실",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDt5RRydQpnO-5Lw3CReRse4H-Q1QBTeWpERY809gLbOkYoHZs8bH2MWBhRBgKFQFc5U4gs1y14kV5KjhrCZ7XYNQzKGVOf-xp8hmuJYq4G63NNO7vK3pVrKE_dsMWQz81pRHJm62H0kMn2cpxkCd4KNBUeONyHa0fHcmpZ8X-4nLHozxvhXc1dEwR9EHj32i_6Vexv3ZjRPE_wZq4jKtjpHrMOGMp0sonhOQut2tMiTlzMtryLjpkr7o5RZ_Czdx4e0kPhmz0sSw6w",
      aspectRatio: "3/4",
    },
    {
      id: 2,
      category: "외관",
      categoryEn: "Exterior",
      title: "외관 야경",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ6mUtrdeXpHDnRzfUgValAsvXsNMQflw1zThPFdWY_vtVIKg0TPB6t9ITGbLkUtekNbFyo2kNb77FwOTz626_Zwwg420_vrGqP-qQmVt5Ae2kEX2Ov01zdUrYBrzahWuGUGWVDsAqBnjXSGG9C0q-Nbdhjxx_6o2rFJOWGSSe1ihuXr5oGmDvz3P-KYnqymDcpEKreGHjQkaR9LHrMTFcJgRIy9jWO_4FoT3YiTYzaqEz17Af4H0vigzcoZNEASfJkXSUdnb5YXBl",
      aspectRatio: "4/3",
    },
    {
      id: 3,
      category: "인테리어",
      categoryEn: "Interior",
      title: "프리미엄 마감재",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDroBEeY0glakDQpYvi3eHsqLQjTlcybNZvi2mO0-crTVYC6WgBXb9eR1FkCprifrQPKca4y3o7Alh1iKEmrp1kcDWMGzaQt1bUrBp0-xYHRMQVUyF06AzJAeGLTnOO8GNThdow6pJouhdHGOIjWvbPKp7_hbXr8p8KB3d2N_kLgICHuoLl1hCS6f_xewsO97g1vhZATgETldinV6_zuQmtAZTis7ceVg62A_eqbx0OqojfaCIA_Xvm6CnLzz9GjsUURTWNezLQPCki",
      aspectRatio: "9/16",
    },
    {
      id: 4,
      category: "인테리어",
      categoryEn: "Interior",
      title: "마스터룸 욕실",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCS1LzqPNmuQB78jy327A3u05mWXxfN7PAei9FAZcJLp447zLp9jhqbCF5x-qhD7n3gz3EDZLpf2GYnyp7ltiHyHG8akN9Ll-Kwt3vMEJqtcjc56NOBEEpTjBZqOEVrWovxTP1drU_RJM98d3WCAG8yuxz13ssjzQtUPsnQfObSpdVzoAGzEeDV3XDoi0pCjSyxmObpcxDRtWx9ipf3aoacuGtRCZafst-ovCMaXga1aJN1bmvYqEChixE2lRAVHGSkUr7NdgNY_Pbm",
      aspectRatio: "video",
    },
    {
      id: 5,
      category: "조경",
      categoryEn: "Landscaping",
      title: "시그니처 가든",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAmhnbOFsfAsYfslcABEW2o4IJ6BuqoXo3v9Wj9QfTrMagP2GvnF1g-7oQqdmvaFplolWrB1iK1ENYxGko44ix-r_xjNrxloj9pbBH9yZsvMTj8nzPOnVZD_7E2JID22ds8iwY8TiIw1ZsV43gzceaPApXv5QYz6JQxNIBlOGjpSUPgf1boUrmnR70gUhXOTTOc_Uynd0HQZ1U8wxdvLBU5659LoqRSYDBN9qO0K-htQa-K8X3q-iN3uLNttOpjDFk75LoXmneIjyZr",
      aspectRatio: "4/3",
    },
    {
      id: 6,
      category: "커뮤니티",
      categoryEn: "Community",
      title: "피트니스 센터",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1MFLNbFLpXsbSPeQhHo4jmoK61_1Dr-H42QNvuytRRv3Ah4KyNaQpSmLc2obJrWJM57nsUDw8mI56ORxFVfyCahxJqDbTe7jGTpVSVkNZpkw0aAtwutPoq9J_20WVmXXFlrGtJrWkxJc3lMO-XyBVUABWzc7nxjtch4kmfdzmbfqKgwANd9mbWoK3xXLPurgoSoYFNrptposlcctx1FvLUSDYBpDdf27mZXf0-nz2Rsh0YSNaA72KuqH4esDsp8ITVG8YQofFIiPc",
      aspectRatio: "square",
    },
    {
      id: 7,
      category: "외관",
      categoryEn: "Exterior",
      title: "건축 디테일",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCOm7a9T08xO8euly8Bw5v6UcWLwnKEUoewsrv33XgrSE2eIMxlfhtztFeBG7eBW-W_OjEi5PTOWmucqa2DokmaODDNB5nxKYE_d_dzf8pTIoW524gQ43qBACiW85mNu-uxYdWCH5yhwKZv0PscZa7lW0PiDAMnZbHozKMDTSRfuZvmcPYGUe9bwHb-V1KUptKu1E1NFvOFCT0NEGEFNLrxiSUCEOHA_B2vmo3NxO9wwim3bj8EZceNK6Pnwu1ALh8fy55ivvThRMpo",
      aspectRatio: "3/4",
    },
    {
      id: 8,
      category: "커뮤니티",
      categoryEn: "Community",
      title: "라운지",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCuJ4s7hV1LvD36Y9DTQoTHCHpLGzrLRuW179DoOM6nSqxl4NXQ9vUvc-cpCaJ-G0G7h7v0pNV8C0eqIQr0lY55YJL2sm7Bl_fYtPoPqgc7ECNjUZATv2206Caw0ApGAmzQK0-dODCGuF7S7UqP6aIG1ZnmK2aYEdbVRphOctCDGBYRwkZykw0cQ1GRCeo7nTJY6yRZJ66uaqqkaVd6e8RExUC_pEDbEbtdFy7SGls9_M3aNEHTzTXHVOIrbcmsjXmDx-uyk9Yiihb9",
      aspectRatio: "video",
    },
    {
      id: 9,
      category: "커뮤니티",
      categoryEn: "Community",
      title: "스카이라운지",
      image: "https://www.anadd.co.kr/sub/community_01.jpg",
      aspectRatio: "4/3",
    },
    {
      id: 10,
      category: "커뮤니티",
      categoryEn: "Community",
      title: "버라이어티존",
      image: "https://www.anadd.co.kr/sub/community_03.jpg",
      aspectRatio: "square",
    },
    {
      id: 11,
      category: "커뮤니티",
      categoryEn: "Community",
      title: "스카이커뮤니티",
      image: "https://www.anadd.co.kr/sub/community_04.jpg",
      aspectRatio: "square",
    },
  ];

  const getAspectRatioClass = (aspectRatio: string) => {
    switch (aspectRatio) {
      case "3/4":
        return "aspect-[3/4]";
      case "4/3":
        return "aspect-[4/3]";
      case "9/16":
        return "aspect-[9/16]";
      case "video":
        return "aspect-video";
      case "square":
        return "aspect-square";
      default:
        return "aspect-[4/3]";
    }
  };

  const filteredItems =
    activeFilter === "전체"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <main
      id="gallery"
      className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-background-light dark:bg-background-dark"
    >
      {/* 헤더 섹션 */}
      <div className="flex flex-col items-center justify-center text-center mb-12 animate-fade-in-up">
        <h2 className="text-primary tracking-[0.2em] text-sm sm:text-base font-bold uppercase mb-3">
          High-End Residence
        </h2>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
          GALLERY
        </h1>
        <div className="h-1 w-20 bg-primary mb-6"></div>
        <p className="text-slate-600 dark:text-text-gold text-lg font-medium max-w-2xl mx-auto">
          어나드범어의 품격 있는 공간. 당신의 삶을 완성하는 프리미엄
          라이프스타일을 미리 만나보세요.
        </p>
      </div>

      {/* 필터 탭 */}
      <div className="flex justify-center mb-12 animate-fade-in-up">
        <div className="flex flex-wrap justify-center gap-3 p-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`group relative flex items-center justify-center gap-x-2 rounded-full px-6 py-2.5 transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-background-dark shadow-[0_0_15px_rgba(236,182,19,0.3)]"
                  : "bg-white dark:bg-surface-dark text-slate-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#3d3420] border border-slate-200 dark:border-border-dark"
              }`}
            >
              <span
                className={`text-sm leading-normal ${
                  activeFilter === filter ? "font-bold" : "font-medium"
                }`}
              >
                {filter}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Masonry 그리드 */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 animate-fade-in-up">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer shadow-lg transform transition-transform duration-300 hover:-translate-y-1"
          >
            <div
              className={`${getAspectRatioClass(
                item.aspectRatio
              )} w-full bg-slate-200 dark:bg-surface-dark`}
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
            </div>

            {/* 호버 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">
                {item.categoryEn}
              </p>
              <h3 className="text-white text-xl font-bold">{item.title}</h3>
              <span className="material-symbols-outlined text-white absolute top-4 right-4 bg-white/20 p-2 rounded-full backdrop-blur-sm">
                zoom_in_map
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 더 보기 버튼 */}
      <div className="flex justify-center mt-16 animate-fade-in-up">
        <button className="group flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-primary/50 text-slate-900 dark:text-white rounded-lg hover:bg-primary hover:border-primary hover:text-background-dark transition-all duration-300">
          <span className="text-sm font-bold tracking-widest">더 보기</span>
          <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-y-1">
            expand_more
          </span>
        </button>
      </div>
    </main>
  );
}
