import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Blog", description: "Software, AI, cloud, and design insights from Slash Infotech.", openGraph: { title: "Blog | Slash Infotech", description: "Industry insights from Slash Infotech.", images: ["/images/og-image.png"], url: "https://slashinfotech.co.uk/blog" } };
export default function BlogPage() { return <><PageHero eyebrow="Blog" title="Ideas for sharper digital delivery" text="Practical notes on building faster, safer, and more useful technology products." /><section className="bg-[#F3F4F6] px-4 py-24"><div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">{posts.map((post) => <article key={post.slug} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#2563EB]">{post.date} / {post.readTime}</p><h2 className="mt-4 text-xl font-black text-[#1E2A3A]">{post.title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p><Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#2563EB]">Read article <ArrowRight size={16} /></Link></article>)}</div></section></>; }
