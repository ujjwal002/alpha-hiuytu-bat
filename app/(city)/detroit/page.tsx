import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Detroit, MI | Stone Works Remodeling",
  description: "Top-rated bathroom remodeling in Detroit, MI. Full renovations, tub-to-shower conversions & walk-in tubs. Licensed, insured, 5-year warranty. Free quote!",
  alternates: {
    canonical: "/detroit",
  },
};

export default function Page() {
  return <CityLanding city="Detroit" />;
}
