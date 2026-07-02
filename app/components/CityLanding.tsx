// app/components/CityLanding.tsx
// MAJOR REWRITE — was producing duplicate content across 15 city pages.
// Now pulls from cityData.ts to render unique content per city:
// - Unique intro paragraph
// - Real neighborhoods + ZIP codes
// - City-specific home profile + price range
// - Local FAQ with city-specific answers
// - LocalBusiness schema with correct city + ZIP coverage
//
// Drop-in replacement — the existing /app/(city)/[city]/page.tsx files keep
// working with their <CityLanding city="Livonia" /> calls.
"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Phone, ArrowRight, Calendar, Check, Star, ChevronDown, MapPin,
  Shield, Clock, DollarSign,
} from "lucide-react";
import { event } from "../lib/gtag";
import { getCityInfo } from "../lib/cityData";
import Breadcrumbs from "./Breadcrumbs";

type CityLandingProps = {
  city: string;
  state?: string;
  phone?: string;
};

const DEFAULT_PHONE = "(248) 955-2952";

export default function CityLanding({
  city,
  state = "MI",
  phone = DEFAULT_PHONE,
}: CityLandingProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const PHONE_DIGITS = `+1${phone.replace(/\D/g, "")}`;
  const slug = city.toLowerCase().replace(/\s+/g, "-");
  const info = getCityInfo(slug);

  const trackCall = () => {
    try {
      event?.({ action: "phone_click", category: "lead", label: `${city} City Page` });
    } catch (e) { console.log("GTag event error:", e); }
  };

  // Fallback values if city not in data file
  const intro = info?.intro ||
    `Stone Works Remodeling delivers expert bathroom renovations across ${city}, ${state} — including full remodels, tub-to-shower conversions, and walk-in tubs. Licensed, insured, and trusted by ${city} homeowners.`;

  const homeProfile = info?.homeProfile || "Local homes of all styles";
  const neighborhoods = info?.neighborhoods || [];
  const zips = info?.zips || [];
  const landmarks = info?.landmarks || [];
  const distanceFromHQ = info?.distanceFromHQ || `Servicing ${city} and surrounding areas`;
  const popularService = info?.popularService || "Tub-to-shower conversion";
  const avgProjectCost = info?.avgProjectCost || "$8,000 – $25,000";
  const county = info?.county;

  // City-specific FAQs
  const faqs = [
    {
      q: `How much does a bathroom remodel cost in ${city}, ${state}?`,
      a: `Bathroom remodel costs in ${city} typically range from ${avgProjectCost}, depending on the scope, fixtures, and tile choices. ${
        info ? `Most homes in ${city} are ${homeProfile.toLowerCase()}, and we'll provide a full itemized quote during your free in-home consultation — no surprises.` :
        `We'll provide a full itemized quote during your free in-home consultation.`
      }`,
    },
    {
      q: `How long does a bathroom remodel take in ${city}?`,
      a: `Standard ${city} bathroom remodels are completed in 5–10 business days. Larger custom projects (master baths, multi-bath packages) can take 2–3 weeks. We coordinate ${
        county ? `with ${county} County` : "with the township"
      } for permits and inspections.`,
    },
    {
      q: `What neighborhoods of ${city} do you serve?`,
      a: neighborhoods.length
        ? `We serve all of ${city}, including ${neighborhoods.slice(0, 5).join(", ")}, and surrounding areas. ${distanceFromHQ}.`
        : `We serve all of ${city} and surrounding areas. ${distanceFromHQ}.`,
    },
    {
      q: `What's the most popular bathroom service for ${city} homeowners?`,
      a: `In ${city}, the most-requested service we provide is ${popularService.toLowerCase()}. ${
        info ? `Given the ${homeProfile.toLowerCase()} typical here, this is usually the highest-impact upgrade.` : ""
      }`,
    },
    {
      q: "Are you licensed and insured in Michigan?",
      a: "Yes — Stone Works Remodeling is fully licensed and insured in the State of Michigan. All work is backed by our 5-year workmanship warranty, and we carry comprehensive liability insurance for your protection.",
    },
  ];

  // City-specific schema
  const citySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Bathroom Remodeling in ${city}, ${state}`,
    description: intro,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Stone Works Remodeling",
      telephone: "+12489552952",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Livonia",
        addressRegion: "MI",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: city,
      ...(zips.length && {
        containsPlace: zips.map((zip) => ({
          "@type": "PostalAddress",
          postalCode: zip,
          addressRegion: state,
        })),
      }),
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: avgProjectCost.split("–")[0].replace(/[^0-9]/g, ""),
      highPrice: avgProjectCost.split("–")[1]?.replace(/[^0-9]/g, "") || "30000",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="bg-gray-900 py-16 sm:py-20 px-4 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-stonelux-300 mb-6">
            <Breadcrumbs items={[{ label: `${city}, ${state}` }]} className="text-sm" />
          </div>

          <span className="inline-flex items-center gap-1.5 bg-gold-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="h-3 w-3" aria-hidden="true" />
            Serving all of {city}, {state}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5">
            Bathroom Remodeling in <span className="text-gold-300">{city}, {state}</span>
          </h1>

          <p className="max-w-2xl text-cream-100 text-base sm:text-lg leading-relaxed mb-8">
            {intro}
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 max-w-3xl">
            <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3">
              <p className="text-xs text-stonelux-300 font-semibold uppercase">Avg. Project</p>
              <p className="text-base font-bold text-white">{avgProjectCost}</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3">
              <p className="text-xs text-stonelux-300 font-semibold uppercase">Timeline</p>
              <p className="text-base font-bold text-white">5–10 days</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3">
              <p className="text-xs text-stonelux-300 font-semibold uppercase">Most Popular</p>
              <p className="text-base font-bold text-white">{popularService}</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3">
              <p className="text-xs text-stonelux-300 font-semibold uppercase">Warranty</p>
              <p className="text-base font-bold text-white">5 Years</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${PHONE_DIGITS}`}
              onClick={trackCall}
              className="bg-gold-600 hover:bg-gold-700 px-7 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
              aria-label={`Call Stone Works Remodeling for ${city} bathroom remodeling`}
            >
              <Phone className="h-5 w-5" aria-hidden="true" /> {phone}
            </a>
            <a
              href="#contact"
              className="border-2 border-white/40 hover:border-white text-white px-7 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <Calendar className="h-5 w-5" aria-hidden="true" /> Free Consultation
            </a>
          </div>

          <div className="flex items-center gap-2 mt-6">
            <div className="flex" aria-label="5 stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} className="h-4 w-4 text-amber-400 fill-amber-400" aria-hidden="true" />
              ))}
            </div>
            <p className="text-cream-100 text-sm">
              Trusted by {city} homeowners — 5.0 on Google
            </p>
          </div>
        </div>
      </section>

      {/* LOCAL CONTEXT — neighborhoods, ZIPs, landmarks */}
      {(neighborhoods.length > 0 || zips.length > 0) && (
        <section className="py-12 bg-slate-50 px-6">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl sm:text-3xl font-black text-center mb-3">
              Bathroom Remodeling Throughout {city}
            </h2>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
              We work in every {city} neighborhood — from compact starter homes to
              full luxury renovations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {neighborhoods.length > 0 && (
                <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-gold-700" aria-hidden="true" />
                    <h3 className="font-bold text-gray-900">Neighborhoods Served</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {neighborhoods.map((n) => (
                      <li key={n} className="text-sm text-slate-700 flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-gold-600 mt-1 flex-shrink-0" aria-hidden="true" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {zips.length > 0 && (
                <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-gold-700" aria-hidden="true" />
                    <h3 className="font-bold text-gray-900">{city} ZIP Codes</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {zips.map((z) => (
                      <span key={z} className="bg-cream-50 text-gold-700 text-sm font-semibold px-2.5 py-1 rounded">
                        {z}
                      </span>
                    ))}
                  </div>
                  {county && (
                    <p className="text-xs text-slate-500 mt-3">
                      {county} County, Michigan
                    </p>
                  )}
                </div>
              )}

              {landmarks.length > 0 && (
                <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="h-5 w-5 text-gold-700" aria-hidden="true" />
                    <h3 className="font-bold text-gray-900">Local Landmarks</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {landmarks.map((l) => (
                      <li key={l} className="text-sm text-slate-700">{l}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-500 mt-3 italic">
                    {distanceFromHQ}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* SERVICES */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-black text-center mb-3">
            Bathroom Services in {city}, {state}
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
            Most {city} bathroom projects fit one of these four categories. Click for details
            or call for a free in-home consultation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Complete Bathroom Remodeling",
                desc: `Full bathroom renovation in ${city} homes — tile, vanity, plumbing, lighting, and finish work.`,
                href: "/services/bathroom-remodeling",
                badge: popularService === "Full bathroom renovation" ? "Most popular in " + city : null,
              },
              {
                title: "Tub-to-Shower Conversion",
                desc: `Convert your existing tub into a modern walk-in shower with custom tile and glass enclosure.`,
                href: "/services/shower-conversions",
                badge: popularService === "Tub-to-shower conversion" ? "Most popular in " + city : null,
              },
              {
                title: "Walk-in Tub Installation",
                desc: `Accessible walk-in tubs with safety features — perfect for ${city} seniors aging in place.`,
                href: "/services/walk-in-tubs",
                badge: popularService === "Walk-in tub installation" ? "Most popular in " + city : null,
              },
              {
                title: "Custom Tile & Stone Work",
                desc: `Premium tile installations, custom showers, and stone surrounds for ${city} homes.`,
                href: "/services/custom-works",
                badge: popularService === "Luxury master bathroom renovation" ? "Most popular in " + city : null,
              },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="block bg-white border border-slate-200 hover:border-gold-500 hover:shadow-md rounded-xl p-6 transition-all group"
              >
                {s.badge && (
                  <span className="inline-block text-xs font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded mb-2">
                    ⭐ {s.badge}
                  </span>
                )}
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-gold-600">
                  {s.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-gold-700 font-bold text-sm group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-black text-center mb-3">
            Why {city} Homeowners Choose Stone Works
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
            Local contractors with deep roots in {county ? county + " County" : "Metro Detroit"}.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Shield, title: "Licensed & Insured in MI", desc: "Comprehensive insurance protects your home throughout the project." },
              { icon: Clock, title: "Done in 5–10 Days", desc: "Most remodels completed in under two weeks. We respect your time." },
              { icon: DollarSign, title: "Transparent, Itemized Proposals", desc: "A detailed, line-by-line proposal — you know exactly where your investment goes. No hidden fees, ever." },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 bg-gold-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-black text-center mb-3">
            {city} Bathroom Remodeling FAQs
          </h2>
          <p className="text-slate-600 text-center mb-10">
            What homeowners in {city} ask before starting a remodel.
          </p>

          <div className="space-y-3">
            {faqs.map((f, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden hover:border-gold-500/60 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  className="w-full flex justify-between items-center text-left py-5 px-6 hover:bg-slate-50"
                >
                  <h3 className="font-bold text-gray-900 pr-4 text-base">{f.q}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gold-700 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-200 ${
                  openFaq === idx ? "max-h-60 pb-5 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <p className="text-slate-700 leading-relaxed text-sm">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-16 bg-gold-600 text-center px-6 text-white"
      >
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to Remodel Your {city} Bathroom?
          </h2>
          <p className="text-cream-100 text-lg mb-8 max-w-2xl mx-auto">
            Free in-home quote, transparent pricing, and a trusted local team.
            Call now or fill out the form on our homepage.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE_DIGITS}`}
              onClick={trackCall}
              className="inline-flex items-center justify-center gap-2 bg-gold-600 hover:bg-gold-500 text-white px-8 py-4 rounded-lg font-bold transition-colors"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {phone}
            </a>
            <Link
              href="/#quote-form"
              className="inline-flex items-center justify-center gap-2 bg-white text-gold-700 hover:bg-cream-50 px-8 py-4 rounded-lg font-bold transition-colors"
            >
              Get Free Quote
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}