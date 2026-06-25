import { Badge } from "@/components/ui/Badge";

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-[#111827] px-4 pb-20 pt-36 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(37,99,235,0.25),transparent_34%),radial-gradient(circle_at_85%_0%,rgba(255,255,255,0.12),transparent_26%)]" />
      <div className="relative mx-auto max-w-5xl text-center">
        <Badge className="border-white/20 bg-white/10 text-white">{eyebrow}</Badge>
        <h1 className="mt-5 text-4xl font-black uppercase tracking-normal sm:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">{text}</p>
      </div>
    </section>
  );
}

