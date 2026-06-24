'use client';

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#111827] px-4 pt-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.24),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.12),transparent_26%)]" />
      {[...Array(18)].map((_, index) => (
        <motion.span key={index} className="absolute h-2 w-2 rounded-sm bg-[#2563EB]/50" style={{ left: `${(index * 17) % 100}%`, top: `${18 + ((index * 23) % 70)}%` }} animate={{ y: [0, -22, 0], opacity: [0.2, 0.9, 0.2], rotate: [0, 45, 0] }} transition={{ duration: 4 + (index % 5), repeat: Infinity, ease: "easeInOut" }} />
      ))}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          <motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="font-mono text-sm font-bold uppercase tracking-[0.35em] text-[#93C5FD]">UK digital product studio</motion.p>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">Build sharper software with AI, cloud, and design.</motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} className="mt-6 max-w-2xl text-lg leading-8 text-white/72">Slash Infotech partners with ambitious teams to design, engineer, and scale premium digital products across web, mobile, AI, cloud, and security.</motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/services" className="gap-2">Explore Services <ArrowRight size={18} /></Button>
            <Button href="/portfolio" variant="outline" className="gap-2"><PlayCircle size={18} /> View Portfolio</Button>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 }} className="relative hidden aspect-square lg:block">
          <div className="absolute inset-10 rounded-full border border-white/10 bg-white/[0.03] shadow-[0_0_90px_rgba(37,99,235,0.25)] backdrop-blur" />
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} className="absolute inset-20 rounded-full border border-dashed border-[#2563EB]/50" />
          <div className="absolute inset-0 grid place-items-center text-[15rem] font-black text-white drop-shadow-[0_0_40px_rgba(37,99,235,0.55)]">/</div>
        </motion.div>
      </div>
    </section>
  );
}
