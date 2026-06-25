import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "UK Software, AI & Cloud Studio",
  description:
    "Premium software development, AI solutions, cloud computing, mobile apps, UI/UX, and cyber security from Slash Infotech.",
  openGraph: {
    title: "Slash Infotech | UK Software, AI & Cloud Studio",
    description: "Premium software, AI, cloud, and digital solutions.",
    images: ["/images/og-image.png"],
    url: "https://slashinfotech.co.uk",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.ico",
    },
  },
};

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Slash Infotech",
    url: "https://slashinfotech.co.uk",
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
