import type { Metadata } from "next";
import CityLanding from "../../components/CityLanding";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Warren, MI",
  description: "Trusted bathroom remodeling in Warren, MI. Full renovations, shower conversions, walk-in tubs. Licensed, insured, 5-year warranty. Free in-home quote!",
  alternates: {
    canonical: "/warren/",
  },
};

export default function Page() {
  return <CityLanding city="Warren" />;
}