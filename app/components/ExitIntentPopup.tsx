// app/components/ExitIntentPopup.tsx
// Captures desktop visitors who are about to leave without converting.
// Triggers when mouse moves toward the top of the viewport.
// Mobile uses a different approach (sticky bar handled in Home.tsx).
// Shown once per session via sessionStorage.
"use client";
import { useEffect, useState } from "react";
import { X, Phone, Send, DollarSign, Check } from "lucide-react";
import { event } from "../lib/gtag";

const PHONE = "(248) 955-2952";
const PHONE_HREF = "tel:+12489552952";
const SESSION_KEY = "swr_exit_intent_shown";

const onCallClick = () => {
  try {
    event({ action: "phone_click", category: "engagement", label: "Exit Intent Popup" });
  } catch (e) { console.error("GTAG error:", e); }
};

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    // Don't show on mobile (small screens) — mobile has sticky CTA already
    if (window.innerWidth < 768) return;

    let armed = false;
    // Arm after 15s on the page so we don't pop on bounce
    const armTimer = setTimeout(() => { armed = true; }, 15000);

    const onMouseLeave = (e: MouseEvent) => {
      if (!armed) return;
      // Only trigger when mouse leaves the TOP of the viewport
      if (e.clientY > 0) return;
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
      document.removeEventListener("mouseleave", onMouseLeave);
    };

    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      clearTimeout(armTimer);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const leadSummary = [
        "SOURCE: Exit Intent Popup",
        `NAME: ${form.name}`,
        `PHONE: ${form.phone}`,
        "OFFER: $2,500 OFF + Free in-home quote",
      ].join("\n");
      await fetch("https://dl4ltl1h1f.execute-api.us-east-1.amazonaws.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          phone: form.phone,
          email: "noreply@stoneworksremodeling.com",
          address: "From Exit Popup",
          designStyle: "To discuss",
          materialPreferences: leadSummary,
          removalNeeded: "From Exit Popup",
          bathroomSize: "To discuss",
          bathroomCount: "1",
          currentLayout: ["Exit Intent Popup"],
          specialFeatures: [],
          referenceImages: "",
          timeline: "ASAP",
          budgetRange: "To discuss",
          occupancy: "Owner-occupied",
          terms: true,
        }),
      });
      event({ action: "exit_intent_lead", category: "lead", label: "Popup" });
      setSubmitted(true);
    } catch {
      // Silently fail — user still has phone number
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-title"
      onClick={close}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative animate-[slideUp_0.25s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close offer popup"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/95 hover:bg-slate-100 flex items-center justify-center shadow-sm border border-slate-200"
        >
          <X className="h-5 w-5 text-slate-700" aria-hidden="true" />
        </button>

        {submitted ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <Check className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 id="exit-popup-title" className="text-2xl font-black text-gray-900 mb-2">
              You&apos;re all set!
            </h3>
            <p className="text-slate-600 mb-6">
              We&apos;ll call you within 2 business hours to lock in your $2,500 OFF
              and schedule your free in-home consultation.
            </p>
            <button
              onClick={close}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
            >
              Continue Browsing
            </button>
          </div>
        ) : (
          <>
            {/* Top banner */}
            <div className="bg-rose-600 text-white px-6 py-3 text-center">
              <p className="text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
                <DollarSign className="h-3.5 w-3.5" aria-hidden="true" />
                Wait — Don&apos;t Leave Empty Handed
              </p>
            </div>

            <div className="p-7 sm:p-9">
              <h3 id="exit-popup-title" className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 text-center">
                Save <span className="text-rose-600">$2,500</span> on Your Bathroom
              </h3>
              <p className="text-slate-600 text-center mb-6 text-sm">
                Limited offer for Wayne, Oakland &amp; Macomb County homeowners.
                Leave your number and we&apos;ll lock it in.
              </p>

              <form onSubmit={onSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-gray-900 bg-white"
                  aria-label="Your name"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-gray-900 bg-white"
                  aria-label="Phone number"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-rose-600 hover:bg-rose-700 disabled:opacity-60 text-white py-4 rounded-lg font-black text-base transition-colors flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />Sending...</>
                  ) : (
                    <><Send className="h-5 w-5" />Claim My $2,500 OFF</>
                  )}
                </button>
              </form>

              <div className="mt-5 pt-5 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-500 mb-2">Prefer to call?</p>
                <a
                  href={PHONE_HREF}
                  onClick={onCallClick}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold text-base"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {PHONE}
                </a>
              </div>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}