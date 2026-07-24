"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type Faq = { q: string; a: string };

interface FaqAccordionProps {
  faqs: Faq[];
  phone: string;
  phoneE164: string;
}

export default function FaqAccordion({ faqs, phone, phoneE164 }: FaqAccordionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section className="section-padding bg-white" aria-labelledby="faq-heading">
      <div className="container-wide">
        {/* Centered editorial header */}
        <m.div {...reveal()} className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="label-overline mb-6">Common Questions</p>
          <span className="accent-line mx-auto mb-8" aria-hidden="true" />
          <h2
            id="faq-heading"
            className="display-title text-[#040d1e]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Everything You Need to Know
          </h2>
          <p className="text-[#4b5563] text-lg leading-relaxed mt-7 max-w-2xl mx-auto">
            Licensing, training, deployment, and coverage — the questions clients
            ask most before partnering with Stratton.
          </p>
        </m.div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <m.div
                key={i}
                {...reveal(Math.min(i, 6) * 0.06)}
                className={`card overflow-hidden ${isOpen ? "border-[#1a3a6b]/40" : ""}`}
              >
                <h3 className="m-0">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 text-left p-7 md:p-8 cursor-pointer"
                  >
                    <span className="font-[var(--font-display)] text-[1.0625rem] md:text-[1.1875rem] leading-snug text-[#0a0a0a]">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 w-9 h-9 rounded-lg border flex items-center justify-center transition-colors ${
                        isOpen
                          ? "bg-[#1a3a6b] border-[#1a3a6b] text-white"
                          : "border-platinum bg-[#f4f6f9] text-[#1a3a6b]"
                      }`}
                    >
                      <m.span
                        animate={shouldReduceMotion ? {} : { rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="flex"
                      >
                        <Plus size={18} strokeWidth={2} />
                      </m.span>
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={shouldReduceMotion ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={shouldReduceMotion ? { height: "auto", opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 md:px-8 pb-7 md:pb-8 -mt-1 text-[0.9375rem] md:text-base text-[#4b5563] leading-relaxed">
                        {item.a}
                      </p>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            );
          })}
        </div>

        {/* Still have questions — advisor card */}
        <m.div
          {...reveal(0.1)}
          className="max-w-3xl mx-auto mt-12 md:mt-16 card-dark p-8 md:p-10 text-center"
        >
          <p className="label-overline-light mb-4">Still Have Questions?</p>
          <h3 className="font-[var(--font-display)] display-sm text-[1.5rem] md:text-[1.875rem] text-white mb-4">
            Talk With a Security Advisor
          </h3>
          <p className="text-[0.9375rem] md:text-base text-silver leading-relaxed max-w-xl mx-auto mb-8">
            A Stratton advisor will answer your specific questions, walk through a
            risk assessment, and scope a program that fits your property.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact#request-form" className="btn-light group">
              Request a Free Assessment
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={`tel:${phoneE164}`} className="btn-on-dark">
              Call {phone}
            </a>
          </div>
        </m.div>
      </div>
    </section>
  );
}
