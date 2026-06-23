"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Home,
  Building2,
  BedDouble,
  ShoppingBag,
  HardHat,
  Car,
  Briefcase,
  HeartPulse,
  Shield,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { CLIENT_LOGOS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const SECTOR_META: Record<string, { icon: LucideIcon; blurb: string }> = {
  "Residential HOA": { icon: Home, blurb: "HOAs, gated communities & condo boards" },
  "Commercial Real Estate": { icon: Building2, blurb: "Office towers, campuses & multi-tenant" },
  Hospitality: { icon: BedDouble, blurb: "Hotels, resorts & entertainment venues" },
  Retail: { icon: ShoppingBag, blurb: "Centers, stores & loss prevention" },
  Construction: { icon: HardHat, blurb: "Active sites, equipment & materials" },
  "Auto Dealership": { icon: Car, blurb: "Lots, showrooms & service bays" },
  Corporate: { icon: Briefcase, blurb: "Headquarters, executives & lobbies" },
  Healthcare: { icon: HeartPulse, blurb: "Hospitals, clinics & medical campuses" },
};

const SECTORS = CLIENT_LOGOS.map((c) => ({
  name: c.industry,
  ...(SECTOR_META[c.industry] ?? { icon: Shield, blurb: "Tailored protection programs" }),
}));

export default function ClientLogosSection() {
  const shouldReduceMotion = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % SECTORS.length), 2400);
    return () => clearInterval(t);
  }, [shouldReduceMotion]);

  const active = SECTORS[idx];
  const ActiveIcon = active.icon;

  return (
    <section className="section-tint section-padding" aria-labelledby="clients-heading">
      <div className="container-wide">
        {/* Centered editorial header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="label-overline mb-6">Sectors We Protect</p>
          <span className="accent-line mx-auto mb-7" />
          <h2
            id="clients-heading"
            className="display-title text-[#040d1e]"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            Relied On Across Los Angeles
          </h2>
          <p className="mt-7 text-[1.0625rem] leading-relaxed text-[#4b5563] font-[var(--font-sans)]">
            From Beverly Hills residential communities to Century City corporate
            campuses, Stratton protects properties trusted by property managers,
            HOA boards, and executives across Southern California.
          </p>
        </motion.div>

        {/* Industries Served — single animated card linking to all industries */}
        <motion.div
          className="mx-auto max-w-4xl mt-14 md:mt-20"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <Link
            href="/industries"
            aria-label="Industries served — view all industries"
            className="card group block overflow-hidden rounded-2xl"
          >
            <div className="grid lg:grid-cols-2">
              {/* Left — title + copy + CTA */}
              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="label-overline mb-5">Industries Served</p>
                <h3
                  className="display-title text-white"
                  style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}
                >
                  Protection For Every Sector
                </h3>
                <p className="mt-5 text-[1rem] leading-relaxed text-silver max-w-md">
                  From HOAs, estates, and corporate campuses to hospitality, retail,
                  construction, and healthcare — Stratton designs a dedicated program
                  for each environment.
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-[#6f9bd8]">
                  View All Industries
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </span>
              </div>

              {/* Right — animated cycling sector readout */}
              <div className="relative flex flex-col justify-center border-t border-[rgba(192,200,212,0.14)] bg-[#040d1e]/50 p-8 md:p-12 lg:border-t-0 lg:border-l">
                {/* ops grid texture */}
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
                  <span className="mono-tag text-silver">Sectors Covered</span>
                  <span className="mono-tag text-steel">
                    {String(idx + 1).padStart(2, "0")} / {String(SECTORS.length).padStart(2, "0")}
                  </span>
                </div>

                {/* cycling icon + name + blurb */}
                <div className="relative flex h-[96px] items-center gap-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={idx}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="flex items-center gap-5"
                    >
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#3f6bb0]/30 bg-[#3f6bb0]/12 text-[#6f9bd8]">
                        <ActiveIcon size={26} strokeWidth={1.6} />
                      </span>
                      <div className="min-w-0">
                        <div className="display-sm text-white text-[1.3rem] tracking-[0.01em]">
                          {active.name}
                        </div>
                        <div className="text-[0.85rem] leading-snug text-silver mt-1">
                          {active.blurb}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* progress dots */}
                <div className="relative mt-8 flex items-center gap-1.5">
                  {SECTORS.map((s, i) => (
                    <span
                      key={s.name}
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

        <motion.p
          className="mt-12 text-center text-[0.6875rem] uppercase tracking-[0.2em] text-[#6b7280] font-[var(--font-sans)]"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Client identities withheld for confidentiality · Representative sectors shown
        </motion.p>
      </div>
    </section>
  );
}
