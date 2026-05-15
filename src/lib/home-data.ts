
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
  { name: "Next.js 15", icon: React.createElement(Globe, { size: 20 }) },
  { name: "React 19", icon: React.createElement(Layers, { size: 20 }) },
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
  { value: "50+", label: "Projects Delivered", icon: React.createElement(Rocket, { className: "text-primary" }), sub: "Across 12 global industries" },
  { value: "100%", label: "Client Satisfaction", icon: React.createElement(Star, { className: "text-primary" }), sub: "Verified 5.0 average rating" },
  { value: "< 24hr", label: "Response Time", icon: React.createElement(Clock, { className: "text-primary" }), sub: "Direct WhatsApp & email support" },
  { value: "15 Days", label: "Avg. Build Time", icon: React.createElement(TrendingUp, { className: "text-primary" }), sub: "Fast-track delivery pipeline" },
];

export const services = [
  {
    icon: React.createElement(Code, { size: 28 }),
    title: "Web Development",
    description: "Expert Next.js and React development for high-performance, SEO-optimized websites. From custom SaaS platforms to scalable e-commerce stores, we build lightning-fast digital engines designed for conversion and search visibility.",
    href: "/services/web",
    features: [
      "Next.js 15 & React 19 Development",
      "Headless CMS & E-Commerce Solutions",
      "Full-Stack Web Applications",
      "Core Web Vitals & Technical SEO",
    ],
    price: "Starting from ₹15,000",
    featured: false,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    alt: "Next.js Web Development Agency - Professional React Development Services",
  },
  {
    icon: React.createElement(Zap, { size: 28 }),
    title: "Google Automation",
    description: "Leading Google Apps Script experts specializing in custom Google Workspace automation. We connect Google Sheets, Gmail, Docs, and Drive to eliminate manual tasks and transform your backend into a 24/7 autonomous business engine.",
    href: "/services/automation",
    features: [
      "Custom Google Apps Script Macros",
      "Automated Gmail Workflows",
      "Google Sheets API Integration",
      "Real-time Data Reporting Dashboards",
    ],
    price: "Starting from ₹8,000",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    alt: "Google Apps Script Automation Services - Custom Google Workspace Scripts",
  },
  {
    icon: React.createElement(Palette, { size: 28 }),
    title: "Graphic Design",
    description: "Premium brand identity and UI/UX design services. We craft high-end visual systems, from glossy logo designs to complete Figma UI prototypes, ensuring your brand commands authority and trust across all digital touchpoints.",
    href: "/services/design",
    features: [
      "Brand Identity & Logo Design",
      "Social Media Marketing Kits",
      "Figma UI/UX Design & Prototyping",
      "Premium Visual Style Guides",
    ],
    price: "Starting from ₹5,000",
    featured: false,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    alt: "Professional Graphic Design Agency - Brand Identity and UI/UX Design",
  },
];

export const flowProcess = [
  {
    step: "01",
    title: "Strategic Discovery",
    desc: "We conduct a detailed 45-minute discovery call to map your business goals, identify technical bottlenecks, and define measurable KPIs for your project's success.",
    icon: React.createElement(Lightbulb, { size: 24 }),
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=75",
    alt: "Consultation and Strategic Discovery Call for Web and Automation Projects",
  },
  {
    step: "02",
    title: "Agile Build & Iteration",
    desc: "Our engineering team executes in rapid sprints. You receive a staging preview by Day 7, followed by unlimited revision rounds to ensure the final product meets your exact standards.",
    icon: React.createElement(Target, { size: 24 }),
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=75",
    alt: "Agile Development Process - Coding and Designing Digital Solutions",
  },
  {
    step: "03",
    title: "Launch & Support",
    desc: "We manage production deployment, DNS configuration, and performance audits. Every launch is backed by 30 days of free post-launch technical support at no additional cost.",
    icon: React.createElement(Rocket, { size: 24 }),
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=75",
    alt: "Website Launch and Post-Launch Maintenance Services",
  },
];

export const whyUsComparison = [
  { feature: "Pricing", others: "Hidden fees & extra surprises", flowzonic: "Fixed & transparent quotes" },
  { feature: "Delivery", others: "2–3 months on average", flowzonic: "15 working days fast-track" },
  { feature: "Revisions", others: "Strictly limited or paid", flowzonic: "Unlimited revision rounds" },
  { feature: "Support", others: "No contact after handoff", flowzonic: "30-day premium post-launch help" },
  { feature: "Ownership", others: "Agency retains asset control", flowzonic: "100% full IP & code ownership" },
  { feature: "Updates", others: "Bi-weekly email reports", flowzonic: "Real-time updates on WhatsApp" },
];

