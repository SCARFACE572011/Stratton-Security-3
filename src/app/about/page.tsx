import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import AboutContent from "@/components/about/AboutContent";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { getBarkReviews } from "@/lib/content";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Us | Our Mission & Values",
  description:
    "Learn about Stratton Security Group — our mission, values, and commitment to protecting people, assets, and peace of mind across Los Angeles and California.",
};

export default async function AboutPage() {
  const barkReviews = await getBarkReviews();
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "About", url: "https://strattonsecuritygroup.com/about" },
      ]} />
      <Navigation />
      <main>
        {/* Full-bleed deep-navy page hero — serif headline, eyebrow, accent line, silver intro */}
        <div className="page-hero">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
            alt="Security professional on duty"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Multi-layer navy/black overlays only */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/70 to-deep-navy/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/80 to-transparent" />
          {/* Left accent hairline */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#3f6bb0]/50 to-transparent" />

          <div className="relative z-10 container-wide pb-20 pt-32">
            <p className="label-overline-light mb-6">About Stratton</p>
            <span className="accent-line mb-8" style={{ background: "#3f6bb0" }} aria-hidden="true" />
            <h1
              className="display-hero text-white mb-7 max-w-3xl"
              style={{ fontSize: "clamp(2.75rem, 6.5vw, 5rem)" }}
            >
              The Standard of{" "}
              <span className="text-[#3f6bb0]">Protective Excellence</span>
            </h1>
            <p className="text-silver text-[1.15rem] leading-relaxed max-w-xl mb-10">
              {SITE_CONFIG.brand_promise}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.75rem] text-steel tracking-wide">
              <span>CA PPO License #{SITE_CONFIG.licenseNumber}</span>
              <span className="text-silver/30">·</span>
              <span>Licensed · Bonded · Insured</span>
              <span className="text-silver/30">·</span>
              <span>Serving Los Angeles &amp; Southern California</span>
            </div>
          </div>
        </div>

        <AboutContent barkReviews={barkReviews} />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
