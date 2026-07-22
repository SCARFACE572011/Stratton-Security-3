"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Brand intro overlay — deliberately lightweight after the audit found the old
 * version cost every visitor 3.25s on every page load:
 *
 * - Renders nothing on the server: content paints immediately (LCP measures the
 *   real hero), crawlers and no-JS visitors are never covered.
 * - Plays only on a hard load of the homepage, once per browser session, and
 *   only when it can appear within ~700ms of first paint — if hydration lands
 *   late the visitor is already reading, and covering the page would be rude.
 * - Any click OR scroll intent dismisses it instantly; nothing inside is
 *   focusable, no scroll lock, and it can never strand (timers are re-armed on
 *   StrictMode/Fast-Refresh remounts because the session flag is only written
 *   when the exit actually begins).
 */
const SEEN_KEY = "stratton-intro-seen";

// Module scope = evaluated once per full page load, so client-side navigations
// back to "/" never replay the intro.
const INITIAL_PATH =
  typeof window !== "undefined" ? window.location.pathname : "";

export default function Preloader() {
  const [show, setShow] = useState(false);
  const [exiting, setExiting] = useState(false);
  const skipRef = useRef<() => void>(() => {});

  useEffect(() => {
    if (INITIAL_PATH !== "/") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Gate on time-since-first-paint, not time-since-navigation: the intro is
    // only acceptable if it appears essentially together with the page.
    const fcp =
      performance
        .getEntriesByType("paint")
        .find((e) => e.name === "first-contentful-paint")?.startTime ??
      performance.now();
    if (performance.now() - fcp > 700) return;
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch {
      return; // storage blocked — never risk replays or stuck overlays
    }

    // NOTE: the seen-flag is written in markSeen (exit/skip), NOT here — if it
    // were set now, StrictMode's second effect run would bail while `show` is
    // already true and the cleared timers would never re-arm (stuck overlay).
    setShow(true);
    const markSeen = () => {
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    };
    const skip = () => {
      markSeen();
      setExiting(true);
      setTimeout(() => setShow(false), 600);
    };
    skipRef.current = skip;
    // Scroll intent = the visitor wants the page, not the intro.
    window.addEventListener("wheel", skip, { once: true, passive: true });
    window.addEventListener("touchmove", skip, { once: true, passive: true });

    const exitT = setTimeout(() => {
      markSeen();
      setExiting(true);
    }, 650);
    const doneT = setTimeout(() => setShow(false), 1250);
    return () => {
      clearTimeout(exitT);
      clearTimeout(doneT);
      window.removeEventListener("wheel", skip);
      window.removeEventListener("touchmove", skip);
    };
  }, []);

  if (!show) return null;

  const gridStyle: React.CSSProperties = {
    backgroundImage:
      "linear-gradient(rgba(192,200,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(192,200,212,0.05) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
  };
  const doorTransition = "transform 0.55s cubic-bezier(0.76, 0, 0.24, 1)";

  return (
    /* While opaque it swallows clicks (a click can only mean "skip" — letting it
       fall through would activate invisible content); once the doors open,
       pointer-events-none hands the page back. aria-hidden + nothing focusable:
       screen readers and keyboards are never gated. */
    <div
      className={`fixed inset-0 z-[120] overflow-hidden ${exiting ? "pointer-events-none" : ""}`}
      aria-hidden="true"
      onClick={() => skipRef.current()}
    >
      {/* Blast doors — split apart on exit */}
      <div
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#040d1e] border-b border-[rgba(192,200,212,0.12)]"
        style={{
          ...gridStyle,
          transition: doorTransition,
          transform: exiting ? "translateY(-100%)" : "translateY(0)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#040d1e] border-t border-[rgba(192,200,212,0.12)]"
        style={{
          ...gridStyle,
          transition: doorTransition,
          transform: exiting ? "translateY(100%)" : "translateY(0)",
        }}
      />

      {/* Seal + wordmark (fades out before the doors open) */}
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center"
        style={{
          transition: "opacity 0.25s ease",
          opacity: exiting ? 0 : 1,
        }}
      >
        <div
          className="hud-corners-4 relative p-6 anim-fade"
          style={{ ["--hud-c" as string]: "rgba(192,200,212,0.55)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/seal-white-240.png"
            alt=""
            width={104}
            height={104}
            className="w-26 h-26 relative"
          />
        </div>
        <p
          className="display-sm text-white text-[0.95rem] tracking-[0.12em] mt-8 anim-rise"
          style={{ animationDelay: "0.12s" }}
        >
          Stratton Security Group
        </p>
      </div>
    </div>
  );
}
