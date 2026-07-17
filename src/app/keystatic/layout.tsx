import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stratton CMS",
  robots: { index: false, follow: false },
};

export default function KeystaticLayout({ children }: { children: React.ReactNode }) {
  // keystatic-scope: restores a dark focus ring on the admin's light surfaces
  // (the global :focus-visible ring is tuned for the dark marketing site).
  return <div className="keystatic-scope contents">{children}</div>;
}
