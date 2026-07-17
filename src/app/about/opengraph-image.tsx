import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #040d1e 0%, #0d1f3c 100%)",
          padding: "56px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(to right, transparent, #3f6bb0 20%, #3f6bb0 80%, transparent)" }} />

        {/* Background grid */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(rgba(192,200,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(192,200,212,1) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        {/* Large shield watermark */}
        <div style={{ position: "absolute", right: "60px", top: "50%", transform: "translateY(-50%)", opacity: 0.06, display: "flex" }}>
          <svg width="320" height="320" viewBox="0 0 24 24" fill="none" stroke="#c0c8d4" strokeWidth="0.4">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "40px", height: "40px", border: "1px solid #3f6bb0", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3f6bb0" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <span style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", letterSpacing: "0.1em", textTransform: "uppercase" }}>STRATTON SECURITY GROUP</span>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "12px", color: "#3f6bb0", letterSpacing: "0.2em", textTransform: "uppercase" }}>ABOUT OUR COMPANY</div>
          <div style={{ fontSize: "68px", fontWeight: 800, color: "#ffffff", lineHeight: 0.9, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
            THE STANDARD OF
          </div>
          <div style={{ fontSize: "68px", fontWeight: 800, lineHeight: 0.9, textTransform: "uppercase", letterSpacing: "-0.02em", WebkitTextStroke: "1px rgba(192,200,212,0.5)", color: "transparent" }}>
            EXCELLENCE
          </div>
          <div style={{ fontSize: "18px", color: "#c0c8d4", lineHeight: 1.5, maxWidth: "620px", marginTop: "8px" }}>
            50+ years combined law enforcement, military, and private security experience. Licensed, bonded, and trusted across Los Angeles.
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "28px" }}>
            {[`CA PPO #${SITE_CONFIG.licenseNumber}`, "24/7 · 365", "LAPD-Trained Officers"].map((item) => (
              <span key={item} style={{ fontSize: "11px", color: "#6b7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item}</span>
            ))}
          </div>
          <span style={{ fontSize: "12px", color: "#c0c8d4" }}>strattonsecuritygroup.com/about</span>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, transparent, #1a3a6b 20%, #1a3a6b 80%, transparent)", opacity: 0.6 }} />
      </div>
    ),
    size,
  );
}
