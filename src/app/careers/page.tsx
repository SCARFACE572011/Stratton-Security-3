import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CareersContent from "@/components/careers/CareersContent";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/careers" },
  title: "Careers | Join Stratton Security Group",
  description:
    "Join Stratton Security Group. We're looking for licensed, professional security officers in Los Angeles and Southern California. Apply today.",
};

const OPEN_POSITIONS = [
  {
    title: "Unarmed Security Officer",
    type: "Full-Time / Part-Time",
    location: "Los Angeles, CA",
    area: "Various — Commercial & Residential",
  },
  {
    title: "Armed Security Officer",
    type: "Full-Time",
    location: "Los Angeles, CA",
    area: "Commercial & High-Security Properties",
  },
  {
    title: "Mobile Patrol Officer",
    type: "Full-Time",
    location: "Los Angeles & Southern California",
    area: "Residential & Commercial Patrol Routes",
  },
  {
    title: "Concierge / Lobby Officer",
    type: "Full-Time",
    location: "Los Angeles, CA",
    area: "Corporate & Luxury Residential Buildings",
  },
];

function JobPostingsSchema() {
  const datePosted = "2025-01-01";
  const validThrough = "2026-12-31";
  const schema = OPEN_POSITIONS.map((position) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: position.title,
    description: `Stratton Security Group is hiring a ${position.title} in ${position.location}. Requirements: Active California Guard Card (BSIS). ${position.type} position. Competitive compensation, uniform and equipment provided, professional development training included.`,
    datePosted,
    validThrough,
    employmentType: position.type.includes("Part") ? ["FULL_TIME", "PART_TIME"] : ["FULL_TIME"],
    hiringOrganization: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      sameAs: "https://strattonsecuritygroup.com",
      logo: "https://strattonsecuritygroup.com/images/logo.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Los Angeles",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: {
        "@type": "QuantitativeValue",
        unitText: "HOUR",
      },
    },
    qualifications: "Active California Guard Card (BSIS required). Clean background check. Professional appearance and reliable transportation.",
    industry: "Security Services",
    occupationalCategory: "33-9032.00",
    directApply: true,
    url: "https://strattonsecuritygroup.com/careers/apply",
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function CareersPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "Careers", url: "https://strattonsecuritygroup.com/careers" },
      ]} />
      <JobPostingsSchema />
      <Navigation />
      <CareersContent />
      <Footer />
    </>
  );
}
