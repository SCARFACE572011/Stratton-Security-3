"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const STRIP_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    alt: "Security officer on patrol",
    overlay:
      "bg-gradient-to-t from-[#040d1e]/85 via-[#040d1e]/35 to-[#040d1e]/40",
    position: "object-center",
    caption: "On Patrol",
    tag: "Feed 01",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
    alt: "Security professional on duty at night",
    overlay:
      "bg-gradient-to-t from-[#040d1e]/85 via-[#040d1e]/30 to-[#040d1e]/30",
    position: "object-center",
    caption: "Night Operations",
    tag: "Feed 02",
  },
  {
    src: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=900&q=80",
    alt: "Security command operations",
    overlay:
      "bg-gradient-to-t from-[#040d1e]/85 via-[#040d1e]/35 to-[#040d1e]/40",
    position: "object-center",
    caption: "Command Center",
    tag: "Feed 03",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ImageStrip() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="section-padding bg-deep-navy text-white" aria-label="Operations">
      <div className="container-wide">
        {/* Centered editorial header */}
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16 md:mb-20"
          initial={prefersReduced ? undefined : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="label-overline-light">In The Field</p>
          <span className="accent-line mx-auto my-6 bg-[#3f6bb0]" />
          <h2
            className="display-title text-white"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            Vigilance, around the clock
          </h2>
          <p className="text-silver text-lg leading-relaxed mt-6">
            From daylight patrols to overnight operations and live command
            oversight, our officers maintain a constant, disciplined presence.
          </p>
        </motion.div>

        {/* Image tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8" aria-hidden="true">
          {STRIP_IMAGES.map((img, i) => (
            <motion.figure
              key={img.caption}
              className="group relative h-[280px] md:h-[420px] overflow-hidden rounded-xl border border-[rgba(192,200,212,0.16)]"
              initial={prefersReduced ? undefined : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={`object-cover ${img.position} transition-transform duration-700 ease-out group-hover:scale-105`}
                sizes="(min-width: 640px) 33vw, 100vw"
              />
              <div
                className={`absolute inset-0 ${img.overlay} transition-opacity duration-500 group-hover:opacity-80`}
              />
              {/* HUD targeting frame — surveillance feed cue */}
              <span
                className="hud-corners pointer-events-none absolute inset-4 md:inset-5"
                style={{ ["--hud-c" as string]: "rgba(192,200,212,0.5)" }}
              />
              {/* Mono feed tag in top corner over the image */}
              <span className="mono-tag absolute top-5 right-5 md:top-6 md:right-6 text-[#c0c8d4]">
                {img.tag}
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <span className="label-overline-light">{img.caption}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
