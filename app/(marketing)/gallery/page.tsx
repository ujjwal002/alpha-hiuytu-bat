"use client";
// ═══════════════════════════════════════════════════════════════════
// THE WALL — arched luxury mosaic gallery with cinematic video
// Place at: app/(marketing)/gallery/page.tsx  (rename to page.tsx)
//
// Design updates:
// - Cinematic hero VIDEO piece at the top (arched, autoplay, muted)
// - Every tile has a dome / arch top — like marble archways
// - Generous padding around and between tiles
// - Two walls: "The Collection" (concepts) and "The Craft" (projects)
// ═══════════════════════════════════════════════════════════════════

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Work {
  src: string;
  alt: string;
  title: string;
  note: string;
}

const concepts: Work[] = [

  { src: "/stone/grand-marble-master-bath-winter-metro-detroit.png", alt: "Grand marble master bathroom design concept with winter garden view — Stone Works Remodeling, Metro Detroit MI", title: "The Winter Suite", note: "Calacatta marble, walnut, snowfall beyond the glass" },
  { src: "/stone/lake-view-freestanding-tub-master-bath-michigan.png", alt: "Lake view master bathroom design concept with freestanding tub — Stone Works Remodeling, Michigan", title: "Lakeside Soak", note: "A tub set against Michigan water and light" },
  { src: "/stone/calacatta-marble-walk-in-shower-gold-metro-detroit.png", alt: "Calacatta marble walk-in shower design concept with gold fixtures — Stone Works Remodeling, Metro Detroit MI", title: "The Gold Standard", note: "Frameless glass, champagne rainfall, warm niche light" },
  { src: "/stone/tudor-limestone-master-bath-bloomfield-hills.png", alt: "Tudor style limestone master bathroom design concept — Stone Works Remodeling, Bloomfield Hills MI", title: "Old World Tudor", note: "Limestone arches and leaded glass, estate character" },
  { src: "/stone/winter-night-marble-master-bath-metro-detroit.png", alt: "Winter night marble master bathroom design concept — Stone Works Remodeling, Metro Detroit MI", title: "Nightfall in Marble", note: "Amber light against a dark January window" },
  { src: "/stone/dark-slate-walk-in-shower-metro-detroit.png", alt: "Dark slate walk-in shower design concept with amber lighting — Stone Works Remodeling, Metro Detroit MI", title: "Slate & Amber", note: "A moody wet room for long Michigan evenings" },
  { src: "/stone/autumn-bay-window-master-bath-michigan.png", alt: "Master bathroom design concept with autumn bay window view — Stone Works Remodeling, Michigan", title: "October Window", note: "Maple color framed like a painting" },
  { src: "/stone/up-north-cabin-copper-tub-michigan.png", alt: "Up North cabin master bathroom design concept with copper tub — Stone Works Remodeling, Michigan", title: "Up North Copper", note: "Lodge warmth, birch and pine beyond" },
  { src: "/stone/marble-steam-shower-teak-bench-metro-detroit.png", alt: "Marble steam shower design concept with teak bench — Stone Works Remodeling, Metro Detroit MI", title: "The Steam Room", note: "For the morning after the snow" },
  { src: "/stone/coastal-lake-michigan-master-bath.png", alt: "Coastal Lake Michigan style master bathroom design concept — Stone Works Remodeling", title: "Dune & Driftwood", note: "Lake Michigan light in sand-toned stone" },
  { src: "/stone/heated-marble-floor-master-bath-metro-detroit.png", alt: "Heated marble floor master bathroom design concept — Stone Works Remodeling, Metro Detroit MI", title: "Warm Underfoot", note: "Heated herringbone marble, winter defeated" },
  { src: "/stone/green-zellige-brass-shower-metro-detroit.png", alt: "Green zellige tile shower design concept with brass fixtures — Stone Works Remodeling, Metro Detroit MI", title: "Pine & Brass", note: "Forest-green zellige, hand-set" },
  { src: "/stone/detroit-loft-industrial-master-bath.png", alt: "Detroit loft industrial master bathroom design concept — Stone Works Remodeling", title: "The Detroit Loft", note: "Brick heritage, refined in black steel and walnut" },
  { src: "/stone/double-rainfall-marble-shower-metro-detroit.png", alt: "Double rainfall marble shower design concept — Stone Works Remodeling, Metro Detroit MI", title: "Shower for Two", note: "Bookmatched stone, twin rainfall" },
  { src: "/stone/modern-farmhouse-master-bath-metro-detroit.png", alt: "Modern farmhouse master bathroom design concept — Stone Works Remodeling, Metro Detroit MI", title: "Farmhouse, Elevated", note: "Shiplap and oak beams, Midwest classic" },
  { src: "/stone/snowstorm-cozy-master-bath-metro-detroit.png", alt: "Cozy master bathroom design concept during a snowstorm — Stone Works Remodeling, Metro Detroit MI", title: "The Snowstorm Bath", note: "Warmth watching the weather lose" },
  { src: "/stone/lake-house-stone-shower-michigan.png", alt: "Lake house stone shower design concept — Stone Works Remodeling, Michigan", title: "Lake House Stone", note: "Pebble floor, water light" },
  { src: "/stone/transitional-greige-master-bath-metro-detroit.png", alt: "Transitional greige master bathroom design concept — Stone Works Remodeling, Metro Detroit MI", title: "Quiet Greige", note: "The neutral that suits every Metro Detroit home" },
  { src: "/stone/wet-room-tub-shower-skylight-metro-detroit.png", alt: "Wet room design concept with tub, shower and skylight — Stone Works Remodeling, Metro Detroit MI", title: "Under the Skylight", note: "Tub and shower in one glass room" },
  { src: "/stone/pine-window-stone-bench-shower-michigan.png", alt: "Stone bench shower design concept with pine window view — Stone Works Remodeling, Michigan", title: "Pine at the Window", note: "Snowy branches from a warm bench" },
  { src: "/stone/luxury-clawfoot-traditional-master-bath-metro-detroit.png", alt: "Traditional clawfoot tub master bathroom design concept — Stone Works Remodeling, Metro Detroit MI", title: "The Clawfoot Classic", note: "Brass feet, crystal light, timeless" },
  { src: "/stone/modern-farmhouse-luxury-shower-metro-detroit.png", alt: "Modern farmhouse luxury shower design concept — Stone Works Remodeling, Metro Detroit MI", title: "Farmhouse Shower", note: "Black-framed glass, white tile, oak" },
  { src: "/stone/curbless-accessible-luxury-shower-metro-detroit.png", alt: "Curbless accessible luxury shower design concept — Stone Works Remodeling, Metro Detroit MI", title: "Graceful Access", note: "Curbless travertine, luxury without barriers" },

  { src: "/home/luxury-bathroom-remodel-after-metro-detroit.jpg", alt: "Luxury master bathroom remodel design concept with Calacatta marble and brass chandelier — Stone Works Remodeling, Metro Detroit MI", title: "The Marble Showpiece", note: "Freestanding tub beneath a brass chandelier" },
  { src: "/home/tub-to-shower-conversion-after-metro-detroit.jpg", alt: "Tub-to-shower conversion design concept with dark stone wet room — Stone Works Remodeling, Metro Detroit MI", title: "The Dark Wet Room", note: "Charcoal stone, amber light, frameless glass" },
  { src: "/home/walk-in-tub-installation-after-metro-detroit.jpg", alt: "Walk-in tub design concept with travertine spa styling — Stone Works Remodeling, Metro Detroit MI", title: "The Organic Spa", note: "Travertine, teak, and safe serenity" },
];

