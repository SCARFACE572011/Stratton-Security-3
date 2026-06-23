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
