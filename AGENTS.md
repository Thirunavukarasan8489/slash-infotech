# AGENT.md — Slash Infotech Website

## 🎯 Project Overview

Build a **modern, animated, fully responsive** corporate website for **Slash Infotech** — a UK-based tech startup specializing in software development, AI, cloud computing, and digital solutions.

The website must feel **premium, fast, and visually stunning** with smooth animations, clean layout, and professional branding.

---

## 🎨 Brand Identity

### Logo
- File: `/public/images/logo.png`
- Use logo in Navbar (left aligned) and Footer

### Color Palette (extracted from logo)
```
Primary Blue      : #2563EB  (sapphire blue — CTAs, highlights, accents)
Deep Blue         : #1A56DB  (hover states, gradients)
Dark Graphite     : #1E2A3A  (headings, dark sections)
Near Black        : #111827  (body text, footer bg)
Light Gray        : #F3F4F6  (section backgrounds)
White             : #FFFFFF  (cards, clean sections)
Gradient          : linear-gradient(135deg, #2563EB, #1E2A3A)
Glow Accent       : rgba(37, 99, 235, 0.3)  (for glow effects)
```

### Typography
```
Headings  : "Inter" or "Space Grotesk" — Bold, uppercase tracking for hero
Body      : "Inter" — Regular 400/500
Accent    : "Space Grotesk" — for tech labels and tags
```

### Design Style
- Glassmorphism cards with subtle blur and border
- Dark sections alternating with light sections
- Neon blue glow effects on icons and hover states
- Floating/parallax subtle background shapes
- Smooth scroll animations (Framer Motion)

---

## 🛠️ Tech Stack

```
Framework     : Next.js 14+ (App Router)
Language      : TypeScript
Styling       : Tailwind CSS v3
Animation     : Framer Motion
Icons         : Lucide React
Fonts         : next/font (Google Fonts — Inter + Space Grotesk)
Images        : next/image
Forms         : React Hook Form
SEO           : Next.js Metadata API
```

---

## 📁 Project Folder Structure

