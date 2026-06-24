'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCard } from "@/components/ui/AnimatedCard";

export function ServicesSnapshot() {
  return (
    <section className="bg-[#F3F4F6] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="What we do" title="Digital solutions with engineering depth" text="Six connected capabilities for companies that need polished products and reliable delivery." />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.slug} variants={fadeInUp}>
                <AnimatedCard className="h-full border-slate-200 bg-white">
                  <div className="grid h-12 w-12 place-items-center rounded-md bg-[#2563EB]/10 text-[#2563EB]"><Icon size={24} /></div>
                  <h3 className="mt-5 text-xl font-bold text-[#1E2A3A]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.summary}</p>
                  <Link href={`/services/${service.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#2563EB]">Learn More <ArrowRight size={16} /></Link>
                </AnimatedCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
