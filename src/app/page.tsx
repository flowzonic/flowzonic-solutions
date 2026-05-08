"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Zap,
  Palette,
  Globe,
  Layers,
  Terminal,
  Database,
  Cpu,
  ShieldCheck,
  Activity,
  TrendingUp,
  Clock,
  Search,
  Sparkles,
  Star,
  Rocket,
  CheckCircle2,
  MessageCircle,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const techStack = [
  { name: "Next.js", icon: <Globe size={20} /> },
  { name: "React", icon: <Layers size={20} /> },
  { name: "Tailwind", icon: <Palette size={20} /> },
  { name: "TypeScript", icon: <Code size={20} /> },
  { name: "Apps Script", icon: <Terminal size={20} /> },
  { name: "Firebase", icon: <Database size={20} /> },
  { name: "Cloud Ops", icon: <Cpu size={20} /> },
  { name: "UI/UX", icon: <Layers size={20} /> },
];

const heroStats = [
  { value: "50+", label: "Projects Done" },
  { value: "100%", label: "Satisfaction" },
  { value: "48hr", label: "Turnaround" },
  { value: "5.0★", label: "Google Rating" },
];

const services = [
  {
    icon: <Code size={28} />,
    title: "Web Development",
    description:
      "High-performance, scalable websites built with modern frameworks like React and Next.js.",
    href: "/services/web",
    features: [
      "Landing Pages",
      "E-Commerce Stores",
      "Web Applications",
      "API Integration",
      "SEO Optimized",
    ],
    price: "Starting from ₹15,000",
    featured: false,
  },
  {
    icon: <Zap size={28} />,
    title: "Google Automation",
    description:
      "Custom Apps Script solutions that connect Sheets, Docs, and Gmail to save you hundreds of hours.",
    href: "/services/automation",
    features: [
      "Google Sheets Automation",
      "Gmail Workflows",
      "Apps Script Dev",
      "Data Pipelines",
      "Dashboard Reports",
    ],
    price: "Starting from ₹8,000",
    featured: true,
  },
  {
    icon: <Palette size={28} />,
    title: "Graphic Design",
    description:
      "Glossy, premium brand identities and UI/UX designs that command attention and build trust.",
    href: "/services/design",
    features: [
      "Brand Identity",
      "Social Media Kits",
      "UI/UX Design",
      "Print Design",
      "Logo Design",
    ],
    price: "Starting from ₹5,000",
    featured: false,
  },
];

const results = [
  {
    tag: "Web Dev",
    metric: "300%",
    desc: "traffic increase for a retail client",
    icon: <TrendingUp size={16} />,
  },
  {
    tag: "Automation",
    metric: "20hrs",
    desc: "saved per week via Sheets automation",
    icon: <Clock size={16} />,
  },
  {
    tag: "Design",
    metric: "2x",
    desc: "more leads after brand redesign",
    icon: <Sparkles size={16} />,
  },
  {
    tag: "Delivery",
    metric: "7 Days",
    desc: "average project turnaround time",
    icon: <Rocket size={16} />,
  },
];

const whyUsComparison = [
  {
    feature: "Pricing",
    others: "Hidden fees & surprises",
    flowzonic: "Fixed & transparent",
  },
  {
    feature: "Delivery",
    others: "2–3 months average",
    flowzonic: "15 days average",
  },
  {
    feature: "Revisions",
    others: "Charged separately",
    flowzonic: "Free revisions included",
  },
  {
    feature: "Support",
    others: "No contact after launch",
    flowzonic: "30-day post-launch support",
  },
  {
    feature: "Communication",
    others: "Weekly email updates",
    flowzonic: "Daily updates on WhatsApp",
  },
];

const guarantees = [
  { icon: "⏰", label: "On-Time Delivery" },
  { icon: "🔄", label: "Free Revisions" },
  { icon: "🛡️", label: "30-Day Support" },
  { icon: "💬", label: "24hr Response" },
];

