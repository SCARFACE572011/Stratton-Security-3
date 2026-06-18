"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Shield, Clock, Award, Star } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const TRUST_ITEMS = [
  {
    icon: Shield,
    value: `PPO #${SITE_CONFIG.licenseNumber}`,
    sub: "CA Licensed · Bonded · Insured",
  },
  {
    icon: Clock,
    value: "24 / 7 · 365",
    sub: "No holidays, no gaps",
  },
  {
    icon: Award,
    value: "50+ Years",
    sub: "Combined law enforcement experience",
  },
  {
    icon: Star,
    value: "5.0 ★ Bark",
    sub: "Verified client reviews",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function TrustBar() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative bg-white border-y border-platinum overflow-hidden">
      <div className="container-wide">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-platinum sm:divide-y-0 sm:[&>*:nth-child(odd)]:border-r sm:[&>*:nth-child(odd)]:border-platinum lg:divide-x lg:[&>*]:border-l lg:[&>*:first-child]:border-l-0 lg:[&>*]:border-platinum"
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
              className="group flex items-center justify-center gap-4 px-6 py-8 md:py-10 text-center sm:text-left transition-colors duration-300 hover:bg-platinum-50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-platinum bg-platinum-50 text-[#1a3a6b] transition-colors duration-300 group-hover:border-silver">
                <item.icon size={18} strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <div className="font-[var(--font-display)] text-[0.95rem] leading-none tracking-wide text-[#040d1e] mb-1 truncate">
                  {item.value}
                </div>
                <div className="text-[0.6875rem] leading-snug tracking-wide text-[#4b5563] truncate">
                  {item.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
