import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#040d1e] border-t border-[rgba(192,200,212,0.16)]">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/seal-white.png"
                alt="Stratton Security Group seal"
                width={52}
                height={52}
                className="w-13 h-13"
              />
              <span className="flex flex-col leading-none">
                <span className="display-sm text-white text-[1rem] tracking-[0.04em]">
                  Stratton Security Group
                </span>
                <span className="font-[var(--font-sans)] text-[0.5rem] text-silver tracking-[0.34em] uppercase mt-[3px]">
                  Private Security
                </span>
              </span>
            </Link>

            <p className="display-sm text-silver text-[0.9rem] tracking-[0.12em] mb-5">
              Strength. Vigilance. Integrity.
            </p>

            <p className="text-[0.875rem] text-steel leading-relaxed max-w-xs mb-8">
              Qualified, background-checked, rigorously trained protection across
              California — carrying the discipline of military and law-enforcement
              service. Available 24/7, 365 days a year.
            </p>

            <div className="space-y-3">
              <a
                href={`tel:${SITE_CONFIG.phoneE164}`}
                className="flex items-center gap-3 text-[0.875rem] text-silver hover:text-white transition-colors group"
              >
                <span className="w-7 h-7 border border-[rgba(192,200,212,0.2)] flex items-center justify-center group-hover:border-[#3f6bb0] transition-colors">
                  <Phone size={12} />
                </span>
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-[0.875rem] text-silver hover:text-white transition-colors group"
              >
                <span className="w-7 h-7 border border-[rgba(192,200,212,0.2)] flex items-center justify-center group-hover:border-[#3f6bb0] transition-colors">
                  <Mail size={12} />
                </span>
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-start gap-3 text-[0.875rem] text-steel">
                <span className="w-7 h-7 border border-[rgba(192,200,212,0.2)] flex items-center justify-center mt-0.5 shrink-0">
                  <MapPin size={12} />
                </span>
                <span>{SITE_CONFIG.fullAddress}</span>
              </div>
            </div>
          </div>

          {/* Services column */}
          <div className="lg:col-span-4">
            <p className="label-overline-light mb-5">Services</p>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 8).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[0.8125rem] text-steel hover:text-silver transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="lg:col-span-3">
            <p className="label-overline-light mb-5">Company</p>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Industries", href: "/industries" },
                { label: "Service Areas", href: "/service-areas" },
                { label: "Training", href: "/training" },
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[0.8125rem] text-steel hover:text-silver transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(192,200,212,0.12)]">
        <div className="container-wide py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[0.6875rem] text-steel">
              <span>© {currentYear} Stratton Security Group. All rights reserved.</span>
              <span>CA PPO License #{SITE_CONFIG.licenseNumber}</span>
              <span>Licensed · Bonded · Insured</span>
            </div>
            <div className="flex items-center gap-5 text-[0.6875rem]">
              <Link href="/privacy" className="text-steel hover:text-silver transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-steel hover:text-silver transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
