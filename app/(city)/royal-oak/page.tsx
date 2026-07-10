import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: {
    // `absolute`: benefit-led SERP title; Google shows the site name separately
    absolute: "Bathroom Remodeling Royal Oak MI — 5–10 Days, 5-Yr Warranty",
  },
  description:
    "Royal Oak's trusted bathroom remodelers — custom tile & stone in 5–10 days, 5-year warranty. Typical projects $7k–$14k. Free quote: (248) 955-2952.",
  alternates: {
    canonical: "/royal-oak/",
  },
};

export default function Page() {
  return <CityLanding city="Royal Oak" />;
}