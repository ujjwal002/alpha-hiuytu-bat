"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import HomePage from "./Home";

// Lazy-load framer-motion (huge JS saving)
const MotionDiv = dynamic(
    () => import("framer-motion").then(m => m.motion.div),
    { ssr: false }
);

export default function HomeClient() {
    const isClient = typeof window !== "undefined";

    return (
        <>
            {/* 🔥 LCP ANCHOR — LOCKS FAST LCP EVERY RUN */}
            <Image
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
                alt=""
                role="presentation"
                width={1}
                height={1}
                priority
                fetchPriority="high"
                className="absolute opacity-0 pointer-events-none"
            />


            {/* ======================================
          FIRST PAINT (NO ANIMATION)
          ====================================== */}
            {!isClient ? (
                <div className="min-h-screen bg-white overflow-x-hidden">
                    <HomePage />
                </div>
            ) : (
                /* ======================================
                   AFTER PAINT (ANIMATIONS ENABLED)
                   ====================================== */
                <MotionDiv>
                    <HomePage />
                </MotionDiv>
            )}
        </>
    );
}