const portfolioProjects = [
  {
    title: "EcomFlow — Shopify Store Redesign",
    category: "Web Development",
    result: "Increased conversions by 40%",
    image: "https://picsum.photos/seed/project1/800/500",
    fallbackGradient: "from-purple-100 to-violet-50",
    href: "/portfolio",
  },
  {
    title: "AutoSheet Pro — Workflow Automation",
    category: "Google Automation",
    result: "Saved 20 hours per week",
    image: "https://picsum.photos/seed/project2/800/500",
    fallbackGradient: "from-indigo-100 to-purple-50",
    href: "/portfolio",
  },
  {
    title: "BrandSpark — Full Brand Identity",
    category: "Graphic Design",
    result: "2x increase in brand recognition",
    image: "https://picsum.photos/seed/project3/800/500",
    fallbackGradient: "from-violet-100 to-fuchsia-50",
    href: "/portfolio",
  },
];

const testimonials = [
  {
    quote:
      "Flowzonic didn't just build a site; they engineered a growth machine. Our conversion rate tripled in 90 days.",
    author: "Elena Vance",
    role: "CEO",
    company: "Lumina Tech",
    initials: "EV",
    color: "bg-purple-100 text-purple-700",
  },
  {
    quote:
      "The Google Workspace automation saved our operations team 15 hours a week. It's like having 3 extra employees.",
    author: "Marcus Thorne",
    role: "COO",
    company: "Global Logistics",
    initials: "MT",
    color: "bg-violet-100 text-violet-700",
  },
  {
    quote:
      "Their design philosophy is light years ahead. Our brand now commands the premium attention it deserves.",
    author: "Sofia Rossi",
    role: "Founder",
    company: "Aura Design",
    initials: "SR",
    color: "bg-fuchsia-100 text-fuchsia-700",
  },
];

const faqs = [
  {
    question: "How long does a website take to build?",
    answer:
      "Most websites are delivered within 7–15 business days depending on complexity. A landing page takes 3–5 days, a full business website 7–10 days, and an e-commerce store 10–15 days. We always give you a fixed timeline before starting.",
  },
  {
    question: "What is your pricing and payment process?",
    answer:
      "We have fixed, transparent pricing with no hidden charges. You pay 50% upfront to start the project and 50% on delivery. We accept UPI, bank transfer, and all major payment methods.",
  },
  {
    question: "How many revisions do I get?",
    answer:
      "We include unlimited revisions during the project until you are 100% satisfied. After launch, we offer 30 days of free support for any minor changes.",
  },
  {
    question: "Will my website work on mobile and be fast?",
    answer:
      "Absolutely. Every website we build is fully responsive (works perfectly on all screen sizes) and optimized for speed. We target a 90+ Google PageSpeed score on every project.",
  },
  {
    question: "Do you provide support after the website launches?",
    answer:
      "Yes — every project includes 30 days of free post-launch support. After that, we offer affordable monthly maintenance packages if needed.",
  },
  {
    question: "Can you work with my existing brand and design assets?",
    answer:
      "Yes, we can work with your existing logo, brand colors, and any design files you have. If you need branding work done first, our Graphic Design service can handle that too.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply click 'Book a Free Consultation' or message us on WhatsApp. We'll schedule a free 30-minute call to understand your requirements and send you a proposal within 24 hours.",
  },
];

