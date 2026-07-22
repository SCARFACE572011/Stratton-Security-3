"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Home,
  Building2,
  Building,
  BedDouble,
  ShoppingBag,
  HardHat,
  Car,
  HeartPulse,
  GraduationCap,
  Factory,
  Landmark,
  Banknote,
  Truck,
  TrainFront,
  Shield,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

// Icon + short readout blurb for every industry vertical (keyed by slug).
const SECTOR_META: Record<string, { icon: LucideIcon; blurb: string }> = {
  "commercial-real-estate": { icon: Building2, blurb: "Office towers, campuses & multi-tenant" },
  retail: { icon: ShoppingBag, blurb: "Shopping centers, stores & loss prevention" },
  hospitality: { icon: BedDouble, blurb: "Hotels, resorts & entertainment venues" },
  healthcare: { icon: HeartPulse, blurb: "Hospitals, clinics & medical campuses" },
  education: { icon: GraduationCap, blurb: "Universities, K–12 & campus events" },
  industrial: { icon: Factory, blurb: "Plants, processing & industrial parks" },
  government: { icon: Landmark, blurb: "Municipal buildings & civic infrastructure" },
  financial: { icon: Banknote, blurb: "Banks, credit unions & data centers" },
  "auto-dealership": { icon: Car, blurb: "Lots, showrooms & service bays" },
  estates: { icon: Home, blurb: "Estates & high-net-worth residences" },
  construction: { icon: HardHat, blurb: "Active sites, equipment & materials" },
  logistics: { icon: Truck, blurb: "Warehouses, freight hubs & cargo" },
  transit: { icon: TrainFront, blurb: "Transit hubs & high-traffic platforms" },
  condominiums: { icon: Building, blurb: "Condos, high-rises & HOA boards" },
};

const SECTORS = INDUSTRIES.map((ind) => ({
  name: ind.label,
  ...(SECTOR_META[ind.slug] ?? { icon: Shield, blurb: "Tailored protection programs" }),
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
        <m.div
          className="mx-auto max-w-2xl text-center"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="label-overline mb-6">Industries Served</p>
          <span className="accent-line mx-auto mb-7" />
          <h2
            id="clients-heading"
            className="display-title text-[#040d1e]"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            Protecting Every Sector
          </h2>
          <p className="mt-7 text-[1.0625rem] leading-relaxed text-[#4b5563] font-[var(--font-sans)]">
            Stratton&apos;s programs span 14+ industry verticals — from luxury
            residential and commercial real estate to healthcare, government, and
            distribution. Whatever your sector, we build a program around its
            specific risk landscape.
          </p>
        </m.div>

        {/* Industries Served — single animated card cycling all 14 verticals */}
        <m.div
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
                <p className="label-overline mb-5">14+ Verticals</p>
                <h3
                  className="display-title text-white"
                  style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}
                >
                  A Program For Every Sector
                </h3>
                <p className="mt-5 text-[1rem] leading-relaxed text-silver max-w-md">
                  From HOAs, estates, and corporate campuses to hospitality, retail,
                  healthcare, construction, government, and logistics — Stratton
                  designs a dedicated program for each environment.
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
                <div className="relative flex h-[104px] items-center gap-5">
                  <AnimatePresence mode="wait">
                    <m.div
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
                        <div className="display-sm text-white text-[1.25rem] leading-tight tracking-[0.01em]">
                          {active.name}
                        </div>
                        <div className="text-[0.85rem] leading-snug text-silver mt-1.5">
                          {active.blurb}
                        </div>
                      </div>
                    </m.div>
                  </AnimatePresence>
                </div>

                {/* progress dots */}
                <div className="relative mt-7 flex flex-wrap items-center gap-1.5">
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
        </m.div>

      </div>
    </section>
  );
}
