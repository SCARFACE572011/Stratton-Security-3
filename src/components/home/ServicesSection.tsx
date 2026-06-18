"use client";

import Link from "next/link";
import { ArrowRight, Shield, ShieldCheck, Building2, Home, ShoppingBag, HardHat, Briefcase, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

const ICON_MAP = { Shield, ShieldCheck, Building2, Home, ShoppingBag, HardHat, Briefcase, Star } as const;

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white" aria-labelledby="services-heading">
      <div className="container-wide section-padding">
        {/* Centered editorial header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
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

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const IconComponent = ICON_MAP[service.icon as keyof typeof ICON_MAP] ?? Shield;
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
                    <IconComponent size={24} className="text-[#1a3a6b]" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="display-sm text-[1.375rem] text-[#0a0a0a] mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed flex-1">
                    {service.shortDescription}
                  </p>

                  {/* Link cue */}
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

        {/* Footer CTA */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex justify-center mt-16 md:mt-20"
        >
          <Link href="/services" className="btn-secondary group">
            View All Services
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
