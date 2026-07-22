"use client";

import { m, useScroll, useSpring } from "framer-motion";

/** Thin HUD-style scroll-progress bar fixed to the very top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <m.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #1a3a6b 0%, #3f6bb0 60%, #6f9bd8 100%)",
        boxShadow: "0 0 8px rgba(63,107,176,0.5)",
      }}
    />
  );
}
