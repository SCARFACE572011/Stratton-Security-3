"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function SealMark({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/seal-white.png"
      alt="Stratton Security Group seal"
      className={className}
      width={44}
      height={44}
      decoding="async"
    />
  );
}

function Wordmark() {
  return (
    <span className="flex flex-col leading-none">
      <span className="display-sm text-white text-[1.05rem] tracking-[0.005em] whitespace-nowrap">
        Stratton Security Group
      </span>
      <span className="font-[var(--font-sans)] text-[0.5rem] text-silver tracking-[0.34em] uppercase mt-[5px] whitespace-nowrap">
        Private Security
      </span>
    </span>
  );
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Collapse submenus when the drawer closes; auto-open the section for the
  // current route when it opens (e.g. on a /services page).
  useEffect(() => {
    if (!mobileOpen) {
      setMobileExpanded(null);
      return;
    }
    const activeParent = NAV_ITEMS.find(
      (n) => n.children && n.href !== "/" && pathname.startsWith(n.href)
    );
    setMobileExpanded(activeParent?.label ?? null);
  }, [mobileOpen, pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-[#040d1e] transition-all duration-300",
          isScrolled
            ? "border-b border-[rgba(192,200,212,0.16)] shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
            : "border-b border-[rgba(192,200,212,0.08)]"
        )}
      >
        <div className="container-wide">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              isScrolled ? "h-[4.75rem]" : "h-[5.75rem]"
            )}
          >
            {/* Logo lockup */}
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0"
              aria-label="Stratton Security Group — Home"
            >
              <SealMark className="w-11 h-11 transition-transform duration-300 group-hover:scale-105" />
              <Wordmark />
            </Link>

            {/* Desktop Nav */}
            <nav
              ref={dropdownRef}
              className="hidden lg:flex items-center gap-0.5"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.label ? null : item.label)
                      }
                      className={cn(
                        "flex items-center gap-1 px-1.5 xl:px-2.5 py-2 text-[0.78rem] font-semibold tracking-[0.06em] uppercase transition-colors",
                        isActive(item.href) ? "text-white" : "text-silver hover:text-white"
                      )}
                      aria-expanded={activeDropdown === item.label}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "group px-1.5 xl:px-2.5 py-2 text-[0.82rem] font-medium tracking-[0.02em] whitespace-nowrap block relative transition-colors",
                        isActive(item.href) ? "text-white" : "text-silver hover:text-white"
                      )}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.label}
                      <span
                        className={cn(
                          "absolute bottom-0 left-1.5 right-1.5 xl:left-2.5 xl:right-2.5 h-px bg-[#3f6bb0] origin-center transition-transform duration-300 ease-out",
                          isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        )}
                        aria-hidden="true"
                      />
                    </Link>
                  )}

                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-1 w-64 bg-[#0d1f3c] border border-[rgba(192,200,212,0.16)] shadow-[0_16px_40px_rgba(0,0,0,0.6)] overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-2.5 text-[0.8125rem] text-silver hover:text-white hover:bg-[#11264a] transition-colors border-b border-[rgba(192,200,212,0.1)] last:border-0"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-2 xl:gap-3">
              <a
                href={`tel:${SITE_CONFIG.phoneE164}`}
                className="hidden xl:flex items-center gap-2 text-silver hover:text-white text-[0.82rem] font-medium tracking-[0.01em] whitespace-nowrap transition-colors"
              >
                <Phone size={15} />
                {SITE_CONFIG.phone}
              </a>
              <Link
                href="/contact"
                className="hidden md:inline-flex btn-light text-[0.75rem] px-4 xl:px-5 py-3 whitespace-nowrap"
              >
                Get Free Assessment
              </Link>
              {/* Below xl the header phone text is hidden — keep a one-tap call button
                  visible above the fold (the #1 conversion action on mobile), compact
                  enough that the 1024-1280px header row doesn't overflow. */}
              <a
                href={`tel:${SITE_CONFIG.phoneE164}`}
                aria-label={`Call ${SITE_CONFIG.phone}`}
                className="xl:hidden p-2 text-silver hover:text-white transition-colors"
              >
                <Phone size={20} />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-silver hover:text-white transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#040d1e] flex flex-col overflow-y-auto"
          >
            <div className="flex items-center justify-between p-4 border-b border-[rgba(192,200,212,0.16)]">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5"
              >
                <SealMark className="w-9 h-9" />
                <span className="display-sm text-white text-sm tracking-[0.04em]">
                  Stratton Security Group
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-silver"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex-1 py-2" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item, i) => {
                const hasChildren = !!item.children;
                const isOpen = mobileExpanded === item.label;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 + 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-[rgba(192,200,212,0.08)]"
                  >
                    {hasChildren ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setMobileExpanded(isOpen ? null : item.label)}
                          aria-expanded={isOpen}
                          className={cn(
                            "flex w-full items-center justify-between px-5 py-[1.05rem] text-[0.95rem] font-semibold uppercase tracking-[0.05em] transition-colors",
                            isOpen || isActive(item.href) ? "text-white" : "text-silver hover:text-white"
                          )}
                        >
                          {item.label}
                          <ChevronDown
                            size={17}
                            className={cn(
                              "transition-all duration-300",
                              isOpen ? "rotate-180 text-[#6f9bd8]" : "text-steel"
                            )}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: prefersReduced ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="ml-5 mb-3 flex flex-col border-l border-[rgba(192,200,212,0.14)]">
                                {item.children!.map((child) => {
                                  const isViewAll = /view all/i.test(child.label);
                                  return (
                                    <Link
                                      key={child.label}
                                      href={child.href}
                                      onClick={() => setMobileOpen(false)}
                                      className={cn(
                                        "py-2.5 pl-5 text-[0.875rem] transition-colors",
                                        isViewAll
                                          ? "font-medium text-[#6f9bd8] hover:text-white"
                                          : "text-steel hover:text-white"
                                      )}
                                    >
                                      {child.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className={cn(
                          "flex items-center px-5 py-[1.05rem] text-[0.95rem] font-semibold uppercase tracking-[0.05em] transition-colors",
                          isActive(item.href)
                            ? "text-white border-l-2 border-l-[#3f6bb0] pl-[calc(1.25rem-2px)]"
                            : "text-silver hover:text-white"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </nav>

            <div className="p-5 border-t border-[rgba(192,200,212,0.16)] space-y-3">
              <a
                href={`tel:${SITE_CONFIG.phoneE164}`}
                className="btn-on-dark w-full"
              >
                <Phone size={15} />
                {SITE_CONFIG.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-light w-full"
              >
                Request Free Assessment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
