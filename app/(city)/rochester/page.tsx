import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Rochester, MI | Stone Works Remodeling",
  description: "Premium bathroom remodeling in Rochester, MI. Full renovations, tub-to-shower conversions, walk-in tubs. Licensed, insured, 5-year warranty. Free estimate!",
  alternates: {
    canonical: "/rochester",
  },
};

export default function Page() {
  return <CityLanding city="Rochester" />;
}
