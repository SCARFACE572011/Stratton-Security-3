import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ClientLogosSection from "@/components/home/ClientLogosSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyStratton from "@/components/home/WhyStratton";
import DeploymentProtocol from "@/components/home/DeploymentProtocol";
import MidPageCTA from "@/components/home/MidPageCTA";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ValuesSection from "@/components/home/ValuesSection";
import CTASection from "@/components/home/CTASection";
import ImageStrip from "@/components/home/ImageStrip";
import ClientsMarquee from "@/components/home/ClientsMarquee";
import { SITE_CONFIG } from "@/lib/constants";
import { getTestimonials, getBarkReviews } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Los Angeles Security Guard Company | Stratton Security Group",
  description:
    `Licensed armed & unarmed security guards, mobile patrol, and fire watch across Los Angeles. CA PPO #${SITE_CONFIG.licenseNumber} · free on-site assessment · 24/7 dispatch.`,
  keywords: [
    "security services Los Angeles",
    "private security company Los Angeles",
    "patrol services LA",
    "commercial security Los Angeles",
    "residential security California",
    "security guard company",
    "Stratton Security Group",
    "PPO security company California",
  ],
  openGraph: {
    title: "Los Angeles Security Guards & Patrol | Stratton Security Group",
    description:
      "Licensed armed & unarmed security guards, mobile patrol, and fire watch across Los Angeles. Free on-site assessment · 24/7 dispatch.",
    type: "website",
  },
};

export default async function HomePage() {
  const [testimonials, barkReviews] = await Promise.all([
    getTestimonials(),
    getBarkReviews(),
  ]);

  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#1a3a6b] focus:text-white focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navigation />

      <main id="main-content">
        {/* 1. Cinematic hero with video */}
        <HeroSection />

        {/* 2. Immediate trust indicators */}
        <TrustBar />

        {/* 3. Real client logos (LAX, Hilton, Caruso…) — strongest social proof,
            kept high on the page instead of buried near the footer */}
        <section className="section-light py-16 md:py-20">
          <div className="container-wide">
            <ClientsMarquee />
          </div>
        </section>

        {/* 4. Industries served */}
        <ClientLogosSection />

        {/* 4. Services overview */}
        <ServicesSection />

        {/* 4b. Cinematic photo strip */}
        <ImageStrip />

        {/* 4. Stats/social proof numbers */}
        <StatsSection />

        {/* 5. Why Stratton — differentiators */}
        <WhyStratton />

        {/* 5b. Deployment protocol — operational process */}
        <DeploymentProtocol />

        {/* 6. Mid-page CTA strip */}
        <MidPageCTA />

        {/* 7. Values, mission, certifications */}
        <ValuesSection />

        {/* 8. Testimonials + Bark reviews */}
        <TestimonialsSection testimonials={testimonials} barkReviews={barkReviews} />

        {/* 9. Final CTA */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
