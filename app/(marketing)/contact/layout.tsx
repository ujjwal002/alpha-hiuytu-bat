import type { Metadata } from "next";
import { headers } from "next/headers";

/**
 * SEO layout for:
 * /contact/
 * /contact?service=*
 */

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers(); // ✅ REQUIRED in your setup
  const referer = h.get("referer") || "";
  const hasQuery = referer.includes("?");

  return {
    title:
      "Contact Stone Works Remodeling | Free Bathroom Remodeling Quote in Metro Detroit, MI",

    description:
      "Get a free consultation for stone bathroom remodeling in Metro Detroit, MI. Call (248) 346-8926 or submit our detailed contact form today.",

    alternates: {
      canonical: "https://www.stoneworksremodeling.com/contact/",
    },

    robots: hasQuery
      ? { index: false, follow: true }
      : { index: true, follow: true },

    openGraph: {
      title:
        "Contact Stone Works Remodeling | Free Bathroom Remodeling Quote",
      description:
        "Request a free quote for luxury stone bathroom remodeling in Metro Detroit, MI.",
      url: "https://www.stoneworksremodeling.com/contact/",
      siteName: "Stone Works Remodeling",
      images: [
        {
          url: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/logo.webp",
          width: 1200,
          height: 630,
          alt: "Stone Works Remodeling",
        },
      ],
      type: "website",
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
