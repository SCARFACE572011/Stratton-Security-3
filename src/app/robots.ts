import { MetadataRoute } from "next";
import { IS_INDEXABLE } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  // Crawling stays ALLOWED even pre-launch: Google can only honor the noindex
  // meta (gated by IS_INDEXABLE in layout.tsx) if it can fetch the pages. A
  // disallow-all here would hide the noindex and leave URL-only index entries.
  // /_next/ must also stay crawlable: Google needs the JS/CSS to render pages.
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/keystatic"],
    },
    // Only advertise the URL inventory once the real domain is live.
    ...(IS_INDEXABLE
      ? { sitemap: "https://strattonsecuritygroup.com/sitemap.xml" }
      : {}),
  };
}
