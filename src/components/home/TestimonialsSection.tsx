"use client";

import { Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { TESTIMONIALS, BARK_REVIEWS } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

function StarRating({ count = 5, size = 14 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} className="text-[#1a3a6b] fill-[#1a3a6b]" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-white" aria-labelledby="testimonials-heading">
      <div className="container-wide">
        {/* Centered editorial header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-3xl text-center mb-16 md:mb-20"
        >
          <p className="label-overline mb-6">Client Testimonials</p>
          <span className="accent-line mx-auto mb-7" />
          <h2
            id="testimonials-heading"
            className="display-title text-[#040d1e]"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            Trusted by clients across Los Angeles
          </h2>
          <p className="mt-7 text-[1.0625rem] leading-relaxed text-[#4b5563]">
            From private estates to corporate campuses, clients rely on Stratton for
            disciplined, dependable protection — and rate us 5.0 on Bark.com across
            verified reviews.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map((item, i) => (
            <motion.blockquote
              key={i}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.65, ease: EASE }}
              className="card p-8 lg:p-10 flex flex-col gap-5"
            >
              <div
                className="font-[var(--font-display)] leading-none select-none -mb-4"
                style={{ fontSize: "4rem", color: "rgba(26,58,107,0.12)" }}
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <StarRating count={item.stars} />
              <p className="text-[1.0625rem] text-[#4b5563] leading-relaxed flex-1">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-4 pt-5 border-t border-platinum">
                <div className="w-11 h-11 rounded-full bg-platinum-50 flex items-center justify-center shrink-0 text-[0.8125rem] font-600 text-[#1a3a6b] font-[var(--font-sans)]">
                  {item.initials}
                </div>
                <div>
                  <cite className="text-[0.9375rem] text-[#040d1e] not-italic font-medium block">{item.author}</cite>
                  <span className="text-[0.8125rem] text-[#6b7280]">{item.company}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {/* Bark.com verified strip */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.12, duration: 0.65, ease: EASE }}
          className="card p-8 lg:p-10"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="accent-line" />
            <p className="text-[0.6875rem] font-700 text-[#1a3a6b] tracking-[0.24em] uppercase">
              Verified on Bark.com
            </p>
            <span className="accent-line" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {BARK_REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.18 + i * 0.08, duration: 0.6, ease: EASE }}
                className="space-y-3"
              >
                <StarRating count={review.stars} />
                <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
                <div className="pt-1">
                  <p className="text-[0.9375rem] text-[#040d1e] font-medium">{review.author}</p>
                  <p className="text-[0.8125rem] text-[#6b7280]">{review.role}</p>
                  <p className="text-[0.75rem] text-[#c0c8d4] mt-0.5">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
