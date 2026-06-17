// app/components/GoogleReviews.tsx
// Real-Google-styled review cards. Premium stone/brass frame to match the site,
// but the Google "G", gold stars, and avatar colors are kept authentic on
// purpose — those cues are what make the reviews read as genuine Google reviews.
//
// IMPORTANT: replace the placeholder reviews below with the real reviews from
// your GMB. Copy them word-for-word from Google. Relies on .font-display
// (Fraunces) set up in layout.tsx.
"use client";
import { useState, useEffect } from "react";
import { Star, ExternalLink } from "lucide-react";

// ── Your real Google Business Profile links ──────────────────────────────────
const GMB_VIEW_URL =
  "https://www.google.com/search?q=Stone+Works+Remodeling&stick=H4sIAAAAAAAA_-NgU1I1qLAwMjQzNUhMTE4zM0w1TjG0MqgwNzIzMDWwNEtOTLW0SDIwX8QqFlySn5eqEJ5flF2sEJSam5-SmpOZlw4Ai4l5GEIAAAA";
// "Write a review" — paste your write-review URL here once you grab it from Google Maps
const GMB_WRITE_URL = GMB_VIEW_URL;

// ── Premium palette (matches HomePage / Footer) ──────────────────────────────
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

type Review = {
  name: string;
  initials: string;
  color: "blue" | "green" | "red" | "amber" | "purple" | "teal";
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  service: string;
  text: string;
};

// REPLACE these with copy-pasted text from your real Google reviews.
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

// Authentic Google avatar palette — kept as-is for credibility
const colorMap: Record<Review["color"], string> = {
  blue: "#1a73e8",
  green: "#1e8e3e",
  red: "#d93025",
  amber: "#f29900",
  purple: "#7b3fbf",
  teal: "#12806a",
};

// Official Google "G" logo — colors intentionally unchanged
const GoogleG = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

export default function GoogleReviews() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((p) => (p + 1) % reviews.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="py-20 font-sans" style={{ background: C.paper }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Seam eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-10 sm:w-16" style={{ background: C.stone }} aria-hidden="true" />
            <span className="rotate-45 inline-block" style={{ width: 6, height: 6, background: C.brass }} aria-hidden="true" />
            <span className="font-display italic text-sm sm:text-base" style={{ color: C.brass }}>In their words</span>
            <span className="rotate-45 inline-block" style={{ width: 6, height: 6, background: C.brass }} aria-hidden="true" />
            <span className="h-px w-10 sm:w-16" style={{ background: C.stone }} aria-hidden="true" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-light mb-5" style={{ color: C.ink }}>
            What Metro Detroit homeowners say
          </h2>

          {/* Authentic Google rating badge */}
          <a
            href={GMB_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white rounded-full pl-2 pr-5 py-2 transition-shadow hover:shadow-md"
            style={{ border: `1px solid ${C.stone}` }}
            aria-label="View Stone Works Remodeling on Google"
          >
            <span className="bg-white rounded-full p-1.5" style={{ border: `1px solid ${C.stone}` }}>
              <GoogleG className="h-5 w-5" />
            </span>
            <span className="flex items-center gap-1.5">
              <span className="font-display text-lg" style={{ color: C.ink }}>5.0</span>
              <span className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} className="h-4 w-4 text-amber-400 fill-amber-400" aria-hidden="true" />
                ))}
              </span>
            </span>
            <span className="text-sm" style={{ color: C.body }}>Google Reviews</span>
            <ExternalLink className="h-3.5 w-3.5" style={{ color: C.muted }} aria-hidden="true" />
          </a>
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
          <div className="flex justify-center gap-2 mt-6" aria-label="Review navigation">
            {reviews.map((r, i) => (
              <button
                key={i}
                aria-label={`Show review from ${r.name}`}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
                className="h-1.5 rounded-full transition-all duration-200"
                style={{
                  width: active === i ? 32 : 10,
                  background: active === i ? C.brass : C.stone,
                }}
              />
            ))}
          </div>
        </div>

        {/* CTA bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href={GMB_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white px-7 py-3.5 text-xs uppercase tracking-[0.16em] font-medium transition-colors"
            style={{ border: `1px solid ${C.ink}`, color: C.ink }}
            onMouseEnter={(e) => { e.currentTarget.style.background = C.ink; e.currentTarget.style.color = C.bone; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = C.ink; }}
          >
            <GoogleG className="h-4 w-4" />
            Read All Google Reviews
          </a>
          <a
            href={GMB_WRITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-medium border-b pb-1 transition-colors"
            style={{ color: C.brass, borderColor: C.brass }}
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
    <article
      className="bg-white p-7 flex flex-col h-full transition-shadow duration-300 hover:shadow-2xl"
      style={{ border: `1px solid ${C.stone}`, borderRadius: 16 }}
    >
      {/* Header — Google-style avatar + name */}
      <header className="flex items-start gap-3 mb-4">
        <div
          className="text-white font-semibold text-base rounded-full w-11 h-11 flex items-center justify-center flex-shrink-0"
          style={{ background: colorMap[r.color] }}
          aria-hidden="true"
        >
          {r.initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm truncate" style={{ color: C.ink }}>{r.name}</p>
          <p className="text-xs" style={{ color: C.muted }}>{r.location}</p>
        </div>
        <GoogleG className="h-4 w-4 mt-1 flex-shrink-0" />
      </header>

      {/* Stars + date */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-0.5" aria-label={`${r.rating} out of 5 stars`}>
          {[...Array(r.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" aria-hidden="true" />
          ))}
        </div>
        <span className="text-xs" style={{ color: C.muted }}>{r.date}</span>
      </div>

      {/* Body */}
      <blockquote className="text-[15px] leading-relaxed mb-5 flex-1" style={{ color: C.body }}>
        {r.text}
      </blockquote>

      {/* Project tag */}
      <div className="pt-4" style={{ borderTop: `1px solid ${C.stone}` }}>
        <span
          className="text-[11px] uppercase tracking-[0.12em] font-medium px-3 py-1.5 rounded-full"
          style={{ color: C.brass, background: "rgba(156,124,74,0.1)" }}
        >
          {r.service}
        </span>
      </div>
    </article>
  );
}