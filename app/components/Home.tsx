"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Check, Phone, ArrowRight, ChevronRight,
  Shield, Award, Users, Hammer, Palette, Ruler, Zap,
  Heart, MapPin, MessageCircle, ChevronDown, Send,
  ExternalLink, ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { event } from "../lib/gtag";

// Existing sub-components (each has its own styling — see notes at top of file)
import BeforeAfter from "./BeforeAfter";
import GoogleReviews from "./GoogleReviews";
import TrustBar from "./TrustBar";
import ExitIntentPopup from "./ExitIntentPopup";

// AEO/GEO schemas — surfaces structured data to AI assistants
import { HomepageProductSchemas } from "./schemas/ProductSchema";
import { HomepageVideoSchemas } from "./schemas/VideoSchema";

/* ───────────────────────────────────────────────────────────────────────────
   PREMIUM RESTYLE — Stone Works Remodeling
   ---------------------------------------------------------------------------
   Targeting affluent Metro Detroit homeowners (Birmingham / Bloomfield Hills /
   Troy). The aesthetic is "stone + brass": basalt ink, limestone bone, antique
   brass. Type is Fraunces (display) + Inter (body). Signature device is a
   hairline marble "seam". No urgency countdowns, no scarcity banners.

   FONT SETUP — add to app/layout.tsx:
     import { Fraunces, Inter } from "next/font/google";
     const fraunces = Fraunces({ subsets:["latin"], variable:"--font-display",
       axes:["opsz","SOFT","WONK"], display:"swap" });
     const inter = Inter({ subsets:["latin"], variable:"--font-sans", display:"swap" });
     <body className={`${fraunces.variable} ${inter.variable}`}>

   GLOBALS — add to globals.css:
     :root{ --font-display:"Fraunces",serif; --font-sans:"Inter",sans-serif; }
     .font-display{ font-family:var(--font-display); font-optical-sizing:auto; }
     body{ font-family:var(--font-sans); }

   NOTE: FinancingBanner was removed from the page — a loud "$149/mo" banner
   reads as down-market to this audience. If you keep financing, mention it
   quietly inside the consultation, not as a billboard.
─────────────────────────────────────────────────────────────────────────── */

// ─── Palette (single source of truth) ──────────────────────────────────────
const C = {
  ink: "#1c1916",      // basalt — primary dark surface & text
  inkSoft: "#2a2520",  // raised dark panel
  bone: "#f4efe7",     // limestone — light surface
  paper: "#fbf9f5",    // lightest paper
  stone: "#e4dccf",    // mid stone / hairline on light
  brass: "#9c7c4a",    // antique brass — accent, used sparingly
  brassHi: "#b89968",  // brass highlight
};

// ─── Data ───────────────────────────────────────────────────────────────────
const beforeAfterPairs = [
  { before: "/bathroom/IMG_8186.JPG", after: "/bathroom/IMG_8187.JPG", alt: "Master bathroom remodel in Livonia, Metro Detroit", label: "Master Bath — Livonia, MI", service: "Complete Bathroom Remodel" },
  { before: "/bathroom/IMG_8188.JPG", after: "/bathroom/IMG_8189.JPG", alt: "Tub-to-shower conversion in Rochester, Metro Detroit", label: "Guest Bath — Rochester, MI", service: "Tub-to-Shower Conversion" },
  { before: "/bathroom/IMG_8190.JPG", after: "/bathroom/IMG_8191.JPG", alt: "Walk-in tub installation in Troy, Metro Detroit", label: "Master Bath — Troy, MI", service: "Walk-in Tub Installation" },
];

const recentProjects = [
  { src: "/bathroom/bath1.jpeg", alt: "Luxury bathroom renovation Livonia Metro Detroit", title: "Complete Bathroom Renovation", location: "Livonia", link: "/services/bathroom-remodeling" },
  { src: "/bathroom/bath2.jpeg", alt: "Walk-in shower conversion Rochester Metro Detroit", title: "Walk-in Shower Conversion", location: "Rochester", link: "/services/shower-conversions" },
  { src: "/bathroom/bath3.jpeg", alt: "Walk-in tub installation Troy Metro Detroit", title: "Walk-in Tub Installation", location: "Troy", link: "/services/walk-in-tubs" },
];

