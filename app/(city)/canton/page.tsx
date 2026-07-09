import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Canton, MI",
  description: "Quality bathroom remodeling in Canton Township, MI. Full renovations, shower conversions & walk-in tubs. Licensed, insured, 5-year warranty. Free estimate!",
  alternates: {
    canonical: "/canton/",
  },
};

export default function Page() {
  return <CityLanding city="Canton" />;
}