import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Southfield, MI | Stone Works Remodeling",
  description: "Expert bathroom remodeling in Southfield, MI. Custom renovations, shower conversions & walk-in tubs. Licensed, insured, 5-year warranty. Free in-home quote!",
  alternates: {
    canonical: "/southfield",
  },
};

export default function Page() {
  return <CityLanding city="Southfield" />;
}
