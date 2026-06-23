import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Industries", href: "/industries" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Training", href: "/training" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#040d1e] border-t border-[rgba(192,200,212,0.16)]">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="mb-6 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/seal-white.png"
                alt="Stratton Security Group seal"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <span className="flex flex-col leading-none">
                <span className="display-sm text-[1rem] tracking-[0.04em] text-white">
                  Stratton Security Group
                </span>
                <span className="mt-[3px] font-[var(--font-sans)] text-[0.5rem] uppercase tracking-[0.34em] text-silver">
                  Private Security
                </span>
              </span>
            </Link>

            <p className="display-sm mb-5 text-[0.85rem] tracking-[0.12em] text-[#6f9bd8]">
              Strength. Vigilance. Integrity.
            </p>

            <p className="max-w-xs text-[0.875rem] leading-relaxed text-silver">
              Qualified, background-checked, rigorously trained protection across
              California — available 24/7, 365 days a year.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-md border border-[rgba(192,200,212,0.18)] px-3 py-2">
              <ShieldCheck size={15} className="text-[#6f9bd8]" />
              <span className="text-[0.75rem] tracking-[0.03em] text-silver">
                CA PPO License #{SITE_CONFIG.licenseNumber}
              </span>
            </div>
          </div>

          {/* Services */}
          <nav className="lg:col-span-3" aria-label="Footer — services">
            <p className="label-overline-light mb-6">Services</p>
            <ul className="space-y-3">
              {SERVICES.slice(0, 8).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[0.875rem] text-silver transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav className="lg:col-span-2" aria-label="Footer — company">
            <p className="label-overline-light mb-6">Company</p>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[0.875rem] text-silver transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="label-overline-light mb-6">Get In Touch</p>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phoneE164}`}
                  className="flex items-center gap-3 text-[0.875rem] text-silver transition-colors hover:text-white"
                >
                  <Phone size={15} className="shrink-0 text-[#6f9bd8]" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-[0.8125rem] text-silver transition-colors hover:text-white"
                >
                  <Mail size={15} className="shrink-0 text-[#6f9bd8]" />
                  <span className="break-words">{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[0.875rem] text-silver">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#6f9bd8]" />
                <span>{SITE_CONFIG.fullAddress}</span>
              </li>
            </ul>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#6f9bd8] transition-colors hover:text-white"
            >
              Request Assessment
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(192,200,212,0.12)]">
        <div className="container-wide py-5">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[0.6875rem] text-[#8b97a8]">
              <span>© {currentYear} Stratton Security Group</span>
              <span className="hidden text-[rgba(192,200,212,0.3)] md:inline">·</span>
              <span>Licensed · Bonded · Insured</span>
            </div>
            <div className="flex items-center gap-5 text-[0.6875rem]">
              <Link href="/privacy" className="text-[#8b97a8] transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#8b97a8] transition-colors hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
