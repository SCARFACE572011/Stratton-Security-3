import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ContactContent from "@/components/contact/ContactContent";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Us | Request a Security Assessment",
  description: `Request a free security assessment from Stratton Security Group. Available 24/7 — call ${SITE_CONFIG.phone} or submit an inquiry. Serving Los Angeles and Southern California.`,
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "Contact", url: "https://strattonsecuritygroup.com/contact" },
      ]} />
      <Navigation />
      <main>
        {/* Full-bleed deep-navy page hero — serif headline, eyebrow, accent line, silver intro */}
        <div className="page-hero">
          <Image
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80"
            alt="Los Angeles city skyline at night"
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
            <p className="label-overline-light mb-6">Contact Stratton</p>
            <span className="accent-line mb-8" style={{ background: "#3f6bb0" }} aria-hidden="true" />
            <h1
              className="display-hero text-white mb-7 max-w-3xl"
              style={{ fontSize: "clamp(2.75rem, 6.5vw, 5rem)" }}
            >
              Request a Free{" "}
              <span className="text-[#3f6bb0]">Security Assessment</span>
            </h1>
            <p className="text-silver text-[1.15rem] leading-relaxed max-w-xl mb-10">
              Tell us about your property and security needs. A senior Stratton
              advisor will respond within one business day.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.75rem] text-steel tracking-wide">
              <span>Available 24/7/365</span>
              <span className="text-silver/30">·</span>
              <span>CA PPO License #{SITE_CONFIG.licenseNumber}</span>
              <span className="text-silver/30">·</span>
              <span>Serving Los Angeles &amp; Southern California</span>
            </div>
          </div>
        </div>

        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
