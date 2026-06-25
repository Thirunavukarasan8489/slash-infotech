import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { TeamRoster } from "@/components/team/TeamShowcase";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamPrinciples } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Slash Infotech team behind software development, AI, cloud, UI/UX, and cyber security delivery.",
  openGraph: {
    title: "Team | Slash Infotech",
    description: "Meet the senior specialists behind Slash Infotech delivery.",
    images: ["/images/og-image.png"],
    url: "https://slashinfotech.co.uk/team",
  },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="The people behind the build"
        text="A compact senior team connecting product strategy, design, engineering, AI, cloud, and security into one calm delivery rhythm."
      />
      <section className="relative overflow-hidden bg-[#111827] px-4 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(37,99,235,0.22),transparent_30%),radial-gradient(circle_at_90%_70%,rgba(255,255,255,0.1),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl">
          <TeamRoster />
        </div>
      </section>
      <section className="bg-[#F3F4F6] px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How we collaborate"
            title="Small senior teams, visible progress"
            text="Our structure is designed to keep projects focused, fast, and easy to understand for client stakeholders."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {teamPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <article
                  key={principle.title}
                  className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(37,99,235,0.16)]"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-md bg-[#2563EB]/10 text-[#2563EB]">
                    <Icon size={23} />
                  </div>
                  <h2 className="mt-5 text-xl font-black text-[#1E2A3A]">
                    {principle.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {principle.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#1E2A3A] p-8 text-white shadow-[0_24px_80px_rgba(37,99,235,0.25)] md:flex-row md:items-center md:p-12">
          <div>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-white/65">
              Work with us
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
              Bring a senior digital product team into your next build.
            </h2>
          </div>
          <Button href="/contact" variant="light" className="gap-2">
            Start a Conversation <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </>
  );
}
