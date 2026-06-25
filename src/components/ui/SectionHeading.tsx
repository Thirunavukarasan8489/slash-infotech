import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <Badge className={light ? "border-white/20 bg-white/10 text-white" : undefined}>{eyebrow}</Badge>
      <h2 className={cn("mt-4 text-3xl font-bold tracking-tight sm:text-4xl", light ? "text-white" : "text-[#1E2A3A]")}>{title}</h2>
      {text ? <p className={cn("mt-4 text-base leading-8", light ? "text-white/70" : "text-slate-600")}>{text}</p> : null}
    </div>
  );
}

