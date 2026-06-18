"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type Section = { title: string; body: string };

export default function TermsContent({
  intro,
  sections,
}: {
  intro: string;
  sections: Section[];
}) {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section className="section-padding bg-white" aria-label="Terms of Service">
      <div className="container-wide">
        {/* Centered editorial intro */}
        <motion.div
          {...reveal()}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <p className="label-overline mb-6">Website Terms</p>
          <span className="accent-line mx-auto mb-8" aria-hidden="true" />
          <h2
            className="display-title text-[#040d1e]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            The Agreement
          </h2>
          <p className="text-[#4b5563] text-lg leading-relaxed mt-7 max-w-2xl mx-auto">
            {intro}
          </p>
        </motion.div>

        {/* Reading column — serif section headings, generous measure */}
        <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
          {sections.map((section, i) => (
            <motion.article
              key={section.title}
              {...reveal(i * 0.06)}
              className="card p-8 md:p-10"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-[var(--font-display)] text-[0.8125rem] tracking-[0.24em] text-steel shrink-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-sm text-[1.5rem] md:text-[1.625rem] text-[#0a0a0a]">
                  {section.title}
                </h3>
              </div>
              <p className="text-[0.9375rem] md:text-base text-[#4b5563] leading-relaxed pl-0 sm:pl-[calc(0.8125rem+1rem)]">
                {section.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
