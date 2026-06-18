"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CLIENT_LOGOS } from "@/lib/constants";

function getInitials(name: string): string {
  const words = name.replace(/&/g, "and").split(/\s+/).filter(Boolean);
  const stop = new Set(["of", "the", "and", "for", "group", "partners", "association"]);
  const meaningful = words.filter((w) => !stop.has(w.toLowerCase()));
  const source = meaningful.length >= 2 ? meaningful : words;
  return source.slice(0, 3).map((w) => w[0]).join("").toUpperCase();
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ClientLogosSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="section-tint section-padding"
      aria-labelledby="clients-heading"
    >
      <div className="container-wide">
        {/* Centered editorial header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="label-overline mb-6">Trusted By</p>
          <span className="accent-line mx-auto mb-7" />
          <h2
            id="clients-heading"
            className="display-title text-[#040d1e]"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            Relied On Across Los Angeles
          </h2>
          <p className="mt-7 text-[1.0625rem] leading-relaxed text-[#4b5563] font-[var(--font-sans)]">
            From Beverly Hills residential communities to Century City corporate
            campuses, Stratton protects properties trusted by property managers,
            HOA boards, and executives across Southern California.
          </p>
        </motion.div>

        {/* Modern responsive grid of monogram tiles */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {CLIENT_LOGOS.map((client, i) => {
            const initials = getInitials(client.name);
            return (
              <motion.div
                key={client.name}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: (i % 4) * 0.06 + Math.floor(i / 4) * 0.08,
                  duration: 0.6,
                  ease: EASE,
                }}
                className="card group flex flex-col items-center justify-center aspect-[4/3] px-6 py-8 text-center"
                title={client.name}
              >
                <div className="font-[var(--font-display)] text-[1.875rem] md:text-[2.125rem] tracking-[0.04em] leading-none text-[#11264a] transition-colors duration-300 group-hover:text-accent">
                  {initials}
                </div>
                <div className="mt-4 h-px w-7 bg-platinum transition-colors duration-300 group-hover:bg-accent/50" />
                <div className="mt-4 text-[0.6875rem] uppercase tracking-[0.18em] text-[#6b7280]">
                  {client.industry}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="mt-12 text-center text-[0.6875rem] uppercase tracking-[0.2em] text-[#6b7280] font-[var(--font-sans)]"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Client identities withheld for confidentiality · Representative sectors shown
        </motion.p>
      </div>
    </section>
  );
}
