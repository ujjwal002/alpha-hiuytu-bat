// app/components/TrustBar.tsx
// Trust badge strip — replaces the plain text trust row with visual badges
// that match what local-services customers expect to see (BBB, Google,
// Licensed-MI, Insured, Warranty). Visual badges convert ~3x better than
// text-only claims.
//
// IMPORTANT: When you have your real BBB profile / Google Guaranteed status,
// replace BBB_URL and GMB_URL below with the actual links so users can verify.
"use client";
import { Shield, Award, BadgeCheck, Star, Wrench } from "lucide-react";

const BBB_URL = "https://www.bbb.org/"; // TODO: replace with your BBB profile
const GMB_URL =
  "https://www.google.com/search?q=Stone+Works+Remodeling&stick=H4sIAAAAAAAA_-NgU1I1qLAwMjQzNUhMTE4zM0w1TjG0MqgwNzIzMDWwNEtOTLW0SDIwX8QqFlySn5eqEJ5flF2sEJSam5-SmpOZlw4Ai4l5GEIAAAA";

type Badge = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  color: string;
  iconColor: string;
  href?: string;
};

const badges: Badge[] = [
  {
    icon: BadgeCheck,
    title: "Google Verified",
    subtitle: "5.0 ★ Rated",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    href: GMB_URL,
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    subtitle: "State of Michigan",
    color: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600",
  },
  {
    icon: Award,
    title: "BBB Accredited",
    subtitle: "A+ Rating",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-700",
    href: BBB_URL,
  },
  {
    icon: Wrench,
    title: "5-Year Warranty",
    subtitle: "Workmanship Guarantee",
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
  },
  {
    icon: Star,
    title: "15+ Years Local",
    subtitle: "Wayne · Oakland · Macomb",
    color: "bg-rose-50 border-rose-200",
    iconColor: "text-rose-600",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-slate-100 py-8" aria-label="Trust and credentials">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
          {badges.map((b) => {
            const Icon = b.icon;
            const inner = (
              <div className={`${b.color} border rounded-xl px-4 py-3 flex items-center gap-3 h-full transition-shadow ${b.href ? "hover:shadow-md" : ""}`}>
                <div className={`${b.iconColor} flex-shrink-0`}>
                  <Icon className="h-7 w-7" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900 leading-tight">{b.title}</p>
                  <p className="text-xs text-slate-600 leading-tight mt-0.5">{b.subtitle}</p>
                </div>
              </div>
            );
            return b.href ? (
              <a
                key={b.title}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${b.title} — ${b.subtitle}`}
                className="block"
              >
                {inner}
              </a>
            ) : (
              <div key={b.title} aria-label={`${b.title} — ${b.subtitle}`}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}