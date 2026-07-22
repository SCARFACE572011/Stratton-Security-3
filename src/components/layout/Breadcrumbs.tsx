import Link from "next/link";
import { ChevronRight } from "lucide-react";

/**
 * Visible breadcrumb trail for detail pages (services, industries, areas,
 * guides). Pairs with the BreadcrumbList JSON-LD those pages already emit —
 * Google's guidance is that the markup should reflect breadcrumbs users can
 * actually see. Styled for the dark page heroes.
 */
export default function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.14em]">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight size={11} className="text-steel" aria-hidden="true" />
              )}
              {last || !item.href ? (
                <span aria-current="page" className="text-silver">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-steel hover:text-silver transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
