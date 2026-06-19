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
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-14 md:py-16 lg:grid-cols-4 lg:gap-x-0">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.value}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: EASE }}
                className="group flex flex-col items-center text-center lg:px-8 lg:border-l lg:border-[rgba(192,200,212,0.16)] lg:first:border-l-0"
              >
                {/* circular badge chip with accent ring */}
                <span className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full">
                  <span
                    className="absolute inset-0 rounded-full border border-[#3f6bb0]/25 bg-[#3f6bb0]/10 transition-all duration-300 group-hover:border-[#3f6bb0]/55 group-hover:bg-[#3f6bb0]/15"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute -inset-1.5 rounded-full border border-[rgba(192,200,212,0.1)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <Icon size={22} strokeWidth={1.6} className="relative text-[#6f9bd8]" />
                </span>

                <div className="display-sm text-[1.3rem] leading-none tracking-[0.01em] text-[#040d1e] whitespace-nowrap">
                  {item.value}
                </div>
                <span className="mt-3.5 mb-3.5 h-px w-8 bg-[#3f6bb0]/45" aria-hidden="true" />
                <div className="text-[0.75rem] leading-snug text-[#4b5563] max-w-[14rem]">
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
