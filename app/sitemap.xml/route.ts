import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.stoneworksremodeling.com";

  // All static marketing pages
  const staticUrls = [
    "/",
    "/about/",
    "/services/",
    "/contact/",
    "/gallery/",
    "/testimonials/",
    "/blog/",
  ];

  // All city landing pages (same list you used for dynamic routing)
  const cities = [
    "detroit",
    "livonia",
    "troy",
    "rochester",
    "sterling-heights",
    "dearborn",
    "westland",
    "canton",
    "royal-oak",
    "birmingham",
    "bloomfield-hills",
    "farmington-hills",
    "southfield",
    "warren",
    "novi",
  ];

  // Combine all URLs
  const allUrls = [
    ...staticUrls.map((p) => `${baseUrl}${p}`),
    ...cities.map((city) => `${baseUrl}/${city}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allUrls
      .map(
        (url) => `
      <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
