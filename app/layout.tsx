// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { GA_MEASUREMENT_ID } from "../app/lib/gtag";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stoneworksremodeling.com"),
  title: {
    default: "Stone Works Remodeling | Metro Detroit Bathroom Remodeling Experts",
    template: "%s | Stone Works Remodeling",
  },
  description:
    "Top-rated bathroom remodeling experts in Metro Detroit, MI. Full renovations, tub-to-shower conversions & walk-in tubs. Licensed, insured, 5-year warranty.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// LocalBusiness schema — single source of truth
// Header.tsx and Footer.tsx should NOT repeat this schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://www.stoneworksremodeling.com/#business",
  name: "Stone Works Remodeling",
  url: "https://www.stoneworksremodeling.com",
  telephone: "+12483468926",
  email: "val@stoneworksremodeling.com",
  priceRange: "$$",
  // Images from public folder — not Mumbai S3
  logo: "https://www.stoneworksremodeling.com/instagram/logo.jpeg",
  image: "https://www.stoneworksremodeling.com/bathroom/bath1.jpeg",
  description:
    "Stone Works Remodeling provides premium bathroom remodeling, tub-to-shower conversions, walk-in tub installations, and custom tile work across Metro Detroit, MI — Wayne, Oakland, and Macomb Counties.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4671 Sugar Camp Road",
    addressLocality: "Livonia",
    addressRegion: "MI",
    postalCode: "48150",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.3684,
    longitude: -83.3527,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: [
    { "@type": "City", name: "Detroit", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Livonia", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Troy", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Rochester", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Sterling Heights", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Royal Oak", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Birmingham", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Farmington Hills", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Warren", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Novi", containedInPlace: { "@type": "State", name: "Michigan" } },
  ],
  sameAs: [
    "https://www.instagram.com/stoneworksremodeling",
    "https://www.facebook.com/people/Stone-Works-Remodeling/61567020355631/",
    "https://www.youtube.com/@stoneworksremodeling",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />

        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
                gtag('config', 'AW-16672718243');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}