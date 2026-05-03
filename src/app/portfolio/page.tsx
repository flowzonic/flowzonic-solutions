"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Web Development", "Google Automation", "Graphic Design"];

const PROJECTS = [
  {
    title: "Enterprise Dashboard Transformation",
    category: "Web Development",
    image: "https://picsum.photos/seed/project-web-1/800/500",
    description: "A high-performance analytics dashboard for global logistics monitoring.",
    tech: ["Next.js", "React", "Firebase"]
  },
  {
    title: "Automated CRM Data Sync",
    category: "Google Automation",
    image: "https://picsum.photos/seed/project-auto-1/800/500",
    description: "Custom Apps Script solution syncing real-time sales data from Sheets to Salesforce.",
    tech: ["Apps Script", "Salesforce API", "Gemini AI"]
  },
  {
    title: "Lumina Brand Identity",
    category: "Graphic Design",
    image: "https://picsum.photos/seed/project-design-1/800/500",
    description: "Premium visual identity and 3D asset collection for a tech consultancy.",
    tech: ["Figma", "Blender", "After Effects"]
  },
  {
    title: "E-commerce Growth Engine",
    category: "Web Development",
    image: "https://picsum.photos/seed/project-web-2/800/500",
    description: "Headless commerce platform optimized for high conversion rates.",
    tech: ["Next.js", "Tailwind", "Shopify Plus"]
  },
  {
    title: "Intelligent Gmail Workflow",
    category: "Google Automation",
    image: "https://picsum.photos/seed/project-auto-2/800/500",
    description: "AI-driven email processing script that automates customer support routing.",
    tech: ["Apps Script", "Gmail API", "OpenAI"]
  },
  {
    title: "Aura UI/UX System",
    category: "Graphic Design",
    image: "https://picsum.photos/seed/project-design-2/800/500",
    description: "A comprehensive design system for a multi-platform SaaS product.",
    tech: ["Figma", "Prototyping", "UI Engineering"]
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter(
    project => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <main className="pt-32 pb-24 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <section className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-pill">Our Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1A1035]">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-xl text-[#4B5563] max-w-2xl mx-auto mb-10 font-medium">
              A collection of our recent projects across web development, Google automation, and graphic design. We let our work speak for itself.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <StatItem label="50+ Projects" />
              <StatItem label="3 Categories" />
              <StatItem label="30+ Happy Clients" />
            </div>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-8 py-3 rounded-full font-bold transition-all duration-300 border-2",
                  activeCategory === category
                    ? "bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] text-white border-transparent shadow-lg shadow-purple-200"
                    : "bg-white border-[#EDE9FE] text-[#4B5563] hover:border-[#7B2FBE] hover:text-[#7B2FBE]"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="card-standard group p-0 overflow-hidden flex flex-col h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1035]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white text-sm font-bold flex items-center gap-2">
                      View Case Study <ExternalLink size={16} />
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <span className="badge-category mb-4 w-fit">{project.category}</span>
                  <h3 className="text-2xl font-bold mb-3 text-[#1A1035] group-hover:text-[#7B2FBE] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed mb-6 font-medium">
                    {project.description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-[#EDE9FE] flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <section className="mt-24 text-center">
          <div className="bg-[#1A1035] rounded-4xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B2FBE]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to start your next project?</h2>
            <p className="text-[#C4B5FD] text-lg mb-10 max-w-xl mx-auto font-medium">
              Join our list of successful clients and automate your digital flow today.
            </p>
            <Link 
              href="/contact" 
              className="px-10 py-4 rounded-full font-bold text-[#7B2FBE] bg-white hover:bg-[#F0EEFF] transition-all duration-200 inline-flex items-center gap-3 shadow-xl"
            >
              Start Your Flow <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function StatItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-[#7B2FBE]" />
      <span className="text-[#4B5563] font-bold text-sm tracking-wide">{label}</span>
    </div>
  );
}
