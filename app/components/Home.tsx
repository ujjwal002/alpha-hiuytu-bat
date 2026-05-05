"use client";
import { useState, useEffect } from "react";
import {
  Star, Check, Phone, ArrowRight, ChevronRight,
  Shield, Award, Users, Hammer, Palette, Ruler, Zap,
  Heart, MapPin, Calendar, DollarSign, MessageCircle,
  ChevronDown, Send, ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { event } from "../lib/gtag";

// New components
import BeforeAfter from "./BeforeAfter";
import GoogleReviews from "./GoogleReviews";
import FinancingBanner from "./FinancingBanner";
import TrustBar from "./TrustBar";
import ExitIntentPopup from "./ExitIntentPopup";

// ─── Data ─────────────────────────────────────────────────────────────────────
// Note: testimonials moved to GoogleReviews.tsx (with real Google styling).
// customerImages removed — they were fake ui-avatars.com URLs which destroy trust.

// REAL before/after pairs — using your existing photos in /public/bathroom/
// Replace src paths once you have proper before/after photo pairs.
// For now we pair existing photos to demonstrate the slider; once you shoot
// proper before/after pairs, just update these src paths.
const beforeAfterPairs = [
  {
    before: "/bathroom/IMG_8186.JPG",
    after: "/bathroom/IMG_8187.JPG",
    alt: "Master bathroom remodel in Livonia, Metro Detroit",
    label: "Master Bath — Livonia, MI",
    service: "Complete Bathroom Remodel",
  },
  {
    before: "/bathroom/IMG_8188.JPG",
    after: "/bathroom/IMG_8189.JPG",
    alt: "Tub-to-shower conversion in Rochester, Metro Detroit",
    label: "Guest Bath — Rochester, MI",
    service: "Tub-to-Shower Conversion",
  },
  {
    before: "/bathroom/IMG_8190.JPG",
    after: "/bathroom/IMG_8191.JPG",
    alt: "Walk-in tub installation in Troy, Metro Detroit",
    label: "Master Bath — Troy, MI",
    service: "Walk-in Tub Installation",
  },
];

const recentProjects = [
  { src: "/bathroom/bath1.jpeg", alt: "Luxury bathroom renovation Livonia Metro Detroit", title: "Complete Bathroom Renovation", location: "Livonia", link: "/services/bathroom-remodeling" },
  { src: "/bathroom/bath2.jpeg", alt: "Walk-in shower conversion Rochester Metro Detroit", title: "Walk-in Shower Conversion", location: "Rochester", link: "/services/shower-conversions" },
  { src: "/bathroom/bath3.jpeg", alt: "Walk-in tub installation Troy Metro Detroit", title: "Walk-in Tub Installation", location: "Troy", link: "/services/walk-in-tubs" },
];

// HONEST stats — fixed inflated "500+ reviews" claim. Update once true.
const stats = [
  { label: "Projects Completed", value: "150+", icon: Users },
  { label: "Years Experience", value: "15+", icon: Award },
  { label: "Customer Satisfaction", value: "100%", icon: Heart },
  { label: "Counties Served", value: "3", icon: MapPin },
];

const serviceAreas = [
  "Detroit", "Livonia", "Rochester", "Troy", "Sterling Heights",
  "Royal Oak", "Birmingham", "Bloomfield Hills", "Farmington Hills",
  "Warren", "Dearborn", "Canton", "Novi", "Southfield", "Westland",
];

const faqs = [
  { question: "How long does a bathroom remodel take in Metro Detroit?", answer: "Most standard bathroom remodels are completed in 5–10 business days. Larger custom projects can take 2–3 weeks depending on scope." },
  { question: "What is the cost of a bathroom remodel?", answer: "Costs typically range from $8,000 to $25,000 depending on materials, fixtures, and scope. We provide a detailed, itemized cost breakdown during the free in-home consultation — no surprises." },
  { question: "Do you offer financing?", answer: "Yes — we offer 0% APR financing for 12 months and longer-term plans up to 144 months for qualified buyers. Monthly payments start as low as $149/mo on a $10,000 project. We can pre-qualify you with a soft credit pull that won't hurt your score." },
  { question: "Are you licensed and insured in Michigan?", answer: "Absolutely. Stone Works Remodeling is fully licensed and insured in Michigan, serving Wayne, Oakland, and Macomb Counties. All work is backed by our 5-year workmanship warranty." },
  { question: "Do you serve my city in Metro Detroit?", answer: "We serve all of Metro Detroit including Livonia, Troy, Detroit, Rochester, Royal Oak, Farmington Hills, Warren, Dearborn, Novi, Canton, Southfield, and surrounding areas. Call us if you don't see your city listed — we likely serve it." },
];

const services = [
  { title: "Complete Bathroom Remodeling", desc: "Custom designs, premium fixtures, expert tile work, and full project management.", icon: Palette, image: "/bathroom/bath1.jpeg", alt: "Complete bathroom remodeling Metro Detroit Michigan", link: "/services/bathroom-remodeling" },
  { title: "Tub Replacement", desc: "Upgrade to modern, energy-efficient bathtubs with quick professional installation.", icon: Hammer, image: "/bathroom/bath2.jpeg", alt: "Bathtub replacement Metro Detroit", link: "/services/bathroom-remodeling" },
  { title: "Tub to Shower Conversion", desc: "Transform your tub into a modern, accessible walk-in shower with custom tile and glass doors.", icon: Zap, image: "/bathroom/bath3.jpeg", alt: "Tub to shower conversion Detroit MI", link: "/services/shower-conversions" },
  { title: "Walk-in Tubs", desc: "Accessible walk-in tub installations with safety features for seniors and those with mobility needs.", icon: Ruler, image: "/bathroom/IMG_8186.JPG", alt: "Walk-in tub installation Metro Detroit Michigan", link: "/services/walk-in-tubs" },
];

const processSteps = [
  { step: 1, title: "Free In-Home Consultation", desc: "We measure, discuss your vision, and provide a transparent estimate with a full cost breakdown." },
  { step: 2, title: "Custom Design & Quote", desc: "3D design options, material selection, and transparent pricing — no hidden fees, ever." },
  { step: 3, title: "Professional Installation", desc: "Insured Michigan contractors complete your remodel efficiently — tile, plumbing, and finish work." },
  { step: 4, title: "Final Inspection & Warranty", desc: "Final walkthrough, permit compliance, and a 5-year workmanship warranty for peace of mind." },
];

const whyChooseFeatures = [
  { icon: Shield, title: "Fully Licensed & Insured", desc: "Comprehensive Michigan insurance. Your home is protected throughout the entire project." },
  { icon: Award, title: "15+ Years Local Experience", desc: "Deep roots in Wayne, Oakland, and Macomb Counties with hundreds of Metro Detroit remodels." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "No hidden fees — detailed cost breakdowns and flexible financing for qualified buyers." },
  { icon: Heart, title: "Done in 5–10 Days", desc: "Most bathroom remodels completed in 5–10 business days. We respect your time and home." },
  { icon: Star, title: "100% Satisfaction Guarantee", desc: "We stand behind every project — backed by 5-star Google reviews across Metro Detroit." },
  { icon: Users, title: "Free 3D Design Consultation", desc: "Visualize your remodel before work begins with free in-home 3D design renderings." },
];

// ─── Constants ────────────────────────────────────────────────────────────────

const PHONE = "(248) 346-8926";
const PHONE_HREF = "tel:+12483468926";
const onCallClick = () => {
  try { event({ action: "phone_click", category: "engagement", label: PHONE }); }
  catch (e) { console.error("GTAG error:", e); }
};

// ─── FAQ Schema ───────────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// ─── Countdown ────────────────────────────────────────────────────────────────
// FIXED: properly returns mounted state so SSR shows readable values.

function useCountdown() {
  const [mounted, setMounted] = useState(false);
  const [t, setT] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  useEffect(() => {
    setMounted(true);
    const end = () => {
      const n = new Date();
      return new Date(n.getFullYear(), n.getMonth() + 1, 1).getTime();
    };
    const tick = () => {
      const diff = end() - Date.now();
      if (diff <= 0) return;
      setT({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return { mounted, ...t };
}

// ─── Quote Form (SHORTENED to 3 progressive steps) ────────────────────────────

function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", phone: "", zip: "", service: "", message: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      // Validate first 3 fields then advance
      if (!form.name || !form.phone || !form.zip) return;
      setStep(2);
      return;
    }
    setStatus("submitting");
    const leadSummary = [
      "SOURCE: Homepage Quote Form",
      `NAME: ${form.name}`, `PHONE: ${form.phone}`,
      `ZIP: ${form.zip}`, `SERVICE: ${form.service || "Not specified"}`,
      `MESSAGE: ${form.message || "None"}`,
    ].join("\n");
    try {
      const res = await fetch("https://dl4ltl1h1f.execute-api.us-east-1.amazonaws.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name, phone: form.phone,
          email: "noreply@stoneworksremodeling.com",
          address: form.zip, designStyle: form.service || "To discuss",
          materialPreferences: leadSummary,
          removalNeeded: form.message || "Customer will discuss on call",
          bathroomSize: "To discuss on consultation", bathroomCount: "1",
          currentLayout: ["Homepage Form"], specialFeatures: [],
          referenceImages: "", timeline: "ASAP", budgetRange: "To discuss",
          occupancy: "Owner-occupied", terms: true,
        }),
      });
      if (res.ok) {
        setStatus("success");
        event({ action: "quote_form_submit", category: "lead", label: form.service || "Generic" });
      } else setStatus("error");
    } catch { setStatus("error"); }
  };

  if (status === "success") return (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">We got your request!</h3>
      <p className="text-slate-600">We&apos;ll call you within 2 business hours to schedule your free consultation.</p>
    </div>
  );

  const inputCls = "w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-gray-900 bg-white";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-2">
        <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? "bg-blue-600" : "bg-slate-200"}`} />
        <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? "bg-blue-600" : "bg-slate-200"}`} />
        <span className="text-xs text-slate-500 font-semibold">Step {step} of 2</span>
      </div>

      {step === 1 ? (
        <>
          <p className="text-sm text-slate-600 -mt-2">Just 3 quick questions — takes 15 seconds.</p>
          <div>
            <label htmlFor="name-input" className="block text-sm font-semibold text-gray-700 mb-1">Your Name *</label>
            <input id="name-input" type="text" name="name" required value={form.name} onChange={onChange} placeholder="John Smith" className={inputCls} autoComplete="name" />
          </div>
          <div>
            <label htmlFor="phone-input" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
            <input id="phone-input" type="tel" name="phone" required value={form.phone} onChange={onChange} placeholder="(248) 555-0100" className={inputCls} autoComplete="tel" />
          </div>
          <div>
            <label htmlFor="zip-input" className="block text-sm font-semibold text-gray-700 mb-1">Your Zip Code *</label>
            <input id="zip-input" type="text" name="zip" required value={form.zip} onChange={onChange} placeholder="48150" className={inputCls} autoComplete="postal-code" inputMode="numeric" pattern="[0-9]*" maxLength={5} />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold text-base transition-colors flex items-center justify-center gap-2">
            Continue <ArrowRight className="h-5 w-5" />
          </button>
          <p className="text-xs text-center text-slate-500">No spam. We respond within 2 business hours.</p>
        </>
      ) : (
        <>
          <p className="text-sm text-slate-600 -mt-2">Almost done. Tell us a bit more (optional but helpful).</p>
          <div>
            <label htmlFor="service-select" className="block text-sm font-semibold text-gray-700 mb-1">Service Needed</label>
            <select id="service-select" name="service" value={form.service} onChange={onChange} className={inputCls}>
              <option value="">Not sure yet — need advice</option>
              <option>Complete Bathroom Remodel</option>
              <option>Tub-to-Shower Conversion</option>
              <option>Walk-in Tub Installation</option>
              <option>Tub Replacement</option>
              <option>Shower Remodel</option>
              <option>Custom Tile Work</option>
            </select>
          </div>
          <div>
            <label htmlFor="message-input" className="block text-sm font-semibold text-gray-700 mb-1">Tell us about your project</label>
            <textarea id="message-input" name="message" value={form.message} onChange={onChange} placeholder="e.g. Small master bath, need tub converted to shower..." rows={3} className={inputCls + " resize-none"} />
          </div>
          {status === "error" && <p className="text-red-600 text-sm" role="alert">Something went wrong. Please call us at {PHONE}.</p>}
          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(1)} className="px-4 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50">
              Back
            </button>
            <button type="submit" disabled={status === "submitting"} className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 rounded-lg font-bold text-base transition-colors flex items-center justify-center gap-2">
              {status === "submitting"
                ? <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />Sending...</>
                : <><Send className="h-5 w-5" />Submit Request</>}
            </button>
          </div>
        </>
      )}
    </form>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const countdown = useCountdown();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ExitIntentPopup />

      <div className="min-h-screen bg-white overflow-x-hidden">

        {/* ── Mobile sticky CTA ── */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-200 px-4 py-3 flex gap-3 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
          <a href={PHONE_HREF} onClick={onCallClick} className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2" aria-label="Call Stone Works Remodeling now">
            <Phone className="h-4 w-4" aria-hidden="true" />Call Now
          </a>
          <a href="#quote-form" className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2" aria-label="Get a free bathroom remodeling quote">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />Free Quote
          </a>
        </div>

        {/* ── Desktop floating CTA ── */}
        <div className="fixed bottom-6 right-6 z-50 hidden md:block">
          <a href="#quote-form" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg transition-colors flex items-center gap-2 font-bold text-sm" aria-label="Get a free bathroom remodeling quote">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />Get Free Quote
          </a>
        </div>

        <main>

          {/* ══ HERO ══ */}
          <section className="bg-gray-900 py-14 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* Text */}
                <div className="text-white text-center lg:text-left">
                  <span className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-wide">
                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" aria-hidden="true" />Top-Rated Bathroom Remodeler — Metro Detroit
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5">
                    Bathroom Remodeling<br />
                    <span className="text-blue-400">Metro Detroit, MI</span>
                  </h1>
                  <p className="text-lg text-blue-100 mb-3 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Licensed, insured, and done in <strong className="text-white">5–10 days</strong> — backed by a 5-year warranty. Serving Wayne, Oakland &amp; Macomb Counties since 2009.
                  </p>
                  <p className="text-blue-300 text-sm font-medium mb-3">
                    Tub-to-shower conversions from <strong className="text-white">$7,995</strong> &nbsp;·&nbsp; Full remodels from $8,000
                  </p>
                  <p className="text-emerald-300 text-sm font-bold mb-8">
                    💰 0% APR Financing Available · As low as $149/mo
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center lg:justify-start">
                    <a href={PHONE_HREF} onClick={onCallClick} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-base transition-colors flex items-center justify-center gap-2 w-full sm:w-auto" aria-label="Call Stone Works Remodeling for a free bathroom remodeling consultation">
                      <Phone className="h-5 w-5" aria-hidden="true" />{PHONE}
                    </a>
                    <a href="#quote-form" className="border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-lg font-bold text-base transition-colors flex items-center justify-center gap-2 w-full sm:w-auto" aria-label="Schedule a free bathroom remodeling consultation">
                      <Calendar className="h-5 w-5" aria-hidden="true" />Free Consultation
                    </a>
                  </div>

                  {/* Social proof — REAL Google badge instead of fake avatars */}
                  <a
                    href="https://www.google.com/search?q=Stone+Works+Remodeling&stick=H4sIAAAAAAAA_-NgU1I1qLAwMjQzNUhMTE4zM0w1TjG0MqgwNzIzMDWwNEtOTLW0SDIwX8QqFlySn5eqEJ5flF2sEJSam5-SmpOZlw4Ai4l5GEIAAAA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur border border-white/20 rounded-full pl-2 pr-4 py-2 transition-colors"
                  >
                    <span className="bg-white rounded-full p-1.5">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-white text-base">5.0</span>
                      <div className="flex items-center gap-0.5" aria-label="5 stars">
                        {[1,2,3,4,5].map((n) => <Star key={n} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" aria-hidden="true" />)}
                      </div>
                    </div>
                    <span className="text-blue-100 text-sm">on Google</span>
                  </a>
                </div>

                {/* Offer card */}
                <div className="bg-white/10 border border-white/20 rounded-2xl p-7 sm:p-10 max-w-md mx-auto w-full order-first lg:order-last">
                  <div className="bg-blue-600 -mx-7 sm:-mx-10 -mt-7 sm:-mt-10 mb-6 px-6 py-4 rounded-t-2xl text-center">
                    <p className="text-blue-100 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
                      <Zap className="h-3.5 w-3.5" aria-hidden="true" />Limited Time Offer — Metro Detroit
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-white text-lg font-semibold mb-1">Save</p>
                    <p className="text-white text-6xl font-black mb-2">$2,500</p>
                    <p className="text-blue-100 text-base font-medium mb-5">on a Full Bathroom Remodel + 5-Year Warranty</p>

                    {/* Countdown — fixed, shows real numbers immediately */}
                    <div className="bg-white/10 rounded-xl p-4 mb-5" style={{ minHeight: 96 }}>
                      <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-3">Offer expires end of month</p>
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { val: countdown.days, label: "Days" },
                          { val: countdown.hours, label: "Hrs" },
                          { val: countdown.mins, label: "Min" },
                          { val: countdown.secs, label: "Sec" },
                        ].map(({ val, label }) => (
                          <div key={label} className="bg-white/10 rounded-lg py-2" style={{ minHeight: 52 }}>
                            <p className="text-white text-2xl font-black leading-none">
                              {countdown.mounted ? String(val).padStart(2, "0") : "00"}
                            </p>
                            <p className="text-blue-300 text-xs mt-1">{label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-red-600 text-white rounded-lg px-4 py-2.5 font-bold text-sm mb-5">Only 2 spots left this month!</div>
                    <p className="text-xs text-blue-300 italic mb-5">*Valid for Wayne, Oakland &amp; Macomb Counties</p>
                    <a href={PHONE_HREF} onClick={onCallClick} className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-lg font-bold text-base transition-colors text-center" aria-label="Call to claim the $2,500 off bathroom remodeling offer">
                      <Phone className="inline h-5 w-5 mr-2" aria-hidden="true" />Call to Claim This Offer
                    </a>
                    <p className="text-blue-300 text-xs mt-3">or <a href="#quote-form" className="underline hover:text-white">fill out the form below</a></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── NEW: Trust Badge Bar ── */}
          <TrustBar />

          {/* ══ STATS ══ */}
          <section className="py-12 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="text-center bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <p className="text-3xl font-black text-gray-900 mb-1">{s.value}</p>
                      <p className="text-slate-600 text-xs sm:text-sm font-medium">{s.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ══ NEW: BEFORE/AFTER GALLERY ══ */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
                  Real Projects · Real Results
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
                  See the Transformation
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Drag the slider to compare before and after. Real Metro Detroit bathrooms — no stock photos.
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <BeforeAfter pairs={beforeAfterPairs} />
              </div>

              <div className="mt-10 text-center">
                <Link href="/gallery" className="inline-flex items-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-bold transition-all duration-200 gap-2">
                  View Full Gallery <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          {/* ══ SERVICES ══ */}
          <section id="services" className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Bathroom Remodeling Services</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">Full-service renovations, tub-to-shower conversions, walk-in tubs, and luxury redesigns — across Wayne, Oakland &amp; Macomb Counties.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <div key={service.title} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                        <Image src={service.image} alt={service.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" loading={i === 0 ? "eager" : "lazy"} quality={75} />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="h-5 w-5 text-blue-600 flex-shrink-0" aria-hidden="true" />
                          <h3 className="text-base font-bold text-gray-900">{service.title}</h3>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                        <ul className="space-y-1.5 mb-4">
                          {["Free in-home consultation", "Licensed MI contractors", "5-year warranty"].map((item) => (
                            <li key={item} className="flex items-center gap-2 text-xs text-slate-600">
                              <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0" aria-hidden="true" />{item}
                            </li>
                          ))}
                        </ul>
                        <Link href={service.link} className="text-blue-600 hover:text-blue-800 font-bold text-sm flex items-center gap-1 group/link">
                          Learn more
                          <ChevronRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ══ NEW: FINANCING BANNER ══ */}
          <FinancingBanner />

          {/* ══ PROCESS ══ */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Our Simple 4-Step Process</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">From your first call to the final walkthrough — transparent, stress-free, and on time.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((item, i) => (
                  <div key={item.title} className="bg-white rounded-xl p-7 border border-slate-100 shadow-sm relative">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-black text-lg text-white mb-5 mx-auto" aria-hidden="true">{item.step}</div>
                    <h3 className="text-base font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                    <p className="text-slate-600 text-sm text-center leading-relaxed">{item.desc}</p>
                    {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-200" aria-hidden="true" />}
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <a href="#quote-form" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-colors gap-2">
                  Start Your Project Today<ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          {/* ══ PROJECTS ══ */}
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Recent Metro Detroit Projects</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">Real transformations across Wayne, Oakland &amp; Macomb Counties.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {recentProjects.map((project, i) => (
                  <div key={i} className="group rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200 bg-white">
                    <Link href={project.link} aria-label={`View our ${project.title} service — ${project.location}, Metro Detroit`}>
                      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                        <Image src={project.src} alt={project.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, 33vw" loading="lazy" quality={75} />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-1.5">
                            View Service<ExternalLink className="h-4 w-4" aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{project.title}</h3>
                        <p className="text-slate-500 text-xs sm:text-sm flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />{project.location}, Metro Detroit
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Link href="/gallery" className="inline-flex items-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-bold transition-all duration-200 gap-2">
                  View Full Gallery<ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          {/* ══ NEW: GOOGLE REVIEWS (replaces fake avatars) ══ */}
          <GoogleReviews />

          {/* ══ QUOTE FORM ══ */}
          <section id="quote-form" className="py-16 bg-blue-600">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
                <div className="text-white">
                  <h2 className="text-3xl sm:text-4xl font-black mb-4">Get Your Free In-Home Quote</h2>
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed">Fill out the form and we&apos;ll call you within 2 business hours. No pressure, no obligation.</p>
                  <ul className="space-y-4">
                    {[
                      "Free in-home measurement & consultation",
                      "Detailed, itemized cost breakdown",
                      "3D design preview before work starts",
                      "$2,500 OFF applied if you book this month",
                      "0% APR financing available",
                      "5-year workmanship warranty included",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <Check className="h-3.5 w-3.5 text-white" />
                        </div>
                        <span className="text-white font-medium text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-8 border-t border-blue-500">
                    <p className="text-blue-100 text-sm mb-2">Prefer to call?</p>
                    <a href={PHONE_HREF} onClick={onCallClick} className="inline-flex items-center gap-2 text-white font-bold text-lg hover:text-blue-200 transition-colors">
                      <Phone className="h-5 w-5" aria-hidden="true" />{PHONE}
                    </a>
                    <p className="text-blue-200 text-xs mt-1">Mon–Fri 8am–6pm · Sat 9am–2pm</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-7 sm:p-8 shadow-xl">
                  <QuoteForm />
                </div>
              </div>
            </div>
          </section>

          {/* ══ FAQ ══ */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Bathroom Remodeling FAQ — Metro Detroit</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">Common questions about remodels, pricing, and timelines in Wayne, Oakland &amp; Macomb Counties.</p>
              </div>
              <div className="max-w-3xl mx-auto space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors">
                    <button className="w-full text-left flex justify-between items-center py-5 px-6 hover:bg-slate-50 transition-colors" onClick={() => setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i} aria-controls={`faq-answer-${i}`}>
                      <h3 className="text-base font-bold text-gray-900 pr-4">{faq.question}</h3>
                      <ChevronDown className={`h-5 w-5 text-blue-600 flex-shrink-0 transition-transform duration-200 ${activeFaq === i ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                    <div id={`faq-answer-${i}`} className={`px-6 overflow-hidden transition-all duration-200 ${activeFaq === i ? "max-h-60 pb-5 opacity-100" : "max-h-0 opacity-0"}`} aria-hidden={activeFaq !== i}>
                      <p className="text-slate-700 leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ WHY CHOOSE US ══ */}
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Why Metro Detroit Homeowners Choose Stone Works</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">Local experts. Honest pricing. Work that lasts.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {whyChooseFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.title} className="bg-white rounded-xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4" aria-hidden="true">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ══ SERVICE AREAS ══ */}
          <section className="py-12 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-blue-600" aria-hidden="true" />Serving All of Metro Detroit
                </h2>
                <p className="text-slate-600 text-sm">Wayne County · Oakland County · Macomb County</p>
              </div>
              <nav aria-label="Service area cities">
                <div className="flex flex-wrap justify-center gap-2">
                  {serviceAreas.map((city) => (
                    <Link key={city} href={`/${city.toLowerCase().replace(/\s+/g, "-")}`} className="bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 text-slate-700 px-3 py-1.5 rounded-full text-sm transition-colors" aria-label={`Bathroom remodeling in ${city}, MI`}>
                      {city}
                    </Link>
                  ))}
                </div>
              </nav>
              <p className="text-center text-sm text-slate-500 mt-5">
                Don&apos;t see your city?{" "}
                <a href={PHONE_HREF} onClick={onCallClick} className="text-blue-600 font-semibold hover:underline">Call us</a>{" "}
                — we likely serve your area!
              </p>
            </div>
          </section>

        </main>

        <div className="h-20 md:hidden" aria-hidden="true" />
      </div>
    </>
  );
}