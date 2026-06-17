// app/components/CityLanding.tsx
// Per-city landing page (pulls unique content from cityData.ts).
// Premium stone/brass styling to match the site. All dynamic content,
// LocalBusiness/Service + FAQPage schema, and accordion logic preserved.
// Relies on .font-display (Fraunces) set up in layout.tsx.
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

const C = {
  ink: "#1c1916",
  bone: "#f4efe7",
  paper: "#fbf9f5",
  stone: "#e4dccf",
  brass: "#9c7c4a",
  brassHi: "#b89968",
  body: "#6b6258",
  muted: "#8a8175",
};

type CityLandingProps = {
  city: string;
  state?: string;
  phone?: string;
};

const DEFAULT_PHONE = "(248) 955-2952";

// Signature seam divider — light or dark variant
function Seam({ label, dark = false }: { label: string; dark?: boolean }) {
  const line = dark ? "rgba(244,239,231,0.18)" : C.stone;
  return (
    <div className="flex items-center justify-center gap-4 mb-5">
      <span className="h-px w-10 sm:w-14" style={{ background: line }} aria-hidden="true" />
      <span className="rotate-45 inline-block" style={{ width: 6, height: 6, background: C.brass }} aria-hidden="true" />
      <span className="font-display italic text-sm sm:text-base" style={{ color: dark ? C.brassHi : C.brass }}>{label}</span>
      <span className="rotate-45 inline-block" style={{ width: 6, height: 6, background: C.brass }} aria-hidden="true" />
      <span className="h-px w-10 sm:w-14" style={{ background: line }} aria-hidden="true" />
    </div>
  );
}

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

  const intro = info?.intro ||
    `Stone Works Remodeling delivers bespoke bathroom renovations across ${city}, ${state} — full remodels, tub-to-shower conversions, and walk-in tubs. Licensed, insured, and trusted by ${city} homeowners.`;

  const homeProfile = info?.homeProfile || "Local homes of all styles";
  const neighborhoods = info?.neighborhoods || [];
  const zips = info?.zips || [];
  const landmarks = info?.landmarks || [];
  const distanceFromHQ = info?.distanceFromHQ || `Servicing ${city} and surrounding areas`;
  const popularService = info?.popularService || "Tub-to-shower conversion";
  const avgProjectCost = info?.avgProjectCost || "$8,000 – $25,000";
  const county = info?.county;

  const faqs = [
    {
      q: `How much does a bathroom remodel cost in ${city}, ${state}?`,
      a: `Bathroom remodel costs in ${city} typically range from ${avgProjectCost}, depending on the scope, fixtures, and tile choices. ${
        info ? `Most homes in ${city} are ${homeProfile.toLowerCase()}, and we'll provide a full itemized quote during your private consultation — no surprises.` :
        `We'll provide a full itemized quote during your private consultation.`
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
    <div className="min-h-screen overflow-x-hidden font-sans" style={{ background: C.paper, color: C.ink }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb strip (light, above the dark hero so it stays legible) */}
      <div style={{ background: C.paper, borderBottom: `1px solid ${C.stone}` }}>
        <div className="container mx-auto max-w-5xl px-4 py-3">
          <Breadcrumbs items={[{ label: `${city}, ${state}` }]} />
        </div>
      </div>

      {/* HERO */}
      <section className="relative px-4 py-16 sm:py-20" style={{ background: C.ink }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: `radial-gradient(120% 80% at 85% 0%, rgba(184,153,104,0.13), transparent 55%)` }} />
        <div className="container mx-auto max-w-5xl relative">
          <span className="inline-flex items-center gap-2 mb-6" style={{ color: C.brassHi }}>
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-[0.24em] font-medium">Serving all of {city}, {state}</span>
          </span>

          <h1 className="font-display font-light leading-[1.02] text-4xl sm:text-5xl lg:text-6xl mb-6" style={{ color: C.bone }}>
            Bathroom remodeling in <span className="italic" style={{ color: C.brassHi }}>{city}, {state}</span>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg leading-relaxed mb-9" style={{ color: "rgba(244,239,231,0.78)" }}>
            {intro}
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-9 max-w-3xl">
            {[
              { label: "Avg. Project", value: avgProjectCost },
              { label: "Timeline", value: "5–10 days" },
              { label: "Most Popular", value: popularService },
              { label: "Warranty", value: "5 Years" },
            ].map((s) => (
              <div key={s.label} className="px-4 py-3.5" style={{ background: "rgba(244,239,231,0.06)", border: "1px solid rgba(244,239,231,0.14)" }}>
                <p className="text-[10px] uppercase tracking-[0.16em] mb-1" style={{ color: C.brassHi }}>{s.label}</p>
                <p className="font-display text-lg leading-tight" style={{ color: C.bone }}>{s.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${PHONE_DIGITS}`}
              onClick={trackCall}
              className="px-8 py-4 font-medium text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2.5 transition-colors"
              style={{ background: C.brass, color: C.ink }}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.brassHi)}
              onMouseLeave={(e) => (e.currentTarget.style.background = C.brass)}
              aria-label={`Call Stone Works Remodeling for ${city} bathroom remodeling`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> {phone}
            </a>
            <a
              href="#contact"
              className="px-8 py-4 font-medium text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2.5 transition-colors border"
              style={{ borderColor: "rgba(244,239,231,0.35)", color: C.bone }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(244,239,231,0.8)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(244,239,231,0.35)")}
            >
              <Calendar className="h-4 w-4" aria-hidden="true" /> Free Consultation
            </a>
          </div>

          <div className="flex items-center gap-2.5 mt-7">
            <div className="flex gap-0.5" aria-label="5 stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} className="h-4 w-4 text-amber-400 fill-amber-400" aria-hidden="true" />
              ))}
            </div>
            <p className="text-sm" style={{ color: "rgba(244,239,231,0.6)" }}>
              Trusted by {city} homeowners — 5.0 on Google
            </p>
          </div>
        </div>
      </section>

      {/* LOCAL CONTEXT */}
      {(neighborhoods.length > 0 || zips.length > 0) && (
        <section className="py-16 px-6" style={{ background: C.bone }}>
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <Seam label="Local roots" />
              <h2 className="font-display text-3xl sm:text-4xl font-light mb-3" style={{ color: C.ink }}>
                Bathroom remodeling throughout {city}
              </h2>
              <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: C.body }}>
                We work in every {city} neighborhood — from compact starter homes to full luxury renovations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {neighborhoods.length > 0 && (
                <div className="bg-white p-7" style={{ border: `1px solid ${C.stone}`, borderRadius: 16 }}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <MapPin className="h-5 w-5" style={{ color: C.brass }} aria-hidden="true" />
                    <h3 className="font-display text-lg" style={{ color: C.ink }}>Neighborhoods served</h3>
                  </div>
                  <ul className="space-y-2">
                    {neighborhoods.map((n) => (
                      <li key={n} className="text-sm flex items-start gap-2.5" style={{ color: C.body }}>
                        <Check className="h-3.5 w-3.5 mt-1 flex-shrink-0" style={{ color: C.brass }} aria-hidden="true" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {zips.length > 0 && (
                <div className="bg-white p-7" style={{ border: `1px solid ${C.stone}`, borderRadius: 16 }}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <MapPin className="h-5 w-5" style={{ color: C.brass }} aria-hidden="true" />
                    <h3 className="font-display text-lg" style={{ color: C.ink }}>{city} ZIP codes</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {zips.map((z) => (
                      <span key={z} className="text-sm font-medium px-3 py-1 rounded-full" style={{ color: C.brass, background: "rgba(156,124,74,0.1)" }}>
                        {z}
                      </span>
                    ))}
                  </div>
                  {county && (
                    <p className="text-xs mt-4" style={{ color: C.muted }}>{county} County, Michigan</p>
                  )}
                </div>
              )}

              {landmarks.length > 0 && (
                <div className="bg-white p-7" style={{ border: `1px solid ${C.stone}`, borderRadius: 16 }}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <Star className="h-5 w-5" style={{ color: C.brass }} aria-hidden="true" />
                    <h3 className="font-display text-lg" style={{ color: C.ink }}>Local landmarks</h3>
                  </div>
                  <ul className="space-y-2">
                    {landmarks.map((l) => (
                      <li key={l} className="text-sm" style={{ color: C.body }}>{l}</li>
                    ))}
                  </ul>
                  <p className="text-xs mt-4 italic" style={{ color: C.muted }}>{distanceFromHQ}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* SERVICES */}
      <section className="py-16 px-6" style={{ background: C.paper }}>
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <Seam label="What we craft" />
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-3" style={{ color: C.ink }}>
              Bathroom services in {city}, {state}
            </h2>
            <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: C.body }}>
              Most {city} projects fit one of these four categories. Explore the details or call for a private consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Complete Bathroom Remodeling", desc: `Full bathroom renovation in ${city} homes — tile, vanity, plumbing, lighting, and finish work.`, href: "/services/bathroom-remodeling", badge: popularService === "Full bathroom renovation" ? "Most popular in " + city : null },
              { title: "Tub-to-Shower Conversion", desc: `Convert your existing tub into a modern walk-in shower with custom tile and a frameless glass enclosure.`, href: "/services/shower-conversions", badge: popularService === "Tub-to-shower conversion" ? "Most popular in " + city : null },
              { title: "Walk-in Tub Installation", desc: `Accessible walk-in tubs with safety features — ideal for ${city} homeowners aging in place.`, href: "/services/walk-in-tubs", badge: popularService === "Walk-in tub installation" ? "Most popular in " + city : null },
              { title: "Custom Tile & Stone Work", desc: `Premium tile installations, custom showers, and stone surrounds for ${city} homes.`, href: "/services/custom-works", badge: popularService === "Luxury master bathroom renovation" ? "Most popular in " + city : null },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="block bg-white p-7 transition-all group hover:shadow-2xl"
                style={{ border: `1px solid ${C.stone}`, borderRadius: 16 }}
              >
                {s.badge && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] font-medium px-3 py-1 mb-3 rounded-full" style={{ color: C.brass, background: "rgba(156,124,74,0.12)" }}>
                    <span className="rotate-45 inline-block" style={{ width: 5, height: 5, background: C.brass }} aria-hidden="true" />
                    {s.badge}
                  </span>
                )}
                <h3 className="font-display text-xl mb-2" style={{ color: C.ink }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: C.body }}>{s.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-medium group-hover:gap-2.5 transition-all" style={{ color: C.brass }}>
                  Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 px-6" style={{ background: C.bone }}>
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <Seam label="Why homeowners choose us" />
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-3" style={{ color: C.ink }}>
              Local craft in {county ? county + " County" : "Metro Detroit"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px max-w-4xl mx-auto" style={{ background: C.stone }}>
            {[
              { icon: Shield, title: "Licensed & Insured in MI", desc: "Comprehensive insurance protects your home throughout the project." },
              { icon: Clock, title: "Done in 5–10 Days", desc: "Most remodels completed in under two weeks. We respect your time." },
              { icon: DollarSign, title: "Transparent Pricing", desc: "Itemized proposals with no hidden fees. Financing available." },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-8" style={{ background: C.bone }}>
                  <Icon className="h-6 w-6 mb-5" style={{ color: C.brass }} aria-hidden="true" />
                  <h3 className="font-display text-lg mb-2.5" style={{ color: C.ink }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.body }}>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ background: C.paper }}>
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <Seam label="Questions, answered" />
            <h2 className="font-display text-3xl sm:text-4xl font-light" style={{ color: C.ink }}>
              {city} bathroom remodeling FAQs
            </h2>
          </div>

          <div>
            {faqs.map((f, idx) => (
              <div key={idx} style={{ borderBottom: `1px solid ${C.stone}` }}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  className="w-full flex justify-between items-center gap-4 text-left py-6"
                >
                  <h3 className="font-display text-lg sm:text-xl" style={{ color: C.ink }}>{f.q}</h3>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                    style={{ color: C.brass }}
                    aria-hidden="true"
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? "max-h-60 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="leading-relaxed text-[15px]" style={{ color: C.body }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 text-center px-6 relative" style={{ background: C.ink }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: `radial-gradient(100% 70% at 50% 0%, rgba(184,153,104,0.12), transparent 60%)` }} />
        <div className="container mx-auto max-w-3xl relative">
          <Seam label="Begin your project" dark />
          <h2 className="font-display text-3xl sm:text-5xl font-light mb-5" style={{ color: C.bone }}>
            Ready to remodel your {city} bathroom?
          </h2>
          <p className="text-lg mb-9 max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(244,239,231,0.72)" }}>
            A private in-home consultation, transparent pricing, and a trusted local team. Call now or request a consultation online.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE_DIGITS}`}
              onClick={trackCall}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 font-medium text-xs uppercase tracking-[0.2em] transition-colors"
              style={{ background: C.brass, color: C.ink }}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.brassHi)}
              onMouseLeave={(e) => (e.currentTarget.style.background = C.brass)}
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> {phone}
            </a>
            <Link
              href="/#quote-form"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 font-medium text-xs uppercase tracking-[0.2em] transition-colors"
              style={{ background: C.bone, color: C.ink }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.background = C.bone)}
            >
              Request a Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}