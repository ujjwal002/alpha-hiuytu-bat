// app/components/BeforeAfter.tsx
// Interactive Before/After slider — the single highest-engagement element on
// any remodeling site. Drag the handle (or use arrow keys) to reveal.
// Touch + mouse + keyboard accessible. Lazy-loaded images.
"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";

type Pair = {
  before: string;
  after: string;
  alt: string;
  label?: string;     // e.g. "Master Bath — Troy, MI"
  service?: string;   // e.g. "Tub-to-Shower Conversion"
};

interface BeforeAfterProps {
  pairs: Pair[];
  className?: string;
}

function Slider({ pair }: { pair: Pair }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
    setHasInteracted(true);
  }, []);

  // Pointer events handle mouse + touch unified
  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => updateFromClientX(e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [dragging, updateFromClientX]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { setPos((p) => Math.max(0, p - 5)); setHasInteracted(true); }
    if (e.key === "ArrowRight") { setPos((p) => Math.min(100, p + 5)); setHasInteracted(true); }
    if (e.key === "Home") setPos(0);
    if (e.key === "End") setPos(100);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl select-none touch-none cursor-ew-resize"
      style={{ aspectRatio: "4/3" }}
      onPointerDown={(e) => {
        setDragging(true);
        updateFromClientX(e.clientX);
      }}
    >
      {/* AFTER — bottom layer (full width) */}
      <div className="absolute inset-0">
        <Image
          src={pair.after}
          alt={`After: ${pair.alt}`}
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={80}
        />
      </div>

      {/* BEFORE — clipped layer */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${pos}%` }}
      >
        <div
          className="relative h-full"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}
        >
          <Image
            src={pair.before}
            alt={`Before: ${pair.alt}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
          />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 bg-slate-900/85 text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider pointer-events-none">
        Before
      </div>
      <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider pointer-events-none">
        After
      </div>

      {/* Handle */}
      <div
        role="slider"
        aria-label={`Before/after comparison for ${pair.label || pair.alt}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-200">
          <ArrowLeftRight className="h-5 w-5 text-blue-600" aria-hidden="true" />
        </div>
      </div>

      {/* Hint until first interaction */}
      {!hasInteracted && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md pointer-events-none animate-pulse">
          ← Drag to compare →
        </div>
      )}
    </div>
  );
}

export default function BeforeAfter({ pairs, className = "" }: BeforeAfterProps) {
  const [active, setActive] = useState(0);
  const current = pairs[active];

  if (!current) return null;

  return (
    <div className={className}>
      <Slider key={active} pair={current} />

      {/* Caption */}
      <div className="mt-4 text-center">
        {current.label && (
          <p className="text-base font-bold text-gray-900">{current.label}</p>
        )}
        {current.service && (
          <p className="text-sm text-blue-600 font-semibold mt-0.5">{current.service}</p>
        )}
      </div>

      {/* Thumbnail nav */}
      {pairs.length > 1 && (
        <div className="flex justify-center gap-2 mt-5 flex-wrap">
          {pairs.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show ${p.label || `comparison ${i + 1}`}`}
              aria-pressed={active === i}
              className={`relative h-14 w-20 rounded-md overflow-hidden border-2 transition-all ${
                active === i
                  ? "border-blue-600 ring-2 ring-blue-200"
                  : "border-slate-200 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={p.after}
                alt=""
                fill
                className="object-cover"
                sizes="80px"
                quality={50}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}