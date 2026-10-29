import type { NextConfig } from "next";

const cloudflareBuild = process.env.NEXT_PRIVATE_STANDALONE === "true";

const nextConfig: NextConfig = {
  output: cloudflareBuild ? "standalone" : "export",
  env: {
    NEXT_PUBLIC_FFMPEG_CDN: process.env.NEXT_PUBLIC_FFMPEG_CDN ?? ""
  },
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
  typescript: { ignoreBuildErrors: false }
};

export default nextConfig;
