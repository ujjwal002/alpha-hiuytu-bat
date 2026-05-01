import { NextResponse } from "next/server";

export async function GET() {
  const content = `User-agent: *
Allow: /
Disallow: /404
Disallow: /_next
Disallow: /api

# Sitemaps
Sitemap: https://www.stoneworksremodeling.com/sitemap.xml
Sitemap: https://www.stoneworksremodeling.com/sitemap-blog.xml

# AEO/GEO — AI model crawlers
# These files help AI assistants (ChatGPT, Perplexity, Gemini, Claude) understand our business
User-agent: GPTBot
Allow: /
Allow: /llms.txt
Allow: /llms-full.txt

User-agent: ChatGPT-User
Allow: /
Allow: /llms.txt
Allow: /llms-full.txt

User-agent: Google-Extended
Allow: /
Allow: /llms.txt
Allow: /llms-full.txt

User-agent: PerplexityBot
Allow: /
Allow: /llms.txt
Allow: /llms-full.txt

User-agent: anthropic-ai
Allow: /
Allow: /llms.txt
Allow: /llms-full.txt

User-agent: ClaudeBot
Allow: /
Allow: /llms.txt
Allow: /llms-full.txt

User-agent: Omgilibot
Allow: /

User-agent: FacebookBot
Allow: /
`;

  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain" },
  });
}