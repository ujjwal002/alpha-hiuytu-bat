import type { Metadata } from "next";

/**
 * Server-side metadata for /blog/.
 *
 * The blog listing itself is a client component ("use client"), so it can't
 * export metadata. Previously it injected <title>/<meta>/<link> tags into the
 * page body while the root layout's inherited canonical ("/") won the head —
 * Google saw the blog as a duplicate of the homepage. This layout fixes that
 * the proper Next.js way.
 */
export const metadata: Metadata = {
  // Layout template appends "| Stone Works Remodeling" exactly once.
  title: "Bathroom Remodeling Blog & Guides",
  description:
    "Expert bathroom remodeling advice for Metro Detroit homeowners — costs, stone and tile guides, design trends, and city-by-city remodel guides from Stone Works Remodeling.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "Bathroom Remodeling Blog & Guides | Stone Works Remodeling",
    description:
      "Costs, stone and tile guides, design trends, and city-by-city bathroom remodel guides for Metro Detroit homeowners.",
    url: "https://www.stoneworksremodeling.com/blog/",
    siteName: "Stone Works Remodeling",
    type: "website",
    images: [
      {
        // Real project photo — replaces the Unsplash stock image, which
        // contradicted the "no stock photos" promise on the homepage.
        url: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/NctOfmDbqGoQGM2Qm9a8C.webp",
        alt: "Luxury bathroom remodel in Metro Detroit by Stone Works Remodeling",
      },
    ],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Stone Works Remodeling Blog",
  url: "https://www.stoneworksremodeling.com/blog/",
  description:
    "Expert advice on bathroom remodeling costs, stone and tile design, and city-specific remodel guides across Metro Detroit, Michigan.",
  publisher: {
    "@type": "Organization",
    "@id": "https://www.stoneworksremodeling.com/#business",
    name: "Stone Works Remodeling",
    url: "https://www.stoneworksremodeling.com/",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {children}
    </>
  );
}