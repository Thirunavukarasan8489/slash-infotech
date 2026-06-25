'use client';

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 0 30px rgba(37,99,235,0.3)" }}
      className={cn("rounded-lg border border-white/10 bg-white/80 p-6 shadow-sm backdrop-blur transition", className)}
    >
      {children}
    </motion.div>
  );
}

