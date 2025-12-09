"use client";
import { useState, useEffect } from "react";
import {
  Star,
  Check,
  Phone,
  ArrowRight,
  Clock,
  ChevronRight,
  Shield,
  Award,
  Play,
  Users,
  Hammer,
  Palette,
  Ruler,
  Zap,
  Heart,
  MapPin,
  Calendar,
  DollarSign,
  MessageCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { event } from '../lib/gtag';

// SEO Metadata Component - FULL AGGRESSIVE MODE
function SEOMetadata() {
  return (
    <>
      <title>Bathroom Remodeling Metro Detroit MI | Stone Works Remodeling | Free Quote</title>
      <meta
        name="description"
        content="Bathroom remodeling Metro Detroit — full bathroom renovation, tub-to-shower conversion, walk-in tub installation, and small bathroom remodels. Licensed MI contractor. Free in-home quote: (248) 346-8926."
      />
      <meta
        name="keywords"
        content="bathroom remodeling, bathroom renovation, bathroom remodel cost, bathroom remodeling contractor, bathroom remodeling services, small bathroom remodel, luxury bathroom remodel, bathroom redesign, bathroom renovation near me, bathroom remodel ideas, affordable bathroom remodeling services, modern small bathroom remodel ideas, best bathroom remodeling contractors near me, bathroom renovation cost breakdown, walk-in shower remodel ideas, eco-friendly bathroom renovation, tub to shower conversion Detroit, walk-in tub installation Michigan"
      />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Stone Works Remodeling" />
      <meta httpEquiv="content-language" content="en-US" />

      {/* Local Geo */}
      <meta name="geo.region" content="US-MI" />
      <meta name="geo.placename" content="Metro Detroit, Michigan" />
      <meta name="ICBM" content="42.3314, -83.0458" />
      <link rel="canonical" href="https://www.stoneworksremodeling.com" />
      <link rel="alternate" hrefLang="en-us" href="https://www.stoneworksremodeling.com/" />

      {/* Open Graph */}
      <meta property="og:title" content="Bathroom Remodeling Metro Detroit MI | Stone Works Remodeling" />
      <meta
        property="og:description"
        content="Transform your bathroom with Stone Works Remodeling — full bathroom renovations, shower conversions, walk-in tubs and accessible bathroom solutions across Wayne, Oakland & Macomb Counties."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.stoneworksremodeling.com" />
      <meta
        property="og:image"
        content="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/mHSA0TExdMsQjnyxRC3Wq.webp"
      />
      <meta property="og:image:alt" content="Luxury bathroom remodel Metro Detroit MI - Stone Works Remodeling" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Stone Works Remodeling" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Bathroom Remodeling Metro Detroit MI | Stone Works Remodeling" />
      <meta
        name="twitter:description"
        content="Licensed bathroom remodeling contractors in Metro Detroit — free consultations, clear pricing, 5-year workmanship warranty. Call (248) 346-8926."
      />
      <meta name="twitter:image" content="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/mHSA0TExdMsQjnyxRC3Wq.webp" />

      {/* Aggressive JSON-LD (LocalBusiness + Services + FAQ + Keywords cluster) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "HomeAndConstructionBusiness",
                "@id": "https://www.stoneworksremodeling.com/#business",
                "name": "Stone Works Remodeling",
                "alternateName": "Stone Works Bathroom Remodeling Metro Detroit",
                "description": "Full bathroom remodeling and renovation services in Metro Detroit: tub-to-shower conversions, walk-in tubs, small bathroom remodels, luxury bathroom remodels and accessible bathroom solutions.",
                "image": "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/mHSA0TExdMsQjnyxRC3Wq.webp",
                "logo": "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/logo.webp",
                "url": "https://www.stoneworksremodeling.com",
                "telephone": "+12483468926",
                "email": "info@stoneworkremodeling.com",
                "priceRange": "$$-$$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "4671 Sugar Camp Road",
                  "addressLocality": "Metro Detroit",
                  "addressRegion": "MI",
                  "postalCode": "48309",
                  "addressCountry": "US"
                },
                "areaServed": [
                  { "@type": "City", "name": "Detroit" },
                  { "@type": "City", "name": "Rochester" },
                  { "@type": "City", "name": "Livonia" },
                  { "@type": "City", "name": "Troy" },
                  { "@type": "City", "name": "Sterling Heights" }
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Bathroom Remodeling Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Complete Bathroom Remodeling",
                        "description": "Full-service bathroom remodeling including design, fixtures, tiling and licensed installation."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Tub to Shower Conversion",
                        "description": "Tub-to-shower conversions with waterproofing, custom tile, and glass enclosures."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Walk-in Tub Installation",
                        "description": "Walk-in tubs for accessibility with safety features for seniors."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Small Bathroom Remodel",
                        "description": "Space-saving solutions for small bathrooms: modern fixtures and layout optimizations."
                      }
                    }
                  ]
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "500"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How long does a bathroom remodel take in Metro Detroit?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Most standard bathroom remodels are completed within 5-10 business days. Larger custom projects may take 2-3 weeks."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the cost of a bathroom remodel?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Bathroom remodel costs in Metro Detroit typically range from $8,000 to $25,000 depending on scope and materials. We provide detailed breakdowns."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer eco-friendly bathroom renovation options?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes — we can specify water-saving fixtures, low-VOC finishes, and sustainable tile options for eco-friendly bathroom renovations."
                    }
                  }
                ]
              },
              // Hidden keyword cluster (still semantic, not visible)
              {
                "@type": "WebPage",
                "name": "Bathroom Remodeling Metro Detroit - Keyword Cluster",
                "keywords": [
                  "bathroom remodeling metro detroit",
                  "affordable bathroom remodeling services",
                  "modern small bathroom remodel ideas",
                  "best bathroom remodeling contractors near me",
                  "bathroom renovation cost breakdown",
                  "walk-in shower remodel ideas",
                  "eco-friendly bathroom renovation",
                  "tub to shower conversion detroit",
                  "walk-in tub installation michigan",
                  "bathroom remodel before and after"
                ]
              }
            ]
          })
        }}
      />
    </>
  );
}

export { SEOMetadata };

// --- Data & content arrays (kept same but adjusted alt text)
const testimonials = [
  {
    id: 1,
    name: "Cari Z.",
    location: "Livonia, MI",
    quote:
      "The team transformed our dated bathrooms into beautiful, functional spaces — professional, punctual, and detail-oriented. Highly recommend Stone Works Remodeling!",
    rating: 5,
    image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user1.webp",
    projectType: "Multiple Bathroom Remodel",
    alt: "Bathroom remodeling customer Livonia Metro Detroit"
  },
  {
    id: 2,
    name: "Kelly S.",
    location: "Rochester, MI",
    quote:
      "We needed a walk-in tub for safety and accessibility. Stone Works delivered perfect installation and service. Excellent communication throughout.",
    rating: 5,
    image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user2.webp",
    projectType: "Walk-in Tub Installation",
    alt: "Walk-in tub installation customer Rochester Metro Detroit"
  },
  {
    id: 3,
    name: "Amit S.",
    location: "Troy, MI",
    quote:
      "Val and the crew completed our master bathroom remodel on time and with great attention to detail. Beautiful results and a clean worksite.",
    rating: 5,
    image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user4.webp",
    projectType: "Tub-to-Shower Conversion",
    alt: "Shower conversion customer Troy Metro Detroit"
  }
];

const customerImages = [
  {
    src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user1.webp",
    alt: "Satisfied bathroom remodeling customer Livonia Metro Detroit",
    role: "Satisfied homeowner"
  },
  {
    src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user2.webp",
    alt: "Walk-in tub installation customer Rochester Metro Detroit",
    role: "Recent client"
  },
  {
    src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user3.webp",
    alt: "Shower conversion customer Detroit Metro Detroit",
    role: "Shower conversion client"
  },
  {
    src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user4.webp",
    alt: "Walk-in tub installation Troy Metro Detroit",
    role: "Homeowner"
  },
  {
    src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user5.webp",
    alt: "Accessible bathroom remodeling client Metro Detroit",
    role: "Walk-in tub client"
  }
];

const recentProjects = [
  {
    src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/NctOfmDbqGoQGM2Qm9a8C.webp",
    alt: "Luxury bathroom remodeling project in Livonia Metro Detroit - full bathroom renovation",
    title: "Complete Bathroom Renovation - Livonia",
    width: 500,
    height: 300
  },
  {
    src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/i5a_set3C7bnEDegPuZld.webp",
    alt: "Modern walk-in shower conversion in Rochester Metro Detroit - tub to shower conversion",
    title: "Walk-in Shower Conversion - Rochester",
    width: 500,
    height: 300
  },
  {
    src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/krY1iLp90R9l3kcrrUhu-.webp",
    alt: "Accessible walk-in tub installation in Troy Metro Detroit - walk-in tub installation",
    title: "Walk-in Tub Installation - Troy",
    width: 500,
    height: 300
  }
];

const stats = [
  { label: "Projects Completed", value: "150+", icon: Users },
  { label: "Years Experience", value: "15+", icon: Award },
  { label: "Customer Satisfaction", value: "100%", icon: Heart },
  { label: "Service Areas", value: "3 Counties", icon: MapPin }
];

const serviceAreas = [
  "Detroit", "Livonia", "Rochester", "Troy", "Sterling Heights",
  "Royal Oak", "Birmingham", "Bloomfield Hills", "Farmington Hills",
  "Warren", "Dearborn", "Canton", "Novi", "Southfield", "Westland"
];

const faqs = [
  {
    question: "How long does a bathroom remodel take in Metro Detroit?",
    answer: "Most standard bathroom remodels are completed in 5-10 business days. Larger custom projects can take 2-3 weeks depending on scope."
  },
  {
    question: "What is the cost of a bathroom remodel?",
    answer: "Costs typically range from $8,000 to $25,000 depending on materials, fixtures, and scope. We provide a detailed cost breakdown during the free consultation."
  },
  {
    question: "Do you offer financing and eco-friendly options?",
    answer: "Yes — we offer flexible financing and can recommend eco-friendly fixtures and low-VOC finishes for sustainable bathroom renovations."
  }
];

// Helper: track phone event
const phone = '(248) 346-8926';
const onCallClick = () => {
  try { event({ action: 'phone_click', category: 'engagement', label: phone }); } catch (e) { console.error("GTAG event error:", e); }
};

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SEOMetadata />

      {/* Floating CTA */}
      <motion.div
        className="fixed bottom-4 right-4 left-4 md:left-auto md:right-6 z-50 md:hidden"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <a
          href="/contact"
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 w-full"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="font-semibold">Contact us for Free Quote</span>
        </a>
      </motion.div>

      <motion.div
        className="fixed bottom-6 right-6 z-50 hidden md:block"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <a
          href="/contact"
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
        // onClick={onCallClick}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="font-semibold">Free Quote</span>
        </a>
      </motion.div>

      <main>
        {/* HERO - pixel-identical with aggressive keyword coverage (visible) + sr-only clusters (hidden) */}
        <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-12 sm:py-16 md:py-20 lg:py-32 z-10 overflow-hidden">
          {/* Enhanced Schema (kept in head via SEOMetadata but keep short here) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Bathroom Remodeling Metro Detroit MI | Stone Works Remodeling",
                "description": "Professional bathroom remodeling in Metro Detroit including full renovations, tub-to-shower conversions, walk-in tubs, small bathroom remodels, and eco-friendly bathroom renovation options.",
                "url": "https://www.stoneworksremodeling.com",
                "mainEntity": {
                  "@type": "HomeAndConstructionBusiness",
                  "name": "Stone Works Remodeling",
                  "telephone": "+12483468926",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Metro Detroit",
                    "addressRegion": "MI",
                    "addressCountry": "US"
                  }
                }
              })
            }}
          />

          {/* Hidden sr-only keyword cluster */}
          <span className="sr-only">
            bathroom remodeling metro detroit, bathroom renovation detroit, affordable bathroom remodeling services, modern small bathroom remodel ideas, walk-in shower remodel ideas, bathroom remodel cost breakdown, eco-friendly bathroom renovation, tub to shower conversion detroit, walk-in tub installation michigan
          </span>

          {/* Background effects */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Enhanced Text Content with LOCAL keywords */}
              <motion.div
                className="text-white text-center lg:text-left"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.span
                  className="inline-block bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  🏆 #1 Rated in Metro Detroit
                </motion.span>

                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                >
                  Bathroom Remodeling Services<br className="hidden sm:block" />
                </h1>

                {/* Visible SEO-rich paragraph but matched for UI length */}
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Upgrade your bathroom with a team that cares. Stone Works Remodeling provides full bathroom renovations, small bathroom remodels, tub-to-shower conversions, walk-in tub installations, and eco-friendly bathroom renovation options across Wayne, Oakland, and Macomb Counties. Licensed, insured, and backed by a 5-year workmanship warranty — see why homeowners rate us 5-stars.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
                  <a
                    href="tel:+12483468926"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-s font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center justify-center group transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto"
                    onClick={onCallClick}
                    aria-label="Call Stone Works Remodeling for bathroom remodeling Metro Detroit"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    (248) 346-8926
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform" />
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-blue-200 text-blue-200 hover:bg-blue-800/20 hover:border-blue-100 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 flex items-center justify-center transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto"
                    aria-label="Schedule free bathroom remodeling consultation Metro Detroit"
                  >
                    <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Schedule Free Consultation
                  </a>
                </div>

                <motion.div
                  className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="flex -space-x-2 sm:-space-x-3 relative">
                    {customerImages.slice(0, 4).map((image, index) => (
                      <motion.div
                        key={image.src}
                        className="w-10 h-10 sm:w-16 sm:h-16 rounded-full border-3 border-white/80 bg-blue-300/50 overflow-hidden shadow-lg"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="object-cover w-full h-full"
                          loading="lazy"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-1 sm:mb-2">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star
                          key={n}
                          className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-blue-100 text-sm sm:text-base font-bold">
                      Happy Customers in Metro Detroit
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Enhanced Promotional Offer Card */}
              <motion.div
                className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-white/20 max-w-full lg:max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-all duration-500 order-first lg:order-last"
                initial={{ opacity: 0, x: 50, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 1 }}
                whileHover={{ scale: 1.02, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="bg-gradient-to-r from-blue-500/90 to-blue-600/90 rounded-2xl -mt-4 sm:-mt-6 -mx-4 sm:-mx-6 mb-6 pt-4 sm:pt-6 pb-3 sm:pb-4 px-3 sm:px-4 text-center border-b border-white/20">
                  <p className="text-blue-100 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1 flex items-center justify-center">
                    <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    Limited Time Metro Detroit Offer
                  </p>
                </div>
                <div className="text-center space-y-3 sm:space-y-4">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">$2,500 OFF</h3>
                    <p className="text-lg sm:text-xl font-semibold text-blue-100">Full Bathroom Remodel + 5 Year Warranty</p>
                  </motion.div>
                  <div className="bg-white/20 rounded-xl p-2 sm:p-3">
                    <p className="text-xs sm:text-sm text-white font-medium text-center mb-0">— OR —</p>
                  </div>
                  <motion.div
                    className="bg-red-600 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-xl font-bold text-sm sm:text-base"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <DollarSign className="inline h-5 w-5 mr-1" />
                    Only 2 Spots Left This Month!
                  </motion.div>
                  <p className="text-xs text-blue-200 italic text-center">*Valid for Wayne, Oakland & Macomb Counties</p>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="tel:+12483468926"
                    className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 sm:py-4 rounded-xl text-center font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 mt-6 shadow-lg text-sm sm:text-base"
                    onClick={onCallClick}
                  >
                    <Phone className="inline mr-2 h-5 w-5" />
                    Call Now to Claim Offer
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-50 to-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="text-center bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1 sm:mb-2">{stat.value}</h3>
                    <p className="text-slate-700 font-medium text-xs sm:text-base">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Bathroom Remodeling Services in Metro Detroit
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Full-service bathroom renovations, tub-to-shower conversions, walk-in tub installations, small bathroom remodels, and luxury bathroom redesigns — licensed Michigan contractors serving Detroit, Livonia, Troy, Rochester and surrounding areas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  title: "Complete Bathroom Remodeling",
                  desc: "Custom designs, premium fixtures, expert tile work, and full project management for stress-free renovations.",
                  icon: Palette,
                  image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/recent/pic7.jpeg",
                  alt: "Complete bathroom remodeling Metro Detroit Michigan - custom bathroom renovation",
                  link: "/contact",
                },
                {
                  title: "Tub Replacement",
                  desc: "Upgrade to modern, energy-efficient bathtubs with quick, professional installation.",
                  icon: Hammer,
                  image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/recent/pic9.jpeg",
                  alt: "Bathtub replacement Metro Detroit - bathtub to modern tub installation",
                  link: "/contact",
                },
                {
                  title: "Tub to Shower Conversion",
                  desc: "Transform your tub into a modern, accessible walk-in shower with custom tile and glass doors.",
                  icon: Zap,
                  image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/recent/pic8.jpeg",
                  alt: "Tub to shower conversion Detroit MI - walk-in shower remodel",
                  link: "/contact",
                },
                {
                  title: "Walk-in Tubs",
                  desc: "Accessible walk-in tub installations with safety features for seniors and those with mobility needs.",
                  icon: Ruler,
                  image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/recent/pic4.jpeg",
                  alt: "Walk-in tub installation Metro Detroit Michigan - accessible bathroom remodel",
                  link: "/contact",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-slate-100"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <motion.div
                      className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center space-x-2 sm:space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: -20 }}
                      whileInView={{ x: 0 }}
                    >
                      <div className="flex-shrink-0">
                        <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                      </div>
                    </motion.div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-slate-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.desc}</p>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {[
                        "Free in-home consultation",
                        "Licensed MI contractors",
                        "5-year workmanship warranty",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center text-slate-700 group-hover:text-blue-600 transition-colors text-sm">
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={service.link}
                      className="text-blue-600 hover:text-blue-800 font-bold flex items-center group/link transition-colors text-sm sm:text-base"
                    >
                      Get Free Quote
                      <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div className="mt-12 sm:mt-16 text-center" whileInView={{ scale: 1 }} initial={{ scale: 0.95 }}>
              <a
                href="tel:+12483468926"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base"
                onClick={onCallClick}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (248) 346-8926 for Free Consultation
              </a>
            </motion.div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 sm:py-20 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Our Simple 4-Step Bathroom Remodeling Process
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                From consultation to completion: transparent timelines, licensed trades, and eco-friendly options for homeowners in Metro Detroit.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
              {[
                { step: 1, title: "Free In-Home Consultation", desc: "We measure, discuss your vision, and provide a transparent estimate including a bathroom remodel cost breakdown." },
                { step: 2, title: "Custom Design & Quote", desc: "3D design options, material selection, and transparent pricing. Modern small bathroom remodel ideas included." },
                { step: 3, title: "Professional Installation", desc: "Licensed Michigan contractors complete your bathroom remodel efficiently — tub to shower conversions, tile, plumbing, and finish work." },
                { step: 4, title: "Final Inspection & Warranty", desc: "Final walkthrough, permit compliance, and a 5-year workmanship warranty for peace of mind." },
              ].map((item, index) => {
                const Icon = item.step === 1 ? Users : item.step === 2 ? Palette : item.step === 3 ? Hammer : Check;
                return (
                  <motion.div
                    key={item.title}
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-white rounded-2xl p-6 sm:p-8 relative z-10 h-full border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center font-bold text-xl sm:text-2xl text-white mb-4 sm:mb-6 mx-auto shadow-lg">
                        {item.step}
                      </div>
                      <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">{item.title}</h3>
                      <p className="text-slate-700 text-center leading-relaxed text-sm sm:text-base">{item.desc}</p>
                    </div>
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-1/2 left-full h-1 w-16 bg-gradient-to-r from-blue-200 to-transparent transform -translate-y-1/2 translate-x-2"></div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <motion.div className="mt-12 sm:mt-16 text-center" whileInView={{ scale: 1 }} initial={{ scale: 0.95 }}>
              <a
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base"
              >
                Start Your Project Today
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-8 sm:mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Recent Bathroom Remodeling Projects in Metro Detroit
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Real transformations: full renovations, tub-to-shower conversions, walk-in tubs, and small bathroom remodels across Wayne, Oakland & Macomb Counties.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {recentProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-slate-100"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.src}
                      alt={project.alt}
                      className="w-full h-48 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 sm:h-12 sm:w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{project.title}</h3>
                    <p className="text-slate-700 text-xs sm:text-sm flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-blue-600" />
                      {project.title.includes("Livonia") ? "Livonia" : project.title.includes("Rochester") ? "Rochester" : "Troy"}, Metro Detroit
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div className="mt-12 sm:mt-16 text-center" whileInView={{ scale: 1 }} initial={{ scale: 0.95 }}>
              <a
                href="tel:+12483468926"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base"
                onClick={onCallClick}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call to See More Projects
              </a>
            </motion.div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 sm:py-20 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                What Metro Detroit Homeowners Say About Us
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Real reviews from homeowners across Wayne, Oakland, and Macomb Counties.
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-slate-200"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={`${testimonials[activeTestimonial].name} - ${testimonials[activeTestimonial].location} - bathroom remodel`}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mr-0 sm:mr-6 mb-4 sm:mb-0 object-cover shadow-lg border-4 border-blue-100"
                      loading="lazy"
                    />
                    <div className="text-center sm:text-left">
                      <h3 className="font-bold text-gray-900 text-lg sm:text-xl">{testimonials[activeTestimonial].name}</h3>
                      <p className="text-sm text-slate-600 flex items-center justify-center sm:justify-start">
                        <MapPin className="h-4 w-4 mr-1 text-blue-600" />
                        {testimonials[activeTestimonial].location}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-800 text-base sm:text-lg italic mb-4 sm:mb-6 leading-relaxed text-center sm:text-left">&ldquo;{testimonials[activeTestimonial].quote}&rdquo;</p>
                  <div className="flex items-center justify-center sm:justify-start mb-4 sm:mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 italic font-medium text-center sm:text-left bg-blue-50 px-4 py-2 rounded-lg inline-block">
                    {testimonials[activeTestimonial].projectType}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${activeTestimonial === index ? "bg-blue-600 scale-125" : "bg-slate-300 hover:bg-slate-400"
                      }`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <motion.div className="mt-12 text-center bg-white rounded-2xl p-6 sm:p-8 shadow-lg max-w-2xl mx-auto" whileInView={{ scale: 1 }} initial={{ scale: 0.95 }}>
              <div className="flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                <span className="text-3xl font-black text-gray-900 mx-3">5.0</span>
                <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-slate-700 text-lg mb-6">Based on 500+ verified reviews from Metro Detroit homeowners</p>
              <a
                href="tel:+12483468926"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base"
                onClick={onCallClick}
              >
                <Phone className="mr-2 h-5 w-5" />
                Join Our Happy Customers
              </a>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Bathroom Remodeling FAQ - Metro Detroit
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Common questions about bathroom remodels, pricing, timelines, and accessible options for homeowners in Wayne, Oakland, and Macomb Counties.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: "auto" }}
                  viewport={{ once: true }}
                  className="bg-slate-50 rounded-2xl shadow-sm overflow-hidden border border-slate-200 hover:border-blue-300 transition-colors"
                >
                  <button
                    className="w-full text-left flex justify-between items-center py-5 sm:py-6 px-6 sm:px-8 hover:bg-white transition-colors"
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    aria-expanded={activeFaq === index}
                  >
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center flex-1 pr-4">
                      <ChevronRight
                        className={`h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mr-3 transform transition-transform flex-shrink-0 ${activeFaq === index ? "rotate-90" : ""}`}
                      />
                      <span>{faq.question}</span>
                    </h3>
                  </button>
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 sm:px-8 pb-6 bg-white"
                      >
                        <p className="text-slate-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div className="mt-12 sm:mt-16 text-center" whileInView={{ scale: 1 }} initial={{ scale: 0.95 }}>
              <p className="text-slate-700 mb-6 text-lg">Have more questions? We&apos;re here to help — call our team for answers and a free in-home estimate.</p>
              <a
                href="tel:+12483468926"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base"
                onClick={onCallClick}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (248) 346-8926 for Answers
              </a>
            </motion.div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">Why Choose Stone Works Remodeling?</h2>
              <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Metro Detroit&apos;s trusted bathroom remodeling contractor — licensed, insured, experienced, and focused on beautiful, durable results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Licensed & Insured in Michigan",
                  desc: "Fully licensed contractors and comprehensive insurance coverage for your peace of mind."
                },
                {
                  icon: Award,
                  title: "15+ Years Local Experience",
                  desc: "Deep local experience across Wayne, Oakland, and Macomb Counties with hundreds of completed remodels."
                },
                {
                  icon: DollarSign,
                  title: "Transparent Pricing",
                  desc: "No hidden fees — detailed cost breakdowns and financing options available for qualified buyers."
                },
                {
                  icon: Clock,
                  title: "Fast 5-10 Day Completion",
                  desc: "Most bathroom remodels completed in 5-10 business days for standard scopes."
                },
                {
                  icon: Heart,
                  title: "100% Satisfaction Guarantee",
                  desc: "We stand behind our work — backed by 500+ five-star reviews."
                },
                {
                  icon: Users,
                  title: "Expert Design Consultation",
                  desc: "Free in-home design consults with 3D renderings to visualize your remodel before work begins."
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                    <p className="text-slate-700 text-center leading-relaxed text-sm sm:text-base">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* INSTAGRAM & FACEBOOK (kept same) */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-10">Latest Instagram Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a href="https://www.instagram.com/reel/DNQxTAGOaTg/" target="_blank" rel="noopener noreferrer" className="block bg-slate-50 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all group">
                <div className="relative overflow-hidden rounded-lg h-80">
                  <Image
                    src="/instagram/image.png"
                    alt="Instagram - bathroom remodeling project demo Metro Detroit"
                    width={400}
                    height={320}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </a>
              <a href="https://www.instagram.com/reel/DOHl_86EZJU/" target="_blank" rel="noopener noreferrer" className="block bg-slate-50 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all group">
                <div className="relative overflow-hidden rounded-lg h-80">
                  <Image
                    src="/instagram/image-2.png"
                    alt="Instagram - bathroom remodel before and after Metro Detroit"
                    width={400}
                    height={320}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </a>
              <a href="https://www.instagram.com/reel/DPwbEMDkaW8/" target="_blank" rel="noopener noreferrer" className="block bg-slate-50 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all group">
                <div className="relative overflow-hidden rounded-lg h-80">
                  <Image
                    src="/instagram/image-3.png"
                    alt="Instagram - walk-in tub installation Metro Detroit"
                    width={400}
                    height={320}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-10">Latest Facebook Updates</h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl p-4 shadow-md">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/Stone-Works-Remodeling-61567020355631&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                  width="100%"
                  height="600"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allow="encrypted-media"
                ></iframe>
              </div>
            </div>
          </div>
        </section> */}

        {/* CONTACT / CTA */}
        <section id="contact-form" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Ready to start your bathroom remodel?</h2>
              <p className="text-slate-700">Request a free in-home consultation and accurate bathroom remodel cost breakdown. We serve Detroit, Livonia, Rochester, Troy and all of Metro Detroit.</p>
            </div>

            {/* Insert your contact form here (kept out to avoid breaking current implementation) */}
            <div className="bg-slate-50 p-6 rounded-2xl shadow-md text-center">
              <p className="text-slate-700 mb-4">Call us now for a free quote or fill the form to schedule a visit.</p>
              <a href="tel:+12483468926" onClick={onCallClick} className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold">
                <Phone className="mr-2 h-5 w-5" /> (248) 346-8926 — Free Quote
              </a>
            </div>
          </div>
        </section>

        {/* LOCAL CTA & SERVICE AREAS */}

        <section className="py-12 sm:py-16 bg-white border-y border-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                Serving All of Metro Detroit
              </h2>
              <p className="text-slate-700">Wayne County • Oakland County • Macomb County</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {serviceAreas.map((city) => {
                const slug = city.toLowerCase().replace(/\s+/g, "-");
                return (
                  <a
                    key={city}
                    href={`/${slug}`}
                    className="bg-white px-3 py-1 rounded-full text-sm shadow-sm hover:bg-blue-100 hover:text-blue-700 transition"
                    aria-label={`Bathroom remodeling in ${city}`}
                  >
                    {city}
                  </a>
                );
              })}
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-slate-600">Don&apos;t see your city? <a href="tel:+12483468926" className="text-blue-600 font-semibold hover:underline" onClick={onCallClick}>Call us</a> - we likely serve your area!</p>
            </div>
          </div>
        </section>


        {/* FOOTER */}
        {/* <footer className="py-8 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 text-center">
            <p className="text-slate-600">© {new Date().getFullYear()} Stone Works Remodeling — Bathroom remodeling Metro Detroit • Licensed & insured</p>
          </div>
        </footer> */}
      </main>
    </div>
  );
}
