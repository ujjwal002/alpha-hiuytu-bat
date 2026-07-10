import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: {
    // `absolute`: benefit-led SERP title; Google shows the site name separately
    absolute: "Bathroom Remodeling Birmingham MI — 5–10 Days, 5-Yr Warranty",
  },
  description:
    "Birmingham's trusted bathroom remodelers — custom tile & stone in 5–10 days, 5-year warranty. Typical projects $20k–$45k. Free quote: (248) 955-2952.",
  alternates: {
    canonical: "/birmingham/",
  },
};

export default function Page() {
  return <CityLanding city="Birmingham" />;
}