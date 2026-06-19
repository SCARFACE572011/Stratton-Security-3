"use client";

import Link from "next/link";
import { ArrowRight, AlertTriangle, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ServiceArea, ServiceDetail } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ServiceAreaContent({
  area,
  relatedServices,
  otherAreas,
}: {
  area: ServiceArea;
  relatedServices: ServiceDetail[];
  otherAreas: ServiceArea[];
}) {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <>
      {/* Local risk profile + coverage + CTA */}
      <section className="section-padding bg-white" aria-labelledby="local-heading">
        <div className="container-wide">
          <motion.div {...reveal()} className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <p className="label-overline mb-6">Local Coverage</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              id="local-heading"
              className="display-title text-[#040d1e]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Security in {area.name}
            </h2>
            <p className="text-[#4b5563] text-lg leading-relaxed mt-7 max-w-2xl mx-auto">
              We build {area.name} programs around the way this market actually
              operates — its properties, its risks, and its rhythm.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-start">
            {/* Local risk profile */}
            <motion.div {...reveal(0.05)} className="lg:col-span-4">
              <div className="card flex flex-col h-full p-8">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl border border-platinum bg-[#f4f6f9] text-accent mb-7">
                  <AlertTriangle size={24} strokeWidth={1.5} />
                </span>
                <p className="label-overline mb-3">Local Risk Profile</p>
                <h3 className="display-sm text-[1.375rem] text-[#0a0a0a] mb-6">What We Address</h3>
                <ul className="space-y-3">
                  {area.concerns.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" aria-hidden="true" />
                      <span className="text-[0.9375rem] text-[#4b5563] leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Coverage + neighborhoods */}
            <motion.div {...reveal(0.12)} className="lg:col-span-5">
              <div className="card flex flex-col h-full p-8 md:p-10">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl border border-platinum bg-[#f4f6f9] text-accent mb-7">
                  <MapPin size={24} strokeWidth={1.5} />
                </span>
                <p className="label-overline mb-3">Where We Operate</p>
                <h3 className="display-sm text-[1.375rem] text-[#0a0a0a] mb-6">
                  Across {area.name}
                </h3>
                <p className="text-[1.0625rem] text-[#4b5563] leading-relaxed mb-7">{area.summary}</p>
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {area.neighborhoods.map((n) => (
                    <span
                      key={n}
                      className="inline-flex items-center rounded-full border border-platinum bg-[#f4f6f9] px-3.5 py-1.5 text-[0.75rem] tracking-[0.02em] text-[#4b5563]"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div {...reveal(0.18)} className="lg:col-span-3">
              <div className="card-dark flex flex-col h-full p-8 sticky top-24">
                <p className="label-overline-light mb-3">{area.region}</p>
                <h3 className="display-sm text-[1.25rem] text-white mb-4">
                  Protecting {area.name}
                </h3>
                <p className="text-[0.9375rem] text-silver leading-relaxed mb-7">
                  Talk to a Stratton advisor about a security program tailored to your
                  {" "}{area.name} property — typically deployable within 72 hours.
                </p>
                <Link href="/contact" className="btn-light group mt-auto w-full justify-center">
                  Request an Assessment
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommended services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-platinum-50" aria-labelledby="area-services-heading">
          <div className="container-wide">
            <motion.div {...reveal()} className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
              <p className="label-overline mb-6">Recommended For This Market</p>
              <span className="accent-line mx-auto mb-8" aria-hidden="true" />
              <h2
                id="area-services-heading"
                className="display-title text-[#040d1e]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Services Across {area.name}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((service, i) => (
                <motion.div key={service.slug} {...reveal(i * 0.08)}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="card group relative flex flex-col h-full rounded-xl p-8 md:p-10"
                  >
                    <h3 className="display-sm text-[1.375rem] text-[#0a0a0a] mb-3">{service.title}</h3>
                    <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed flex-1">
                      {service.shortDescription}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-[#1a3a6b]">
                      Learn More
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other areas */}
      <section className="section-padding bg-white" aria-labelledby="other-areas-heading">
        <div className="container-wide">
          <motion.div {...reveal()} className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <p className="label-overline mb-6">Explore More</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              id="other-areas-heading"
              className="display-title text-[#040d1e]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Other Areas We Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherAreas.map((a, i) => (
              <motion.div key={a.slug} {...reveal(i * 0.06)}>
                <Link
                  href={`/service-areas/${a.slug}`}
                  className="card group relative flex items-center justify-between gap-4 rounded-xl p-8"
                >
                  <span>
                    <span className="block display-sm text-[1.125rem] text-[#0a0a0a]">{a.name}</span>
                    <span className="block text-[0.75rem] text-steel mt-1">{a.region}</span>
                  </span>
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-[#1a3a6b] transition-transform group-hover:translate-x-1.5"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
