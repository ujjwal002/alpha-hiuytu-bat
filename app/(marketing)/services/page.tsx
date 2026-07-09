import { Metadata } from "next";
import ServicesPageClient from "@/components/ServicesPageClient";

export const metadata: Metadata = {
  title: "Premium Bathroom Remodeling Services in Metro Detroit, MI",
  description:
    "Expert bathroom remodeling services in Metro Detroit including shower conversions, walk-in tubs, and stone installations.",
  alternates: {
    canonical: "/services/",
  },
};

export default function ServicesPage() {
  return (
    <main>
      {/* ================= SEO / AI GEO INTRO ================= */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <div className="max-w-3xl">
            <span className="text-gold-700 font-semibold uppercase tracking-wider">
              Service Areas
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              Bathroom Remodeling Services in{" "}
              <span className="text-gold-700">Metro Detroit, MI</span>
            </h1>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Stone Works Remodeling</strong> delivers high-end bathroom
              remodeling services across Metro Detroit, specializing in stone, tile,
              and custom bathroom craftsmanship.
            </p>

            {/* ===== CITY HIGHLIGHT BLOCK ===== */}
            <div className="mb-8">
              <p className="font-semibold text-gray-900 mb-3">
                Proudly serving homeowners in:
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  { city: "Detroit", color: "bg-cream-100 text-walnut-800" },
                  { city: "Troy", color: "bg-cream-100 text-walnut-800" },
                  { city: "Novi", color: "bg-cream-100 text-walnut-800" },
                  { city: "Royal Oak", color: "bg-cream-100 text-walnut-800" },
                  { city: "Sterling Heights", color: "bg-cream-100 text-walnut-800" },
                  { city: "Southfield", color: "bg-cream-100 text-walnut-800" },
                  { city: "Livonia", color: "bg-cream-100 text-walnut-800" },
                  { city: "Farmington Hills", color: "bg-cream-100 text-walnut-800" },
                ].map(({ city, color }) => (
                  <span
                    key={city}
                    className={`${color} px-3 py-1 rounded-full text-sm font-semibold`}
                  >
                    {city}, MI
                  </span>
                ))}
              </div>
            </div>


            <p className="text-gray-700 leading-relaxed">
              Homeowners trust our experienced team for transparent pricing, premium
              materials, and long-lasting remodeling results built to Michigan codes.
            </p>
          </div>
        </div>
      </section>



      {/* YOUR UI — UNTOUCHED */}
      <ServicesPageClient />
    </main>
  );
}