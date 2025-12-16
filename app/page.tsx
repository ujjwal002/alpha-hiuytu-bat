import type { Metadata } from "next";
import HomePage from "./components/Home";
import SeoSchema from "./components/SeoSchema";
import HomeClient from "./components/HomeClient";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Metro Detroit MI | Stone Works Remodeling Experts",
  description:
    "Bathroom remodeling experts in Metro Detroit. Full bathroom renovations, tub-to-shower conversions, walk-in tubs & small bathroom remodels. Free in-home quote. Licensed MI contractors serving Wayne, Oakland, Macomb Counties.",
  alternates: {
    canonical: "https://www.stoneworksremodeling.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Bathroom Remodeling Metro Detroit MI | Stone Works Remodeling",
    description:
      "Licensed bathroom remodeling contractors serving Metro Detroit. 5-year workmanship warranty & free consultations.",
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
    title: "Bathroom Remodeling Metro Detroit MI",
    description:
      "Upgrade your bathroom with trusted remodeling experts in Metro Detroit. Free in-home consultation.",
    images: [
      "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/mHSA0TExdMsQjnyxRC3Wq.webp",
    ],
  },
};

export default function Home() {
  return (
    <>
      <SeoSchema />
      <HomeClient />
    </>
  );
}