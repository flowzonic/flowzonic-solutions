"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, Rocket, TrendingUp, CircleHelp, Zap, Sparkles, Layers
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function ServiceDetailClient({ service }: { service: any }) {
  return (
    <main className="pt-32 pb-20 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-block p-4 bg-white border border-[#EDE9FE] rounded-2xl mb-6 shadow-sm">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-[#1A1035]">
              {service.headline}
            </h1>
            <p className="text-xl text-[#4B5563] mb-10 leading-relaxed font-medium">
              {service.subHeadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Initiate Project <Rocket size={20} />
              </Link>
              <Link href="/portfolio" className="btn-secondary inline-flex items-center gap-2">
                View Gallery
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-4xl overflow-hidden border border-[#EDE9FE] shadow-2xl bg-white p-2">
              <Image 
                src={service.image || "https://picsum.photos/seed/service/800/600"} 
                alt={service.title} 
                width={800} 
                height={600} 
                className="rounded-3xl object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* Bento Grid Gallery (Specific to Design or as a Portfolio section) */}
        {service.gallery && (
          <section className="mb-32">
            <div className="text-center mb-16">
              <span className="badge-pill">Visual Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1A1035]">Design <span className="gradient-text">Showcase</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
              {service.gallery.map((item: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={cn(
                    "relative rounded-3xl overflow-hidden border border-[#EDE9FE] group shadow-sm hover:shadow-xl transition-all duration-500",
                    item.span
                  )}
                >
                  <Image 
                    src={item.src} 
                    alt={item.alt} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    data-ai-hint={item.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1035]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white font-bold">{item.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Core Pillars */}
        <section className="mb-32">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-[#1A1035]">The <span className="text-primary">Flowzonic</span> Edge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.whyUs.map((text: string, i: number) => (
              <div key={i} className="bg-white border border-[#EDE9FE] p-10 rounded-3xl shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#F0EEFF] rounded-xl flex items-center justify-center text-primary mb-8 font-bold border border-[#EDE9FE]">
                  0{i + 1}
                </div>
                <p className="text-[#4B5563] leading-relaxed font-medium">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Map */}
        <section className="py-20 bg-[#F0EEFF] rounded-[3rem] px-8 md:px-16 mb-32">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#1A1035]">Our <span className="text-primary">Roadmap</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {service.process.map((step: any, i: number) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold shadow-md mb-6 relative">
                  {i + 1}
                  {i < 4 && <div className="hidden md:block absolute left-full w-full h-[2px] bg-primary/20 top-1/2" />}
                </div>
                <h3 className="font-bold text-[#1A1035] mb-2">{step.title}</h3>
                <p className="text-xs text-[#4B5563] font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ & ROI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold mb-8 text-[#1A1035]">Frequently Asked</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq: any, i: number) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-[#EDE9FE] rounded-2xl px-6">
                  <AccordionTrigger className="text-left font-bold text-[#1A1035] hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-[#4B5563] font-medium">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#1A1035] text-white p-10 rounded-3xl shadow-xl h-full flex flex-col justify-center">
              <TrendingUp className="text-primary mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Business ROI</h3>
              <p className="text-[#C4B5FD] font-medium leading-relaxed mb-8">
                {service.roi}
              </p>
              <div className="space-y-4">
                {service.tech.map((t: string) => (
                  <div key={t} className="inline-block px-4 py-2 bg-white/10 rounded-lg text-xs font-bold mr-2">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-[#1A1035] to-[#2D1B69] rounded-[3rem] p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to enter the flow?</h2>
          <p className="text-[#C4B5FD] text-lg mb-10 font-medium">Book your free 30-minute strategy call today.</p>
          <Link href="/contact" className="bg-white text-[#7B2FBE] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#F0EEFF] transition-all inline-flex items-center gap-2">
            Get Started <ArrowRight size={20} />
          </Link>
        </section>
      </div>
    </main>
  );
}
