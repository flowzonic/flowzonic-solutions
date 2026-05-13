
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
    href: "/work/web-development",
  },
  {
    title: "AutoSheet Pro — Workflow Automation",
    category: "Google Automation",
    result: "Saved 20 hours per week",
    image: "https://picsum.photos/seed/project2/800/500",
    fallbackGradient: "from-indigo-100 to-purple-50",
    href: "/work/google-automation",
  },
  {
    title: "BrandSpark — Full Brand Identity",
    category: "Graphic Design",
    result: "2x increase in brand recognition",
    image: "https://picsum.photos/seed/project3/800/500",
    fallbackGradient: "from-violet-100 to-fuchsia-50",
    href: "/work/graphic-design",
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
            transition={{ duration: 0.6 }}
            className="z-20 text-center lg:text-left"
          >
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] hover:opacity-90 hover:shadow-lg hover:shadow-purple-200 transition-all duration-200 flex items-center justify-center gap-2 text-base"
              >
                Book Free Consultation <Rocket size={18} />
              </Link>
              <Link
                href="/work/web-development"
                className="px-8 py-3.5 rounded-full font-bold text-[#7B2FBE] border-2 border-[#7B2FBE] bg-transparent hover:bg-[#F0EEFF] transition-all duration-200 flex items-center justify-center text-base"
              >
                View Our Work
              </Link>
            </div>

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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
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
                  </div>
                  <div className="h-16 md:h-20 rounded-xl md:rounded-2xl bg-gray-50/50 border border-gray-100 p-2 md:p-3">
                    <div className="w-5 md:w-6 h-5 md:h-6 rounded-lg bg-gray-100 mb-2" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: TECH STACK MARQUEE ───────────────────────── */}
      <section className="py-10 bg-white border-y border-[#EDE9FE]">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
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

      {/* ── SECTION 5: CTA BANNER ──────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#1A1035] to-[#2D1B69] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Elevate Your Flow?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full font-bold text-[#7B2FBE] bg-white hover:bg-[#F0EEFF] transition-all duration-200 text-base flex items-center gap-3"
              >
                Book a Free Consultation <Rocket size={20} />
              </Link>
              <a
                href="https://wa.me/918881907942"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-bold text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all duration-200 text-base flex items-center gap-3"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>
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
        "rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1",
        featured
          ? "bg-gradient-to-br from-[#7B2FBE] to-[#A855F7] text-white shadow-xl shadow-purple-200"
          : "bg-white border border-[#EDE9FE] hover:shadow-lg hover:shadow-purple-100"
      )}
    >
      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6", featured ? "bg-white/20 text-white" : "bg-[#F0EEFF] text-[#7B2FBE]")}>
        {icon}
      </div>
      <h3 className={cn("text-2xl font-bold mb-3", featured ? "text-white" : "text-[#1A1035]")}>
        {title}
      </h3>
      <p className={cn("mb-6 leading-relaxed font-medium text-sm", featured ? "text-white/80" : "text-[#4B5563]")}>
        {description}
      </p>

      <ul className="flex flex-col gap-2 mb-6">
        {features.map((f) => (
          <li key={f} className={cn("flex items-center gap-2 text-sm font-medium", featured ? "text-white/90" : "text-[#4B5563]")}>
            <span className={cn("w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0", featured ? "bg-white/20 text-white" : "bg-[#F0EEFF] text-[#7B2FBE]")}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4 border-t border-dashed border-current/10 flex items-center justify-between">
        <span className={cn("text-xs font-bold", featured ? "text-white/70" : "text-[#9CA3AF]")}>
          {price}
        </span>
        <Link href={href} className={cn("font-bold flex items-center gap-1 text-sm hover:gap-2 transition-all", featured ? "text-white" : "text-[#7B2FBE]")}>
          Learn More <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
