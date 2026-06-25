import { projects } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

export function ProjectGrid() {
  return <section className="bg-[#F3F4F6] px-4 py-24"><div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.title} {...project} />)}</div></section>;
}

export function ProjectCard({ title, category, summary, tags }: { title: string; category: string; summary: string; tags: string[] }) {
  return <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"><div className="h-52 bg-gradient-to-br from-[#2563EB] to-[#1E2A3A] p-6 text-white"><p className="font-mono text-xs uppercase tracking-[0.22em] text-white/70">{category}</p><div className="mt-12 text-7xl font-black opacity-30">/</div></div><div className="p-6"><h2 className="text-xl font-black text-[#1E2A3A]">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{summary}</p><div className="mt-5 flex flex-wrap gap-2">{tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div></div></article>;
}

