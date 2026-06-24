import { values } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CompanyStory() {
  return <section className="bg-white px-4 py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><div><p className="font-mono text-sm font-bold uppercase tracking-[0.22em] text-[#2563EB]">Our story</p><h2 className="mt-4 text-3xl font-black text-[#1E2A3A]">A UK technology partner for ambitious digital teams.</h2></div><div className="space-y-5 text-base leading-8 text-slate-600"><p>Slash Infotech was built around a simple idea: modern software should feel beautiful, move fast, and hold up under real-world pressure.</p><p>We work with startups and growing businesses across the UK and beyond, blending product strategy, interface design, cloud engineering, AI implementation, and practical security.</p></div></div></section>;
}

export function MissionVision() {
  return <section className="bg-[#F3F4F6] px-4 py-24"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2"><div className="rounded-lg bg-white p-8 shadow-sm"><h3 className="text-2xl font-black text-[#1E2A3A]">Mission</h3><p className="mt-4 leading-8 text-slate-600">Help teams turn bold digital ideas into secure, scalable, measurable products.</p></div><div className="rounded-lg bg-[#1E2A3A] p-8 text-white shadow-sm"><h3 className="text-2xl font-black">Vision</h3><p className="mt-4 leading-8 text-white/70">Become the trusted technology studio for UK companies building the next generation of intelligent software.</p></div></div></section>;
}

export function TeamGrid() {
  const team = ["Product Strategy", "Engineering", "Cloud & DevOps", "Design Research"];
  return <section className="bg-white px-4 py-24"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Team" title="Senior specialists, one delivery rhythm" /><div className="grid gap-5 md:grid-cols-4">{team.map((role) => <div key={role} className="rounded-lg border border-slate-200 p-6 text-center"><div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#2563EB]/10 text-2xl font-black text-[#2563EB]">/</div><h3 className="mt-5 font-bold text-[#1E2A3A]">{role}</h3></div>)}</div></div></section>;
}

export function Values() {
  return <section className="bg-[#1E2A3A] px-4 py-24 text-white"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Values" title="How we work" light /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{values.map((value) => { const Icon = value.icon; return <div key={value.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6"><Icon className="text-[#60A5FA]" /><h3 className="mt-5 font-bold">{value.title}</h3><p className="mt-3 text-sm leading-7 text-white/65">{value.text}</p></div>; })}</div></div></section>;
}