```
slash-infotech/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── logo-white.png
│   │   └── og-image.png
│   └── favicon.ico
│
├── │   ├── app/
│   │   ├── layout.tsx              ← Root layout (Navbar + Footer)
│   │   ├── page.tsx                ← Home page
│   │   ├── globals.css
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx
│   │   │
│   │   ├── services/
│   │   │   ├── page.tsx            ← All services overview
│   │   │   ├── web-development/
│   │   │   │   └── page.tsx
│   │   │   ├── mobile-apps/
│   │   │   │   └── page.tsx
│   │   │   ├── ai-solutions/
│   │   │   │   └── page.tsx
│   │   │   ├── cloud-computing/
│   │   │   │   └── page.tsx
│   │   │   ├── ui-ux-design/
│   │   │   │   └── page.tsx
│   │   │   └── cyber-security/
│   │   │       └── page.tsx
│   │   │
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   │
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── careers/
│   │   │   └── page.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   │
│   │   ├── privacy-policy/
│   │   │   └── page.tsx
│   │   ├── terms/
│   │   │   └── page.tsx
│   │   └── cookies/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   │
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSnapshot.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── StatsCounter.tsx
│   │   │   ├── TechStack.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── LatestProjects.tsx
│   │   │   └── CTABanner.tsx
│   │   │
│   │   ├── about/
│   │   │   ├── CompanyStory.tsx
│   │   │   ├── MissionVision.tsx
│   │   │   ├── TeamGrid.tsx
│   │   │   └── Values.tsx
│   │   │
│   │   ├── services/
│   │   │   ├── ServicesGrid.tsx
│   │   │   └── ServiceCard.tsx
│   │   │
│   │   ├── portfolio/
│   │   │   ├── ProjectGrid.tsx
│   │   │   └── ProjectCard.tsx
│   │   │
│   │   ├── contact/
│   │   │   ├── ContactForm.tsx
│   │   │   └── ContactInfo.tsx
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── SectionHeading.tsx
│   │       ├── AnimatedCard.tsx
│   │       ├── GlowDivider.tsx
│   │       └── ScrollReveal.tsx
│   │
│   ├── lib/
│   │   ├── constants.ts            ← Site config, nav links, services data
│   │   ├── animations.ts           ← Framer Motion variants
│   │   └── utils.ts
│   │
│   └── types/
│       └── index.ts
│
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 📄 Pages Included

| # | Page | Route | Description |
|---|------|--------|-------------|
| 1 | **Home** | `/` | Hero, services snapshot, stats, tech stack, testimonials, CTA |
| 2 | **About** | `/about` | Company story, mission/vision, team, values, UK presence |
| 3 | **Services** | `/services` | All services overview with animated cards |
| 4 | **Web Development** | `/services/web-development` | Service detail page |
| 5 | **Mobile Apps** | `/services/mobile-apps` | Service detail page |
| 6 | **AI Solutions** | `/services/ai-solutions` | Service detail page |
| 7 | **Cloud Computing** | `/services/cloud-computing` | Service detail page |
| 8 | **UI/UX Design** | `/services/ui-ux-design` | Service detail page |
| 9 | **Cyber Security** | `/services/cyber-security` | Service detail page |
| 10 | **Portfolio** | `/portfolio` | Case studies, project grid with filter |
| 11 | **Blog** | `/blog` | Articles, industry insights |
| 12 | **Blog Post** | `/blog/[slug]` | Individual blog article |
| 13 | **Careers** | `/careers` | Job openings, company culture |
| 14 | **Contact** | `/contact` | Contact form, UK address, map embed |
| 15 | **Privacy Policy** | `/privacy-policy` | GDPR-compliant privacy policy |
| 16 | **Terms & Conditions** | `/terms` | Terms of service |
| 17 | **Cookie Policy** | `/cookies` | UK/GDPR cookie policy |

---

## 🏠 Home Page — Section Breakdown

Build each section as a **separate component** inside `components/home/`:

### 1. `HeroSection.tsx`
- Full viewport height
- Animated headline with typing effect or word reveal
- Subheadline describing Slash Infotech's core offering
- Two CTA buttons: "Explore Services" (primary) + "View Portfolio" (outline)
- Floating animated background: pixel cubes, glowing slash particles
- Logo visible in Navbar above

### 2. `ServicesSnapshot.tsx`
- Section title: "What We Do"
- 6 animated service cards in grid (3×2 on desktop, 1 col on mobile)
- Each card: icon + title + short description + "Learn More" link
- Hover: card lifts with blue glow border

### 3. `WhyChooseUs.tsx`
- Dark graphite background section
- 4 key differentiators with icons
- Animate in on scroll (Framer Motion stagger)

### 4. `StatsCounter.tsx`
- Animated number counters on scroll into view
- Stats: Projects Delivered, Happy Clients, Countries Served, Years Experience

### 5. `TechStack.tsx`
- Scrolling marquee / logo ticker of technologies
- React, Next.js, Node.js, Python, AWS, Azure, Flutter, etc.

### 6. `Testimonials.tsx`
- Client testimonials in card carousel or grid
- Stars rating, client name, company, photo

### 7. `LatestProjects.tsx`
- 3 featured portfolio cards
- Project image, title, tags, "View Case Study" link

### 8. `CTABanner.tsx`
- Full-width gradient banner (blue to dark)
- Headline: "Ready to Build Something Great?"
- CTA Button: "Get In Touch"

---

## 🎬 Animation Guidelines

Use **Framer Motion** for all animations:

```tsx
// Scroll reveal — use on every section
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

// Stagger children
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

