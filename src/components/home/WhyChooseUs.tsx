'use client';

import { motion } from "framer-motion";
import { differentiators } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="bg-[#1E2A3A] px-4 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Why Slash" title="Built for teams that need certainty" text="We combine strategic product judgement with careful execution across design, code, cloud, and security." light />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return <motion.div variants={fadeInUp} key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur"><Icon className="text-[#60A5FA]" /><h3 className="mt-5 font-bold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p></motion.div>;
          })}
        </motion.div>
      </div>
    </section>
  );
}
