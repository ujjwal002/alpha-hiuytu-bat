// app/components/FinancingBanner.tsx
// FIXED for Tailwind v4 — replaced `bg-gradient-to-br` with solid `bg-emerald-600`.
// In Tailwind v4 the gradient utility was renamed to `bg-linear-to-br`,
// so the old class name silently fails and leaves white text on a white BG.
//
// Financing CTA — competitors (Re-Bath, Bath Fitter, MD&CD) all lead with
// "0% APR" or "no payments for 12 months" offers. This converts hesitant
// homeowners who want the bathroom but don't want to drop $15k upfront.
"use client";
import { DollarSign, Phone, ArrowRight, Check } from "lucide-react";
import { event } from "../lib/gtag";

const PHONE = "(248) 955-2952";
const PHONE_HREF = "tel:+12489552952";

const onCallClick = () => {
  try {
    event({ action: "phone_click", category: "engagement", label: "Financing Banner" });
  } catch (e) { console.error("GTAG error:", e); }
};

export default function FinancingBanner() {
  return (
    <section className="py-12 bg-emerald-600 relative overflow-hidden">
      {/* Decorative shapes — solid emerald colors, no gradient class needed */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-emerald-500 opacity-40" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-emerald-700 opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">

          {/* Left: headline */}
          <div className="lg:col-span-3 text-white text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <DollarSign className="h-3.5 w-3.5" aria-hidden="true" />
              Bathroom Financing Available
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
              0% APR for 12 Months
              <span className="block text-emerald-100 text-xl sm:text-2xl lg:text-3xl mt-2 font-bold">
                $0 down · No payments for 90 days
              </span>
            </h2>
            <p className="text-emerald-50 text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              Get the bathroom you want now and pay over time. Monthly payments
              start as low as <strong className="text-white">$149/mo</strong> on approved credit.
            </p>

            <ul className="space-y-2 mb-6 max-w-md mx-auto lg:mx-0 text-left">
              {[
                "Quick online application — 60-second decision",
                "Soft credit pull — won't hurt your score to check",
                "Flexible terms from 12 to 144 months",
                "All credit types considered — even average credit",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="h-4 w-4 text-emerald-100 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-emerald-50">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: payment estimate card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                Sample Payment
              </p>
              <p className="text-sm text-slate-500 mb-4">$10,000 bathroom remodel</p>

              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 mb-5">
                <p className="text-slate-600 text-sm">As low as</p>
                <p className="text-5xl font-black text-emerald-700 leading-none my-1">
                  $149
                  <span className="text-lg text-emerald-600 font-bold">/mo</span>
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Based on 84-month term, on approved credit*
                </p>
              </div>

              <a
                href={PHONE_HREF}
                onClick={onCallClick}
                className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-lg font-bold text-sm transition-colors text-center"
                aria-label="Call to discuss financing options"
              >
                <Phone className="inline h-4 w-4 mr-2 -mt-0.5" aria-hidden="true" />
                Call {PHONE}
              </a>
              <a
                href="#quote-form"
                className="mt-2 block w-full text-center text-emerald-700 hover:text-emerald-900 font-semibold text-sm py-2"
              >
                Or get a free quote
                <ArrowRight className="inline h-3.5 w-3.5 ml-1" aria-hidden="true" />
              </a>
            </div>
            <p className="text-emerald-100 text-xs mt-3 text-center px-2">
              *Subject to credit approval. Rates and terms may vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}