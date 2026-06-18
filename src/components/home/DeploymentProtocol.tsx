"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ClipboardCheck, PencilRuler, ShieldCheck, FileBarChart } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    no: "01",
    icon: ClipboardCheck,
    title: "Assessment",
    blurb:
      "We walk your property, map vulnerabilities, and define the threat profile — no generic templates.",
  },
  {
    no: "02",
    icon: PencilRuler,
    title: "Program Design",
    blurb:
      "A tailored security plan: post orders, patrol cadence, access protocols, and a reporting rhythm.",
  },
  {
    no: "03",
    icon: ShieldCheck,
    title: "Deployment",
    blurb:
      "Vetted, trained officers on post — typically within 72 hours, and under 24 for urgent needs.",
  },
  {
    no: "04",
    icon: FileBarChart,
    title: "Reporting & Adjust",
    blurb:
      "GPS-logged patrols, documented incidents, and quarterly reviews keep the program sharp.",
  },
];

export default function DeploymentProtocol() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative section-padding overflow-hidden bg-[#040d1e]" aria-labelledby="protocol-heading">
      {/* ops atmosphere */}
      <div
        className="absolute inset-0 z-0 opacity-[0.4]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(192,200,212,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(192,200,212,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(circle at 50% 30%, #000 0%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 30%, #000 0%, transparent 72%)",
        }}
      />

      <div className="relative z-10 container-wide">
        {/* header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={prefersReduced ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="label-overline-light mb-6">Deployment Protocol</p>
          <span className="accent-line mx-auto mb-7" />
          <h2
            id="protocol-heading"
            className="display-title text-white"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            From First Call to Active Post
          </h2>
          <p className="mt-7 text-[1.0625rem] leading-relaxed text-silver font-[var(--font-sans)]">
            A disciplined, four-stage process — the same one we run for a single
            estate or a multi-site portfolio.
          </p>
        </motion.div>

        {/* steps */}
        <div className="relative mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-[34px] left-[12.5%] right-[12.5%] h-px bg-[rgba(192,200,212,0.16)] z-0"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.no}
                className="relative z-10 flex flex-col items-center text-center"
                initial={prefersReduced ? {} : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
              >
                <span className="relative flex items-center justify-center w-[68px] h-[68px] rounded-full bg-[#040d1e] border border-[rgba(192,200,212,0.18)] text-[#6f9bd8]">
                  <Icon size={26} strokeWidth={1.5} />
                  <span className="absolute -top-1 -right-1 flex items-center justify-center w-7 h-7 rounded-full bg-[#1a3a6b] text-white font-[var(--font-mono)] text-[0.6875rem] font-semibold">
                    {step.no}
                  </span>
                </span>
                <h3 className="display-sm text-white text-[1.15rem] tracking-[0.02em] mt-6">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-silver font-[var(--font-sans)] max-w-[15rem]">
                  {step.blurb}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
