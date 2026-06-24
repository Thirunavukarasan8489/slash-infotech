import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export type Project = {
  title: string;
  category: string;
  summary: string;
  tags: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};
