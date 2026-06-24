import type { Metadata } from "next";
import { CompanyStory, MissionVision, TeamGrid, Values } from "@/components/about/AboutSections";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "About", description: "Learn about Slash Infotech, a UK software, AI, cloud, and digital product studio.", openGraph: { title: "About | Slash Infotech", description: "A UK technology partner for ambitious digital teams.", images: ["/images/og-image.png"], url: "https://slashinfotech.co.uk/about" } };
export default function AboutPage() { return <><PageHero eyebrow="About" title="Technology with clarity and momentum" text="We help companies move from idea to launch with senior product, design, engineering, cloud, and security expertise." /><CompanyStory /><MissionVision /><TeamGrid /><Values /></>; }
