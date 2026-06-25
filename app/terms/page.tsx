import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms for using the Slash Infotech website and engaging our digital services.",
  openGraph: {
    title: "Terms & Conditions | Slash Infotech",
    description:
      "Terms for using the Slash Infotech website and engaging our digital services.",
    images: ["/images/og-image.png"],
    url: "https://slashinfotech.co.uk/terms",
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
export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        text="Terms for using the Slash Infotech website and engaging our digital services."
      />
      <section className="mx-auto max-w-4xl px-4 py-20 text-slate-700">
        <div className="space-y-6 leading-8">
          <p>
            Slash Infotech is committed to transparent, responsible digital
            delivery for clients in the UK and international markets.
          </p>
          <h2 className="text-2xl font-black text-[#1E2A3A]">
            Your responsibilities
          </h2>
          <p>
            Use this website and our services lawfully, provide accurate project
            information, and respect intellectual property, confidentiality, and
            applicable data protection obligations.
          </p>
          <h2 className="text-2xl font-black text-[#1E2A3A]">
            Our responsibilities
          </h2>
          <p>
            We handle enquiries carefully, protect personal information, and
            apply reasonable technical and organisational measures for
            communication and project delivery.
          </p>
          <h2 className="text-2xl font-black text-[#1E2A3A]">Contact</h2>
          <p>
            For questions about this policy, email hello@slashinfotech.co.uk.
          </p>
        </div>
      </section>
    </>
  );
}
