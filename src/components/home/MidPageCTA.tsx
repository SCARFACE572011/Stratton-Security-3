"use client";

import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import CallLink from "@/components/shared/CallLink";

/**
 * Mid-page nudge — deliberately a LIGHT, compact strip, not a second hero.
 * The full centered navy CTA lives once at the page foot (CTASection); this
 * is just an inline prompt so a visitor mid-scroll has a low-friction way in
 * without duplicating the closing moment.
 */
export default function MidPageCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-deep-navy border-y border-[rgba(192,200,212,0.16)]">
      <div className="container-wide py-12 md:py-14">
        <m.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-7 text-center md:flex-row md:items-center md:justify-between md:gap-8 md:text-left"
        >
          {/* Message */}
          <div className="flex items-start gap-4 md:items-center">
            <span className="hidden sm:inline-flex shrink-0 items-center justify-center w-11 h-11 rounded-xl border border-[rgba(192,200,212,0.22)] text-[#6f9bd8]">
              <ShieldCheck size={20} strokeWidth={1.75} />
            </span>
            <div>
              <h2 className="font-[var(--font-display)] text-white text-2xl md:text-[1.75rem] leading-snug">
                See how a Stratton program fits your property.
              </h2>
              <p className="text-silver text-[0.9375rem] mt-1.5">
                Free on-site assessment · Response within one business day
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 justify-center md:justify-end">
            <Link href="/contact#request-form" className="btn-light group">
              Request Free Assessment
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <CallLink location="mid-page-cta" className="btn-on-dark">
              <Phone size={16} />
              {SITE_CONFIG.phone}
            </CallLink>
          </div>
        </m.div>
      </div>
    </section>
  );
}
