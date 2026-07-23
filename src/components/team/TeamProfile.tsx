"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FolderKanban,
  Mail,
  MapPin,
  Sparkles,
  Target,
} from "lucide-react";
import { teamMembers } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

type TeamMember = (typeof teamMembers)[number];

function ProfileStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.07] p-4 backdrop-blur">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
        {label}
      </p>
      <p className="mt-2 text-lg font-black text-white sm:text-xl">{value}</p>
    </div>
  );
}

function InfoPanel({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof BriefcaseBusiness;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#2563EB]/10 text-[#2563EB]">
        <Icon size={21} />
      </div>
      <div>
        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-slate-400">
          {label}
        </p>
        <p className="mt-2 text-sm font-semibold leading-6 text-[#1E2A3A]">
          {value}
        </p>
      </div>
    </div>
  );
}

function FinishedProjectCard({
  client,
  project,
  category,
  index,
}: {
  client: string;
  project: string;
  category: string;
  index: number;
}) {
  return (
    <motion.article
      variants={fadeInUp}
      className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#2563EB]/30 hover:shadow-[0_0_34px_rgba(37,99,235,0.16)]"
    >
      <div className="absolute right-4 top-4 text-5xl font-black leading-none text-[#2563EB]/7">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-md bg-[#2563EB]/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-[#1A56DB]">
          <FolderKanban size={14} /> {category}
        </span>
        <h3 className="mt-5 text-lg font-black tracking-normal text-[#1E2A3A]">
          {project}
        </h3>
        <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
          {client}
        </p>
      </div>
    </motion.article>
  );
}
export function TeamProfile({ member }: { member: TeamMember }) {
  const completedProjects =
    ("completedProjects" in member ? member.completedProjects : []) ?? [];

  return (
    <>
      <section className="relative overflow-hidden bg-[#020416] px-4 pb-16 pt-32 text-white sm:pb-20 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(37,99,235,0.26),transparent_32%),radial-gradient(circle_at_86%_18%,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_52%_100%,rgba(37,99,235,0.18),transparent_34%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:54px_54px]" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <motion.div variants={fadeInUp}>
            <div>
              <Link
                href="/team"
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/10 bg-white/10 px-4 text-sm font-bold text-white/85 backdrop-blur transition hover:bg-white hover:text-[#111827]"
              >
                <ArrowLeft size={17} /> Back to Team
              </Link>
            </div>

            {/* <div className="mt-8 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#AFC2FF] backdrop-blur">
              <Sparkles size={15} /> {member.role}
            </div> */}

            <h1 className="mt-5 text-3xl font-black uppercase tracking-normal sm:text-4xl lg:text-5xl">
              {member.name}
            </h1>
            <p className="mt-4 inline-flex items-center text-xl font-semibold leading-8 text-white/88 rounded-md border border-white/10 bg-white/10 px-3 py-2 tracking-[0.18em] backdrop-blur">
              {member.role}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
              {member.headline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${member.email}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#2563EB] px-5 text-sm font-bold text-white shadow-[0_0_28px_rgba(37,99,235,0.32)] transition hover:-translate-y-0.5 hover:bg-[#1A56DB]"
                aria-label={`Email ${member.name}`}
              >
                <Mail size={18} /> Send Email
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#111827]"
              >
                Start a Project <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative mx-auto w-full max-w-[520px] lg:ml-auto"
          >
            <div
              className={cn(
                "absolute -inset-1 rounded-[28px] bg-gradient-to-br opacity-70 blur-xl",
                member.accent,
              )}
            />
            <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/10 shadow-[0_34px_110px_rgba(0,0,0,0.45)] backdrop-blur">
              <div className="relative aspect-[4/5] bg-[#050829]">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(max-width: 1024px) 92vw, 520px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020416]" />
              </div>
              <div
                className={cn(
                  "relative bg-gradient-to-br p-5 sm:p-6",
                  member.accent,
                )}
              >
                <div className="grid gap-3 sm:grid-cols-3">
                  {member.stats.map((stat) => (
                    <ProfileStat key={stat.label} {...stat} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-[#F3F4F6] px-4 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <InfoPanel
            icon={BriefcaseBusiness}
            label="Role"
            value={member.role}
          />
          <InfoPanel icon={MapPin} label="Location" value={member.location} />
          <InfoPanel
            icon={Target}
            label="Available for"
            value={member.availability}
          />
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#2563EB]">
              Profile Focus
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-normal text-[#1E2A3A] sm:text-4xl">
              Built for clear decisions and premium execution.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {member.bio}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {member.expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-[#2563EB]/15 bg-[#2563EB]/10 px-3 py-2 text-sm font-bold text-[#1A56DB]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-5"
          >
            {member.responsibilities.map((item, index) => (
              <motion.article
                key={item}
                variants={fadeInUp}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(37,99,235,0.16)]"
              >
                <div className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#2563EB] text-white shadow-[0_0_22px_rgba(37,99,235,0.28)]">
                    <span className="text-sm font-black">0{index + 1}</span>
                  </div>
                  <p className="text-sm font-semibold leading-7 text-slate-700 sm:text-base">
                    {item}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {completedProjects.length > 0 ? (
        <section className="bg-[#F3F4F6] px-4 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-md border border-[#2563EB]/15 bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#2563EB] shadow-sm">
                <Sparkles size={15} /> Finished Projects
              </span>
              <h2 className="mt-5 text-3xl font-black tracking-normal text-[#1E2A3A] sm:text-4xl">
                Delivered work across banking, education, healthcare, hosting,
                ERP, mobile, and automation.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                A selected record of completed projects led by {member.name},
                spanning operational platforms, institutional systems, and
                digital infrastructure.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
            >
              {completedProjects.map((project, index) => (
                <FinishedProjectCard
                  key={`${project.client}-${project.project}`}
                  index={index}
                  {...project}
                />
              ))}
            </motion.div>
          </div>
        </section>
      ) : null}
      <section className="relative overflow-hidden bg-[#020416] px-4 py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_26%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#8EA0FF]">
              Leadership Highlights
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-normal sm:text-4xl">
              The strengths clients feel in the work
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {member.highlights.map((item) => (
              <article
                key={item}
                className="rounded-lg border border-white/10 bg-white/[0.07] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#2563EB]/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.22)]"
              >
                <CheckCircle2 className="text-[#8EA0FF]" size={28} />
                <h3 className="mt-5 text-xl font-black tracking-normal">
                  {item}
                </h3>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/team"
              className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/10 bg-white/10 px-5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-[#111827]"
            >
              View All Team Members <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}



