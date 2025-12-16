import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { GA_MEASUREMENT_ID } from "../app/lib/gtag";

/* =========================
   FONTS (CORRECT WAY)
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
   METADATA (SEO PERFECT)
   ========================= */
export const metadata: Metadata = {
  title: "Bathroom Remodeling Experts | Metro Detroit MI Contractors",
  description:
    "Upgrade your bathroom with top-rated remodeling experts in Metro Detroit. Full renovations, tub-to-shower conversions, walk-in tubs. Free quote today! Licensed & insured.",
  keywords: [
    "bathroom remodeling",
    "shower installation",
    "Metro Detroit bathroom renovation",
  ],
  metadataBase: new URL("https://www.stoneworksremodeling.com"),
  alternates: {
    canonical: "https://www.stoneworksremodeling.com/",
  },
  openGraph: {
    title: "Bathroom Remodeling Experts | Metro Detroit",
    description:
      "Transform your bathroom with expert remodeling in Metro Detroit. Free quotes available!",
    url: "https://www.stoneworksremodeling.com",
    siteName: "Stone Works Remodeling",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.stoneworksremodeling.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stone Works Remodeling Bathroom Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Experts | Metro Detroit",
    description:
      "Transform your bathroom with our expert remodeling services. Free quotes!",
    images: ["https://www.stoneworksremodeling.com/og-image.jpg"],
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
        {/* ✅ Preload HERO image (LCP boost) */}
        <link
          rel="preload"
          href="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/NctOfmDbqGoQGM2Qm9a8C.webp"
          as="image"
          type="image/webp"
          crossOrigin="anonymous"
        />

        {/* ✅ Preload Critical CSS (replace [CHUNK_HASH] post-build; no onLoad to avoid serialization error) */}
        <link rel="preload" href="/_next/static/css/[CHUNK_HASH].css" as="style" />
        <link rel="stylesheet" href="/_next/static/css/[CHUNK_HASH].css" /> {/* ✅ Simplified: No media/onLoad */}

        {/* ✅ Preload Fonts (replace [HASH] post-build from _next/static/media/) */}
        <link
          rel="preload"
          href="/_next/static/media/[GEIST_SANS_HASH]-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/_next/static/media/[GEIST_MONO_HASH]-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />

        {/* ✅ Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Stone Works Remodeling",
              url: "https://www.stoneworksremodeling.com",
              telephone: "+1-248-346-8926",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Metro Detroit",
                addressRegion: "MI",
                addressCountry: "US",
              },
              image: "https://www.stoneworksremodeling.com/og-image.jpg",
              description:
                "Expert bathroom remodeling and shower installation in Metro Detroit.",
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

        {/* =========================
           FACEBOOK PIXEL (LAZY - REPLACE YOUR_PIXEL_ID)
           ========================= */}
        {/* <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_ACTUAL_PIXEL_ID'); // e.g., '1234567890'
            fbq('track', 'PageView');
          `}
        </Script> */}
      </body>
    </html>
  );
}