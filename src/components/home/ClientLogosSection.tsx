"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  type LucideIcon,
} from "lucide-react";
import { CLIENT_LOGOS } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Per-sector icon + short descriptor so each tile reads as a clear sector. */
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

export default function ClientLogosSection() {
  const shouldReduceMotion = useReducedMotion();

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

        {/* Sector grid */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {CLIENT_LOGOS.map((client, i) => {
            const meta = SECTOR_META[client.industry] ?? { icon: Shield, blurb: "Tailored protection programs" };
            const Icon = meta.icon;
            return (
              <motion.div
                key={client.industry}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: (i % 4) * 0.06 + Math.floor(i / 4) * 0.08,
                  duration: 0.6,
                  ease: EASE,
                }}
                className="card group flex flex-col items-center justify-center text-center px-6 py-9"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-xl border border-[#3f6bb0]/25 bg-[#3f6bb0]/10 text-[#6f9bd8] transition-all duration-300 group-hover:bg-[#3f6bb0]/20 group-hover:border-[#3f6bb0]/45">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <h3 className="display-sm text-white text-[1.05rem] tracking-[0.02em] mt-5">
                  {client.industry}
                </h3>
                <span className="block h-px w-7 bg-[rgba(192,200,212,0.2)] my-3" />
                <p className="text-[0.8125rem] leading-snug text-[#93a0b3] font-[var(--font-sans)]">
                  {meta.blurb}
                </p>
              </motion.div>
            );
          })}
        </div>

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
