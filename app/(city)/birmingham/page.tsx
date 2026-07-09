import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Birmingham, MI",
  description: "Luxury bathroom remodeling in Birmingham, MI. Custom renovations, stone tile, walk-in showers. Licensed, insured, 5-year warranty. Free in-home quote!",
  alternates: {
    canonical: "/birmingham/",
  },
};

export default function Page() {
  return <CityLanding city="Birmingham" />;
}