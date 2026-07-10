import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: {
    // `absolute`: benefit-led SERP title; Google shows the site name separately
    absolute: "Bathroom Remodeling Dearborn MI — 5–10 Days, 5-Yr Warranty",
  },
  description:
    "Dearborn's trusted bathroom remodelers — custom tile & stone in 5–10 days, 5-year warranty. Typical projects $8,500–$20k. Free quote: (248) 955-2952.",
  alternates: {
    canonical: "/dearborn/",
  },
};

export default function Page() {
  return <CityLanding city="Dearborn" />;
}