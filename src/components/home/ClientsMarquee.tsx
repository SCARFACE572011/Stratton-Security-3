"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CLIENT_LOGOS } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

const EDGE_FADE =
  "linear-gradient(90deg, transparent 0, #000 7%, #000 93%, transparent 100%)";

function LogoTile({ name, file }: { name: string; file: string }) {
  return (
    <div className="flex h-[88px] w-[200px] shrink-0 items-center justify-center rounded-2xl border border-black/5 bg-white px-7 shadow-[0_6px_20px_rgba(0,0,0,0.18)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={file}
        alt={name}
        className="max-h-11 max-w-[150px] w-auto object-contain"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}

export default function ClientsMarquee() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  // Gate the reduced-motion branch behind mount so server + first client render
  // are identical (animated). Only after mount do we swap to the static wall —
  // avoids a conditional-DOM hydration mismatch.
  useEffect(() => setMounted(true), []);
  const reduce = mounted && shouldReduceMotion;

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="mb-16 md:mb-20"
      role="region"
      aria-label="Worked with and trusted by"
    >
      <p className="label-overline mb-8 text-center">Worked With &amp; Trusted By</p>

      {reduce ? (
        /* Reduced motion — static, centered logo wall (no animation) */
        <div className="flex flex-wrap justify-center gap-5">
          {CLIENT_LOGOS.map((c) => (
            <LogoTile key={c.name} name={c.name} file={c.file} />
          ))}
        </div>
      ) : (
        <div
          className="clients-marquee relative overflow-hidden"
          style={{ maskImage: EDGE_FADE, WebkitMaskImage: EDGE_FADE }}
        >
          {/* trailing margin on every tile (incl. last) keeps -50% seamless */}
          <div className="marquee-track py-1">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="mr-5"
                aria-hidden={i >= CLIENT_LOGOS.length || undefined}
              >
                <LogoTile name={c.name} file={c.file} />
              </div>
            ))}
          </div>
        </div>
      )}

      <p className="mt-8 text-center text-[0.6875rem] uppercase tracking-[0.2em] text-[#6b7280] font-[var(--font-sans)]">
        A selection of the brands and properties Stratton is trusted to protect
      </p>
    </motion.div>
  );
}
