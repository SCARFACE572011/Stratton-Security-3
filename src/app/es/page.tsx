import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ES_HOME, ES_SERVICES, ES_COSTOS } from "@/lib/content-es";
import EsPage, { EsSection } from "@/components/es/EsPage";
import { metaDescription } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ES_HOME.metaTitle,
  description: metaDescription(ES_HOME.metaDescription),
  alternates: {
    canonical: "/es",
    languages: { "en-US": "/", "es-US": "/es" },
  },
};

export default function EsHome() {
  return (
    <>
      <Navigation />
      <EsPage
        eyebrow="Seguridad privada en Los Ángeles"
        h1={ES_HOME.h1}
        lede={ES_HOME.lede}
        puntosClave={ES_HOME.puntosClave}
        enHref="/"
      >
        <EsSection cuerpo={ES_HOME.intro} />

        {/* Por qué Stratton */}
        <section className="section-padding bg-platinum-50">
          <div className="container-wide">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="label-overline mb-6">Por qué Stratton</p>
              <span className="accent-line mx-auto mb-8" aria-hidden="true" />
              <h2 className="display-title text-[#040d1e]" style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)" }}>
                Cosas que puede verificar antes de contratar
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
              {ES_HOME.porQue.map((item) => (
                <div key={item.titulo} className="card card-static p-8">
                  <h3 className="mb-3 text-lg font-semibold text-[#0a0a0a]">{item.titulo}</h3>
                  <p className="text-[0.9375rem] leading-relaxed text-[#4b5563]">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="label-overline mb-6">Servicios</p>
              <span className="accent-line mx-auto mb-8" aria-hidden="true" />
              <h2 className="display-title text-[#040d1e]" style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)" }}>
                Nuestros servicios de seguridad
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
              {ES_SERVICES.map((s) => (
                <Link key={s.slug} href={`/es/servicios/${s.slug}`} className="card group flex flex-col p-8">
                  <h3 className="mb-3 text-lg font-semibold text-[#0a0a0a]">{s.h1}</h3>
                  <p className="flex-1 text-[0.9375rem] leading-relaxed text-[#4b5563]">{s.lede}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#6f9bd8]">
                    Ver servicio
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
              <Link href={`/es/${ES_COSTOS.slug}`} className="card group flex flex-col p-8 sm:col-span-2">
                <h3 className="mb-3 text-lg font-semibold text-[#0a0a0a]">{ES_COSTOS.h1}</h3>
                <p className="flex-1 text-[0.9375rem] leading-relaxed text-[#4b5563]">{ES_COSTOS.lede}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#6f9bd8]">
                  Leer la guía de costos
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </EsPage>
      <Footer />
    </>
  );
}
