'use client';

import { Star } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Testimonials() {
  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Client voice" title="Trusted by founders and operators" />
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => <ScrollReveal key={item.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"><div className="flex gap-1 text-[#2563EB]">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div><p className="mt-5 text-sm leading-7 text-slate-600">&ldquo;{item.quote}&rdquo;</p><div className="mt-6 flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-full bg-[#2563EB]/10 font-bold text-[#2563EB]">{item.name.charAt(0)}</div><div><p className="font-bold text-[#1E2A3A]">{item.name}</p><p className="text-sm text-slate-500">{item.company}</p></div></div></ScrollReveal>)}
        </div>
      </div>
    </section>
  );
}
