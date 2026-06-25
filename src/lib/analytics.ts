/**
 * Fire a GA4 event if Google Analytics is loaded (NEXT_PUBLIC_GA_ID set).
 * No-op otherwise, so it's safe to call unconditionally from client components.
 */
type GtagFn = (command: "event", name: string, params?: Record<string, unknown>) => void;

export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof gtag === "function") {
    gtag("event", name, params ?? {});
  }
}
