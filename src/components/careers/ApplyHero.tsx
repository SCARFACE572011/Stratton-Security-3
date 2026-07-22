"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ApplyHero() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <header className="page-hero bg-deep-navy">
      {/* Atmosphere — navy/black overlays only */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(125% 90% at 50% 0%, #0a1c3c 0%, #040d1e 48%, #060708 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(192,200,212,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(192,200,212,0.045) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(circle at 28% 60%, #000 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(circle at 28% 60%, #000 0%, transparent 72%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full">
        {/* Breadcrumb */}
        <div className="border-b border-[rgba(192,200,212,0.16)]">
          <div className="container-wide py-4">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-[0.75rem] text-silver hover:text-[#3f6bb0] uppercase tracking-wide transition-colors"
            >
              <ArrowLeft size={12} />
              Back to Careers
            </Link>
          </div>
        </div>

        {/* Hero copy */}
        <div className="container-wide pt-16 pb-20 md:pt-24 md:pb-28">
          <m.div {...reveal()} className="max-w-2xl">
            <p className="label-overline-light mb-7">Join Our Team</p>
            <span className="accent-line bg-[#3f6bb0] mb-8" aria-hidden="true" />
            <h1
              className="display-hero text-white"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Apply to Stratton Security
            </h1>
            <p className="text-silver text-[1.0625rem] leading-relaxed mt-8 max-w-xl">
              Fill out the form below. Have your California Guard Card number
              ready. We&apos;ll follow up within 2&ndash;3 business days.
            </p>
          </m.div>
        </div>
      </div>
    </header>
  );
}
