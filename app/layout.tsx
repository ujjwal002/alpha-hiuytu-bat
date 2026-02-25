// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { GA_MEASUREMENT_ID } from "../app/lib/gtag";

/* =========================
   FONTS (BEST PRACTICE)
   ========================= */
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

/* =========================
   GLOBAL METADATA (BRAND ONLY)
   ========================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.stoneworksremodeling.com"),
  title: {
    default: "Stone Works Remodeling | Metro Detroit Bathroom Experts",
    template: "%s | Stone Works Remodeling",
  },
  description:
    "Bathroom remodeling experts serving Metro Detroit, MI. Full renovations, tub-to-shower conversions & walk-in tubs.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* =========================
   ROOT LAYOUT
   ========================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ SINGLE Local Business Schema (NO DUPLICATES) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "@id": "https://www.stoneworksremodeling.com/#business",
              name: "Stone Works Remodeling",
              url: "https://www.stoneworksremodeling.com",
              telephone: "+1-248-346-8926",
              priceRange: "$5000-$50000",
              image:
                "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/NctOfmDbqGoQGM2Qm9a8C.webp",
              address: {
                "@type": "PostalAddress",
                addressRegion: "MI",
                addressCountry: "US",
              },
              areaServed: [
                "Detroit",
                "Livonia",
                "Troy",
                "Sterling Heights",
                "Royal Oak",
                "Birmingham",
                "Farmington Hills",
                "Novi",
              ],
              sameAs: [
                "https://www.instagram.com/stoneworksremodeling",
                "https://www.facebook.com/stoneworksremodeling",
                "https://www.youtube.com/@stoneworksremodeling",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        {children}

        <Footer />
        <Analytics />

        {/* =========================
           GOOGLE ANALYTICS (NON-BLOCKING)
           ========================= */}
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
