"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/constants";

export function TechStack() {
  const items = [...techStack, ...techStack];
  return (
    <section className="relative overflow-hidden bg-[#020416] py-12 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-8%,rgba(37,99,235,0.22),transparent_38%),radial-gradient(circle_at_10%_80%,rgba(37,99,235,0.12),transparent_30%)]" />
      <motion.div
        animate={{ x: [0, -900] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-4"
      >
        {items.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="rounded-md border border-white/10 bg-white/[0.04] px-8 py-4 font-mono text-sm font-bold text-white/80"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
