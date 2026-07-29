import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import KeyFacts from "@/components/shared/KeyFacts";

/**
 * Shell for the Spanish pages.
 *
 * Deliberately a SERVER component with no framer-motion: all content is in the
 * server-rendered HTML, which matters here because these pages exist partly to
 * be found by crawlers (including AI crawlers that don't execute JS).
 *
 * `lang="es"` is set on this wrapper rather than <html>, because Next only allows
 * <html> in the root layout and that layout is shared with the English site.
 * A lang attribute on a containing element is valid HTML and is what screen
 * readers and search engines read for content language.
 */
export default function EsPage({
  h1,
  lede,
  eyebrow,
  puntosClave,
  puntosClaveTitulo = "En resumen",
  enHref,
  children,
}: {
  h1: string;
  lede: string;
  eyebrow?: string;
  puntosClave?: string[];
  puntosClaveTitulo?: string;
  /** English equivalent, for the visible language switch */
  enHref: string;
  children: React.ReactNode;
}) {
  return (
    <main lang="es">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[rgba(192,200,212,0.16)] bg-deep-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div
          className="absolute inset-0 z-0 opacity-[0.4]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(192,200,212,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(192,200,212,0.045) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(circle at 24% 34%, #000 0%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(circle at 24% 34%, #000 0%, transparent 72%)",
          }}
        />
        <div className="relative z-10 container-wide">
          <div className="max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              {eyebrow && <p className="label-overline-light">{eyebrow}</p>}
              <Link
                href={enHref}
                hrefLang="en"
                className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-steel transition-colors hover:text-silver"
              >
                English version
              </Link>
            </div>
            <h1 className="display-hero text-white" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)" }}>
              {h1}
            </h1>
            <span className="accent-line mt-8 mb-8" aria-hidden="true" />
            <p className="max-w-2xl text-[1.0625rem] leading-relaxed text-silver md:text-[1.15rem]">
              {lede}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/es/contacto" className="btn-light group">
                Solicitar evaluación gratuita
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={`tel:${SITE_CONFIG.phoneE164}`} className="btn-on-dark">
                <Phone size={16} />
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Answer-first facts */}
      {puntosClave?.length ? (
        <section className="bg-white pt-14 md:pt-16">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl">
              <KeyFacts facts={puntosClave} title={puntosClaveTitulo} />
            </div>
          </div>
        </section>
      ) : null}

      {children}

      {/* Closing CTA */}
      <section className="border-t border-[rgba(192,200,212,0.16)] bg-deep-navy" aria-label="Solicitar una evaluación">
        <div className="container-wide section-padding">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <p className="label-overline-light mb-7">Hablemos</p>
            <h2 className="display-title text-white" style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}>
              Solicite una evaluación gratuita
            </h2>
            <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-silver">
              Un asesor de Stratton recorre su propiedad, define el programa y le entrega
              una propuesta por escrito. Sin costo y sin compromiso — con respuesta dentro
              de un día hábil.
            </p>
            <ul className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3 text-[0.875rem] text-silver">
              <li className="flex items-center gap-2">
                <Check size={15} className="text-[#6f9bd8]" /> Evaluación en sitio gratuita
              </li>
              <li className="flex items-center gap-2">
                <Check size={15} className="text-[#6f9bd8]" /> Respuesta en un día hábil
              </li>
              <li className="flex items-center gap-2">
                <Check size={15} className="text-[#6f9bd8]" /> Licencia PPO #{SITE_CONFIG.licenseNumber}
              </li>
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/es/contacto" className="btn-light group">
                Solicitar evaluación gratuita
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={`tel:${SITE_CONFIG.phoneE164}`} className="btn-on-dark">
                <Phone size={16} />
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/** Shared prose section used across the Spanish pages. */
export function EsSection({
  titulo,
  cuerpo,
  tint = false,
}: {
  titulo?: string;
  cuerpo: string[];
  tint?: boolean;
}) {
  return (
    <section className={tint ? "section-padding bg-platinum-50" : "section-padding bg-white"}>
      <div className="container-wide">
        <div className="mx-auto max-w-3xl">
          {titulo && (
            <h2
              className="display-title mb-7 text-[#040d1e]"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              {titulo}
            </h2>
          )}
          <div className="space-y-5">
            {cuerpo.map((p, i) => (
              <p key={i} className="text-[1.0625rem] leading-relaxed text-[#4b5563]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Visible Q&A block; pair it with FAQPage JSON-LD on the page. */
export function EsFaqs({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;
  return (
    <section className="section-padding bg-platinum-50" aria-labelledby="es-faq">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl">
          <h2
            id="es-faq"
            className="display-title mb-9 text-[#040d1e]"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
          >
            Preguntas frecuentes
          </h2>
          <div className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="mb-2.5 text-[1.0625rem] font-semibold text-[#0a0a0a]">{f.q}</h3>
                <p className="text-[1.0625rem] leading-relaxed text-[#4b5563]">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
