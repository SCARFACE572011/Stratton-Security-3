"use client";

import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation } from "framer-motion";
import ScrollProgress from "@/components/layout/ScrollProgress";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import BackToTop from "@/components/layout/BackToTop";
import LenisProvider from "@/components/layout/LenisProvider";

/**
 * Wraps the public site in its chrome (preloader, smooth scroll, sticky bars).
 * The Keystatic admin at /keystatic is rendered bare so it isn't hijacked by
 * Lenis scrolling or covered by the preloader / sticky CTA bar.
 *
 * LazyMotion + m.* components (strict) keep framer-motion's initial bundle
 * small and lazy-load the animation runtime; do not import `motion.*` anywhere
 * — strict mode will throw.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Exact-or-slash match: a 404 like /keystatic-foo renders the normal site
  // chrome (and its m.* components need the LazyMotion provider below).
  if (pathname === "/keystatic" || pathname?.startsWith("/keystatic/")) {
    return <>{children}</>;
  }

  return (
    <LazyMotion features={domAnimation} strict>
      <ScrollProgress />
      <LenisProvider>
        {children}
        <MobileStickyBar />
        <BackToTop />
      </LenisProvider>
    </LazyMotion>
  );
}
