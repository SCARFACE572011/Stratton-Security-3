import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import TermsContent from "./TermsContent";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of Service | Stratton Security Group",
  description: "Terms of Service for Stratton Security Group — governing use of this website.",
};

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: `By accessing or using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use this site.`,
  },
  {
    title: "Use of This Site",
    body: `This website is provided for informational purposes and to facilitate contact with Stratton Security Group. You may not use this site for any unlawful purpose, to transmit harmful or offensive content, to impersonate any person or entity, or to attempt to gain unauthorized access to any portion of the site.`,
  },
  {
    title: "No Service Contract",
    body: `Submitting a contact form, requesting an assessment, or otherwise communicating through this website does not create a binding service contract. Security services are provided only under a separately executed written agreement signed by an authorized Stratton Security Group representative.`,
  },
  {
    title: "Intellectual Property",
    body: `All content on this site — including text, images, graphics, and design — is the property of Stratton Security Group or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.`,
  },
  {
    title: "Disclaimer of Warranties",
    body: `This website is provided "as is" without warranties of any kind, express or implied. Stratton Security Group makes no warranty that the site will be uninterrupted, error-free, or free of viruses or other harmful components. Information on this site is provided for general purposes only and may not be current or complete.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the fullest extent permitted by law, Stratton Security Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use this website or its content.`,
  },
  {
    title: "Third-Party Links",
    body: `This site may contain links to third-party websites. These links are provided for convenience only. Stratton Security Group does not control and is not responsible for the content or practices of any linked site.`,
  },
  {
    title: "Governing Law",
    body: `These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Los Angeles County, California.`,
  },
  {
    title: "Changes to These Terms",
    body: `We may update these Terms of Service at any time by posting revised terms on this page. Your continued use of the site following any changes constitutes acceptance of the updated terms.`,
  },
  {
    title: "Contact",
    body: `Questions about these Terms? Contact us at ${SITE_CONFIG.email} or ${SITE_CONFIG.phone}. Mailing address: ${SITE_CONFIG.fullAddress}.`,
  },
];

const INTRO = `These Terms of Service govern your use of the Stratton Security Group website located at strattonsecuritygroup.com. Please read them carefully before using the site.`;

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        {/* Page hero — deep-navy band, serif headline, navy atmosphere */}
        <section className="page-hero border-b border-[rgba(192,200,212,0.16)]">
          {/* Navy/black atmosphere overlays only */}
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 90% at 50% 0%, #0a1c3c 0%, #040d1e 48%, #060708 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.4]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(192,200,212,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(192,200,212,0.045) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
                maskImage:
                  "radial-gradient(circle at 50% 30%, #000 0%, transparent 72%)",
                WebkitMaskImage:
                  "radial-gradient(circle at 50% 30%, #000 0%, transparent 72%)",
              }}
            />
          </div>

          <div className="relative z-10 container-wide w-full pt-28 pb-16 md:pt-36 md:pb-24">
            <div className="max-w-3xl">
              <p className="label-overline-light mb-6 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-[#3f6bb0]" />
                Legal
              </p>
              <h1
                className="display-hero text-white mb-7"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              >
                Terms of Service
              </h1>
              <span className="accent-line mb-7" aria-hidden="true" />
              <p className="text-silver text-lg leading-relaxed max-w-xl mb-6">
                {INTRO}
              </p>
              <p className="text-silver/70 text-[0.8125rem] tracking-[0.18em] uppercase">
                Effective Date: January 1, 2025
              </p>
            </div>
          </div>
        </section>

        <TermsContent intro={INTRO} sections={SECTIONS} />
      </main>
      <Footer />
    </>
  );
}