const blogPosts = [
  {
    title: "The Future of Google Apps Script in 2024",
    excerpt:
      "How AI and new features are revolutionizing workspace automation.",
    date: "March 15, 2024",
    image: "https://picsum.photos/seed/blog1/600/400",
    category: "Automation",
  },
  {
    title: "Minimalist Design for High-Trust Brands",
    excerpt:
      "Why high-end brands are moving towards cleaner, glossy aesthetics.",
    date: "March 10, 2024",
    image: "https://picsum.photos/seed/blog2/600/400",
    category: "Design",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="overflow-hidden">

      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 px-6 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-20 text-center lg:text-left"
          >
            {/* Updated badge with social proof */}
            <span className="badge-pill mb-4">
              ⭐ 5.0 Rated · 50+ Projects Delivered
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-[#1A1035]">
              We Build Digital <br className="hidden xl:block" />
              Experiences That <br className="hidden xl:block" />
              <span className="gradient-text">Drive Results</span>
            </h1>
            <p className="text-lg text-[#4B5563] mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Web development, Google automation, and graphic design for brands
              that refuse to be ordinary.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] hover:opacity-90 hover:shadow-lg hover:shadow-purple-200 transition-all duration-200 flex items-center justify-center gap-2 text-base"
              >
                Book Free Consultation <Rocket size={18} />
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3.5 rounded-full font-bold text-[#7B2FBE] border-2 border-[#7B2FBE] bg-transparent hover:bg-[#F0EEFF] transition-all duration-200 flex items-center justify-center text-base"
              >
                View Our Work
              </Link>
            </div>

            {/* Trust Stats Row */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-8">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center bg-white border border-[#EDE9FE] rounded-xl px-4 py-2 shadow-sm"
                >
                  <span className="text-base font-bold text-[#7B2FBE]">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-[#9CA3AF]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Response promise */}
            <p className="text-xs text-[#9CA3AF] mt-4 text-center lg:text-left">
              ✓ We respond within 2 hours on business days
            </p>
          </motion.div>

          {/* Mockup Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center w-full max-w-[440px] lg:max-w-none mx-auto"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-purple-100/40 rounded-full blur-[80px] -z-10" />
            <div className="relative z-10 w-full aspect-[16/10] bg-white rounded-3xl shadow-2xl border border-[#EDE9FE] overflow-hidden p-3 md:p-5 animate-float">
              <div className="flex gap-1.5 mb-3 md:mb-5 px-1 md:px-2">
                <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="h-5 md:h-6 w-3/4 bg-gray-50 rounded-lg flex items-center px-3">
                  <div className="w-16 md:w-20 h-1.5 md:h-2 bg-purple-200 rounded-full" />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <div className="h-2.5 md:h-3.5 w-full bg-gray-50 rounded-lg" />
                  <div className="h-2.5 md:h-3.5 w-full bg-gray-50 rounded-lg" />
                  <div className="h-2.5 md:h-3.5 w-2/3 bg-gray-50 rounded-lg" />
                </div>
                <div className="pt-2 md:pt-4 grid grid-cols-2 gap-2 md:gap-4">
                  <div className="h-16 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100/50 p-2 md:p-3">
                    <div className="w-5 md:w-6 h-5 md:h-6 rounded-lg bg-purple-100 mb-2" />
                    <div className="w-full h-1 md:h-1.5 bg-purple-100 rounded-full mb-1" />
                    <div className="w-2/3 h-1 md:h-1.5 bg-purple-100 rounded-full" />
                  </div>
                  <div className="h-16 md:h-20 rounded-xl md:rounded-2xl bg-gray-50/50 border border-gray-100 p-2 md:p-3">
                    <div className="w-5 md:w-6 h-5 md:h-6 rounded-lg bg-gray-100 mb-2" />
                    <div className="w-full h-1 md:h-1.5 bg-gray-100 rounded-full mb-1" />
                    <div className="w-2/3 h-1 md:h-1.5 bg-gray-100 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 -left-4 md:-left-8 lg:-left-12 z-20 bg-white/95 backdrop-blur-md border border-[#EDE9FE] p-2 md:p-3 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-2 md:gap-3 min-w-[120px] md:min-w-[160px] scale-90 md:scale-100"
            >
              <div className="w-8 md:w-10 h-8 md:h-10 bg-purple-100 rounded-lg md:rounded-xl flex items-center justify-center text-[#7B2FBE]">
                <Code size={16} />
              </div>
              <div>
                <p className="font-bold text-[#1A1035] text-[10px] md:text-xs">Clean Code</p>
                <p className="text-[8px] md:text-[10px] text-[#9CA3AF]">Next.js & React</p>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-4 -left-6 md:-left-12 lg:-left-16 z-20 bg-white/95 backdrop-blur-md border border-[#EDE9FE] p-2 md:p-3 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-2 md:gap-3 min-w-[140px] md:min-w-[180px] scale-90 md:scale-100"
            >
              <div className="w-8 md:w-10 h-8 md:h-10 bg-purple-100 rounded-lg md:rounded-xl flex items-center justify-center text-[#7B2FBE]">
                <Zap size={16} />
              </div>
              <div>
                <p className="font-bold text-[#1A1035] text-[10px] md:text-xs">Automated Workflows</p>
                <p className="text-[8px] md:text-[10px] text-[#9CA3AF]">Reclaiming Hours</p>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -right-4 md:-right-10 z-20 bg-white/95 backdrop-blur-md border border-[#EDE9FE] p-2 md:p-3 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-2 md:gap-3 min-w-[120px] md:min-w-[160px] scale-90 md:scale-100"
            >
              <div className="w-8 md:w-10 h-8 md:h-10 bg-purple-100 rounded-lg md:rounded-xl flex items-center justify-center text-[#7B2FBE]">
                <Sparkles size={16} />
              </div>
              <div>
                <p className="font-bold text-[#1A1035] text-[10px] md:text-xs">Stunning Design</p>
                <p className="text-[8px] md:text-[10px] text-[#9CA3AF]">Figma to Web</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: TECH STACK MARQUEE ───────────────────────── */}
      <section className="py-10 bg-white border-y border-[#EDE9FE]">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          {/* Label row */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-widest">
              Technologies We Use
            </p>
            <a
              href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#F0EEFF] border border-[#EDE9FE] rounded-full px-4 py-1.5 text-xs font-semibold text-[#7B2FBE] hover:bg-[#EDE9FE] transition-all"
            >
              ★★★★★ 5.0 · Google Reviews
            </a>
          </div>
          <div className="flex whitespace-nowrap animate-marquee items-center gap-16 md:gap-24">
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-default">
                <div className="p-3 bg-[#F0EEFF] rounded-xl text-[#7B2FBE] group-hover:bg-[#7B2FBE] group-hover:text-white transition-all duration-500">
                  {tech.icon}
                </div>
                <span className="text-xl font-bold text-[#9CA3AF] group-hover:text-[#1A1035] transition-colors duration-500">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SERVICES ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#F0EEFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-pill">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1A1035]">
              What We Do <span className="gradient-text">Best</span>
            </h2>
            <p className="text-[#4B5563] text-lg max-w-2xl mx-auto font-medium">
              Precision engineering meets high-end creative design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <ServiceCard key={svc.title} {...svc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: REAL RESULTS ─────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-pill">Proven Impact</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1A1035]">
              Real <span className="gradient-text">Results</span>
            </h2>
            <p className="text-[#4B5563] text-lg max-w-2xl mx-auto font-medium">
              Numbers that show what we actually deliver for our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((r) => (
              <div
                key={r.tag}
                className="bg-white border border-[#EDE9FE] rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:shadow-purple-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#F0EEFF] rounded-xl flex items-center justify-center text-[#7B2FBE] mb-4">
                  {r.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#7B2FBE] mb-2 bg-[#F0EEFF] px-3 py-1 rounded-full">
                  {r.tag}
                </span>
                <span className="text-4xl font-bold text-[#1A1035] my-2">
                  {r.metric}
                </span>
                <span className="text-sm text-[#9CA3AF] leading-snug">
                  {r.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHY US / STATS ───────────────────────────── */}
      <section className="py-20 px-6 bg-[#1A1035] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#A855F7] uppercase tracking-widest text-xs font-semibold mb-4 block">
              Why Flowzonic
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Why Clients Choose{" "}
              <span className="text-[#A855F7]">Flowzonic</span>
            </h2>
            <p className="text-[#C4B5FD] text-lg max-w-2xl mx-auto font-medium">
              We don't just deliver projects — we deliver results, on time,
              every time.
            </p>
          </div>

          {/* Guarantee badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {guarantees.map((g) => (
              <div
                key={g.label}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
              >
                <span>{g.icon}</span> {g.label}
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-16">
            <div className="grid grid-cols-3 bg-white/10 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C4B5FD]">
                Feature
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C4B5FD]">
                Other Agencies
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#A855F7]">
                Flowzonic ✓
              </span>
            </div>
            {whyUsComparison.map((row, i) => (
              <div
                key={row.feature}
                className={cn(
                  "grid grid-cols-3 px-6 py-4 items-center",
                  i !== whyUsComparison.length - 1
                    ? "border-b border-white/5"
                    : ""
                )}
              >
                <span className="text-sm font-semibold text-white">
                  {row.feature}
                </span>
                <span className="text-sm text-red-400">{row.others}</span>
                <span className="text-sm font-semibold text-[#A855F7] flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-green-400" />
                  {row.flowzonic}
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-[#2D1B69] pt-20">
            <StatItem
              value="500+"
              label="Hours Saved"
              icon={<Clock size={24} className="text-[#A855F7]" />}
            />
            <StatItem
              value="100+"
              label="Custom Scripts"
              icon={<Terminal size={24} className="text-[#A855F7]" />}
            />
            <StatItem
              value="50+"
              label="Sites Launched"
              icon={<TrendingUp size={24} className="text-[#A855F7]" />}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 6: PROCESS ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-pill">Step-by-Step</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1A1035]">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-[#4B5563] text-lg font-medium">
              From first call to live launch — here's exactly how we work.
            </p>
          </div>
          <div className="space-y-12 relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#F0EEFF] rounded-full -translate-x-1/2 hidden md:block" />
            <ProcessItem
              icon={<Search />}
              step="01"
              title="Discovery"
              description="We dive deep into your business goals and requirements to create a bespoke roadmap."
              timeframe="Day 1–2"
              deliverable="Project brief document"
              align="left"
            />
            <ProcessItem
              icon={<Cpu />}
              step="02"
              title="Strategy & Planning"
              description="We plan the architecture, tech stack, and design direction tailored to your needs."
              timeframe="Day 3–4"
              deliverable="Detailed project plan"
              align="right"
            />
            <ProcessItem
              icon={<Palette />}
              step="03"
              title="Design"
              description="We create wireframes and high-fidelity designs for your review and approval."
              timeframe="Day 5–7"
              deliverable="Design mockup for approval"
              align="left"
            />
            <ProcessItem
              icon={<Code />}
              step="04"
              title="Build"
              description="Our experts develop the full solution with clean, scalable, well-documented code."
              timeframe="Day 8–13"
              deliverable="Staging site for testing"
              align="right"
            />
            <ProcessItem
              icon={<Rocket />}
              step="05"
              title="Launch & Support"
              description="We deploy your solution and provide 30 days of free post-launch support."
              timeframe="Day 14–15"
              deliverable="Live site + handover docs"
              align="left"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PORTFOLIO ────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto">
          <Carousel className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl text-left">
                <span className="badge-pill">Showcase</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1A1035]">
                  Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-[#4B5563] text-lg font-medium">
                  Real work. Real results. Real clients.
                </p>
              </div>
              <div className="flex gap-3">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-xl border border-[#EDE9FE] bg-white text-[#7B2FBE] hover:bg-[#F0EEFF] transition-all" />
                <CarouselNext className="static translate-y-0 h-12 w-12 rounded-xl border border-[#EDE9FE] bg-white text-[#7B2FBE] hover:bg-[#F0EEFF] transition-all" />
              </div>
            </div>
            <CarouselContent className="-ml-6">
              {portfolioProjects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="pl-6 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="card-standard h-full flex flex-col p-0 overflow-hidden">
                    {/* Image with gradient fallback */}
                    <div
                      className={cn(
                        "relative aspect-[16/10] bg-gradient-to-br",
                        project.fallbackGradient
                      )}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-[#1A1035]/60 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <Link
                          href={project.href}
                          className="flex items-center gap-2 bg-white text-[#7B2FBE] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#F0EEFF] transition-all"
                        >
                          View Project <ExternalLink size={14} />
                        </Link>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="badge-category mb-2 w-fit">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold mb-2 text-[#1A1035]">
                        {project.title}
                      </h3>
                      {/* Result metric */}
                      <p className="text-sm text-[#7B2FBE] font-semibold mb-4 flex items-center gap-1">
                        <TrendingUp size={14} /> {project.result}
                      </p>
                      <Link
                        href={project.href}
                        className="mt-auto text-[#7B2FBE] font-bold flex items-center gap-2 hover:text-[#A855F7] transition-colors"
                      >
                        View Details <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* ── SECTION 8: TESTIMONIALS ─────────────────────────────── */}
      <section className="py-20 px-6 bg-[#F0EEFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-pill">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1A1035]">
              Trusted by <span className="gradient-text">Visionaries</span>
            </h2>
            <p className="text-[#4B5563] text-lg font-medium">
              Real impact on businesses like yours.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.author} {...t} />
            ))}
          </div>
          {/* Google reviews link */}
          <div className="text-center mt-10">
            <a
              href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#7B2FBE] hover:text-[#A855F7] transition-colors"
            >
              Read all reviews on Google <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: BLOG PREVIEW ─────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="badge-pill">Insights</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1A1035]">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-[#4B5563] text-lg mb-12 font-medium">
            Expert advice on automation, design, and growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {blogPosts.map((post) => (
              <BlogPreviewCard key={post.title} {...post} />
            ))}
          </div>
          <Link
            href="/blog"
            className="px-6 py-3 rounded-full font-medium text-[#7B2FBE] border-2 border-[#7B2FBE] bg-transparent hover:bg-[#F0EEFF] transition-all duration-200 mt-12 inline-block"
          >
            View All Articles
          </Link>
        </div>
      </section>

      {/* ── SECTION 10: FAQ ──────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#FAFBFF]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-pill">Got Questions?</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1A1035]">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-[#4B5563] text-lg font-medium">
              Everything you need to know before getting started.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <p className="text-center text-sm text-[#9CA3AF] mt-10">
            Still have questions?{" "}
            <a
              href={`https://wa.me/918881907942?text=Hi, I have a question about your services`}
              className="text-[#7B2FBE] font-semibold hover:underline"
            >
              Chat with us on WhatsApp →
            </a>
          </p>
        </div>
      </section>

      {/* ── SECTION 11: CTA BANNER ──────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#1A1035] to-[#2D1B69] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Elevate Your Flow?
            </h2>
            <p className="text-[#C4B5FD] text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
              Join businesses that have transformed their digital presence with
              Flowzonic Solutions.
            </p>

            {/* Two CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full font-bold text-[#7B2FBE] bg-white hover:bg-[#F0EEFF] transition-all duration-200 text-base flex items-center gap-3"
              >
                Book a Free 30-min Consultation <Rocket size={20} />
              </Link>
              <a
                href="https://wa.me/918881907942?text=Hi, I want to discuss a project with Flowzonic Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-bold text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all duration-200 text-base flex items-center gap-3"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>

            <p className="text-[#9CA3AF] text-sm mt-6">
              ✓ We respond within 2 hours on business days · No commitment required
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function ServiceCard({
  icon, title, description, href, features, price, featured,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  features: string[];
  price: string;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1",
        featured
          ? "bg-gradient-to-br from-[#7B2FBE] to-[#A855F7] text-white shadow-xl shadow-purple-200"
          : "bg-white border border-[#EDE9FE] hover:shadow-lg hover:shadow-purple-100"
      )}
    >
      {featured && (
        <span className="self-start text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1 rounded-full mb-4">
          Most Popular
        </span>
      )}
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-6",
          featured ? "bg-white/20 text-white" : "bg-[#F0EEFF] text-[#7B2FBE]"
        )}
      >
        {icon}
      </div>
      <h3
        className={cn(
          "text-2xl font-bold mb-3",
          featured ? "text-white" : "text-[#1A1035]"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mb-6 leading-relaxed font-medium text-sm",
          featured ? "text-white/80" : "text-[#4B5563]"
        )}
      >
        {description}
      </p>

      {/* Deliverables checklist */}
      <ul className="flex flex-col gap-2 mb-6">
        {features.map((f) => (
          <li
            key={f}
            className={cn(
              "flex items-center gap-2 text-sm font-medium",
              featured ? "text-white/90" : "text-[#4B5563]"
            )}
          >
            <span
              className={cn(
                "w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0",
                featured
                  ? "bg-white/20 text-white"
                  : "bg-[#F0EEFF] text-[#7B2FBE]"
              )}
            >
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* Price + CTA */}
      <div className="mt-auto pt-4 border-t border-dashed border-current/10 flex items-center justify-between">
        <span
          className={cn(
            "text-xs font-bold",
            featured ? "text-white/70" : "text-[#9CA3AF]"
          )}
        >
          {price}
        </span>
        <Link
          href={href}
          className={cn(
            "font-bold flex items-center gap-1 text-sm hover:gap-2 transition-all",
            featured ? "text-white" : "text-[#7B2FBE]"
          )}
        >
          Learn More <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

function TestimonialCard({
  quote, author, role, company, initials, color,
}: {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  color: string;
}) {
  return (
    <div className="bg-white border border-[#EDE9FE] rounded-2xl p-8 flex flex-col hover:shadow-lg hover:shadow-purple-100 hover:-translate-y-1 transition-all duration-300">
      <div className="flex gap-1 mb-6 text-[#7B2FBE]">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={14} fill="currentColor" />
        ))}
      </div>
      <p className="text-base font-medium italic mb-8 leading-relaxed text-[#4B5563] flex-1">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        {/* Initials avatar — no random stock photos */}
        <div
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0",
            color
          )}
        >
          {initials}
        </div>
        <div>
          <p className="font-bold text-[#1A1035] text-sm">{author}</p>
          <p className="text-xs text-[#9CA3AF]">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProcessItem({
  icon, step, title, description, timeframe, deliverable, align,
}: {
  icon: React.ReactNode;
  step: string;
  title: string;
  description: string;
  timeframe: string;
  deliverable: string;
  align: "left" | "right";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-8 w-full",
        align === "right" ? "md:flex-row-reverse text-right" : ""
      )}
    >
      <div className="hidden md:flex flex-1" />
      <div className="relative z-10 w-12 h-12 bg-[#F0EEFF] text-[#7B2FBE] border border-[#DDD6FE] rounded-full flex items-center justify-center shrink-0 shadow-lg">
        {icon}
      </div>
      <div className="flex-1 bg-white border border-[#EDE9FE] rounded-2xl p-6 text-left hover:shadow-lg hover:shadow-purple-100 transition-all">
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <span className="text-[#7B2FBE] font-bold text-[10px] tracking-[0.2em] uppercase">
            Step {step}
          </span>
          <span className="text-[10px] bg-[#F0EEFF] text-[#7B2FBE] px-2 py-0.5 rounded-full font-semibold">
            {timeframe}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-[#1A1035]">{title}</h3>
        <p className="text-[#4B5563] leading-relaxed font-medium text-sm mb-3">
          {description}
        </p>
        <p className="text-xs text-[#9CA3AF] flex items-center gap-1">
          <CheckCircle2 size={12} className="text-green-500" />
          You receive: {deliverable}
        </p>
      </div>
    </div>
  );
}

function StatItem({
  value, label, icon,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 p-4 bg-white/5 rounded-2xl">{icon}</div>
      <span className="text-5xl font-bold mb-2 text-white">{value}</span>
      <span className="text-[#C4B5FD] font-bold uppercase tracking-[0.2em] text-[10px]">
        {label}
      </span>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border border-[#EDE9FE] rounded-2xl overflow-hidden transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-semibold text-[#1A1035] text-sm pr-4">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "text-[#7B2FBE] flex-shrink-0 transition-transform duration-300",
            open ? "rotate-180" : ""
          )}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-[#4B5563] leading-relaxed border-t border-[#F0EEFF] pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

function BlogPreviewCard({
  title, excerpt, date, image, category,
}: {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}) {
  return (
    <div className="bg-white border border-[#EDE9FE] rounded-2xl p-0 overflow-hidden flex flex-col sm:flex-row hover:shadow-lg hover:shadow-purple-100 transition-all">
      <div className="relative w-full sm:w-48 h-48 bg-gradient-to-br from-purple-100 to-violet-50 flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#7B2FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full">
            {category}
          </span>
          <span className="text-xs text-[#9CA3AF]">{date}</span>
        </div>
        <h3 className="text-lg font-bold text-[#1A1035] mb-3">{title}</h3>
        <p className="text-sm text-[#4B5563] mb-4 line-clamp-2">{excerpt}</p>
        <Link
          href="/blog"
          className="mt-auto text-[#7B2FBE] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
        >
          Read More <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
