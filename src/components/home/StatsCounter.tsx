'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "@/lib/constants";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400 });
  const display = useTransform(spring, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => { if (inView) motionValue.set(value); }, [inView, motionValue, value]);
  return <motion.span ref={ref}>{display}</motion.span>;
}

export function StatsCounter() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => <div key={stat.label} className="rounded-md bg-[#F3F4F6] p-6 text-center"><div className="text-4xl font-black text-[#2563EB]"><Counter value={stat.value} suffix={stat.suffix} /></div><p className="mt-2 text-sm font-semibold text-slate-600">{stat.label}</p></div>)}
      </div>
    </section>
  );
}
