"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Mail, Target } from "lucide-react";
import { teamMembers } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type TeamMember = (typeof teamMembers)[number];

function DetailRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#8EA0FF]">
        {label}
      </p>
      <div className="mt-1 text-sm font-medium leading-6 text-white/88">
        {children}
      </div>
    </div>
  );
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const isOffset = index % 2 === 1;

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-[#1B2168]/70 bg-[#050829] shadow-[0_24px_70px_rgba(0,0,0,0.35)] outline-none transition",
        "hover:border-[#2563EB]/70 hover:shadow-[0_28px_90px_rgba(37,99,235,0.26)] focus-visible:border-[#2563EB]/80 focus-visible:shadow-[0_28px_90px_rgba(37,99,235,0.3)]",
        isOffset && "sm:mt-10 lg:mt-14",
      )}
      tabIndex={0}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#050829]">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 24vw"
          className="origin-top object-cover object-top transition duration-700 ease-out group-hover:scale-[1.02] group-focus-visible:scale-[1.02]"
          priority={index < 2}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030622]/0 via-transparent to-[#050829]" />
        <div className="absolute inset-0 opacity-45 [background:radial-gradient(circle_at_50%_62%,rgba(72,85,255,0.44),transparent_35%)]" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-xs font-bold text-white backdrop-blur">
            <BriefcaseBusiness size={15} />
            {member.role}
          </div>
        </div>
      </div>

      <div className={cn("relative flex flex-1 flex-col bg-gradient-to-br p-5 sm:p-6", member.accent)}>
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="relative flex flex-1 flex-col">
          <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white sm:text-[26px]">
            {member.name}
          </h3>

          <a
            href={`mailto:${member.email}`}
            className="mt-3 inline-flex w-fit max-w-full items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-xs font-bold text-white/86 transition hover:bg-white hover:text-[#111827] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={`Email ${member.name}`}
          >
            <Mail size={15} />
            <span className="break-all">{member.email}</span>
          </a>

          <div className="mt-5 grid gap-4">
            <DetailRow label="Focus">
              <span className="inline-flex gap-2">
                <Target className="mt-1 shrink-0 text-white/70" size={16} />
                <span>{member.focus}</span>
              </span>
            </DetailRow>
            <DetailRow label="Bio">{member.bio}</DetailRow>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-white/[0.05]" />
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
        "grid items-start gap-6 sm:gap-7",
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
    <section className="relative overflow-hidden bg-[#020416] px-4 py-20 text-white sm:py-24 lg:pb-32">
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
        <div className="mx-auto mt-12 hidden h-px max-w-[520px] bg-white/10 sm:block lg:mt-16">
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


