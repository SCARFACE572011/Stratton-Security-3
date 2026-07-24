"use client";

import { m, useReducedMotion } from "framer-motion";
import { Shield, Eye, Scale, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const CERTIFICATIONS = [
  { title: "CA PPO License", value: `#${SITE_CONFIG.licenseNumber}`, sub: "Bureau of Security & Investigative Services" },
  { title: "TEAM Certified", value: "BSIS", sub: "Techniques for Effective Alcohol Management" },
  { title: "First Aid & CPR", value: "Certified", sub: "All active officers" },
  { title: "Power to Arrest", value: "Certified", sub: "Full compliance program" },
];

// Pair each core value with an icon + descriptor, keyed off SITE_CONFIG.values.
const VALUE_META: Record<string, { Icon: typeof Shield; line: string }> = {
  Strength: { Icon: Shield, line: "The presence and resolve of officers drawn from military and law-enforcement service." },
  Vigilance: { Icon: Eye, line: "Always watchful, always ready — 24/7/365 awareness across every post we hold." },
  Integrity: { Icon: Scale, line: "Disciplined conduct and full transparency, on duty and off." },
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ValuesSection() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section className="section-padding bg-platinum-50" aria-label="Our values and certifications">
      <div className="container-wide">
        {/* Centered editorial header */}
        <m.div {...reveal()} className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="label-overline mb-6">Our Foundation</p>
          <span className="accent-line mx-auto mb-8" />
          <h2
            className="display-title text-[#040d1e]"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            {SITE_CONFIG.mission}
          </h2>
          <p className="text-[#4b5563] text-lg leading-relaxed mt-7 max-w-2xl mx-auto">
            {SITE_CONFIG.brand_promise}
          </p>
        </m.div>

        {/* Core values — evenly spaced, elegant centered items */}
        <div className="grid sm:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20">
          {SITE_CONFIG.values.map((value, i) => {
            const meta = VALUE_META[value] ?? { Icon: Shield, line: "" };
            const Icon = meta.Icon;
            return (
              <m.div
                key={value}
                {...reveal(i * 0.08)}
                className="card card-static flex flex-col items-center text-center p-8 md:p-10"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl border border-platinum bg-platinum-50 text-accent mb-7">
                  <Icon size={26} strokeWidth={1.75} />
                </span>
                <span className="block font-[var(--font-display)] text-[0.6875rem] tracking-[0.24em] text-steel mb-3">
                  0{i + 1}
                </span>
                <h3 className="font-[var(--font-display)] text-2xl text-[#0a0a0a] mb-3">
                  {value}
                </h3>
                <p className="text-[#4b5563] text-[0.9375rem] leading-relaxed">
                  {meta.line}
                </p>
              </m.div>
            );
          })}
        </div>

        {/* Vision line */}
        <m.p
          {...reveal()}
          className="max-w-2xl mx-auto text-center font-[var(--font-display)] text-xl md:text-2xl leading-snug text-[#040d1e] mb-16 md:mb-20"
        >
          &ldquo;{SITE_CONFIG.vision}&rdquo;
        </m.p>

        {/* Credentials — centered subheader + modern white cards */}
        <m.div {...reveal()} className="max-w-2xl mx-auto text-center mb-12">
          <p className="label-overline mb-6">Credentials &amp; Compliance</p>
          <span className="accent-line mx-auto" />
        </m.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {CERTIFICATIONS.map((cert, i) => (
            <m.div
              key={cert.title}
              {...reveal(i * 0.08)}
              className="card card-static flex flex-col p-8"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-platinum bg-platinum-50 text-accent mb-6">
                <ShieldCheck size={22} strokeWidth={1.75} />
              </span>
              <p className="text-[0.6875rem] text-steel tracking-[0.18em] uppercase mb-2">{cert.title}</p>
              <p className="font-[var(--font-display)] text-2xl text-white mb-3">{cert.value}</p>
              <p className="text-[0.8125rem] text-[#4b5563] leading-relaxed">{cert.sub}</p>
            </m.div>
          ))}
        </div>

        {/* Insurance / compliance note — compact bar with icon */}
        <m.div
          {...reveal(0.1)}
          className="card card-static max-w-4xl mx-auto mt-8 p-6 md:p-7 flex items-start gap-4 md:gap-5 text-left border-l-2 border-l-[#3f6bb0]"
        >
          <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl border border-platinum bg-platinum-50 text-accent">
            <ShieldCheck size={20} strokeWidth={1.75} />
          </span>
          <div>
            <p className="text-[0.6875rem] text-steel tracking-[0.18em] uppercase mb-1.5">Licensed · Bonded · Insured</p>
            <p className="text-[0.9375rem] text-[#b7c2d1] leading-relaxed">
              All Stratton officers meet or exceed California state licensing requirements
              under BSIS. We carry comprehensive general liability, commercial auto, and
              workers&apos; compensation coverage across every operation.
            </p>
          </div>
        </m.div>
      </div>
    </section>
  );
}
