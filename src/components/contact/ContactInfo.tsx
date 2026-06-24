import { contactCards } from "@/lib/constants";

export function ContactInfo() {
  return <div className="grid gap-5">{contactCards.map((card) => { const Icon = card.icon; return <div key={card.label} className="rounded-lg border border-white/10 bg-[#1E2A3A] p-6 text-white"><Icon className="text-[#60A5FA]" /><h2 className="mt-4 font-bold">{card.label}</h2><p className="mt-2 text-sm leading-7 text-white/70">{card.value}</p></div>; })}<iframe title="Slash Infotech London map" className="h-64 w-full rounded-lg border-0" loading="lazy" src="https://www.google.com/maps?q=Covent%20Garden%20London&output=embed" /></div>;
}
