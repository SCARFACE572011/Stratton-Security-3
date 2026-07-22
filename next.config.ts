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

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
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
