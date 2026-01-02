import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.stoneworksremodeling.com";

  // Extracted slugs from all blog posts
  const blogs = [
    { slug: "stone-tile-trends-2025" },
    { slug: "marble-bathroom-transformation" },
    { slug: "choose-stone-shower" },
    { slug: "slate-bathroom-remodeling" },
    { slug: "stone-work-sustainability" },
    { slug: "bathroom-trends-2025" },
    { slug: "bathroom-remodeling-mistakes-2025" },
    { slug: "diy-bathroom-remodel-2025" },
    { slug: "bathroom-renovation-questions-2025" },
    { slug: "bathroom-remodel-cost-2025" },
    { slug: "bathroom-remodel-cost-livonia-mi-2025" },
    { slug: "bathroom-remodel-livonia-mi-2025" },
    { slug: "bathroom-remodel-plymouth-mi-2025" },
    { slug: "bathroom-remodel-troy-mi-2025" },
    { slug: "bathroom-remodel-canton-mi-2025" },
    { slug: "bathroom-remodel-novi-mi-2025" },
    { slug: "bathroom-remodel-ann-arbor-mi-2025" },
    { slug: "bathroom-remodel-farmington-hills-mi-2025" },
    { slug: "bathroom-remodel-dearborn-mi-2025" },
    { slug: "bathroom-remodel-rochester-hills-mi-2025" },
    { slug: "bathroom-remodel-sterling-heights-mi-2025" },
    { slug: "bathroom-remodel-southfield-mi-2025" },
    { slug: "bathroom-remodel-west-bloomfield-mi-2025" },
    { slug: "bathroom-remodel-bloomfield-hills-mi-2025" },
    { slug: "bathroom-remodel-royal-oak-mi-2025" },
    { slug: "shower-grout-guide" },
    { slug: "shower-niche-design" },
    { slug: "steam-shower-materials" },
    { slug: "slate-vs-quartzite" },
    { slug: "slate-maintenance" },
    { slug: "natural-stone-trends" },
    { slug: "water-saving-remodels" },
    { slug: "eco-friendly-bathrooms" },
    { slug: "healthy-home-materials" },
    { slug: "small-bathroom-remodel-ideas-lansing-mi" },
    { slug: "bathroom-remodel-cost-detroit-mi" },
    { slug: "terms" }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${blogs
      .map(
        (post) => `
      <url>
        <loc>${baseUrl}/blog/${post.slug}</loc>
        <changefreq>daily</changefreq>
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