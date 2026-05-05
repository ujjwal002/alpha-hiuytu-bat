// app/components/schemas/ArticleSchema.tsx
// Article (BlogPosting) schema for blog posts.
// Without this, AI assistants can't reliably cite your articles when
// answering questions about bathroom remodeling.
//
// Usage in any blog post page:
//   <ArticleSchema
//     headline="How to Plan a Bathroom Remodel in Metro Detroit"
//     description="Step-by-step guide to planning a bathroom renovation..."
//     image="https://www.stoneworksremodeling.com/blog/planning-guide.jpg"
//     datePublished="2025-10-01"
//     dateModified="2025-12-15"
//     slug="how-to-plan-bathroom-remodel-metro-detroit"
//   />

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;              // Absolute URL
  datePublished: string;      // ISO 8601: "2025-10-01"
  dateModified?: string;      // ISO 8601: "2025-12-15"
  slug: string;               // URL slug, e.g. "how-to-plan-bathroom-remodel"
  author?: {
    name: string;
    url?: string;
  };
  wordCount?: number;
  articleSection?: string;    // e.g. "Bathroom Planning"
  keywords?: string[];        // e.g. ["bathroom remodel", "Metro Detroit"]
}

const BASE_URL = "https://www.stoneworksremodeling.com";

export default function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  slug,
  author,
  wordCount,
  articleSection,
  keywords,
}: ArticleSchemaProps) {
  const articleUrl = `${BASE_URL}/blog/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline,
    description,
    image: {
      "@type": "ImageObject",
      url: image,
      width: 1200,
      height: 630,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    author: author
      ? {
          "@type": "Person",
          name: author.name,
          ...(author.url && { url: author.url }),
        }
      : {
          "@id": `${BASE_URL}/#owner`,
        },
    publisher: {
      "@id": `${BASE_URL}/#business`,
    },
    ...(wordCount && { wordCount }),
    ...(articleSection && { articleSection }),
    ...(keywords && keywords.length > 0 && { keywords: keywords.join(", ") }),
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}