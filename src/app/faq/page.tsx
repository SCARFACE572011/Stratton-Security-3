import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import FaqAccordion from "@/components/faq/FaqAccordion";
import { SITE_CONFIG } from "@/lib/constants";
import { getFaqs } from "@/lib/content";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/faq" },
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Stratton Security Group — licensing, service areas, officer training, deployment timing, armed vs unarmed, and more.",
};

export default async function FaqPage() {
  const FAQS = await getFaqs();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "FAQ", url: "https://strattonsecuritygroup.com/faq" },
      ]} />
      <Navigation />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />

        {/* Page hero — deep-navy band, serif proper-case headline */}
        <section className="relative bg-deep-navy overflow-hidden border-b border-[rgba(192,200,212,0.16)] pt-36 pb-20 md:pt-44 md:pb-28">
          {/* Atmosphere — navy/black overlays only */}
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(120% 90% at 50% 0%, #0a1c3c 0%, #040d1e 50%, #060708 100%)" }}
            />
            <div
              className="absolute inset-0 opacity-[0.4]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(192,200,212,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(192,200,212,0.045) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
                maskImage: "radial-gradient(circle at 22% 30%, #000 0%, transparent 72%)",
                WebkitMaskImage: "radial-gradient(circle at 22% 30%, #000 0%, transparent 72%)",
              }}
            />
          </div>

          <div className="relative z-10 container-wide">
            <div className="max-w-3xl">
              <p className="label-overline-light mb-6">Answers</p>
              <h1
                className="display-hero text-white"
                style={{ fontSize: "clamp(2.75rem, 6.5vw, 5rem)" }}
              >
                Frequently Asked Questions
              </h1>
              <span className="accent-line mt-8 mb-8" aria-hidden="true" />
              <p className="text-silver text-[1.0625rem] md:text-[1.15rem] leading-relaxed max-w-2xl">
                Straight answers about how Stratton is licensed, how our officers
                are trained, and how we deploy. If your question isn&apos;t here, call{" "}
                {SITE_CONFIG.phone} or contact us directly.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ accordion + advisor card */}
        <FaqAccordion faqs={FAQS} phone={SITE_CONFIG.phone} phoneE164={SITE_CONFIG.phoneE164} />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
