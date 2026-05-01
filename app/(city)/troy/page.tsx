import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Troy, MI | Stone Works Remodeling",
  description: "Trusted bathroom remodeling contractor in Troy, MI. Custom renovations, shower conversions, walk-in tubs. Licensed & insured. 5-year warranty. Free quote!",
  alternates: {
    canonical: "/troy",
  },
};

export default function Page() {
  return <CityLanding city="Troy" />;
}
