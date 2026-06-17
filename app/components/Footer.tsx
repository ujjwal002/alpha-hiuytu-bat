"use client";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

/* Premium footer — matches HomePage stone/brass system.
   Relies on the same font setup: .font-display → Fraunces (see layout.tsx). */
const C = {
  ink: "#1c1916",
  bone: "#f4efe7",
  brass: "#9c7c4a",
  brassHi: "#b89968",
  muted: "rgba(244,239,231,0.55)",
  line: "rgba(244,239,231,0.12)",
};

// Small Fraunces heading with a brass seam marker
function FootHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-lg mb-5 flex items-center gap-2.5" style={{ color: C.bone }}>
      <span className="rotate-45 inline-block flex-shrink-0" style={{ width: 5, height: 5, background: C.brass }} aria-hidden="true" />
      {children}
    </h3>
  );
}

const linkStyle = { color: C.muted } as React.CSSProperties;
const hoverIn = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.color = C.brassHi);
const hoverOut = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.color = C.muted);

const quickLinks = [
  { href: "/about", label: "About Stone Works Remodeling" },
  { href: "/services", label: "Bathroom Remodeling Services" },
  { href: "/gallery", label: "Remodeling Gallery" },
  { href: "/testimonials", label: "Customer Testimonials" },
  { href: "/blog", label: "Remodeling Blog" },
  { href: "/guides/plan-bathroom-remodel", label: "Bathroom Remodel Planning Guide" },
  { href: "/compare", label: "Compare Bathroom Remodelers" },
  { href: "/contact", label: "Contact Stone Works" },
];

const serviceLinks = [
  { href: "/services/bathroom-remodeling", label: "Bathroom Remodeling in Metro Detroit" },
  { href: "/services/shower-conversions", label: "Shower Conversion Services" },
  { href: "/services/walk-in-tubs", label: "Walk-in Tubs Installation" },
  { href: "/services/custom-works", label: "Custom Stone & Tile Work" },
];

const Footer = () => {
  return (
    <footer className="font-sans py-16" role="contentinfo" aria-label="Footer" style={{ background: C.ink }}>
      {/* LocalBusiness schema lives in layout.tsx — no duplicates here */}

      {/* brass hairline at the very top of the footer */}
      <div className="h-px w-full mb-14" style={{ background: `linear-gradient(to right, transparent, ${C.brass}, transparent)`, opacity: 0.6 }} aria-hidden="true" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 overflow-hidden flex-shrink-0" style={{ border: `1px solid ${C.brass}` }}>
                <Image
                  src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/stone.webp"
                  alt="Stone Works Remodeling logo — premium bathroom remodeling in Metro Detroit, MI"
                  className="w-full h-full object-cover"
                  width={56}
                  height={56}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg=="
                  quality={80}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl leading-tight" style={{ color: C.bone }}>
                  Stone Works <span style={{ color: C.brassHi }}>Remodeling</span>
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] mt-1" style={{ color: "rgba(244,239,231,0.45)" }}>
                  Bespoke Bathrooms · Metro Detroit
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed mt-5 mb-6" style={{ color: C.muted }}>
              Bespoke bathroom remodeling, shower conversions, walk-in tubs, and custom stonework across Metro Detroit. By appointment.
            </p>

            <div className="flex gap-3" aria-label="Social media links">
              {[
                { href: "https://www.facebook.com/stoneworkremodeling", label: "Facebook", path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
                { href: "https://www.instagram.com/stoneworkremodeling", label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.735 0 8.332.013 7.052.07 5.766.128 4.332.393 3.001 1.724 1.67 3.055 1.405 4.489 1.348 5.775c-.057 1.28-.07 1.683-.07 4.948s.013 3.668.07 4.948c.057 1.286.322 2.72 1.653 4.051 1.331 1.331 2.765 1.596 4.051 1.653 1.28.057 1.683.07 4.948.07s3.668-.013 4.948-.07c1.286-.057 2.72-.322 4.051-1.653 1.331-1.331 1.596-2.765 1.653-4.051.057-1.28.07-1.683.07-4.948s-.013-3.668-.07-4.948c-.057-1.286-.322-2.72-1.653-4.051C19.668.393 18.234.128 16.948.07 15.668.013 15.265 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" },
                { href: "https://www.linkedin.com/company/stoneworkremodeling", label: "LinkedIn", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 12.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.867 0-2.153 1.459-2.153 2.966v5.701h-3v-11h2.879v1.508h.04c.401-.757 1.379-1.558 2.837-1.558 3.036 0 3.604 2 3.604 4.604v6.446z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Stone Works Remodeling on ${s.label}`}
                  className="w-10 h-10 flex items-center justify-center transition-colors"
                  style={{ border: `1px solid ${C.line}`, color: C.muted }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = C.ink; e.currentTarget.style.background = C.brass; e.currentTarget.style.borderColor = C.brass; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = C.muted; e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = C.line; }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <FootHeading>Explore</FootHeading>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Service links">
            <FootHeading>Our Services</FootHeading>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="not-italic">
            <FootHeading>Contact</FootHeading>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: C.brass }} aria-hidden="true" />
                <a href="tel:+12489552952" className="transition-colors" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                  (248) 955-2952
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: C.brass }} aria-hidden="true" />
                <a href="mailto:val@stoneworksremodeling.com" className="transition-colors" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                  val@stoneworksremodeling.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: C.brass }} aria-hidden="true" />
                <span style={{ color: C.muted }}>Livonia, Metro Detroit, MI, USA</span>
              </li>
            </ul>

            <a
              href="tel:+12489552952"
              className="inline-flex items-center gap-2 mt-7 px-5 py-3 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors"
              style={{ background: C.brass, color: C.ink }}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.brassHi)}
              onMouseLeave={(e) => (e.currentTarget.style.background = C.brass)}
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> Book a Consultation
            </a>
          </address>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ borderTop: `1px solid ${C.line}`, color: "rgba(244,239,231,0.4)" }}>
          <span>© {new Date().getFullYear()} Stone Works Remodeling. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="rotate-45 inline-block" style={{ width: 4, height: 4, background: C.brass }} aria-hidden="true" />
            Licensed &amp; insured in Michigan
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;