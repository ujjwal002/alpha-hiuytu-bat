import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.stoneworksremodeling.com";

  const blogs = [
    "stone-tile-trends-2025",
    "marble-bathroom-transformation",
    "choose-stone-shower",
    "slate-bathroom-remodeling",
    "stone-work-sustainability",
    "bathroom-trends-2025",
    "bathroom-remodeling-mistakes-2025",
    "diy-bathroom-remodel-2025",
    "bathroom-renovation-questions-2025",
    "bathroom-remodel-cost-2025",
    "bathroom-remodel-cost-livonia-mi-2025",
    "bathroom-remodel-livonia-mi-2025",
    "bathroom-remodel-plymouth-mi-2025",
    "bathroom-remodel-troy-mi-2025",
    "bathroom-remodel-canton-mi-2025",
    "bathroom-remodel-novi-mi-2025",
    "bathroom-remodel-ann-arbor-mi-2025",
    "bathroom-remodel-farmington-hills-mi-2025",
    "bathroom-remodel-dearborn-mi-2025",
    "bathroom-remodel-rochester-hills-mi-2025",
    "bathroom-remodel-sterling-heights-mi-2025",
    "bathroom-remodel-southfield-mi-2025",
    "bathroom-remodel-west-bloomfield-mi-2025",
    "bathroom-remodel-bloomfield-hills-mi-2025",
    "bathroom-remodel-royal-oak-mi-2025",
    "shower-grout-guide",
    "shower-niche-design",
    "steam-shower-materials",
    "slate-vs-quartzite",
    "slate-maintenance",
    "natural-stone-trends",
    "water-saving-remodels",
    "eco-friendly-bathrooms",
    "healthy-home-materials",
    "small-bathroom-remodel-ideas-lansing-mi",
    "bathroom-remodel-cost-detroit-mi",
    "bathroom-remodel-contractors-near-me-grand-rapids-mi",
    // ✅ NEW AUTHORITY BLOGS (2026 GEO)
    // "bathroom-remodel-permit-cost-michigan",
    // "bathroom-remodeling-cost-michigan",
    // "marble-vs-tile-bathroom-michigan",
    "bathroom-remodel-warren-mi-2026",
    "bathroom-remodel-westland-mi-2026",
    "bathroom-remodel-dearborn-heights-mi-2026",
    "bathroom-remodel-taylor-mi-2026",
    "bathroom-remodel-shelby-township-mi-2026",
    "bathroom-remodel-macomb-township-mi-2026",
    "bathroom-remodel-pontiac-mi-2026",
    "can-you-renovate-bathroom-15000-michigan",
    "can-you-remodel-bathroom-5000-michigan",
    "what-does-50000-bathroom-renovation-get-you-michigan",
    "master-bathroom-remodel-ideas-michigan",
    "bathroom-remodel-ideas-michigan-2026",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogs
      .map(
        (slug) => `
  <url>
    <loc>${baseUrl}/blog/${slug}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
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
