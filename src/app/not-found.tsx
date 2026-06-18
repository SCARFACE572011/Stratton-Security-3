import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Home, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="pt-24 min-h-[70vh] flex items-center bg-deep-navy">
        <div className="container-wide py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="label-overline-light mb-5">Error · 404</p>
              <h1 className="display-title text-[clamp(3rem,8vw,6rem)] text-white leading-[0.95] mb-6">
                Page Not
                <br />
                <span className="text-accent-400">In Service</span>
              </h1>
              <p className="text-silver text-[1.0625rem] leading-relaxed max-w-xl mb-8">
                The page you were looking for isn't here — it may have moved or never
                existed. Use the options below to continue, or call our operations
                line directly.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/" className="btn-light text-xs">
                  <Home size={13} />
                  Return Home
                </Link>
                <Link href="/services" className="btn-on-dark text-xs">
                  View Services
                  <ArrowRight size={13} />
                </Link>
                <a href={`tel:${SITE_CONFIG.phoneE164}`} className="btn-on-dark text-xs">
                  <Phone size={13} />
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="card-dark p-8">
                <p className="label-overline-light mb-4">Quick Links</p>
                <ul className="space-y-1">
                  {[
                    { label: "All Security Services", href: "/services" },
                    { label: "Industries We Serve", href: "/industries" },
                    { label: "About Stratton", href: "/about" },
                    { label: "Training Programs", href: "/training" },
                    { label: "Careers", href: "/careers" },
                    { label: "Contact Us", href: "/contact" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between py-3 border-b border-[rgba(192,200,212,0.16)] last:border-0 hover:border-[#3f6bb0]/40 transition-colors"
                      >
                        <span className="text-[0.875rem] text-silver group-hover:text-white transition-colors">
                          {link.label}
                        </span>
                        <ArrowRight
                          size={13}
                          className="text-steel group-hover:text-[#3f6bb0] group-hover:translate-x-1 transition-all"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
