"use client";

import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin, Clock, Shield, Star } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

const LICENSE_POINTS = [
  "Licensed by California BSIS",
  "Fully bonded & insured",
  "General liability coverage",
  "Workers’ compensation insurance",
];

export default function ContactContent() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" } as const,
    transition: { duration: 0.7, delay: shouldReduceMotion ? 0 : delay, ease: EASE },
  });

  return (
    <section className="section-padding bg-white" aria-labelledby="contact-heading">
      <div className="container-wide">
        {/* Centered editorial header */}
        <m.div {...reveal()} className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="label-overline mb-6">Start the Conversation</p>
          <span className="accent-line mx-auto mb-8" aria-hidden="true" />
          <h2
            id="contact-heading"
            className="display-title text-[#040d1e]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Tell Us How We Can Protect You
          </h2>
          <p className="text-[#4b5563] text-lg leading-relaxed mt-7 max-w-2xl mx-auto">
            Share a few details about your property and security needs. A senior
            Stratton advisor will respond within one business day.
          </p>
        </m.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left — Form */}
          <m.div {...reveal()} className="lg:col-span-7">
            <ContactForm />
          </m.div>

          {/* Right — Contact details (light surface cards) */}
          <div className="lg:col-span-5 space-y-12">
            {/* Direct contact */}
            <m.div {...reveal(0.08)}>
              <p className="label-overline mb-6">Direct Contact</p>
              <div className="space-y-4">
                <a
                  href={`tel:${SITE_CONFIG.phoneE164}`}
                  className="card group flex items-center gap-5 p-6"
                >
                  <div className="w-12 h-12 rounded-xl border border-platinum bg-[#f4f6f9] flex items-center justify-center shrink-0 transition-colors group-hover:border-[#1a3a6b]/40">
                    <Phone size={20} className="text-[#1a3a6b]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[0.6875rem] text-steel tracking-[0.18em] uppercase mb-1">
                      Phone
                    </p>
                    <p className="text-[#0a0a0a] text-base font-medium">
                      {SITE_CONFIG.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="card group flex items-center gap-5 p-6"
                >
                  <div className="w-12 h-12 rounded-xl border border-platinum bg-[#f4f6f9] flex items-center justify-center shrink-0 transition-colors group-hover:border-[#1a3a6b]/40">
                    <Mail size={20} className="text-[#1a3a6b]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[0.6875rem] text-steel tracking-[0.18em] uppercase mb-1">
                      Email
                    </p>
                    <p className="text-[#0a0a0a] text-base font-medium break-all">
                      {SITE_CONFIG.email}
                    </p>
                  </div>
                </a>

                <a
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group flex items-center gap-5 p-6"
                >
                  <div className="w-12 h-12 rounded-xl border border-platinum bg-[#f4f6f9] flex items-center justify-center shrink-0 transition-colors group-hover:border-[#1a3a6b]/40">
                    <MapPin size={20} className="text-[#1a3a6b]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[0.6875rem] text-steel tracking-[0.18em] uppercase mb-1">
                      Office — View on Maps ↗
                    </p>
                    <p className="text-[#0a0a0a] text-[0.9375rem]">
                      {SITE_CONFIG.address}
                    </p>
                    <p className="text-steel text-[0.8125rem] mt-0.5">
                      {SITE_CONFIG.city}, {SITE_CONFIG.state} {SITE_CONFIG.zip}
                    </p>
                  </div>
                </a>
              </div>
            </m.div>

            {/* Hours */}
            <m.div {...reveal(0.12)}>
              <p className="label-overline mb-6">Operations Hours</p>
              <div className="card flex items-center gap-5 p-6">
                <div className="w-12 h-12 rounded-xl border border-platinum bg-[#f4f6f9] flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-[#1a3a6b]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-[0.6875rem] text-steel tracking-[0.18em] uppercase">
                      Always Available
                    </span>
                  </div>
                  <p className="text-[#0a0a0a] text-base font-medium">{SITE_CONFIG.hours}</p>
                </div>
              </div>
            </m.div>

            {/* Reviews */}
            <m.div {...reveal(0.16)}>
              <p className="label-overline mb-6">Verified Reviews</p>
              <div className="card p-8">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} className="text-accent" fill="#1a3a6b" strokeWidth={0} />
                  ))}
                  <span className="ml-2 text-[0.8125rem] text-[#0a0a0a] font-medium">5.0</span>
                </div>
                <p className="text-[0.9375rem] text-[#4b5563] italic leading-relaxed mb-4">
                  &ldquo;Their team has truly set the bar when it comes to providing security services.&rdquo;
                </p>
                <p className="text-[0.75rem] text-steel tracking-wide">
                  Verified client reviews on Bark.com
                </p>
              </div>
            </m.div>

            {/* License */}
            <m.div {...reveal(0.2)}>
              <p className="label-overline mb-6">Credentials</p>
              <div className="card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl border border-platinum bg-[#f4f6f9] flex items-center justify-center shrink-0">
                    <Shield size={20} className="text-[#1a3a6b]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[#0a0a0a] text-base font-medium mb-1">
                      California Private Patrol Operator
                    </p>
                    <p className="text-[0.75rem] text-steel tracking-wide">
                      PPO License #{SITE_CONFIG.licenseNumber}
                    </p>
                  </div>
                </div>
                <div className="space-y-2.5 text-[0.875rem] text-[#4b5563]">
                  {LICENSE_POINTS.map((point) => (
                    <p key={point} className="flex items-center gap-2.5">
                      <Shield size={13} className="text-accent shrink-0" strokeWidth={2} />
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
