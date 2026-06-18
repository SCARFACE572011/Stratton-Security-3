"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

const BENEFITS = [
  "Competitive compensation",
  "24/7 operations — flexible scheduling available",
  "TEAM, CPR, and professional development training provided",
  "Uniform and equipment provided",
  "Opportunities for advancement",
  "Work alongside current and former LAPD officers",
  "Supportive, professional team environment",
];

const REQUIREMENTS = [
  "Active California Guard Card (BSIS required)",
  "Clean background check",
  "Professional appearance and demeanor",
  "Reliable transportation",
  "Strong communication skills",
  "Ability to stand/walk for extended periods",
];

const OPEN_POSITIONS = [
  {
    title: "Unarmed Security Officer",
    type: "Full-Time / Part-Time",
    location: "Los Angeles, CA",
    area: "Various — Commercial & Residential",
  },
  {
    title: "Armed Security Officer",
    type: "Full-Time",
    location: "Los Angeles, CA",
    area: "Commercial & High-Security Properties",
  },
  {
    title: "Mobile Patrol Officer",
    type: "Full-Time",
    location: "Los Angeles & Southern California",
    area: "Residential & Commercial Patrol Routes",
  },
  {
    title: "Concierge / Lobby Officer",
    type: "Full-Time",
    location: "Los Angeles, CA",
    area: "Corporate & Luxury Residential Buildings",
  },
];

export default function CareersContent() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <div className="page-hero" style={{ minHeight: "65vh" }}>
        <Image
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
          alt="Professional security team"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Navy / black overlays only */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040d1e] via-[#040d1e]/70 to-[#040d1e]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d1e]/80 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#3f6bb0]/50 to-transparent" />

        <div className="relative z-10 container-wide pb-20 pt-32">
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="label-overline-light mb-6"
          >
            Join Our Team
          </motion.p>
          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
            className="display-hero text-white mb-7 max-w-3xl"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            Careers at
            <br />
            Stratton Security
          </motion.h1>
          <motion.span
            initial={shouldReduceMotion ? {} : { opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="accent-line mb-7 origin-left"
            style={{ background: "#3f6bb0" }}
            aria-hidden="true"
          />
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="text-silver text-[1.0625rem] leading-relaxed max-w-xl"
          >
            We&apos;re looking for disciplined, professional security officers to join
            our growing team. If you hold a California Guard Card and take pride in
            your work, we want to hear from you.
          </motion.p>
        </div>
      </div>

      {/* ── OPEN POSITIONS ───────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="openings-heading">
        <div className="container-wide">
          {/* Centered editorial header */}
          <motion.div
            {...reveal()}
            className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
          >
            <p className="label-overline mb-6">Current Openings</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              id="openings-heading"
              className="display-title text-[#040d1e]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Open Positions
            </h2>
            <p className="text-[#4b5563] text-lg leading-relaxed mt-7 max-w-2xl mx-auto">
              Build your career protecting the people, properties, and operations
              that depend on disciplined, professional security.
            </p>
          </motion.div>

          {/* Position cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OPEN_POSITIONS.map((position, i) => (
              <motion.div key={position.title} {...reveal(i * 0.08)}>
                <div className="card group relative flex h-full flex-col p-8 md:p-10">
                  <div className="mb-7 inline-flex w-14 h-14 items-center justify-center rounded-xl border border-platinum bg-[#f4f6f9] text-accent transition-colors group-hover:border-[#1a3a6b]/40">
                    <Shield size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="display-sm text-[1.375rem] text-[#0a0a0a] mb-4">
                    {position.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[0.8125rem] text-[#6b7280] mb-8">
                    <span>{position.type}</span>
                    <span className="text-[#1a3a6b]/40">·</span>
                    <span>{position.location}</span>
                    <span className="text-[#1a3a6b]/40">·</span>
                    <span>{position.area}</span>
                  </div>

                  <Link
                    href="/careers/apply"
                    className="mt-auto inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-[#1a3a6b]"
                  >
                    Apply Now
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1.5"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS + REQUIREMENTS ──────────────────────────────────── */}
      <section className="section-padding bg-platinum-50" aria-label="Benefits and requirements">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
            {/* Why Stratton */}
            <motion.div {...reveal()} className="card p-8 md:p-10">
              <div className="mb-7 inline-flex w-14 h-14 items-center justify-center rounded-xl border border-platinum bg-platinum-50 text-accent">
                <CheckCircle size={26} strokeWidth={1.75} />
              </div>
              <p className="label-overline mb-4">Why Stratton</p>
              <h3 className="display-sm text-[1.75rem] text-[#0a0a0a] mb-7">
                What You Can Expect
              </h3>
              <div className="space-y-4">
                {BENEFITS.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#1a3a6b] mt-1 shrink-0" strokeWidth={1.75} />
                    <span className="text-[0.9375rem] text-[#4b5563] leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div {...reveal(0.1)} className="card p-8 md:p-10">
              <div className="mb-7 inline-flex w-14 h-14 items-center justify-center rounded-xl border border-platinum bg-platinum-50 text-accent">
                <Shield size={26} strokeWidth={1.75} />
              </div>
              <p className="label-overline mb-4">Requirements</p>
              <h3 className="display-sm text-[1.75rem] text-[#0a0a0a] mb-7">
                What We Look For
              </h3>
              <div className="space-y-4">
                {REQUIREMENTS.map((req) => (
                  <div key={req} className="flex items-start gap-3">
                    <Shield size={16} className="text-[#1a3a6b] mt-1 shrink-0" strokeWidth={1.5} />
                    <span className="text-[0.9375rem] text-[#4b5563] leading-relaxed">{req}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── APPLY CTA ────────────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="apply-heading">
        <div className="container-wide">
          <motion.div {...reveal()} className="max-w-2xl mx-auto text-center">
            <p className="label-overline mb-6">Next Steps</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              id="apply-heading"
              className="display-title text-[#040d1e] mb-7"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Ready to Apply?
            </h2>
            <p className="text-[#4b5563] text-lg mb-10 leading-relaxed">
              Send your resume and California Guard Card details to our operations
              team. We&apos;ll follow up promptly to discuss next steps.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Career Application`}
                className="btn-primary group text-sm"
              >
                Email Your Application
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href={`tel:${SITE_CONFIG.phoneE164}`} className="btn-secondary text-sm">
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
