"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export default function MidPageCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-deep-navy border-y border-[rgba(192,200,212,0.16)] overflow-hidden">
      {/* Atmosphere — soft accent glow + faint grid, matching the hero */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle, rgba(26,58,107,0.4) 0%, transparent 62%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(192,200,212,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(192,200,212,0.045) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(circle at 50% 50%, #000 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 50%, #000 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 container-wide section-padding">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl flex flex-col items-center text-center"
        >
          {/* Eyebrow */}
          <p className="label-overline-light flex items-center justify-center gap-3">
            <span className="inline-block w-8 h-px bg-[#3f6bb0]" />
            Always Vigilant
            <span className="inline-block w-8 h-px bg-[#3f6bb0]" />
          </p>

          {/* Headline */}
          <h2
            className="display-title text-white mt-7"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            Ready to Protect Your Property?
          </h2>

          {/* Centered accent line under the title */}
          <span className="accent-line mx-auto mt-8" style={{ background: "#3f6bb0" }} aria-hidden="true" />

          {/* Subcopy */}
          <p className="text-silver text-[1.15rem] leading-relaxed mt-8 max-w-2xl mx-auto">
            Free assessment &middot; Response within one business day &middot; 24/7 availability
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
            <Link href="/contact" className="btn-light group">
              Request Free Assessment
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={`tel:${SITE_CONFIG.phoneE164}`} className="btn-on-dark">
              <Phone size={16} />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
