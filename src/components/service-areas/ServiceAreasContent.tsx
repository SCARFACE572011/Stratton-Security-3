"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Building2, Check } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { SITE_CONFIG, SERVICE_AREAS } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

type Area = {
  name: string;
  description: string;
  neighborhoods: string[];
};

// Stylized console markers — loosely arranged around HQ (positions are % within the plot).
// Faux coordinates are illustrative tactical readouts, not literal map projections.
type ConsoleMarker = {
  label: string;
  coord: string;
  x: number; // % left
  y: number; // % top
};

const HQ_MARKER = {
  label: "HQ — Los Angeles",
  // Readout derives from the canonical office location so it can never contradict it.
  coord: `${SITE_CONFIG.geo.latitude.toFixed(2)}°N ${Math.abs(SITE_CONFIG.geo.longitude).toFixed(2)}°W`,
  x: 50,
  y: 50,
};

const AREA_MARKERS: ConsoleMarker[] = [
  { label: "Beverly Hills", coord: "34.07°N 118.40°W", x: 24, y: 28 },
  { label: "West Hollywood", coord: "34.09°N 118.36°W", x: 41, y: 16 },
  { label: "Santa Monica", coord: "34.02°N 118.49°W", x: 14, y: 62 },
  { label: "Orange County", coord: "33.70°N 117.83°W", x: 74, y: 74 },
  { label: "Southern California", coord: "33.42°N 117.21°W", x: 82, y: 32 },
  { label: "Statewide", coord: "37.16°N 119.45°W", x: 64, y: 86 },
];

