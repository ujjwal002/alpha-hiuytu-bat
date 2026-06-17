"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ChevronDown, ChevronRight, Menu, X, Mail, Clock, ShowerHead, Droplets, Bath, Accessibility } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { event } from "../lib/gtag";

/* Premium header — matches HomePage / Footer stone/brass system.
   Relies on .font-display (Fraunces) set up in layout.tsx. */
const C = {
  ink: "#1c1916",
  bone: "#f4efe7",
  paper: "#fbf9f5",
  stone: "#e4dccf",
  brass: "#9c7c4a",
  brassHi: "#b89968",
  body: "#2a2520",
  muted: "#8a8175",
};

const phone = "(248) 955-2952";

const serviceItems = [
  { href: "/services/bathroom-remodeling", icon: ShowerHead, title: "Bathroom Remodeling", desc: "Complete bathroom renovations" },
  { href: "/services/shower-conversions", icon: Droplets, title: "Shower Conversion", desc: "Convert tubs to modern walk-in showers" },
  { href: "/services/walk-in-tubs", icon: Accessibility, title: "Walk-in Tubs", desc: "Safe, accessible bathing solutions" },
  { href: "/services/custom-works", icon: Bath, title: "Custom Stone & Tile", desc: "Bespoke designs for your bathroom" },
];

