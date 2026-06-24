import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/constants";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

export function ServicesGrid() {
  return <section className="bg-[#F3F4F6] px-4 py-24"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.slug} slug={service.slug} title={service.title} summary={service.summary} icon={service.icon} />)}</div></section>;
}

export function ServiceCard({ slug, title, summary, icon: Icon }: { slug: string; title: string; summary: string; icon: React.ElementType }) {
  return <AnimatedCard className="border-slate-200 bg-white"><div className="grid h-12 w-12 place-items-center rounded-md bg-[#2563EB]/10 text-[#2563EB]"><Icon size={24} /></div><h2 className="mt-5 text-xl font-black text-[#1E2A3A]">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{summary}</p><Link href={`/services/${slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#2563EB]">Explore <ArrowRight size={16} /></Link></AnimatedCard>;
}
