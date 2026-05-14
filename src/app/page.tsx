
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Zap,
  Rocket,
  CheckCircle2,
  MessageCircle,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  techStack,
  stats,
  services,
  flowProcess,
  whyUsComparison,
  portfolioProjects,
  testimonials,
  industryServed,
  faqs,
  heroStats,
  blogPosts,
} from "@/lib/home-data";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#FAFBFF]">

      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 px-6 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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

            <p className="text-xs text-[#9CA3AF] mt-4 text-center lg:text-left">
              ✓ We respond within 2 hours on business days
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden md:flex items-center justify-center w-full max-w-[440px] lg:max-w-none mx-auto"
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
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: TECH MARQUEE ──────────────────────────────── */}
      <section aria-label="Technology stack" className="py-12 bg-white border-y border-[#EDE9FE]">
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
      <section aria-label="Google Automation Services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#EDE9FE]">
              <div className="relative h-64 md:h-80">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85"
                  alt="Google Sheets automation dashboard analytics India"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1035]/80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/20">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white text-sm font-bold">Automation running · 847 rows synced · 0.4s</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#1A1035] p-8 text-white">
                <h3 className="text-lg font-bold mb-2">Real-Time Google Workspace Sync</h3>
                <p className="text-sm text-[#C4B5FD] mb-4">
                  Bi-directional data synchronisation between Google Sheets, Gmail, and Drive — no third-party subscriptions required.
                </p>
                <div className="flex gap-3 flex-wrap">
                  {["Google Sheets", "Gmail API", "Drive API", "Apps Script"].map(tag => (
                    <span key={tag} className="text-[10px] font-bold bg-white/10 text-white/70 px-3 py-1 rounded-full border border-white/10">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <span className="badge-pill">Google Automation Agency India</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1035]">
                Reclaim <span className="gradient-text">20+ Hours</span> Every Single Week
              </h2>
              <p className="text-lg text-[#4B5563] mb-4 leading-relaxed font-medium">
                Stop paying your team to do tasks a script can handle in milliseconds. We build custom Google Apps Script solutions that turn your Google Workspace into a 24/7 autonomous business engine.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Sheets → Gmail Auto-Personalised Replies",
                  "Real-Time Lead Data Scraping & Syncing",
                  "Automated PDF Invoice + WhatsApp Delivery",
                  "Custom KPI Dashboards Updated Every Hour",
                  "Multi-Sheet Data Consolidation Pipelines",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 font-bold text-[#1A1035]">
                    <div className="w-6 h-6 rounded-full bg-[#F0EEFF] flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/services/automation" className="btn-primary inline-flex items-center gap-2">
                Explore Automation Services <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SERVICE GRID ─────────────────────────────── */}
      <section aria-label="Flowzonic Services" className="py-24 px-6 bg-[#F0EEFF] rounded-[4rem]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-pill bg-white">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1035]">
              Three Pillars of <span className="gradient-text">Digital Growth</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <ServiceCard key={svc.title} {...svc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: STATS ──────────────────────────────────────── */}
      <section aria-label="Agency statistics and results" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-pill">By the Numbers</span>
            <h2 className="text-4xl font-bold text-[#1A1035]">
              Results That <span className="gradient-text">Speak for Themselves</span>
            </h2>
          </div>
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
                <div className="w-12 h-12 rounded-2xl bg-[#F0EEFF] flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#1A1035] mb-1">{stat.value}</div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-xs text-[#9CA3AF]">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: INDUSTRIES SERVED ─────────────────────────── */}
      <section aria-label="Industries Flowzonic serves" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-pill">Industry Expertise</span>
            <h2 className="text-4xl font-bold text-[#1A1035] mb-4">
              We've Built For <span className="gradient-text">Every Vertical</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {industryServed.map((ind) => (
              <div key={ind.name} className="group p-6 bg-[#FAFBFF] border border-[#EDE9FE] rounded-3xl text-center hover:border-primary hover:shadow-lg transition-all cursor-default">
                <div className="text-4xl mb-3">{ind.icon}</div>
                <p className="font-bold text-[#1A1035] text-sm">{ind.name}</p>
                <p className="text-xs text-[#9CA3AF] mt-1">{ind.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PROCESS ──────────────────────────────────── */}
      <section aria-label="Our project process" className="py-24 px-6 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="badge-pill">The Roadmap</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1035]">
              From Brief to <span className="gradient-text">Launch in 15 Days</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {flowProcess.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 border border-[#EDE9FE] shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1035]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-4xl font-black text-white/20">{item.step}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#F0EEFF] text-primary flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1035]">{item.title}</h3>
                </div>
                <p className="text-[#4B5563] font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: PORTFOLIO CAROUSEL ───────────────────────── */}
      <section aria-label="Portfolio case studies" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl text-center md:text-left">
              <span className="badge-pill">Case Studies</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1035]">
                Real Work, <span className="gradient-text">Real Results</span>
              </h2>
            </div>
            <Link href="/work/web-development" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {portfolioProjects.map((project, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <Link href={project.href} className="group block h-full">
                    <article className="card-standard p-0 overflow-hidden h-full">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-primary shadow">
                          {project.result}
                        </div>
                      </div>
                      <div className="p-6">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">{project.category}</span>
                        <h3 className="text-xl font-bold text-[#1A1035] group-hover:text-primary transition-colors mb-2">{project.title}</h3>
                        <p className="text-sm text-[#4B5563] font-medium mb-4 leading-relaxed">{project.detail}</p>
                        <div className="flex gap-2 flex-wrap">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold bg-[#F0EEFF] text-primary px-2 py-1 rounded-full">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </article>
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

      {/* ── SECTION 9: TESTIMONIALS ─────────────────────────────── */}
      <section aria-label="Client testimonials and reviews" className="py-24 px-6 bg-[#F0EEFF] rounded-[4rem]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-pill bg-white">Client Reviews</span>
            <h2 className="text-4xl font-bold text-[#1A1035] mb-4">
              Trusted by <span className="gradient-text">30+ Indian Businesses</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-[#EDE9FE] hover:shadow-xl transition-all"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="flex gap-1 mb-4" aria-label={`${t.rating} star rating`}>
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-[#4B5563] font-medium leading-relaxed mb-6 text-sm" itemProp="reviewBody">
                  "{t.text}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#EDE9FE] shrink-0">
                    <Image src={t.avatar} alt={`${t.name} - Flowzonic client`} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1035] text-sm" itemProp="author">{t.name}</p>
                    <p className="text-xs text-[#9CA3AF]">{t.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin size={10} className="text-primary" />
                      <span className="text-[10px] text-[#9CA3AF]">{t.location}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: WHY US COMPARISON ───────────────────────── */}
      <section aria-label="Why choose Flowzonic over other agencies" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-pill">The Difference</span>
            <h2 className="text-4xl font-bold text-[#1A1035] mb-4">
              Why <span className="gradient-text">Flowzonic</span> vs Other Agencies?
            </h2>
          </div>
          <div className="border border-[#EDE9FE] rounded-3xl overflow-hidden shadow-sm">
            <table className="w-full text-left" role="table" aria-label="Flowzonic vs other agencies comparison">
              <thead>
                <tr className="bg-[#F0EEFF] text-[#1A1035]">
                  <th className="p-6 text-sm font-bold uppercase tracking-widest">Feature</th>
                  <th className="p-6 text-sm font-bold uppercase tracking-widest border-l border-[#EDE9FE]">Other Agencies</th>
                  <th className="p-6 text-sm font-bold uppercase tracking-widest border-l border-[#EDE9FE] text-primary bg-[#F3E8FF]">Flowzonic ✓</th>
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

      {/* ── SECTION 11: BLOG / RESOURCES ────────────────────────── */}
      <section aria-label="Blog and resources" className="py-24 px-6 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl text-center md:text-left">
              <span className="badge-pill">Resources & Insights</span>
              <h2 className="text-4xl font-bold text-[#1A1035]">
                Learn From the <span className="gradient-text">Engineers</span>
              </h2>
            </div>
            <Link href="/blog" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              All Articles <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <Link href={post.href} className="group block">
                  <div className="relative aspect-video rounded-3xl overflow-hidden mb-5 border border-[#EDE9FE] shadow-sm">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      itemProp="image"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-primary shadow">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-[#9CA3AF]">{post.date}</span>
                    <span className="text-xs text-[#9CA3AF]">·</span>
                    <span className="text-xs text-[#9CA3AF]">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-[#1A1035] text-base group-hover:text-primary transition-colors leading-snug mb-2" itemProp="headline">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed font-medium" itemProp="description">
                    {post.excerpt}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 12: FAQ ─────────────────────────────────────── */}
      <section aria-label="Frequently asked questions" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-pill">FAQs</span>
            <h2 className="text-4xl font-bold text-[#1A1035] mb-4">Everything You Want to Know</h2>
          </div>
          <div itemScope itemType="https://schema.org/FAQPage">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <AccordionItem value={`item-${i}`} className="bg-[#FAFBFF] border border-[#EDE9FE] rounded-2xl px-6 py-2 shadow-sm">
                    <AccordionTrigger className="text-left font-bold text-[#1A1035] hover:no-underline text-base" itemProp="name">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#4B5563] font-medium leading-relaxed pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <span itemProp="text">{faq.answer}</span>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── SECTION 13: CTA ─────────────────────────────────────── */}
      <section aria-label="Contact Flowzonic" className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#1A1035] to-[#2D1B69] rounded-[3.5rem] overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=60"
              alt=""
              fill
              className="object-cover opacity-10"
              aria-hidden="true"
            />
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10 p-12 md:p-24 text-center">
            <span className="inline-block mb-6 px-4 py-2 rounded-full border border-white/20 text-white/60 text-xs font-bold uppercase tracking-widest">
              🇮🇳 Proudly Indian · Serving Globally
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Build <br /> Something <span className="text-[#C4B5FD]">Extraordinary?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/contact"
                className="px-10 py-5 rounded-full font-bold text-primary bg-white hover:bg-[#F0EEFF] transition-all text-lg flex items-center gap-3 shadow-xl"
                aria-label="Book a free consultation with Flowzonic"
              >
                Book Free Consultation <Rocket size={20} />
              </Link>
              <a
                href="https://wa.me/918881907942"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 rounded-full font-bold text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all text-lg flex items-center gap-3 shadow-xl"
                aria-label="Chat with Flowzonic on WhatsApp"
              >
                <MessageCircle size={22} /> Chat on WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Mail size={14} /> hello@flowzonic.in
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Phone size={14} /> +91 88819 07942
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin size={14} /> India · Remote-First
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({
  icon, title, description, href, features, featured, image, alt,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  features: string[];
  featured?: boolean;
  image: string;
  alt: string;
}) {
  return (
    <article
      className={cn(
        "rounded-[2.5rem] flex flex-col h-full transition-all duration-500 hover:-translate-y-2 overflow-hidden",
        featured
          ? "bg-[#1A1035] text-white shadow-2xl shadow-purple-500/20 ring-4 ring-primary/10"
          : "bg-white border border-[#EDE9FE] shadow-sm hover:shadow-xl"
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className={cn(
          "absolute inset-0",
          featured
            ? "bg-gradient-to-b from-transparent to-[#1A1035]"
            : "bg-gradient-to-b from-transparent to-white/40"
        )} />
        <div className={cn(
          "absolute bottom-4 left-4 w-12 h-12 rounded-2xl flex items-center justify-center",
          featured ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-white text-primary shadow"
        )}>
          {icon}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className={cn("text-2xl font-bold mb-3", featured ? "text-white" : "text-[#1A1035]")}>
          {title}
        </h3>
        <p className={cn("mb-6 leading-relaxed font-medium text-sm", featured ? "text-[#C4B5FD]" : "text-[#4B5563]")}>
          {description}
        </p>

        <ul className="flex flex-col gap-3 mb-8">
          {features.map((f) => (
            <li key={f} className={cn("flex items-center gap-3 text-sm font-bold", featured ? "text-white/90" : "text-[#1A1035]")}>
              <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0", featured ? "bg-primary/30 text-white" : "bg-[#F0EEFF] text-primary")}>
                <CheckCircle2 size={12} />
              </div>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6 border-t border-[#EDE9FE]/20 flex flex-col gap-4">
          <Link
            href={href}
            className={cn(
              "font-bold flex items-center justify-center gap-1 group/btn transition-all text-sm",
              featured ? "text-white" : "text-primary"
            )}
          >
            Learn More
            <ChevronRight
              size={16}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </Link>

          <Link
            href="/contact"
            className={cn(
              "w-full py-4 rounded-2xl font-bold text-center transition-all text-sm",
              featured
                ? "bg-white text-primary hover:bg-[#F0EEFF]"
                : "bg-[#F0EEFF] text-primary hover:bg-primary hover:text-white"
            )}
          >
            Get a Free Proposal
          </Link>
        </div>
      </div>
    </article>
  );
}