const stats = [
  { label: "Projects Completed", value: "150+", icon: Users },
  { label: "Years of Craft", value: "15+", icon: Award },
  { label: "Client Satisfaction", value: "100%", icon: Heart },
  { label: "Counties Served", value: "3", icon: MapPin },
];

const serviceAreas = [
  "Birmingham", "Bloomfield Hills", "Troy", "Rochester", "Royal Oak",
  "Northville", "Novi", "Farmington Hills", "Livonia", "Grosse Pointe",
  "Detroit", "Sterling Heights", "Canton", "Southfield", "Dearborn",
];

const faqs = [
  { question: "How long does a bathroom remodel take in Metro Detroit?", answer: "Most renovations are completed in 5–10 business days. Larger custom projects with bespoke stonework run two to three weeks, scheduled around your household." },
  { question: "What does a high-end bathroom remodel cost?", answer: "Projects generally begin around $8,000 and rise with the materials and scope you choose. You receive a detailed, itemized proposal during your private consultation — every line accounted for, no surprises." },
  { question: "Do you provide a 3D rendering before work begins?", answer: "Yes. Every full renovation includes a photoreal 3D rendering of your finished space, so you approve materials, fixtures, and layout before a single tile is set." },
  { question: "Are you licensed and insured in Michigan?", answer: "Fully licensed and insured in Michigan, serving Wayne, Oakland, and Macomb Counties. Every project is backed by our 5-year workmanship warranty." },
  { question: "Do you serve my city in Metro Detroit?", answer: "We work throughout Metro Detroit — Birmingham, Bloomfield Hills, Troy, Rochester, Royal Oak, Northville, Novi, and the surrounding communities. If your city isn't listed, call us; we likely serve it." },
];

const services = [
  { title: "Complete Bathroom Remodeling", desc: "Bespoke design, stone and tile craftsmanship, premium fixtures, and full project management from concept to final detail.", icon: Palette, image: "/bathroom/bath1.jpeg", alt: "Complete bathroom remodeling Metro Detroit Michigan", link: "/services/bathroom-remodeling" },
  { title: "Tub Replacement", desc: "Refined soaking tubs and modern fixtures, installed cleanly by Michigan craftsmen with minimal disruption to your home.", icon: Hammer, image: "/bathroom/bath2.jpeg", alt: "Bathtub replacement Metro Detroit", link: "/services/bathroom-remodeling" },
  { title: "Tub-to-Shower Conversion", desc: "Open, architectural walk-in showers with frameless glass, custom tile, and a seamless transition that elevates the room.", icon: Zap, image: "/bathroom/bath3.jpeg", alt: "Tub to shower conversion Detroit MI", link: "/services/shower-conversions" },
  { title: "Walk-in Tubs", desc: "Accessible, elegantly finished walk-in tubs with discreet safety features — comfort and independence without compromise.", icon: Ruler, image: "/bathroom/IMG_8186.JPG", alt: "Walk-in tub installation Metro Detroit Michigan", link: "/services/walk-in-tubs" },
];

const processSteps = [
  { step: "01", title: "Private Consultation", desc: "We visit your home, take precise measurements, and listen to how you want the room to feel." },
  { step: "02", title: "Design & 3D Rendering", desc: "A photoreal rendering and curated material selections, with a transparent, itemized proposal." },
  { step: "03", title: "Master Installation", desc: "Licensed Michigan craftsmen execute the work — stone, plumbing, and finish — with care for your home." },
  { step: "04", title: "Walkthrough & Warranty", desc: "A final inspection together, full permit compliance, and a 5-year workmanship warranty." },
];

const whyChooseFeatures = [
  { icon: Shield, title: "Licensed & Fully Insured", desc: "Comprehensive Michigan coverage. Your home is protected from first measurement to final walkthrough." },
  { icon: Award, title: "15 Years of Local Craft", desc: "Deep roots across Oakland, Wayne, and Macomb Counties, with hundreds of finished Metro Detroit homes." },
  { icon: Palette, title: "Photoreal 3D Design", desc: "See your finished bathroom in a true-to-life rendering and approve every material before work begins." },
  { icon: Check, title: "Transparent Proposals", desc: "Itemized pricing, no hidden lines. You know precisely what you're investing in, and why." },
  { icon: Heart, title: "Completed in 5–10 Days", desc: "Most renovations finished within two weeks, scheduled around the rhythm of your household." },
  { icon: Award, title: "5-Year Workmanship Warranty", desc: "We stand behind the work for years, not weeks — the mark of a company built to last." },
];

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE = "(248) 955-2952";
const PHONE_HREF = "tel:+12489552952";
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

