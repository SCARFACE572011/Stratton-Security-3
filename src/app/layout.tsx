import type { Metadata, Viewport } from "next";
import { Rajdhani, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { OrganizationSchema } from "./schema";
import Preloader from "@/components/layout/Preloader";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import BackToTop from "@/components/layout/BackToTop";
import LenisProvider from "@/components/layout/LenisProvider";
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://strattonsecuritygroup.com",
    siteName: "Stratton Security Group",
    title: "Stratton Security Group | Professional Security Services",
    description:
      "Professional security services protecting businesses, properties, and communities. 24/7 availability.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stratton Security Group",
    description: "Professional security services. 24/7 availability.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${hanken.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Preloader />
        <LenisProvider>
          <OrganizationSchema />
          {children}
          <MobileStickyBar />
          <BackToTop />
          <Analytics />
        </LenisProvider>
      </body>
    </html>
  );
}
