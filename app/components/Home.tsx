"use client";
import { useState, useEffect, useRef } from "react";
import {
  Star, Check, Phone, ArrowRight, Clock, ChevronRight,
  Shield, Award, Users, Hammer, Palette, Ruler, Zap,
  Heart, MapPin, Calendar, DollarSign, MessageCircle,
  ChevronDown, Send, ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { event } from "../lib/gtag";

// ─── Data ─────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    id: 1, name: "Cari Z.", location: "Livonia, MI",
    quote: "The team transformed our dated bathrooms into beautiful, functional spaces — professional, punctual, and detail-oriented. Highly recommend Stone Works Remodeling!",
    rating: 5,
    image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user1.webp",
    projectType: "Multiple Bathroom Remodel",
    alt: "Bathroom remodeling customer Livonia Metro Detroit",
  },
  {
    id: 2, name: "Kelly S.", location: "Rochester, MI",
    quote: "We needed a walk-in tub for safety and accessibility. Stone Works delivered perfect installation and service. Excellent communication throughout.",
    rating: 5,
    image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user2.webp",
    projectType: "Walk-in Tub Installation",
    alt: "Walk-in tub installation customer Rochester Metro Detroit",
  },
  {
    id: 3, name: "Amit S.", location: "Troy, MI",
    quote: "Val and the crew completed our master bathroom remodel on time and with great attention to detail. Beautiful results and a clean worksite.",
    rating: 5,
    image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user4.webp",
    projectType: "Tub-to-Shower Conversion",
    alt: "Shower conversion customer Troy Metro Detroit",
  },
];

