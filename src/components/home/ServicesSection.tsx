"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  ShieldCheck,
  Building2,
  Home,
  ShoppingBag,
  HardHat,
  Briefcase,
  Star,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICON_MAP = { Shield, ShieldCheck, Building2, Home, ShoppingBag, HardHat, Briefcase, Star } as const;

const EASE = [0.22, 1, 0.36, 1] as const;

const PROGRAMS = SERVICES.map((s) => ({
  title: s.title,
  desc: s.shortDescription,
  icon: ICON_MAP[s.icon as keyof typeof ICON_MAP] ?? Shield,
}));

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % PROGRAMS.length), 2600);
    return () => clearInterval(t);
  }, [shouldReduceMotion]);

  const active = PROGRAMS[idx];
  const ActiveIcon = active.icon;

  return (
    <section className="bg-white" aria-labelledby="services-heading">
      <div className="container-wide section-padding">
        {/* Centered editorial header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <p className="label-overline mb-6">What We Do</p>
          <span className="accent-line mx-auto mb-8" aria-hidden="true" />
          <h2
            id="services-heading"
            className="display-title text-[#040d1e]"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            Protection Programs
          </h2>
          <p className="text-[#4b5563] text-lg leading-relaxed mt-7 max-w-2xl mx-auto">
            Specialized security solutions engineered for the people, properties,
            and operations that demand uncompromising protection.
          </p>
        </motion.div>

        {/* Protection Programs — single animated card linking to all services */}
        <motion.div
          className="mx-auto max-w-4xl"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <Link
            href="/services"
            aria-label="Protection programs — view all services"
            className="card group block overflow-hidden rounded-2xl"
          >
            <div className="grid lg:grid-cols-2">
              {/* Left — title + copy + CTA */}
              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="label-overline mb-5">Our Services</p>
                <h3
                  className="display-title text-white"
                  style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}
                >
                  A Program For Every Threat
                </h3>
                <p className="mt-5 text-[1rem] leading-relaxed text-silver max-w-md">
                  From uniformed patrol and armed officers to executive protection,
                  event security, and commercial programs — every deployment is built
                  around your risk profile.
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-[#6f9bd8]">
                  View All Services
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </span>
              </div>

              {/* Right — animated cycling program readout */}
              <div className="relative flex flex-col justify-center border-t border-[rgba(192,200,212,0.14)] bg-[#040d1e]/50 p-8 md:p-12 lg:border-t-0 lg:border-l">
                <div
                  className="pointer-events-none absolute inset-0 opacity-50"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(192,200,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(192,200,212,0.05) 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                    maskImage: "radial-gradient(circle at 70% 40%, #000 0%, transparent 75%)",
                    WebkitMaskImage: "radial-gradient(circle at 70% 40%, #000 0%, transparent 75%)",
                  }}
                />
                <span
                  className="hud-corners pointer-events-none absolute inset-5"
                  style={{ ["--hud-c" as string]: "rgba(192,200,212,0.4)" }}
                  aria-hidden="true"
                />

                <div className="relative flex items-center justify-between mb-7">
                  <span className="mono-tag text-silver">Programs</span>
                  <span className="mono-tag text-steel">
                    {String(idx + 1).padStart(2, "0")} / {String(PROGRAMS.length).padStart(2, "0")}
                  </span>
                </div>

                {/* cycling icon + title + description */}
                <div className="relative flex h-[150px] items-start gap-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={idx}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="flex items-start gap-5"
                    >
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#3f6bb0]/30 bg-[#3f6bb0]/12 text-[#6f9bd8]">
                        <ActiveIcon size={26} strokeWidth={1.6} />
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <div className="display-sm text-white text-[1.25rem] leading-tight tracking-[0.01em]">
                          {active.title}
                        </div>
                        <div className="text-[0.85rem] leading-snug text-silver mt-2 line-clamp-3">
                          {active.desc}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* progress dots */}
                <div className="relative mt-7 flex flex-wrap items-center gap-1.5">
                  {PROGRAMS.map((p, i) => (
                    <span
                      key={p.title}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === idx ? "w-6 bg-[#3f6bb0]" : "w-1.5 bg-[rgba(192,200,212,0.25)]",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
