import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Stone Works Remodeling | Premier Bathroom Remodeling in Metro Detroit, MI",

  description:
    "Learn about Stone Works Remodeling, Metro Detroit’s trusted bathroom remodeling experts. Discover our story, craftsmanship, and client reviews.",

  alternates: {
    canonical: "https://www.stoneworksremodeling.com/about/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "About Stone Works Remodeling | Luxury Bathroom Remodeling in Metro Detroit",
    description:
      "Discover Stone Works Remodeling’s mission, expert craftsmanship, and commitment to premium bathroom remodeling in Metro Detroit, MI.",
    url: "https://www.stoneworksremodeling.com/about/",
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
