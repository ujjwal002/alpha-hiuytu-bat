// app/components/GoogleReviews.tsx
// Replaces the fake ui-avatars.com testimonials. Styled to look like real
// Google review cards with the official Google "G" badge and verification.
// Links to your actual Google Business Profile for "View all reviews".
//
// IMPORTANT: After deploy, replace the placeholder reviews below with the real
// reviews from your GMB. You can copy them word-for-word from Google.
"use client";
import { useState, useEffect } from "react";
import { Star, ExternalLink } from "lucide-react";

// ── Your real Google Business Profile links ──────────────────────────────────
// "Read all reviews" — opens your Google search/maps result
const GMB_VIEW_URL =
  "https://www.google.com/search?q=Stone+Works+Remodeling&stick=H4sIAAAAAAAA_-NgU1I1qLAwMjQzNUhMTE4zM0w1TjG0MqgwNzIzMDWwNEtOTLW0SDIwX8QqFlySn5eqEJ5flF2sEJSam5-SmpOZlw4Ai4l5GEIAAAA";

// "Write a review" — paste your write-review URL here once you grab it from
// Google Maps → your business → Write a review → copy the URL
const GMB_WRITE_URL = GMB_VIEW_URL;

type Review = {
  name: string;
  initials: string;
  // Google avatar circle background — pick from Google's real palette
  color: "blue" | "green" | "red" | "amber" | "purple" | "teal";
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;       // e.g. "2 weeks ago"
  service: string;
  text: string;
};

// REPLACE these with copy-pasted text from your real Google reviews.
// Keep the same shape. Don't fabricate — use your actual customers.
const reviews: Review[] = [
  {
    name: "Cari Z.",
    initials: "CZ",
    color: "blue",
    location: "Livonia, MI",
    rating: 5,
    date: "3 weeks ago",
    service: "Multiple Bathroom Remodel",
    text:
      "The team transformed our dated bathrooms into beautiful, functional spaces — professional, punctual, and detail-oriented. Highly recommend Stone Works Remodeling!",
  },
  {
    name: "Kelly S.",
    initials: "KS",
    color: "green",
    location: "Rochester, MI",
    rating: 5,
    date: "1 month ago",
    service: "Walk-in Tub Installation",
    text:
      "We needed a walk-in tub for safety and accessibility. Stone Works delivered perfect installation and service. Excellent communication throughout.",
  },
  {
    name: "Amit S.",
    initials: "AS",
    color: "red",
    location: "Troy, MI",
    rating: 5,
    date: "2 months ago",
    service: "Tub-to-Shower Conversion",
    text:
      "Val and the crew completed our master bathroom remodel on time and with great attention to detail. Beautiful results and a clean worksite.",
  },
];

const colorMap: Record<Review["color"], string> = {
  blue: "bg-blue-600",
  green: "bg-emerald-600",
  red: "bg-rose-600",
  amber: "bg-amber-600",
  purple: "bg-violet-600",
  teal: "bg-teal-600",
};

// Official Google "G" logo
const GoogleG = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

export default function GoogleReviews() {
  // Auto-cycle for mobile carousel
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((p) => (p + 1) % reviews.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header with real Google badge */}
        <div className="text-center mb-12">
          <a
            href={GMB_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full pl-2 pr-5 py-2 mb-6 shadow-sm hover:shadow-md transition-shadow"
            aria-label="View Stone Works Remodeling on Google"
          >
            <span className="bg-white rounded-full p-1.5 border border-slate-200">
              <GoogleG className="h-5 w-5" />
            </span>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-gray-900 text-base">5.0</span>
              <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} className="h-4 w-4 text-amber-400 fill-amber-400" aria-hidden="true" />
                ))}
              </div>
            </div>
            <span className="text-slate-600 text-sm">Google Reviews</span>
            <ExternalLink className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
          </a>

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            What Metro Detroit Homeowners Say
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Real reviews from real customers across Wayne, Oakland, and Macomb Counties.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div
          className="md:hidden"
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <ReviewCard review={reviews[active]} />
          <div className="flex justify-center gap-2 mt-5" aria-label="Review navigation">
            {reviews.map((r, i) => (
              <button
                key={i}
                aria-label={`Show review from ${r.name}`}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  active === i ? "w-8 bg-blue-600" : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={GMB_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-blue-400 text-gray-900 px-6 py-3 rounded-lg font-bold text-sm transition-colors"
          >
            <GoogleG className="h-4 w-4" />
            Read All Google Reviews
            <ExternalLink className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
          </a>
          <a
            href={GMB_WRITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold text-sm"
          >
            Write a Review
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review: r }: { review: Review }) {
  return (
    <article className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col h-full">
      {/* Header — Google-style avatar + name */}
      <header className="flex items-start gap-3 mb-3">
        <div
          className={`${colorMap[r.color]} text-white font-bold text-base rounded-full w-11 h-11 flex items-center justify-center flex-shrink-0`}
          aria-hidden="true"
        >
          {r.initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 text-sm truncate">{r.name}</p>
          <p className="text-xs text-slate-500">{r.location}</p>
        </div>
        <GoogleG className="h-4 w-4 mt-1 flex-shrink-0" />
      </header>

      {/* Stars + date */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-0.5" aria-label={`${r.rating} out of 5 stars`}>
          {[...Array(r.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" aria-hidden="true" />
          ))}
        </div>
        <span className="text-xs text-slate-500">{r.date}</span>
      </div>

      {/* Body */}
      <blockquote className="text-slate-700 text-sm leading-relaxed mb-4 flex-1">
        {r.text}
      </blockquote>

      {/* Project tag */}
      <div className="pt-3 border-t border-slate-100">
        <span className="text-xs text-blue-700 font-semibold bg-blue-50 px-3 py-1 rounded-full">
          {r.service}
        </span>
      </div>
    </article>
  );
}