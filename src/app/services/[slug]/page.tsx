import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";
import { notFound } from "next/navigation";
import { SERVICES, INDUSTRIES } from "@/lib/constants";
import { metaDescription } from "@/lib/utils";
import { BreadcrumbSchema, ServiceSchema } from "@/app/schema";
import type { Metadata } from "next";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    alternates: { canonical: `/services/${service.slug}` },
    title: service.seoTitle,
    description: metaDescription(service.shortDescription),
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedIndustries = INDUSTRIES.filter((ind) =>
    service.relatedIndustries.includes(ind.slug),
  );
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "Services", url: "https://strattonsecuritygroup.com/services" },
        { name: service.title, url: `https://strattonsecuritygroup.com/services/${service.slug}` },
      ]} />
      <ServiceSchema
        name={service.title}
        description={service.shortDescription}
        url={`https://strattonsecuritygroup.com/services/${service.slug}`}
      />
      <Navigation />
      <ServiceDetailContent
        service={service}
        relatedIndustries={relatedIndustries}
        otherServices={otherServices}
      />
      <CTASection />
      <Footer />
    </>
  );
}
