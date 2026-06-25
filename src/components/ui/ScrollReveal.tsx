'use client';

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function ScrollReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
      {children}
    </motion.div>
  );
}

