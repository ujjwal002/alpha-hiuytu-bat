import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Dearborn, MI | Stone Works Remodeling",
  description: "Professional bathroom remodeling in Dearborn, MI. Custom renovations, tub-to-shower conversions & walk-in tubs. Licensed, 5-year warranty. Free quote!",
  alternates: {
    canonical: "/dearborn",
  },
};

export default function Page() {
  return <CityLanding city="Dearborn" />;
}
