"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { SERVICES, INDUSTRIES } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

type SitemapColumn = {
  title: string;
  eyebrow: string;
  links: { label: string; href: string }[];
};

const SITE_SECTIONS: SitemapColumn[] = [
  {
    title: "Main Pages",
    eyebrow: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "Services Overview", href: "/services" },
      { label: "Industries Served", href: "/industries" },
      { label: "About Us", href: "/about" },
      { label: "Training Programs", href: "/training" },
      { label: "Careers", href: "/careers" },
      { label: "Apply Now", href: "/careers/apply" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Service Lines",
    eyebrow: "Protection",
    links: SERVICES.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  {
    title: "Industry Verticals",
    eyebrow: "Sectors",
    links: INDUSTRIES.map((ind) => ({
      label: ind.label,
      href: `/industries/${ind.slug}`,
    })),
  },
  {
    title: "Legal",
    eyebrow: "Compliance",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function SitemapContent() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <>
      {/* Deep-navy page hero — serif headline, eyebrow, accent line, silver intro */}
      <div className="page-hero">
        {/* Navy atmosphere — no photo, pure brand gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 0%, #0a1c3c 0%, #040d1e 50%, #060708 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(192,200,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(192,200,212,0.04) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(circle at 50% 30%, #000 0%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 30%, #000 0%, transparent 75%)",
          }}
          aria-hidden="true"
        />
        {/* Left accent hairline */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#3f6bb0]/50 to-transparent" />

        <div className="relative z-10 container-wide pb-20 pt-32">
          <m.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="label-overline-light mb-6"
          >
            Navigation
          </m.p>
          <m.span
            initial={shouldReduceMotion ? {} : { opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="accent-line mb-8 origin-left"
            style={{ background: "#3f6bb0" }}
            aria-hidden="true"
          />
          <m.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="display-hero text-white mb-7 max-w-3xl"
            style={{ fontSize: "clamp(2.75rem, 6.5vw, 5rem)" }}
          >
            Site Map
          </m.h1>
          <m.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="text-silver text-[1.15rem] leading-relaxed max-w-xl"
          >
            Every page across Stratton Security Group, organized in one place —
            services, industries, careers, and the resources you need to reach us.
          </m.p>
        </div>
      </div>

      {/* Link columns — clean light editorial grid, serif headings, accent-blue hovers */}
      <section className="section-padding bg-white" aria-labelledby="sitemap-heading">
        <div className="container-wide">
          {/* Centered editorial header */}
          <m.div
            {...reveal()}
            className="max-w-2xl mx-auto text-center mb-16 md:mb-20"
          >
            <p className="label-overline mb-6">Full Index</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              id="sitemap-heading"
              className="display-title text-[#040d1e]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Browse the Whole Site
            </h2>
            <p className="text-[#4b5563] text-lg leading-relaxed mt-7">
              A complete directory of every public page, grouped by section for
              quick navigation.
            </p>
          </m.div>

          {/* Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {SITE_SECTIONS.map((section, i) => (
              <m.div
                key={section.title}
                {...reveal(i * 0.08)}
                className="card flex flex-col p-8"
              >
                <p className="label-overline mb-3">{section.eyebrow}</p>
                <h3 className="display-sm text-[1.375rem] text-[#0a0a0a] mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-1 mt-auto">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between gap-2 -mx-2 rounded-lg px-2 py-2 text-[0.9375rem] text-[#4b5563] transition-colors hover:bg-platinum-50 hover:text-accent"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight
                          size={15}
                          className="shrink-0 text-silver opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent group-hover:opacity-100"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
