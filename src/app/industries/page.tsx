import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import IndustriesGrid from "@/components/industries/IndustriesGrid";
import Image from "next/image";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/industries" },
  title: "Industries We Serve | Commercial, Residential & Specialized Security",
  description:
    "Stratton Security Group serves 14+ industry sectors across Los Angeles — from commercial real estate and hospitality to government facilities and construction sites.",
};

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "Industries", url: "https://strattonsecuritygroup.com/industries" },
      ]} />
      <Navigation />
      <main>
        {/* Deep-navy page hero */}
        <div className="page-hero">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt="Dark glass corporate towers seen from street level"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040d1e] via-[#040d1e]/65 to-[#040d1e]/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040d1e]/75 to-transparent" />

          <div className="relative z-10 container-wide pb-20 pt-32">
            <p className="label-overline-light mb-6">Industry Expertise</p>
            <span className="accent-line mb-7" style={{ background: "#3f6bb0" }} aria-hidden="true" />
            <h1
              className="display-hero text-white mb-7 max-w-3xl"
              style={{ fontSize: "clamp(2.75rem, 6.5vw, 5rem)" }}
            >
              Protecting Every Industry Sector
            </h1>
            <p className="text-silver text-[1.15rem] leading-relaxed max-w-2xl">
              Stratton Security Group serves 14+ industry verticals across Los
              Angeles and Southern California — each with tailored security
              programs designed for that sector&apos;s unique risk environment.
            </p>
          </div>
        </div>

        {/* Industry grid (white) */}
        <IndustriesGrid />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
