
import React from "react";
import {
  Code,
  Zap,
  Palette,
  Globe,
  Layers,
  Terminal,
  Database,
  Cpu,
  TrendingUp,
  Clock,
  Rocket,
  Star,
  Lightbulb,
  Target,
} from "lucide-react";

export const techStack = [
  { name: "Next.js 14", icon: React.createElement(Globe, { size: 20 }) },
  { name: "React 18", icon: React.createElement(Layers, { size: 20 }) },
  { name: "Tailwind CSS", icon: React.createElement(Palette, { size: 20 }) },
  { name: "TypeScript", icon: React.createElement(Code, { size: 20 }) },
  { name: "Apps Script", icon: React.createElement(Terminal, { size: 20 }) },
  { name: "Firebase", icon: React.createElement(Database, { size: 20 }) },
  { name: "Cloud Ops", icon: React.createElement(Cpu, { size: 20 }) },
  { name: "Figma UI/UX", icon: React.createElement(Layers, { size: 20 }) },
  { name: "Node.js", icon: React.createElement(Terminal, { size: 20 }) },
  { name: "PostgreSQL", icon: React.createElement(Database, { size: 20 }) },
];

export const stats = [
  { value: "50+", label: "Projects Delivered", icon: React.createElement(Rocket, { className: "text-primary" }), sub: "Across 12 industries" },
  { value: "100%", label: "Client Satisfaction", icon: React.createElement(Star, { className: "text-primary" }), sub: "5.0 avg rating" },
  { value: "< 24hr", label: "Response Time", icon: React.createElement(Clock, { className: "text-primary" }), sub: "WhatsApp & email" },
  { value: "15 Days", label: "Avg. Build Time", icon: React.createElement(TrendingUp, { className: "text-primary" }), sub: "From brief to live" },
];

export const services = [
  {
    icon: React.createElement(Code, { size: 28 }),
    title: "Web Development",
    description: "We engineer high-performance, SEO-optimised websites using React and Next.js 14. From SaaS platforms to e-commerce stores, every site is built for speed, search visibility, and conversion.",
    href: "/services/web",
    features: [
      "Landing Pages & Sales Funnels",
      "E-Commerce Stores (Shopify/Custom)",
      "Web Applications & Dashboards",
      "Core Web Vitals & SEO Optimised",
    ],
    price: "Starting from ₹15,000",
    featured: false,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    alt: "Web development agency India - Next.js React development",
  },
  {
    icon: React.createElement(Zap, { size: 28 }),
    title: "Google Automation",
    description: "Custom Google Apps Script solutions that wire together Sheets, Docs, Gmail & Drive. We eliminate repetitive manual work so your team focuses on what actually grows revenue.",
    href: "/services/automation",
    features: [
      "Google Sheets Automation & Macros",
      "Gmail Auto-Response Workflows",
      "Data Pipelines & ETL Processes",
      "Automated Report Dashboards",
    ],
    price: "Starting from ₹8,000",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    alt: "Google Apps Script automation services India",
  },
  {
    icon: React.createElement(Palette, { size: 28 }),
    title: "Graphic Design",
    description: "Premium brand identities, UI/UX design systems, and social media assets crafted in Figma. We combine aesthetics with strategy to build brands that command trust and authority.",
    href: "/services/design",
    features: [
      "Brand Identity & Visual Systems",
      "Social Media Content Kits",
      "UI/UX Prototyping in Figma",
      "Logo Design & Style Guides",
    ],
    price: "Starting from ₹5,000",
    featured: false,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    alt: "Graphic design agency India - brand identity logo design",
  },
];

export const flowProcess = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We run a structured 45-minute discovery session to map your business goals, current workflow bottlenecks, and define a measurable success target.",
    icon: React.createElement(Lightbulb, { size: 24 }),
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=75",
    alt: "Client discovery call agency",
  },
  {
    step: "02",
    title: "Build & Iterate",
    desc: "Our engineering and design team executes in sprints. You get a staging preview by Day 7 with unlimited revision rounds before final delivery.",
    icon: React.createElement(Target, { size: 24 }),
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=75",
    alt: "Web development build process coding",
  },
  {
    step: "03",
    title: "Launch & Support",
    desc: "We deploy to production, handle DNS, run performance audits, and provide 30 days of white-glove post-launch support at zero additional cost.",
    icon: React.createElement(Rocket, { size: 24 }),
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=75",
    alt: "Website launch and post-launch support",
  },
];

export const whyUsComparison = [
  { feature: "Pricing", others: "Hidden fees & surprises", flowzonic: "Fixed & transparent quotes" },
  { feature: "Delivery", others: "2–3 months average", flowzonic: "15 working days average" },
  { feature: "Revisions", others: "Charged separately", flowzonic: "Unlimited revision rounds" },
  { feature: "Support", others: "No contact after launch", flowzonic: "30-day free post-launch support" },
  { feature: "Ownership", others: "Agency holds your assets", flowzonic: "Full IP & code ownership to you" },
  { feature: "Communication", others: "Weekly update emails only", flowzonic: "Daily updates on WhatsApp" },
];

