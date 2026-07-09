import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Westland, MI",
  description: "Professional bathroom remodeling in Westland, MI. Full renovations, tub-to-shower conversions & walk-in tubs. Licensed, 5-year warranty. Free estimate!",
  alternates: {
    canonical: "/westland/",
  },
};

export default function Page() {
  return <CityLanding city="Westland" />;
}