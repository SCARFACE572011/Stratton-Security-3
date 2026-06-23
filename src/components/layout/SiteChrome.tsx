"use client";

import { usePathname } from "next/navigation";
import Preloader from "@/components/layout/Preloader";
import ScrollProgress from "@/components/layout/ScrollProgress";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import BackToTop from "@/components/layout/BackToTop";
import LenisProvider from "@/components/layout/LenisProvider";

/**
 * Wraps the public site in its chrome (preloader, smooth scroll, sticky bars).
 * The Keystatic admin at /keystatic is rendered bare so it isn't hijacked by
 * Lenis scrolling or covered by the preloader / sticky CTA bar.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname?.startsWith("/keystatic")) {
    return <>{children}</>;
  }

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <LenisProvider>
        {children}
        <MobileStickyBar />
        <BackToTop />
      </LenisProvider>
    </>
  );
}
