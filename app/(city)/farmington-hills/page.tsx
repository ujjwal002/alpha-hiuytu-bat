import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Farmington Hills, MI",
  description: "Expert bathroom remodeling in Farmington Hills, MI. Full renovations, tub-to-shower conversions & walk-in tubs. Licensed, 5-year warranty. Free estimate!",
  alternates: {
    canonical: "/farmington-hills/",
  },
};

export default function Page() {
  return <CityLanding city="Farmington Hills" />;
}