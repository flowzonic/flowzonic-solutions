"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Palette, Sparkles, Star, ExternalLink, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const BENTO_WORKS = [
  {
    id: 1,
    title: "BrandSpark Identity",
    category: "Branding",
    image: "https://picsum.photos/seed/design1/800/800",
    size: "large",
    description: "A complete visual ecosystem for a premium lifestyle brand."
  },
  {
    id: 2,
    title: "Vizion Social Kit",
    category: "Social Media",
    image: "https://picsum.photos/seed/design2/600/400",
    size: "small",
    description: "30+ high-engagement templates."
  },
  {
    id: 3,
    title: "Lumina UI/UX",
    category: "Product Design",
    image: "https://picsum.photos/seed/design3/600/400",
    size: "small",
    description: "Interface for elite analytics."
  },
  {
    id: 4,
    title: "EcomFlow Packaging",
    category: "Packaging",
    image: "https://picsum.photos/seed/design4/800/400",
    size: "medium",
    description: "Eco-friendly premium aesthetics."
  },
  {
    id: 5,
    title: "Web Banner Series",
    category: "Marketing",
    image: "https://picsum.photos/seed/design5/600/600",
    size: "small",
    description: "High-conversion ad sets."
  }
];

export default function GraphicDesignWork() {
  return (
    <main className="pt-32 pb-20 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <span className="badge-pill">Design Showcase</span>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 text-[#1A1035] tracking-tighter">
              Visual <span className="gradient-text">Authority</span>
            </h1>
            <p className="text-xl text-[#4B5563] font-medium leading-relaxed">
              We don't just design; we architect brand experiences that command respect and build instant trust with high-value audiences.
            </p>
          </motion.div>
        </section>

        {/* Bento Grid Showcase */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* LARGE ITEM */}
            <WorkItem 
              work={BENTO_WORKS[0]} 
              className="md:col-span-2 md:row-span-2 aspect-square" 
            />
            
            {/* SMALL ITEMS */}
            <WorkItem work={BENTO_WORKS[1]} className="md:col-span-1 aspect-square" />
            <WorkItem work={BENTO_WORKS[2]} className="md:col-span-1 aspect-square" />
            
            {/* MEDIUM ITEM */}
            <WorkItem work={BENTO_WORKS[3]} className="md:col-span-2 aspect-[16/7]" />
            
            {/* FINAL SMALL */}
            <WorkItem work={BENTO_WORKS[4]} className="md:col-span-2 aspect-[16/7]" />
          </div>
        </section>

        {/* Stats Strip */}
        <section className="mb-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          <DesignStat label="Logos Crafted" value="120+" />
          <DesignStat label="Brand Systems" value="45+" />
          <DesignStat label="Satisfied Clients" value="80+" />
          <DesignStat label="Design Awards" value="12" />
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#7B2FBE] to-[#A855F7] rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Elevate your brand aesthetic today.</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto font-medium">Ready to stand out? Let's discuss your visual strategy.</p>
          <Link href="/contact" className="bg-white text-[#7B2FBE] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#F0EEFF] transition-all inline-flex items-center gap-2">
            Start Your Project <ArrowRight size={20} />
          </Link>
        </section>
      </div>
    </main>
  );
}

function WorkItem({ work, className }: { work: any; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={cn(
        "relative rounded-[2rem] overflow-hidden group border border-[#EDE9FE] shadow-sm",
        className
      )}
    >
      <Image 
        src={work.image} 
        alt={work.title} 
        fill 
        className="object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1035]/90 via-[#1A1035]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
        <span className="text-[#A855F7] text-[10px] font-bold uppercase tracking-widest mb-2">
          {work.category}
        </span>
        <h3 className="text-white text-xl font-bold mb-2">{work.title}</h3>
        <p className="text-white/70 text-sm font-medium mb-6 line-clamp-2">{work.description}</p>
        <button className="w-10 h-10 rounded-full bg-white text-[#1A1035] flex items-center justify-center hover:bg-[#7B2FBE] hover:text-white transition-all">
          <ExternalLink size={18} />
        </button>
      </div>
    </motion.div>
  );
}

function DesignStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center md:text-left">
      <p className="text-4xl font-bold text-[#1A1035] mb-2">{value}</p>
      <p className="text-sm text-[#9CA3AF] font-bold uppercase tracking-widest">{label}</p>
    </div>
  );
}
