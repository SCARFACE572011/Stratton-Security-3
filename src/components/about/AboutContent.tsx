"use client";

import { Shield, Eye, Scale, ShieldCheck, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SITE_CONFIG, DIFFERENTIATORS } from "@/lib/constants";
import type { BarkReview } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

// Pair each core value with an icon, keyed off SITE_CONFIG.values.
const VALUE_ICON: Record<string, typeof Shield> = {
  Strength: Shield,
  Vigilance: Eye,
  Integrity: Scale,
};

export default function AboutContent({ barkReviews }: { barkReviews: BarkReview[] }) {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" } as const,
    transition: { duration: 0.7, delay: shouldReduceMotion ? 0 : delay, ease: EASE },
  });

  return (
    <>
      {/* Mission & Vision — two-column split, bigger serif + motion */}
      <section className="section-padding bg-white" aria-labelledby="mission-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div {...reveal()}>
              <p className="label-overline mb-6">Our Mission</p>
              <span className="accent-line mb-8" aria-hidden="true" />
              <h2
                id="mission-heading"
                className="display-title text-[#040d1e] mb-7"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                {SITE_CONFIG.mission}
              </h2>
              <p className="text-[#4b5563] text-lg leading-relaxed">
                Every property is different. Every client&apos;s security needs are unique.
                Stratton Security Group builds custom security programs tailored to your
                specific risk profile, property type, and operational requirements —
                delivered by licensed, trained professionals committed to your safety.
              </p>
            </motion.div>

            <motion.div {...reveal(0.1)}>
              <p className="label-overline mb-6">Our Vision</p>
              <span className="accent-line mb-8" aria-hidden="true" />
              <h2
                className="display-title text-[#040d1e] mb-7"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                California&apos;s Gold Standard
              </h2>
              <p className="text-[#4b5563] text-lg leading-relaxed mb-8">
                {SITE_CONFIG.vision}
              </p>
              <blockquote className="border-l-2 border-accent pl-6">
                <p className="text-[0.9375rem] text-[#6b7280] italic leading-relaxed">
                  Excellence isn&apos;t just a tagline — it&apos;s a standard we hold ourselves
                  to in every assignment, every patrol, every interaction.
                </p>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values — centered editorial header + modern white cards */}
      <section className="section-padding bg-platinum-50" aria-labelledby="values-heading">
        <div className="container-wide">
          <motion.div {...reveal()} className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <p className="label-overline mb-6">Our Core Values</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              id="values-heading"
              className="display-title text-[#040d1e]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              What We Stand For
            </h2>
            <p className="text-[#4b5563] text-lg leading-relaxed mt-7 max-w-2xl mx-auto">
              The principles that govern every post we hold and every officer we deploy.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8 md:gap-10">
            {SITE_CONFIG.values.map((value, i) => {
              const Icon = VALUE_ICON[value] ?? Shield;
              return (
                <motion.div
                  key={value}
                  {...reveal(i * 0.08)}
                  className="card flex flex-col items-center text-center p-8 md:p-10"
                >
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl border border-platinum bg-platinum-50 text-accent mb-7">
                    <Icon size={26} strokeWidth={1.75} />
                  </span>
                  <span className="block font-[var(--font-display)] text-[0.6875rem] tracking-[0.24em] text-steel mb-3">
                    0{i + 1}
                  </span>
                  <h3 className="font-[var(--font-display)] text-2xl text-[#0a0a0a]">
                    {value}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentiators — centered editorial header + modern white cards */}
      <section className="section-padding bg-white" aria-labelledby="why-heading">
        <div className="container-wide">
          <motion.div {...reveal()} className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <p className="label-overline mb-6">Our Commitment</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              id="why-heading"
              className="display-title text-[#040d1e]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Why Choose Stratton
            </h2>
            <p className="text-[#4b5563] text-lg leading-relaxed mt-7 max-w-2xl mx-auto">
              What sets our protective service apart — from credentials to conduct.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIFFERENTIATORS.map((item, i) => (
              <motion.div
                key={i}
                {...reveal(i * 0.08)}
                className="card flex flex-col h-full p-8"
              >
                <div className="w-14 h-14 rounded-xl border border-platinum bg-[#f4f6f9] flex items-center justify-center shrink-0 mb-7">
                  <ShieldCheck size={24} className="text-[#1a3a6b]" strokeWidth={1.5} />
                </div>
                <h3 className="display-sm text-[1.25rem] text-[#0a0a0a] mb-3">
                  {item.title}
                </h3>
                <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified reviews — centered editorial header + modern white cards */}
      <section className="section-padding bg-white" aria-labelledby="reviews-heading">
        <div className="container-wide">
          <motion.div {...reveal()} className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <p className="label-overline mb-6">Client Feedback</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              id="reviews-heading"
              className="display-title text-[#040d1e]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Verified on <span className="text-accent">Bark.com</span>
            </h2>
            <p className="text-[#4b5563] text-lg leading-relaxed mt-7 max-w-2xl mx-auto">
              Independent, verified feedback from the clients we protect.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {barkReviews.map((review, i) => (
              <motion.div
                key={i}
                {...reveal(i * 0.08)}
                className="card flex flex-col h-full p-8"
              >
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: review.stars }).map((_, s) => (
                    <Star key={s} size={14} className="text-accent" fill="#1a3a6b" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed italic flex-1 mb-6">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="border-t border-platinum pt-5">
                  <p className="text-[0.875rem] text-[#0a0a0a] font-medium">{review.author}</p>
                  <p className="text-[0.75rem] text-steel mt-0.5">{review.role}</p>
                  <p className="text-[0.6875rem] text-silver mt-0.5">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
