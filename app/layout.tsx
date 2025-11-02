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
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Optimized SEO metadata
export const metadata: Metadata = {
  title: "Bathroom Remodeling Experts | Metro Detroit",
  description: "Upgrade your bathroom with top-rated remodeling experts in Metro Detroit. Get a free quote today!",
  keywords: [
    "bathroom remodeling",
    "shower installation",
    "Metro Detroit bathroom renovation",
  ],
  metadataBase: new URL("https://www.stoneworksremodeling.com"),
  alternates: {
    canonical: "/",
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

        {/* ✅ Structured data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Stone Works Remodeling",
              url: "https://www.stoneworksremodeling.com",
              telephone: "+1-XXX-XXX-XXXX",
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

        {/* ✅ Google Analytics */}
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
