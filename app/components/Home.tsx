"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Check, Phone, ArrowRight, Clock, ChevronRight, Shield, Award, ThumbsUp, Play, Users, Hammer, Palette, Ruler, Zap, Heart } from "lucide-react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { beforeAfterVideos } from "./VideoCard"; // Import VideoCard and beforeAfterVideos
import VideoCard from "./VideoCard";

// Lazy-load gallery images for performance
const DynamicGalleryImage = dynamic(() => import("next/image"), { ssr: false });

// SEO Metadata Component
function SEOMetadata() {
  return (
    <>
      <title>Stone Works Remodeling | Premium Bathroom Remodeling in Metro Detroit, MI</title>
      <meta
        name="description"
        content="Stone Works Remodeling specializes in premium bathroom remodeling, shower conversions, walk-in tubs, and custom designs in Metro Detroit, MI. Free quotes and financing available!"
      />
      <meta
        name="keywords"
        content="bathroom remodeling Metro Detroit, bathroom renovation Michigan, shower conversion, walk-in tubs Metro Detroit, custom  bathroom design, premium bathroom remodel"
      />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Stone Works Remodeling" />
      <meta name="geo.region" content="US-MN" />
      <meta name="geo.placename" content="Metro Detroit, Michigan" />
      <meta name="geo.position" content="44.083996;-93.225996" />
      <meta name="ICBM" content="44.083996, -93.225996" />

      {/* Open Graph Tags */}
      <meta property="og:title" content="Stone Works Remodeling | Premium Bathroom Remodeling in Metro Detroit, MI" />
      <meta
        property="og:description"
        content="Transform your bathroom with Stone Works Remodeling’s expert stone-based designs, shower conversions, and walk-in tubs in Metro Detroit, MI. Free quotes and financing available."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://stoneworkremodeling.com" />
      <meta
        property="og:image"
        content="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/mHSA0TExdMsQjnyxRC3Wq.webp"
      />
      <meta property="og:image:alt" content="Modern bathroom remodel by Stone Works Remodeling in Metro Detroit, MI" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Stone Works Remodeling" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Stone Works Remodeling | Premium Stone Bathroom Remodeling in Metro Detroit, MI" />
      <meta
        name="twitter:description"
        content="Transform your bathroom with Stone Works Remodeling’s expert stone-based designs in Metro Detroit, MI."
      />
      <meta
        name="twitter:image"
        content="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/mHSA0TExdMsQjnyxRC3Wq.webp"
      />
      <meta name="twitter:image:alt" content="Modern stone bathroom remodel by Stone Works Remodeling in Metro Detroit, MI" />

      <link rel="canonical" href="https://stoneworkremodeling.com" />
      <link rel="icon" href="/favicon.ico" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Stone Works Remodeling",
              "image": "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/mHSA0TExdMsQjnyxRC3Wq.webp",
              "url": "https://stoneworkremodeling.com",
              "telephone": "+12483468926",
              "email": "info@stoneworkremodeling.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4671 Sugar Camp Road",
                "addressLocality": "Metro Detroit",
                "addressRegion": "MN",
                "postalCode": "55060",
                "addressCountry": "US",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.083996,
                "longitude": -93.225996,
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "00:00",
                },
              ],
              "areaServed": [
                { "@type": "City", "name": "Metro Detroit", "sameAs": "https://en.wikipedia.org/wiki/Metro Detroit,_Michigan" },
                { "@type": "City", "name": "Rochester", "sameAs": "https://en.wikipedia.org/wiki/Rochester,_Michigan" },
                { "@type": "City", "name": "Faribault", "sameAs": "https://en.wikipedia.org/wiki/Faribault,_Michigan" },
              ],
              "sameAs": [
                "https://www.facebook.com/stoneworkremodeling",
                "https://www.instagram.com/stoneworkremodeling",
                "https://www.linkedin.com/company/stoneworkremodeling",
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "500",
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Complete Bathroom Remodeling",
                  "description": "Comprehensive bathroom remodeling with custom designs in Metro Detroit, MI",
                  "url": "https://stoneworkremodeling.com/services/bathroom-remodeling",
                  "image": "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/mHSA0TExdMsQjnyxRC3Wq.webp",
                },
                {
                  "@type": "Offer",
                  "name": "Shower Conversion",
                  "description": "Tub-to-shower conversions with finishes in Metro Detroit, MI",
                  "url": "https://stoneworkremodeling.com/services/shower-conversion",
                  "image": "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/2gOE7M5Mw4F9ecfLC92pQ.webp",
                },
                {
                  "@type": "Offer",
                  "name": "Walk-in Tubs",
                  "description": "Accessible walk-in tubs with safety features in Metro Detroit, MI",
                  "url": "https://stoneworkremodeling.com/services/walk-in-tubs",
                  "image": "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/w6HJzxSeslcbuk0sJgPQc.webp",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does a typical bathroom remodel take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most standard bathroom remodels are completed within 5-7 business days. Larger projects or custom stone designs may take 2-3 weeks.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Do you offer financing options?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We offer flexible financing options including 0% interest for 12 months for qualified buyers in Metro Detroit, MI.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Are your products and installations covered by warranty?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "All products come with manufacturer warranties, and we provide a limited lifetime warranty on materials and workmanship.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Do I need to obtain permits for my bathroom remodel?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our team handles all permitting processes to ensure compliance with Metro Detroit, MI building codes.",
                  },
                },
              ],
            },
          ]),
        }}
      />
    </>
  );
}

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState("before-after");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Auto-slide for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Updated testimonials with local focus
  const testimonials = [
    {
      id: 1,
      name: "Cari Zupko.",
      location: "Livonia, MI",
      quote:
        "The guys are great and hard workers. They were always on time and worked diligently. I love my new bathrooms. Would definitely recommend them!",
      rating: 5,
      image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user1.webp",
      projectType: "Multiple Bathroom Remodel",
      alt: "Cari Zupko., satisfied Stone Works Remodeling customer in Livonia",
    },
    {
      id: 2,
      name: "Kelly Stanford.",
      location: "Rochester, MI",
      quote:
        "We needed a walk-in tub for accessibility, and Stone Works Remodeling delivered a perfect solution with professional installation. Highly recommend!",
      rating: 5,
      image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user2.webp",
      projectType: "Walk-in Tub Installation",
      alt: "Michael T., Stone Works Remodeling walk-in tub client in Rochester, MI",
    },
    {
      id: 3,
      name: "Amit Somani",
      location: "Faribault, MI",
      quote:
        "Val recently completed our master bathroom remodel, and we couldn’t be more pleased with the results...",
      rating: 5,
      image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user4.webp",
      projectType: "Tub-to-Shower Conversion",
      alt: "Rachel K., Stone Works Remodeling shower conversion client in Faribault, MI",
    },
  ];

  // Customer images
  interface CustomerImage {
    src: string;
    alt: string;
    role: string;
    blurDataURL: string;
  }

  const customerImages: CustomerImage[] = [
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user1.webp",
      alt: "Satisfied Stone Works Remodeling customer in Metro Detroit, MI",
      role: "Satisfied homeowner",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user2.webp",
      alt: "Recent Stone Works Remodeling client for bathroom remodel",
      role: "Recent client",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user3.webp",
      alt: "Stone Works Remodeling customer for shower conversion",
      role: "Shower conversion client",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user4.webp",
      alt: "Stone Works Remodeling homeowner in Michigan",
      role: "Homeowner",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user5.webp",
      alt: "Stone Works Remodeling walk-in tub installation client",
      role: "Walk-in tub client",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
  ];

  // Gallery images with optimized metadata
  interface GalleryImage {
    src: string;
    alt: string;
    width: number;
    height: number;
    blurDataURL: string;
  }

  const recentProjects: GalleryImage[] = [
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/NctOfmDbqGoQGM2Qm9a8C.webp",
      alt: "Luxury  bathroom remodel in Metro Detroit, MI by Stone Works Remodeling",
      width: 500,
      height: 300,
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/i5a_set3C7bnEDegPuZld.webp",
      alt: "Modern  shower conversion in Metro Detroit, MI by Stone Works Remodeling",
      width: 500,
      height: 300,
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/krY1iLp90R9l3kcrrUhu-.webp",
      alt: "Accessible walk-in tub installation in Metro Detroit, MI by Stone Works Remodeling",
      width: 500,
      height: 300,
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
  ];

  // FAQs with local context
  const faqs = [
    {
      question: "How long does a bathroom remodel take?",
      answer:
        "Most standard  bathroom remodels are completed within 10 business days. Larger projects or custom designs may take 2-3 weeks. We provide a specific timeline during your free Metro Detroit consultation.",
    },
    {
      question: "Do you offer financing options for bathroom remodeling?",
      answer:
        "Yes! We offer flexible financing options, including 0% interest for 12 months for qualified buyers in Metro Detroit, MI, and surrounding areas",
    },
    {
      question: "Are your  products and installations covered by warranty?",
      answer:
        "All Bathroom products come with manufacturer warranties, and we provide warranty on workmanship for projects in Metro Detroit, MI.",
    },
  ];

  // Stats for new section
  const stats = [
    { label: "Projects Completed", value: "500+", icon: Users },
    { label: "Years Experience", value: "10+", icon: Award },
    { label: "Satisfaction Rate", value: "100%", icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SEOMetadata />

      {/* Floating CTA - Mobile Optimized */}
      <motion.div
        className="fixed bottom-4 right-4 left-4 md:left-auto md:right-6 z-50 md:hidden"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Link
          href="/contact"
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 w-full"
        >
          <Phone className="h-5 w-5" />
          <span className="font-semibold">Free Quote</span>
        </Link>
      </motion.div>

      <motion.div
        className="fixed bottom-6 right-6 z-50 hidden md:block"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Link
          href="/contact"
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
        >
          <Phone className="h-5 w-5" />
          <span className="font-semibold">Free Quote</span>
        </Link>
      </motion.div>

      {/* Main Content */}
      <main>
        {/* Hero Section - Enhanced with Parallax and Better Animations, Mobile Responsive */}
        <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-12 sm:py-16 md:py-20 lg:py-32 z-10 overflow-hidden">
          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([
                {
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  "name": "Stone Works Remodeling",
                  "url": "https://stoneworkremodeling.com",
                  "logo": "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/logo.webp",
                  "telephone": "+12483468926",
                  "email": "info@stoneworkremodeling.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "4671 Sugar Camp Road",
                    "addressLocality": "Metro Detroit",
                    "addressRegion": "MN",
                    "postalCode": "55060",
                    "addressCountry": "US",
                  },
                  "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "reviewCount": "500",
                  },
                },
                {
                  "@context": "https://schema.org",
                  "@type": "Review",
                  "itemReviewed": {
                    "@type": "LocalBusiness",
                    "name": "Stone Works Remodeling",
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Anonymous",
                  },
                  "reviewBody": "Over 500 satisfied customers for bathroom remodeling in Metro Detroit, MI.",
                },
              ]),
            }}
          />

          {/* Enhanced Background with Particles */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]"></div>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-300 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Enhanced Text Content - Mobile Optimized */}
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
                  Limited Time Offer
                </motion.span>
                <h1
                  id="hero-heading"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                >
                  Transform Your Bathroom <br className="hidden sm:block" />
                  <span className="block">Into a Luxurious Retreat</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Discover expert bathroom remodeling in Metro Detroit, MI. Tailored designs, premium
                  craftsmanship, and a satisfaction guarantee for your dream bathroom.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center justify-center group transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto"
                    aria-label="Get a free quote for  bathroom remodeling in Metro Detroit, MI"
                  >
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Link
                    href="tel:+12483468926"
                    className="border-2 border-blue-200 text-blue-200 hover:bg-blue-800/20 hover:border-blue-100 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 flex items-center justify-center transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto"
                    aria-label="Call Stone Works Remodeling at (248) 346-8926 for bathroom remodeling"
                  >
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    +1(248) 346-8926
                  </Link>
                </div>

                <motion.div
                  className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6"
                  aria-label="Customer testimonials for Stone Works Remodeling"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="flex -space-x-2 sm:-space-x-3 relative">
                    {customerImages.map((image, index) => (
                      <motion.div
                        key={image.src}
                        className="w-10 h-10 sm:w-16 sm:h-16 rounded-full border-3 border-white/80 bg-blue-300/50 overflow-hidden shadow-lg"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={64}
                          height={64}
                          className="object-cover"
                          sizes="64px"
                          placeholder="blur"
                          blurDataURL={image.blurDataURL}
                          loading="lazy"
                          quality={80}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-1 sm:mb-2">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star
                          key={n}
                          className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-400 fill-yellow-400 animate-pulse"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="text-blue-100 text-sm sm:text-base font-bold">
                      Over 500+ Satisfied Customers in Metro Detroit, MI
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Enhanced Promotional Offer Card - Mobile Optimized */}
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
                    ~ Limited Time Offer ~
                  </p>
                </div>
                <div className="text-center space-y-3 sm:space-y-4">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-2">$2,500 OFF</h3>
                    <p className="text-lg sm:text-xl font-semibold text-white">Your Full Bathroom Remodel plus a 5 year warranty! </p>
                  </motion.div>
                  <div className="bg-gray-100/80 rounded-xl p-2 sm:p-3">
                    <p className="text-xs sm:text-sm text-gray-600 font-medium text-center mb-0">— OR —</p>
                  </div>
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-2">$1,000 OFF</h3>
                    <p className="text-lg sm:text-xl font-semibold text-white">Your Tub or Shower Replacement</p>
                  </motion.div>
                  <motion.p
                    className="text-s  font-bold bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-xl"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    Offer stands for the next 5 people that qualify!
                  </motion.p>
                  <p className="text-xs text-gray-500 italic text-center">*Restrictions apply</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 sm:py-4 rounded-xl text-center font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 mt-6 shadow-lg text-sm sm:text-base"
                  >
                    Claim Your Offer Now <ArrowRight className="inline ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </motion.div>
                <p className="text-xs text-gray-500 text-center mt-3">Valid in Metro Detroit, MI area</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* New Stats Section - Mobile Responsive */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-50 to-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
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
                    <p className="text-slate-700 font-medium text-sm sm:text-base">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enhanced Trust Indicators - Mobile Responsive */}
        <section className="py-8 sm:py-12 bg-white border-b border-slate-100" aria-label="Trust indicators">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-16">
              <motion.div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 w-full sm:w-auto" whileHover={{ scale: 1.05 }}>
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
                <span className="text-slate-800 font-semibold text-sm sm:text-base">Fully Insured & Certified</span>
              </motion.div>
              <motion.div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 w-full sm:w-auto" whileHover={{ scale: 1.05 }}>
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
                <span className="text-slate-800 font-semibold text-sm sm:text-base">15+ Years Experience</span>
              </motion.div>
              <motion.div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 w-full sm:w-auto" whileHover={{ scale: 1.05 }}>
                <ThumbsUp className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
                <span className="text-slate-800 font-semibold text-sm sm:text-base">100% Satisfaction</span>
              </motion.div>
              <motion.div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 w-full sm:w-auto" whileHover={{ scale: 1.05 }}>
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
                <span className="text-slate-800 font-semibold text-sm sm:text-base">On-Time Guarantee</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Services Section with Better Cards - Mobile Responsive */}
        <section id="services" className="py-16 sm:py-20 md:py-24 bg-slate-50" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                Premium Bathroom Services in Metro Detroit
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                From complete bathroom remodels to walk-in tubs, our expert team delivers exceptional results with timeless elegance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  title: "Complete Bathroom Remodeling",
                  desc: "Transform your bathroom with our comprehensive remodeling services, featuring custom tiles and fixtures.",
                  icon: Palette,
                  image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/recent/pic7.jpeg",
                  alt: "Complete bathroom remodeling by Stone Works Remodeling in Metro Detroit, MI",
                  link: "/services/bathroom-remodeling",
                },
                {
                  title: "Free-Standing Tub",
                  desc: "Upgrade your bathtub with a modern replacement, enhancing both style and functionality.",
                  icon: Hammer,
                  image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/recent/pic9.jpeg",
                  alt: "Free-Standing Tub by Stone Works Remodeling in Metro Detroit, MI",
                  link: "/services/tub-replacement",
                },
                {
                  title: "Walk-in Shower",
                  desc: "Convert your tub into a spacious shower, with custom designs and safety features.",
                  icon: Zap,
                  image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/recent/pic8.jpeg",
                  alt: "Walk-in Shower by Stone Works Remodeling in Metro Detroit, MI",
                  link: "/services/shower-conversion",
                },
                {
                  title: "Shower-Tub Combo",
                  desc: "Enhance bathroom safety with premium shower-tub combos, designed for comfort and accessibility.",
                  icon: Ruler,
                  image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/recent/pic4.jpeg",
                  alt: "Accessible Shower-tub combo by Stone Works Remodeling in Metro Detroit, MI",
                  link: "/services/walk-in-tubs",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg=="
                      quality={85}
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
                      <h3 className="text-white text-lg sm:text-xl font-bold">{service.title}</h3>
                    </motion.div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-slate-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.desc}</p>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {[
                        "Custom design services",
                        "Premium fixtures",
                        "Complete project management",
                      ].slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-center text-slate-700 group-hover:text-blue-600 transition-colors text-sm">
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.link}
                      className="text-blue-600 hover:text-blue-800 font-bold flex items-center group/link transition-colors text-sm sm:text-base"
                    >
                      Learn More
                      <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div className="mt-12 sm:mt-16 text-center" whileInView={{ scale: 1 }} initial={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base"
              >
                Explore All Services
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Process Section with Icons - Mobile Responsive */}
        <section className="py-16 sm:py-20 md:py-24 bg-white" aria-labelledby="process-heading">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 id="process-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Our Seamless 4-Step Remodeling Process
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                We make your bathroom transformation smooth, stress-free, and beautifully executed.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
              {[
                { step: 1, title: "Free Consultation", desc: "Schedule a free in-home consultation to discuss your bathroom vision and needs.", icon: Users },
                { step: 2, title: "Personalized Design", desc: "Our designers create a custom bathroom plan with stunning 3D renderings for your home.", icon: Palette },
                { step: 3, title: "Expert Installation", desc: "Our licensed professionals install your bathroom with precision and care.", icon: Hammer },
                { step: 4, title: "Final Walkthrough", desc: "We ensure your new bathroom meets your expectations with a detailed walkthrough.", icon: Check },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 sm:p-8 relative z-10 h-full border border-slate-200 hover:border-blue-200 transition-colors">
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
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base"
              >
                Start Your Project Today
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Gallery Section - Mobile Responsive */}
        <section className="py-16 sm:py-20 md:py-24 bg-slate-50" aria-labelledby="gallery-heading">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-8 sm:mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 id="gallery-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Our Stunning Bathroom Transformations
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Explore real bathroom projects showcasing our craftsmanship and attention to detail.
              </p>
            </motion.div>

            <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto pb-2">
              <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-xl p-1 shadow-lg min-w-max">
                <button
                  className={`px-4 sm:px-8 py-3 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeTab === "before-after"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-700 hover:text-gray-900 hover:bg-slate-100"
                    }`}
                  onClick={() => setActiveTab("before-after")}
                >
                  Before & After
                </button>
                <button
                  className={`px-4 sm:px-8 py-3 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeTab === "recent-projects"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-700 hover:text-gray-900 hover:bg-slate-100"
                    }`}
                  onClick={() => setActiveTab("recent-projects")}
                >
                  Recent Projects
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {activeTab === "before-after" ? (
                  beforeAfterVideos.map((video, index) => (
                    <VideoCard
                      key={index}
                      videoId={video.videoId}
                      title={video.title}
                      description={video.description}
                      thumbnail={video.thumbnail}
                      duration={video.duration}
                      uploadDate={video.uploadDate}
                      alt={video.alt}
                    />
                  ))
                ) : (
                  recentProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative overflow-hidden">
                        <DynamicGalleryImage
                          src={project.src}
                          alt={project.alt}
                          width={project.width}
                          height={project.height}
                          className="w-full h-48 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          placeholder="blur"
                          blurDataURL={project.blurDataURL}
                          quality={85}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 sm:h-12 sm:w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="p-4 sm:p-6">
                        <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{project.alt.split(" in ")[0]}</h3>
                        <p className="text-slate-700 text-xs sm:text-sm">{project.alt.split(" by ")[0]}</p>
                      </div>
                    </motion.div>
                  ))
                )}
              </motion.div>
            </AnimatePresence>

            <motion.div className="mt-12 sm:mt-16 text-center" whileInView={{ scale: 1 }} initial={{ scale: 0.95 }}>
              <Link
                href="/gallery"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base"
              >
                View Full Gallery
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Testimonials with Slider - Mobile Responsive */}
        <section className="py-16 sm:py-20 md:py-24 bg-white" aria-labelledby="testimonials-heading">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 id="testimonials-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                What Our Metro Detroit Customers Say
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Hear from homeowners who transformed their bathrooms with Stone Works Remodeling.
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  role="article"
                  aria-label={`Testimonial from ${testimonials[activeTestimonial].name}`}
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
                    <Image
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].alt}
                      width={80}
                      height={80}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mr-0 sm:mr-6 mb-4 sm:mb-0 object-cover shadow-lg border-4 border-white"
                      sizes="80px"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg=="
                      quality={80}
                      loading="lazy"
                    />
                    <div className="text-center sm:text-left">
                      <h3 className="font-bold text-gray-900 text-lg sm:text-xl">{testimonials[activeTestimonial].name}</h3>
                      <p className="text-sm text-slate-600">{testimonials[activeTestimonial].location}</p>
                    </div>
                  </div>
                  <p className="text-slate-800 text-base sm:text-lg italic mb-4 sm:mb-6 leading-relaxed text-center sm:text-left">&ldquo;{testimonials[activeTestimonial].quote}&ldquo;</p>
                  <div className="flex items-center justify-center sm:justify-start mb-4 sm:mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 italic font-medium text-center sm:text-left">{testimonials[activeTestimonial].projectType}</p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3" role="navigation" aria-label="Testimonial navigation">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${activeTestimonial === index ? "bg-blue-600 scale-125" : "bg-slate-300 hover:bg-slate-400"
                      }`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <motion.div className="mt-12 sm:mt-16 text-center" whileInView={{ scale: 1 }} initial={{ scale: 0.95 }}>
              <Link
                href="/testimonials"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base"
              >
                Read More Reviews
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Enhanced FAQ Section - Mobile Responsive */}
        <section className="py-16 sm:py-20 md:py-24 bg-slate-50" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 id="faq-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Bathroom Remodeling FAQs
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Answers to common questions about bathroom remodeling in Metro Detroit, MI.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: "auto" }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                  <button
                    className="w-full text-left flex justify-between items-center py-5 sm:py-6 px-6 sm:px-8 hover:bg-slate-50 transition-colors"
                    onClick={() => setActiveFaq(activeFaq === index ? null : index as number)}
                    aria-expanded={activeFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center flex-1">
                      <ChevronRight
                        className={`h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mr-3 transform transition-transform ${activeFaq === index ? "rotate-90" : ""
                          }`}
                      />
                      {faq.question}
                    </h3>
                  </button>
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 sm:px-8 pb-6"
                      >
                        <p className="text-slate-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div className="mt-12 sm:mt-16 text-center" whileInView={{ scale: 1 }} initial={{ scale: 0.95 }}>
              <Link
                href="/faq"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base"
              >
                View All FAQs
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section - Mobile Responsive */}
        <section
          className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900"
          aria-labelledby="cta-heading"
        >
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
                Ready to Transform Your Bathroom?
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                Schedule your free consultation today and start your journey to a luxurious bathroom with Stone Works Remodeling. Limited spots available!
              </p>
            </motion.div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-4 sm:px-10 sm:py-5 rounded-xl text-base sm:text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center justify-center group transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="tel:+12483468926"
                className="border-2 border-white text-white hover:bg-white/10 px-6 py-4 sm:px-10 sm:py-5 rounded-xl text-base sm:text-xl font-bold transition-all duration-300 flex items-center justify-center transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto"
              >
                <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Call Now: (248) 346-8926
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}