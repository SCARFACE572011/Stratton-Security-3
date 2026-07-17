import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RESOURCES } from "@/lib/constants";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/resources" },
  title: "Security Guides & Insights",
  description:
    "Practical guides on choosing a private security company, armed vs. unarmed officers, California PPO/BSIS licensing, and what to expect from a security assessment.",
};

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://strattonsecuritygroup.com" },
          { name: "Guides", url: "https://strattonsecuritygroup.com/resources" },
        ]}
      />
      <Navigation />
      <main>
        {/* Deep-navy hero */}
        <section className="relative bg-deep-navy overflow-hidden border-b border-[rgba(192,200,212,0.16)] pt-36 pb-20 md:pt-44 md:pb-28">
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
                maskImage: "radial-gradient(circle at 24% 30%, #000 0%, transparent 72%)",
                WebkitMaskImage: "radial-gradient(circle at 24% 30%, #000 0%, transparent 72%)",
              }}
            />
          </div>
          <div className="relative z-10 container-wide">
            <div className="max-w-3xl">
              <p className="label-overline-light mb-6">Guides &amp; Insights</p>
              <h1 className="display-hero text-white" style={{ fontSize: "clamp(2.75rem, 6.5vw, 5rem)" }}>
                Security Guides &amp; Insights
              </h1>
              <span className="accent-line mt-8 mb-8" aria-hidden="true" />
              <p className="text-silver text-[1.0625rem] md:text-[1.15rem] leading-relaxed max-w-2xl">
                Straight, practical guidance on hiring, licensing, and running private
                security in Los Angeles — written by operators, not marketers.
              </p>
            </div>
          </div>
        </section>

        {/* Guides grid */}
        <section className="section-padding bg-white" aria-label="Guides">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {RESOURCES.map((r) => (
                <Link
                  key={r.slug}
                  href={`/resources/${r.slug}`}
                  className="card group flex flex-col h-full rounded-xl p-8 md:p-9"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="label-overline">{r.category}</span>
                    <span className="text-[0.6875rem] text-steel tracking-[0.12em] uppercase">{r.readTime}</span>
                  </div>
                  <h2 className="display-sm text-[1.45rem] leading-tight text-[#0a0a0a] mb-4">{r.title}</h2>
                  <p className="text-[0.9375rem] text-[#4b5563] leading-relaxed flex-1">{r.excerpt}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-[#1a3a6b]">
                    Read Guide
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
