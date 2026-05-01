import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Novi, MI | Stone Works Remodeling",
  description: "Modern bathroom remodeling in Novi, MI. Full renovations, tub-to-shower conversions, walk-in tubs & custom tile. Licensed, 5-year warranty. Free quote!",
  alternates: {
    canonical: "/novi",
  },
};

export default function Page() {
  return <CityLanding city="Novi" />;
}
