import type { Metadata } from "next";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Slash Infotech | UK Software, AI & Cloud Studio",
    template: "%s | Slash Infotech",
  },
  description:
    "Slash Infotech is a UK technology startup building premium software, AI, cloud, and digital product solutions.",
  openGraph: {
    title: "Slash Infotech",
    description: siteConfig.tagline,
    url: siteConfig.url,
    images: ["/images/og-image.png"],
    type: "website",
  },
  icons: {
    icon: "../favicon.ico",
    shortcut: "../favicon.ico",
    apple: "../favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "../favicon.ico",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-white font-sans text-[#111827] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

