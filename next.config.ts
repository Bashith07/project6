import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",              // 👈 REQUIRED for GitHub Pages
  reactStrictMode: true,

  images: {
    unoptimized: true,           // 👈 REQUIRED for GitHub Pages
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
