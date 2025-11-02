import { NextResponse } from "next/server";

export async function GET() {
  const content = `
User-agent: *
Allow: /
Disallow: /404
Disallow: /_next
Disallow: /api

Sitemap: https://www.stoneworksremodeling.com/sitemap.xml
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
