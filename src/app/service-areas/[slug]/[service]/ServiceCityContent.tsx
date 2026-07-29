"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Check, MapPin, Plus, ShieldCheck } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { SITE_CONFIG, FACTS, SERVICE_AREAS } from "@/lib/constants";
import type { ServiceArea, ServiceDetail } from "@/lib/constants";
import type { ServiceCityPage } from "@/lib/service-city";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import KeyFacts from "@/components/shared/KeyFacts";
import CallLink from "@/components/shared/CallLink";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ServiceCityContent({
  page,
  area,
  service,
}: {
  page: ServiceCityPage;
  area: ServiceArea;
  service: ServiceDetail;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" as const },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  // Nearby cities for lateral crawl paths, excluding this one.
  const nearby = SERVICE_AREAS.filter(
    (a) => a.slug !== area.slug && a.region === area.region
  ).slice(0, 5);

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="page-hero" style={{ minHeight: "48vh" }}>
        <div
          className="absolute inset-0 opacity-[0.45]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(192,200,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(192,200,212,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(circle at 26% 55%, #000 0%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(circle at 26% 55%, #000 0%, transparent 72%)",
          }}
        />
        <div className="relative z-10 container-wide pb-16 pt-32">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Service Areas", href: "/service-areas" },
              { name: area.name, href: `/service-areas/${area.slug}` },
              { name: service.title },
            ]}
          />
          <p className="label-overline-light mb-6">
            {area.name} · {area.region}
          </p>
          <span className="accent-line mb-7" style={{ background: "#3f6bb0" }} aria-hidden="true" />
          <h1
            className="display-hero text-white max-w-3xl"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)" }}
          >
            {service.title} in {area.name}
          </h1>
          <p className="text-silver text-[1.05rem] leading-relaxed max-w-2xl mt-7">
            {page.metaDescription}
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link
              href={`/contact?service=${service.slug}&area=${encodeURIComponent(area.name)}#request-form`}
              className="btn-light group"
            >
              Request a Free Assessment
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <CallLink location={`service-city-hero:${area.slug}/${service.slug}`} className="btn-on-dark">
              {SITE_CONFIG.phone}
            </CallLink>
          </div>
        </div>
      </div>

      {/* ── Answer box + local program detail ────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mx-auto mb-14 max-w-3xl md:mb-16">
            <KeyFacts
              facts={page.atAGlance}
              title={`${service.title} in ${area.name} — at a glance`}
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <m.div {...reveal()} className="lg:col-span-7">
              <p className="label-overline mb-6">On the Ground</p>
              <span className="accent-line mb-8" aria-hidden="true" />
              <h2
                className="display-title text-[#040d1e] mb-7"
                style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.75rem)" }}
              >
                How {service.title.toLowerCase()} runs in {area.name}
              </h2>
              <div className="space-y-5">
                {page.intro.map((p, i) => (
                  <p key={i} className="text-[1.0625rem] leading-relaxed text-[#4b5563]">
                    {p}
                  </p>
                ))}
              </div>
            </m.div>

            {/* Sticky consultation rail */}
            <m.div {...reveal(0.1)} className="lg:col-span-5">
              <div className="card-dark p-8 md:p-10 sticky top-28">
                <p className="label-overline-light mb-4">Get Started</p>
                <h3 className="display-sm text-[1.5rem] text-white mb-4">
                  {area.name} assessment
                </h3>
                <p className="text-[0.9375rem] text-silver leading-relaxed mb-7">
                  A Stratton advisor walks the property, scopes posts and hours, and
                  puts a number in writing — no obligation.
                </p>
                <ul className="mb-8 space-y-3 text-[0.875rem] text-silver">
                  <li className="flex gap-2.5">
                    <Check size={16} className="mt-0.5 shrink-0 text-[#6f9bd8]" />
                    {FACTS.freeAssessment}
                  </li>
                  <li className="flex gap-2.5">
                    <Check size={16} className="mt-0.5 shrink-0 text-[#6f9bd8]" />
                    {FACTS.advisorResponse}
                  </li>
                  <li className="flex gap-2.5">
                    <Check size={16} className="mt-0.5 shrink-0 text-[#6f9bd8]" />
                    {FACTS.deployStandard}
                  </li>
                </ul>
                <Link
                  href={`/contact?service=${service.slug}&area=${encodeURIComponent(area.name)}#request-form`}
                  className="btn-light w-full justify-center group"
                >
                  Request a Free Assessment
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <div className="mt-8 border-t border-[rgba(192,200,212,0.16)] pt-8 text-[0.8125rem] text-silver">
                  Or call us directly
                  <CallLink
                    location={`service-city-rail:${area.slug}/${service.slug}`}
                    className="mt-2 block font-display text-[1.375rem] tracking-tight text-[#3f6bb0] transition-colors hover:text-white"
                  >
                    {SITE_CONFIG.phone}
                  </CallLink>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* ── Local risk profile ───────────────────────────────── */}
      <section className="section-padding bg-platinum-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <m.div {...reveal()} className="lg:col-span-5">
              <p className="label-overline mb-6">Local Risk Profile</p>
              <span className="accent-line mb-8" aria-hidden="true" />
              <h2
                className="display-title text-[#040d1e] mb-6"
                style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)" }}
              >
                What we plan for here
              </h2>
              <p className="text-[1.0625rem] leading-relaxed text-[#4b5563]">
                Post orders are written against the exposures that actually show up
                on {area.name} properties — not a generic checklist.
              </p>
            </m.div>

            <div className="lg:col-span-7 space-y-4">
              {page.riskFactors.map((risk, i) => (
                <m.div
                  key={risk}
                  {...reveal(i * 0.06)}
                  className="card card-static flex items-start gap-4 p-6"
                >
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-platinum bg-platinum-50 text-accent">
                    <AlertTriangle size={17} strokeWidth={1.9} />
                  </span>
                  <p className="text-[0.9375rem] leading-relaxed text-[#4b5563]">{risk}</p>
                </m.div>
              ))}

              <m.div
                {...reveal(0.1)}
                className="card card-static flex items-start gap-4 border-l-2 border-l-[#3f6bb0] p-6 md:p-7"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-platinum bg-platinum-50 text-accent">
                  <ShieldCheck size={17} strokeWidth={1.9} />
                </span>
                <div>
                  <p className="mb-2 text-[0.6875rem] uppercase tracking-[0.18em] text-steel">
                    Jurisdiction &amp; compliance
                  </p>
                  <p className="text-[0.9375rem] leading-relaxed text-[#4b5563]">
                    {page.jurisdictionNote}
                  </p>
                </div>
              </m.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Program components (shared from the parent service) ── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <m.div {...reveal()} className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
            <p className="label-overline mb-6">Program Components</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              className="display-title text-[#040d1e]"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)" }}
            >
              What&apos;s included
            </h2>
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-[#4b5563]">
              Modular by design — combine the components that match your property.
              Full detail on the{" "}
              <Link href={`/services/${service.slug}`} className="text-accent underline">
                {service.title} service page
              </Link>
              .
            </p>
          </m.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.capabilities.map((cap, i) => (
              <m.div
                key={cap}
                {...reveal(i * 0.05)}
                className="card card-static flex items-center gap-4 p-6"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-platinum bg-platinum-50 text-accent">
                  <Check size={16} strokeWidth={2.25} />
                </span>
                <span className="text-[0.9375rem] leading-snug text-[#4b5563]">{cap}</span>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs (mirrors the FAQPage JSON-LD) ───────────────── */}
      <section className="section-padding bg-platinum-50" aria-labelledby="sc-faq">
        <div className="container-wide">
          <m.div {...reveal()} className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <p className="label-overline mb-6">Common Questions</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              id="sc-faq"
              className="display-title text-[#040d1e]"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)" }}
            >
              {service.title} in {area.name}
            </h2>
          </m.div>

          <div className="mx-auto flex max-w-3xl flex-col gap-4">
            {page.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              const panelId = `sc-faq-panel-${i}`;
              const buttonId = `sc-faq-button-${i}`;
              return (
                <m.div key={faq.q} {...reveal(i * 0.05)} className="card overflow-hidden">
                  <h3 className="m-0">
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full cursor-pointer items-center justify-between gap-6 p-6 text-left md:p-7"
                    >
                      <span className="font-display text-[1.0625rem] leading-snug text-[#0a0a0a]">
                        {faq.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                          isOpen
                            ? "border-[#1a3a6b] bg-[#1a3a6b] text-white"
                            : "border-platinum bg-platinum-50 text-accent"
                        }`}
                      >
                        <m.span
                          animate={shouldReduceMotion ? {} : { rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.3, ease: EASE }}
                          className="flex"
                        >
                          <Plus size={17} strokeWidth={2} />
                        </m.span>
                      </span>
                    </button>
                  </h3>
                  {/* Answer stays MOUNTED and collapses via grid-template-rows so it
                      is in the server HTML for the FAQPage schema contract. */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[0.9375rem] leading-relaxed text-[#4b5563] md:px-7 md:pb-7">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Lateral links: same service nearby + all services here ── */}
      <section className="bg-white">
        <div className="container-wide py-14 md:py-16">
          <m.div {...reveal()} className="mb-8 text-center">
            <p className="label-overline mb-3">Nearby</p>
            <p className="text-[1.0625rem] text-[#4b5563]">
              {service.title} across the {area.region} area
            </p>
          </m.div>
          <m.div {...reveal(0.06)} className="flex flex-wrap justify-center gap-2.5">
            {nearby.map((a) => (
              <Link
                key={a.slug}
                href={`/service-areas/${a.slug}`}
                className="card px-4 py-2 text-[0.8125rem] text-[#4b5563] transition-colors"
              >
                <MapPin size={12} className="mr-1.5 inline text-accent" />
                {a.name}
              </Link>
            ))}
            <Link
              href={`/service-areas/${area.slug}`}
              className="card px-4 py-2 text-[0.8125rem] text-[#4b5563] transition-colors"
            >
              All services in {area.name}
            </Link>
          </m.div>
        </div>
      </section>
    </main>
  );
}
