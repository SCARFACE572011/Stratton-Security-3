"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-label="Quick contact"
    >
      <div className="flex border-t border-[rgba(192,200,212,0.16)] bg-[#040d1e] pb-[env(safe-area-inset-bottom)]">
        <a
          href={`tel:${SITE_CONFIG.phoneE164}`}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[0.75rem] font-bold uppercase tracking-[0.08em] text-white border-r border-[rgba(192,200,212,0.16)] hover:bg-[#11264a] transition-colors"
        >
          <Phone size={15} className="text-[#3f6bb0]" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[0.75rem] font-bold uppercase tracking-[0.08em] bg-[#1a3a6b] text-white hover:bg-[#224a86] transition-colors"
        >
          <MessageSquare size={15} />
          Free Assessment
        </Link>
      </div>
    </div>
  );
}
