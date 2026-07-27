import { SITE_CONFIG, SERVICES, SERVICE_AREAS } from "@/lib/constants";

// Canonical @id for the org node so every other schema (Service, per-page) can
// reference the same entity instead of re-declaring a partial LocalBusiness.
export const ORG_ID = "https://strattonsecuritygroup.com/#organization";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "SecurityService"],
    "@id": ORG_ID,
    name: SITE_CONFIG.name,
    url: "https://strattonsecuritygroup.com",
    // seal.png = full-color variant; Google composites org logos onto white surfaces,
    // where the white-on-transparent seal variants disappear.
    logo: "https://strattonsecuritygroup.com/brand/seal.png",
    image: "https://strattonsecuritygroup.com/brand/seal.png",
    description: SITE_CONFIG.brand_promise,
    slogan: SITE_CONFIG.tagline,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address,
      addressLocality: SITE_CONFIG.city,
      addressRegion: SITE_CONFIG.state,
      postalCode: SITE_CONFIG.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    hasMap: SITE_CONFIG.mapsUrl,
    // Derived from the arrays so it grows automatically as cities are added —
    // no hand-maintained list to drift.
    areaServed: [
      { "@type": "State", name: "California" },
      ...SERVICE_AREAS.map((a) => ({ "@type": "City", name: a.name })),
    ],
    knowsAbout: SERVICES.map((s) => s.title),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phoneE164,
      contactType: "sales",
      areaServed: "US",
      availableLanguage: ["English"],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    // Every non-empty social profile. Only verified Stratton profiles should be
    // populated in SITE_CONFIG.social (empty placeholders are filtered out).
    sameAs: Object.values(SITE_CONFIG.social).filter(Boolean),
    // No aggregateRating/Review markup here: Google treats self-serving review
    // schema on LocalBusiness as spam (stars only render from third-party sources).
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "California Private Patrol Operator License",
      recognizedBy: {
        "@type": "Organization",
        name: "California Bureau of Security and Investigative Services",
      },
      identifier: `PPO #${SITE_CONFIG.licenseNumber}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
  areaName,
}: {
  name: string;
  description: string;
  url: string;
  // When set (e.g. on a {service} in {city} page), scopes the service to that
  // city; otherwise it's a statewide California service.
  areaName?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    // Reference the single Organization node rather than re-declaring it.
    provider: { "@id": ORG_ID },
    areaServed: areaName
      ? { "@type": "City", name: areaName }
      : { "@type": "State", name: "California" },
    serviceType: name,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
