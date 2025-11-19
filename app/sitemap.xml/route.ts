import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.stoneworksremodeling.com";

  const urls = [
    `${baseUrl}/`,
    `${baseUrl}/about/`,
    `${baseUrl}/services/`,
    `${baseUrl}/contact/`,
    `${baseUrl}/gallery/`,
    `${baseUrl}/testimonials/`,
    `${baseUrl}/blog/`,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
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
