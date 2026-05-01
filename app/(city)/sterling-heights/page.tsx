import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Sterling Heights, MI | Stone Works Remodeling",
  description: "Professional bathroom remodeling in Sterling Heights, MI. Custom renovations, shower conversions & walk-in tubs. Licensed, 5-year warranty. Free quote!",
  alternates: {
    canonical: "/sterling-heights",
  },
};

export default function Page() {
  return <CityLanding city="Sterling Heights" />;
}
