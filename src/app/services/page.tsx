import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import ServicesPageContent from "@/components/services/ServicesPageContent";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Security Services | Patrol, Guard & Protection Programs",
  description:
    "Stratton Security Group provides professional patrol services, armed & unarmed guards, commercial security, residential protection, and specialized security across Los Angeles.",
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "Services", url: "https://strattonsecuritygroup.com/services" },
      ]} />
      <Navigation />
      <ServicesPageContent />
      <CTASection />
      <Footer />
    </>
  );
}
