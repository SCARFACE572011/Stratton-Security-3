"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Native scrolling for reduced-motion users (WCAG) — also skips the
    // permanent requestAnimationFrame loop entirely for them.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const handle = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(handle);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
