import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.anadd.co.kr",
      },
    ],
  },
};

export default nextConfig;
