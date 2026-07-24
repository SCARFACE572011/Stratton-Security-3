import { SITE_CONFIG } from "@/lib/constants";

/**
 * Homepage brand intro — radar sweep over the seal, cycling status readout,
 * progress to 100%, "Access Granted", then the blast doors split open.
 *
 * Server-rendered on purpose: the markup ships in the initial HTML so the
 * sequence starts at first paint. (An earlier client-only version mounted
 * after hydration, which meant it never played at all in production.)
 *
 * The entire timeline lives in CSS — see #brand-intro in globals.css — so it
 * needs no JS, can't be delayed by a slow bundle, and can't get stuck: the
 * final keyframe hides it unconditionally at 3.25s.
 *
 * Rendered from app/page.tsx so it exists on "/" only; deep links from ads or
 * search go straight to content, per the audit.
 */
export default function BrandIntro() {
  return (
    <>
      <div id="brand-intro" aria-hidden="true">
        <div className="intro-door intro-door-top" />
        <div className="intro-door intro-door-bottom" />

        <div className="intro-center">
          <div className="intro-glow" />

          {/* Seal inside the radar sweep + reticle rings */}
          <div className="intro-seal-wrap">
            <span className="intro-radar" />
            <span className="intro-ring intro-ring-outer" />
            <span className="intro-ring intro-ring-inner" />
            <div
              className="intro-seal hud-corners-4 p-6"
              style={{ ["--hud-c" as string]: "rgba(192,200,212,0.55)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/seal-white-240.png"
                alt=""
                width={104}
                height={104}
                fetchPriority="high"
              />
            </div>
          </div>

          <p className="intro-wordmark display-sm text-white text-[0.95rem] tracking-[0.12em] mb-2">
            Stratton Security Group
          </p>

          {/* Status readout: four lines cycle, then "Access Granted" */}
          <div className="intro-status">
            <span className="mono-tag text-silver/80">Establishing secure session…</span>
            <span className="mono-tag text-silver/80">
              Verifying credentials · PPO {SITE_CONFIG.licenseNumber}…
            </span>
            <span className="mono-tag text-silver/80">Encrypting channel…</span>
            <span className="mono-tag text-silver/80">Perimeter secured…</span>
            <span className="intro-granted">
              <span className="status-dot" />
              <span className="mono-tag text-[#6f9bd8]">Access Granted · Secure</span>
            </span>
          </div>

          {/* Progress */}
          <div>
            <div className="intro-bar-track">
              <div className="intro-bar-fill" />
            </div>
            <div className="intro-meta">
              <span className="mono-tag text-steel text-[0.625rem]">SECURE CHANNEL</span>
              <span className="intro-pct mono-tag text-silver text-[0.625rem]" />
            </div>
          </div>

          <span className="intro-scanline" />
        </div>
      </div>

      {/* Runs during parse, before first paint: hides the intro instantly on
          repeat views in the same session (no flash) and marks it seen; on a
          first view, the first tap/scroll/keypress fast-fades it out so a ready
          visitor (esp. on mobile) is never locked out for the full sequence. */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            "try{var e=document.getElementById('brand-intro');" +
            "if(sessionStorage.getItem('ssg-intro-seen')){e.style.display='none'}" +
            "else{sessionStorage.setItem('ssg-intro-seen','1');" +
            "var ev=['pointerdown','touchstart','keydown','wheel'];" +
            "var done=function(){ev.forEach(function(t){window.removeEventListener(t,skip)})};" +
            "var skip=function(){e.classList.add('intro-skip');setTimeout(function(){e.style.display='none'},280);done()};" +
            "ev.forEach(function(t){window.addEventListener(t,skip,{once:true,passive:true})});" +
            "setTimeout(done,3300)}}catch(x){}",
        }}
      />
    </>
  );
}
