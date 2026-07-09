// app/page.tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import HomeClient from "./components/HomeClient";

export const metadata: Metadata = {
  // Brand name in title helps CTR and recognition in SERPs.
  // `absolute` opts out of the "%s | Stone Works Remodeling" template in
  // layout.tsx — without it the brand was appended twice.
  title: {
    absolute: "Luxury Bathroom Remodeling Metro Detroit MI | Stone Works Remodeling",
  },
  description:
    "Luxury bathroom remodeling in Metro Detroit, MI. Spa-style master baths, marble & custom tile, walk-in showers, heated floors. Licensed, insured, 5-year warranty. Free design consultation.",
  keywords: [
    "luxury bathroom remodeling Metro Detroit",
    "bathroom remodeling Metro Detroit MI",
    "master bathroom remodel Michigan",
    "spa bathroom renovation Detroit",
    "custom bathroom design Oakland County",
    "high-end bathroom contractor Birmingham MI",
    "marble bathroom remodel Bloomfield Hills",
    "walk-in shower installation Metro Detroit",
    "tub to shower conversion Michigan",
    "bathroom renovation Wayne County",
    "heated bathroom floors Michigan",
    "frameless glass shower Metro Detroit",
  ],
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
    title: "Metro Detroit's Luxury Bathroom Remodeling Experts | Stone Works Remodeling",
    description:
      "Spa-style master baths, marble & natural stone, walk-in showers. Licensed Metro Detroit luxury bathroom remodelers — 5-star rated, 5-year warranty, complimentary design consultation.",
    url: "https://www.stoneworksremodeling.com/",
    siteName: "Stone Works Remodeling",
    locale: "en_US",
    type: "website",
    images: [
      {
        // Served from public folder — no Mumbai S3 latency for social crawlers
        url: "/bathroom/hero-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Luxury spa-style bathroom remodel with marble walls and brass fixtures — Stone Works Remodeling, Metro Detroit, MI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Bathroom Remodeling Metro Detroit | Stone Works Remodeling",
    description:
      "Spa-style master baths, marble & custom tile, walk-in showers. Licensed MI luxury remodelers. 5-star rated. Free design consultation.",
    images: ["/bathroom/hero-poster.jpg"],
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