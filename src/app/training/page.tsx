import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import TrainingContent from "@/components/training/TrainingContent";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/training" },
  title: "Training & Workshops | Professional Security Development",
  description:
    "Stratton Security Group provides professional security training workshops and certifications for officers and organizations. TEAM, CPR, and Power to Arrest programs.",
};

export default function TrainingPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "Training", url: "https://strattonsecuritygroup.com/training" },
      ]} />
      <Navigation />
      <TrainingContent />
      <Footer />
    </>
  );
}
