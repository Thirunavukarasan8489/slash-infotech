import type { Metadata } from "next";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore featured Slash Infotech case studies and digital product work.",
  openGraph: {
    title: "Portfolio | Slash Infotech",
    description: "Recent digital builds by Slash Infotech.",
    images: ["/images/og-image.png"],
    url: "https://slash-infotech.vercel.app/portfolio",
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
export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Case studies with measurable outcomes"
        text="A curated look at cloud platforms, mobile products, AI workflows, and secure web applications."
      />
      <ProjectGrid />
    </>
  );
}

