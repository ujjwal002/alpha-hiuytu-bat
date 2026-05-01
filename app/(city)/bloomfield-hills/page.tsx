import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Bloomfield Hills, MI | Stone Works Remodeling",
  description: "High-end bathroom remodeling in Bloomfield Hills, MI. Marble, stone tile, custom showers & luxury renovations. Licensed, 5-year warranty. Free quote!",
  alternates: {
    canonical: "/bloomfield-hills",
  },
};

export default function Page() {
  return <CityLanding city="Bloomfield Hills" />;
}
