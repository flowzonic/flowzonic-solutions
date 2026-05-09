"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, Rocket, TrendingUp, CircleHelp, Play
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
            <div className="inline-block p-4 glass-premium rounded-2xl mb-6">
              {service.icon}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-[#1A1035]">
              {service.headline}
            </h1>
            <p className="text-xl text-[#4B5563] mb-10 leading-relaxed font-medium">
              {service.subHeadline}
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Initiate Project <Rocket size={20} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="card-standard p-4 rounded-[2.5rem] bg-white/50 backdrop-blur-sm">
              <Image 
                src={service.image} 
                alt={service.title} 
                width={800} 
                height={600} 
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </section>

        {/* Portfolio Bento Grid (If available) */}
        {service.gallery && (
          <section className="mb-32">
            <div className="text-center mb-16">
              <span className="badge-pill">Creative Showcase</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1A1035]">Visual <span className="gradient-text">Mastery</span></h2>
              <p className="text-[#4B5563] mt-4 font-medium">A glimpse into the digital craftsmanship we deliver.</p>
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
                    "relative rounded-[2rem] overflow-hidden group border border-[#EDE9FE] shadow-sm hover:shadow-2xl transition-all duration-500",
                    item.span || "col-span-1 row-span-1"
                  )}
                >
                  {item.type === 'video' ? (
                    <div className="w-full h-full relative">
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                        <Play size={16} fill="currentColor" />
                      </div>
                    </div>
                  ) : (
                    <Image 
                      src={item.src} 
                      alt={item.alt} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1035]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-8">
                     <div>
                        <p className="text-white font-bold text-lg mb-1">{item.alt}</p>
                        <span className="text-white/60 text-xs uppercase tracking-widest font-bold">Featured Work</span>
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Why Us Section */}
        <section className="mb-32">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1A1035]">Why Our <span className="text-primary">Approach</span> is Superior</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {service.whyUs.map((text: string, i: number) => (
              <div key={i} className="card-standard p-10 bg-white/70 backdrop-blur-md">
                <div className="w-12 h-12 bg-[#F0EEFF] rounded-2xl flex items-center justify-center text-primary mb-8 font-black text-xl border border-[#EDE9FE]">0{i+1}</div>
                <p className="text-[#4B5563] leading-relaxed font-medium">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Roadmap */}
        <section className="mb-32 py-24 bg-[#F0EEFF] rounded-[4rem] px-8 md:px-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center text-[#1A1035] relative z-10">The <span className="text-primary">Roadmap</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
            {service.process.map((step: any, i: number) => (
              <div key={i} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white border-2 border-[#EDE9FE] rounded-full flex items-center justify-center text-primary font-black text-xl mb-8 z-10 shadow-xl">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#1A1035]">{step.title}</h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed font-medium">{step.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-[2px] bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ROI Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="card-standard p-12 bg-white/70 backdrop-blur-md border-[#EDE9FE]">
            <div className="w-16 h-16 bg-[#F0EEFF] rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm">
              <TrendingUp size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-[#1A1035]">Quantifiable Results (The ROI)</h2>
            <p className="text-lg text-[#4B5563] leading-relaxed font-medium">
              {service.roi}
            </p>
          </div>
          <div>
            <span className="badge-pill mb-4">Tech Arsenal</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A1035]">Modern Stack & Tools</h2>
            <div className="flex flex-wrap gap-4">
              {service.tech.map((t: string) => (
                <div key={t} className="px-6 py-3 bg-white border border-[#EDE9FE] rounded-full font-bold text-sm text-primary shadow-sm hover:shadow-md transition-all">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mb-32">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-[#F0EEFF] rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
              <CircleHelp size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1035]">Frequently Asked <span className="text-primary">Questions</span></h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {service.faqs.map((faq: any, i: number) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-[#EDE9FE] px-8 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-6 text-[#1A1035]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#4B5563] text-base leading-relaxed pb-6 font-medium">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Final CTA */}
        <div className="text-center py-20 bg-gradient-to-br from-[#1A1035] to-[#2D1B69] rounded-[4rem] p-12 text-white shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Scale Your Flow?</h2>
            <p className="text-[#C4B5FD] text-lg mb-10 max-w-2xl mx-auto font-medium">Let's transform your vision into a premium digital reality.</p>
            <Link href="/contact" className="bg-white text-primary hover:bg-[#F0EEFF] font-bold py-4 px-12 rounded-full text-lg transition-all inline-flex items-center gap-2 hover:scale-105 shadow-xl">
              Book Your Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
