import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { ogImage, siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "UK Software, AI & Cloud Studio",
  description:
    "Premium software development, AI solutions, cloud computing, mobile apps, UI/UX, and cyber security from Slash Infotech.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Slash Infotech | UK Software, AI & Cloud Studio",
    description: "Premium software, AI, cloud, and digital solutions.",
    images: [ogImage],
    url: siteUrl,
    siteName: "Slash Infotech",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slash Infotech | UK Software, AI & Cloud Studio",
    description: "Premium software, AI, cloud, and digital solutions.",
    images: [`${siteUrl}/images/og-image.png`],
  },
};

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Slash Infotech",
    url: siteUrl,
    email: "hello@slashinfotech.co.uk",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomePage />
    </>
  );
}
