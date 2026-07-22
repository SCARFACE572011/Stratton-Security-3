"use client";

import Link from "next/link";
import { ArrowRight, AlertTriangle, Target } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import type { Industry, ServiceDetail } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function IndustryDetailContent({
  industry,
  relatedServices,
  otherIndustries,
}: {
  industry: Industry;
  relatedServices: ServiceDetail[];
  otherIndustries: Industry[];
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
      {/* Threats + Approach */}
      <section className="section-padding bg-white" aria-labelledby="program-heading">
        <div className="container-wide">
          {/* Centered editorial header */}
          <m.div {...reveal()} className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <p className="label-overline mb-6">Risk &amp; Response</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              id="program-heading"
              className="display-title text-[#040d1e]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              How We Protect {industry.label}
            </h2>
            <p className="text-[#4b5563] text-lg leading-relaxed mt-7 max-w-2xl mx-auto">
              Every deployment begins with a risk assessment specific to your
              industry&apos;s threat profile and operational requirements.
            </p>
          </m.div>

          <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-start">
            {/* Threats */}
            {industry.threats && industry.threats.length > 0 && (
              <m.div {...reveal(0.05)} className="lg:col-span-4">
                <div className="card flex flex-col h-full p-8">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl border border-platinum bg-[#f4f6f9] text-accent mb-7">
                    <AlertTriangle size={24} strokeWidth={1.5} />
                  </span>
                  <p className="label-overline mb-3">Risk Exposure</p>
                  <h3 className="display-sm text-[1.375rem] text-[#0a0a0a] mb-6">
                    Threats We Mitigate
                  </h3>
                  <ul className="space-y-3">
                    {industry.threats.map((threat) => (
                      <li key={threat} className="flex items-start gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50"
                          aria-hidden="true"
                        />
                        <span className="text-[0.9375rem] text-[#4b5563] leading-relaxed">
                          {threat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </m.div>
            )}

            {/* Approach */}
            {industry.approach && (
              <m.div {...reveal(0.12)} className="lg:col-span-5">
                <div className="card flex flex-col h-full p-8 md:p-10">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl border border-platinum bg-[#f4f6f9] text-accent mb-7">
                    <Target size={24} strokeWidth={1.5} />
                  </span>
                  <p className="label-overline mb-3">Our Approach</p>
                  <h3 className="display-sm text-[1.375rem] text-[#0a0a0a] mb-6">
                    How Stratton Deploys
                  </h3>
                  <p className="text-[1.0625rem] text-[#4b5563] leading-relaxed">
                    {industry.approach}
                  </p>
                </div>
              </m.div>
            )}

            {/* Tailored program CTA */}
            <m.div {...reveal(0.18)} className="lg:col-span-3">
              <div className="card-dark flex flex-col h-full p-8 sticky top-24">
                <p className="label-overline-light mb-3">Tailored Program</p>
                <h3 className="display-sm text-[1.25rem] text-white mb-4">
                  Built For {industry.label}
                </h3>
                <p className="text-[0.9375rem] text-silver leading-relaxed mb-7">
                  Programs are scoped to your environment, threat profile, and
                  operational requirements — never off the shelf.
                </p>
                <Link
                  href="/contact"
                  className="btn-light group mt-auto w-full justify-center"
                >
                  Request an Assessment
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Applicable services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-platinum-50" aria-labelledby="services-heading">
          <div className="container-wide">
            <m.div {...reveal()} className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
              <p className="label-overline mb-6">Applicable Services</p>
              <span className="accent-line mx-auto mb-8" aria-hidden="true" />
              <h2
                id="services-heading"
                className="display-title text-[#040d1e]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Services For This Vertical
              </h2>
              <p className="text-[#4b5563] text-lg leading-relaxed mt-7 max-w-2xl mx-auto">
                The protection programs most often deployed to defend{" "}
                {industry.label.toLowerCase()} operations.
              </p>
            </m.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((service, i) => (
                <m.div key={service.slug} {...reveal(i * 0.08)}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="card group relative flex flex-col h-full rounded-xl p-8 md:p-10"
                  >
                    <h3 className="display-sm text-[1.375rem] text-[#0a0a0a] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed flex-1">
                      {service.shortDescription}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-[#1a3a6b]">
                      Learn More
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1.5"
                      />
                    </span>
                  </Link>
                </m.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other industries */}
      <section className="section-padding bg-white" aria-labelledby="other-heading">
        <div className="container-wide">
          <m.div {...reveal()} className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <p className="label-overline mb-6">Explore More</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              id="other-heading"
              className="display-title text-[#040d1e]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Other Industries We Protect
            </h2>
          </m.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherIndustries.map((ind, i) => (
              <m.div key={ind.slug} {...reveal(i * 0.06)}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="card group relative flex items-center justify-between gap-4 rounded-xl p-8"
                >
                  <span className="display-sm text-[1.125rem] text-[#0a0a0a]">
                    {ind.label}
                  </span>
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-[#1a3a6b] transition-transform group-hover:translate-x-1.5"
                  />
                </Link>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
