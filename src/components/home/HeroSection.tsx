"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

const HEADLINE = ["Strength.", "Vigilance.", "Integrity."];

export default function HeroSection() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden bg-[#040d1e] text-center"
      aria-label="Hero — Stratton Security Group"
    >
      {/* Atmosphere */}
      <motion.div
        className="absolute inset-0 z-0"
        style={prefersReduced ? {} : { y: bgY }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(125% 90% at 50% 0%, #0a1c3c 0%, #040d1e 45%, #060708 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(192,200,212,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(192,200,212,0.045) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(circle at 50% 38%, #000 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 38%, #000 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1100px] max-h-[1100px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle, rgba(26,58,107,0.45) 0%, transparent 62%)" }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-wide w-full pt-32 pb-28 flex flex-col items-center">
        {/* Seal in HUD targeting frame */}
        <motion.div
          className="hud-corners-4 p-5 mb-9"
          initial={prefersReduced ? {} : { opacity: 0, scale: 0.82, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/seal-white.png"
            alt="Stratton Security Group seal"
            width={120}
            height={120}
            className="w-24 h-24 md:w-28 md:h-28 animate-float"
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="label-overline-light mb-8 flex items-center justify-center gap-3"
        >
          <span className="inline-block w-8 h-px bg-[#3f6bb0]" />
          California&apos;s Premier Private Security
          <span className="inline-block w-8 h-px bg-[#3f6bb0]" />
        </motion.p>

        {/* Headline */}
        <h1
          className="display-hero text-white"
          style={{ fontSize: "clamp(3.25rem, 8.5vw, 7rem)" }}
        >
          {HEADLINE.map((word, i) => (
            <span key={word} className="block overflow-hidden py-[0.04em]">
              <motion.span
                className="block"
                initial={prefersReduced ? {} : { y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: prefersReduced ? 0 : 0.35 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Sub */}
        <motion.p
          className="text-silver max-w-2xl text-[1.15rem] leading-relaxed mt-9 mx-auto"
          initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          We place only qualified, background-checked, rigorously trained
          professionals at your property — carrying the discipline of military and
          law-enforcement service, personalized to your needs.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-11 justify-center"
          initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/contact" className="btn-light group">
            Request a Free Assessment
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a href={`tel:${SITE_CONFIG.phoneE164}`} className="btn-on-dark">
            <Phone size={16} />
            {SITE_CONFIG.phone}
          </a>
        </motion.div>

        {/* Response-time promise — the strongest conversion lever, kept beside the CTAs.
            Every claim traces to canonical copy: free/complimentary assessment (CTASection),
            one-business-day response (contact page + form success), 72h "typically"
            deployment (FAQ). Don't strengthen these without client sign-off. */}
        <motion.p
          className="mt-6 text-center text-[0.8125rem] text-silver/90 tracking-[0.02em]"
          initial={prefersReduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.15 }}
        >
          Free on-site assessment · Response within one business day · Coverage typically within 72 hours
        </motion.p>
      </div>

      {/* Command-center status readout (HUD corner) */}
      <motion.div
        initial={prefersReduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-8 z-10 hidden md:flex items-center gap-2.5 mono-tag text-silver/80"
        aria-hidden="true"
      >
        <span className="status-dot" />
        System Operational · 24/7/365 · PPO {SITE_CONFIG.licenseNumber}
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={prefersReduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[0.6rem] tracking-[0.3em] uppercase text-silver/70">Scroll</span>
        <motion.span
          className="block w-px h-10 bg-gradient-to-b from-[#3f6bb0] to-transparent"
          animate={prefersReduced ? {} : { scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
