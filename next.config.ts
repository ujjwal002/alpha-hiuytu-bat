import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  trailingSlash: true,

  // Required — silences Turbopack/webpack conflict error
  turbopack: {},

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react"],
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.stoneworksremodeling.com" },
      // Keep old S3 for other pages still using it — remove once all images migrated
      { protocol: "https", hostname: "stoneworksremodlling.s3.ap-south-1.amazonaws.com" },
      // UI Avatars — used for dummy customer profile photos on homepage
      { protocol: "https", hostname: "ui-avatars.com" },
    ],
    // AVIF first — 50% smaller than WebP, Next.js serves it automatically
    formats: ["image/avif", "image/webp"],
    // Aggressive caching for images — 1 year
    minimumCacheTTL: 31536000,
    // Limit concurrent image optimization requests
    deviceSizes: [390, 640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      // Old Novi post slug that Google indexed → current Novi post (301)
      {
        source: "/blog/bathroom-remodel-novi-minimalist-mi-2025",
        destination: "/blog/bathroom-remodel-novi-mi-2025/",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      // Security headers on all routes
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          // FIX: X-Frame-Options stops clickjacking (fixes Best Practices warning)
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // FIX: Permissions policy
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      // Next.js static assets — immutable, 1 year cache
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Public images — 1 year cache
      {
        source: "/(.*)\\.(webp|jpg|jpeg|png|gif|svg|avif|ico)$",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Vary", value: "Accept-Encoding" },
        ],
      },
      // Fonts — 1 year cache
      {
        source: "/(.*)\\.(woff|woff2|ttf|otf)$",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // API routes — short cache
      {
        source: "/api/:path*",
        headers: [
          { key: "Cache-Control", value: "s-maxage=60, stale-while-revalidate=300" },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);