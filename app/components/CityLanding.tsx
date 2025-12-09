// components/CityLanding.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Calendar, Check, Star, ChevronRight } from "lucide-react";
import { event } from "../lib/gtag";

type CityLandingProps = {
  city: string;            // e.g. "Detroit"
  state?: string;          // e.g. "MI" (default "MI")
  phone?: string;          // (optional) defaults to "(248) 346-8926"
  neighbourhoods?: string[]; // optional list to mention
};

const DEFAULT_PHONE = "(248) 346-8926";

export default function CityLanding({ city, state = "MI", phone = DEFAULT_PHONE, neighbourhoods = [] }: CityLandingProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const PHONE_DIGITS = `+1${phone.replace(/\D/g, "")}`;

  const trackCall = () => {
    try {
      event?.({ action: "phone_click", category: "lead", label: `${city} Page Phone` });
    } catch (e) { console.log("GTag event error:", e); }
  };

  // keywords: main + long-tail + local cluster for this city
  const keywords = [
    "bathroom remodeling",
    "bathroom renovation",
    "bathroom remodel cost",
    "bathroom remodeling contractor",
    "bathroom remodeling services",
    "small bathroom remodel",
    "luxury bathroom remodel",
    "bathroom redesign",
    "bathroom renovation near me",
    "bathroom remodel ideas",
    "affordable bathroom remodeling services",
    "modern small bathroom remodel ideas",
    "best bathroom remodeling contractors near me",
    "bathroom renovation cost breakdown",
    "walk-in shower remodel ideas",
    "low-budget bathroom remodeling tips",
    "eco-friendly bathroom renovation",
    "tub to shower conversion",
    "walk-in tub installation",
    `${city} bathroom remodeling`,
    `${city} bathroom renovation`,
    `${city} bathroom remodel`
  ].join(", ");

  const srKeywords = [
    `${city} bathroom remodeling`,
    `${city} bathroom renovation`,
    `${city} bathroom remodel cost`,
    `affordable bathroom remodeling ${city}`,
    `tub to shower conversion ${city}`,
    `walk-in tub ${city}`,
    "eco-friendly bathroom renovation",
    "small bathroom remodel ideas"
  ].join(", ");

  const pageTitle = `Bathroom Remodeling ${city}, ${state} | Stone Works Remodeling`;
  const pageDescription = `${city} bathroom remodeling — full bathroom renovations, tub-to-shower conversions, walk-in tubs, and small bathroom remodels. Licensed & insured ${city} contractors. Call ${phone} for a free in-home quote.`;

  // FAQ vary slightly per city
  const faqs = [
    {
      q: `How much does a bathroom remodel cost in ${city}?`,
      a: `Most ${city} bathroom remodels range from $8,000–$25,000 depending on scope and materials. We provide a full cost breakdown during the free consultation.`
    },
    {
      q: "How long does the remodel take?",
      a: "Standard remodels take 5–10 business days. Larger custom projects may take 2–3 weeks."
    },
    {
      q: `Do you work across ${city}?`,
      a: neighbourhoods.length
        ? `Yes — we serve ${neighbourhoods.join(", ")} and surrounding ${city} neighborhoods.`
        : `Yes — we serve all neighborhoods across ${city} and nearby areas.`
    },
    {
      q: "Can you convert a bathtub to a walk-in shower?",
      a: "Yes — our tub-to-shower conversions include waterproofing, custom tile, and glass enclosures for a modern, accessible finish."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Basic SEO meta (Next.js will pick <title> but for client file, keep these as safety) */}
      <head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`https://www.stoneworksremodeling.com/${city.toLowerCase().replace(/\s+/g, "-")}`} />
      </head>

      {/* Hidden semantic cluster */}
      <span className="sr-only">{srKeywords}</span>

      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-20 text-white text-center px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-4">
            Serving all of {city}, {state}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 leading-tight mb-6">
            Bathroom Remodeling {city}, {state}
          </h1>

          <p className="max-w-2xl mx-auto text-blue-100 text-lg leading-relaxed mb-8">
            Stone Works Remodeling delivers expert bathroom renovations across {city} — including full remodels, tub-to-shower conversions, walk-in tubs, and affordable small bathroom updates. Licensed, insured, and trusted by {city} homeowners.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${PHONE_DIGITS}`}
              onClick={trackCall}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold flex items-center justify-center"
              aria-label={`Call Stone Works Remodeling ${city}`}
            >
              <Phone className="mr-2 h-5 w-5" /> {phone}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <a
              href="#contact"
              className="border-2 border-blue-200 text-blue-200 hover:bg-blue-800/20 px-8 py-4 rounded-xl font-semibold flex items-center justify-center"
            >
              <Calendar className="mr-2 h-5 w-5" /> Free Consultation
            </a>
          </div>

          <div className="flex items-center justify-center mt-8">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} className="h-6 w-6 text-yellow-400" />
            ))}
          </div>
          <p className="text-blue-100 mt-2 text-sm">{city}&apos;s top-rated bathroom remodeling company</p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black">Bathroom Remodeling Services in {city}</h2>
          <p className="text-slate-700 max-w-3xl mx-auto mt-3">
            High-quality remodeling solutions for every {city} home. We handle design, permits, fixtures, tile, plumbing, and finishes with transparent pricing and efficient timelines.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-slate-800">
          {[
            `Complete bathroom remodeling — modern layouts, updated fixtures, custom tile for ${city} homes.`,
            "Tub-to-shower conversion — waterproofing, tiling, and low-entry shower designs.",
            "Walk-in tub installation — accessible and senior-friendly bath upgrades.",
            "Small bathroom remodels — maximizing space for city homes and condos.",
            "Affordable bathroom renovation options — budget-friendly yet durable.",
            "Eco-friendly bathroom upgrades — water-saving fixtures and low-VOC finishes."
          ].map((service, i) => (
            <div key={i} className="flex items-start space-x-3">
              <Check className="text-green-600 h-6 w-6 mt-1" />
              <p className="text-lg">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black">Why {city} Homeowners Choose Us</h2>
          <p className="text-slate-700 max-w-3xl mx-auto mt-3">
            Local contractors with a strong reputation for quality, reliability, and honest pricing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-slate-800">
          {[
            "Licensed & insured Michigan contractors for local projects.",
            "Fast installation — most remodels completed in 5–10 business days.",
            "Upfront, transparent pricing with detailed cost breakdown.",
            "5-year workmanship warranty on all remodels.",
            "Hundreds of 5-star reviews from local homeowners.",
            "Financing options available for larger remodels."
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-3">
              <Check className="text-blue-600 h-6 w-6 mt-1" />
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black">{city} Bathroom Remodeling FAQs</h2>
          <p className="text-slate-700 max-w-3xl mx-auto mt-3">
            Questions homeowners in {city} ask before starting their remodel.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((f, idx) => (
            <div key={idx} className="border-b py-4">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left flex justify-between items-center"
                aria-expanded={openFaq === idx}
              >
                <span className="font-bold text-lg">{f.q}</span>
                <ChevronRight className={`h-5 w-5 text-blue-600 transition ${openFaq === idx ? "rotate-90" : ""}`} />
              </button>
              {openFaq === idx && <p className="mt-3 text-slate-700">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-50 to-slate-50 text-center px-6">
        <h2 className="text-3xl font-black mb-4">Ready to Remodel Your Bathroom in {city}?</h2>
        <p className="text-slate-700 max-w-2xl mx-auto mb-6">
          Get a free in-home quote from a licensed local contractor. Transparent pricing, fast installs, and a trusted team serving {city}.
        </p>

        <a
          href={`tel:${PHONE_DIGITS}`}
          onClick={trackCall}
          className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold"
        >
          <Phone className="mr-2 h-6 w-6" /> {phone} — Free Quote
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-slate-600 border-t">
        © {new Date().getFullYear()} Stone Works Remodeling — {city}, {state}  
        <br />
        Licensed • Insured • Trusted Bathroom Contractors
      </footer>
    </div>
  );
}