const navItems = [
  { href: "/", label: "Home", match: "/" },
  { href: "/gallery", label: "Gallery", match: "/gallery" },
  { href: "/about", label: "About", match: "/about" },
  { href: "/blog", label: "Blog", match: "/blog" },
  { href: "/guides/plan-bathroom-remodel", label: "Planning Guide", match: "/guides" },
  { href: "/compare", label: "Compare", match: "/compare" },
  { href: "/contact", label: "Contact", match: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const onCallClick = () => event({ action: "phone_click", category: "engagement", label: phone });

  // Active when exact match, or a child route (e.g. /guides → /guides/plan-…)
  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(path + "/");

  // Desktop nav link with brass wipe-underline
  const deskLink = (active: boolean) =>
    `relative px-3 py-2 text-[13px] tracking-[0.08em] font-medium transition-colors ` +
    `after:absolute after:left-3 after:right-3 after:bottom-1 after:h-px after:bg-[#9c7c4a] ` +
    `after:origin-left after:transition-transform after:duration-300 ` +
    (active
      ? "text-[#9c7c4a] after:scale-x-100"
      : "text-[#2a2520] hover:text-[#9c7c4a] after:scale-x-0 hover:after:scale-x-100");

  const mobLink = (active: boolean) =>
    `block py-3 text-sm tracking-[0.04em] transition-all hover:pl-2 ` +
    (active ? "text-[#9c7c4a] font-medium" : "text-[#2a2520] hover:text-[#9c7c4a]");

  return (
    <header
      className={`sticky top-0 z-50 w-full font-sans transition-all duration-300 ${isScrolled ? "shadow-lg backdrop-blur-sm" : ""}`}
      style={{ background: isScrolled ? "rgba(251,249,245,0.98)" : "rgba(251,249,245,0.95)", borderBottom: `1px solid ${C.stone}` }}
    >
      {/* LocalBusiness schema lives in layout.tsx — no duplicates here */}

      {/* Top Bar */}
      <div className="py-2 px-4 sm:px-6" style={{ background: C.ink, color: C.bone }}>
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex flex-wrap items-center gap-5 sm:gap-7">
            <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} onClick={onCallClick} aria-label="Call Stone Works Remodeling" className="flex items-center gap-2 text-sm transition-colors" style={{ color: "rgba(244,239,231,0.8)" }} onMouseEnter={(e) => (e.currentTarget.style.color = C.brassHi)} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(244,239,231,0.8)")}>
              <Phone className="h-3.5 w-3.5" style={{ color: C.brass }} aria-hidden="true" />
              {phone}
            </a>
            <a href="mailto:val@stoneworksremodeling.com" className="hidden sm:flex items-center gap-2 text-sm transition-colors" style={{ color: "rgba(244,239,231,0.8)" }} onMouseEnter={(e) => (e.currentTarget.style.color = C.brassHi)} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(244,239,231,0.8)")}>
              <Mail className="h-3.5 w-3.5" style={{ color: C.brass }} aria-hidden="true" />
              val@stoneworksremodeling.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(244,239,231,0.6)" }}>
            <Clock className="h-3 w-3" style={{ color: C.brass }} aria-hidden="true" />
            <span className="tracking-[0.06em]">Mon–Fri 8–6 · Sat 9–2</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navigation */}
        <nav className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group" aria-label="Stone Works Remodeling Home">
            <div className="w-12 h-12 sm:w-14 sm:h-14 overflow-hidden flex-shrink-0" style={{ border: `1px solid ${C.brass}` }}>
              <Image
                src="/instagram/logo.jpeg"
                alt="Stone Works Remodeling logo — bespoke bathroom remodeling in Metro Detroit, MI"
                className="w-full h-full object-cover"
                width={56}
                height={56}
                sizes="(max-width: 640px) 48px, 56px"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg=="
                quality={80}
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl leading-tight" style={{ color: C.ink }}>
                Stone Works <span style={{ color: C.brass }}>Remodeling</span>
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] mt-0.5" style={{ color: C.muted }}>
                Bespoke Bathrooms · Metro Detroit
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <Link href="/" className={deskLink(isActive("/"))}>Home</Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={deskLink(isActive("/services")) + " flex items-center"}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                aria-expanded={servicesDropdownOpen}
                aria-controls="services-dropdown"
              >
                Services <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" aria-hidden="true" />
              </button>

              <div
                id="services-dropdown"
                className="absolute left-0 mt-3 w-80 sm:w-96 rounded-xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top scale-95 group-hover:scale-100"
                style={{ background: "#fff", border: `1px solid ${C.stone}` }}
              >
                <div className="px-5 py-4" style={{ background: C.ink }}>
                  <h3 className="font-display text-lg" style={{ color: C.bone }}>Our Services</h3>
                  <p className="text-[11px] uppercase tracking-[0.16em] mt-1" style={{ color: "rgba(244,239,231,0.5)" }}>Bathroom solutions · Metro Detroit</p>
                </div>
                {serviceItems.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="group/item flex items-center gap-3 px-5 py-3.5 transition-colors"
                      style={{ borderBottom: i < serviceItems.length - 1 ? `1px solid ${C.stone}` : "none" }}
                      onClick={() => setServicesDropdownOpen(false)}
                      onMouseEnter={(e) => (e.currentTarget.style.background = C.paper)}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <span className="p-2 rounded-full flex-shrink-0" style={{ background: "rgba(156,124,74,0.12)" }}>
                        <Icon className="h-5 w-5" style={{ color: C.brass }} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-medium text-sm transition-colors group-hover/item:text-[#9c7c4a]" style={{ color: C.ink }}>{s.title}</span>
                        <span className="block text-xs mt-0.5" style={{ color: C.muted }}>{s.desc}</span>
                      </span>
                    </Link>
                  );
                })}
                <div className="px-5 py-3.5" style={{ background: C.bone }}>
                  <Link href="/services" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] font-medium" style={{ color: C.brass }} onClick={() => setServicesDropdownOpen(false)}>
                    View all services <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            {navItems.slice(1).map((n) => (
              <Link key={n.href} href={n.href} className={deskLink(isActive(n.match))}>{n.label}</Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center ml-6 px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors"
            style={{ background: C.ink, color: C.bone }}
            onMouseEnter={(e) => (e.currentTarget.style.background = C.brass)}
            onMouseLeave={(e) => (e.currentTarget.style.background = C.ink)}
          >
            Book Consultation
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 transition-colors"
            style={{ color: C.ink }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden py-4 px-4 sm:px-6 shadow-lg transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? "opacity-100 translate-y-0 block" : "opacity-0 -translate-y-4 pointer-events-none hidden"}`}
        style={{ background: C.paper, borderTop: `1px solid ${C.stone}` }}
      >
        <Link href="/" className={mobLink(isActive("/")) + " border-b"} style={{ borderColor: C.stone }} onClick={() => setMobileMenuOpen(false)}>Home</Link>

        {/* Services Accordion */}
        <div className="border-b" style={{ borderColor: C.stone }}>
          <button
            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            className={`flex items-center justify-between w-full py-3 text-sm tracking-[0.04em] transition-colors ${isActive("/services") ? "text-[#9c7c4a] font-medium" : "text-[#2a2520] hover:text-[#9c7c4a]"}`}
            aria-expanded={servicesDropdownOpen}
            aria-controls="mobile-services-dropdown"
          >
            Services
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180" : ""}`} aria-hidden="true" style={{ color: C.brass }} />
          </button>
          <div
            id="mobile-services-dropdown"
            className={`overflow-hidden transition-all duration-300 ${servicesDropdownOpen ? "max-h-96 opacity-100 mb-3" : "max-h-0 opacity-0"}`}
            style={{ background: "#fff", borderRadius: 10 }}
          >
            {serviceItems.map((s) => {
              const Icon = s.icon;
              const active = pathname === s.href;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${active ? "text-[#9c7c4a] font-medium" : "text-[#2a2520] hover:text-[#9c7c4a]"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="p-1.5 rounded-full flex-shrink-0" style={{ background: "rgba(156,124,74,0.12)" }}>
                    <Icon className="h-4 w-4" style={{ color: C.brass }} aria-hidden="true" />
                  </span>
                  {s.title}
                </Link>
              );
            })}
            <div className="px-4 py-2.5" style={{ borderTop: `1px solid ${C.stone}` }}>
              <Link href="/services" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] font-medium" style={{ color: C.brass }} onClick={() => setMobileMenuOpen(false)}>
                View all services <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {navItems.slice(1).map((n) => (
          <Link key={n.href} href={n.href} className={mobLink(isActive(n.match)) + " border-b"} style={{ borderColor: C.stone }} onClick={() => setMobileMenuOpen(false)}>{n.label}</Link>
        ))}

        {/* Mobile CTA */}
        <div className="mt-5 mb-2">
          <Link
            href="/contact"
            className="block w-full py-3.5 text-center text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            style={{ background: C.ink, color: C.bone }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Your Consultation
          </Link>
        </div>

        {/* Mobile Contact Info */}
        <div className="mt-4 pt-4" style={{ borderTop: `1px solid ${C.stone}` }}>
          <a href="tel:+12489552952" onClick={() => event({ action: "phone_click", category: "engagement", label: "+12489552952" })} className="flex items-center gap-3 py-2 text-sm transition-colors" style={{ color: C.body }}>
            <Phone className="h-4 w-4" style={{ color: C.brass }} aria-hidden="true" />{phone}
          </a>
          <a href="mailto:val@stoneworksremodeling.com" className="flex items-center gap-3 py-2 text-sm transition-colors" style={{ color: C.body }}>
            <Mail className="h-4 w-4" style={{ color: C.brass }} aria-hidden="true" />val@stoneworksremodeling.com
          </a>
          <div className="flex items-center gap-3 py-2 text-sm" style={{ color: C.body }}>
            <Clock className="h-4 w-4" style={{ color: C.brass }} aria-hidden="true" />
            <span>Mon–Fri 8–6 · Sat 9–2</span>
          </div>
        </div>
      </div>
    </header>
  );
}