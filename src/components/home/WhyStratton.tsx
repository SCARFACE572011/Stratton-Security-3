"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Clock, Shield, Settings2, Award, FileText } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { DIFFERENTIATORS } from "@/lib/constants";

const ACCENT_PHOTO =
  "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&w=800&q=80";

const ICON_MAP = { BadgeCheck, Clock, Shield, Settings2, Award, FileText } as const;

export default function WhyStratton() {
  const shouldReduceMotion = useReducedMotion();

  const EASE = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="section-tint" aria-labelledby="why-heading">
      <div className="container-wide section-padding">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">

          {/* Left column — editorial intro + image, sticky */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <p className="label-overline mb-6">Why Stratton</p>
            <span className="accent-line mb-8" />
            <h2
              id="why-heading"
              className="display-title text-[#040d1e] mb-7"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
            >
              The Standard of Protective Excellence
            </h2>
            <p className="text-[#4b5563] text-lg leading-relaxed mb-10 max-w-md">
              We don&apos;t offer generic security templates. Every Stratton program
              is built around your property, your risk profile, and your
              operational requirements.
            </p>

            {/* Accent photo — soft radius, modern */}
            <div className="relative w-full aspect-[4/3] mb-10 overflow-hidden rounded-xl shadow-[0_24px_50px_rgba(4,13,30,0.12)]">
              <Image
                src={ACCENT_PHOTO}
                alt="Stratton Security officers on patrol"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040d1e]/55 to-transparent" />
              {/* Subtle HUD reticle — ops-feed cue */}
              <span
                className="hud-corners-4 pointer-events-none absolute inset-4"
                style={{ ["--hud-c" as string]: "rgba(192,200,212,0.5)" }}
              />
            </div>

            <Link href="/about" className="btn-primary">
              About Our Team
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Right column — differentiators with accent-blue icon chips */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 lg:gap-8">
            {DIFFERENTIATORS.map((item, i) => {
              const IconComponent = ICON_MAP[item.icon as keyof typeof ICON_MAP] ?? BadgeCheck;
              return (
                <motion.div
                  key={i}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
                  className="card p-8 lg:p-9"
                >
                  <div className="w-12 h-12 rounded-xl border border-platinum bg-platinum-50 flex items-center justify-center mb-6">
                    <IconComponent size={20} className="text-accent" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-[var(--font-sans)] text-lg font-semibold text-[#0a0a0a] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
