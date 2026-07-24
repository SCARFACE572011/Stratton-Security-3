"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  ShieldCheck,
  Building2,
  Home,
  Star,
  ShoppingBag,
  HardHat,
  Briefcase,
  Check,
} from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { SITE_CONFIG, SERVICE_AREAS } from "@/lib/constants";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

const ICON_MAP = {
  Shield,
  ShieldCheck,
  Building2,
  Home,
  Star,
  ShoppingBag,
  HardHat,
  Briefcase,
} as const;

const EASE = [0.22, 1, 0.36, 1] as const;

type Service = {
  title: string;
  seoTitle: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  benefits: { title: string; description: string }[];
  capabilities: string[];
  icon: string;
};

type Industry = {
  slug: string;
  label: string;
};

export default function ServiceDetailContent({
  service,
  relatedIndustries,
  otherServices,
}: {
  service: Service;
  relatedIndustries: Industry[];
  otherServices: Service[];
}) {
  const shouldReduceMotion = useReducedMotion();
  const IconComponent =
    ICON_MAP[service.icon as keyof typeof ICON_MAP] ?? Shield;

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay: shouldReduceMotion ? 0 : delay, ease: EASE },
  });

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="page-hero" style={{ minHeight: "62vh" }}>
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
          alt={service.title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040d1e] via-[#040d1e]/75 to-[#040d1e]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d1e]/85 to-transparent" />

        <div className="relative z-10 container-wide pb-20 pt-36 w-full">
          <m.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: service.title },
              ]}
            />
          </m.div>

          <m.div
            className="flex items-center gap-4 mb-7"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          >
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl border border-[rgba(192,200,212,0.22)] bg-white/[0.04] text-[#3f6bb0]">
              <IconComponent size={24} strokeWidth={1.5} />
            </span>
            <p className="label-overline-light">Service Line</p>
          </m.div>

          <m.h1
            className="display-hero text-white max-w-4xl"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.14, ease: EASE }}
          >
            {service.seoTitle}
          </m.h1>

          <m.span
            className="accent-line mt-8 mb-8"
            style={{ background: "#3f6bb0" }}
            aria-hidden="true"
            initial={shouldReduceMotion ? {} : { opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.24, ease: EASE }}
          />

          <m.p
            className="text-silver text-[1.15rem] leading-relaxed max-w-2xl"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          >
            {service.shortDescription}
          </m.p>
        </div>
      </div>

      {/* ── Long description + consultation sidebar ──────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <m.div {...reveal()} className="lg:col-span-7">
              <p className="label-overline mb-6">Overview</p>
              <span className="accent-line mb-8" aria-hidden="true" />
              <p className="text-[#4b5563] text-[1.0625rem] leading-relaxed">
                {service.longDescription}
              </p>
            </m.div>

            <m.div {...reveal(0.1)} className="lg:col-span-5">
              <div className="card-dark p-8 md:p-10 sticky top-28">
                <p className="label-overline-light mb-4">Get Started</p>
                <h3 className="display-sm text-[1.5rem] text-white mb-4">
                  Request a Consultation
                </h3>
                <p className="text-[0.9375rem] text-silver leading-relaxed mb-6">
                  Talk with a Stratton advisor about a tailored program for your
                  property.
                </p>
                {/* Answer "what does it cost / how fast" at the decision point.
                    Claims trace to the pricing FAQ (rate drivers, written proposal)
                    and deployment FAQ (72h typical from signing / sub-24h urgent). */}
                <div className="mb-8 space-y-2.5 text-[0.8125rem] text-silver leading-relaxed">
                  <p className="flex gap-2.5">
                    <span className="text-[#6f9bd8] font-bold shrink-0">Pricing</span>
                    Hourly rates based on coverage hours, armed vs. unarmed, and site
                    requirements — free walkthrough, then a clear written proposal.
                  </p>
                  <p className="flex gap-2.5">
                    <span className="text-[#6f9bd8] font-bold shrink-0">Timing</span>
                    Coverage typically begins within 72 hours of signing — teams have
                    mobilized in under 24 for urgent needs.
                  </p>
                </div>
                <Link
                  href={`/contact?service=${service.slug}#request-form`}
                  className="btn-light w-full justify-center group"
                >
                  Request a Free Assessment
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <div className="mt-8 pt-8 border-t border-[rgba(192,200,212,0.16)] text-[0.8125rem] text-silver">
                  Or call us directly
                  <a
                    href={`tel:${SITE_CONFIG.phoneE164}`}
                    className="block font-[var(--font-display)] text-[#3f6bb0] text-[1.375rem] mt-2 tracking-tight hover:text-white transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────── */}
      <section className="section-padding bg-platinum-50">
        <div className="container-wide">
          <m.div
            {...reveal()}
            className="max-w-2xl mx-auto text-center mb-16 md:mb-20"
          >
            <p className="label-overline mb-6">What You Get</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              className="display-title text-[#040d1e]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Core Program Benefits
            </h2>
          </m.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {service.benefits.map((benefit, i) => (
              <m.div
                key={benefit.title}
                {...reveal(i * 0.08)}
                className="card flex flex-col h-full p-8"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-platinum bg-white text-accent mb-6">
                  <Check size={20} strokeWidth={2.25} />
                </span>
                <h3 className="display-sm text-[1.25rem] text-[#0a0a0a] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed">
                  {benefit.description}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <m.div {...reveal()} className="lg:col-span-5">
              <p className="label-overline mb-6">Capabilities</p>
              <span className="accent-line mb-8" aria-hidden="true" />
              <h2
                className="display-title text-[#040d1e] mb-7"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Program Components
              </h2>
              <p className="text-[#4b5563] text-[1.0625rem] leading-relaxed">
                Stratton programs are modular — combine the components that match
                your property&apos;s risk profile and operational requirements.
              </p>
            </m.div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {service.capabilities.map((capability, i) => (
                <m.div
                  key={capability}
                  {...reveal(i * 0.06)}
                  className="card flex items-center gap-4 p-6"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-platinum bg-platinum-50 text-accent shrink-0">
                    <Check size={16} strokeWidth={2.25} />
                  </span>
                  <span className="text-[0.9375rem] text-[#4b5563] leading-snug">
                    {capability}
                  </span>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related industries ───────────────────────────────── */}
      {relatedIndustries.length > 0 && (
        <section className="section-padding bg-platinum-50">
          <div className="container-wide">
            <m.div
              {...reveal()}
              className="max-w-2xl mx-auto text-center mb-16 md:mb-20"
            >
              <p className="label-overline mb-6">Where It Fits</p>
              <span className="accent-line mx-auto mb-8" aria-hidden="true" />
              <h2
                className="display-title text-[#040d1e]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Industries We Serve With This Program
              </h2>
            </m.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedIndustries.map((industry, i) => (
                <m.div key={industry.slug} {...reveal(i * 0.08)}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="card group flex items-center justify-between p-8 h-full"
                  >
                    <h3 className="display-sm text-[1.1875rem] text-[#0a0a0a]">
                      {industry.label}
                    </h3>
                    <ArrowRight
                      size={18}
                      className="text-steel group-hover:text-accent group-hover:translate-x-1.5 transition-all shrink-0"
                    />
                  </Link>
                </m.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Other services ───────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <m.div
            {...reveal()}
            className="max-w-2xl mx-auto text-center mb-16 md:mb-20"
          >
            <p className="label-overline mb-6">Explore More</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              className="display-title text-[#040d1e]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Other Service Lines
            </h2>
          </m.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherServices.map((s, i) => {
              const Icon = ICON_MAP[s.icon as keyof typeof ICON_MAP] ?? Shield;
              return (
                <m.div key={s.slug} {...reveal(i * 0.08)}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="card group flex flex-col h-full p-8"
                  >
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-platinum bg-[#f4f6f9] text-accent mb-6 transition-colors group-hover:border-[#1a3a6b]/40">
                      <Icon size={22} strokeWidth={1.5} />
                    </span>
                    <h3 className="display-sm text-[1.1875rem] text-[#0a0a0a] mb-5 flex-1">
                      {s.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-[#1a3a6b]">
                      View
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1.5"
                      />
                    </span>
                  </Link>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Service areas (contextual internal links to the city pages) ── */}
      <section className="section-padding bg-platinum-50">
        <div className="container-wide">
          <m.div
            {...reveal()}
            className="max-w-2xl mx-auto text-center mb-12 md:mb-16"
          >
            <p className="label-overline mb-6">Coverage</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              className="display-title text-[#040d1e]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Where We Deliver This Program
            </h2>
          </m.div>
          <m.div {...reveal(0.08)} className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="card px-5 py-3 text-[0.875rem] text-[#4b5563] hover:text-[#0a0a0a] transition-colors"
              >
                {service.title} in {area.name}
              </Link>
            ))}
          </m.div>
        </div>
      </section>
    </main>
  );
}
