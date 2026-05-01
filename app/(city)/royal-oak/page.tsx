import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Royal Oak, MI | Stone Works Remodeling",
  description: "Modern bathroom remodeling in Royal Oak, MI. Full renovations, tub-to-shower conversions & custom tile. Licensed, insured, 5-year warranty. Free estimate!",
  alternates: {
    canonical: "/royal-oak",
  },
};

export default function Page() {
  return <CityLanding city="Royal Oak" />;
}
