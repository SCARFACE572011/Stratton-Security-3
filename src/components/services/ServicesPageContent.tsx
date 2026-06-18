"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  ShieldCheck,
  Building2,
  Home,
  Star,
  ShoppingBag,
  HardHat,
  Briefcase,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

const ICON_MAP = {
  Shield,
  ShieldCheck,
  Building2,
  Home,
  Star,
  ShoppingBag,
  HardHat,
  Briefcase,
} as const;

const SPECIALIZED_SERVICES = [
  "Executive Protection & Bodyguard Services",
  "Corporate Security Programs",
  "Concierge & Lobby Ambassador Services",
  "Loss Prevention",
  "Firewatch Security",
  "Access Control Implementation",
  "CCTV & Surveillance Monitoring",
  "K9 / Canine Detection Teams",
  "Plain Clothed Security Officers",
  "Chauffeur Services",
  "Door-to-Door Escort Services",
  "Security Consulting & Post Analysis",
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ServicesPageContent() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <main>
      {/* ─── PAGE HERO ─────────────────────────────────────────── */}
      <div className="page-hero">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
          alt="Professional security operations"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Navy / black overlays only */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040d1e] via-[#040d1e]/70 to-[#040d1e]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d1e]/80 to-transparent" />

        <div className="relative z-10 container-wide pb-20 pt-32">
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="label-overline-light mb-6"
          >
            What We Provide
          </motion.p>

          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: EASE }}
            className="display-hero text-white mb-7 max-w-3xl"
            style={{ fontSize: "clamp(2.75rem, 6.5vw, 5rem)" }}
          >
            Security Services Across Every Sector
          </motion.h1>

          <motion.span
            initial={shouldReduceMotion ? {} : { opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            style={{ transformOrigin: "left" }}
            className="accent-line bg-[#3f6bb0] mb-7"
            aria-hidden="true"
          />

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
            className="text-silver text-[1.0625rem] leading-relaxed max-w-xl"
          >
            From mobile patrol and armed guard services to specialized executive
            protection and event security, Stratton delivers tailored programs
            for every property type and risk environment.
          </motion.p>
        </div>
      </div>

      {/* ─── PRIMARY SERVICES (white) ──────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="core-services-heading">
        <div className="container-wide">
          {/* Centered editorial header */}
          <motion.div
            {...reveal()}
            className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
          >
            <p className="label-overline mb-6">Core Service Lines</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              id="core-services-heading"
              className="display-title text-[#040d1e]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Protection Programs
            </h2>
            <p className="text-[#4b5563] text-lg leading-relaxed mt-7 max-w-2xl mx-auto">
              Specialized security solutions engineered for the people,
              properties, and operations that demand uncompromising protection.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => {
              const IconComponent =
                ICON_MAP[service.icon as keyof typeof ICON_MAP] ?? Shield;
              return (
                <motion.div
                  key={service.id}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="card group relative flex flex-col h-full rounded-xl p-8 md:p-10"
                  >
                    {/* Icon chip */}
                    <div className="w-14 h-14 rounded-xl border border-platinum bg-[#f4f6f9] flex items-center justify-center shrink-0 transition-colors group-hover:border-[#1a3a6b]/40 mb-7">
                      <IconComponent
                        size={24}
                        className="text-[#1a3a6b]"
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="display-sm text-[1.375rem] text-[#0a0a0a] mb-3">
                      {service.title}
                    </h3>

                    <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed flex-1">
                      {service.shortDescription}
                    </p>

                    <span className="mt-8 inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-[#1a3a6b]">
                      Learn More
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1.5"
                      />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SPECIALIZED SERVICES (platinum-50, two-column split) ── */}
      <section className="section-padding section-tint" aria-labelledby="specialized-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left — editorial intro */}
            <motion.div {...reveal()} className="lg:col-span-5">
              <p className="label-overline mb-6">Specialized Services</p>
              <span className="accent-line mb-8" aria-hidden="true" />
              <h2
                id="specialized-heading"
                className="display-title text-[#040d1e] mb-7"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Beyond the Standard Program
              </h2>
              <p className="text-[#4b5563] text-lg leading-relaxed mb-9">
                Stratton&apos;s specialized services address complex,
                high-value, and high-sensitivity security requirements — from
                executive protection and K9 detection to access control and CCTV
                monitoring.
              </p>
              <Link href="/contact" className="btn-primary">
                Request a Consultation
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Right — specialized list as a card grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {SPECIALIZED_SERVICES.map((service, i) => (
                <motion.div
                  key={service}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.05, duration: 0.55, ease: EASE }}
                  className="card group flex items-center gap-4 rounded-xl p-5"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-platinum bg-white text-[#1a3a6b] shrink-0 transition-colors group-hover:border-[#1a3a6b]/40">
                    <ShieldCheck size={18} strokeWidth={1.75} />
                  </span>
                  <span className="text-[0.875rem] text-[#4b5563] leading-snug">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
