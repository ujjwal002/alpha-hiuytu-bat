"use client";
// Financing section with a monthly-payment estimator.
//
// Renders NOTHING until FINANCING.enabled is true in app/lib/siteConfig.ts —
// safe to deploy today, flip on when the lender agreement is signed.
//
// Why this exists: a $15,000–$25,000 quote loses payment-sensitive buyers.
// "About $240/mo" keeps them. This reframes the same price without
// discounting it.
import { useMemo, useState } from "react";
import { BadgeDollarSign, CalendarClock, ShieldCheck, ArrowRight } from "lucide-react";
import { FINANCING } from "../lib/siteConfig";
import { event } from "../lib/gtag";

/** Standard amortized monthly payment: P·r / (1 − (1+r)^−n) */
function monthlyPayment(principal: number, aprPercent: number, months: number) {
  const r = aprPercent / 100 / 12;
  if (r === 0) return principal / months;
  return (principal * r) / (1 - Math.pow(1 + r, -months));
}

type FinancingSectionProps = {
  /** Anchor of the quote form on the current page ("#quote-form" on the homepage, "#contact" on city pages) */
  quoteAnchor?: string;
};

export default function FinancingSection({
  quoteAnchor = "#quote-form",
}: FinancingSectionProps) {
  const [amount, setAmount] = useState(FINANCING.defaultProject);

  const perMonth = useMemo(
    () =>
      Math.round(
        monthlyPayment(amount, FINANCING.representativeApr, FINANCING.termMonths)
      ),
    [amount]
  );

  if (!FINANCING.enabled) return null;

  const trackApply = () => {
    try {
      event({ action: "financing_apply_click", category: "lead", label: `$${amount}` });
    } catch {
      /* analytics must never break the page */
    }
  };

  const years = Math.round(FINANCING.termMonths / 12);

  return (
    <section id="financing" className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: pitch */}
          <div>
            <p className="text-gold-700 font-bold text-sm uppercase tracking-wider mb-3">
              Financing Available
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              A Luxury Bathroom, Around ${perMonth}/Month
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              You don&apos;t need the full amount up front. Qualified homeowners
              can spread the cost over up to {years} years through{" "}
              {FINANCING.lenderName} — same premium materials, same 5-year
              warranty, easier on the monthly budget.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <BadgeDollarSign className="h-6 w-6 text-gold-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700">
                  <strong className="text-gray-900">No project markup.</strong>{" "}
                  Financing changes how you pay, not what you pay.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CalendarClock className="h-6 w-6 text-gold-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700">
                  <strong className="text-gray-900">Fast decisions.</strong>{" "}
                  Most applications get an answer the same day.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-gold-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700">
                  <strong className="text-gray-900">Checking options is free.</strong>{" "}
                  No obligation — see what you qualify for before you decide.
                </span>
              </li>
            </ul>
          </div>

          {/* Right: estimator card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-7 sm:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Estimate your monthly payment
            </h3>

            <label htmlFor="financing-amount" className="block text-sm font-semibold text-gray-700 mb-2">
              Project cost:{" "}
              <span className="text-gold-700">${amount.toLocaleString()}</span>
            </label>
            <input
              id="financing-amount"
              type="range"
              min={FINANCING.minProject}
              max={FINANCING.maxProject}
              step={500}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full accent-gold-600 cursor-pointer"
              aria-valuetext={`$${amount.toLocaleString()}`}
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1 mb-6">
              <span>${FINANCING.minProject.toLocaleString()}</span>
              <span>${FINANCING.maxProject.toLocaleString()}</span>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-5 text-center mb-6">
              <p className="text-sm text-slate-600 mb-1">Estimated payment</p>
              <p className="text-4xl font-black text-gray-900">
                ${perMonth}
                <span className="text-lg font-semibold text-slate-500">/mo</span>
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {FINANCING.representativeApr}% APR · {FINANCING.termMonths} months
              </p>
            </div>

            {FINANCING.applyUrl ? (
              <a
                href={FINANCING.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackApply}
                className="w-full bg-gold-600 hover:bg-gold-700 text-white py-4 rounded-lg font-bold text-base transition-colors flex items-center justify-center gap-2"
              >
                Check Your Financing Options
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            ) : (
              <a
                href={quoteAnchor}
                className="w-full bg-gold-600 hover:bg-gold-700 text-white py-4 rounded-lg font-bold text-base transition-colors flex items-center justify-center gap-2"
              >
                Ask About Financing — Free Quote
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            )}

            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              {FINANCING.disclosure}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}