export const portfolioProjects = [
  {
    title: "EcomFlow – Custom Shopify Redesign",
    category: "Web Development",
    result: "+40% Sales Lift",
    detail: "A complete custom Shopify storefront rebuild with optimized speed (99+ Lighthouse), technical SEO, and an A/B tested high-conversion checkout flow.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    alt: "E-commerce Website Case Study - Custom Shopify Development India",
    href: "/work/web-development",
    tags: ["Next.js", "Shopify", "Tailwind"],
  },
  {
    title: "AutoSheet – Enterprise Google CRM",
    category: "Google Automation",
    result: "20 hrs saved/week",
    detail: "Enterprise-grade Google Apps Script automation syncing lead tracking, automated PDF invoice generation, and real-time CRM data flow in Google Workspace.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    alt: "Google Sheets CRM Automation Case Study - Apps Script Expert Work",
    href: "/work/google-automation",
    tags: ["Apps Script", "Google Sheets", "Gmail API"],
  },
  {
    title: "Vizion – Premium Brand Identity",
    category: "Graphic Design",
    result: "3× Higher Enquiries",
    detail: "Comprehensive visual branding including a premium logo suite, color strategy, typography system, and high-end social media marketing templates.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    alt: "Brand Identity Design Case Study - Logo and Visual System Portfolio",
    href: "/work/graphic-design",
    tags: ["Figma", "Brand Identity", "Social Kit"],
  },
  {
    title: "HealthSync – Patient Portal App",
    category: "Web Development",
    result: "2,500+ Active Users",
    detail: "A secure, HIPAA-compliant patient management platform built with Next.js and Firebase, featuring real-time appointment booking and automated email reminders.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    alt: "Healthcare Web Application Case Study - React and Firebase Development",
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
    text: "Flowzonic delivered our entire brand identity and website in under 12 days. Their Next.js expertise is world-class, and our client enquiry rate tripled in the first month.",
  },
  {
    name: "Arjun Kapoor",
    role: "Operations Head, LogiTrack Pvt Ltd",
    location: "Delhi, India",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    text: "The Google Sheets automation they built for our warehouse saves us literally 3–4 hours every morning. The ROI on this Google Apps Script project was instantaneous.",
  },
  {
    name: "Sneha Rajan",
    role: "CEO, Nurture EdTech",
    location: "Bangalore, India",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    rating: 5,
    text: "Impeccable communication and delivery. Our student portal went live in 14 days and handles thousands of concurrent users flawlessly. Best web agency in India.",
  },
];

export const industryServed = [
  { name: "E-Commerce", icon: "🛍️", count: "12+ projects" },
  { name: "Healthcare", icon: "🏥", count: "6+ projects" },
  { name: "EdTech", icon: "🎓", count: "8+ projects" },
  { name: "Real Estate", icon: "🏘️", count: "5+ projects" },
  { name: "Logistics", icon: "🚚", count: "7+ projects" },
  { name: "Finance", icon: "📊", count: "4+ projects" },
  { name: "Restaurants", icon: "🍽️", count: "6+ projects" },
  { name: "SaaS Startups", icon: "💻", count: "9+ projects" },
];

export const faqs = [
  {
    question: "How long does it take to build a business website?",
    answer: "Our standard delivery for a full professional business website is between 7 to 15 working days. Simple high-converting landing pages can be delivered in as little as 3-5 days. For complex web applications, SaaS dashboards, or multi-vendor e-commerce stores, we provide a custom timeline, typically ranging from 21 to 30 days.",
  },
  {
    question: "What are the benefits of Google Apps Script automation?",
    answer: "Google Apps Script allows for enterprise-level automation without expensive third-party subscriptions like Zapier or Make. We use it to automate reporting, generate dynamic PDF documents from Google Sheets, sync CRM data with Gmail, and build custom internal tools. It runs natively in your Google Workspace, making it highly secure and cost-effective.",
  },
  {
    question: "Do you provide full ownership of source code and design files?",
    answer: "Yes. Upon final payment, you receive 100% legal ownership of all source code, Figma design files, and brand assets. We believe in total transparency and do not use proprietary 'lock-in' systems. You are free to host and maintain your assets wherever you choose.",
  },
  {
    question: "Does my website include technical SEO optimization?",
    answer: "Every website we build is developed with a 'Technical SEO-First' approach. This includes clean semantic HTML, optimized Core Web Vitals (speed), metadata configuration, Open Graph tags for social sharing, automated sitemaps, and robots.txt configuration. We ensure your site is ready to rank from day one.",
  },
  {
    question: "Can you automate tasks between Google Sheets and external APIs?",
    answer: "Absolutely. We specialize in connecting Google Sheets with external services like Shopify, Stripe, Slack, Salesforce, and OpenAI. Using Google Apps Script, we can build custom bridges that push and pull data securely between your Workspace and any modern web service with an API.",
  },
  {
    question: "Do you offer post-launch technical support?",
    answer: "Yes, we provide 30 days of complimentary premium support after every project launch. This covers bug fixes, performance monitoring, and minor content updates. We also offer monthly maintenance retainers for businesses looking for long-term technical partnership and regular feature updates.",
  },
];

export const heroStats = [
  { value: "50+", label: "Projects Completed" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "48hr", label: "Initial Turnaround" },
  { value: "5.0★", label: "Google Rating" },
];

export const blogPosts = [
  {
    title: "Saving 20+ Hours Weekly with Google Apps Script Automation",
    excerpt: "Learn how we eliminated manual data entry for a global logistics firm using custom Google Workspace scripts and real-time Sheets automation.",
    category: "Automation",
    readTime: "6 min read",
    date: "Jan 2025",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=75",
    alt: "Google Apps Script Automation Tutorial and Case Study",
    href: "/blog/google-apps-script-automation-case-study",
  },
  {
    title: "Next.js 15: The Ultimate Framework for Business Websites in 2025",
    excerpt: "Discover why Next.js is the preferred choice for performance-focused brands, featuring Server Components, optimized images, and superior SEO capabilities.",
    category: "Web Dev",
    readTime: "5 min read",
    date: "Feb 2025",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=75",
    alt: "Benefits of Next.js 15 for Small Business SEO and Performance",
    href: "/blog/nextjs-14-small-business-websites-2025",
  },
  {
    title: "The 2025 Brand Identity Checklist for Growing Businesses",
    excerpt: "More than just a logo—explore the essential visual components every brand needs to build trust and authority in a competitive digital market.",
    category: "Design",
    readTime: "8 min read",
    date: "Mar 2025",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=75",
    alt: "Brand Identity Design Checklist for Professional Business Branding",
    href: "/blog/brand-identity-checklist-2025",
  },
];