export default function ServiceAreasContent({
  primaryAreas,
  propertyTypes,
}: {
  primaryAreas: Area[];
  propertyTypes: string[];
}) {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <>
      {/* Full-bleed page hero */}
      <section className="page-hero" aria-label="Service areas hero">
        <Image
          src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1920&q=80"
          alt="Los Angeles skyline at night"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Navy / black overlays only */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040d1e] via-[#040d1e]/70 to-[#040d1e]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d1e]/80 to-transparent" />

        <div className="relative z-10 container-wide pb-20 pt-36 md:pb-24 md:pt-40">
          <m.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="max-w-3xl"
          >
            <p className="label-overline-light mb-6">Where We Operate</p>
            <h1
              className="display-hero text-white"
              style={{ fontSize: "clamp(2.75rem, 6.5vw, 5rem)" }}
            >
              Service Areas Across
              <br />
              <span className="text-[#3f6bb0]">Los Angeles &amp; Beyond</span>
            </h1>
            <span className="accent-line mt-7 mb-7" aria-hidden="true" />
            <p className="text-silver text-lg leading-relaxed max-w-xl">
              Stratton Security Group is headquartered in Los Angeles and deploys
              security programs across Los Angeles, Beverly Hills, and Southern
              California — from the coast to the San Gabriel Valley.
            </p>
          </m.div>
        </div>
      </section>

      {/* Tactical coverage console — deep-navy operations panel */}
      <section
        className="bg-deep-navy"
        aria-labelledby="tactical-coverage-heading"
      >
        <div className="container-wide section-padding">
          <m.div
            {...reveal()}
            className="max-w-2xl mx-auto text-center mb-14 md:mb-16"
          >
            <p className="label-overline-light mb-6">Coverage</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              id="tactical-coverage-heading"
              className="display-title text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Statewide Reach.
              <br />
              <span className="text-[#3f6bb0]">Local Presence.</span>
            </h2>
            <p className="text-silver text-lg leading-relaxed mt-7">
              A coordinated operations footprint anchored in Los Angeles and
              projected across Southern California — every sector monitored,
              every post covered, around the clock.
            </p>
          </m.div>

          <m.div
            {...reveal(0.1)}
            className="hud-corners-4 relative overflow-hidden rounded-xl bg-deep-navy ring-1 ring-white/5"
            style={{ "--hud-c": "rgba(192, 200, 212, 0.35)" } as React.CSSProperties}
          >
            {/* Dot grid background, radially faded toward the edges */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(192,200,212,0.16) 1px, transparent 1px)",
                backgroundSize: "26px 26px",
                backgroundPosition: "center",
                maskImage:
                  "radial-gradient(ellipse 80% 75% at 50% 50%, #000 35%, transparent 85%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 75% at 50% 50%, #000 35%, transparent 85%)",
              }}
            />
            {/* Faint crosshair guide lines */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(192,200,212,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(192,200,212,0.06) 1px, transparent 1px)",
                backgroundSize: "100% 50%, 50% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />

            {/* Status readout — corner */}
            <div className="absolute right-5 top-5 z-20 flex items-center gap-2.5">
              <span className="status-dot" aria-hidden="true" />
              <span className="mono-tag text-silver">Status: All Sectors Active</span>
            </div>
            {/* Grid reference — opposite corner */}
            <span className="mono-tag absolute bottom-5 left-5 z-20 text-steel">
              {/* purely decorative tactical readout */}
              GRID 11S · SECTOR LA-01
            </span>

            {/* Plot area */}
            <div className="relative aspect-[16/11] w-full sm:aspect-[16/9] md:aspect-[2/1]">
              {/* Connector hairlines from HQ to each area marker */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                {AREA_MARKERS.map((marker) => (
                  <line
                    key={marker.label}
                    x1={HQ_MARKER.x}
                    y1={HQ_MARKER.y}
                    x2={marker.x}
                    y2={marker.y}
                    stroke="rgba(192,200,212,0.22)"
                    strokeWidth={0.18}
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>

              {/* Central HQ marker with concentric coverage rings */}
              <div
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${HQ_MARKER.x}%`, top: `${HQ_MARKER.y}%` }}
              >
                <div className="relative flex items-center justify-center">
                  {[0, 1, 2].map((i) =>
                    shouldReduceMotion ? (
                      <span
                        key={i}
                        aria-hidden="true"
                        className="absolute rounded-full border border-[#3f6bb0]/30"
                        style={{
                          width: `${44 + i * 34}px`,
                          height: `${44 + i * 34}px`,
                        }}
                      />
                    ) : (
                      <m.span
                        key={i}
                        aria-hidden="true"
                        className="absolute rounded-full border border-[#3f6bb0]/40"
                        initial={{ scale: 0.6, opacity: 0.5 }}
                        animate={{ scale: 1.6, opacity: 0 }}
                        transition={{
                          duration: 3.4,
                          ease: "easeOut",
                          repeat: Infinity,
                          delay: i * 1.1,
                        }}
                        style={{ width: "56px", height: "56px" }}
                      />
                    ),
                  )}
                  {/* HQ core dot */}
                  <span className="relative h-3 w-3 rounded-full bg-[#3f6bb0] shadow-[0_0_12px_rgba(63,107,176,0.9)]" />
                </div>
                <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap text-center">
                  <span className="mono-tag block text-white">
                    {HQ_MARKER.label}
                  </span>
                  <span className="mono-tag mt-1 block text-[0.625rem] text-silver">
                    {HQ_MARKER.coord}
                  </span>
                </div>
              </div>

              {/* Area markers */}
              {AREA_MARKERS.map((marker, i) => (
                <m.div
                  key={marker.label}
                  initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: EASE }}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                >
                  <div className="flex flex-col items-center">
                    <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                      <span className="absolute h-4 w-4 rounded-full border border-silver/30" />
                      <span className="h-1.5 w-1.5 rounded-full bg-silver" />
                    </span>
                    <span className="mono-tag mt-2 block whitespace-nowrap text-[0.625rem] text-platinum">
                      {marker.label}
                    </span>
                    <span className="mono-tag block whitespace-nowrap text-[0.5625rem] text-steel">
                      {marker.coord}
                    </span>
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </section>

      {/* Coverage grid — white surface, centered editorial header */}
      <section className="bg-white" aria-labelledby="coverage-heading">
        <div className="container-wide section-padding">
          <m.div
            {...reveal()}
            className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
          >
            <p className="label-overline mb-6">Primary Coverage</p>
            <span className="accent-line mx-auto mb-8" aria-hidden="true" />
            <h2
              id="coverage-heading"
              className="display-title text-[#040d1e]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Communities We Serve
            </h2>
            <p className="text-[#4b5563] text-lg leading-relaxed mt-7 max-w-2xl mx-auto">
              A coordinated regional footprint across Southern California&apos;s
              most demanding markets — protecting people, properties, and
              operations around the clock.
            </p>
          </m.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_AREAS.map((area, i) => (
              <m.div key={area.slug} {...reveal(i * 0.06)}>
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="card group flex flex-col h-full rounded-xl p-8"
                >
                  <div className="flex items-center justify-between mb-7">
                    <span className="w-14 h-14 rounded-xl border border-platinum bg-[#f4f6f9] flex items-center justify-center transition-colors group-hover:border-[#1a3a6b]/40">
                      <MapPin size={24} className="text-[#1a3a6b]" strokeWidth={1.5} />
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-[#1a3a6b] transition-transform group-hover:translate-x-1.5"
                    />
                  </div>
                  <h3 className="display-sm text-[1.375rem] text-[#0a0a0a] mb-1">{area.name}</h3>
                  <p className="text-[0.6875rem] text-steel uppercase tracking-[0.14em] mb-4">
                    {area.region}
                  </p>
                  <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed flex-1">
                    {area.summary.split(". ")[0]}.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-7">
                    {area.neighborhoods.slice(0, 3).map((n) => (
                      <span
                        key={n}
                        className="text-[0.6875rem] text-[#4b5563] border border-platinum rounded-full px-3 py-1 tracking-wide"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </Link>
              </m.div>
            ))}
          </div>

          {/* Also serving — broader coverage beyond the dedicated area pages */}
          {(() => {
            const extra = primaryAreas.filter(
              (p) => !SERVICE_AREAS.some((s) => s.name === p.name),
            );
            return extra.length ? (
              <m.div {...reveal(0.1)} className="mt-14 text-center max-w-3xl mx-auto">
                <p className="label-overline mb-4">Also Serving</p>
                <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed">
                  {extra.map((p) => p.name).join(" · ")} — and communities across Southern California.
                </p>
              </m.div>
            ) : null;
          })()}
        </div>
      </section>

      {/* Property types + contact split — platinum tint surface */}
      <section className="section-tint" aria-labelledby="property-types-heading">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <m.div {...reveal()}>
              <p className="label-overline mb-6">Property Types</p>
              <span className="accent-line mb-8" aria-hidden="true" />
              <h2
                id="property-types-heading"
                className="display-title text-[#040d1e]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Every Property In
                <br />
                <span className="text-accent">Our Coverage Area</span>
              </h2>
              <p className="text-[#4b5563] text-lg leading-relaxed mt-7 mb-10">
                Within our service areas, Stratton deploys programs for every
                major property type — from commercial real estate and luxury
                estates to construction sites and transit hubs.
              </p>
              <div>
                {propertyTypes.map((type, i) => (
                  <m.div
                    key={type}
                    {...reveal(i * 0.04)}
                    className="flex items-center gap-4 py-3.5 border-b border-platinum last:border-0"
                  >
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg border border-platinum bg-white text-accent shrink-0">
                      <Check size={15} strokeWidth={2} />
                    </span>
                    <span className="text-[0.9375rem] text-[#4b5563]">{type}</span>
                  </m.div>
                ))}
              </div>
            </m.div>

            <div className="space-y-8 lg:sticky lg:top-28">
              <m.div
                {...reveal(0.08)}
                className="card group rounded-xl p-8 md:p-10"
              >
                <div className="w-14 h-14 rounded-xl border border-platinum bg-[#f4f6f9] flex items-center justify-center shrink-0 transition-colors group-hover:border-[#1a3a6b]/40 mb-7">
                  <MapPin size={24} className="text-[#1a3a6b]" strokeWidth={1.5} />
                </div>
                <p className="label-overline mb-4">Outside Our Primary Areas?</p>
                <h3 className="display-sm text-[1.375rem] text-[#0a0a0a] mb-3">
                  Contact Us First
                </h3>
                <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed mb-8">
                  Stratton is actively expanding coverage. If your property is
                  outside our listed service areas, contact us — we may still be
                  able to serve you, or connect you with a vetted partner.
                </p>
                <Link href="/contact#request-form" className="btn-primary group/btn">
                  Discuss Your Location
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </Link>
              </m.div>

              <m.div
                {...reveal(0.16)}
                className="card group rounded-xl p-8 md:p-10"
              >
                <div className="w-14 h-14 rounded-xl border border-platinum bg-[#f4f6f9] flex items-center justify-center shrink-0 transition-colors group-hover:border-[#1a3a6b]/40 mb-7">
                  <Building2 size={24} className="text-[#1a3a6b]" strokeWidth={1.5} />
                </div>
                <p className="label-overline mb-4">Our Headquarters</p>
                <address className="not-italic">
                  <p className="display-sm text-[1.25rem] text-[#0a0a0a] mb-2">
                    {SITE_CONFIG.name}
                  </p>
                  <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed">
                    {SITE_CONFIG.address}
                  </p>
                  <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed">
                    {SITE_CONFIG.city}, {SITE_CONFIG.state} {SITE_CONFIG.zip}
                  </p>
                  <p className="text-[0.8125rem] text-steel mt-2">
                    Los Angeles, California
                  </p>
                </address>
              </m.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
