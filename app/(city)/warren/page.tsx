import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: {
    // `absolute`: benefit-led SERP title; Google shows the site name separately
    absolute: "Bathroom Remodeling Warren MI — 5–10 Days, 5-Yr Warranty",
  },
  description:
    "Warren's trusted bathroom remodelers — custom tile & stone in 5–10 days, 5-year warranty. Typical projects $7,500–$15k. Free quote: (248) 955-2952.",
  alternates: {
    canonical: "/warren/",
  },
};

export default function Page() {
  return <CityLanding city="Warren" />;
}