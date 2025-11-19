import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  trailingSlash: true,   // 🔥 FIX: Forces all URLs in sitemap to end with /

  images: {
    domains: [
      'www.stoneworksremodeling.com',
      'stoneworkremodeling.s3.ap-south-1.amazonaws.com',
      'stoneworksremodlling.s3.ap-south-1.amazonaws.com',
      'images.unsplash.com',
    ],
  },
};

const bundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default bundleAnalyzerConfig(nextConfig);
