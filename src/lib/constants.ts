import {
  BrainCircuit,
  CloudCog,
  Code2,
  Palette,
  Globe2,
  Layers3,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import type { BlogPost, Project, Service } from "@/types";

export const siteConfig = {
  name: "Slash Infotech",
  url: "https://slash-infotech.vercel.app",
  email: "contact@slashinfotech.co.uk",
  phone: "+44 20 4571 8420",
  address: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ",
  tagline: "Software, AI, cloud, and digital products built with precision.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    summary: "High-performance websites, SaaS platforms, and portals.",
    description:
      "We build resilient web platforms with modern architecture, polished interfaces, secure APIs, and measurable business outcomes.",
    icon: Code2,
    features: [
      "Next.js apps",
      "SaaS dashboards",
      "API integrations",
      "Performance audits",
    ],
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    summary: "Native-quality mobile experiences for iOS and Android.",
    description:
      "From discovery to store launch, our mobile teams create fast, intuitive apps with scalable backend services.",
    icon: Smartphone,
    features: [
      "Flutter apps",
      "React Native",
      "Push notifications",
      "App store launch",
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    summary: "Practical AI assistants, automation, and data intelligence.",
    description:
      "We turn AI ideas into governed products that automate workflows, retrieve knowledge, and support better decisions.",
    icon: BrainCircuit,
    features: [
      "AI assistants",
      "RAG systems",
      "Workflow automation",
      "Model integration",
    ],
  },
  {
    slug: "cloud-computing",
    title: "Cloud Computing",
    summary: "Secure cloud infrastructure, migration, and DevOps.",
    description:
      "We design cloud foundations that are observable, cost-aware, scalable, and ready for mission-critical workloads.",
    icon: CloudCog,
    features: [
      "AWS and Azure",
      "CI/CD pipelines",
      "Serverless",
      "Infrastructure as code",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    summary: "Research-led digital interfaces users trust and enjoy.",
    description:
      "Our design process blends user insight, prototyping, and crisp visual systems to reduce friction and lift conversion.",
    icon: Palette,
    features: [
      "Product discovery",
      "Wireframes",
      "Design systems",
      "Usability testing",
    ],
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    summary: "Security reviews, hardening, and compliance readiness.",
    description:
      "We help teams protect digital products with pragmatic security controls, reviews, and operational best practices.",
    icon: LockKeyhole,
    features: [
      "Security audits",
      "Cloud hardening",
      "App security",
      "GDPR support",
    ],
  },
];

export const differentiators = [
  {
    title: "UK-first delivery",
    text: "Clear communication, practical milestones, and senior ownership.",
    icon: MapPin,
  },
  {
    title: "Product thinking",
    text: "We design for business impact, not just ticket completion.",
    icon: Sparkles,
  },
  {
    title: "Cloud-native builds",
    text: "Every solution is engineered for scale, resilience, and observability.",
    icon: CloudCog,
  },
  {
    title: "Security by design",
    text: "Privacy and protection are built into the foundations.",
    icon: ShieldCheck,
  },
];

export const stats = [
  { label: "Projects Delivered", value: 80, suffix: "+" },
  { label: "Happy Clients", value: 45, suffix: "+" },
  { label: "Countries Served", value: 8, suffix: "" },
  { label: "Years Experience", value: 6, suffix: "+" },
];

export const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "AWS",
  "Azure",
  "Flutter",
  "TypeScript",
  "PostgreSQL",
  "Docker",
];

export const projects: Project[] = [
  {
    title: "FinOps Intelligence Portal",
    category: "Cloud + AI",
    summary:
      "A cloud cost command centre with anomaly detection and executive reporting.",
    tags: ["Next.js", "AWS", "AI"],
  },
  {
    title: "Healthcare Booking Platform",
    category: "Web Development",
    summary:
      "A secure scheduling platform with role-based workflows and live notifications.",
    tags: ["React", "Node.js", "Security"],
  },
  {
    title: "Retail Mobile Commerce",
    category: "Mobile Apps",
    summary:
      "A mobile shopping experience with loyalty, payments, and inventory sync.",
    tags: ["Flutter", "API", "UX"],
  },
];

export const testimonials = [
  {
    name: "Amelia Clarke",
    company: "Northstar Analytics",
    quote:
      "Slash Infotech helped us ship a polished AI product faster than our internal plan, with no loss of engineering quality.",
  },
  {
    name: "Daniel Hughes",
    company: "BrightCart UK",
    quote:
      "Their team brought calm structure to a complex rebuild and delivered a platform our operators genuinely enjoy using.",
  },
  {
    name: "Priya Raman",
    company: "Aster Health",
    quote:
      "The communication, design detail, and security thinking were excellent from discovery through launch.",
  },
];

export const posts: BlogPost[] = [
  {
    slug: "ai-readiness-for-growing-teams",
    title: "AI Readiness for Growing Teams",
    excerpt:
      "A practical checklist for turning automation ideas into secure, useful AI workflows.",
    date: "June 12, 2026",
    readTime: "5 min read",
  },
  {
    slug: "cloud-costs-without-chaos",
    title: "Cloud Costs Without Chaos",
    excerpt:
      "How product teams can keep cloud infrastructure fast, observable, and budget-aware.",
    date: "May 28, 2026",
    readTime: "4 min read",
  },
  {
    slug: "design-systems-that-scale",
    title: "Design Systems That Scale",
    excerpt:
      "The small decisions that keep interfaces consistent as products and teams grow.",
    date: "May 6, 2026",
    readTime: "6 min read",
  },
];

export const contactCards = [
  { label: "Email", value: siteConfig.email, icon: Mail },
  { label: "Phone", value: siteConfig.phone, icon: Phone },
  { label: "London Office", value: siteConfig.address, icon: Globe2 },
];

export const values = [
  {
    title: "Craft",
    text: "We sweat the details users actually feel.",
    icon: Layers3,
  },
  {
    title: "Momentum",
    text: "We keep teams moving with sharp decisions and visible progress.",
    icon: Rocket,
  },
  {
    title: "Clarity",
    text: "We explain tradeoffs plainly and document what matters.",
    icon: Zap,
  },
  {
    title: "Partnership",
    text: "We work like an extension of your product team.",
    icon: Users,
  },
];

export const teamMembers = [
  {
    name: "David Martin",
    role: "CEO (Chief Executive Officer)",
    focus: "Product strategy, SaaS platforms, technical discovery",
    bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/images/team/DavidMartin.png",
    accent: "from-[#2526A9] to-[#11155F]",
  },
  {
    name: "Kasthuriraja",
    role: "Director",
    focus: "Full-stack systems, API design, delivery standards",
    bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/images/team/Kasthuriraja.png",
    accent: "from-[#3228C8] to-[#17157A]",
  },
  {
    name: "Mathankumar",
    role: "Managing Director",
    focus: "AI assistants, RAG workflows, intelligent operations",
    bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/images/team/Mathankumar.png",
    accent: "from-[#2435C5] to-[#111B6B]",
  },
  {
    name: "Thirunavukarasan",
    role: "Executive Director",
    focus: "UX research, interface systems, conversion journeys",
    bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/images/team/Thirunavukarasan.png",
    accent: "from-[#2D2BB8] to-[#10145E]",
  },
  // {
  //   name: "Oliver Reed",
  //   role: "Cloud Architecture",
  //   focus: "AWS, Azure, CI/CD, observability, cost control",
  //   bio: "Oliver builds reliable cloud foundations with observability, automation, and cost control baked into the delivery model.",
  //   image: "/images/team/team-a-4.png",
  //   accent: "from-[#1E2A3A] to-[#1A56DB]",
  // },
  // {
  //   name: "Sofia Patel",
  //   role: "Security & GDPR",
  //   focus: "Application security, GDPR readiness, cloud hardening",
  //   bio: "Sofia helps product teams ship confidently with practical security reviews, privacy controls, and cloud hardening guidance.",
  //   image: "/images/team/team-b-3.png",
  //   accent: "from-[#111827] to-[#2526A9]",
  // },
];

export const teamPrinciples = [
  {
    title: "Senior ownership",
    text: "Every project is guided by experienced product and engineering leads.",
    icon: Users,
  },
  {
    title: "One delivery rhythm",
    text: "Design, engineering, cloud, and AI move together with visible milestones.",
    icon: Target,
  },
  {
    title: "Calm communication",
    text: "Clients get clear decisions, plain-language updates, and useful documentation.",
    icon: Sparkles,
  },
];

