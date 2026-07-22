import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { RESOURCES } from "@/lib/constants";
import { metaDescription } from "@/lib/utils";
import { BreadcrumbSchema } from "@/app/schema";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export function generateStaticParams() {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = RESOURCES.find((r) => r.slug === slug);
  if (!article) return { title: "Guide Not Found" };
  return {
    alternates: { canonical: `/resources/${article.slug}` },
    title: article.title,
    description: metaDescription(article.excerpt),
  };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = RESOURCES.find((r) => r.slug === slug);
  if (!article) notFound();

  const others = RESOURCES.filter((r) => r.slug !== article.slug).slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    articleSection: article.category,
    author: { "@type": "Organization", name: "Stratton Security Group" },
    publisher: {
      "@type": "Organization",
      name: "Stratton Security Group",
      logo: { "@type": "ImageObject", url: "https://strattonsecuritygroup.com/brand/seal.png" },
    },
    mainEntityOfPage: `https://strattonsecuritygroup.com/resources/${article.slug}`,
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://strattonsecuritygroup.com" },
          { name: "Guides", url: "https://strattonsecuritygroup.com/resources" },
          { name: article.title, url: `https://strattonsecuritygroup.com/resources/${article.slug}` },
        ]}
      />
      <Navigation />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

        {/* Hero */}
        <section className="relative bg-deep-navy overflow-hidden border-b border-[rgba(192,200,212,0.16)] pt-32 pb-16 md:pt-40 md:pb-20">
          <div
            className="absolute inset-0 z-0 opacity-[0.4]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(rgba(192,200,212,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(192,200,212,0.045) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              maskImage: "radial-gradient(circle at 24% 30%, #000 0%, transparent 72%)",
              WebkitMaskImage: "radial-gradient(circle at 24% 30%, #000 0%, transparent 72%)",
            }}
          />
          <div className="relative z-10 container-narrow">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Guides", href: "/resources" },
                { name: article.title },
              ]}
            />
            <p className="label-overline-light mb-5">
              {article.category} · {article.readTime}
            </p>
            <h1 className="display-hero text-white" style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}>
              {article.title}
            </h1>
            <span className="accent-line mt-7" aria-hidden="true" />
          </div>
        </section>

        {/* Article body */}
        <article className="section-padding bg-white">
          <div className="container-narrow">
            <p className="text-[1.15rem] leading-relaxed text-[#b7c2d1] mb-12 md:mb-16">{article.excerpt}</p>
            {article.sections.map((s) => (
              <section key={s.heading} className="mb-12 md:mb-14">
                <h2 className="display-sm text-[1.5rem] md:text-[1.75rem] text-[#0a0a0a] mb-5">{s.heading}</h2>
                <div className="space-y-5">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-[1.0625rem] leading-relaxed text-[#4b5563]">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            {/* inline CTA */}
            <div className="card-dark rounded-xl p-8 md:p-10 mt-16">
              <p className="label-overline-light mb-3">Talk to Stratton</p>
              <h3 className="display-sm text-[1.375rem] text-white mb-4">
                Have a property to protect?
              </h3>
              <p className="text-[0.9375rem] text-silver leading-relaxed mb-7 max-w-xl">
                Every Stratton engagement starts with a complimentary security
                assessment — no obligation, just a senior advisor and a plan.
              </p>
              <Link href="/contact" className="btn-light group">
                Request a Free Assessment
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </article>

        {/* Other guides */}
        {others.length > 0 && (
          <section className="section-padding bg-platinum-50" aria-labelledby="more-guides">
            <div className="container-wide">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <p className="label-overline mb-6">Keep Reading</p>
                <span className="accent-line mx-auto mb-8" aria-hidden="true" />
                <h2 id="more-guides" className="display-title text-[#040d1e]" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
                  More Guides
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {others.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/resources/${r.slug}`}
                    className="card group flex flex-col h-full rounded-xl p-8"
                  >
                    <span className="label-overline mb-5">{r.category}</span>
                    <h3 className="display-sm text-[1.25rem] leading-tight text-[#0a0a0a] mb-3">{r.title}</h3>
                    <p className="text-[0.875rem] text-[#4b5563] leading-relaxed flex-1">{r.excerpt}</p>
                    <span className="mt-7 inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-[#1a3a6b]">
                      Read Guide
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
