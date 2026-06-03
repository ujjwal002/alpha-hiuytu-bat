// app/(marketing)/guides/plan-bathroom-remodel/page.tsx
// Step-by-step guide for planning a bathroom remodel in Metro Detroit.
// Uses HowToSchema for AEO — AI assistants prioritize HowTo schema when
// answering "how to..." questions, so this page captures conversational
// queries like "how do I plan a bathroom remodel" or "what should I know
// before remodeling my bathroom".
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2, Clock, DollarSign } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import HowToSchema, { planBathroomRemodelSteps } from "@/components/schemas/HowToSchema";

export const metadata: Metadata = {
  title: "How to Plan a Bathroom Remodel in Metro Detroit — Step-by-Step Guide",
  description:
    "Step-by-step guide to planning a bathroom remodel in Metro Detroit, MI. Budget, timeline, contractor selection, financing, and permits — everything you need to know before starting.",
  alternates: { canonical: "/guides/plan-bathroom-remodel" },
  openGraph: {
    title: "How to Plan a Bathroom Remodel in Metro Detroit — Complete Guide",
    description:
      "Free step-by-step planning guide for Metro Detroit homeowners considering a bathroom remodel. Budgets, timelines, contractor tips, financing, and permits explained.",
    type: "article",
  },
};

const PHONE = "(248) 955-2952";
const PHONE_HREF = "tel:+12489552952";

export default function PlanBathroomRemodelGuide() {
  return (
    <>
      {/* HowTo schema — AI assistants love this for "how to..." queries */}
      <HowToSchema
        name="How to Plan a Bathroom Remodel in Metro Detroit"
        description="Step-by-step guide for Metro Detroit homeowners on planning a bathroom remodel — budget, scope, contractor selection, timeline, materials, financing, and permits."
        image="https://www.stoneworksremodeling.com/bathroom/bath1.jpeg"
        totalTime="P30D"
        estimatedCost={{ currency: "USD", value: "15000" }}
        steps={planBathroomRemodelSteps}
      />

      <div className="min-h-screen bg-white">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-6">
          <Breadcrumbs items={[
            { label: "Guides", href: "/guides" },
            { label: "How to Plan a Bathroom Remodel" },
          ]} />
        </div>

        {/* Hero */}
        <section className="bg-gray-900 py-16 px-4 text-white">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Free Planning Guide
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5">
              How to Plan a Bathroom Remodel in <span className="text-blue-400">Metro Detroit</span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed max-w-3xl">
              A 7-step guide for Wayne, Oakland, and Macomb County homeowners.
              Budgets, timelines, contractor selection, financing, and permits
              — everything you need to know before starting your bathroom
              renovation.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 mt-8 max-w-2xl">
              <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3">
                <Clock className="h-5 w-5 text-blue-300 mb-2" aria-hidden="true" />
                <p className="text-xs text-blue-200 font-semibold uppercase">Reading Time</p>
                <p className="text-base font-bold">8 minutes</p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3">
                <DollarSign className="h-5 w-5 text-blue-300 mb-2" aria-hidden="true" />
                <p className="text-xs text-blue-200 font-semibold uppercase">Budget Range</p>
                <p className="text-base font-bold">$8K – $60K+</p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3">
                <CheckCircle2 className="h-5 w-5 text-blue-300 mb-2" aria-hidden="true" />
                <p className="text-xs text-blue-200 font-semibold uppercase">Steps</p>
                <p className="text-base font-bold">7 Steps</p>
              </div>
            </div>
          </div>
        </section>

        {/* TLDR */}
        <section className="py-10 px-4 bg-blue-50 border-y border-blue-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-3">
              Quick Summary
            </h2>
            <p className="text-gray-900 text-lg leading-relaxed mb-4">
              Successful bathroom remodels in Metro Detroit start with a realistic
              budget ($8K-$25K standard, $25K-$60K+ luxury), clear scope, and a
              licensed Michigan contractor with verifiable insurance and reviews.
              Standard projects take 5-10 business days. Most contractors offer
              0% APR financing for 12 months. Always pull township permits for
              plumbing or electrical changes.
            </p>
            <p className="text-sm text-slate-600">
              Already planning?{" "}
              <Link
                href="/compare"
                className="text-blue-700 font-semibold hover:underline"
              >
                Compare local contractors vs national franchises →
              </Link>
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black mb-3">
              7 Steps to Plan Your Bathroom Remodel
            </h2>
            <p className="text-slate-600 mb-10">
              Follow these in order — skipping steps is the #1 cause of remodel
              budget and timeline overruns.
            </p>

            <ol className="space-y-8">
              {planBathroomRemodelSteps.map((step, i) => (
                <li
                  key={i}
                  id={`step-${i + 1}`}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-100 scroll-mt-20"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-lg">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.name}
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Local context */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black mb-6">
              Specific to Metro Detroit
            </h2>
            <div className="space-y-5 text-slate-700">
              <p>
                <strong className="text-gray-900">Permits:</strong> Wayne, Oakland,
                and Macomb Counties each have separate township permitting offices.
                Most townships in Metro Detroit require permits for any bathroom
                remodel that includes plumbing relocation, electrical changes, or
                ventilation work. A simple cosmetic refresh (tile, vanity, fixtures
                with no relocation) typically does not require a permit.
              </p>
              <p>
                <strong className="text-gray-900">Older homes:</strong> If you live
                in pre-1960s Detroit, Royal Oak, Birmingham, or other older Metro
                Detroit communities, expect potential surprises behind the walls —
                cast iron drains, lead supply lines, knob-and-tube electrical, or
                plaster lath substrates. Build a 15-20% contingency into your
                budget for these scenarios.
              </p>
              <p>
                <strong className="text-gray-900">Aging-in-place:</strong> Walk-in
                tubs and accessible shower conversions are increasingly popular in
                Rochester, Bloomfield Hills, and Grosse Pointe communities.
                Michigan offers no specific tax credit for these upgrades, but
                they can qualify for medical expense deductions if a doctor
                prescribes them for safety.
              </p>
              <p>
                <strong className="text-gray-900">Best time to remodel:</strong>{" "}
                Fall (September-November) and late winter (February-March) are
                typically the easiest times to schedule a Metro Detroit
                contractor. Spring booking gets crowded with pent-up
                post-winter demand. Material lead times are also faster
                outside of peak season.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black mb-5">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Stone Works Remodeling has been helping Metro Detroit homeowners
              plan and complete bathroom renovations since 2009. Free in-home
              consultation, transparent pricing, 5-year warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold transition-colors"
              >
                <Phone className="h-5 w-5" /> {PHONE}
              </a>
              <Link
                href="/#quote-form"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold transition-colors"
              >
                Get Free Quote <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}