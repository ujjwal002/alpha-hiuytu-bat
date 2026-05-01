import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Livonia, MI | Stone Works Remodeling",
  description: "Expert bathroom remodeling in Livonia, MI. Full renovations, tub-to-shower conversions & walk-in tubs. Licensed, insured, 5-year warranty. Free in-home quote!",
  alternates: {
    canonical: "/livonia",
  },
};

export default function Page() {
  return <CityLanding city="Livonia" />;
}
