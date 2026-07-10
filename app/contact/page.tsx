import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Slash Infotech in the UK for software, AI, cloud, mobile, UI/UX, and cyber security projects.",
  openGraph: {
    title: "Contact | Slash Infotech",
    description: "Start a project with Slash Infotech.",
    images: ["/images/og-image.png"],
    url: "https://slash-infotech.vercel.app/contact",
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
export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Slash Infotech",
    address: "0/2,31 Buccleuch Street, Glasgow, G36PL, UK",
    email: "contact@slashinfotech.co.uk",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to build"
        text="Share the product, platform, or AI workflow you have in mind. We will help shape the next sensible step."
      />
      <section className="bg-[#F3F4F6] px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
