"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code, Zap, Palette, Shield, Database, Layout,
  ArrowRight, Users, Sparkles, Cpu, CheckCircle2,
  Globe, Terminal, Figma, TrendingUp, Clock, Star,
  MessageCircle,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: <Code size={32} />,
    emoji: "💻",
    title: "Web Development",
    tagline: "Fast. Scalable. Beautiful.",
    description:
      "We build high-performance web ecosystems that serve as the digital bedrock for your business growth — from landing pages to full web apps.",
    slug: "web-development",
    color: "from-violet-500 to-purple-600",
    lightColor: "from-violet-50 to-purple-50",
    borderColor: "border-violet-200",
    tags: ["Next.js", "React", "TypeScript", "Firebase"],
    offers: [
      "Custom React / Next.js Applications",
      "SEO-Optimized Landing Pages",
      "E-Commerce Stores",
      "Headless CMS Integration",
      "API & Third-party Integration",
    ],
    price: "Starting from ₹15,000",
    result: "3x faster load times",
  },
  {
    icon: <Zap size={32} />,
    emoji: "⚡",
    title: "Google Automation",
    tagline: "Save hours. Every. Single. Week.",
    description:
      "Reclaim your team's most valuable asset — time — by automating the repetitive tasks that stall your innovation using Google Apps Script.",
    slug: "google-automation",
    color: "from-purple-500 to-indigo-600",
    lightColor: "from-purple-50 to-indigo-50",
    borderColor: "border-purple-200",
    tags: ["Apps Script", "Google Sheets", "Gmail", "Gemini AI"],
    offers: [
      "Custom Apps Script Solutions",
      "Gmail Workflow Automation",
      "Real-time Data Sync",
      "Automated Reporting & Dashboards",
      "Google Workspace Integration",
    ],
    price: "Starting from ₹8,000",
    result: "20hrs saved per week",
    featured: true,
  },
  {
    icon: <Palette size={32} />,
    emoji: "🎨",
    title: "Graphic Design",
    tagline: "Visuals that command authority.",
    description:
      "We craft premium visual identities that build instant trust with your audience — from brand systems to social media kits.",
    slug: "graphic-design",
    color: "from-fuchsia-500 to-purple-600",
    lightColor: "from-fuchsia-50 to-purple-50",
    borderColor: "border-fuchsia-200",
    tags: ["Figma", "Illustrator", "Branding", "UI/UX"],
    offers: [
      "Brand Identity Systems",
      "Logo Design",
      "Social Media Kit (30+ templates)",
      "UI/UX Design",
      "Print & Digital Assets",
    ],
    price: "Starting from ₹5,000",
    result: "2x brand recognition",
  },
];

const BENEFITS = [
  {
    icon: <Shield size={22} />,
    title: "Precision Code",
    description: "Enterprise-grade reliability in every script and line of code we ship.",
  },
  {
    icon: <Database size={22} />,
    title: "Scalable Architecture",
    description: "Systems built to handle growth, so you never outgrow your tech.",
  },
  {
    icon: <Layout size={22} />,
    title: "Frictionless UX",
    description: "User experiences that are intuitive, beautiful, and built for conversion.",
  },
  {
    icon: <Clock size={22} />,
    title: "On-Time Delivery",
    description: "Fixed timelines with daily updates — no surprises, ever.",
  },
  {
    icon: <Star size={22} />,
    title: "Free Revisions",
    description: "We iterate until you're 100% happy. No extra charges.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Results-Driven",
    description: "Every decision is backed by data and focused on your growth.",
  },
];

