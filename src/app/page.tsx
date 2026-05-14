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
  ChevronRight,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", icon: <Rocket className="text-primary" /> },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: <Star className="text-primary" /> },
  { value: 24, suffix: "hr", label: "Response Time", icon: <Clock className="text-primary" /> },
  { value: 15, suffix: " Days", label: "Avg. Build Time", icon: <TrendingUp className="text-primary" /> },
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
      "Logo Design",
    ],
    price: "Starting from ₹5,000",
    featured: false,
  },
];

const flowProcess = [
  {
    step: "01",
    title: "Discovery",
    desc: "We deep-dive into your workflow to identify friction and define the roadmap.",
  },
  {
    step: "02",
    title: "Execution",
    desc: "Our engineers and designers craft your solution with pixel-perfect precision.",
  },
  {
    step: "03",
    title: "Launch",
    desc: "We deploy, automate, and provide 30 days of white-glove support.",
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
    flowzonic: "Unlimited revisions",
  },
  {
    feature: "Support",
    others: "No contact after launch",
    flowzonic: "30-day free support",
  },
];

const portfolioProjects = [
  {
    title: "EcomFlow Shopify",
    category: "Web Development",
    result: "40% Conversion Lift",
    image: "https://picsum.photos/seed/p1/800/500",
    href: "/work/web-development",
  },
  {
    title: "AutoSheet CRM",
    category: "Automation",
    result: "20hrs saved/week",
    image: "https://picsum.photos/seed/p2/800/500",
    href: "/work/google-automation",
  },
  {
    title: "Vizion Brand Kit",
    category: "Graphic Design",
    result: "Premium Authority",
    image: "https://picsum.photos/seed/p3/800/500",
    href: "/work/graphic-design",
  },
];

