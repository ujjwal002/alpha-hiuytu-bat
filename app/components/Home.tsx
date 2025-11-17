"use client";
import { useState, useEffect } from "react";
import { Star, Check, Phone, ArrowRight, Clock, ChevronRight, Shield, Award, ThumbsUp, Play, Users, Hammer, Palette, Ruler, Zap, Heart, MapPin, Calendar, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { event } from '../lib/gtag';



// SEO Metadata Component - ENHANCED
function SEOMetadata() {
  return (
    <>
      {/* Primary Metadata - ENHANCED */}
      <title>Bathroom Remodeling Metro Detroit MI | Stone Works Remodeling | Free Quote</title>
      <meta

        name="description"
        content="#1 Bathroom Remodeling Metro Detroit MI ⭐ Expert shower conversions, walk-in tubs & complete bathroom renovations. Licensed, insured, 500+ 5-star reviews. Call (248) 346-8926 for FREE quote!"
      />
      <meta
        name="keywords"
        content="bathroom remodeling Metro Detroit, bathroom renovation Detroit MI, shower conversion Metro Detroit, walk-in tubs Detroit, bathroom remodel Rochester MI, bathroom contractor Livonia MI, tub to shower conversion Detroit, bathroom design Metro Detroit, accessible bathroom remodeling Michigan, luxury bathroom remodel Detroit"
      />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Stone Works Remodeling" />
      <meta httpEquiv="content-language" content="en-US" />

      {/* Enhanced Geo Metadata */}
      <meta name="geo.region" content="US-MI" />
      <meta name="geo.placename" content="Metro Detroit, Michigan" />
      <meta name="geo.position" content="42.3314;-83.0458" />
      <meta name="ICBM" content="42.3314, -83.0458" />
      <meta name="geo.country" content="US" />
      <meta name="coverage" content="Metro Detroit, Wayne County, Oakland County, Macomb County, Michigan" />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="en-us" href="https://stoneworkremodeling.com/" />

      {/* Open Graph / Social Metadata - ENHANCED */}
      <meta property="og:title" content="Best Bathroom Remodeling Metro Detroit MI | Stone Works Remodeling" />
      <meta
        property="og:description"
        content="Transform your bathroom with Stone Works Remodeling. Expert bathroom remodeling, shower conversions & walk-in tubs in Metro Detroit. 500+ satisfied customers. Free quotes!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://stoneworkremodeling.com" />
      <meta
        property="og:image"
        content="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/mHSA0TExdMsQjnyxRC3Wq.webp"
      />
      <meta property="og:image:alt" content="Modern luxury bathroom remodel by Stone Works Remodeling in Metro Detroit, Michigan" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Stone Works Remodeling" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Bathroom Remodeling Metro Detroit MI | Stone Works Remodeling" />
      <meta
        name="twitter:description"
        content="Expert bathroom remodeling in Metro Detroit. Shower conversions, walk-in tubs, complete renovations. 500+ 5-star reviews. Call (248) 346-8926!"
      />
      <meta
        name="twitter:image"
        content="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/mHSA0TExdMsQjnyxRC3Wq.webp"
      />

      {/* Canonical & Favicon */}
      <link rel="canonical" href="https://stoneworkremodeling.com" />
      <link rel="icon" href="/favicon.ico" />

      {/* Additional SEO Tags */}
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />

      {/* Enhanced Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Stone Works Remodeling",
              "alternateName": "Stone Works Bathroom Remodeling Metro Detroit",
              "description": "Expert bathroom remodeling services in Metro Detroit, MI. Specializing in complete bathroom renovations, shower conversions, walk-in tubs, and accessible bathroom solutions.",
              "image": "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/mHSA0TExdMsQjnyxRC3Wq.webp",
              "logo": "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/logo.webp",
              "url": "https://stoneworkremodeling.com",
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
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 42.3314,
                "longitude": -83.0458
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ],
              "areaServed": [
                { "@type": "City", "name": "Detroit", "sameAs": "https://en.wikipedia.org/wiki/Detroit" },
                { "@type": "City", "name": "Rochester", "sameAs": "https://en.wikipedia.org/wiki/Rochester,_Michigan" },
                { "@type": "City", "name": "Livonia", "sameAs": "https://en.wikipedia.org/wiki/Livonia,_Michigan" },
                { "@type": "City", "name": "Troy", "sameAs": "https://en.wikipedia.org/wiki/Troy,_Michigan" },
                { "@type": "City", "name": "Sterling Heights" },
                { "@type": "AdministrativeArea", "name": "Wayne County, Michigan" },
                { "@type": "AdministrativeArea", "name": "Oakland County, Michigan" },
                { "@type": "AdministrativeArea", "name": "Macomb County, Michigan" }
              ],
              "sameAs": [
                "https://www.facebook.com/stoneworkremodeling",
                "https://www.instagram.com/stoneworkremodeling",
                "https://www.linkedin.com/company/stoneworkremodeling"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1",
                "reviewCount": "500"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Bathroom Remodeling Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Complete Bathroom Remodeling",
                      "description": "Full-service bathroom remodeling with custom designs, premium fixtures, and professional installation in Metro Detroit, MI",
                      "provider": {
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Stone Works Remodeling"
                      },
                      "areaServed": "Metro Detroit, Michigan",
                      "serviceType": "Bathroom Remodeling"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tub to Shower Conversion",
                      "description": "Expert tub-to-shower conversions with custom tile work and modern fixtures",
                      "provider": {
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Stone Works Remodeling"
                      },
                      "areaServed": "Metro Detroit, Michigan",
                      "serviceType": "Shower Conversion"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Walk-in Tub Installation",
                      "description": "Accessible walk-in tub installation with safety features for seniors and individuals with mobility needs",
                      "provider": {
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Stone Works Remodeling"
                      },
                      "areaServed": "Metro Detroit, Michigan",
                      "serviceType": "Walk-in Tub Installation"
                    }
                  }
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does a bathroom remodel take in Metro Detroit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most standard bathroom remodels in Metro Detroit are completed within 5-10 business days. Larger projects or custom designs may take 2-3 weeks. We provide a specific timeline during your free consultation and work efficiently to minimize disruption to your daily routine."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer financing for bathroom remodeling in Detroit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Stone Works Remodeling offers flexible financing options including 0% interest for 12 months for qualified buyers in Metro Detroit, MI. We work with multiple lenders to help you find the best financing solution for your bathroom renovation project."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What areas in Metro Detroit do you serve?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Stone Works Remodeling serves all of Metro Detroit including Wayne County, Oakland County, and Macomb County. We service Detroit, Rochester, Livonia, Troy, Sterling Heights, Royal Oak, Birmingham, Bloomfield Hills, and surrounding communities."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are you licensed and insured in Michigan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Stone Works Remodeling is fully licensed and insured in the State of Michigan. All our contractors are certified professionals with extensive experience in bathroom remodeling. We handle all permits and ensure compliance with Michigan building codes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the cost of bathroom remodeling in Metro Detroit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bathroom remodeling costs in Metro Detroit typically range from $8,000 to $25,000 depending on the scope, materials, and fixtures selected. We offer free in-home consultations with detailed quotes. Limited time offer: $2,500 off full bathroom remodels or $1,000 off tub/shower replacements."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://stoneworkremodeling.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://stoneworkremodeling.com/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Bathroom Remodeling",
                  "item": "https://stoneworkremodeling.com/services/bathroom-remodeling"
                }
              ]
            }
          ])
        }}
      />
    </>
  );
}

export { SEOMetadata };

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  // const [activeTab, setActiveTab] = useState("before-after");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  const phone = '(248) 346-8926';

  const onCallClick = () => {
    event({ action: 'phone_click', category: 'engagement', label: phone });
  };

  // Updated testimonials with CONSISTENT locations
  const testimonials = [
    {
      id: 1,
      name: "Cari Z.",
      location: "Livonia, MI",
      quote:
        "The guys are great and hard workers. They were always on time and worked diligently. I love my new bathrooms. Would definitely recommend them!",
      rating: 5,
      image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user1.webp",
      projectType: "Multiple Bathroom Remodel",
      alt: "Satisfied bathroom remodeling customer in Livonia, Metro Detroit",
    },
    {
      id: 2,
      name: "Kelly S.",
      location: "Rochester, MI",
      quote:
        "We needed a walk-in tub for accessibility, and Stone Works Remodeling delivered a perfect solution with professional installation. Highly recommend!",
      rating: 5,
      image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user2.webp",
      projectType: "Walk-in Tub Installation",
      alt: "Walk-in tub installation customer in Rochester, Metro Detroit",
    },
    {
      id: 3,
      name: "Amit S.",
      location: "Troy, MI",
      quote:
        "Val recently completed our master bathroom remodel, and we couldn't be more pleased with the results. Professional, on-time, and beautiful work!",
      rating: 5,
      image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user4.webp",
      projectType: "Tub-to-Shower Conversion",
      alt: "Shower conversion customer in Troy, Metro Detroit",
    },
  ];

  const customerImages = [
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user1.webp",
      alt: "Satisfied bathroom remodeling customer in Metro Detroit, MI",
      role: "Satisfied homeowner",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user2.webp",
      alt: "Recent bathroom remodel client in Metro Detroit",
      role: "Recent client",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user3.webp",
      alt: "Shower conversion customer in Metro Detroit",
      role: "Shower conversion client",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user4.webp",
      alt: "Walk-in tub installation homeowner in Metro Detroit",
      role: "Homeowner",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user5.webp",
      alt: "Accessible bathroom remodeling client in Metro Detroit",
      role: "Walk-in tub client",
    },
  ];

  // Enhanced gallery with LOCAL keywords
  const recentProjects = [
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/NctOfmDbqGoQGM2Qm9a8C.webp",
      alt: "Luxury bathroom remodeling project in Livonia, Metro Detroit MI by Stone Works",
      title: "Complete Bathroom Renovation - Livonia",
      width: 500,
      height: 300,
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/i5a_set3C7bnEDegPuZld.webp",
      alt: "Modern walk-in shower conversion in Rochester, Metro Detroit MI",
      title: "Walk-in Shower Conversion - Rochester",
      width: 500,
      height: 300,
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/krY1iLp90R9l3kcrrUhu-.webp",
      alt: "Accessible walk-in tub installation in Troy, Metro Detroit MI",
      title: "Walk-in Tub Installation - Troy",
      width: 500,
      height: 300,
    },
  ];

  // ENHANCED FAQs with local context
  const faqs = [
    {
      question: "How long does a bathroom remodel take in Metro Detroit?",
      answer:
        "Most standard bathroom remodels in Metro Detroit are completed within 5-10 business days. Larger projects or custom designs may take 2-3 weeks. We provide a specific timeline during your free in-home consultation and work efficiently to minimize disruption to your daily routine.",
    },
    {
      question: "Do you offer financing for bathroom remodeling?",
      answer:
        "Yes! We offer flexible financing options, including 0% interest for 12 months for qualified buyers in Metro Detroit, Wayne County, Oakland County, and Macomb County. We work with multiple lenders to help you find the best financing solution for your bathroom renovation.",
    },
    {
      question: "What areas in Metro Detroit do you serve?",
      answer:
        "Stone Works Remodeling proudly serves all of Metro Detroit including Wayne County, Oakland County, and Macomb County. We service Detroit, Rochester, Livonia, Troy, Sterling Heights, Royal Oak, Birmingham, Bloomfield Hills, Farmington Hills, Warren, and all surrounding communities.",
    },
    {
      question: "Are you licensed and insured in Michigan?",
      answer:
        "Yes, Stone Works Remodeling is fully licensed and insured in the State of Michigan. All our contractors are certified professionals with extensive experience in bathroom remodeling. We handle all permits and ensure compliance with Michigan building codes.",
    },
    {
      question: "What is included in your bathroom remodeling warranty?",
      answer:
        "All bathroom products come with manufacturer warranties, and we provide a 5-year workmanship warranty on installation for projects in Metro Detroit, MI. We stand behind our work and are committed to your complete satisfaction.",
    },
  ];

  // Stats for section
  const stats = [
    { label: "Projects Completed", value: "150+", icon: Users },
    { label: "Years Experience", value: "10+", icon: Award },
    { label: "Customer Satisfaction", value: "100%", icon: Heart },
    { label: "Service Areas", value: "3 Counties", icon: MapPin },
  ];

  // Service Areas for new section
  const serviceAreas = [
    "Northville", "Rochester", "Livonia", "Troy", "Sterling Heights",
    "Royal Oak", "Birmingham", "Bloomfield Hills", "Farmington Hills",
    "Warren", "Dearborn", "Canton", "Novi", "Southfield", "Westland"
  ];

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
          href="tel:+12483468926"
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 w-full"
        >
          <Phone className="h-5 w-5" />
          <span className="font-semibold">Call for Free Quote</span>
        </a>
      </motion.div>

      <motion.div
        className="fixed bottom-6 right-6 z-50 hidden md:block"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <a
          href="tel:+12483468926"
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
          onClick={onCallClick}
        >
          <Phone className="h-5 w-5" />
          <span className="font-semibold">Free Quote</span>
        </a>
      </motion.div>

      {/* Main Content */}
      <main>
        {/* ENHANCED Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-12 sm:py-16 md:py-20 lg:py-32 z-10 overflow-hidden">
          {/* Enhanced Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Bathroom Remodeling Metro Detroit MI | Stone Works Remodeling",
                "description": "Expert bathroom remodeling services in Metro Detroit. Complete renovations, shower conversions, walk-in tubs. Licensed & insured. Call (248) 346-8926 for free quote!",
                "url": "https://stoneworkremodeling.com",
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
              }),
            }}
          />

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
                  {/* <span className="block">Services</span> */}
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Upgrade your bathroom with a team that actually cares about the details. Stone Works Remodeling delivers premium craftsmanship, custom designs, and a smooth, stress-free experience from start to finish. Fully licensed and led by an engineer. We serve Wayne, Oakland, and Macomb Counties — backed by warranties. Check out our 5 star reviews!
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
                  <a
                    href="tel:+12483468926"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-s font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center justify-center group transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto"
                    onClick={onCallClick}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    (248) 346-8926
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform" />
                  </a>
                  <a
                    href="#contact-form"
                    className="border-2 border-blue-200 text-blue-200 hover:bg-blue-800/20 hover:border-blue-100 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 flex items-center justify-center transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto"
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
                  {/* <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">$1,000 OFF</h3>
                    <p className="text-lg sm:text-xl font-semibold text-blue-100">Tub or Shower Replacement</p>
                  </motion.div> */}
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

        {/* ENHANCED Stats Section with LOCAL focus */}
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

        {/* NEW: Service Areas Section for LOCAL SEO */}
        <section className="py-12 sm:py-16 bg-white border-y border-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                Serving All of Metro Detroit
              </h2>
              <p className="text-slate-700">Wayne County • Oakland County • Macomb County</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
              {serviceAreas.map((area, index) => (
                <motion.span
                  key={area}
                  className="bg-blue-50 text-blue-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {area}
                </motion.span>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-slate-600">Don&apos;t see your city? <a href="tel:+12483468926" className="text-blue-600 font-semibold hover:underline" onClick={onCallClick}>Call us</a> - we likely serve your area!</p>
            </div>
          </div>
        </section>

        {/* Enhanced Trust Indicators */}
        <section className="py-8 sm:py-12 bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-16">
              <motion.div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300 w-full sm:w-auto" whileHover={{ scale: 1.05 }}>
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
                <span className="text-slate-800 font-semibold text-xs sm:text-base">MI Licensed & Insured</span>
              </motion.div>
              <motion.div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300 w-full sm:w-auto" whileHover={{ scale: 1.05 }}>
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
                <span className="text-slate-800 font-semibold text-xs sm:text-base">15+ Years Metro Detroit</span>
              </motion.div>
              <motion.div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300 w-full sm:w-auto" whileHover={{ scale: 1.05 }}>
                <ThumbsUp className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
                <span className="text-slate-800 font-semibold text-xs sm:text-base">5-Year Warranty</span>
              </motion.div>
              <motion.div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300 w-full sm:w-auto" whileHover={{ scale: 1.05 }}>
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
                <span className="text-slate-800 font-semibold text-xs sm:text-base">Fast 5-10 Day Install</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ENHANCED Services Section with LOCAL keywords */}
        <section id="services" className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Bathroom Remodeling Services in Metro Detroit
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Expert bathroom renovation solutions for homeowners across Wayne, Oakland, and Macomb Counties
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  title: "Complete Bathroom Remodeling",
                  desc: "Full-service bathroom renovations with custom tile, premium fixtures, and modern designs throughout Metro Detroit.",
                  icon: Palette,
                  image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/recent/pic7.jpeg",
                  alt: "Complete bathroom remodeling service in Metro Detroit MI",
                  link: "#contact-form",
                },
                {
                  title: "Tub Replacement",
                  desc: "Upgrade your old bathtub with modern, energy-efficient models. Quick installation in Metro Detroit homes.",
                  icon: Hammer,
                  image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/recent/pic9.jpeg",
                  alt: "Bathtub replacement service Metro Detroit Michigan",
                  link: "#contact-form",
                },
                {
                  title: "Tub to Shower Conversion",
                  desc: "Transform your bathtub into a spacious walk-in shower with custom tile and glass doors.",
                  icon: Zap,
                  image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/recent/pic8.jpeg",
                  alt: "Tub to shower conversion Metro Detroit MI",
                  link: "#contact-form",
                },
                {
                  title: "Walk-in Tubs",
                  desc: "Accessible, safe walk-in tub installations for seniors and individuals with mobility needs.",
                  icon: Ruler,
                  image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/recent/pic4.jpeg",
                  alt: "Walk-in tub installation Metro Detroit Michigan",
                  link: "#contact-form",
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
                        "5-year warranty included",
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

        {/* Enhanced Process Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Our Simple 4-Step Bathroom Remodeling Process
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                From consultation to completion, we make bathroom remodeling stress-free for Metro Detroit homeowners
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
              {[
                { step: 1, title: "Free In-Home Consultation", desc: "Schedule a no-obligation consultation at your Metro Detroit home. We discuss your vision, take measurements, and provide expert recommendations.", icon: Users },
                { step: 2, title: "Custom Design & Quote", desc: "Receive a detailed 3D design of your new bathroom with transparent pricing. No hidden fees, just honest quotes.", icon: Palette },
                { step: 3, title: "Professional Installation", desc: "Our licensed Michigan contractors complete your bathroom remodel in 5-10 days with minimal disruption to your routine.", icon: Hammer },
                { step: 4, title: "Final Inspection & Warranty", desc: "We conduct a thorough walkthrough to ensure perfection. Enjoy your new bathroom backed by our 5-year workmanship warranty!", icon: Check },
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
                href="#contact-form"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base"
              >
                Start Your Project Today
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Gallery Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-8 sm:mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Recent Bathroom Remodeling Projects in Metro Detroit
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                See real bathroom transformations from homeowners across Wayne, Oakland, and Macomb Counties
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
                      {project.alt.includes("Livonia") ? "Livonia" : project.alt.includes("Rochester") ? "Rochester" : "Troy"}, Metro Detroit
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

        {/* Enhanced Testimonials */}
        <section className="py-16 sm:py-20 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                What Metro Detroit Homeowners Say About Us
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Real reviews from satisfied customers across Wayne, Oakland, and Macomb Counties
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
                      alt={testimonials[activeTestimonial].alt}
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

       

        {/* ENHANCED FAQ Section with LOCAL context */}
        <section className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Bathroom Remodeling FAQ - Metro Detroit
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Common questions about bathroom remodeling in Wayne, Oakland, and Macomb Counties
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
                  >
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center flex-1 pr-4">
                      <ChevronRight
                        className={`h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mr-3 transform transition-transform flex-shrink-0 ${activeFaq === index ? "rotate-90" : ""
                          }`}
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
              <p className="text-slate-700 mb-6 text-lg">Have more questions? We&apos;re here to help!</p>
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

        {/* NEW: Why Choose Us Section for SEO */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12 sm:mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Why Choose Stone Works Remodeling?
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Metro Detroit&apos;s most trusted bathroom remodeling contractor since 2010
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Licensed & Insured in Michigan",
                  desc: "Fully licensed contractors with comprehensive insurance coverage for your peace of mind throughout Metro Detroit."
                },
                {
                  icon: Award,
                  title: "15+ Years Local Experience",
                  desc: "Over 15 years serving Wayne, Oakland, and Macomb County homeowners with expert bathroom remodeling."
                },
                {
                  icon: DollarSign,
                  title: "Transparent Pricing",
                  desc: "No hidden fees or surprise costs. Get detailed, honest quotes before we start your bathroom project."
                },
                {
                  icon: Clock,
                  title: "Fast 5-10 Day Completion",
                  desc: "Most bathroom remodels completed in 5-10 business days with minimal disruption to your routine."
                },
                {
                  icon: Heart,
                  title: "100% Satisfaction Guarantee",
                  desc: "We're not done until you love your new bathroom. 500+ five-star reviews prove our commitment."
                },
                {
                  icon: Users,
                  title: "Expert Design Consultation",
                  desc: "Free in-home design consultation with 3D renderings to visualize your dream bathroom before construction."
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


{/* Instagram Section */}
<section className="py-16 bg-white border-t border-slate-200">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-10">
      Latest Instagram Posts
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Instagram Post 1 */}
      <a
        href="https://www.instagram.com/reel/DNQxTAGOaTg/"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-slate-50 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all group"
      >
        <div className="relative overflow-hidden rounded-lg h-80">
          <Image
            src="/instagram/image.png"
            alt="Instagram Post 1"
            width={400}
            height={320}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </a>
      {/* Instagram Post 2 */}
      <a
        href="https://www.instagram.com/reel/DOHl_86EZJU/"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-slate-50 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all group"
      >
        <div className="relative overflow-hidden rounded-lg h-80">
          <Image
            src="/instagram/image-2.png"
            alt="Instagram Post 2"
            width={400}
            height={320}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </a>
      {/* Instagram Post 3 */}
      <a
        href="https://www.instagram.com/reel/DPwbEMDkaW8/"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-slate-50 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all group"
      >
        <div className="relative overflow-hidden rounded-lg h-80">
          <Image
            src="/instagram/image-3.png"
            alt="Instagram Post 3"
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

{/* Facebook Section */}
<section className="py-16 bg-slate-50 border-t border-slate-200">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-10">
      Latest Facebook Updates
    </h2>
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
</section>
        

       






        {/* Enhanced CTA Section with Contact Form */}


        {/* NEW: Local SEO Footer Section */}

      </main>
    </div>
  );
}