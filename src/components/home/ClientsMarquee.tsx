"use client";

import { useEffect, useState } from "react";
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
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { CLIENT_LOGOS } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

const INDUSTRY_ICON: Record<string, LucideIcon> = {
  "Residential HOA": Home,
  "Commercial Real Estate": Building2,
  Hospitality: BedDouble,
  Retail: ShoppingBag,
  Construction: HardHat,
  "Auto Dealership": Car,
  Corporate: Briefcase,
  Healthcare: HeartPulse,
};

const EDGE_FADE =
  "linear-gradient(90deg, transparent 0, #000 7%, #000 93%, transparent 100%)";

function ClientChip({ name, industry }: { name: string; industry: string }) {
  const Icon = INDUSTRY_ICON[industry] ?? ShieldCheck;
  return (
    <div className="flex items-center gap-3.5 rounded-xl border border-[rgba(192,200,212,0.14)] bg-[#16294a]/40 px-6 py-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#3f6bb0]/25 bg-[#3f6bb0]/10 text-[#6f9bd8]">
        <Icon size={18} strokeWidth={1.7} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="display-sm whitespace-nowrap text-[0.95rem] text-white">
          {name}
        </span>
        <span className="mono-tag mt-1 text-[0.6rem] text-steel">{industry}</span>
      </span>
    </div>
  );
}

export default function ClientsMarquee() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  // Gate the reduced-motion branch behind mount so server + first client render
  // are identical (animated). Only after mount do we swap to the static wall —
  // avoids a conditional-DOM hydration mismatch.
  useEffect(() => setMounted(true), []);
  const reduce = mounted && shouldReduceMotion;

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="mb-16 md:mb-20"
      role="region"
      aria-label="Worked with and trusted by"
    >
      <p className="label-overline mb-8 text-center">Worked With &amp; Trusted By</p>

      {reduce ? (
        /* Reduced motion — static, centered chip wall (no animation) */
        <div className="flex flex-wrap justify-center gap-4">
          {CLIENT_LOGOS.map((c) => (
            <ClientChip key={c.name} name={c.name} industry={c.industry} />
          ))}
        </div>
      ) : (
        <div
          className="clients-marquee relative overflow-hidden"
          style={{ maskImage: EDGE_FADE, WebkitMaskImage: EDGE_FADE }}
        >
          {/* trailing margin on every chip (incl. last) keeps -50% seamless */}
          <div className="marquee-track py-1">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="mr-4"
                aria-hidden={i >= CLIENT_LOGOS.length || undefined}
              >
                <ClientChip name={c.name} industry={c.industry} />
              </div>
            ))}
          </div>
        </div>
      )}

      <p className="mt-7 text-center text-[0.6875rem] uppercase tracking-[0.2em] text-[#6b7280] font-[var(--font-sans)]">
        Representative clients shown · Identities withheld for confidentiality
      </p>
    </motion.div>
  );
}
