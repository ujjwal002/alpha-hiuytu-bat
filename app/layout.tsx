// app/layout.tsx
// FIXED for Tailwind v4 + AEO/GEO upgrades:
// - aggregateRating reflects realistic numbers (was inflated to 500)
// - Added Person schema for Val (E-E-A-T signal)
// - GMB profile URL added to sameAs
// - All other schemas preserved
//
// IMPORTANT: After deploy, log into your GMB and update reviewCount below
// to match your ACTUAL number of reviews. Don't lie to Google or AI assistants.
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PersonSchema from "@/components/schemas/PersonSchema";
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
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://www.stoneworksremodeling.com/#business",
  name: "Stone Works Remodeling",
  url: "https://www.stoneworksremodeling.com",
  telephone: "+12489552952",
  email: "val@stoneworksremodeling.com",
  priceRange: "$$",
  logo: "https://www.stoneworksremodeling.com/instagram/logo.jpeg",
  image: "https://www.stoneworksremodeling.com/bathroom/bath1.jpeg",
  description:
    "Stone Works Remodeling provides premium bathroom remodeling, tub-to-shower conversions, walk-in tub installations, and custom tile work across Metro Detroit, MI — Wayne, Oakland, and Macomb Counties. Founded 2009 by Valjon Qejvani.",
  founder: { "@id": "https://www.stoneworksremodeling.com/#owner" },
  foundingDate: "2009",
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
  // ⚠️ UPDATE this number to match your ACTUAL Google review count.
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "32",            // ← UPDATE TO YOUR REAL COUNT
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Cari Z." },
      datePublished: "2025-10-15",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "The team transformed our dated bathrooms into beautiful, functional spaces — professional, punctual, and detail-oriented. Highly recommend Stone Works Remodeling!",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Kelly S." },
      datePublished: "2025-09-08",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "We needed a walk-in tub for safety and accessibility. Stone Works delivered perfect installation and service. Excellent communication throughout.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Amit S." },
      datePublished: "2025-08-22",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Val and the crew completed our master bathroom remodel on time and with great attention to detail. Beautiful results and a clean worksite.",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Detroit", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Livonia", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Troy", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Rochester", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Sterling Heights", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Royal Oak", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Birmingham", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Bloomfield Hills", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Farmington Hills", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Warren", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Dearborn", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Canton", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Novi", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Southfield", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Westland", containedInPlace: { "@type": "State", name: "Michigan" } },
  ],
  sameAs: [
    "https://www.instagram.com/stoneworksremodeling",
    "https://www.facebook.com/people/Stone-Works-Remodeling/61567020355631/",
    "https://www.youtube.com/@stoneworksremodeling",
    "https://www.google.com/search?q=Stone+Works+Remodeling&stick=H4sIAAAAAAAA_-NgU1I1qLAwMjQzNUhMTE4zM0w1TjG0MqgwNzIzMDWwNEtOTLW0SDIwX8QqFlySn5eqEJ5flF2sEJSam5-SmpOZlw4Ai4l5GEIAAAA",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.stoneworksremodeling.com/#website",
  name: "Stone Works Remodeling",
  url: "https://www.stoneworksremodeling.com",
  description:
    "Metro Detroit's trusted bathroom remodeling contractor — licensed, insured, done in 5–10 days, backed by a 5-year warranty.",
  publisher: { "@id": "https://www.stoneworksremodeling.com/#business" },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.stoneworksremodeling.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.stoneworksremodeling.com/#services",
  name: "Bathroom Remodeling Services",
  provider: { "@id": "https://www.stoneworksremodeling.com/#business" },
  areaServed: { "@type": "AdministrativeArea", name: "Metro Detroit, Michigan" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bathroom Remodeling Services — Metro Detroit",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Complete Bathroom Remodeling",
          description: "Full bathroom renovation including tile, vanity, plumbing fixtures, lighting, and finish work. Completed in 5–10 business days.",
          url: "https://www.stoneworksremodeling.com/services/bathroom-remodeling",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "8000",
          maxPrice: "60000",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tub-to-Shower Conversion",
          description: "Remove existing bathtub and install a custom walk-in shower with tile, glass enclosure, and built-in niche. Starting from $7,995.",
          url: "https://www.stoneworksremodeling.com/services/shower-conversions",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "7995",
          maxPrice: "12000",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Walk-in Tub Installation",
          description: "Accessible walk-in tub installations with safety features for seniors and those with mobility needs.",
          url: "https://www.stoneworksremodeling.com/services/walk-in-tubs",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "5000",
          maxPrice: "15000",
          priceCurrency: "USD",
        },
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        {/* NEW: Person schema for owner Val — E-E-A-T signal */}
        <PersonSchema />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt — AI assistant information" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}

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