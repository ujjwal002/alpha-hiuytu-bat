import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { GA_MEASUREMENT_ID } from "../app/lib/gtag";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // ✅ Improves font loading for mobile
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// ✅ Optimized SEO metadata - Updated title to 55 chars, description to 142 chars
export const metadata: Metadata = {
  title: "Bathroom Remodeling Experts | Metro Detroit MI Contractors",
  description: "Upgrade your bathroom with top-rated remodeling experts in Metro Detroit. Full renovations, tub-to-shower conversions, walk-in tubs. Free quote today! Licensed & insured.",
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
    description: "Transform your bathroom with expert remodeling in Metro Detroit. Free quotes available!",
    url: "https://www.stoneworksremodeling.com",
    siteName: "Stone Works Remodeling",
    images: [
      {
        url: "https://www.stoneworksremodeling.com/og-image.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Stone Works Remodeling Bathroom Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@StoneWorksRemodeling", // replace with real handle
    title: "Bathroom Remodeling Experts | Metro Detroit",
    description: "Transform your bathroom with our expert remodeling services. Free quotes!",
    images: ["https://www.stoneworksremodeling.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* ✅ Preload critical resources for LCP improvement */}
        <link
          rel="preload"
          href="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/hero-image.webp"
          as="image"
          type="image/webp"
        />
        <link rel="preload" href="/fonts/geist.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* ✅ Structured data for Local Business */}
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
                streetAddress: "Your Business Address",
                addressLocality: "Metro Detroit",
                addressRegion: "MI",
                postalCode: "48067",
                addressCountry: "US",
              },
              image: "https://www.stoneworksremodeling.com/og-image.jpg",
              description:
                "Expert bathroom remodeling and shower installation in Metro Detroit.",
            }),
          }}
        />

        {/* ✅ Facebook Pixel - Lazy loaded with afterInteractive to reduce initial JS */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID'); // Replace with actual Pixel ID
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "absolute", top: "-100%", left: "-100%" }}
            alt=""
            src={`https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1`} // Replace with actual Pixel ID
          />
        </noscript>

        {/* ✅ Google Analytics - afterInteractive to not block render */}
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
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
                gtag('config', 'AW-16672718243');
              `}
            </Script>
          </>
        )}
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}