// Card hover
whileHover={{ y: -6, boxShadow: "0 0 30px rgba(37,99,235,0.3)" }}
```

- Every section fades in on scroll using `whileInView`
- Cards stagger-animate into view
- Navbar hides on scroll down, reveals on scroll up
- Hero has continuous floating particle animation
- Buttons have subtle scale on hover

---

## 📱 Responsive Breakpoints

```
Mobile   : < 640px   → single column, hamburger menu
Tablet   : 640–1024px → 2 columns
Desktop  : > 1024px  → full layout
```

---

## 🔍 SEO Setup

In every `page.tsx`, export metadata:

```tsx
export const metadata: Metadata = {
  title: "Page Title | Slash Infotech",
  description: "Page description here",
  openGraph: {
    title: "Page Title | Slash Infotech",
    description: "...",
    images: ["/images/og-image.png"],
    url: "https://slashinfotech.co.uk",
  },
}
```

Add JSON-LD schema on Home and Contact pages for local business and organization.

---

## 🌐 Additional Requirements

- **Navbar**: Sticky, blur glassmorphism background on scroll, active link highlight, mobile hamburger
- **Footer**: Dark bg, 4-column layout — Logo+tagline, Services links, Company links, Contact info + social icons
- **Cookie Banner**: Show on first visit (GDPR compliance for UK)
- **404 Page**: Custom branded not-found page
- **Loading**: Add page transition / loading indicator
- **Accessibility**: All images have `alt` text, buttons have `aria-label`, proper heading hierarchy

---

## ✅ Checklist Before Delivery

- [ ] All pages render without errors
- [ ] Fully responsive on mobile, tablet, desktop
- [ ] All animations work smoothly (no jank)
- [ ] Logo displays correctly in Navbar and Footer
- [ ] Contact form validates and submits
- [ ] SEO metadata on all pages
- [ ] No console errors or warnings
- [ ] Lighthouse score: Performance > 90, SEO > 95

---

*This file was generated for the Slash Infotech website project. Follow this spec precisely to deliver a world-class UK tech startup website.*
---

## Work Completed - 2026-06-24

Implemented the Slash Infotech corporate website from the project brief.

Completed items:
- Added the full responsive Next.js App Router website with Home, About, Services, six service detail pages, Portfolio, Blog, Blog Post, Careers, Contact, Privacy Policy, Terms, Cookie Policy, loading, and custom 404 routes.
- Built reusable component structure under `src/components/` for layout, home sections, about sections, services, portfolio, contact, and UI primitives.
- Added shared data, animation helpers, utilities, and types under `src/lib/` and `src/types/`.
- Added animated premium UI sections: hero, services snapshot, why choose us, stats counters, technology ticker, testimonials, featured projects, and CTA banner.
- Added sticky scroll-aware navbar, mobile menu, footer, GDPR-style cookie banner, contact form validation, JSON-LD on Home and Contact, and SEO metadata for all pages.
- Added generated brand assets at `public/images/logo.png`, `public/images/logo-white.png`, and `public/images/og-image.png`.
- Installed required packages: `framer-motion`, `lucide-react`, and `react-hook-form`.
- Adjusted TypeScript path alias to point `@/*` at `src/*`.

Verification completed:
- `npm run lint` passed.
- `npm run build` passed.
- Dev server verified on `http://127.0.0.1:3001` with HTTP checks for Home, Contact, AI Solutions, and a Blog Post route.

Notes:
- The existing root `app/` directory could not be removed by the sandbox, so live routes remain in `app/` while reusable implementation code lives in `src/`.
- `next/font` Google font fetching was unavailable during offline/sandboxed build, so the site uses CSS font stacks matching Inter and Space Grotesk.

---

## Work Completed - 2026-07-01

Updated the Contact form with custom validation rules.

Completed items:
- Made `Name` mandatory and restricted it to letters and spaces only.
- Added a phone number field with a country-code dropdown for UK `+44` and India `+91`.
- Added country-based phone digit validation. UK and India currently require exactly 10 digits.
- Restricted the phone input to digits only and trims input to the selected country digit count.
- Made `Email` mandatory and validated it with an email-only pattern.
- Made `Project brief` mandatory and restricted it to letters, numbers, and spaces only.
- Kept validation client-side with React Hook Form and preserved the existing contact form styling.

Verification completed:
- `npm run lint` passed.
- `npm run build` passed.

---

## Work Completed - 2026-07-01 MongoDB Contact Storage

Connected the Contact form to MongoDB using the `MONGO_URL` environment variable.

Completed items:
- Installed the official `mongodb` package.
- Added `src/lib/mongodb.ts` with a lazy MongoDB connection helper so the client is created only when the API route is called.
- Added `app/api/contact/route.ts` as a Node.js runtime POST endpoint for contact submissions.
- Added server-side validation for name, country code, phone number, email, and project brief before database insertion.
- Saved successful submissions into the `contact_submissions` MongoDB collection with name, country code, phone number, full phone number, email, message, source, and created date.
- Updated `src/components/contact/ContactForm.tsx` to POST validated form data to `/api/contact`.
- Added submit loading, success, and error states to the Contact form.

Verification completed:
- `npm run lint` passed.
- `npm run build` passed.

Notes:
- Did not insert a test contact row into MongoDB to avoid adding dummy data to the live database.
- Optional `MONGO_DB_NAME` can be set in `.env` to force a specific database name; otherwise the database from the MongoDB connection string is used.
