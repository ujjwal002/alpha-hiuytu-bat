"use client";
// Reusable 2-step quote form (3 quick fields, then optional detail).
// Extracted from Home.tsx so it can be embedded on city landing pages too —
// previously those pages told visitors to "fill out the form on our homepage",
// which cost an extra click on the highest-intent local traffic.
import { useState } from "react";
import { Check, ArrowRight, Send } from "lucide-react";
import { event } from "../lib/gtag";

const PHONE = "(248) 955-2952";
const SUBMIT_ENDPOINT =
  "https://dl4ltl1h1f.execute-api.us-east-1.amazonaws.com/api/submit";

type QuickQuoteFormProps = {
  /** Where the lead came from, e.g. "Homepage Quote Form" or "Troy City Page" */
  source?: string;
};

export default function QuickQuoteForm({
  source = "Homepage Quote Form",
}: QuickQuoteFormProps) {
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
      `SOURCE: ${source}`,
      `NAME: ${form.name}`, `PHONE: ${form.phone}`,
      `ZIP: ${form.zip}`, `SERVICE: ${form.service || "Not specified"}`,
      `MESSAGE: ${form.message || "None"}`,
    ].join("\n");
    try {
      const res = await fetch(SUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name, phone: form.phone,
          email: "noreply@stoneworksremodeling.com",
          address: form.zip, designStyle: form.service || "To discuss",
          materialPreferences: leadSummary,
          removalNeeded: form.message || "Customer will discuss on call",
          bathroomSize: "To discuss on consultation", bathroomCount: "1",
          currentLayout: [source], specialFeatures: [],
          referenceImages: "", timeline: "ASAP", budgetRange: "To discuss",
          occupancy: "Owner-occupied", terms: true,
        }),
      });
      if (res.ok) {
        setStatus("success");
        event({ action: "quote_form_submit", category: "lead", label: form.service || source });
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

  const inputCls = "w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-300/30 outline-none text-sm text-gray-900 bg-white";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-2">
        <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? "bg-gold-600" : "bg-slate-200"}`} />
        <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? "bg-gold-600" : "bg-slate-200"}`} />
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
          <button type="submit" className="w-full bg-gold-600 hover:bg-gold-700 text-white py-4 rounded-lg font-bold text-base transition-colors flex items-center justify-center gap-2">
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
            <button type="submit" disabled={status === "submitting"} className="flex-1 bg-gold-600 hover:bg-gold-700 disabled:opacity-60 text-white py-3 rounded-lg font-bold text-base transition-colors flex items-center justify-center gap-2">
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