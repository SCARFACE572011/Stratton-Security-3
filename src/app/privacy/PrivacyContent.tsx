"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type Section = { title: string; body: string };

export default function PrivacyContent({
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
    <section className="section-padding bg-white">
      <div className="container-wide max-w-3xl">
        {/* Intro / lede */}
        <motion.p
          {...reveal()}
          className="text-[#4b5563] text-[1.0625rem] leading-relaxed mb-14 pb-14 border-b border-platinum"
        >
          {intro}
        </motion.p>

        <div className="space-y-14 md:space-y-16">
          {sections.map((section, i) => (
            <motion.article key={section.title} {...reveal(Math.min(i, 4) * 0.06)}>
              <h2
                className="display-title text-[#040d1e] mb-5"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
              >
                {section.title}
              </h2>
              <span className="accent-line mb-6" aria-hidden="true" />
              <p className="text-[#4b5563] text-[1.0625rem] leading-relaxed">
                {section.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
