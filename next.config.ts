import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

/**
 * To avoid the Turbopack/Webpack conflict in Next.js 16:
 * - We provide an EMPTY Turbopack config (allowed)
 * - This silences the error caused by the Webpack plugin
 * - Webpack will still be used automatically because plugins require it
 */

const nextConfig: NextConfig = {
  trailingSlash: true,

  // ✔️ VALID in Next.js 16 — prevents Turbopack error
  turbopack: {},

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.stoneworksremodeling.com",
      },
      {
        protocol: "https",
        hostname: "stoneworkremodeling.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "stoneworksremodlling.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
