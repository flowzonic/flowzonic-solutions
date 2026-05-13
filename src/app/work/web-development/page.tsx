"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, TrendingUp, CheckCircle2, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "EcomFlow — Shopify Store Redesign",
    description: "A high-performance e-commerce store redesign that increased conversions by 40% in the first month.",
    result: "40% conversion lift",
    tech: ["Next.js", "React", "Tailwind", "Shopify"],
    image: "https://picsum.photos/seed/web1/800/500",
    gradient: "from-purple-100 to-violet-50"
  },
  {
    title: "NexaLand Agency Platform",
    description: "Multi-page agency website with complex animations, contact forms, and custom CMS integration.",
    result: "3x more inquiries",
    tech: ["Next.js", "Framer Motion", "Firebase"],
    image: "https://picsum.photos/seed/web2/800/500",
    gradient: "from-indigo-100 to-purple-50"
  },
  {
    title: "Lumina Tech Dashboard",
    description: "Cloud-based analytics platform for monitoring server performance across global nodes.",
    result: "99.9% uptime tracking",
    tech: ["React", "TypeScript", "D3.js", "Node.js"],
    image: "https://picsum.photos/seed/web3/800/500",
    gradient: "from-blue-100 to-indigo-50"
  }
];

export default function WebDevelopmentWork() {
  return (
    <main className="pt-32 pb-20 px-6 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <section className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="badge-pill">Our Work</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1A1035]">
              Web <span className="gradient-text">Development</span>
            </h1>
            <p className="text-xl text-[#4B5563] max-w-2xl mx-auto font-medium">
              Engineering lightning-fast digital engines that drive growth and command attention.
            </p>
          </motion.div>
        </section>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-standard p-0 overflow-hidden flex flex-col group"
            >
              <div className={cn("relative aspect-video overflow-hidden bg-gradient-to-br", project.gradient)}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#7B2FBE] shadow-sm">
                  {project.result}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 text-[#1A1035]">{project.title}</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed mb-6 font-medium flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] bg-[#F3F4F6] px-2 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <Link href="/contact" className="text-[#7B2FBE] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Request Similar Project <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <section className="bg-[#1A1035] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to build your digital engine?</h2>
          <p className="text-[#C4B5FD] text-lg mb-10 max-w-xl mx-auto font-medium">Let's turn your vision into a high-performance reality.</p>
          <Link href="/contact" className="btn-white px-10 py-4 inline-flex items-center gap-2">
            Get Started <Rocket size={20} />
          </Link>
        </section>
      </div>
    </main>
  );
}
