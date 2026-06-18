import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ApplyForm from "@/components/forms/ApplyForm";
import ApplyHero from "@/components/careers/ApplyHero";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/careers/apply" },
  title: "Apply | Join Stratton Security Group",
  description:
    "Apply to join Stratton Security Group. We're hiring licensed, professional security officers in Los Angeles and Southern California. Submit your application today.",
};

export default function ApplyPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "Careers", url: "https://strattonsecuritygroup.com/careers" },
        { name: "Apply", url: "https://strattonsecuritygroup.com/careers/apply" },
      ]} />
      <Navigation />
      <main className="pt-24">
        <ApplyHero />
        <ApplyForm />
      </main>
      <Footer />
    </>
  );
}
