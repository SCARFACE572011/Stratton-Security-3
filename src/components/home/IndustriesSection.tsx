"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { INDUSTRIES } from "@/lib/constants";

export default function IndustriesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-white" aria-labelledby="industries-heading">
      <div className="container-wide">
        {/* Centered editorial header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center mb-16 md:mb-20"
        >
          <p className="label-overline mb-6">Industries Served</p>
          <span className="accent-line mx-auto mb-8" />
          <h2
            id="industries-heading"
            className="display-title text-[#040d1e]"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            Protecting every industry sector
          </h2>
          <p className="text-[#4b5563] text-lg leading-relaxed mt-7 mx-auto max-w-2xl font-[var(--font-sans)]">
            Stratton&apos;s security programs span 14+ industry verticals — from
            luxury residential and commercial real estate to government facilities
            and distribution centers. Whatever your sector, we build programs that
            match your specific risk landscape.
          </p>
        </motion.div>

        {/* Modern multi-column grid of industry tiles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.slug}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: (i % 3) * 0.08 + Math.floor(i / 3) * 0.04,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={`/industries/${industry.slug}`}
                className="card group flex h-full flex-col rounded-xl p-8 md:p-9"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="display-sm text-[1.375rem] text-[#040d1e] leading-snug">
                    {industry.label}
                  </h3>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-platinum text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                {industry.summary && (
                  <p className="mt-5 text-[0.9375rem] leading-relaxed text-[#4b5563] font-[var(--font-sans)] line-clamp-3">
                    {industry.summary}
                  </p>
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex justify-center"
        >
          <Link href="/industries" className="btn-primary group">
            Explore All Industries
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
