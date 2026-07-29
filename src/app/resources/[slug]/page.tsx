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
import KeyFacts from "@/components/shared/KeyFacts";
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
    // Answer engines and AI Overviews favour dated, maintained content.
    ...(article.datePublished ? { datePublished: article.datePublished } : {}),
    ...(article.dateModified ? { dateModified: article.dateModified } : {}),
  };

  // FAQPage LD mirrors the visible Q&A block below — the answers must stay in
  // the server-rendered HTML for the markup/DOM contract to hold.
  const faqLd = article.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

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
        {faqLd && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        )}

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

            {/* Answer-first key takeaways — leads with the answer for readers
                and for the answer engines that quote this page. */}
            {article.tldr?.length ? (
              <div className="mb-12 md:mb-16">
                <KeyFacts facts={article.tldr} title="Key takeaways" />
              </div>
            ) : null}

            {article.sections.map((s, si) => (
              <section key={s.heading} className="mb-12 md:mb-14">
                <h2 className="display-sm text-[1.5rem] md:text-[1.75rem] text-[#0a0a0a] mb-5">{s.heading}</h2>
                <div className="space-y-5">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-[1.0625rem] leading-relaxed text-[#4b5563]">
                      {p}
                    </p>
                  ))}
                </div>
                {s.table && (
                  /* Real <table> markup — LLMs extract tabular data far more
                     reliably than prose. The caption sits OUTSIDE the scroll
                     container (a <caption> takes the table's full width, so on
                     mobile its text would be clipped inside the scroller) and is
                     wired to the table via aria-labelledby. The scroller is
                     focusable so keyboard users can reach the off-screen
                     columns (axe: scrollable-region-focusable). */
                  <div className="mt-8">
                    {s.table.caption && (
                      <p
                        id={`tbl-${si}`}
                        className="mb-4 text-[0.8125rem] leading-relaxed text-steel"
                      >
                        {s.table.caption}
                      </p>
                    )}
                    <div
                      tabIndex={0}
                      role="region"
                      aria-label={s.table.caption ? undefined : `${s.heading} table`}
                      aria-labelledby={s.table.caption ? `tbl-${si}` : undefined}
                      className="overflow-x-auto"
                    >
                      <table className="w-full min-w-[34rem] border-collapse text-left text-[0.9375rem]">
                        <thead>
                          <tr>
                            {s.table.headers.map((h, hi) =>
                              /* An empty header string is a spacer above the row-header
                                 column — emit <td>, not an empty <th> (axe: empty-table-header). */
                              h ? (
                                <th
                                  key={h}
                                  scope="col"
                                  className="border-b border-platinum px-4 py-3 align-bottom font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-[#0a0a0a]"
                                >
                                  {h}
                                </th>
                              ) : (
                                <td key={`sp-${hi}`} className="border-b border-platinum px-4 py-3" />
                              )
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {s.table.rows.map((row) => (
                            <tr key={row[0]}>
                              {row.map((cell, ci) =>
                                /* First cell is the row header — <th scope="row"> so a
                                   screen reader announces row context with each value. */
                                ci === 0 ? (
                                  <th
                                    key={ci}
                                    scope="row"
                                    className="border-b border-platinum px-4 py-3.5 text-left align-top font-semibold text-[#0a0a0a]"
                                  >
                                    {cell}
                                  </th>
                                ) : (
                                  <td
                                    key={ci}
                                    className="border-b border-platinum px-4 py-3.5 align-top leading-relaxed text-[#4b5563]"
                                  >
                                    {cell}
                                  </td>
                                )
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* Visible Q&A — mirrors the FAQPage JSON-LD above. Always rendered
                open in the HTML so the markup and the DOM agree. */}
            {article.faqs?.length ? (
              <section className="mb-12 md:mb-14">
                <h2 className="display-sm text-[1.5rem] md:text-[1.75rem] text-[#0a0a0a] mb-7">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-8">
                  {article.faqs.map((f) => (
                    <div key={f.q}>
                      <h3 className="text-[1.0625rem] font-semibold text-[#0a0a0a] mb-2.5">
                        {f.q}
                      </h3>
                      <p className="text-[1.0625rem] leading-relaxed text-[#4b5563]">{f.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

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
              <Link href="/contact#request-form" className="btn-light group">
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

        <CTASection
          eyebrow="Put It Into Practice"
          title="Ready to put this into practice?"
          lede="Move from reading to a real plan — request a free assessment and a Stratton advisor will apply it to your property."
          href={`/contact?ref=${encodeURIComponent(article.title)}#request-form`}
        />
      </main>
      <Footer />
    </>
  );
}