const PROCESS = [
  { step: "01", title: "Discovery Call", desc: "We understand your goals, audience, and requirements.", time: "Day 1–2" },
  { step: "02", title: "Strategy & Plan", desc: "We build a detailed project roadmap and get your approval.", time: "Day 3–4" },
  { step: "03", title: "Design Phase", desc: "Mockups and wireframes built for your review.", time: "Day 5–7" },
  { step: "04", title: "Build & Test", desc: "Full development with quality checks throughout.", time: "Day 8–13" },
  { step: "05", title: "Launch & Support", desc: "Go live with 30 days of free post-launch support.", time: "Day 14–15" },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <main className="bg-[#FAFBFF] overflow-hidden">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 relative">
        {/* Background blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-100/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 md:mb-20"
          >
            <span className="badge-pill mb-4">What We Offer</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 text-[#1A1035] leading-[1.1] px-2">
              Our <span className="gradient-text">Expertise</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto font-medium px-2 leading-relaxed">
              Specialized solutions designed to propel your business into the
              next era of digital excellence through precision engineering and
              elite design.
            </p>
          </motion.div>

          {/* ── SERVICE CARDS ───────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className={`relative rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-100 ${
                  svc.featured
                    ? "bg-gradient-to-br from-[#7B2FBE] to-[#A855F7] text-white shadow-xl shadow-purple-200"
                    : "bg-white border border-[#EDE9FE]"
                }`}
              >
                {/* Featured badge */}
                {svc.featured && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/30">
                    Most Popular
                  </div>
                )}

                {/* Card top accent bar */}
                {!svc.featured && (
                  <div className={`h-1 w-full bg-gradient-to-r ${svc.color}`} />
                )}

                <div className="p-7 sm:p-8 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110 ${
                      svc.featured
                        ? "bg-white/20 text-white"
                        : `bg-gradient-to-br ${svc.lightColor} border ${svc.borderColor} text-[#7B2FBE]`
                    }`}
                  >
                    {svc.icon}
                  </div>

                  {/* Title + tagline */}
                  <h2
                    className={`text-xl sm:text-2xl font-bold mb-1 ${
                      svc.featured ? "text-white" : "text-[#1A1035]"
                    }`}
                  >
                    {svc.title}
                  </h2>
                  <p
                    className={`text-xs font-bold uppercase tracking-widest mb-4 ${
                      svc.featured ? "text-white/70" : "text-[#7B2FBE]"
                    }`}
                  >
                    {svc.tagline}
                  </p>
                  <p
                    className={`text-sm leading-relaxed mb-6 font-medium ${
                      svc.featured ? "text-white/80" : "text-[#4B5563]"
                    }`}
                  >
                    {svc.description}
                  </p>

                  {/* Offers checklist */}
                  <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                    {svc.offers.map((offer) => (
                      <li
                        key={offer}
                        className={`flex items-start gap-2.5 text-sm font-medium ${
                          svc.featured ? "text-white/90" : "text-[#4B5563]"
                        }`}
                      >
                        <CheckCircle2
                          size={15}
                          className={`flex-shrink-0 mt-0.5 ${
                            svc.featured ? "text-white/70" : "text-[#7B2FBE]"
                          }`}
                        />
                        {offer}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${
                          svc.featured
                            ? "bg-white/15 text-white"
                            : "bg-[#F0EEFF] text-[#7B2FBE]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div
                    className={`pt-5 border-t flex items-center justify-between gap-3 mt-auto ${
                      svc.featured ? "border-white/20" : "border-[#EDE9FE]"
                    }`}
                  >
                    <span
                      className={`text-xs font-bold ${
                        svc.featured ? "text-white/60" : "text-[#9CA3AF]"
                      }`}
                    >
                      {svc.price}
                    </span>
                    <Link
                      href={`/services/${svc.slug}`}
                      className={`flex items-center gap-1.5 text-sm font-bold transition-all hover:gap-2.5 ${
                        svc.featured ? "text-white" : "text-[#7B2FBE]"
                      }`}
                    >
                      Explore <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS STRIP ────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-[#1A1035] px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "20hrs", label: "Saved Per Week (avg)" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "15 Days", label: "Avg Turnaround" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#A855F7]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HUMAN-CENTRIC SECTION ────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F0EEFF] border border-[#EDE9FE] rounded-full text-[#7B2FBE] text-xs sm:text-sm font-bold">
                <Users size={16} /> Human-Centric Innovation
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#1A1035]">
                Where Elite{" "}
                <span className="gradient-text">Talent</span>{" "}
                Meets Future Tech
              </h2>
              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-medium">
                Technology is only as powerful as the minds behind it. At
                Flowzonic, we pair cutting-edge automation with human intuition
                to create solutions that don't just work — they inspire.
              </p>

              {/* Two feature cards — stack on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#F0EEFF] border border-[#EDE9FE] p-5 sm:p-6 rounded-2xl">
                  <Sparkles className="text-[#7B2FBE] mb-3" size={22} />
                  <h4 className="font-bold text-[#1A1035] mb-1.5 text-sm sm:text-base">
                    Creative Vision
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4B5563]">
                    Designers who see beyond the canvas to craft immersive brand
                    experiences.
                  </p>
                </div>
                <div className="bg-[#F0EEFF] border border-[#EDE9FE] p-5 sm:p-6 rounded-2xl">
                  <Cpu className="text-[#7B2FBE] mb-3" size={22} />
                  <h4 className="font-bold text-[#1A1035] mb-1.5 text-sm sm:text-base">
                    Technical Mastery
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4B5563]">
                    Engineers who treat every script as high-precision
                    architecture.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right — visual cards grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Top-left — gradient stat */}
              <div className="bg-gradient-to-br from-[#7B2FBE] to-[#A855F7] rounded-2xl p-6 text-white flex flex-col justify-center items-center text-center aspect-square">
                <p className="text-4xl sm:text-5xl font-black">50+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-white/70 mt-1">Projects Done</p>
              </div>

              {/* Top-right — card */}
              <div className="bg-[#F0EEFF] border border-[#EDE9FE] rounded-2xl p-5 flex flex-col justify-center aspect-square">
                <Globe className="text-[#7B2FBE] mb-3" size={28} />
                <p className="font-bold text-[#1A1035] text-sm sm:text-base mb-1">Web Dev</p>
                <p className="text-xs text-[#9CA3AF]">Next.js · React · TypeScript</p>
              </div>

              {/* Bottom-left — card */}
              <div className="bg-[#1A1035] rounded-2xl p-5 flex flex-col justify-center aspect-square">
                <Terminal className="text-[#A855F7] mb-3" size={28} />
                <p className="font-bold text-white text-sm sm:text-base mb-1">Automation</p>
                <p className="text-xs text-[#9CA3AF]">Apps Script · Sheets · Gmail</p>
              </div>

              {/* Bottom-right — card */}
              <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 border border-fuchsia-200 rounded-2xl p-5 flex flex-col justify-center items-center text-center aspect-square">
                <Figma className="text-fuchsia-600 mb-3" size={28} />
                <p className="font-bold text-[#1A1035] text-sm sm:text-base mb-1">Design</p>
                <p className="text-xs text-[#9CA3AF]">Figma · Brand · UI/UX</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ──────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#F0EEFF]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="badge-pill">Step by Step</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1035] mt-3 mb-4">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-[#4B5563] text-base sm:text-lg font-medium">
              From first call to live launch in 15 days — here's exactly what
              happens.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white border border-[#EDE9FE] rounded-2xl p-5 sm:p-6 flex items-start gap-4 sm:gap-5 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300"
              >
                {/* Step number */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#7B2FBE] to-[#A855F7] flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-bold text-[#1A1035] text-sm sm:text-base">
                      {step.title}
                    </h3>
                    <span className="text-[10px] font-bold bg-[#F0EEFF] text-[#7B2FBE] px-2 py-0.5 rounded-full border border-[#EDE9FE]">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4B5563] font-medium">
                    {step.desc}
                  </p>
                </div>
                <CheckCircle2
                  size={18}
                  className="text-green-400 flex-shrink-0 mt-0.5 hidden sm:block"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE FLOWZONIC EDGE (BENEFITS) ────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="badge-pill">Why Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1035] mt-3 mb-4">
              The Flowzonic <span className="gradient-text">Edge</span>
            </h2>
            <p className="text-[#4B5563] text-base sm:text-lg font-medium max-w-2xl mx-auto">
              What makes working with us different from every other agency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-[#FAFBFF] border border-[#EDE9FE] rounded-2xl p-6 sm:p-7 flex flex-col gap-3 hover:shadow-lg hover:shadow-purple-100 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-[#F0EEFF] border border-[#EDE9FE] rounded-xl flex items-center justify-center text-[#7B2FBE]">
                  {b.icon}
                </div>
                <h3 className="font-bold text-[#1A1035] text-base sm:text-lg">
                  {b.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {b.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLABORATIVE CULTURE ────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#1A1035]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6 md:space-y-8 order-1"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                A Seamless{" "}
                <span className="text-[#A855F7]">Bridge</span>{" "}
                Between Concept & Reality
              </h2>
              <p className="text-[#C4B5FD] text-base sm:text-lg leading-relaxed font-medium">
                Our developers and designers work together from day one, ensuring
                every automation is beautiful and every design is technically
                flawless.
              </p>

              <ul className="flex flex-col gap-3 sm:gap-4">
                {[
                  "Continuous Feedback Loops",
                  "Cross-Functional Problem Solving",
                  "Iterative Agile Methodology",
                  "Direct Access to Project Lead",
                  "Daily WhatsApp Updates",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-white font-medium text-sm sm:text-base"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#A855F7]/20 border border-[#A855F7]/30 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={13} className="text-[#A855F7]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[#7B2FBE] bg-white hover:bg-[#F0EEFF] transition-all duration-200 text-sm sm:text-base"
              >
                Meet the Team <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Visual grid side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4 order-2"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square">
                <p className="text-4xl sm:text-5xl font-black text-[#A855F7]">24/7</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mt-1">
                  Innovation
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#7B2FBE]/30 to-[#A855F7]/20 border border-[#A855F7]/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square">
                <Users className="text-[#A855F7] mb-3" size={32} />
                <p className="text-sm font-bold text-white">Client-First</p>
                <p className="text-[10px] text-white/50 mt-1">Always</p>
              </div>
              <div className="bg-gradient-to-br from-[#A855F7]/20 to-[#7B2FBE]/30 border border-[#A855F7]/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square">
                <TrendingUp className="text-[#A855F7] mb-3" size={32} />
                <p className="text-sm font-bold text-white">Growth</p>
                <p className="text-[10px] text-white/50 mt-1">Results-driven</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square">
                <p className="text-4xl sm:text-5xl font-black text-[#A855F7]">5★</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mt-1">
                  Rated
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-[#FAFBFF]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#1A1035] to-[#2D1B69] rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Glow orbs */}
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#7B2FBE]/30 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#A855F7]/20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-white/10 text-[#C4B5FD] px-4 py-1.5 rounded-full border border-white/10 mb-5">
                Free Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight px-2">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-[#C4B5FD] text-sm sm:text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto font-medium px-2">
                Book a free 30-minute strategy call. No pressure, no commitment
                — just a focused conversation about your goals.
              </p>

              {/* Buttons — stacked mobile, row tablet+ */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-[#7B2FBE] bg-white hover:bg-[#F0EEFF] transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-xl text-sm sm:text-base"
                >
                  Book Free Consultation <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/91XXXXXXXXXX?text=Hi, I want to know more about your services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all duration-200 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <MessageCircle size={18} /> WhatsApp Us
                </a>
              </div>

              <p className="text-[#9CA3AF] text-xs mt-5">
                ✓ Reply within 2 hours · Free quote · No commitment required
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}