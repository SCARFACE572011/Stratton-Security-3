"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Testimonial, BarkReview } from "@/lib/content";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function StarRating({ count = 5, size = 14 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} className="text-[#6f9bd8] fill-[#6f9bd8]" />
      ))}
    </div>
  );
}

export default function TestimonialsSection({
  testimonials,
  barkReviews,
}: {
  testimonials: Testimonial[];
  barkReviews: BarkReview[];
}) {
  const shouldReduceMotion = useReducedMotion();

  const [per, setPer] = useState(1);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [liveMsg, setLiveMsg] = useState("");
  const startX = useRef(0);

  const total = testimonials.length;
  const pages = Math.max(1, Math.ceil(total / per));
  // Leftmost slide for the current page, clamped so the last page sits flush.
  const start = Math.max(0, Math.min(page * per, total - per));

  // Cards-per-view from breakpoint (layout itself is CSS-driven, SSR-safe);
  // `per` drives page count, clamping, and the off-screen `inert` range.
  useEffect(() => {
    const lg = window.matchMedia("(min-width: 1024px)");
    const md = window.matchMedia("(min-width: 768px)");
    const update = () => setPer(lg.matches ? 3 : md.matches ? 2 : 1);
    update();
    lg.addEventListener("change", update);
    md.addEventListener("change", update);
    return () => {
      lg.removeEventListener("change", update);
      md.removeEventListener("change", update);
    };
  }, []);

  // Keep the active page valid when the page count changes.
  useEffect(() => {
    setPage((p) => Math.min(p, pages - 1));
  }, [pages]);

  // Auto-advance (silent for screen readers; paused on hover/focus + reduced motion).
  useEffect(() => {
    if (shouldReduceMotion || paused || pages <= 1) return;
    const t = setInterval(() => setPage((p) => (p + 1) % pages), 5500);
    return () => clearInterval(t);
  }, [shouldReduceMotion, paused, pages]);

  // Manual navigation announces the change (auto-advance does not, to avoid spam).
  const goTo = (i: number) => {
    setPage(i);
    setLiveMsg(`Testimonial set ${i + 1} of ${pages}`);
  };
  const next = () => goTo((page + 1) % pages);
  const prev = () => goTo((page - 1 + pages) % pages);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
  };

  return (
    <section className="section-padding bg-white" aria-labelledby="testimonials-heading">
      <div className="container-wide">
        {/* Centered editorial header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-3xl text-center mb-14 md:mb-16"
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


        {/* Testimonials carousel */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative"
          role="group"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* Screen-reader announcement for manual navigation */}
          <p className="sr-only" aria-live="polite" aria-atomic="true">
            {liveMsg}
          </p>

          <div
            className="overflow-hidden"
            style={{ touchAction: "pan-y" }}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            <div
              className="testi-track -mx-3"
              style={{ ["--page" as string]: page, ["--count" as string]: total }}
            >
              {testimonials.map((item, i) => {
                const offscreen = i < start || i >= start + per;
                return (
                  <div
                    key={i}
                    className="testi-slide px-3"
                    aria-roledescription="slide"
                    inert={offscreen || undefined}
                  >
                    <blockquote className="card flex h-full flex-col gap-5 p-8 lg:p-10">
                      <div
                        className="font-[var(--font-display)] leading-none select-none -mb-4"
                        style={{ fontSize: "4rem", color: "rgba(63,107,176,0.22)" }}
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
                          <cite className="text-[0.9375rem] text-[#040d1e] not-italic font-medium block">
                            {item.author}
                          </cite>
                          <span className="text-[0.8125rem] text-[#6b7280]">{item.company}</span>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls — arrows + progress dots */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-platinum text-[#93a0b3] transition-colors hover:border-[#3f6bb0] hover:bg-[#3f6bb0]/10 hover:text-[#6f9bd8]"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-current={page === i}
                  aria-label={`Go to slide ${i + 1} of ${pages}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    page === i
                      ? "w-6 bg-[#6f9bd8]"
                      : "w-1.5 bg-[rgba(192,200,212,0.45)] hover:bg-[rgba(192,200,212,0.7)]",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-platinum text-[#93a0b3] transition-colors hover:border-[#3f6bb0] hover:bg-[#3f6bb0]/10 hover:text-[#6f9bd8]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Bark.com verified strip */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.12, duration: 0.65, ease: EASE }}
          className="card p-8 lg:p-10 mt-12"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="accent-line" />
            <p className="text-[0.6875rem] font-700 text-white tracking-[0.24em] uppercase">
              Verified on Bark.com
            </p>
            <span className="accent-line" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {barkReviews.map((review, i) => (
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
