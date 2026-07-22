/**
 * Route transition wrapper. App Router re-mounts template.tsx on every
 * navigation, so this gives each page a quick fade-in. CSS-only (no framer,
 * no client boundary): nothing blocks paint, and the global reduced-motion
 * rules collapse it to an instant reveal.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div style={{ animation: "fade-in 0.2s ease both" }}>{children}</div>;
}
