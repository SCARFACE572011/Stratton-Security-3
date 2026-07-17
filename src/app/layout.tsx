import type { Metadata, Viewport } from "next";
import { Rajdhani, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { OrganizationSchema } from "./schema";
import { IS_INDEXABLE } from "@/lib/utils";
import SiteChrome from "@/components/layout/SiteChrome";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";

// Display: Rajdhani — a squared, technical, defense-tech / HUD-style face used
// for all (uppercase) headlines, giving a tactical-military character that pairs
// with the lion seal. Body/UI: Hanken Grotesk — a clean, modern grotesque.
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-rajdhani",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

// Mono — for small tactical "data/registry" labels (eyebrows, credentials, ticks).
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-mono-jb",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#040d1e",
  // Required for env(safe-area-inset-*) to be non-zero on iPhones — the mobile
  // sticky bar pads itself above the home indicator.
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://strattonsecuritygroup.com"),
  title: {
    default: "Stratton Security Group | Professional Security Services",
    template: "%s | Stratton Security Group",
  },
  description:
    "Stratton Security Group delivers professional patrol, guard, and security management services to commercial, residential, and industrial clients. 24/7 availability.",
  keywords: [
    "security services",
    "private security",
    "patrol services",
    "commercial security",
    "residential security",
    "security guard",
    "security company",
    "Stratton Security",
  ],
  authors: [{ name: "Stratton Security Group" }],
  creator: "Stratton Security Group",
  // No og/twitter title, description, or url here: leaving them unset lets every
  // page's own <title>/description/canonical flow into its social card instead of
  // all subpages sharing the homepage's card text.
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Stratton Security Group",
  },
  twitter: {
    card: "summary_large_image",
  },
  // noindex everywhere until the real domain is live — see IS_INDEXABLE in lib/utils.
  robots: IS_INDEXABLE
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : { index: false, follow: false },
  // Google Search Console: set GOOGLE_SITE_VERIFICATION in the environment to
  // emit the verification <meta> tag. Omitted automatically when unset.
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${hanken.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <OrganizationSchema />
        <SiteChrome>{children}</SiteChrome>
        <Analytics />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}
