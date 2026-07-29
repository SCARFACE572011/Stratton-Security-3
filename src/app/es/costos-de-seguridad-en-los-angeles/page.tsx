import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { ES_COSTOS } from "@/lib/content-es";
import EsPage, { EsSection, EsFaqs } from "@/components/es/EsPage";
import { metaDescription } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ES_COSTOS.metaTitle,
  description: metaDescription(ES_COSTOS.metaDescription),
  alternates: {
    canonical: `/es/${ES_COSTOS.slug}`,
    languages: {
      "en-US": `/resources/${ES_COSTOS.enSlug}`,
      "es-US": `/es/${ES_COSTOS.slug}`,
    },
  },
};

export default function EsCostos() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es",
    mainEntity: ES_COSTOS.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    inLanguage: "es",
    headline: ES_COSTOS.h1,
    description: ES_COSTOS.metaDescription,
    author: { "@type": "Organization", name: "Stratton Security Group" },
    publisher: {
      "@type": "Organization",
      name: "Stratton Security Group",
      logo: { "@type": "ImageObject", url: "https://strattonsecuritygroup.com/brand/seal.png" },
    },
    mainEntityOfPage: `https://strattonsecuritygroup.com/es/${ES_COSTOS.slug}`,
    datePublished: "2026-07-28",
    dateModified: "2026-07-28",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Navigation />
      <EsPage
        eyebrow="Guía de precios"
        h1={ES_COSTOS.h1}
        lede={ES_COSTOS.lede}
        puntosClave={ES_COSTOS.puntosClave}
        puntosClaveTitulo="Puntos clave"
        enHref={`/resources/${ES_COSTOS.enSlug}`}
      >
        {ES_COSTOS.secciones.map((s, i) => (
          <EsSection key={s.titulo} titulo={s.titulo} cuerpo={s.cuerpo} tint={i % 2 === 1} />
        ))}
        <EsFaqs faqs={ES_COSTOS.faqs} />
      </EsPage>
      <Footer />
    </>
  );
}
