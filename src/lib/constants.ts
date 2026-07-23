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
  phone: "+44 7878 949007",
  phones: [
    { label: "UK", value: "+44 7878 949007" },
    { label: "India", value: "+91 98420 98741" },
    { label: "India", value: "+91 84899 02902" },
  ],
  address: "0/2,31 Buccleuch Street, Glasgow, G36PL, UK",
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
  { label: "UK Office", value: siteConfig.address, icon: Globe2 },
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
    slug: "dr-david-martin",
    name: "Dr. David Martin",
    role: "Founder & CEO (Chief Executive Officer)",
    email: "ceo@slashinfotech.co.uk",
    focus: "Product strategy, SaaS platforms, technical discovery",
    bio: "David shapes the company vision, product strategy, and client discovery process so every build starts with a clear commercial outcome.",
    headline:
      "Leading Slash Infotech with a product-first mindset and a clear vision for reliable digital delivery.",
    location: "Glasgow, United Kingdom",
    availability: "Executive discovery and strategic partnerships",
    expertise: [
      "Product strategy",
      "SaaS planning",
      "Technical discovery",
      "Client advisory",
    ],
    responsibilities: [
      "Defines company vision, service direction, and long-term client value.",
      "Guides discovery sessions to connect business goals with practical technical plans.",
      "Keeps leadership decisions focused on measurable outcomes and delivery clarity.",
    ],
    highlights: [
      "Founder-led delivery standards",
      "Commercial outcome mapping",
      "Senior stakeholder alignment",
    ],
    stats: [
      { label: "Primary focus", value: "Strategy" },
      { label: "Delivery lens", value: "SaaS" },
      { label: "Client mode", value: "Advisory" },
    ],
    completedProjects: [
      {
        client: "Indian Overseas Bank",
        project: "Lead Bank of India - Annual Credit Plan",
        category: "Banking",
      },
      {
        client: "KS Readymades",
        project: "ERP",
        category: "Enterprise Software",
      },
      {
        client: "JJ Scientific Solutions",
        project: "Organization Management",
        category: "Operations",
      },
      {
        client: "Srii Neevi Hospital and Medicals",
        project: "Hospital Management System",
        category: "Healthcare",
      },
      {
        client: "Government Arts and Science Colleges",
        project: "Website Hosting",
        category: "Hosting",
      },
      {
        client: "Shuba Engineering College",
        project: "Website Hosting",
        category: "Hosting",
      },
      {
        client: "Mahi Institute of Technology",
        project: "Website Hosting",
        category: "Hosting",
      },
      {
        client: "Kings Catering Management Institute and others",
        project: "Website Hosting",
        category: "Hosting",
      },
      {
        client: "General Stores",
        project: "Mobile App Creation",
        category: "Mobile App",
      },
      {
        client: "Delight Computers",
        project: "Workflow Automation",
        category: "Automation",
      },
      {
        client: "Union Bank of India - Pudukkottai",
        project: "Automation of Backend Records",
        category: "Banking Automation",
      },
      {
        client: "H.H The Rajahs College",
        project: "DFC Management System",
        category: "Education",
      },
      {
        client: "Career Brighten Computers",
        project: "Institute Management System",
        category: "Education",
      },
    ],    image: "/images/team/DavidMartin.png",
    accent: "from-[#2526A9] to-[#11155F]",
  },
  {
    slug: "mr-kasthuri-raja",
    name: "Mr. Kasthuri Raja",
    role: "Director",
    email: "director@slashinfotech.co.uk",
    focus: "Interface systems, conversion journeys",
    bio: "Kasthuri guides client relationships, delivery coordination, and user-focused product decisions from concept to launch.",
    headline:
      "Connecting client goals, product decisions, and delivery coordination into one confident path.",
    location: "United Kingdom and India delivery network",
    availability: "Client relationships and delivery coordination",
    expertise: [
      "Client strategy",
      "Delivery coordination",
      "Conversion journeys",
      "Interface systems",
    ],
    responsibilities: [
      "Coordinates project priorities across design, engineering, and client stakeholders.",
      "Shapes user journeys that support conversion, clarity, and long-term maintainability.",
      "Maintains a practical rhythm from early planning through launch readiness.",
    ],
    highlights: [
      "Client communication lead",
      "Launch coordination",
      "User journey alignment",
    ],
    stats: [
      { label: "Primary focus", value: "Clients" },
      { label: "Delivery lens", value: "UX" },
      { label: "Client mode", value: "Coordination" },
    ],
    image: "/images/team/Kasthuriraja.png",
    accent: "from-[#3228C8] to-[#17157A]",
  },
  {
    slug: "mr-mathankumar",
    name: "Mr. Mathankumar",
    role: "Managing Director",
    email: "managingdirector@slashinfotech.co.uk",
    focus: "AI assistants, RAG workflows, intelligent operations",
    bio: "Mathankumar connects business operations with practical AI solutions, automation workflows, and scalable digital product planning.",
    headline:
      "Turning operational complexity into useful AI systems, automation flows, and scalable product plans.",
    location: "India delivery leadership",
    availability: "AI solution planning and operations transformation",
    expertise: [
      "AI assistants",
      "RAG workflows",
      "Automation planning",
      "Operations design",
    ],
    responsibilities: [
      "Maps operational workflows into AI-assisted systems that are useful and governable.",
      "Plans automation opportunities with clear constraints, risks, and adoption goals.",
      "Supports scalable product roadmaps across AI, data, and business operations.",
    ],
    highlights: [
      "AI workflow planning",
      "Operations intelligence",
      "Automation strategy",
    ],
    stats: [
      { label: "Primary focus", value: "AI" },
      { label: "Delivery lens", value: "Ops" },
      { label: "Client mode", value: "Planning" },
    ],
    image: "/images/team/Mathankumar.png",
    accent: "from-[#2435C5] to-[#111B6B]",
  },
  {
    slug: "mr-thirunavukarasan",
    name: "Mr. Thirunavukarasan",
    role: "Executive Director",
    email: "executivedirector@slashinfotech.co.uk",
    focus: "Full-stack systems, API design, delivery standards, UX research",
    bio: "Thirunavukarasan leads engineering delivery, full-stack architecture, and quality standards across web platforms, APIs, and internal systems.",
    headline:
      "Leading engineering execution across full-stack platforms, APIs, UX research, and delivery quality.",
    location: "India engineering leadership",
    availability: "Architecture reviews and delivery leadership",
    expertise: [
      "Full-stack architecture",
      "API design",
      "Quality standards",
      "UX research",
    ],
    responsibilities: [
      "Owns engineering delivery standards for web platforms, APIs, and internal systems.",
      "Reviews architecture choices for performance, maintainability, and implementation speed.",
      "Connects UX insight with technical execution so products stay clear and usable.",
    ],
    highlights: [
      "Engineering delivery lead",
      "Architecture reviews",
      "Quality systems",
    ],
    stats: [
      { label: "Primary focus", value: "Build" },
      { label: "Delivery lens", value: "Systems" },
      { label: "Client mode", value: "Execution" },
    ],
    image: "/images/team/Thirunavukarasan.png",
    accent: "from-[#2D2BB8] to-[#10145E]",
  },
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

