import type { Metadata } from "next";

export const metadata: Metadata = {
  // Layout template appends "| Stone Works Remodeling" exactly once.
  title: "Contact Us | Free Bathroom Remodeling Quote in Metro Detroit, MI",

  description:
    "Get a free consultation for bathroom remodeling in Metro Detroit, MI. Call (248) 955-2952 or send our quick quote form — we respond within 2 business hours.",

  alternates: {
    canonical: "/contact/",
  },

  robots: { index: true, follow: true },

  openGraph: {
    title: "Contact Stone Works Remodeling | Free Bathroom Remodeling Quote",
    description:
      "Request a free quote for luxury stone bathroom remodeling in Metro Detroit, MI.",
    url: "https://www.stoneworksremodeling.com/contact/",
    siteName: "Stone Works Remodeling",
    images: [
      {
        url: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/logo.webp",
        width: 1200,
        height: 630,
        alt: "Stone Works Remodeling",
      },
    ],
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}