"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Rocket, TrendingUp, Zap, Sparkles, Phone, MessageCircle, ArrowUp,
  Linkedin, Facebook, Instagram, Twitter, Youtube
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function ServiceDetailClient({ service }: { service: any }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (service.isPortfolioStyle) {
    return (
      <>
        {/* Social Sidebar */}
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1">
          <SocialSidebarItem icon={<Linkedin size={16} />} color="bg-[#0077B5]" href="#" />
          <SocialSidebarItem icon={<Facebook size={16} />} color="bg-[#1877F2]" href="#" />
          <SocialSidebarItem icon={<Instagram size={16} />} color="bg-gradient-to-tr from-[#F58529] via-[#D62976] to-[#962FBF]" href="#" />
          <SocialSidebarItem icon={<Twitter size={16} />} color="bg-[#1DA1F2]" href="#" />
          <SocialSidebarItem icon={<Youtube size={16} />} color="bg-[#FF0000]" href="#" />
          <SocialSidebarItem icon={<span className="font-bold text-[10px]">P</span>} color="bg-[#BD081C]" href="#" />
        </div>

        {/* WhatsApp Button */}
        <div className="fixed right-6 top-24 z-50">
          <a href="https://wa.me/918881907942" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
            <MessageCircle size={24} fill="currentColor" />
          </a>
        </div>

        {/* Floating Controls */}
        <div className="fixed bottom-8 right-6 z-50 flex flex-col gap-4 items-end">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <a href="tel:+918881907942" className="relative flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-2xl">
              <Phone size={20} className="text-[#FF7D29]" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase text-[#1A1035] leading-none mb-1">Call Now</span>
                <span className="text-sm font-bold text-[#0066FF] leading-none">(+91) 8881907942</span>
              </div>
            </a>
          </motion.div>

          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-10 h-10 bg-white border border-[#EDE9FE] rounded-full flex items-center justify-center text-[#7B2FBE] shadow-lg hover:bg-[#F0EEFF] transition-all"
              >
                <ArrowUp size={20} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <main className="bg-white">
          {/* Hero Section */}
          <section className="bg-[#1A1035] text-white pt-40 pb-20 px-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>
            <div className="max-w-5xl mx-auto relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                {service.headline}
              </h1>
              <div className="flex items-center justify-center gap-2 text-sm font-medium text-[#C4B5FD] mb-8">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>&gt;</span>
                <span className="text-white">{service.headline}</span>
              </div>
              <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
                {service.subHeadline}
              </p>
            </div>
          </section>

          {/* Portfolio Tabs */}
          <section className="py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <Tabs defaultValue={service.categories[0].id} className="w-full">
                <TabsList className="w-full flex flex-wrap h-auto bg-transparent border rounded-none p-0 overflow-hidden mb-12">
                  {service.categories.map((cat: any) => (
                    <TabsTrigger 
                      key={cat.id} 
                      value={cat.id}
                      className="flex-1 min-w-[150px] py-4 rounded-none border-r last:border-r-0 data-[state=active]:bg-[#1A1035] data-[state=active]:text-white text-[#1A1035] font-bold text-sm"
                    >
                      {cat.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {service.categories.map((cat: any) => (
                  <TabsContent key={cat.id} value={cat.id}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {cat.items.map((item: any, i: number) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="bg-white border rounded-2xl overflow-hidden shadow-sm group cursor-pointer"
                        >
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <Image 
                              src={item.src} 
                              alt={item.alt} 
                              fill 
                              className="object-cover transition-transform duration-500 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-white font-bold text-sm border-2 border-white px-4 py-2 rounded-full">View Details</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* Features / Why Us */}
          <section className="py-20 bg-[#F0EEFF]">
            <div className="max-w-7xl mx-auto px-6">
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
            </div>
          </section>

          {/* Process */}
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto bg-[#1A1035] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2"></div>
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Our Creative <span className="text-primary">Roadmap</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {service.process.map((step: any, i: number) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white font-bold mb-6 relative border border-white/20">
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-xs text-white/60 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ & ROI */}
          <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
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
          </section>
        </main>
      </>
    );
  }

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

function SocialSidebarItem({ icon, color, href }: { icon: React.ReactNode; color: string; href: string }) {
  return (
    <a 
      href={href} 
      className={cn(
        "w-8 h-8 flex items-center justify-center text-white transition-all hover:w-10 hover:pr-2 rounded-r-md",
        color
      )}
    >
      {icon}
    </a>
  );
}
