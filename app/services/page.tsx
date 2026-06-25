import type { Metadata } from "next";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Slash Infotech services across web development, mobile apps, AI, cloud, UI/UX, and cyber security.",
  openGraph: {
    title: "Services | Slash Infotech",
    description: "Digital solutions with engineering depth.",
    images: ["/images/og-image.png"],
    url: "https://slash-infotech.vercel.app/services",
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
export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Capabilities for modern digital products"
        text="Pick one service or combine our teams into a complete product delivery squad."
      />
      <ServicesGrid />
    </>
  );
}

