import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SitemapContent from "@/components/sitemap/SitemapContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap | Stratton Security Group",
  description: "Full sitemap for the Stratton Security Group website.",
  robots: { index: false, follow: true },
};

export default function SitemapPage() {
  return (
    <>
      <Navigation />
      <main>
        <SitemapContent />
      </main>
      <Footer />
    </>
  );
}
