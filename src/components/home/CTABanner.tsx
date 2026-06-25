import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#1E2A3A] p-8 text-white shadow-[0_24px_80px_rgba(37,99,235,0.25)] md:flex-row md:items-center md:p-12">
        <div><p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-white/65">Let us build</p><h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">Ready to Build Something Great?</h2></div>
        <Button href="/contact" variant="light" className="gap-2">Get In Touch <ArrowRight size={18} /></Button>
      </div>
    </section>
  );
}