/* ─── Seam ────────────────────────────────────────────────────────────────────
   The signature device: a hairline "vein" with a small brass marker, echoing a
   seam in cut stone. Used to open sections instead of generic eyebrows.        */
function Seam({ label, dark = false }: { label: string; dark?: boolean }) {
  const line = dark ? "rgba(244,239,231,0.18)" : C.stone;
  const text = dark ? C.brassHi : C.brass;
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <span className="h-px w-10 sm:w-16" style={{ background: line }} aria-hidden="true" />
      <span className="rotate-45 inline-block" style={{ width: 6, height: 6, background: C.brass }} aria-hidden="true" />
      <span
        className="font-display italic text-sm sm:text-base tracking-wide whitespace-nowrap"
        style={{ color: text }}
      >
        {label}
      </span>
      <span className="rotate-45 inline-block" style={{ width: 6, height: 6, background: C.brass }} aria-hidden="true" />
      <span className="h-px w-10 sm:w-16" style={{ background: line }} aria-hidden="true" />
    </div>
  );
}

/* ─── TiltCard ────────────────────────────────────────────────────────────────
   The "3D" moment: pointer-driven perspective tilt on the consultation card.
   Subtle (max ~6°), spring-eased, and disabled for reduced-motion users.       */
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0 });
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setReduce(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  const onMove = useCallback((e: React.PointerEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT({ rx: -py * 6, ry: px * 6 });
  }, [reduce]);

  const onLeave = useCallback(() => setT({ rx: 0, ry: 0 }), []);

  return (
    <div style={{ perspective: 1200 }} className={className}>
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{
          transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
          transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ─── Quote Form (2 progressive steps) ──────────────────────────────────────────
function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", phone: "", zip: "", service: "", message: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!form.name || !form.phone || !form.zip) return;
      setStep(2);
      return;
    }
    setStatus("submitting");
    const leadSummary = [
      "SOURCE: Homepage Consultation Request",
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
    <div className="text-center py-10">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: C.bone, border: `1px solid ${C.brass}` }}>
        <Check className="h-7 w-7" style={{ color: C.brass }} />
      </div>
      <h3 className="font-display text-2xl mb-2" style={{ color: C.ink }}>Thank you.</h3>
      <p className="text-sm leading-relaxed" style={{ color: "#6b6258" }}>
        A member of our design team will call within two business hours to arrange your private consultation.
      </p>
    </div>
  );

  const inputCls = "w-full px-4 py-3 rounded-none border-b bg-transparent outline-none text-[15px] transition-colors";
  const inputStyle = { borderColor: C.stone, color: C.ink } as React.CSSProperties;

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1" style={{ background: step >= 1 ? C.brass : C.stone }} />
        <div className="h-px flex-1" style={{ background: step >= 2 ? C.brass : C.stone }} />
        <span className="text-[11px] uppercase tracking-[0.2em] font-medium" style={{ color: "#8a8175" }}>{step} / 2</span>
      </div>

      {step === 1 ? (
        <>
          <p className="text-sm" style={{ color: "#6b6258" }}>Three details to begin — it takes a moment.</p>
          <div>
            <label htmlFor="name-input" className="block text-[11px] uppercase tracking-[0.18em] mb-2" style={{ color: "#8a8175" }}>Your Name</label>
            <input id="name-input" type="text" name="name" required value={form.name} onChange={onChange} placeholder="Full name" className={inputCls} style={inputStyle} autoComplete="name" onFocus={(e)=>e.currentTarget.style.borderColor=C.brass} onBlur={(e)=>e.currentTarget.style.borderColor=C.stone} />
          </div>
          <div>
            <label htmlFor="phone-input" className="block text-[11px] uppercase tracking-[0.18em] mb-2" style={{ color: "#8a8175" }}>Phone</label>
            <input id="phone-input" type="tel" name="phone" required value={form.phone} onChange={onChange} placeholder="(248) 555-0100" className={inputCls} style={inputStyle} autoComplete="tel" onFocus={(e)=>e.currentTarget.style.borderColor=C.brass} onBlur={(e)=>e.currentTarget.style.borderColor=C.stone} />
          </div>
          <div>
            <label htmlFor="zip-input" className="block text-[11px] uppercase tracking-[0.18em] mb-2" style={{ color: "#8a8175" }}>Zip Code</label>
            <input id="zip-input" type="text" name="zip" required value={form.zip} onChange={onChange} placeholder="48009" className={inputCls} style={inputStyle} autoComplete="postal-code" inputMode="numeric" pattern="[0-9]*" maxLength={5} onFocus={(e)=>e.currentTarget.style.borderColor=C.brass} onBlur={(e)=>e.currentTarget.style.borderColor=C.stone} />
          </div>
          <button type="submit" className="w-full py-4 rounded-none font-medium text-sm uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-2" style={{ background: C.ink, color: C.bone }} onMouseEnter={(e)=>e.currentTarget.style.background=C.brass} onMouseLeave={(e)=>e.currentTarget.style.background=C.ink}>
            Continue <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-xs text-center" style={{ color: "#8a8175" }}>We respond within two business hours. No mailing lists.</p>
        </>
      ) : (
        <>
          <p className="text-sm" style={{ color: "#6b6258" }}>Tell us a little more — optional, but it helps us prepare.</p>
          <div>
            <label htmlFor="service-select" className="block text-[11px] uppercase tracking-[0.18em] mb-2" style={{ color: "#8a8175" }}>Project</label>
            <select id="service-select" name="service" value={form.service} onChange={onChange} className={inputCls} style={inputStyle}>
              <option value="">Not sure yet — I'd like advice</option>
              <option>Complete Bathroom Remodel</option>
              <option>Tub-to-Shower Conversion</option>
              <option>Walk-in Tub Installation</option>
              <option>Tub Replacement</option>
              <option>Shower Remodel</option>
              <option>Custom Stone &amp; Tile Work</option>
            </select>
          </div>
          <div>
            <label htmlFor="message-input" className="block text-[11px] uppercase tracking-[0.18em] mb-2" style={{ color: "#8a8175" }}>About your space</label>
            <textarea id="message-input" name="message" value={form.message} onChange={onChange} placeholder="e.g. Master bath, prefer natural stone and a frameless walk-in shower…" rows={3} className={inputCls + " resize-none"} style={inputStyle} />
          </div>
          {status === "error" && <p className="text-sm" role="alert" style={{ color: "#a3433a" }}>Something went wrong. Please call us at {PHONE}.</p>}
          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(1)} className="px-5 py-3.5 rounded-none border text-sm uppercase tracking-[0.14em] transition-colors" style={{ borderColor: C.stone, color: C.ink }}>
              Back
            </button>
            <button type="submit" disabled={status === "submitting"} className="flex-1 py-3.5 rounded-none font-medium text-sm uppercase tracking-[0.16em] transition-colors flex items-center justify-center gap-2 disabled:opacity-60" style={{ background: C.ink, color: C.bone }} onMouseEnter={(e)=>{if(status!=="submitting")e.currentTarget.style.background=C.brass}} onMouseLeave={(e)=>e.currentTarget.style.background=C.ink}>
              {status === "submitting"
                ? <><div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />Sending</>
                : <><Send className="h-4 w-4" />Request Consultation</>}
            </button>
          </div>
        </>
      )}
    </form>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HomepageProductSchemas />
      <HomepageVideoSchemas />
      <ExitIntentPopup />

      <div className="min-h-screen overflow-x-hidden font-sans" style={{ background: C.paper, color: C.ink }}>

        {/* ── Mobile sticky CTA ── */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex gap-3 px-4 py-3" style={{ background: C.ink, borderTop: `1px solid rgba(244,239,231,0.12)` }}>
          <a href={PHONE_HREF} onClick={onCallClick} className="flex-1 py-3 font-medium text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2" style={{ background: C.brass, color: C.ink }} aria-label="Call Stone Works Remodeling now">
            <Phone className="h-4 w-4" aria-hidden="true" />Call
          </a>
          <a href="#quote-form" className="flex-1 py-3 font-medium text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2 border" style={{ borderColor: "rgba(244,239,231,0.4)", color: C.bone }} aria-label="Request a private design consultation">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />Consultation
          </a>
        </div>

        {/* ── Desktop floating CTA ── */}
        <div className="fixed bottom-8 right-8 z-50 hidden md:block">
          <a href="#quote-form" className="px-6 py-3.5 shadow-2xl transition-colors flex items-center gap-2 font-medium text-xs uppercase tracking-[0.18em]" style={{ background: C.ink, color: C.bone }} onMouseEnter={(e)=>e.currentTarget.style.background=C.brass} onMouseLeave={(e)=>e.currentTarget.style.background=C.ink} aria-label="Request a private design consultation">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />Book Consultation
          </a>
        </div>

        <main>

          {/* ══ HERO ══ */}
          <section className="relative" style={{ background: C.ink }}>
            {/* ambient stone glow */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: `radial-gradient(120% 80% at 80% 0%, rgba(184,153,104,0.14), transparent 55%), radial-gradient(90% 70% at 0% 100%, rgba(184,153,104,0.06), transparent 50%)` }} />
            <div className="container mx-auto px-4 relative">
              <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center py-16 sm:py-24 lg:py-28">

                {/* Text */}
                <div className="text-center lg:text-left">
                  <span className="inline-flex items-center gap-3 mb-7" style={{ color: C.brassHi }}>
                    <span className="h-px w-8" style={{ background: C.brass }} aria-hidden="true" />
                    <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-medium">Bespoke Bathroom Design · Metro Detroit</span>
                  </span>

                  <h1 className="font-display leading-[0.98] mb-7" style={{ color: C.bone }}>
                    <span className="block text-5xl sm:text-6xl lg:text-7xl font-light">Bathrooms worth</span>
                    <span className="block text-5xl sm:text-6xl lg:text-7xl italic" style={{ color: C.brassHi }}>coming home to.</span>
                  </h1>

                  <p className="text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-4" style={{ color: "rgba(244,239,231,0.78)" }}>
                    Bespoke bathroom remodeling for Metro Detroit homes. Licensed, insured, and finished in
                    {" "}<span style={{ color: C.bone }}>5–10 days</span> — every renovation backed by a 5-year warranty.
                  </p>
                  <p className="text-sm mb-9" style={{ color: "rgba(244,239,231,0.5)" }}>
                    Serving Birmingham, Bloomfield Hills, Troy &amp; the surrounding communities since 2009.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 mb-12 justify-center lg:justify-start">
                    <a href="#quote-form" className="px-8 py-4 font-medium text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2.5" style={{ background: C.brass, color: C.ink }} onMouseEnter={(e)=>e.currentTarget.style.background=C.brassHi} onMouseLeave={(e)=>e.currentTarget.style.background=C.brass} aria-label="Request a private design consultation">
                      Request a Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a href={PHONE_HREF} onClick={onCallClick} className="px-8 py-4 font-medium text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2.5 border" style={{ borderColor: "rgba(244,239,231,0.35)", color: C.bone }} onMouseEnter={(e)=>e.currentTarget.style.borderColor="rgba(244,239,231,0.8)"} onMouseLeave={(e)=>e.currentTarget.style.borderColor="rgba(244,239,231,0.35)"} aria-label="Call Stone Works Remodeling">
                      <Phone className="h-4 w-4" aria-hidden="true" />{PHONE}
                    </a>
                  </div>

                  {/* Quiet social proof */}
                  <a href="https://www.google.com/search?q=Stone+Works+Remodeling" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 group">
                    <span className="font-display text-2xl" style={{ color: C.bone }}>5.0</span>
                    <span className="flex items-center gap-1" aria-label="5 out of 5 stars">
                      {[1,2,3,4,5].map((n) => (
                        <svg key={n} width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" fill={C.brassHi} />
                        </svg>
                      ))}
                    </span>
                    <span className="text-sm group-hover:underline" style={{ color: "rgba(244,239,231,0.6)" }}>Rated on Google</span>
                  </a>
                </div>

                {/* ── Hero image — arched "gate" frame with 3D tilt ── */}
                <TiltCard className="max-w-md mx-auto w-full order-first lg:order-last">
                  <div className="relative p-2.5" style={{ border: `1px solid rgba(184,153,104,0.4)`, boxShadow: "0 40px 80px -30px rgba(0,0,0,0.6)" }}>
                    <div className="relative overflow-hidden" style={{ aspectRatio: "4/5", borderRadius: "50% 50% 12px 12px / 24% 24% 2% 2%" }}>
                      <Image src="/bathroom/bath1.jpeg" alt="Bespoke bathroom remodel by Stone Works in Metro Detroit" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" quality={85} />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,25,22,0.35), transparent 50%)" }} aria-hidden="true" />
                      {/* brass keystone at the crown of the arch */}
                      <span className="absolute top-4 left-1/2 -translate-x-1/2 rotate-45 inline-block" style={{ width: 8, height: 8, background: C.brassHi }} aria-hidden="true" />
                    </div>
                  </div>
                </TiltCard>

              </div>
            </div>
          </section>

          <TrustBar />

          {/* ══ STATS ══ */}
          <section className="py-16" style={{ background: C.paper }}>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {stats.map((s, i) => (
                  <div key={s.label} className="text-center px-4 py-6" style={{ borderLeft: i % 4 === 0 ? "none" : `1px solid ${C.stone}` }}>
                    <p className="font-display text-5xl sm:text-6xl font-light mb-2" style={{ color: C.ink }}>{s.value}</p>
                    <p className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "#8a8175" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ BEFORE / AFTER ══ */}
          <section className="py-20" style={{ background: C.bone }}>
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <Seam label="Real projects, real results" />
                <h2 className="font-display text-4xl sm:text-5xl font-light mb-4" style={{ color: C.ink }}>See the transformation</h2>
                <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "#6b6258" }}>
                  Drag to compare before and after — genuine Metro Detroit bathrooms, never stock photography.
                </p>
              </div>
              <div className="max-w-3xl mx-auto"><BeforeAfter pairs={beforeAfterPairs} /></div>
              <div className="mt-12 text-center">
                <Link href="/gallery" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium border-b pb-1 transition-colors" style={{ color: C.ink, borderColor: C.brass }}>
                  View the Full Gallery <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          {/* ══ SERVICES ══ */}
          <section id="services" className="py-20" style={{ background: C.paper }}>
            <div className="container mx-auto px-4">
              <div className="text-center mb-14">
                <Seam label="What we craft" />
                <h2 className="font-display text-4xl sm:text-5xl font-light mb-4" style={{ color: C.ink }}>Bathroom remodeling services</h2>
                <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "#6b6258" }}>
                  Full renovations, tub-to-shower conversions, walk-in tubs, and custom stonework across Oakland, Wayne &amp; Macomb Counties.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <TiltCard key={service.title} className="h-full">
                      <div className="group bg-white h-full p-3 transition-shadow duration-300 hover:shadow-2xl" style={{ border: `1px solid ${C.stone}`, borderRadius: 18 }}>
                        {/* arched "gate" frame */}
                        <div className="relative overflow-hidden" style={{ aspectRatio: "4/5", borderRadius: "50% 50% 10px 10px / 26% 26% 3% 3%" }}>
                          <Image src={service.image} alt={service.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" loading={i === 0 ? "eager" : "lazy"} quality={80} />
                          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,25,22,0.5), transparent 45%)" }} aria-hidden="true" />
                          {/* brass keystone marker at the crown of the arch */}
                          <span className="absolute top-3 left-1/2 -translate-x-1/2 rotate-45 inline-block" style={{ width: 7, height: 7, background: C.brassHi }} aria-hidden="true" />
                          <Icon className="absolute bottom-4 left-1/2 -translate-x-1/2 h-5 w-5" style={{ color: C.bone }} aria-hidden="true" />
                        </div>
                        <div className="px-3 pt-5 pb-2 text-center">
                          <h3 className="font-display text-xl mb-2" style={{ color: C.ink }}>{service.title}</h3>
                          <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b6258" }}>{service.desc}</p>
                          <Link href={service.link} className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-medium group/link" style={{ color: C.brass }}>
                            Explore
                            <ChevronRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </TiltCard>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ══ PROCESS ══ */}
          <section className="py-20" style={{ background: C.ink }}>
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Seam label="From first visit to final detail" dark />
                <h2 className="font-display text-4xl sm:text-5xl font-light" style={{ color: C.bone }}>How we work together</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(244,239,231,0.12)" }}>
                {processSteps.map((item) => (
                  <div key={item.step} className="p-8 lg:p-10" style={{ background: C.ink }}>
                    <p className="font-display text-5xl font-light mb-5" style={{ color: C.brass }}>{item.step}</p>
                    <h3 className="font-display text-xl mb-3" style={{ color: C.bone }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(244,239,231,0.6)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#quote-form" className="inline-flex items-center gap-2.5 px-8 py-4 font-medium text-xs uppercase tracking-[0.2em] transition-colors" style={{ background: C.brass, color: C.ink }} onMouseEnter={(e)=>e.currentTarget.style.background=C.brassHi} onMouseLeave={(e)=>e.currentTarget.style.background=C.brass}>
                  Begin Your Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link href="/guides/plan-bathroom-remodel" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] border-b pb-1" style={{ color: "rgba(244,239,231,0.7)", borderColor: "rgba(244,239,231,0.3)" }}>
                  Read our planning guide <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          {/* ══ RECENT PROJECTS ══ */}
          <section className="py-20" style={{ background: C.bone }}>
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <Seam label="Recently completed" />
                <h2 className="font-display text-4xl sm:text-5xl font-light" style={{ color: C.ink }}>Metro Detroit projects</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {recentProjects.map((project, i) => (
                  <TiltCard key={i} className="h-full">
                    <div className="group bg-white h-full p-3 transition-shadow duration-300 hover:shadow-2xl" style={{ border: `1px solid ${C.stone}`, borderRadius: 18 }}>
                      <Link href={project.link} aria-label={`View our ${project.title} service — ${project.location}, Metro Detroit`}>
                        <div className="relative overflow-hidden" style={{ aspectRatio: "4/5", borderRadius: "50% 50% 10px 10px / 26% 26% 3% 3%" }}>
                          <Image src={project.src} alt={project.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 640px) 100vw, 33vw" loading="lazy" quality={80} />
                          <span className="absolute top-3 left-1/2 -translate-x-1/2 rotate-45 inline-block" style={{ width: 7, height: 7, background: C.brassHi }} aria-hidden="true" />
                          <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(to top, rgba(28,25,22,0.7), transparent 55%)" }}>
                            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-medium" style={{ color: C.bone }}>
                              View Service <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                            </span>
                          </div>
                        </div>
                        <div className="px-3 pt-5 pb-2 text-center">
                          <h3 className="font-display text-lg mb-1" style={{ color: C.ink }}>{project.title}</h3>
                          <p className="text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-1.5" style={{ color: "#8a8175" }}>
                            <MapPin className="h-3.5 w-3.5" style={{ color: C.brass }} aria-hidden="true" />{project.location}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </TiltCard>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Link href="/gallery" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium border-b pb-1" style={{ color: C.ink, borderColor: C.brass }}>
                  View the Full Gallery <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          <GoogleReviews />

          {/* ══ CONSULTATION FORM ══ */}
          <section id="quote-form" className="py-20" style={{ background: C.ink }}>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-5xl mx-auto">
                <div>
                  <Seam label="By appointment" dark />
                  <h2 className="font-display text-4xl sm:text-5xl font-light mb-5 text-center lg:text-left" style={{ color: C.bone }}>
                    Request your private<br />consultation
                  </h2>
                  <p className="text-base leading-relaxed mb-10 text-center lg:text-left" style={{ color: "rgba(244,239,231,0.7)" }}>
                    Share a few details and a designer will call within two business hours. No pressure, no obligation — simply a conversation about your home.
                  </p>
                  <ul className="space-y-5">
                    {[
                      "In-home measurement with a dedicated designer",
                      "Photoreal 3D rendering before work begins",
                      "Curated stone, tile & fixture selections",
                      "Transparent, itemized proposal",
                      "5-year workmanship warranty included",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-4">
                        <span className="rotate-45 inline-block flex-shrink-0" style={{ width: 6, height: 6, background: C.brass }} aria-hidden="true" />
                        <span className="text-sm" style={{ color: "rgba(244,239,231,0.85)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(244,239,231,0.15)" }}>
                    <p className="text-[11px] uppercase tracking-[0.2em] mb-2" style={{ color: "#8a8175" }}>Prefer to call</p>
                    <a href={PHONE_HREF} onClick={onCallClick} className="inline-flex items-center gap-2.5 font-display text-2xl transition-colors" style={{ color: C.bone }} onMouseEnter={(e)=>e.currentTarget.style.color=C.brassHi} onMouseLeave={(e)=>e.currentTarget.style.color=C.bone}>
                      <Phone className="h-5 w-5" aria-hidden="true" />{PHONE}
                    </a>
                    <p className="text-xs mt-2" style={{ color: "#8a8175" }}>Mon–Fri 8–6 · Sat 9–2</p>
                  </div>
                </div>
                <div className="p-8 sm:p-10" style={{ background: C.paper }}>
                  <QuoteForm />
                </div>
              </div>
            </div>
          </section>

          {/* ══ FAQ ══ */}
          <section className="py-20" style={{ background: C.paper }}>
            <div className="container mx-auto px-4">
              <div className="text-center mb-14">
                <Seam label="Questions, answered" />
                <h2 className="font-display text-4xl sm:text-5xl font-light" style={{ color: C.ink }}>Before you begin</h2>
              </div>
              <div className="max-w-3xl mx-auto">
                {faqs.map((faq, i) => (
                  <div key={i} style={{ borderBottom: `1px solid ${C.stone}` }}>
                    <button className="w-full text-left flex justify-between items-center gap-4 py-6 transition-colors" onClick={() => setActiveFaq(activeFaq === i ? null : i)} aria-expanded={activeFaq === i} aria-controls={`faq-answer-${i}`}>
                      <h3 className="font-display text-lg sm:text-xl" style={{ color: C.ink }}>{faq.question}</h3>
                      <ChevronDown className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${activeFaq === i ? "rotate-180" : ""}`} style={{ color: C.brass }} aria-hidden="true" />
                    </button>
                    <div id={`faq-answer-${i}`} className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? "max-h-60 pb-6 opacity-100" : "max-h-0 opacity-0"}`} aria-hidden={activeFaq !== i}>
                      <p className="leading-relaxed text-[15px]" style={{ color: "#6b6258" }}>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ WHY CHOOSE US ══ */}
          <section className="py-20" style={{ background: C.bone }}>
            <div className="container mx-auto px-4">
              <div className="text-center mb-14">
                <Seam label="Why homeowners choose us" />
                <h2 className="font-display text-4xl sm:text-5xl font-light mb-4" style={{ color: C.ink }}>
                  Local craft, honestly delivered
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px max-w-5xl mx-auto" style={{ background: C.stone }}>
                {whyChooseFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.title} className="p-8" style={{ background: C.bone }}>
                      <Icon className="h-6 w-6 mb-5" style={{ color: C.brass }} aria-hidden="true" />
                      <h3 className="font-display text-xl mb-2.5" style={{ color: C.ink }}>{f.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6b6258" }}>{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ══ SERVICE AREAS ══ */}
          <section className="py-16" style={{ background: C.paper, borderTop: `1px solid ${C.stone}` }}>
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="font-display text-2xl sm:text-3xl flex items-center justify-center gap-2.5 mb-2" style={{ color: C.ink }}>
                  <MapPin className="h-5 w-5" style={{ color: C.brass }} aria-hidden="true" />Serving all of Metro Detroit
                </h2>
                <p className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "#8a8175" }}>Oakland · Wayne · Macomb Counties</p>
              </div>
              <nav aria-label="Service area cities">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-3xl mx-auto">
                  {serviceAreas.map((city) => (
                    <Link key={city} href={`/${city.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm transition-colors" style={{ color: "#6b6258" }} onMouseEnter={(e)=>e.currentTarget.style.color=C.brass} onMouseLeave={(e)=>e.currentTarget.style.color="#6b6258"} aria-label={`Bathroom remodeling in ${city}, MI`}>
                      {city}
                    </Link>
                  ))}
                </div>
              </nav>
              <p className="text-center text-sm mt-8" style={{ color: "#8a8175" }}>
                Don&apos;t see your city?{" "}
                <a href={PHONE_HREF} onClick={onCallClick} className="border-b" style={{ color: C.brass, borderColor: C.brass }}>Call us</a>
                {" "}— we likely serve your area.
              </p>
            </div>
          </section>

        </main>

        <div className="h-20 md:hidden" aria-hidden="true" />
      </div>
    </>
  );
}