"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

/**
 * Click-to-call anchor that reports a GA4 `click_to_call` event.
 *
 * The business runs on phone calls, but every `tel:` link on the site was
 * previously untracked — so the single most common conversion was invisible in
 * analytics and no page could be credited for producing it. `location`
 * identifies the call surface (header, hero, sticky bar…) and the event also
 * carries the page path, which is what makes per-page attribution possible.
 *
 * trackEvent is a no-op when GA isn't configured, so this is safe everywhere.
 */
export default function CallLink({
  location,
  className,
  children,
  "aria-label": ariaLabel,
}: {
  location: string;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
}) {
  return (
    <a
      href={`tel:${SITE_CONFIG.phoneE164}`}
      className={className}
      aria-label={ariaLabel}
      onClick={() =>
        trackEvent("click_to_call", {
          location,
          page_path:
            typeof window !== "undefined" ? window.location.pathname : undefined,
        })
      }
    >
      {children}
    </a>
  );
}