const projects: Work[] = [
  { src: "/bathroom/bathroom-remodel-metro-detroit-01.jpg", alt: "Completed bathroom remodeling project 1 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-02.jpg", alt: "Completed bathroom remodeling project 2 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-03.jpg", alt: "Completed bathroom remodeling project 3 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-04.jpg", alt: "Completed bathroom remodeling project 4 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-05.jpg", alt: "Completed bathroom remodeling project 5 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-06.jpg", alt: "Completed bathroom remodeling project 6 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-07.jpg", alt: "Completed bathroom remodeling project 7 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-08.jpg", alt: "Completed bathroom remodeling project 8 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-09.jpg", alt: "Completed bathroom remodeling project 9 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-10.jpg", alt: "Completed bathroom remodeling project 10 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-11.jpg", alt: "Completed bathroom remodeling project 11 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-12.jpg", alt: "Completed bathroom remodeling project 12 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-13.jpg", alt: "Completed bathroom remodeling project 13 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-14.jpg", alt: "Completed bathroom remodeling project 14 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-15.jpg", alt: "Completed bathroom remodeling project 15 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-16.jpg", alt: "Completed bathroom remodeling project 16 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-17.jpg", alt: "Completed bathroom remodeling project 17 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-18.jpg", alt: "Completed bathroom remodeling project 18 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-19.jpg", alt: "Completed bathroom remodeling project 19 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-20.jpg", alt: "Completed bathroom remodeling project 20 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-21.jpg", alt: "Completed bathroom remodeling project 21 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-22.jpg", alt: "Completed bathroom remodeling project 22 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-23.jpg", alt: "Completed bathroom remodeling project 23 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-24.jpg", alt: "Completed bathroom remodeling project 24 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-25.jpg", alt: "Completed bathroom remodeling project 25 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-26.jpg", alt: "Completed bathroom remodeling project 26 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-27.jpg", alt: "Completed bathroom remodeling project 27 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-28.jpg", alt: "Completed bathroom remodeling project 28 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-29.jpg", alt: "Completed bathroom remodeling project 29 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-30.jpg", alt: "Completed bathroom remodeling project 30 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-31.jpg", alt: "Completed bathroom remodeling project 31 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-32.jpg", alt: "Completed bathroom remodeling project 32 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-33.jpg", alt: "Completed bathroom remodeling project 33 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-34.jpg", alt: "Completed bathroom remodeling project 34 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-35.jpg", alt: "Completed bathroom remodeling project 35 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-36.jpg", alt: "Completed bathroom remodeling project 36 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-37.png", alt: "Completed bathroom remodeling project 37 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bathroom-remodel-metro-detroit-38.png", alt: "Completed bathroom remodeling project 38 by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bath1.jpeg", alt: "Bathroom renovation by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bath2.jpeg", alt: "Bathroom renovation by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
  { src: "/bathroom/bath3.jpeg", alt: "Bathroom renovation by Stone Works Remodeling — Metro Detroit, MI", title: "Metro Detroit Project", note: "Completed by Stone Works Remodeling" },
];

const works: Work[] = [...concepts, ...projects];

const serial = (n: number) => `No. ${String(n + 1).padStart(2, "0")}`;

// Each shape pairs a grid span with an arch: portraits get a full dome,
// wide pieces get a gentle marble archway.
const shapes = [
  { span: "col-span-2 row-span-2 md:col-span-8 md:row-span-2", arch: "rounded-t-[4rem] md:rounded-t-[7rem] rounded-b-xl" },
  { span: "col-span-1 row-span-2 md:col-span-4 md:row-span-3", arch: "rounded-t-full rounded-b-xl" },
  { span: "col-span-1 row-span-1 md:col-span-4 md:row-span-1", arch: "rounded-t-[2.5rem] rounded-b-xl" },
  { span: "col-span-1 row-span-1 md:col-span-4 md:row-span-2", arch: "rounded-t-full rounded-b-xl" },
  { span: "col-span-1 row-span-1 md:col-span-4 md:row-span-1", arch: "rounded-t-[2.5rem] rounded-b-xl" },
  { span: "col-span-2 row-span-1 md:col-span-6 md:row-span-2", arch: "rounded-t-[4rem] rounded-b-xl" },
  { span: "col-span-2 row-span-2 md:col-span-6 md:row-span-3", arch: "rounded-t-full rounded-b-xl" },
];

function Wall({ items, offset, onOpen }: { items: Work[]; offset: number; onOpen: (i: number) => void }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-12 grid-flow-dense gap-3 sm:gap-4 auto-rows-[140px] sm:auto-rows-[170px] lg:auto-rows-[200px]">
      {items.map((w, i) => {
        const s = shapes[i % shapes.length];
        return (
          <button
            key={w.src}
            onClick={() => onOpen(offset + i)}
            className={`group relative overflow-hidden block focus:outline-none focus:ring-2 focus:ring-gold-500 focus:z-10 ${s.span} ${s.arch}`}
            aria-label={`View ${w.title} full screen`}
          >
            <Image
              src={w.src}
              alt={w.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
              priority={offset + i < 3}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/85 via-espresso-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-left">
              <p className="text-gold-300 text-[10px] font-bold uppercase tracking-[0.3em]">{serial(offset + i)}</p>
              <p className="font-luxury text-cream-50 text-base sm:text-lg leading-snug mt-0.5">{w.title}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + works.length) % works.length)),
    []
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % works.length)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, prev, next]);

  return (
    <main className="bg-espresso-950 min-h-screen">
      {/* ── Title band ── */}
      <section className="pt-20 pb-10 px-6 text-center">
        <p className="text-gold-300 text-xs font-bold uppercase tracking-[0.4em] mb-5">
          Stone Works Remodeling · Portfolio
        </p>
        <h1 className="font-luxury text-4xl sm:text-6xl text-cream-50 leading-tight">The Wall</h1>
        <div className="w-16 h-px bg-gold-500 mx-auto mt-6" />
        <p className="text-stonelux-300 max-w-xl mx-auto mt-6 text-base leading-relaxed">
          Designs imagined for Michigan living, and the craft behind them.
          Tap any piece to see it in full.
        </p>
      </section>

      {/* ── Cinematic video — the grand arched centerpiece ── */}
      <section className="px-4 sm:px-8 lg:px-14 pb-16">
        <div className="relative overflow-hidden rounded-t-[5rem] md:rounded-t-[10rem] rounded-b-xl ring-1 ring-inset ring-gold-300/20">
          <video
            className="w-full aspect-[16/9] md:aspect-[21/9] object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/bathroom/hero-poster.jpg"
            aria-label="Cinematic tour of a luxury bathroom design by Stone Works Remodeling"
          >
            <source src="/bathroom/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-espresso-950/70 to-transparent pointer-events-none" />
        </div>
        <div className="text-center mt-5">
          <p className="text-gold-500 text-[11px] font-bold uppercase tracking-[0.35em]">The Centerpiece</p>
          <p className="text-stonelux-400 text-sm mt-1 italic">A walk through marble, walnut, and warm light</p>
        </div>
      </section>

      {/* ── Wall 1: Design concepts ── */}
      <section className="px-4 sm:px-8 lg:px-14 pb-8">
        <div className="pb-8 text-center">
          <h2 className="font-luxury text-2xl sm:text-3xl text-cream-50">The Collection</h2>
          <p className="text-stonelux-400 text-sm mt-1 italic">Design concepts imagined for Michigan living</p>
        </div>
        <Wall items={concepts} offset={0} onOpen={setLightbox} />
      </section>

      {/* ── Wall 2: The craft ── */}
      <section className="px-4 sm:px-8 lg:px-14 pt-14 pb-24">
        {/* <div className="pb-8 text-center">
          <h2 className="font-luxury text-2xl sm:text-3xl text-cream-50">The Craft</h2>
          <p className="text-stonelux-400 text-sm mt-1 italic">From our projects across Metro Detroit</p>
        </div> */}
        <Wall items={projects} offset={concepts.length} onOpen={setLightbox} />
      </section>

      {/* ── Closing CTA ── */}
      <section className="border-t border-cream-100/10 py-20 text-center px-6">
        <p className="text-gold-300 text-xs font-bold uppercase tracking-[0.35em] mb-4">Commission a piece</p>
        <h2 className="font-luxury text-3xl sm:text-4xl text-cream-50 mb-6">Your bathroom belongs on this wall</h2>
        <a href="/contact" className="inline-block px-10 py-4 bg-gold-600 hover:bg-gold-500 text-white rounded-lg font-bold transition-colors">
          Reserve Your Design Consultation
        </a>
      </section>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-espresso-950/95 backdrop-blur-sm flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={works[lightbox].title}
          onClick={close}
        >
          <button onClick={close} className="absolute top-5 right-5 text-cream-100 hover:text-gold-300 transition-colors z-10" aria-label="Close">
            <X className="h-8 w-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 sm:left-6 text-cream-100 hover:text-gold-300 transition-colors z-10" aria-label="Previous">
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 sm:right-6 text-cream-100 hover:text-gold-300 transition-colors z-10" aria-label="Next">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="relative w-[92vw] h-[78vh] max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image src={works[lightbox].src} alt={works[lightbox].alt} fill sizes="92vw" className="object-contain" priority />
            <div className="absolute -bottom-14 left-0 right-0 text-center">
              <p className="text-gold-500 text-[11px] font-bold uppercase tracking-[0.35em]">{serial(lightbox)}</p>
              <p className="font-luxury text-cream-50 text-xl mt-1">{works[lightbox].title}</p>
              <p className="text-stonelux-400 text-sm mt-1 italic">{works[lightbox].note}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}