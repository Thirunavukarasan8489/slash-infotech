import type { Metadata } from "next";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/lib/constants";
import { ogImage, siteUrl } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Slash Infotech | UK Software, AI & Cloud Studio",
    template: "%s | Slash Infotech",
  },
  description:
    "Slash Infotech is a UK technology startup building premium software, AI, cloud, and digital product solutions.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Slash Infotech | UK Software, AI & Cloud Studio",
    description: siteConfig.tagline,
    url: siteUrl,
    siteName: "Slash Infotech",
    images: [ogImage],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slash Infotech | UK Software, AI & Cloud Studio",
    description: siteConfig.tagline,
    images: [`${siteUrl}/images/og-image.png`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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

