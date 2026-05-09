"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Loader2, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Web Development", "Google Automation", "Graphic Design"];

const STATIC_PROJECTS = [
  {
    id: "1",
    title: "EcomFlow — Shopify Store Redesign",
    category: "Web Development",
    image: "",
    fallbackGradient: "from-purple-100 via-violet-50 to-white",
    description: "A high-performance e-commerce store redesign that increased conversions by 40% in the first month.",
    tech: ["Next.js", "React", "Tailwind", "Stripe"],
    result: "40% more conversions",
  },
  {
    id: "2",
    title: "Automated CRM Data Sync",
    category: "Google Automation",
    image: "",
    fallbackGradient: "from-indigo-100 via-purple-50 to-white",
    description: "Custom Apps Script solution syncing real-time sales data from Sheets to Salesforce — saving 20hrs/week.",
    tech: ["Apps Script", "Salesforce API", "Google Sheets"],
    result: "20hrs saved per week",
  },
  {
    id: "3",
    title: "BrandSpark — Full Brand Identity",
    category: "Graphic Design",
    image: "",
    fallbackGradient: "from-fuchsia-100 via-pink-50 to-white",
    description: "Complete brand identity design including logo, color system, typography, and social media kit.",
    tech: ["Figma", "Illustrator", "Photoshop"],
    result: "2x brand recognition",
  },
  {
    id: "4",
    title: "NexaLand Agency Website",
    category: "Web Development",
    image: "",
    fallbackGradient: "from-violet-100 via-purple-50 to-white",
    description: "Multi-page agency website with animations, contact forms, and CMS integration.",
    tech: ["Next.js", "Framer Motion", "Firebase"],
    result: "3x more enquiries",
  },
  {
    id: "5",
    title: "Invoice Auto-Generator",
    category: "Google Automation",
    image: "",
    fallbackGradient: "from-purple-100 via-indigo-50 to-white",
    description: "Automated invoice generation from Google Sheets directly to Gmail as PDF attachments.",
    tech: ["Apps Script", "Google Docs", "Gmail API"],
    result: "5hrs saved per week",
  },
  {
    id: "6",
    title: "Vizion Social Media Kit",
    category: "Graphic Design",
    image: "",
    fallbackGradient: "from-pink-100 via-fuchsia-50 to-white",
    description: "Complete social media design kit with 30+ templates for Instagram, LinkedIn, and Twitter.",
    tech: ["Figma", "Canva Pro", "Adobe XD"],
    result: "50% more engagement",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = STATIC_PROJECTS.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <main className="pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── HEADER ──────────────────────────────────────────── */}
        <section className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-pill">Our Portfolio</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-[#1A1035] leading-tight">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto mb-8 md:mb-10 font-medium px-2">
              A collection of our recent projects across web development, Google
              automation, and graphic design. We let our work speak for itself.
            </p>

            {/* Stats — wraps cleanly on mobile */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10 md:mb-16">
              <StatItem label="50+ Projects" />
              <StatItem label="3 Categories" />
              <StatItem label="30+ Happy Clients" />
            </div>
          </motion.div>

          {/* Category Filter — scrollable on mobile */}
          <div className="w-full overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex gap-2 sm:gap-3 sm:flex-wrap sm:justify-center min-w-max sm:min-w-0 mb-10 md:mb-16">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold transition-all duration-300 border-2 text-sm sm:text-base whitespace-nowrap flex-shrink-0",
                    activeCategory === category
                      ? "bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] text-white border-transparent shadow-lg shadow-purple-200"
                      : "bg-white border-[#EDE9FE] text-[#4B5563] hover:border-[#7B2FBE] hover:text-[#7B2FBE]"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS GRID ───────────────────────────────────── */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-white border border-[#EDE9FE] rounded-2xl group overflow-hidden flex flex-col hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image / Gradient Thumbnail */}
                <div
                  className={cn(
                    "relative aspect-[16/10] overflow-hidden bg-gradient-to-br flex-shrink-0",
                    project.fallbackGradient
                  )}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    /* Branded placeholder when no image */
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/70 border border-[#EDE9FE] flex items-center justify-center shadow-sm">
                        <span className="text-2xl">
                          {project.category === "Web Development" && "💻"}
                          {project.category === "Google Automation" && "⚡"}
                          {project.category === "Graphic Design" && "🎨"}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1A1035]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-bold flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                      View Case Study <ExternalLink size={14} />
                    </span>
                  </div>

                  {/* Result badge — always visible */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-[#EDE9FE] rounded-full px-3 py-1 text-[10px] font-bold text-[#7B2FBE]">
                    ↑ {project.result}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col">
                  <span className="badge-category mb-3 w-fit text-[10px] sm:text-xs">
                    {project.category}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-[#1A1035] group-hover:text-[#7B2FBE] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed mb-4 font-medium flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags + CTA row */}
                  <div className="mt-auto pt-4 border-t border-[#EDE9FE] flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] bg-[#F8F5FF] px-2 py-1 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-[#7B2FBE] font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all whitespace-nowrap">
                      Details <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#9CA3AF] text-lg font-medium">
              No projects in this category yet.
            </p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-4 text-[#7B2FBE] font-bold hover:underline text-sm"
            >
              View all projects →
            </button>
          </div>
        )}

        {/* ── CTA BANNER ──────────────────────────────────────── */}
        <section className="mt-16 md:mt-24">
          <div className="bg-[#1A1035] rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden text-center">
            {/* Glow blobs */}
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#7B2FBE]/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#A855F7]/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Ready to start your next project?
              </h2>
              <p className="text-[#C4B5FD] text-sm sm:text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto font-medium px-2">
                Join our list of successful clients and transform your digital
                presence with Flowzonic Solutions.
              </p>

              {/* Two CTA buttons stacked on mobile, row on sm+ */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-[#7B2FBE] bg-white hover:bg-[#F0EEFF] transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-xl text-sm sm:text-base"
                >
                  Start Your Project <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/91XXXXXXXXXX?text=Hi, I want to discuss a project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all duration-200 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>

              <p className="text-[#9CA3AF] text-xs mt-5">
                ✓ Free consultation · No commitment required · Reply within 2 hours
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

function StatItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-[#7B2FBE] flex-shrink-0" />
      <span className="text-[#4B5563] font-bold text-sm tracking-wide">
        {label}
      </span>
    </div>
  );
}