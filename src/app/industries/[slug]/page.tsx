import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import IndustryDetailContent from "./IndustryDetailContent";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { INDUSTRIES, SERVICES } from "@/lib/constants";
import { metaDescription } from "@/lib/utils";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return { title: "Industry Not Found" };
  return {
    alternates: { canonical: `/industries/${industry.slug}` },
    title: `${industry.label} Security`,
    description: metaDescription(
      industry.summary ??
        `Professional security services for ${industry.label} across Los Angeles and Southern California.`,
    ),
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) notFound();

  const relatedServices = SERVICES.filter((s) =>
    (industry.relatedServices ?? []).includes(s.slug),
  );
  const otherIndustries = INDUSTRIES.filter((i) => i.slug !== industry.slug).slice(0, 6);

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "Industries", url: "https://strattonsecuritygroup.com/industries" },
        { name: industry.label, url: `https://strattonsecuritygroup.com/industries/${industry.slug}` },
      ]} />
      <Navigation />
      <main>
        {/* Page hero — deep-navy band, serif headline */}
        <div className="page-hero" style={{ minHeight: "60vh" }}>
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt={`${industry.label} security`}
            fill
            className="object-cover object-center"
            priority
          />
          {/* Navy / black overlays only */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040d1e] via-[#040d1e]/75 to-[#040d1e]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040d1e]/85 to-transparent" />
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(192,200,212,0.3)] to-transparent" />

          <div className="relative z-10 container-wide pb-20 pt-36 w-full">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-[0.75rem] text-silver hover:text-[#3f6bb0] uppercase tracking-[0.16em] transition-colors mb-9"
            >
              <ArrowLeft size={12} />
              All Industries
            </Link>
            <p className="label-overline-light mb-6">Industry Vertical</p>
            <span className="accent-line mb-8" aria-hidden="true" />
            <h1
              className="display-hero text-white max-w-3xl"
              style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)" }}
            >
              {industry.label}
            </h1>
            {industry.summary && (
              <p className="text-silver text-[1.15rem] leading-relaxed max-w-2xl mt-8">
                {industry.summary}
              </p>
            )}
          </div>
        </div>

        {/* Threats / approach / related — modern animated body */}
        <IndustryDetailContent
          industry={industry}
          relatedServices={relatedServices}
          otherIndustries={otherIndustries}
        />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
