import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import ServiceAreaContent from "./ServiceAreaContent";
import { notFound } from "next/navigation";
import { SERVICE_AREAS, SERVICES } from "@/lib/constants";
import { metaDescription } from "@/lib/utils";
import { BreadcrumbSchema } from "@/app/schema";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export function generateStaticParams() {
  return SERVICE_AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === slug);
  if (!area) return { title: "Area Not Found" };
  return {
    alternates: { canonical: `/service-areas/${area.slug}` },
    title: `${area.name} Security Services`,
    description: metaDescription(area.summary),
  };
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === slug);
  if (!area) notFound();

  const relatedServices = SERVICES.filter((s) => area.services.includes(s.slug));
  const otherAreas = SERVICE_AREAS.filter((a) => a.slug !== area.slug).slice(0, 6);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://strattonsecuritygroup.com" },
          { name: "Service Areas", url: "https://strattonsecuritygroup.com/service-areas" },
          { name: area.name, url: `https://strattonsecuritygroup.com/service-areas/${area.slug}` },
        ]}
      />
      <Navigation />
      <main>
        {/* Deep-navy hero */}
        <div className="page-hero" style={{ minHeight: "56vh" }}>
          {/* ops atmosphere */}
          <div
            className="absolute inset-0 opacity-[0.45]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(rgba(192,200,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(192,200,212,0.05) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "radial-gradient(circle at 28% 60%, #000 0%, transparent 72%)",
              WebkitMaskImage: "radial-gradient(circle at 28% 60%, #000 0%, transparent 72%)",
            }}
          />
          <div
            className="absolute -top-1/4 left-[-10%] w-[55vw] h-[55vw] rounded-full opacity-40"
            aria-hidden="true"
            style={{ background: "radial-gradient(circle, rgba(26,58,107,0.5) 0%, transparent 60%)" }}
          />

          <div className="relative z-10 container-wide pb-16 pt-32">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Service Areas", href: "/service-areas" },
                { name: area.name },
              ]}
            />
            <p className="label-overline-light mb-6">Service Area · {area.region}</p>
            <span className="accent-line mb-7" style={{ background: "#3f6bb0" }} aria-hidden="true" />
            <h1
              className="display-hero text-white max-w-3xl"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.75rem)" }}
            >
              {area.name} Security Services
            </h1>
            <p className="text-silver text-[1.05rem] leading-relaxed max-w-2xl mt-7">
              {area.summary}
            </p>
          </div>
        </div>

        <ServiceAreaContent area={area} relatedServices={relatedServices} otherAreas={otherAreas} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
