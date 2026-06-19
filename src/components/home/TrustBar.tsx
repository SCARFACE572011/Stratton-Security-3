"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Shield, Clock, Award, Star } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const TRUST_ITEMS = [
  { icon: Shield, value: `PPO #${SITE_CONFIG.licenseNumber}`, sub: "California Licensed · Bonded · Insured" },
  { icon: Clock, value: "24 / 7 / 365", sub: "Live dispatch — no holidays, no gaps" },
  { icon: Award, value: "50+ Years", sub: "Combined law-enforcement experience" },
  { icon: Star, value: "5.0 ★ Rated", sub: "Verified reviews on Bark" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function TrustBar() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white border-y border-platinum" aria-label="Credentials">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 py-12 md:py-14">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.value}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: EASE }}
                className="group flex flex-col items-center text-center px-2"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-platinum bg-platinum-50 text-[#1a3a6b] mb-4 transition-colors duration-300 group-hover:border-[#3f6bb0]/50">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <div className="display-sm text-[1.15rem] tracking-[0.02em] text-[#040d1e] whitespace-nowrap">
                  {item.value}
                </div>
                <div className="text-[0.75rem] leading-snug text-[#4b5563] mt-2 max-w-[15rem]">
                  {item.sub}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
