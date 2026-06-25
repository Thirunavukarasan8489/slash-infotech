"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { teamMembers } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type TeamMember = (typeof teamMembers)[number];

function TeamCard({
  member,
  index,
  active = false,
}: {
  member: TeamMember;
  index: number;
  active?: boolean;
}) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={cn(
        "group relative h-[430px] overflow-hidden rounded-[26px] border border-[#1B2168]/60 bg-[#050829] shadow-[0_24px_70px_rgba(0,0,0,0.35)] outline-none",
        "sm:h-[470px] lg:h-[460px] xl:h-[500px]",
      )}
      tabIndex={0}
    >
      <Image
        src={member.image}
        alt={`${member.name}, ${member.focus}`}
        fill
        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 24vw"
        className={cn(
          "object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04]",
          active && "lg:scale-[1.03] lg:opacity-45",
        )}
        priority={index < 2}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030622]/5 via-transparent to-[#050829]/88" />
      <div className="absolute inset-0 opacity-45 [background:radial-gradient(circle_at_50%_58%,rgba(72,85,255,0.45),transparent_34%)]" />

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 z-10 p-5 transition duration-500 ease-out sm:p-6",
          "group-hover:translate-y-3 group-hover:opacity-0 group-focus-visible:translate-y-3 group-focus-visible:opacity-0",
          active && "lg:translate-y-3 lg:opacity-0",
        )}
      >
        <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white sm:text-2xl">
          {member.name}
        </h3>
        <p className="mt-1 text-xs font-medium text-[#7D8DFF]">{member.role}</p>
      </div>

      <div
        className={cn(
          "absolute inset-x-3 bottom-3 z-20 flex min-h-[56%] translate-y-[calc(100%+16px)] flex-col rounded-[22px] border border-white/10 bg-gradient-to-br p-5 text-white opacity-0 shadow-[0_20px_60px_rgba(14,17,130,0.45)] transition duration-500 ease-out sm:inset-x-4 sm:bottom-4 sm:p-6",
          member.accent,
          "group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100",
          active && "lg:translate-y-0 lg:opacity-100",
        )}
      >
        <div className="absolute inset-0 rounded-[22px] opacity-25 [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="relative">
          <h3 className="text-[22px] font-semibold tracking-[-0.035em] text-white sm:text-2xl">
            {member.name}
          </h3>
          <p className="mt-2 text-xs font-medium text-white/55">
            {member.role}
          </p>
        </div>
        <p className="relative mt-auto max-w-[18rem] text-xs leading-5 text-white/86 sm:text-sm sm:leading-6">
          {member.bio}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-white/[0.04]" />
    </motion.article>
  );
}

function TeamRail({
  members,
  roster = false,
}: {
  members: TeamMember[];
  roster?: boolean;
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "grid gap-5",
        roster
          ? "sm:grid-cols-2 xl:grid-cols-4"
          : "sm:grid-cols-2 lg:grid-cols-4",
      )}
    >
      {members.map((member, index) => (
        <TeamCard key={member.name} member={member} index={index} />
      ))}
    </motion.div>
  );
}

export function TeamPreview() {
  return (
    <section className="relative overflow-hidden bg-[#020416] px-4 py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-8%,rgba(37,99,235,0.22),transparent_38%),radial-gradient(circle_at_10%_80%,rgba(37,99,235,0.12),transparent_30%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(105deg,transparent_0%,transparent_44%,rgba(255,255,255,.09)_44.2%,transparent_44.6%,transparent_100%)]" />
      <div className="relative mx-auto max-w-[1450px]">
        <div className="mb-10 gap-6">
          <SectionHeading
            eyebrow="Our team"
            title="Meet the minds behind the build"
            text="A senior product squad with engineering, AI, design, cloud, and security expertise working in one delivery rhythm."
            light
          />
          <div className="flex justify-center">
            <Link
              href="/team"
              className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/10 bg-white/10 px-5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-[#111827]"
            >
              Meet the Team <ArrowRight size={17} />
            </Link>
          </div>
        </div>
        <TeamRail members={teamMembers.slice(0, 4)} />
        <div className="mx-auto mt-7 hidden h-px max-w-[520px] bg-white/10 sm:block">
          <motion.div
            className="h-px w-16 bg-white"
            animate={{ x: [0, 232, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}

export function TeamRoster() {
  return <TeamRail members={teamMembers} roster />;
}

