import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Search engines may index this deployment only after the real domain points at
 * it. Set NEXT_PUBLIC_INDEXABLE=true in Vercel when strattonsecuritygroup.com
 * goes live; until then every host (incl. *.vercel.app) serves noindex.
 */
export const IS_INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";

/** Trim long copy to a SERP-safe meta description (~160 chars, word boundary). */
export function metaDescription(text: string, max = 160): string {
  const clean = text.trim();
  if (clean.length <= max) return clean;
  const cut = clean.lastIndexOf(" ", max - 1);
  return `${clean.slice(0, cut > 0 ? cut : max - 1).replace(/[,;:.\s]+$/, "")}…`;
}