const faqs = [
  {
    question: "How long does a website take to build?",
    answer: "Most full business websites are delivered within 7–15 days. Landing pages can be launched in as little as 3-5 days.",
  },
  {
    question: "What is Google Apps Script automation?",
    answer: "It's a way to automate repetitive tasks within Google Workspace. For example, automatically generating invoices from a Google Sheet or syncing CRM data to Gmail.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, every project comes with 30 days of free support to handle minor adjustments and ensure everything is flowing perfectly.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#FAFBFF]">

      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-20 text-center lg:text-left"
          >
            <span className="badge-pill mb-6">
              ⭐ 5.0 Rated · Engineering The Future
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-[#1A1035]">
              Streamline Your <br />
              Digital <span className="gradient-text">Flow</span>
            </h1>
            <p className="text-xl text-[#4B5563] mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              We build lightning-fast websites and intelligent automation tools that reclaim your time and scale your brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="/contact"
                className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4"
              >
                Initiate Project <Rocket size={20} />
              </Link>
              <Link
                href="/work/web-development"
                className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4"
              >
                View Portfolio
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              {["High-End Design", "Elite Automation", "Next.js Performance"].map((tag) => (
                <div key={tag} className="flex items-center gap-2 text-sm font-bold text-[#1A1035]">
                  <CheckCircle2 size={16} className="text-[#7B2FBE]" /> {tag}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/30 rounded-full blur-[100px] -z-10" />
            <div className="card-standard p-4 md:p-8 animate-float relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-2xl rounded-full" />
               <div className="relative z-10 aspect-video bg-gray-50 rounded-2xl border border-[#EDE9FE] overflow-hidden">
                  <Image 
                    src="https://picsum.photos/seed/flowhero/800/500" 
                    alt="Agency Showcase" 
                    fill 
                    className="object-cover"
                    data-ai-hint="dashboard design"
                  />
               </div>
               <div className="mt-6 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#F0EEFF] text-primary flex items-center justify-center"><Terminal size={14} /></div>
                    <div className="w-8 h-8 rounded-lg bg-[#F0EEFF] text-primary flex items-center justify-center"><Palette size={14} /></div>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Flowzonic Internal Engine</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: TECH MARQUEE ──────────────────────────────── */}
      <section className="py-12 bg-white border-y border-[#EDE9FE]">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee items-center gap-16 md:gap-24">
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="p-3 bg-[#F0EEFF] rounded-xl text-[#7B2FBE] group-hover:bg-[#7B2FBE] group-hover:text-white transition-all">
                  {tech.icon}
                </div>
                <span className="text-xl font-bold text-[#9CA3AF] group-hover:text-[#1A1035]">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: AUTOMATION ENGINE HIGHLIGHT ───────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#EDE9FE]">
               <div className="bg-white p-8 border-b border-[#EDE9FE]">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="h-64 relative bg-[#FAFBFF] rounded-xl border border-dashed border-[#EDE9FE] flex items-center justify-center">
                     <div className="text-center">
                        <div className="text-4xl mb-4">🤖</div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Processing Workflow...</p>
                     </div>
                  </div>
               </div>
               <div className="bg-[#1A1035] p-8 text-white">
                  <h4 className="text-lg font-bold mb-2">Automated Output</h4>
                  <p className="text-sm text-[#C4B5FD]">Real-time synchronization between Google Sheets & Gmail completed in 0.4s.</p>
               </div>
            </div>
            <div>
              <span className="badge-pill">Automation Engine</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1035]">Reclaim 20+ Hours Every Single <span className="gradient-text">Week</span></h2>
              <p className="text-lg text-[#4B5563] mb-8 leading-relaxed font-medium">
                Stop fighting with manual data entry. We use Google Apps Script and AI to build "invisible" systems that run your business in the background while you focus on growth.
              </p>
              <div className="space-y-4">
                {[
                  "Sheets to Gmail Auto-Replying",
                  "Real-time Data Scraping & Syncing",
                  "Automated PDF Invoice Generation",
                  "Custom Internal Business Dashboards"
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 font-bold text-[#1A1035]">
                    <div className="w-6 h-6 rounded-full bg-[#F0EEFF] flex items-center justify-center text-primary"><CheckCircle2 size={14} /></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SERVICE GRID ─────────────────────────────── */}
      <section className="py-24 px-6 bg-[#F0EEFF] rounded-[4rem]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-pill bg-white">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1035]">Three Pillars of <span className="gradient-text">Success</span></h2>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto font-medium">
              We combine engineering, automation, and design to provide a comprehensive digital foundation for modern brands.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <ServiceCard key={svc.title} {...svc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: LIVE STATS ───────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-white border border-[#EDE9FE] rounded-3xl shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F0EEFF] flex items-center justify-center mx-auto mb-6">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#1A1035] mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: FLOW PROCESS ─────────────────────────────── */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
             <span className="badge-pill">The Roadmap</span>
             <h2 className="text-4xl md:text-5xl font-bold text-[#1A1035]">How We <span className="gradient-text">Flow</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
             {/* Gradient Line */}
             <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#7B2FBE]/20 to-transparent -z-10" />
             
             {flowProcess.map((item) => (
               <div key={item.step} className="text-center group">
                 <div className="w-20 h-20 rounded-full bg-white border-2 border-[#EDE9FE] flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:border-primary group-hover:shadow-purple-200 transition-all duration-500">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                 </div>
                 <h3 className="text-2xl font-bold text-[#1A1035] mb-4">{item.title}</h3>
                 <p className="text-[#4B5563] font-medium leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PORTFOLIO CAROUSEL ───────────────────────── */}
      <section className="py-24 px-6 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div className="max-w-xl text-center md:text-left">
                <span className="badge-pill">Case Studies</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1A1035]">Portfolio <span className="gradient-text">Highlights</span></h2>
              </div>
              <Link href="/portfolio" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                 View All Projects <ArrowRight size={18} />
              </Link>
           </div>
           
           <Carousel className="w-full">
              <CarouselContent>
                 {portfolioProjects.map((project, i) => (
                   <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 p-4">
                      <Link href={project.href} className="group">
                        <div className="card-standard p-0 overflow-hidden h-full">
                           <div className="relative aspect-video overflow-hidden">
                              <Image 
                                src={project.image} 
                                alt={project.title} 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                data-ai-hint="agency portfolio"
                              />
                              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-primary">
                                {project.result}
                              </div>
                           </div>
                           <div className="p-6">
                              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">{project.category}</span>
                              <h4 className="text-xl font-bold text-[#1A1035] group-hover:text-primary transition-colors">{project.title}</h4>
                           </div>
                        </div>
                      </Link>
                   </CarouselItem>
                 ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-12">
                 <CarouselPrevious className="relative translate-y-0 left-0" />
                 <CarouselNext className="relative translate-y-0 right-0" />
              </div>
           </Carousel>
        </div>
      </section>

      {/* ── SECTION 8: WHY US COMPARISON ────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-pill">The Difference</span>
            <h2 className="text-4xl font-bold text-[#1A1035]">Why Choose <span className="gradient-text">Flowzonic?</span></h2>
          </div>
          <div className="border border-[#EDE9FE] rounded-3xl overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#F0EEFF] text-[#1A1035]">
                  <th className="p-6 text-sm font-bold uppercase tracking-widest">Service Item</th>
                  <th className="p-6 text-sm font-bold uppercase tracking-widest border-l border-[#EDE9FE]">Others</th>
                  <th className="p-6 text-sm font-bold uppercase tracking-widest border-l border-[#EDE9FE] text-primary bg-[#F3E8FF]">Flowzonic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EDE9FE]">
                {whyUsComparison.map((row, i) => (
                  <tr key={i} className="hover:bg-[#FAFBFF] transition-colors">
                    <td className="p-6 text-sm font-bold text-[#1A1035]">{row.feature}</td>
                    <td className="p-6 text-sm text-gray-400 font-medium border-l border-[#EDE9FE]">{row.others}</td>
                    <td className="p-6 text-sm text-primary font-bold border-l border-[#EDE9FE] bg-[#F3E8FF]/20">{row.flowzonic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FAQ ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#FAFBFF]">
        <div className="max-w-3xl mx-auto">
           <div className="text-center mb-16">
              <span className="badge-pill">Clear Answers</span>
              <h2 className="text-4xl font-bold text-[#1A1035]">Frequently Asked</h2>
           </div>
           <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-[#EDE9FE] rounded-2xl px-6 py-2 shadow-sm">
                  <AccordionTrigger className="text-left font-bold text-[#1A1035] hover:no-underline text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4B5563] font-medium leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
           </Accordion>
        </div>
      </section>

      {/* ── SECTION 10: CTA ─────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#1A1035] to-[#2D1B69] rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to initiate <br /> your flow?</h2>
            <p className="text-xl text-[#C4B5FD] mb-12 max-w-xl mx-auto font-medium">
              Join 30+ forward-thinking businesses that have automated their growth with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="px-10 py-5 rounded-full font-bold text-primary bg-white hover:bg-[#F0EEFF] transition-all text-lg flex items-center gap-3 shadow-xl"
              >
                Book Free Consultation <Rocket size={20} />
              </Link>
              <a
                href="https://wa.me/918881907942"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 rounded-full font-bold text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all text-lg flex items-center gap-3 shadow-xl"
              >
                <MessageCircle size={22} /> Chat on WhatsApp
              </a>
            </div>
            <p className="mt-8 text-gray-400 text-xs font-bold uppercase tracking-widest">✓ Reply Within 2 Hours · No Commitment Required</p>
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
        "rounded-[2.5rem] p-10 flex flex-col h-full transition-all duration-500 hover:-translate-y-2",
        featured
          ? "bg-[#1A1035] text-white shadow-2xl shadow-purple-500/20 ring-4 ring-primary/10"
          : "bg-white border border-[#EDE9FE] shadow-sm hover:shadow-xl"
      )}
    >
      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8", featured ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-[#F0EEFF] text-primary")}>
        {icon}
      </div>
      <h3 className={cn("text-3xl font-bold mb-4", featured ? "text-white" : "text-[#1A1035]")}>
        {title}
      </h3>
      <p className={cn("mb-8 leading-relaxed font-medium text-base", featured ? "text-[#C4B5FD]" : "text-[#4B5563]")}>
        {description}
      </p>

      <ul className="flex flex-col gap-4 mb-8">
        {features.map((f) => (
          <li key={f} className={cn("flex items-center gap-3 text-sm font-bold", featured ? "text-white/90" : "text-[#1A1035]")}>
            <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0", featured ? "bg-primary/30 text-primary" : "bg-[#F0EEFF] text-primary")}>
               <CheckCircle2 size={12} />
            </div>
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8 border-t border-[#EDE9FE]/10 flex flex-col gap-6">
        <div className="flex items-center justify-between">
           <span className={cn("text-xs font-bold uppercase tracking-widest", featured ? "text-[#C4B5FD]" : "text-gray-400")}>
             {price}
           </span>
           <Link href={href} className={cn("font-bold flex items-center gap-2 group/btn transition-all", featured ? "text-white" : "text-primary")}>
             Explore <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
           </Link>
        </div>
        <Link href="/contact" className={cn("w-full py-4 rounded-2xl font-bold text-center transition-all", featured ? "bg-white text-primary hover:bg-[#F0EEFF]" : "bg-[#F0EEFF] text-primary hover:bg-primary hover:text-white")}>
           Get Proposal
        </Link>
      </div>
    </div>
  );
}
