import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import ServiceCityContent from "./ServiceCityContent";
import { notFound } from "next/navigation";
import { SERVICE_AREAS, SERVICES } from "@/lib/constants";
import { SERVICE_CITY_PAGES, findServiceCityPage } from "@/lib/service-city";
import { metaDescription } from "@/lib/utils";
import { BreadcrumbSchema, ServiceSchema } from "@/app/schema";
import type { Metadata } from "next";

/**
 * /service-areas/{city}/{service} — the "{service} in {city}" long-tail pages.
 *
 * Params come from the hand-written SERVICE_CITY_PAGES array, never from a
 * cartesian product of SERVICES x SERVICE_AREAS: a pair with no written entry
 * 404s on purpose. See src/lib/service-city.ts for why.
 */
export function generateStaticParams() {
  return SERVICE_CITY_PAGES.map((p) => ({ slug: p.area, service: p.service }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}): Promise<Metadata> {
  const { slug, service } = await params;
  const page = findServiceCityPage(slug, service);
  if (!page) return { title: "Page Not Found" };
  return {
    alternates: { canonical: `/service-areas/${slug}/${service}` },
    title: page.metaTitle,
    description: metaDescription(page.metaDescription),
  };
}

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}) {
  const { slug, service } = await params;
  const page = findServiceCityPage(slug, service);
  const area = SERVICE_AREAS.find((a) => a.slug === slug);
  const svc = SERVICES.find((s) => s.slug === service);
  if (!page || !area || !svc) notFound();

  const base = "https://strattonsecuritygroup.com";
  const url = `${base}/service-areas/${area.slug}/${svc.slug}`;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: base },
          { name: "Service Areas", url: `${base}/service-areas` },
          { name: area.name, url: `${base}/service-areas/${area.slug}` },
          { name: svc.title, url },
        ]}
      />
      {/* City-scoped Service schema — areaServed narrows to this city. */}
      <ServiceSchema
        name={`${svc.title} in ${area.name}`}
        description={page.metaDescription}
        url={url}
        areaName={area.name}
      />
      {page.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <Navigation />
      <ServiceCityContent page={page} area={area} service={svc} />
      <CTASection
        eyebrow="Local Coverage"
        title={`${svc.title} in ${area.name} — get a quote`}
        lede={`Request a free on-site assessment and a Stratton advisor will scope a ${svc.title.toLowerCase()} program for your ${area.name} property, with response within one business day.`}
        href={`/contact?service=${svc.slug}&area=${encodeURIComponent(area.name)}#request-form`}
      />
      <Footer />
    </>
  );
}
