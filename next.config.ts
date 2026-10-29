import type { NextConfig } from "next";

const useCdn =
  process.env.WORKERS_CI === "1" ||
  process.env.NEXT_PUBLIC_USE_CDN === "1" ||
  process.env.NEXT_PUBLIC_FFMPEG_CDN === "1";

const nextConfig: NextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_USE_CDN: useCdn ? "1" : ""
  },
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
  typescript: { ignoreBuildErrors: false }
};

export default nextConfig;
