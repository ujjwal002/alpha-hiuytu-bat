// app/page.tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import HomeClient from "./components/HomeClient";

export const metadata: Metadata = {
  // Brand name in title helps CTR and recognition in SERPs
  title: "Bathroom Remodeling Metro Detroit MI | Stone Works Remodeling",
  description:
    "Top-rated bathroom remodeling in Metro Detroit, MI. Full renovations, tub-to-shower conversions & walk-in tubs. Licensed, insured, 5-year warranty. Free in-home quote!",
  // Relative canonical — metadataBase in layout.tsx handles the domain
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    // More human/conversational for social sharing
    title: "Metro Detroit's #1 Bathroom Remodeling Contractor | Stone Works Remodeling",
    description:
      "Licensed Metro Detroit bathroom remodelers — full renovations, tub-to-shower conversions, walk-in tubs. 5-star rated, 5-year warranty, free in-home quote.",
    url: "https://www.stoneworksremodeling.com/",
    siteName: "Stone Works Remodeling",
    locale: "en_US",
    type: "website",
    images: [
      {
        // Served from public folder — no Mumbai S3 latency for social crawlers
        url: "/bathroom/bath1.jpeg",
        width: 1200,
        height: 630,
        alt: "Bathroom remodeling project by Stone Works Remodeling — Metro Detroit, MI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metro Detroit Bathroom Remodeling | Stone Works Remodeling",
    description:
      "Licensed MI bathroom remodelers. Full renovations, tub-to-shower conversions, walk-in tubs. 5-star rated. Free in-home quote!",
    images: ["/bathroom/bath1.jpeg"],
  },
};

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[600px] w-full bg-gray-100 animate-pulse" />
      }
    >
      <HomeClient />
    </Suspense>
  );
}
