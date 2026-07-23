/**
 * Homepage brand intro ("blast doors" opening on the seal).
 *
 * Server-rendered on purpose: the markup is in the initial HTML, so the intro
 * is on screen from the very first frame. The previous client-only version
 * mounted after hydration, which meant it either never appeared (if hydration
 * was slow) or flashed over content the visitor was already reading.
 *
 * The whole timeline is CSS (see #brand-intro in globals.css) — no JS, no
 * hydration dependency, and it cannot get stuck: the final keyframe hides it
 * unconditionally at 1.5s. The inline script below only decides whether to
 * play it at all, and runs during HTML parse so repeat views never flash.
 *
 * Rendered from app/page.tsx so it exists on "/" only — deep links from ads or
 * search go straight to content, which is what the audit required.
 */
export default function BrandIntro() {
  return (
    <>
      <div id="brand-intro" aria-hidden="true">
        <div className="intro-door intro-door-top" />
        <div className="intro-door intro-door-bottom" />
        <div className="intro-center">
          <div
            className="hud-corners-4 relative p-6"
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
          <p className="display-sm text-white text-[0.95rem] tracking-[0.12em] mt-8">
            Stratton Security Group
          </p>
        </div>
      </div>
      {/* Runs during parse, before first paint: hides the intro instantly on
          repeat views in the same session (no flash), and marks it as seen. */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            "try{var e=document.getElementById('brand-intro');" +
            "if(sessionStorage.getItem('ssg-intro-seen')){e.style.display='none'}" +
            "else{sessionStorage.setItem('ssg-intro-seen','1')}}catch(x){}",
        }}
      />
    </>
  );
}
