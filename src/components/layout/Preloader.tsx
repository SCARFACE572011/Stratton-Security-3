"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const STATUS = [
  "Establishing secure session",
  "Verifying credentials · PPO 122163",
  "Encrypting channel",
  "Perimeter secured",
];

const DOOR_EASE = [0.76, 0, 0.24, 1] as const;

export default function Preloader() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<"intro" | "exit" | "done">("intro");
  const [statusIdx, setStatusIdx] = useState(0);
  const [pct, setPct] = useState(0);
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    if (reduce) {
      setPhase("done");
      return;
    }
    document.body.style.overflow = "hidden";

    const start = performance.now();
    const DURATION = 2100;
    const tick = setInterval(() => {
      const t = Math.min(1, (performance.now() - start) / DURATION);
      setPct(Math.round(t * 100));
      setStatusIdx(Math.min(STATUS.length - 1, Math.floor(t * STATUS.length)));
      if (t >= 1) clearInterval(tick);
    }, 24);

    const grantT = setTimeout(() => setGranted(true), 2150);
    const exitT = setTimeout(() => setPhase("exit"), 2450);
    const doneT = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 3250);

    return () => {
      clearInterval(tick);
      clearTimeout(grantT);
      clearTimeout(exitT);
      clearTimeout(doneT);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  const skip = () => {
    setPhase("done");
    document.body.style.overflow = "";
  };

  const gridStyle: React.CSSProperties = {
    backgroundImage:
      "linear-gradient(rgba(192,200,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(192,200,212,0.05) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
  };

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[120] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          aria-hidden="true"
        >
          {/* Blast doors — top & bottom navy panels that split apart on exit */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#040d1e] border-b border-[rgba(192,200,212,0.12)]"
            style={gridStyle}
            animate={{ y: phase === "exit" ? "-100%" : "0%" }}
            transition={{ duration: 0.75, ease: DOOR_EASE, delay: phase === "exit" ? 0.15 : 0 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#040d1e] border-t border-[rgba(192,200,212,0.12)]"
            style={gridStyle}
            animate={{ y: phase === "exit" ? "100%" : "0%" }}
            transition={{ duration: 0.75, ease: DOOR_EASE, delay: phase === "exit" ? 0.15 : 0 }}
          />

          {/* Center content (fades before doors open) */}
          <motion.button
            type="button"
            onClick={skip}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center w-full cursor-pointer focus:outline-none"
            aria-label="Skip intro"
            animate={{ opacity: phase === "exit" ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* accent glow */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[640px] max-h-[640px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(26,58,107,0.5) 0%, transparent 60%)" }}
            />

            {/* Seal + radar sweep + HUD frame */}
            <div className="relative flex items-center justify-center mb-10">
              {/* rotating radar sweep */}
              <span
                className="absolute rounded-full"
                style={{
                  width: 230,
                  height: 230,
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, rgba(63,107,176,0.12) 320deg, rgba(63,107,176,0.55) 360deg)",
                  maskImage: "radial-gradient(circle, #000 62%, transparent 64%)",
                  WebkitMaskImage: "radial-gradient(circle, #000 62%, transparent 64%)",
                  animation: "preloader-sweep 1.9s linear infinite",
                }}
                aria-hidden="true"
              />
              {/* static reticle rings */}
              <span className="absolute rounded-full border border-[rgba(192,200,212,0.16)]" style={{ width: 230, height: 230 }} />
              <span className="absolute rounded-full border border-[rgba(192,200,212,0.1)]" style={{ width: 186, height: 186 }} />

              {/* HUD targeting frame + seal */}
              <motion.div
                className="hud-corners-4 relative p-6"
                style={{ ["--hud-c" as string]: "rgba(192,200,212,0.55)" }}
                initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/seal-white.png" alt="" width={104} height={104} className="w-26 h-26 relative" />
              </motion.div>
            </div>

            {/* Wordmark */}
            <motion.p
              className="display-sm text-white text-[0.95rem] tracking-[0.12em] mb-2"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Stratton Security Group
            </motion.p>

            {/* Status readout */}
            <div className="h-5 mb-6 flex items-center gap-2.5">
              {granted ? (
                <>
                  <span className="status-dot" />
                  <span className="mono-tag text-[#6f9bd8]">Access Granted · Secure</span>
                </>
              ) : (
                <span className="mono-tag text-silver/80">{STATUS[statusIdx]}…</span>
              )}
            </div>

            {/* Progress bar */}
            <div className="w-[min(260px,60vw)]">
              <div className="h-px w-full bg-[rgba(192,200,212,0.16)] overflow-hidden">
                <div
                  className="h-full bg-[#3f6bb0] transition-[width] duration-100 ease-linear"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="mt-2.5 flex items-center justify-between">
                <span className="mono-tag text-steel text-[0.625rem]">SECURE CHANNEL</span>
                <span className="mono-tag text-silver text-[0.625rem]">{pct}%</span>
              </div>
            </div>

            {/* vertical scan line over whole screen */}
            <span
              className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3f6bb0]/40 to-transparent"
              style={{ animation: "preloader-scan 2.4s ease-in-out infinite" }}
              aria-hidden="true"
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
