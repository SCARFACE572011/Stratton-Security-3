"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

const HERO_BG =
  "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=1920&q=80";

const HERO_INSET =
  "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80";

const charVariants: Variants = {
  hidden: { opacity: 0, y: 55 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const line1 = "EXCELLENCE".split("");
  const line2 = "IN PROTECTION".split("");

  return (
    <section
      ref={containerRef}
      className="relative min-h-dvh flex flex-col justify-end overflow-hidden"
      style={{ backgroundColor: "#000000" }}
      aria-label="Hero — Stratton Security Group"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={prefersReduced ? {} : { y: bgY }}
      >
        <Image
          src={HERO_BG}
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.97) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.15) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Blood-red left-edge accent */}
      <motion.div
        className="absolute left-0 top-0 h-full w-[2px] z-20 pointer-events-none"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 2.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background:
            "linear-gradient(to bottom, transparent 5%, #cc1111 25%, #ff2222 55%, #cc1111 80%, transparent 95%)",
          transformOrigin: "top",
          boxShadow: "0 0 16px rgba(204,17,17,0.5), 0 0 40px rgba(204,17,17,0.15)",
        }}
        aria-hidden="true"
      />

      {/* Top-right active indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        className="absolute top-28 right-8 z-20 hidden lg:flex items-center gap-2"
        aria-hidden="true"
      >
        <span
          className="block w-1.5 h-1.5 rounded-full bg-[#cc1111]"
          style={{ animation: "pulse-red 2s ease-in-out infinite" }}
        />
        <span className="text-[0.5rem] text-[#cc1111]/80 tracking-[0.3em] uppercase font-[var(--font-sans)]">
          Active Protection
        </span>
      </motion.div>

      {/* Right-edge vertical label */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute right-8 bottom-36 z-20 hidden xl:flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#1a2030]" />
        <span
          className="text-[0.5rem] text-[#3a4a58] tracking-[0.4em] uppercase font-[var(--font-sans)]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          PPO #{SITE_CONFIG.licenseNumber} · Licensed · Insured · Bonded
        </span>
        <div className="w-px h-12 bg-gradient-to-t from-transparent to-[#1a2030]" />
      </motion.div>

      {/* Content */}
      <div
        className="relative z-10 pb-24 md:pb-32 pt-40 w-full max-w-[1440px] mx-auto"
        style={{ paddingLeft: "clamp(2rem, 10vw, 14rem)", paddingRight: "clamp(2rem, 10vw, 14rem)" }}
      >
        <div className="grid lg:grid-cols-12 gap-10 items-end">

          {/* Text column */}
          <div className="lg:col-span-7">
            <motion.p
              initial={prefersReduced ? {} : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="label-overline mb-5"
            >
              Los Angeles Security Professionals
            </motion.p>

            <h1
              className="display-hero text-white mb-0"
              style={{ fontSize: "clamp(3.75rem, 10.5vw, 9rem)", lineHeight: 0.88 }}
              aria-label="Excellence In Protection"
            >
              <motion.span
                className="block"
                style={{ overflow: "hidden", paddingBottom: "0.08em" }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: prefersReduced ? 0 : 0.042,
                      delayChildren: prefersReduced ? 0 : 0.35,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {line1.map((char, i) => (
                  <motion.span key={i} variants={charVariants} style={{ display: "inline-block" }}>
                    {char}
                  </motion.span>
                ))}
              </motion.span>

              <motion.span
                className="block"
                style={{
                  overflow: "hidden",
                  paddingBottom: "0.08em",
                  WebkitTextStroke: "1.5px rgba(204,17,17,0.65)",
                  color: "transparent",
                }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: prefersReduced ? 0 : 0.042,
                      delayChildren: prefersReduced ? 0 : 1.05,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {line2.map((char, i) => (
                  <motion.span key={i} variants={charVariants} style={{ display: "inline-block" }}>
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </h1>

            <motion.div
              className="flex items-center gap-2 mt-7 mb-7"
              initial={prefersReduced ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0, duration: 0.5 }}
            >
              <motion.div
                className="h-px bg-[#cc1111]"
                initial={prefersReduced ? {} : { width: 0 }}
                animate={{ width: 52 }}
                transition={{ delay: 2.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="h-px bg-[#cc1111]"
                initial={prefersReduced ? {} : { width: 0 }}
                animate={{ width: 18 }}
                transition={{ delay: 2.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>

            <motion.p
              className="text-[#a0b0c0] max-w-xl text-[1rem] leading-relaxed mb-10"
              style={{ fontWeight: 300 }}
              initial={prefersReduced ? {} : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Stratton Security Group protects people, assets, and peace of mind
              across Southern California — 24 hours a day, 365 days a year.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={prefersReduced ? {} : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="/contact" className="btn-primary group text-sm px-7 py-4">
                Request a Free Assessment
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={`tel:${SITE_CONFIG.phoneE164}`} className="btn-secondary text-sm px-7 py-4">
                {SITE_CONFIG.phone}
              </a>
            </motion.div>
          </div>

          {/* Inset image panel — desktop only */}
          <motion.div
            className="hidden lg:block lg:col-span-5 pb-2"
            initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            <div
              className="relative overflow-hidden"
              style={{
                height: "clamp(220px, 28vh, 380px)",
                border: "1px solid rgba(204,17,17,0.3)",
              }}
            >
              <Image
                src={HERO_INSET}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 0px, 40vw"
              />
              <div className="absolute inset-0 bg-black/20" />
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#cc1111]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#cc1111]" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/65 px-4 py-2.5">
                <p className="text-[0.5625rem] text-[#606878] uppercase tracking-[0.25em]">24/7 Field Operations</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
