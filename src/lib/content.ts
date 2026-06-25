import "server-only";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

/**
 * Server-only content layer. Reads CMS content (managed in /keystatic) via the
 * Keystatic Reader at build/request time. Add a helper here as each collection
 * is migrated off src/lib/constants.ts.
 */
const reader = createReader(process.cwd(), keystaticConfig);

export type Faq = { q: string; a: string };

export async function getFaqs(): Promise<Faq[]> {
  const entries = await reader.collections.faqs.all();
  return entries
    .map((e) => ({
      q: e.entry.question,
      a: e.entry.answer,
      order: e.entry.order ?? 0,
    }))
    .sort((a, b) => a.order - b.order)
    .map(({ q, a }) => ({ q, a }));
}

export type Testimonial = {
  quote: string;
  author: string;
  company: string;
  initials: string;
  stars: number;
};

export async function getTestimonials(): Promise<Testimonial[]> {
  const entries = await reader.collections.testimonials.all();
  return entries
    .map((e) => ({
      author: e.entry.author,
      quote: e.entry.quote,
      company: e.entry.company,
      initials: e.entry.initials,
      stars: e.entry.stars ?? 5,
      order: e.entry.order ?? 0,
    }))
    .sort((a, b) => a.order - b.order)
    .map(({ order: _order, ...r }) => r);
}

export type BarkReview = {
  quote: string;
  author: string;
  role: string;
  date: string;
  stars: number;
};

export async function getBarkReviews(): Promise<BarkReview[]> {
  const entries = await reader.collections.barkReviews.all();
  return entries
    .map((e) => ({
      author: e.entry.author,
      quote: e.entry.quote,
      role: e.entry.role,
      date: e.entry.date,
      stars: e.entry.stars ?? 5,
      order: e.entry.order ?? 0,
    }))
    .sort((a, b) => a.order - b.order)
    .map(({ order: _order, ...r }) => r);
}
