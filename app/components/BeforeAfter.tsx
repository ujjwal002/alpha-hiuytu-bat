// app/components/BeforeAfter.tsx
// Interactive Before/After slider — the single highest-engagement element on
// any remodeling site. Drag the handle (or use arrow keys) to reveal.
// Touch + mouse + keyboard accessible. Premium stone/brass styling.
// Relies on .font-display (Fraunces) set up in layout.tsx.
"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";

const C = {
  ink: "#1c1916",
  bone: "#f4efe7",
  stone: "#e4dccf",
  brass: "#9c7c4a",
  brassHi: "#b89968",
  muted: "#8a8175",
};

type Pair = {
  before: string;
  after: string;
  alt: string;
  label?: string;
  service?: string;
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
      className="relative w-full overflow-hidden select-none touch-none cursor-ew-resize"
      style={{ aspectRatio: "4/3", borderRadius: 14, border: `1px solid ${C.stone}` }}
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ width: `${pos}%` }}>
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
      <div className="absolute top-3 left-3 text-xs font-medium px-3 py-1 uppercase tracking-[0.16em] pointer-events-none" style={{ background: "rgba(28,25,22,0.85)", color: C.bone }}>
        Before
      </div>
      <div className="absolute top-3 right-3 text-xs font-medium px-3 py-1 uppercase tracking-[0.16em] pointer-events-none" style={{ background: C.brass, color: C.ink }}>
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
        className="absolute top-0 bottom-0"
        style={{ left: `${pos}%`, transform: "translateX(-50%)", width: 2, background: C.bone, boxShadow: "0 0 0 1px rgba(0,0,0,0.15)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg flex items-center justify-center" style={{ background: C.bone, border: `1px solid ${C.brass}` }}>
          <ArrowLeftRight className="h-5 w-5" style={{ color: C.brass }} aria-hidden="true" />
        </div>
      </div>

      {/* Hint until first interaction */}
      {!hasInteracted && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-medium px-4 py-1.5 rounded-full shadow-md pointer-events-none animate-pulse uppercase tracking-[0.12em]" style={{ background: "rgba(244,239,231,0.96)", color: C.ink }}>
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
      <div className="mt-5 text-center">
        {current.label && (
          <p className="font-display text-xl" style={{ color: C.ink }}>{current.label}</p>
        )}
        {current.service && (
          <p className="text-xs uppercase tracking-[0.18em] font-medium mt-1.5" style={{ color: C.brass }}>{current.service}</p>
        )}
      </div>

      {/* Thumbnail nav */}
      {pairs.length > 1 && (
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          {pairs.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show ${p.label || `comparison ${i + 1}`}`}
              aria-pressed={active === i}
              className="relative h-14 w-20 overflow-hidden transition-all"
              style={{
                borderRadius: 8,
                border: `1px solid ${active === i ? C.brass : C.stone}`,
                boxShadow: active === i ? `0 0 0 2px rgba(184,153,104,0.4)` : "none",
                opacity: active === i ? 1 : 0.65,
              }}
            >
              <Image src={p.after} alt="" fill className="object-cover" sizes="80px" quality={50} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}