const customerImages = [
  { src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user1.webp", alt: "Cari Z., satisfied bathroom remodeling customer, Livonia MI" },
  { src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user2.webp", alt: "Kelly S., walk-in tub installation customer, Rochester MI" },
  { src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user3.webp", alt: "Satisfied shower conversion customer, Detroit MI" },
  { src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user4.webp", alt: "Amit S., tub-to-shower conversion customer, Troy MI" },
];

const recentProjects = [
  { src: "/bathroom/bath1.jpeg", alt: "Luxury bathroom renovation Livonia Metro Detroit", title: "Complete Bathroom Renovation", location: "Livonia", link: "/services/bathroom-remodeling" },
  { src: "/bathroom/bath2.jpeg", alt: "Walk-in shower conversion Rochester Metro Detroit", title: "Walk-in Shower Conversion", location: "Rochester", link: "/services/shower-conversions" },
  { src: "/bathroom/bath3.jpeg", alt: "Walk-in tub installation Troy Metro Detroit", title: "Walk-in Tub Installation", location: "Troy", link: "/services/walk-in-tubs" },
];

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
  { question: "Do you offer financing and eco-friendly options?", answer: "Yes — we offer flexible financing for qualified buyers and can recommend eco-friendly fixtures and low-VOC finishes for sustainable bathroom renovations." },
  { question: "Are you licensed and insured in Michigan?", answer: "Absolutely. Stone Works Remodeling is fully licensed and insured in Michigan, serving Wayne, Oakland, and Macomb Counties. All work is backed by our 5-year workmanship warranty." },
  { question: "Do you serve my city in Metro Detroit?", answer: "We serve all of Metro Detroit including Livonia, Troy, Detroit, Rochester, Royal Oak, Farmington Hills, Warren, Dearborn, Novi, Canton, Southfield, and surrounding areas. Call us if you don't see your city listed — we likely serve it." },
];

const services = [
  { title: "Complete Bathroom Remodeling", desc: "Custom designs, premium fixtures, expert tile work, and full project management.", icon: Palette, image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/recent/pic7.jpeg", alt: "Complete bathroom remodeling Metro Detroit Michigan", link: "/services/bathroom-remodeling" },
  { title: "Tub Replacement", desc: "Upgrade to modern, energy-efficient bathtubs with quick professional installation.", icon: Hammer, image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/recent/pic9.jpeg", alt: "Bathtub replacement Metro Detroit", link: "/services/bathroom-remodeling" },
  { title: "Tub to Shower Conversion", desc: "Transform your tub into a modern, accessible walk-in shower with custom tile and glass doors.", icon: Zap, image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/recent/pic8.jpeg", alt: "Tub to shower conversion Detroit MI", link: "/services/shower-conversions" },
  { title: "Walk-in Tubs", desc: "Accessible walk-in tub installations with safety features for seniors and those with mobility needs.", icon: Ruler, image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/recent/pic4.jpeg", alt: "Walk-in tub installation Metro Detroit Michigan", link: "/services/walk-in-tubs" },
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
  { icon: Clock, title: "Done in 5–10 Days", desc: "Most bathroom remodels completed in 5–10 business days. We respect your time and home." },
  { icon: Heart, title: "100% Satisfaction Guarantee", desc: "We stand behind every project — backed by 500+ five-star reviews across Metro Detroit." },
  { icon: Users, title: "Free 3D Design Consultation", desc: "Visualize your remodel before work begins with free in-home 3D design renderings." },
];

// ─── Constants ────────────────────────────────────────────────────────────────

const PHONE = "(248) 346-8926";
const PHONE_HREF = "tel:+12483468926";
const onCallClick = () => {
  try { event({ action: "phone_click", category: "engagement", label: PHONE }); }
  catch (e) { console.error("GTAG error:", e); }
};

// ─── FAQ Schema (LocalBusiness lives in layout.tsx) ───────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

// ─── Countdown — stable initial state to prevent CLS ────────────────────────
// FIX CLS: we render blank initially and only show countdown after mount
// This prevents server/client mismatch that causes layout shift

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

// ─── Quote Form ───────────────────────────────────────────────────────────────

function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", zip: "", message: "" });
  // FIX CLS: give the select a unique id so the label can associate with it
  const serviceSelectId = "service-select";

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    const leadSummary = [
      "SOURCE: Homepage Quick Quote Form",
      `NAME: ${form.name}`,
      `PHONE: ${form.phone}`,
      `EMAIL: ${form.email || "Not provided"}`,
      `SERVICE: ${form.service}`,
      `ZIP: ${form.zip}`,
      `MESSAGE: ${form.message || "None"}`,
    ].join("\n");

    try {
      const res = await fetch("https://dl4ltl1h1f.execute-api.us-east-1.amazonaws.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          phone: form.phone,
          email: form.email || "noreply@stoneworksremodeling.com",
          address: form.zip,
          designStyle: form.service,
          materialPreferences: leadSummary,
          removalNeeded: form.message || "Customer will discuss on call",
          bathroomSize: "To discuss on consultation",
          bathroomCount: "1",
          currentLayout: ["Homepage Quick Form"],
          specialFeatures: [],
          referenceImages: "",
          timeline: "ASAP — customer submitted homepage quote",
          budgetRange: "To discuss on consultation",
          occupancy: "Owner-occupied",
          terms: true,
        }),
      });
      if (res.ok) {
        setStatus("success");
        event({ action: "quote_form_submit", category: "lead", label: form.service });
      } else {
        setStatus("error");
      }
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

  const inputCls = "w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition text-gray-900";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          {/* FIX Accessibility: explicit label for every input */}
          <label htmlFor="name-input" className="block text-sm font-semibold text-gray-700 mb-1">Your Name *</label>
          <input id="name-input" type="text" name="name" required value={form.name} onChange={onChange} placeholder="John Smith" className={inputCls} />
        </div>
        <div>
          <label htmlFor="phone-input" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
          <input id="phone-input" type="tel" name="phone" required value={form.phone} onChange={onChange} placeholder="(248) 555-0100" className={inputCls} />
        </div>
      </div>
      <div>
        <label htmlFor="email-input" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
        <input id="email-input" type="email" name="email" value={form.email} onChange={onChange} placeholder="john@email.com" className={inputCls} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          {/* FIX Accessibility: label now associated with select via htmlFor + id */}
          <label htmlFor={serviceSelectId} className="block text-sm font-semibold text-gray-700 mb-1">Service Needed *</label>
          <select id={serviceSelectId} name="service" required value={form.service} onChange={onChange} className={inputCls + " bg-white"}>
            <option value="">Select a service...</option>
            <option>Complete Bathroom Remodel</option>
            <option>Tub-to-Shower Conversion</option>
            <option>Walk-in Tub Installation</option>
            <option>Tub Replacement</option>
            <option>Shower Remodel</option>
            <option>Custom Tile Work</option>
            <option>Not sure — need advice</option>
          </select>
        </div>
        <div>
          <label htmlFor="zip-input" className="block text-sm font-semibold text-gray-700 mb-1">Zip Code *</label>
          <input id="zip-input" type="text" name="zip" required value={form.zip} onChange={onChange} placeholder="48150" className={inputCls} />
        </div>
      </div>
      <div>
        <label htmlFor="message-input" className="block text-sm font-semibold text-gray-700 mb-1">Tell us about your project (optional)</label>
        <textarea id="message-input" name="message" value={form.message} onChange={onChange} placeholder="e.g. Small master bath, need tub converted to shower, budget around $10k..." rows={3} className={inputCls + " resize-none"} />
      </div>
      {status === "error" && (
        <p className="text-red-600 text-sm" role="alert">Something went wrong. Please call us directly at {PHONE}.</p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-4 rounded-xl font-bold text-base transition flex items-center justify-center gap-2"
        aria-label="Submit free quote request form"
      >
        {status === "submitting"
          ? <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />Sending...</>
          : <><Send className="h-5 w-5" aria-hidden="true" />Get My Free Quote — No Obligation</>}
      </button>
      <p className="text-xs text-center text-slate-500">We respond within 2 business hours. No spam, ever.</p>
    </form>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const countdown = useCountdown();

  useEffect(() => {
    const id = setInterval(() => setActiveTestimonial((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  // FIX TBT: only animate elements that are actually in view, minimal config
  const inView = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.35, ease: "easeOut" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-white overflow-x-hidden">

        {/* ── Mobile sticky CTA ── */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-200 px-4 py-3 flex gap-3">
          <a
            href={PHONE_HREF}
            onClick={onCallClick}
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
            aria-label="Call Stone Works Remodeling now"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />Call Now
          </a>
          <a
            href="#quote-form"
            className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
            aria-label="Get a free bathroom remodeling quote"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />Free Quote
          </a>
        </div>

        {/* ── Desktop floating CTA ── */}
        <div className="fixed bottom-6 right-6 z-50 hidden md:block">
          <a
            href="#quote-form"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-xl transition flex items-center gap-2 font-bold text-sm"
            aria-label="Get a free bathroom remodeling quote"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />Get Free Quote
          </a>
        </div>

        <main>

          {/* ══ HERO ══ */}
          <section className="relative bg-gray-900 py-12 sm:py-16 lg:py-24 overflow-hidden">
            {/* FIX LCP: NO background image in CSS — use a static color so hero text renders immediately */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(37,99,235,0.25),transparent_60%)]" aria-hidden="true" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* Text */}
                <motion.div
                  className="text-white text-center lg:text-left"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-wide">
                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" aria-hidden="true" />#1 Rated Bathroom Remodeler — Metro Detroit
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] mb-5 tracking-tight">
                    Bathroom Remodeling<br /><span className="text-blue-400">Metro Detroit, MI</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-blue-100 mb-3 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Licensed, insured, and done in <strong className="text-white">5–10 days</strong> — backed by a 5-year warranty. Serving Wayne, Oakland &amp; Macomb Counties since 2009.
                  </p>
                  <p className="text-blue-200 text-sm font-medium mb-8">
                    Full remodels starting from $8,000 &nbsp;·&nbsp; Free in-home estimate
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center lg:justify-start">
                    <a
                      href={PHONE_HREF}
                      onClick={onCallClick}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-base transition shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto"
                      aria-label="Call Stone Works Remodeling for a free bathroom remodeling consultation"
                    >
                      <Phone className="h-5 w-5" aria-hidden="true" />{PHONE}
                    </a>
                    <a
                      href="#quote-form"
                      className="border-2 border-white/60 hover:border-white text-white px-8 py-4 rounded-xl font-bold text-base transition flex items-center justify-center gap-2 w-full sm:w-auto"
                      aria-label="Schedule a free bathroom remodeling consultation"
                    >
                      <Calendar className="h-5 w-5" aria-hidden="true" />Schedule Free Consultation
                    </a>
                  </div>

                  {/* Social proof — FIX CLS: fixed dimensions on avatars */}
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <div className="flex -space-x-2" aria-label="Photos of satisfied customers">
                      {customerImages.map((img, i) => (
                        <div
                          key={img.src}
                          className="rounded-full border-2 border-white overflow-hidden bg-blue-300"
                          style={{ width: 40, height: 40, minWidth: 40 }}
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"
                            priority={i < 2}
                            quality={70}
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center gap-0.5 mb-0.5" aria-label="5 star rating">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <Star key={n} className="h-4 w-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                        ))}
                      </div>
                      <p className="text-blue-100 text-sm font-semibold">500+ happy Metro Detroit homeowners</p>
                    </div>
                  </div>
                </motion.div>

                {/* Offer Card — FIX CLS: explicit min-height so countdown doesn't shift layout */}
                <motion.div
                  className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 sm:p-10 max-w-md mx-auto w-full order-first lg:order-last"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="bg-blue-600 -mx-7 sm:-mx-10 -mt-7 sm:-mt-10 mb-6 px-6 py-4 rounded-t-3xl text-center">
                    <p className="text-blue-100 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
                      <Zap className="h-3.5 w-3.5" aria-hidden="true" />Limited Time Offer — Metro Detroit
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-white text-lg font-semibold mb-1">Save</p>
                    <p className="text-white text-6xl font-black mb-2">$2,500</p>
                    <p className="text-blue-100 text-base font-medium mb-5">Full Bathroom Remodel + 5-Year Warranty</p>

                    {/* FIX CLS: fixed height container — no layout shift when countdown mounts */}
                    <div className="bg-white/10 rounded-2xl p-4 mb-5" style={{ minHeight: 96 }}>
                      <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-3">Offer expires end of month</p>
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { val: countdown.days, label: "Days" },
                          { val: countdown.hours, label: "Hrs" },
                          { val: countdown.mins, label: "Min" },
                          { val: countdown.secs, label: "Sec" },
                        ].map(({ val, label }) => (
                          <div key={label} className="bg-white/10 rounded-xl py-2" style={{ minHeight: 52 }}>
                            <p className="text-white text-2xl font-black leading-none">
                              {countdown.mounted ? String(val).padStart(2, "0") : "--"}
                            </p>
                            <p className="text-blue-300 text-xs mt-1">{label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-red-600 text-white rounded-xl px-4 py-2.5 font-bold text-sm mb-5">
                      Only 2 spots left this month!
                    </div>
                    <p className="text-xs text-blue-300 italic mb-5">*Valid for Wayne, Oakland &amp; Macomb Counties</p>
                    <a
                      href={PHONE_HREF}
                      onClick={onCallClick}
                      className="block w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-base transition text-center"
                      aria-label="Call to claim the $2,500 off bathroom remodeling offer"
                    >
                      <Phone className="inline h-5 w-5 mr-2" aria-hidden="true" />Call to Claim This Offer
                    </a>
                    <p className="text-blue-300 text-xs mt-3">
                      or <a href="#quote-form" className="underline hover:text-white">fill out our quick form below</a>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ── Trust badge strip ── */}
          <section className="bg-white border-b border-slate-100 py-5">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {[
                  { icon: Shield, text: "Licensed & Insured in MI" },
                  { icon: Award, text: "15+ Years Experience" },
                  { icon: Check, text: "5-Year Workmanship Warranty" },
                  { icon: Users, text: "150+ Projects Completed" },
                  { icon: Star, text: "5.0 ★ — 500+ Reviews" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-slate-700 text-sm font-semibold">
                    <Icon className="h-4 w-4 text-blue-600 flex-shrink-0" aria-hidden="true" />{text}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ STATS ══ */}
          <section className="py-14 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={s.label}
                      className="text-center bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-100"
                      {...inView}
                      transition={{ delay: i * 0.07, duration: 0.35, ease: "easeOut" }}
                    >
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <p className="text-3xl font-black text-gray-900 mb-1">{s.value}</p>
                      <p className="text-slate-600 text-xs sm:text-sm font-medium">{s.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ══ SERVICES ══ */}
          <section id="services" className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4">
              <motion.div className="text-center mb-12" {...inView}>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Bathroom Remodeling Services in Metro Detroit</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">Full-service renovations, tub-to-shower conversions, walk-in tubs, and luxury redesigns — across Wayne, Oakland &amp; Macomb Counties.</p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.title}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                      {...inView}
                      transition={{ delay: i * 0.07, duration: 0.35, ease: "easeOut" }}
                    >
                      {/* FIX CLS: explicit width/height ratio with aspect-ratio instead of arbitrary h-44 */}
                      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                        <Image
                          src={service.image}
                          alt={service.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          loading={i === 0 ? "eager" : "lazy"}
                          quality={75}
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                          <h3 className="text-base font-bold text-gray-900">{service.title}</h3>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                        <ul className="space-y-1.5 mb-4" aria-label={`Features of ${service.title}`}>
                          {["Free in-home consultation", "Licensed MI contractors", "5-year warranty"].map((item) => (
                            <li key={item} className="flex items-center gap-2 text-xs text-slate-600">
                              <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0" aria-hidden="true" />{item}
                            </li>
                          ))}
                        </ul>
                        {/* FIX SEO/Accessibility: descriptive link text instead of generic "Learn More" */}
                        <Link
                          href={service.link}
                          className="text-blue-600 hover:text-blue-800 font-bold text-sm flex items-center gap-1 group/link"
                          aria-label={`Learn more about ${service.title} in Metro Detroit`}
                        >
                          Learn about {service.title}
                          <ChevronRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-12 text-center">
                <a
                  href={PHONE_HREF}
                  onClick={onCallClick}
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg gap-2"
                  aria-label="Call Stone Works Remodeling for a free bathroom remodeling consultation"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />Call {PHONE} for Free Consultation
                </a>
              </div>
            </div>
          </section>

          {/* ══ PROCESS ══ */}
          <section className="py-16 sm:py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <motion.div className="text-center mb-12" {...inView}>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Our Simple 4-Step Process</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">From your first call to the final walkthrough — transparent, stress-free, and on time.</p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm h-full relative"
                    {...inView}
                    transition={{ delay: i * 0.07, duration: 0.35, ease: "easeOut" }}
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-black text-lg text-white mb-5 mx-auto" aria-hidden="true">
                      {item.step}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                    <p className="text-slate-600 text-sm text-center leading-relaxed">{item.desc}</p>
                    {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-200" aria-hidden="true" />}
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <a
                  href="#quote-form"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg gap-2"
                  aria-label="Start your bathroom remodeling project today — get a free quote"
                >
                  Start Your Project Today<ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          {/* ══ GALLERY ══ */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4">
              <motion.div className="text-center mb-10" {...inView}>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Recent Metro Detroit Projects</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">Real transformations across Wayne, Oakland &amp; Macomb Counties.</p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {recentProjects.map((project, i) => (
                  <motion.div
                    key={i}
                    className="group rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300"
                    {...inView}
                    transition={{ delay: i * 0.07, duration: 0.35, ease: "easeOut" }}
                  >
                    <Link href={project.link} aria-label={`View our ${project.title} service — ${project.location}, Metro Detroit`}>
                      {/* FIX CLS: aspect-ratio ensures no layout shift as image loads */}
                      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                        <Image
                          src={project.src}
                          alt={project.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 33vw"
                          loading="lazy"
                          quality={75}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-white text-gray-900 px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-1.5">
                            View Service<ExternalLink className="h-4 w-4" aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                      <div className="p-5 bg-white">
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{project.title}</h3>
                        <p className="text-slate-500 text-xs sm:text-sm flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />{project.location}, Metro Detroit
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Link
                  href="/gallery"
                  className="inline-flex items-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-bold transition gap-2"
                  aria-label="View our full bathroom remodeling project gallery"
                >
                  View Full Gallery<ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          {/* ══ TESTIMONIALS ══ */}
          <section className="py-16 sm:py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <motion.div className="text-center mb-12" {...inView}>
                <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-5 py-2 mb-5 shadow-sm">
                  <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star key={n} className="h-4 w-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-gray-900 font-bold text-sm">5.0</span>
                  <span className="text-slate-600 text-sm">· 500+ Google Reviews</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">What Metro Detroit Homeowners Say</h2>
                <p className="text-lg text-slate-600 max-w-xl mx-auto">Real reviews from real customers across Wayne, Oakland, and Macomb Counties.</p>
              </motion.div>

              {/* Desktop: all 3 side by side */}
              <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
                {testimonials.map((t) => (
                  <article key={t.id} className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 flex flex-col">
                    <div className="flex items-center gap-0.5 mb-3" aria-label={`${t.rating} out of 5 stars`}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="text-slate-700 text-sm leading-relaxed italic mb-5 flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <Image
                        src={t.image}
                        alt={t.alt}
                        width={44}
                        height={44}
                        className="rounded-full object-cover border-2 border-blue-100"
                        loading="lazy"
                        quality={70}
                      />
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                        <p className="text-xs text-slate-500 flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-blue-600" aria-hidden="true" />{t.location}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <span className="text-xs text-blue-700 font-semibold bg-blue-50 px-3 py-1 rounded-full">{t.projectType}</span>
                    </div>
                  </article>
                ))}
              </div>

              {/* Mobile: carousel */}
              <div className="md:hidden">
                <AnimatePresence mode="wait">
                  <motion.article
                    key={activeTestimonial}
                    className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-0.5 mb-3" aria-label={`${testimonials[activeTestimonial].rating} out of 5 stars`}>
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="text-slate-700 italic leading-relaxed mb-5">
                      &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonials[activeTestimonial].image}
                        alt={testimonials[activeTestimonial].alt}
                        width={44}
                        height={44}
                        className="rounded-full object-cover"
                        loading="lazy"
                        quality={70}
                      />
                      <div>
                        <p className="font-bold text-gray-900">{testimonials[activeTestimonial].name}</p>
                        <p className="text-xs text-slate-500">{testimonials[activeTestimonial].location}</p>
                      </div>
                    </div>
                  </motion.article>
                </AnimatePresence>
                <div className="flex justify-center gap-2 mt-5" role="tablist" aria-label="Testimonial navigation">
                  {testimonials.map((t, i) => (
                    <button
                      key={i}
                      role="tab"
                      aria-selected={activeTestimonial === i}
                      aria-label={`Show testimonial from ${t.name}`}
                      onClick={() => setActiveTestimonial(i)}
                      className={`h-2.5 rounded-full transition-all ${activeTestimonial === i ? "w-6 bg-blue-600" : "w-2.5 bg-slate-300"}`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-10 text-center">
                <a
                  href={PHONE_HREF}
                  onClick={onCallClick}
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg gap-2"
                  aria-label="Call Stone Works Remodeling to start your bathroom project"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />Join Our Happy Customers
                </a>
              </div>
            </div>
          </section>

          {/* ══ QUOTE FORM ══ */}
          <section id="quote-form" className="py-16 sm:py-20 bg-blue-600">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
                <div className="text-white">
                  <h2 className="text-3xl sm:text-4xl font-black mb-4">Get Your Free In-Home Quote</h2>
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                    Fill out the form and we&apos;ll call you within 2 business hours to schedule your free consultation. No pressure, no obligation.
                  </p>
                  <ul className="space-y-4" aria-label="What you get with a free quote">
                    {[
                      "Free in-home measurement & consultation",
                      "Detailed, itemized cost breakdown",
                      "3D design preview before work starts",
                      "$2,500 OFF applied if you book this month",
                      "5-year workmanship warranty included",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <Check className="h-3.5 w-3.5 text-white" />
                        </div>
                        <span className="text-white font-medium text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-8 border-t border-blue-500">
                    <p className="text-blue-100 text-sm mb-2">Prefer to call?</p>
                    <a
                      href={PHONE_HREF}
                      onClick={onCallClick}
                      className="inline-flex items-center gap-2 text-white font-bold text-lg hover:text-blue-200 transition"
                      aria-label="Call Stone Works Remodeling directly"
                    >
                      <Phone className="h-5 w-5" aria-hidden="true" />{PHONE}
                    </a>
                    <p className="text-blue-200 text-xs mt-1">Mon–Fri 8am–6pm · Sat 9am–2pm</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-xl">
                  <QuoteForm />
                </div>
              </div>
            </div>
          </section>

          {/* ══ FAQ ══ */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4">
              <motion.div className="text-center mb-12" {...inView}>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Bathroom Remodeling FAQ — Metro Detroit</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">Common questions about remodels, pricing, and timelines in Wayne, Oakland &amp; Macomb Counties.</p>
              </motion.div>
              <div className="max-w-3xl mx-auto space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-colors">
                    <button
                      className="w-full text-left flex justify-between items-center py-5 px-6 hover:bg-slate-50 transition-colors"
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      aria-expanded={activeFaq === i}
                      aria-controls={`faq-answer-${i}`}
                    >
                      <h3 className="text-base font-bold text-gray-900 pr-4">{faq.question}</h3>
                      <ChevronDown
                        className={`h-5 w-5 text-blue-600 flex-shrink-0 transition-transform ${activeFaq === i ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      id={`faq-answer-${i}`}
                      className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === i ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
                      aria-hidden={activeFaq !== i}
                    >
                      <p className="text-slate-700 leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <p className="text-slate-600 mb-4">Have more questions?</p>
                <a
                  href={PHONE_HREF}
                  onClick={onCallClick}
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg gap-2"
                  aria-label="Call Stone Works Remodeling with your bathroom remodeling questions"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />Call {PHONE}
                </a>
              </div>
            </div>
          </section>

          {/* ══ WHY CHOOSE US ══ */}
          <section className="py-16 sm:py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <motion.div className="text-center mb-12" {...inView}>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Why Metro Detroit Homeowners Choose Stone Works</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">Local experts. Honest pricing. Work that lasts.</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {whyChooseFeatures.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={f.title}
                      className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                      {...inView}
                      transition={{ delay: i * 0.06, duration: 0.35, ease: "easeOut" }}
                    >
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4" aria-hidden="true">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ══ INSTAGRAM ══ */}
          <section className="py-14 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 text-center mb-8">Latest Projects on Instagram</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { src: "/instagram/image.png", href: "https://www.instagram.com/reel/DNQxTAGOaTg/", alt: "Stone Works Remodeling bathroom project on Instagram — Metro Detroit" },
                  { src: "/instagram/image-2.png", href: "https://www.instagram.com/reel/DOHl_86EZJU/", alt: "Bathroom remodel before and after Instagram reel — Metro Detroit" },
                  { src: "/instagram/image-3.png", href: "https://www.instagram.com/reel/DPwbEMDkaW8/", alt: "Walk-in tub installation Instagram reel — Metro Detroit" },
                ].map((item, i) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-md transition"
                    aria-label={item.alt}
                  >
                    {/* FIX CLS: aspect-ratio prevents layout shift */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 33vw"
                        loading="lazy"
                        quality={70}
                      />
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-6 text-center flex justify-center gap-4">
                <a
                  href="https://www.facebook.com/people/Stone-Works-Remodeling/61567020355631/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-800 transition gap-2"
                  aria-label="Follow Stone Works Remodeling on Facebook"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>Facebook
                </a>
                <a
                  href="https://www.youtube.com/@stoneworksremodeling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-red-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-red-700 transition gap-2"
                  aria-label="Watch Stone Works Remodeling videos on YouTube"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>YouTube
                </a>
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
                    <Link
                      key={city}
                      href={`/${city.toLowerCase().replace(/\s+/g, "-")}`}
                      className="bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 text-slate-700 px-3 py-1.5 rounded-full text-sm transition"
                      aria-label={`Bathroom remodeling in ${city}, MI`}
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </nav>
              <p className="text-center text-sm text-slate-500 mt-5">
                Don&apos;t see your city?{" "}
                <a
                  href={PHONE_HREF}
                  onClick={onCallClick}
                  className="text-blue-600 font-semibold hover:underline"
                  aria-label="Call us to check if we serve your city"
                >Call us</a>{" "}
                — we likely serve your area!
              </p>
            </div>
          </section>

        </main>

        {/* Bottom padding for mobile sticky bar */}
        <div className="h-20 md:hidden" aria-hidden="true" />
      </div>
    </>
  );
}