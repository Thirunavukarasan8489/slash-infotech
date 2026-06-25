'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function LatestProjects() {
  return (
    <section className="bg-[#F3F4F6] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Featured work" title="Recent digital builds" text="A snapshot of the kinds of platforms we design, engineer, and scale." />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => <ScrollReveal key={project.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"><div className="h-48 bg-gradient-to-br from-[#2563EB] to-[#1E2A3A] p-6 text-white"><div className="text-7xl font-black opacity-35">0{index + 1}</div><p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-white/70">{project.category}</p></div><div className="p-6"><h3 className="text-xl font-bold text-[#1E2A3A]">{project.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{project.summary}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div><Link href="/portfolio" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2563EB]">View Case Study <ArrowRight size={16} /></Link></div></ScrollReveal>)}
        </div>
      </div>
    </section>
  );
}

