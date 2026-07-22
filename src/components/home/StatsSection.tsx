"use client";

import { useEffect, useRef, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { STATS } from "@/lib/constants";

function AnimatedCounter({
  value,
  suffix,
  isVisible,
}: {
  value: number;
  suffix: string;
  isVisible: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  // Start at the real value so server HTML (and no-JS/crawler views) shows
  // "500+" instead of "0 +"; the count-up still runs from 0 once scrolled into view.
  const [count, setCount] = useState(value);
  const hasAnimated = useRef(false);
  const mountedAt = useRef(0);
  if (!mountedAt.current) mountedAt.current = performance.now();

  useEffect(() => {
    if (!isVisible || hasAnimated.current || shouldReduceMotion) {
      if (shouldReduceMotion) setCount(value);
      return;
    }
    hasAnimated.current = true;
    // Already on screen at page load (deep link / tall viewport): keep the real
    // value instead of visibly snapping back to 0 and re-counting.
    if (performance.now() - mountedAt.current < 800) return;
    const duration = 2000;
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(value);
    };
    requestAnimationFrame(step);
  }, [isVisible, value, shouldReduceMotion]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-light section-padding border-y border-platinum"
      aria-label="Company statistics"
    >
      <div className="container-wide">
        {/* Centered editorial header */}
        <m.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center mb-16 lg:mb-20"
        >
          <p className="label-overline mb-6">By the Numbers</p>
          <span className="accent-line mx-auto mb-8" />
          <h2
            className="display-title text-[#040d1e]"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            A record measured in trust
          </h2>
          <p className="mt-6 text-[1.125rem] leading-relaxed text-[#4b5563]">
            Years of disciplined service, statewide coverage, and an unbroken
            commitment to readiness — the figures behind Stratton&apos;s
            reputation for protection.
          </p>
        </m.div>

        {/* Numerals */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 lg:gap-y-0 lg:divide-x lg:divide-platinum">
          {STATS.map((stat, i) => (
            <m.div
              key={i}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col items-center text-center px-6 lg:px-10 cursor-default"
            >
              <div
                className="display-hero leading-none text-[#040d1e]"
                style={{ fontSize: "clamp(3.25rem, 6.5vw, 5.25rem)" }}
                aria-label={`${stat.value}${stat.suffix}`}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>

              {/* Accent-blue divider mark */}
              <div className="flex items-center justify-center gap-1.5 mt-6 mb-5">
                <span className="w-8 h-px bg-[#1a3a6b]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#1a3a6b]" />
              </div>

              <p className="text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-[#6b7280] group-hover:text-[#4b5563] transition-colors duration-300">
                {stat.label}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
