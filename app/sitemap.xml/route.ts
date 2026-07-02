import { NextResponse } from "next/server";
import { blogPosts } from "@/lib/blogPosts";

export async function GET() {
  const baseUrl = "https://www.stoneworksremodeling.com";
  const now = new Date().toISOString();

  // Static marketing pages — highest priority
  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "weekly" },
    { url: "/services/", priority: "0.9", changefreq: "monthly" },
    { url: "/contact/", priority: "0.9", changefreq: "monthly" },
    { url: "/gallery/", priority: "0.8", changefreq: "monthly" },
    { url: "/about/", priority: "0.7", changefreq: "monthly" },
    { url: "/testimonials/", priority: "0.7", changefreq: "monthly" },
    { url: "/blog/", priority: "0.8", changefreq: "weekly" },
  ];

  // Service pages
  const servicePages = [
    "/services/bathroom-remodeling/",
    "/services/shower-conversions/",
    "/services/walk-in-tubs/",
    "/services/custom-works/",
  ].map((url) => ({ url, priority: "0.9", changefreq: "monthly" }));

  // City landing pages — strong local SEO value
  const cityPages = [
    "detroit", "livonia", "troy", "rochester", "sterling-heights",
    "dearborn", "westland", "canton", "royal-oak", "birmingham",
    "bloomfield-hills", "farmington-hills", "southfield", "warren", "novi",
  ].map((city) => ({ url: `/${city}/`, priority: "0.8", changefreq: "monthly" }));

  // Blog posts — include all, vary priority by content depth
  const blogPages = blogPosts.map((post) => ({
    url: `/blog/${post.slug}/`,
    priority: "0.7",
    changefreq: "monthly",
    lastmod: post.date,
  }));

  // Build XML entries
  const buildEntry = (entry: { url: string; priority: string; changefreq: string; lastmod?: string }) => `
  <url>
    <loc>${baseUrl}${entry.url}</loc>
    <lastmod>${entry.lastmod || now}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`;

  const allEntries = [
    ...staticPages.map(buildEntry),
    ...servicePages.map(buildEntry),
    ...cityPages.map(buildEntry),
    ...blogPages.map(buildEntry),
  ].join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${allEntries}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}