"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code, Zap, Palette, Shield, Database, Layout,
  ArrowRight, Users, Sparkles, Cpu, CheckCircle2,
  Globe, Terminal, Figma, TrendingUp, Clock, Star,
  MessageCircle,
} from "lucide-react";

const SERVICES = [
  {
    icon: <Code size={32} />,
    title: "Web Development",
    tagline: "Fast. Scalable. Beautiful.",
    description: "We build high-performance web ecosystems that serve as the digital bedrock for your business growth.",
    slug: "web",
    color: "from-violet-500 to-purple-600",
    lightColor: "from-violet-50 to-purple-50",
    borderColor: "border-violet-200",
    tags: ["Next.js", "React", "TypeScript", "Firebase"],
    offers: [
      "Custom React / Next.js Apps",
      "SEO-Optimized Landing Pages",
      "E-Commerce Stores",
      "API & Third-party Integration",
    ],
    price: "Starting from ₹15,000",
  },
  {
    icon: <Zap size={32} />,
    title: "Google Automation",
    tagline: "Save hours. Every. Single. Week.",
    description: "Reclaim your team's most valuable asset — time — by automating repetitive tasks with Apps Script.",
    slug: "automation",
    color: "from-purple-500 to-indigo-600",
    lightColor: "from-purple-50 to-indigo-50",
    borderColor: "border-purple-200",
    tags: ["Apps Script", "Sheets", "Gmail", "Gemini AI"],
    offers: [
      "Custom Apps Script Solutions",
      "Gmail Workflow Automation",
      "Real-time Data Sync",
      "Automated Reporting",
    ],
    price: "Starting from ₹8,000",
    featured: true,
  },
  {
    icon: <Palette size={32} />,
    title: "Graphic Designing",
    tagline: "Visuals that command authority.",
    description: "We craft premium visual identities that build instant trust with your audience.",
    slug: "design",
    color: "from-fuchsia-500 to-purple-600",
    lightColor: "from-fuchsia-50 to-purple-50",
    borderColor: "border-fuchsia-200",
    tags: ["Figma", "Illustrator", "Branding", "UI/UX"],
    offers: [
      "Brand Identity Systems",
      "Logo Design",
      "Social Media Kit",
      "UI/UX Design",
    ],
    price: "Starting from ₹5,000",
  },
];

export default function Services() {
  return (
    <main className="bg-[#FAFBFF] overflow-hidden">
      <section className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-100/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="badge-pill">What We Offer</span>
            <h1 className="text-4xl md:text-7xl font-bold mb-5 text-[#1A1035]">
              Our <span className="gradient-text">Expertise</span>
            </h1>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto font-medium leading-relaxed">
              Specialized solutions designed to propel your business into the next era of digital excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 ${
                  svc.featured
                    ? "bg-gradient-to-br from-[#7B2FBE] to-[#A855F7] text-white shadow-xl shadow-purple-200"
                    : "bg-white border border-[#EDE9FE]"
                }`}
              >
                <div className="p-8 flex flex-col flex-1">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl ${
                      svc.featured
                        ? "bg-white/20 text-white"
                        : `bg-gradient-to-br ${svc.lightColor} border ${svc.borderColor} text-[#7B2FBE]`
                    }`}
                  >
                    {svc.icon}
                  </div>
                  <h2 className={`text-2xl font-bold mb-1 ${svc.featured ? "text-white" : "text-[#1A1035]"}`}>
                    {svc.title}
                  </h2>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${svc.featured ? "text-white/70" : "text-[#7B2FBE]"}`}>
                    {svc.tagline}
                  </p>
                  <p className={`text-sm leading-relaxed mb-6 font-medium ${svc.featured ? "text-white/80" : "text-[#4B5563]"}`}>
                    {svc.description}
                  </p>
                  <ul className="flex flex-col gap-3 mb-6 flex-1">
                    {svc.offers.map((offer) => (
                      <li key={offer} className="flex items-start gap-2 text-sm font-medium">
                        <CheckCircle2 size={16} className={svc.featured ? "text-white/70" : "text-[#7B2FBE]"} />
                        {offer}
                      </li>
                    ))}
                  </ul>
                  <div className={`pt-5 border-t flex items-center justify-between ${svc.featured ? "border-white/20" : "border-[#EDE9FE]"}`}>
                    <span className="text-xs font-bold opacity-70">{svc.price}</span>
                    <Link
                      href={`/services/${svc.slug}`}
                      className={`flex items-center gap-1 font-bold text-sm ${svc.featured ? "text-white" : "text-[#7B2FBE]"}`}
                    >
                      Explore <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
