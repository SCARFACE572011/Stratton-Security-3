"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Route transition wrapper. App Router re-mounts template.tsx on every
 * navigation, so this gives each page a subtle fade-in. Opacity-only to avoid
 * shifting the sticky nav. On first load the preloader covers this fade.
 *
 * Always renders the same element (no conditional structure) so SSR and client
 * markup match; reduced-motion just collapses the duration.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