export const portfolioProjects = [
  {
    title: "EcomFlow – Shopify Redesign",
    category: "Web Development",
    result: "+40% Conversion Rate",
    detail: "Complete Shopify storefront rebuild with custom theme, speed optimisation (99 Lighthouse score), and A/B tested checkout flow.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    alt: "Shopify e-commerce website redesign India",
    href: "/work/web-development",
    tags: ["Next.js", "Shopify", "Tailwind"],
  },
  {
    title: "AutoSheet – Internal CRM",
    category: "Google Automation",
    result: "20 hrs saved per week",
    detail: "Fully automated lead tracking, invoice generation, and email follow-up pipeline built entirely in Google Workspace.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    alt: "Google Sheets CRM automation Apps Script",
    href: "/work/google-automation",
    tags: ["Apps Script", "Google Sheets", "Gmail API"],
  },
  {
    title: "Vizion – Brand Identity Kit",
    category: "Graphic Design",
    result: "3× Client Enquiry Rate",
    detail: "Complete visual identity system including logo suite, typography, colour palette, social media templates, and brand guidelines PDF.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    alt: "Brand identity design India logo design",
    href: "/work/graphic-design",
    tags: ["Figma", "Brand Identity", "Social Kit"],
  },
  {
    title: "HealthSync – Patient Portal",
    category: "Web Development",
    result: "2,000+ Active Users",
    detail: "HIPAA-compliant patient management web app with appointment booking, doctor dashboards, and automated reminder emails.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    alt: "Healthcare web application Next.js development",
    href: "/work/web-development",
    tags: ["Next.js", "Firebase", "TypeScript"],
  },
];

export const testimonials = [
  {
    name: "Priya Mehta",
    role: "Founder, GrowthLeaf Agency",
    location: "Mumbai, India",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    rating: 5,
    text: "Flowzonic delivered our entire brand identity and website in under 12 days. The quality was beyond what I expected at this price point. Our client enquiry rate tripled in the first month.",
  },
  {
    name: "Arjun Kapoor",
    role: "Operations Head, LogiTrack Pvt Ltd",
    location: "Delhi, India",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    text: "The Google Sheets automation they built for our warehouse saves us literally 3–4 hours every single morning. Best ROI we've ever had on a tech investment.",
  },
  {
    name: "Sneha Rajan",
    role: "CEO, Nurture EdTech",
    location: "Bangalore, India",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    rating: 5,
    text: "From the first call to final launch, the communication was impeccable. Our student portal went live in 14 days and performs flawlessly even with 2,000+ concurrent users.",
  },
];

export const industryServed = [
  { name: "E-Commerce", icon: "🛍️", count: "12 projects" },
  { name: "Healthcare", icon: "🏥", count: "6 projects" },
  { name: "EdTech", icon: "🎓", count: "8 projects" },
  { name: "Real Estate", icon: "🏘️", count: "5 projects" },
  { name: "Logistics", icon: "🚚", count: "7 projects" },
  { name: "Finance", icon: "📊", count: "4 projects" },
  { name: "Restaurants", icon: "🍽️", count: "6 projects" },
  { name: "SaaS Startups", icon: "💻", count: "9 projects" },
];

export const faqs = [
  {
    question: "How long does a website take to build from scratch?",
    answer: "Most full business websites are delivered within 7–15 working days. Simple landing pages can go live in 3–5 days. Complex web applications or e-commerce stores may take up to 21 days. We always set a clear timeline in the project brief before we start.",
  },
  {
    question: "What exactly is Google Apps Script automation?",
    answer: "Google Apps Script is JavaScript-based scripting that runs natively inside Google Workspace. We use it to automate tasks like: generating PDF invoices from a Sheet row, sending personalised Gmail campaigns from a spreadsheet, syncing CRM data automatically, or building real-time reporting dashboards — all without any third-party software subscription.",
  },
  {
    question: "Do I retain full ownership of the code and design assets?",
    answer: "Absolutely. Upon final payment, you receive 100% ownership of all source code, design files (Figma), and brand assets. Nothing is locked in our servers or tools. We hand over everything.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes. Every project comes with 30 days of free post-launch support covering bug fixes, minor content tweaks, and performance checks. After 30 days, we offer affordable monthly maintenance retainers.",
  },
  {
    question: "Can you work with my existing brand guidelines or Figma files?",
    answer: "Yes, we work seamlessly with existing brand kits, Figma designs, or design systems. We can also reverse-engineer your current brand and modernise it if needed — this is included in our Brand Refresh service.",
  },
  {
    question: "Is SEO included in web development projects?",
    answer: "On-page SEO fundamentals (meta tags, Open Graph, structured data/schema markup, sitemap.xml, robots.txt, semantic HTML, Core Web Vitals optimisation) are included in every website we build. We also offer separate content SEO strategy as an add-on.",
  },
];

export const heroStats = [
  { value: "50+", label: "Projects Done" },
  { value: "100%", label: "Satisfaction" },
  { value: "48hr", label: "Turnaround" },
  { value: "5.0★", label: "Google Rating" },
];

export const blogPosts = [
  {
    title: "How We Reduced a Client's Manual Work by 20 Hours/Week Using Google Apps Script",
    excerpt: "A step-by-step breakdown of the automation system we built for a logistics company — from problem discovery to deployment.",
    category: "Automation",
    readTime: "6 min read",
    date: "Jan 2025",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=75",
    alt: "Google Apps Script automation tutorial",
    href: "/blog/google-apps-script-automation-case-study",
  },
  {
    title: "Why Next.js 14 Is the Best Framework for Small Business Websites in 2025",
    excerpt: "Server Components, App Router, and image optimisation make Next.js the clear winner for performance-first small business sites.",
    category: "Web Dev",
    readTime: "5 min read",
    date: "Feb 2025",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=75",
    alt: "Next.js 14 web development 2025",
    href: "/blog/nextjs-14-small-business-websites-2025",
  },
  {
    title: "The Complete Brand Identity Checklist: What Your Business Actually Needs in 2025",
    excerpt: "Logo alone isn't a brand. Here's the full checklist of assets every growing business should have before spending on ads.",
    category: "Design",
    readTime: "8 min read",
    date: "Mar 2025",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=75",
    alt: "Brand identity checklist design 2025",
    href: "/blog/brand-identity-checklist-2025",
  },
];
