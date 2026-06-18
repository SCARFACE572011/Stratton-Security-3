"use client";

import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { INDUSTRIES } from "@/lib/constants";

const INDUSTRY_DESCRIPTIONS: Record<string, string> = {
  "commercial-real-estate":
    "Office buildings, corporate campuses, business parks, and mixed-use properties.",
  "retail":
    "Retail centers, shopping malls, big-box stores, and high-street boutiques.",
  "hospitality":
    "Hotels, resorts, casinos, entertainment venues, and luxury properties.",
  "healthcare":
    "Hospitals, medical offices, clinics, and healthcare campuses.",
  "education":
    "Universities, K–12 schools, community colleges, and educational campuses.",
  "industrial":
    "Manufacturing plants, processing facilities, and industrial parks.",
  "government":
    "Municipal buildings, courthouses, federal facilities, and public infrastructure.",
  "financial":
    "Banks, credit unions, investment firms, and financial data centers.",
  "auto-dealership":
    "Auto dealerships, lot security, inventory protection, and service centers.",
  "estates":
    "Luxury private residences, estates, and high-net-worth home protection.",
  "construction":
    "Active construction sites, job site equipment, and development projects.",
  "logistics":
    "Distribution centers, warehouses, freight hubs, and supply chain operations.",
  "transit":
    "Train stations, bus terminals, transit hubs, and transportation infrastructure.",
  "condominiums":
    "Condominium complexes, high-rises, and multi-unit residential buildings.",
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function IndustriesGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white" aria-labelledby="industries-grid-heading">
      <div className="container-wide section-padding">
        {/* Centered editorial header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <p className="label-overline mb-6">Sectors We Serve</p>
          <span className="accent-line mx-auto mb-8" aria-hidden="true" />
          <h2
            id="industries-grid-heading"
            className="display-title text-[#040d1e]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Specialized Protection, Sector by Sector
          </h2>
          <p className="text-[#4b5563] text-lg leading-relaxed mt-7 max-w-2xl mx-auto">
            Every environment carries its own risk profile. We build security
            programs around the specific threats, operations, and people of each
            industry we serve.
          </p>
        </motion.div>

        {/* Industry cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.slug}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6, ease: EASE }}
            >
              <Link
                href={`/industries/${industry.slug}`}
                className="card group relative flex flex-col h-full rounded-xl p-8"
              >
                <div className="flex items-start justify-between mb-7">
                  {/* Icon chip */}
                  <span className="w-14 h-14 rounded-xl border border-platinum bg-[#f4f6f9] flex items-center justify-center shrink-0 transition-colors group-hover:border-[#1a3a6b]/40">
                    <Building2 size={24} className="text-[#1a3a6b]" strokeWidth={1.5} />
                  </span>
                  <span className="font-[var(--font-display)] text-[1.75rem] text-platinum font-800 leading-none mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="display-sm text-[1.375rem] text-[#0a0a0a] mb-3">
                  {industry.label}
                </h3>

                {/* Description */}
                <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed flex-1">
                  {INDUSTRY_DESCRIPTIONS[industry.slug] ??
                    "Professional security services tailored to your industry."}
                </p>

                {/* Link cue */}
                <span className="mt-8 inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-[#1a3a6b]">
                  Explore Sector
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1.5"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
