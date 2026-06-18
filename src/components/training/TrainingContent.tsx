"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import CTASection from "@/components/home/CTASection";

const TRAINING_TOPICS = [
  {
    title: "TEAM Certification",
    sub: "Techniques for Effective Alcohol Management",
    description:
      "Industry-recognized training for security professionals working in environments that serve alcohol — including events, hospitality venues, and mixed-use properties.",
  },
  {
    title: "First Aid & CPR",
    sub: "Emergency Response",
    description:
      "All active Stratton officers are certified in First Aid and CPR, ensuring every deployment includes personnel prepared to respond to medical emergencies.",
  },
  {
    title: "Power to Arrest",
    sub: "Legal Authority & Compliance",
    description:
      "Officers complete California's Power to Arrest program, covering the legal framework for security personnel exercising citizen's arrest authority under state law.",
  },
  {
    title: "Initial Officer Training",
    sub: "Core Competency Program",
    description:
      "New officers complete Stratton's comprehensive initial training covering post orders, communication protocols, incident reporting, and professional conduct standards.",
  },
];

const WORKSHOP_AREAS = [
  "Loss prevention strategies",
  "De-escalation and conflict resolution",
  "Emergency response procedures",
  "Access control best practices",
  "Incident documentation and reporting",
  "Customer service for security professionals",
  "CCTV monitoring and surveillance",
  "Active threat response protocols",
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function TrainingContent() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <main>
      {/* ─── PAGE HERO ───────────────────────────────────────────── */}
      <section className="page-hero">
        <Image
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80"
          alt="Security training and professional development"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Navy / black overlays only */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040d1e] via-[#040d1e]/72 to-[#040d1e]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d1e]/85 to-transparent" />

        <div className="relative z-10 container-wide pb-20 pt-36 md:pb-24 md:pt-40">
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="label-overline-light mb-7"
          >
            Professional Development
          </motion.p>

          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
            className="display-hero text-white max-w-3xl"
            style={{ fontSize: "clamp(2.75rem, 6.5vw, 5rem)" }}
          >
            Training &amp; Certification Programs
          </motion.h1>

          <motion.span
            initial={shouldReduceMotion ? {} : { opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="accent-line mt-8 mb-7"
            style={{ transformOrigin: "left" }}
            aria-hidden="true"
          />

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            className="text-silver text-[1.0625rem] leading-relaxed max-w-xl"
          >
            Stratton Security Group offers professional security training workshops
            for organizations and security personnel across Los Angeles.
          </motion.p>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ──────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="certifications-heading">
        <div className="container-wide">
          {/* Centered editorial header */}
          <motion.div {...reveal()} className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <p className="label-overline mb-6">Our Certifications</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              id="certifications-heading"
              className="display-title text-[#040d1e]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Certified Training Programs
            </h2>
            <p className="text-[#4b5563] text-lg leading-relaxed mt-7 max-w-2xl mx-auto">
              Every officer we deploy carries credentials earned through rigorous,
              California-compliant programs — the foundation of disciplined,
              professional protection.
            </p>
          </motion.div>

          {/* Modern cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {TRAINING_TOPICS.map((topic, i) => (
              <motion.div
                key={topic.title}
                {...reveal(i * 0.08)}
                className="card group flex flex-col h-full rounded-xl p-8 md:p-10"
              >
                {/* Accent-blue icon chip */}
                <div className="w-14 h-14 rounded-xl border border-platinum bg-[#f4f6f9] flex items-center justify-center shrink-0 transition-colors group-hover:border-[#1a3a6b]/40 mb-7">
                  <Award size={24} className="text-[#1a3a6b]" strokeWidth={1.5} />
                </div>

                <h3 className="display-sm text-[1.375rem] text-[#0a0a0a] mb-1.5">
                  {topic.title}
                </h3>
                <p className="text-[0.6875rem] text-steel tracking-[0.16em] uppercase mb-4">
                  {topic.sub}
                </p>
                <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed flex-1">
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORKSHOP AREAS ──────────────────────────────────────── */}
      <section className="section-padding bg-platinum-50" aria-labelledby="workshops-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Two-column split — bigger serif type + motion */}
            <motion.div {...reveal()}>
              <p className="label-overline mb-6">Workshop Curriculum</p>
              <span className="accent-line mb-8" aria-hidden="true" />
              <h2
                id="workshops-heading"
                className="display-title text-[#040d1e]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Equipping Your Team
              </h2>
              <p className="text-[#4b5563] text-lg leading-relaxed mt-7 mb-9">
                Stratton&apos;s training workshops are available to external organizations
                and businesses seeking to upskill their security teams. Our curriculum
                is built on real operational experience and California compliance standards.
              </p>
              <Link href="/contact" className="btn-primary group">
                Inquire About Workshops
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div {...reveal(0.1)} className="card rounded-xl p-8 md:p-10">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1">
                {WORKSHOP_AREAS.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3.5 py-3.5 border-b border-platinum last:border-0 sm:[&:nth-last-child(2)]:border-0"
                  >
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg border border-platinum bg-[#f4f6f9] text-accent shrink-0">
                      <Check size={14} strokeWidth={2} />
                    </span>
                    <span className="text-[0.9375rem] text-[#4b5563]">{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
