import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { ES_CONTACT } from "@/lib/content-es";
import EsPage from "@/components/es/EsPage";
import { metaDescription } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ES_CONTACT.metaTitle,
  description: metaDescription(ES_CONTACT.metaDescription),
  alternates: {
    canonical: "/es/contacto",
    languages: { "en-US": "/contact", "es-US": "/es/contacto" },
  },
};

export default function EsContacto() {
  return (
    <>
      <Navigation />
      <EsPage eyebrow="Contacto" h1={ES_CONTACT.h1} lede={ES_CONTACT.lede} enHref="/contact">
        {/* Cómo funciona */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="label-overline mb-6">Cómo funciona</p>
              <span className="accent-line mx-auto mb-8" aria-hidden="true" />
              <h2 className="display-title text-[#040d1e]" style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)" }}>
                Cuatro pasos, sin compromiso
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
              {ES_CONTACT.pasos.map((p) => (
                <div key={p.titulo} className="card card-static p-8">
                  <h3 className="mb-3 text-lg font-semibold text-[#0a0a0a]">{p.titulo}</h3>
                  <p className="text-[0.9375rem] leading-relaxed text-[#4b5563]">{p.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulario + datos de contacto */}
        <section className="section-padding bg-platinum-50">
          <div className="container-wide">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7" id="formulario">
                <h2 className="display-title mb-4 text-[#040d1e]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}>
                  Cuéntenos sobre su propiedad
                </h2>
                <p className="mb-9 text-[1.0625rem] leading-relaxed text-[#4b5563]">
                  El formulario está en inglés, pero puede escribir su mensaje en español —
                  contamos con asesores que hablan español. Si prefiere hablar, llame al{" "}
                  <a href={`tel:${SITE_CONFIG.phoneE164}`} className="text-accent underline">
                    {SITE_CONFIG.phone}
                  </a>
                  .
                </p>
                <ContactForm />
              </div>
              <div className="lg:col-span-5">
                <div className="card-dark sticky top-28 p-8 md:p-10">
                  <p className="label-overline-light mb-6">Datos de contacto</p>
                  <ul className="space-y-5 text-[0.9375rem] text-silver">
                    <li className="flex items-start gap-3">
                      <Phone size={16} className="mt-0.5 shrink-0 text-[#6f9bd8]" />
                      <a href={`tel:${SITE_CONFIG.phoneE164}`} className="hover:text-white">
                        {SITE_CONFIG.phone}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail size={16} className="mt-0.5 shrink-0 text-[#6f9bd8]" />
                      <a href={`mailto:${SITE_CONFIG.email}`} className="break-words hover:text-white">
                        {SITE_CONFIG.email}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin size={16} className="mt-0.5 shrink-0 text-[#6f9bd8]" />
                      <span>{SITE_CONFIG.fullAddress}</span>
                    </li>
                  </ul>
                  <div className="mt-8 border-t border-[rgba(192,200,212,0.16)] pt-8">
                    <p className="mb-3 text-[0.6875rem] uppercase tracking-[0.18em] text-steel">Qué tener a mano</p>
                    <ul className="space-y-2.5 text-[0.875rem] text-silver">
                      {ES_CONTACT.queLlevar.map((q) => (
                        <li key={q}>· {q}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-8 text-[0.8125rem] text-steel">
                    Atendemos 24 horas, los 7 días. Licencia PPO #{SITE_CONFIG.licenseNumber}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </EsPage>
      <Footer />
    </>
  );
}
