"use client";

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
import { m, useReducedMotion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

const ICON_MAP = { Shield, ShieldCheck, Building2, Home, ShoppingBag, HardHat, Briefcase, Star } as const;

const EASE = [0.22, 1, 0.36, 1] as const;

const PROGRAMS = SERVICES.map((s) => ({
  slug: s.slug,
  title: s.title,
  desc: s.shortDescription,
  icon: ICON_MAP[s.icon as keyof typeof ICON_MAP] ?? Shield,
}));

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" as const },
    transition: { duration: 0.6, delay, ease: EASE },
  });

  return (
    <section className="bg-white" aria-labelledby="services-heading">
      <div className="container-wide section-padding">
        {/* Centered editorial header */}
        <m.div {...reveal()} className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
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
        </m.div>

        {/* Direct grid — every program is its own clickable entry, distinct from
            the cycling Industries readout that precedes it on the page.
            10 programs → 3-col leaves one orphan on the last row; center it at
            lg so the grid reads balanced (sm's 2-col already lands even). */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 lg:[&>*:last-child]:col-start-2">
          {PROGRAMS.map((program, i) => {
            const Icon = program.icon;
            return (
              <m.div key={program.slug} {...reveal(i * 0.06)}>
                <Link
                  href={`/services/${program.slug}`}
                  className="card group flex h-full flex-col p-8 lg:p-9"
                >
                  <div className="w-12 h-12 rounded-xl border border-platinum bg-platinum-50 flex items-center justify-center mb-6">
                    <Icon size={20} className="text-accent" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-[var(--font-sans)] text-lg font-semibold text-[#0a0a0a] mb-3">
                    {program.title}
                  </h3>
                  <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed">
                    {program.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#6f9bd8]">
                    Learn More
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </m.div>
            );
          })}
        </div>

        {/* View-all anchor */}
        <m.div {...reveal(0.1)} className="mt-12 text-center">
          <Link href="/services" className="btn-primary">
            View All Services
            <ArrowRight size={14} />
          </Link>
        </m.div>
      </div>
    </section>
  );
}
