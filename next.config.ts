import type { NextConfig } from "next";

// Baseline security headers applied to every route. (A strict Content-Security-
// Policy is intentionally deferred — it needs nonces to coexist with Framer,
// Google Analytics, and the Keystatic admin without breaking them.)
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

// 301s from the previous Squarespace site (DNS cutover 2026-07-22). Any old URL
// left 404ing throws away the backlinks and residual index entries pointing at
// it — costly on a domain this new. Paths below were recovered from the Wayback
// CDX index and each was confirmed returning 404 on the live site.
// To extend: Search Console -> Pages -> "Not found (404)" lists any others real
// users/crawlers still hit. Never bulk-redirect unknown paths to "/" — Google
// treats that as a soft 404.
const legacyRedirects = [
  { source: "/contact-us", destination: "/contact", permanent: true },
  { source: "/estate-security", destination: "/industries/estates", permanent: true },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
  },
  async redirects() {
    return legacyRedirects;
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // Brand/image assets shipped with max-age=0 (revalidated on every view).
      // NOT immutable: several are placeholders that will be replaced in place
      // under the same filename (hero poster, client logos) — a day of caching
      // plus a week of stale-while-revalidate keeps repeat views fast without
      // pinning stale assets for a year.
      {
        source: "/:dir(brand|images)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
