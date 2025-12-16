// app/page.tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import HomeClient from "./components/HomeClient";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Metro Detroit MI",
  description:
    "Bathroom remodeling experts in Metro Detroit. Full renovations, tub-to-shower conversions & walk-in tubs. Free in-home quotes from licensed MI contractors.",
  alternates: {
    canonical: "https://www.stoneworksremodeling.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Bathroom Remodeling Metro Detroit MI",
    description:
      "Trusted bathroom remodeling contractors serving Metro Detroit. Free consultations & workmanship warranty.",
    url: "https://www.stoneworksremodeling.com/",
    siteName: "Stone Works Remodeling",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/mHSA0TExdMsQjnyxRC3Wq.webp",
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Metro Detroit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
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
