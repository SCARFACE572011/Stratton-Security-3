import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { ES_SERVICES } from "@/lib/content-es";
import EsPage, { EsSection, EsFaqs } from "@/components/es/EsPage";
import { metaDescription } from "@/lib/utils";
import { ServiceSchema } from "@/app/schema";
import type { Metadata } from "next";

export function generateStaticParams() {
  return ES_SERVICES.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = ES_SERVICES.find((x) => x.slug === slug);
  if (!s) return { title: "Página no encontrada" };
  return {
    title: s.metaTitle,
    description: metaDescription(s.metaDescription),
    alternates: {
      canonical: `/es/servicios/${s.slug}`,
      languages: { "en-US": `/services/${s.enSlug}`, "es-US": `/es/servicios/${s.slug}` },
    },
  };
}

export default async function EsServicio({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = ES_SERVICES.find((x) => x.slug === slug);
  if (!s) notFound();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <ServiceSchema
        name={s.h1}
        description={s.metaDescription}
        url={`https://strattonsecuritygroup.com/es/servicios/${s.slug}`}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Navigation />
      <EsPage
        eyebrow="Servicio"
        h1={s.h1}
        lede={s.lede}
        puntosClave={s.puntosClave}
        enHref={`/services/${s.enSlug}`}
      >
        <EsSection cuerpo={s.cuerpo} />
        <section className="section-padding bg-platinum-50">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl">
              <h2 className="display-title mb-8 text-[#040d1e]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}>
                Qué incluye
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {s.incluye.map((item) => (
                  <li key={item} className="card card-static flex items-center gap-4 p-6">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-platinum bg-platinum-50 text-accent">
                      <Check size={16} strokeWidth={2.25} />
                    </span>
                    <span className="text-[0.9375rem] leading-snug text-[#4b5563]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <EsFaqs faqs={s.faqs} />
      </EsPage>
      <Footer />
    </>
  );
}
