"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

const CTA_BG =
  "https://images.unsplash.com/photo-1595079676601-f1adf5be5dee?auto=format&fit=crop&w=1920&q=80";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function CTASection() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay: number) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.8, delay: shouldReduceMotion ? 0 : delay, ease: EASE },
  });

  return (
    <section
      className="relative overflow-hidden bg-deep-navy"
      aria-label="Request a security assessment"
    >
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={CTA_BG}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      {/* Navy overlay — centered, slightly heavier in the middle for legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 50%, rgba(4,13,30,0.78) 0%, rgba(4,13,30,0.90) 55%, rgba(4,13,30,0.97) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(4,13,30,0.55) 0%, transparent 35%, transparent 65%, rgba(4,13,30,0.7) 100%)",
        }}
      />

      {/* Thin accent top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-[2]"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(63,107,176,0.45) 30%, rgba(63,107,176,0.45) 70%, transparent)",
        }}
      />

      <div className="relative z-10 section-padding">
        <div className="container-wide flex flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.p
            {...reveal(0)}
            className="label-overline-light mb-8 flex items-center justify-center gap-3"
          >
            <span className="inline-block w-8 h-px bg-[#3f6bb0]" />
            Get Protected Today
            <span className="inline-block w-8 h-px bg-[#3f6bb0]" />
          </motion.p>

          {/* Headline */}
          <motion.h2
            {...reveal(0.08)}
            className="display-title text-white max-w-3xl mx-auto"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            Ready to secure your property?
          </motion.h2>

          {/* Accent line under title */}
          <motion.span
            {...reveal(0.14)}
            className="accent-line mx-auto mt-8"
            style={{ background: "#3f6bb0" }}
            aria-hidden="true"
          />

          {/* Lede */}
          <motion.p
            {...reveal(0.2)}
            className="text-silver text-[1.15rem] leading-relaxed mt-8 max-w-2xl mx-auto"
          >
            Request a complimentary security assessment and speak with a
            Stratton senior advisor. We&apos;ll build a program that fits your
            property, risk profile, and budget.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...reveal(0.28)}
            className="flex flex-col sm:flex-row gap-4 mt-11 justify-center"
          >
            <Link href="/contact" className="btn-light group">
              Request a Free Assessment
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a href={`tel:${SITE_CONFIG.phoneE164}`} className="btn-on-dark">
              <Phone size={16} />
              {SITE_CONFIG.phone}
            </a>
          </motion.div>

          {/* Credential strip */}
          <motion.div
            {...reveal(0.36)}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-14 text-[0.6875rem] tracking-wide text-steel"
          >
            <span>CA PPO License #{SITE_CONFIG.licenseNumber}</span>
            <span className="text-silver/30">·</span>
            <span>24/7 · 365 Availability</span>
            <span className="text-silver/30">·</span>
            <span>Licensed · Bonded · Insured</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
