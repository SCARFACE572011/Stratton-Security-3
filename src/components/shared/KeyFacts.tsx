import { Check } from "lucide-react";

/**
 * "At a glance" answer box — the answer-first block that AI answer engines
 * (ChatGPT search, Perplexity, Google AI Overviews, Gemini) extract and cite.
 *
 * Deliberately a SERVER component with NO framer-motion: the facts must be in
 * the server-rendered HTML, visible before (and without) any JS. Colors use the
 * arbitrary hex classes the dark-theme override remaps — token classes would
 * render invisible dark-on-dark (see the globals.css "DARK CONTENT SURFACES"
 * gotcha). `card-static` opts out of the clickable hover-lift.
 */
export default function KeyFacts({
  facts,
  title = "At a glance",
}: {
  facts: string[];
  title?: string;
}) {
  if (!facts.length) return null;
  return (
    <div className="card card-static p-7 md:p-8">
      <p className="label-overline mb-5">{title}</p>
      <ul className="space-y-3.5">
        {facts.map((fact) => (
          <li key={fact} className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-platinum bg-platinum-50 text-accent">
              <Check size={12} strokeWidth={2.5} />
            </span>
            <span className="text-[0.9375rem] leading-relaxed text-[#4b5563]">
              {fact}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
