import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import PrivacyContent from "./PrivacyContent";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy",
  description: "Privacy Policy for Stratton Security Group — how we collect, use, and protect your information.",
};

const INTRO = `Stratton Security Group ("we," "us," or "our") operates the website at strattonsecuritygroup.com. This Privacy Policy explains how we handle information collected through this site. By using this site, you agree to the practices described below.`;

const SECTIONS = [
  {
    title: "Information We Collect",
    body: `When you contact us through our website, request a security assessment, or submit a career application, we collect information you provide — including your name, email address, phone number, property address, and any details you share about your security needs. We do not collect payment information through this website.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use the information you provide solely to respond to your inquiry, schedule consultations, evaluate employment applications, and communicate with you about our services. We do not sell, rent, or trade your personal information to third parties.`,
  },
  {
    title: "Cookies & Analytics",
    body: `Our website may use standard analytics tools to understand how visitors interact with our pages (pages visited, referral source, browser type). This data is aggregated and non-identifying. You can disable cookies through your browser settings without affecting your ability to use the site.`,
  },
  {
    title: "Data Security",
    body: `We take reasonable measures to protect the information you submit through this website. However, no internet transmission is fully secure. Please do not submit highly sensitive personal information (social security numbers, financial account details) through our web forms.`,
  },
  {
    title: "Third-Party Links",
    body: `Our website may contain links to third-party sites (social media, review platforms). We are not responsible for the privacy practices of those sites and encourage you to review their policies before submitting information.`,
  },
  {
    title: "Retention",
    body: `We retain inquiry and application information for a reasonable period to fulfill the purpose for which it was collected, and thereafter in accordance with applicable law. You may request deletion of your information by contacting us directly.`,
  },
  {
    title: "Your Rights",
    body: `California residents may have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, request deletion, and opt out of sale (we do not sell personal information). To exercise these rights, contact us at the information below.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of this site after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "Contact",
    body: `Questions about this Privacy Policy? Contact Stratton Security Group at ${SITE_CONFIG.email} or ${SITE_CONFIG.phone}. Our mailing address is ${SITE_CONFIG.fullAddress}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Page hero — deep-navy band with subtle atmosphere */}
        <section
          className="page-hero border-b border-[rgba(192,200,212,0.16)]"
          aria-label="Privacy Policy"
        >
          {/* Atmosphere — navy gradient + faint grid (navy/black only) */}
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 100% at 50% 0%, #0a1c3c 0%, #040d1e 50%, #060708 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.4]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(192,200,212,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(192,200,212,0.045) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
                maskImage:
                  "radial-gradient(circle at 30% 30%, #000 0%, transparent 72%)",
                WebkitMaskImage:
                  "radial-gradient(circle at 30% 30%, #000 0%, transparent 72%)",
              }}
            />
          </div>

          <div className="relative z-10 w-full pt-40 pb-16 md:pb-20">
            <div className="container-wide max-w-3xl">
              <p className="label-overline-light mb-6">Legal</p>
              <h1
                className="display-hero text-white mb-6"
                style={{ fontSize: "clamp(2.75rem, 6vw, 4.5rem)" }}
              >
                Privacy Policy
              </h1>
              <span className="accent-line mb-8" aria-hidden="true" />
              <p className="text-silver text-[1.0625rem] leading-relaxed max-w-xl">
                How Stratton Security Group collects, uses, and protects the
                information you share with us.
              </p>
              <p className="text-silver/70 text-[0.8125rem] tracking-wide mt-7">
                Effective Date: January 1, 2025
              </p>
            </div>
          </div>
        </section>

        <PrivacyContent intro={INTRO} sections={SECTIONS} />
      </main>
      <Footer />
    </>
  );
}
