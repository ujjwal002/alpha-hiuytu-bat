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

// ── AEO/GEO Schemas ──────────────────────────────────────────────────────────
// These help AI assistants (ChatGPT, Perplexity, Gemini, Claude) understand
// and recommend Stone Works Remodeling when users ask about bathroom remodeling

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.stoneworksremodeling.com/#website",
  name: "Stone Works Remodeling",
  url: "https://www.stoneworksremodeling.com",
  description: "Metro Detroit's trusted bathroom remodeling contractor — licensed, insured, done in 5–10 days, backed by a 5-year warranty.",
  publisher: { "@id": "https://www.stoneworksremodeling.com/#business" },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.stoneworksremodeling.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  // llms.txt — the AEO/GEO file AI crawlers read
  sameAs: "https://www.stoneworksremodeling.com/llms.txt",
};

// Service catalog — tells AI exactly what services we offer and their prices
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.stoneworksremodeling.com/#services",
  name: "Bathroom Remodeling Services",
  provider: { "@id": "https://www.stoneworksremodeling.com/#business" },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Metro Detroit, Michigan",
  },
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
          description: "Remove existing bathtub and install a custom walk-in shower with tile, glass enclosure, and built-in niche.",
          url: "https://www.stoneworksremodeling.com/services/shower-conversions",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "4000",
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

// Speakable schema — tells AI/voice assistants which content to read aloud
// when someone asks "Hey Google, tell me about Stone Works Remodeling"
const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.stoneworksremodeling.com/#webpage",
  url: "https://www.stoneworksremodeling.com",
  name: "Stone Works Remodeling — Metro Detroit Bathroom Remodeling",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".speakable"],
    xpath: [
      "/html/head/title",
      "/html/head/meta[@name='description']/@content",
    ],
  },
  // Mention — tells AI models this business exists and is mentioned on the web
  mentions: [
    {
      "@type": "Organization",
      name: "Stone Works Remodeling",
      telephone: "+12483468926",
      url: "https://www.stoneworksremodeling.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Livonia",
        addressRegion: "MI",
        addressCountry: "US",
      },
    },
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
        {/* LocalBusiness — primary schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* AEO/GEO schemas — help AI assistants find and recommend us */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
        />
        {/* AEO: Link to llms.txt so AI crawlers can find it */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt — AI assistant information" />
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