"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, Rocket, TrendingUp, CircleHelp
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ServiceDetailClient({ service }: { service: any }) {
  return (
    <main className="pt-32 pb-20">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              {service.headline}
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-medium">
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
            <div className="glass p-4 rounded-4xl">
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

        {/* Why Us Section */}
        <section className="mb-32">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Our <span className="text-primary">Approach</span> is Superior</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {service.whyUs.map((text: string, i: number) => (
              <div key={i} className="glass-premium p-8 rounded-3xl">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 font-bold">0{i+1}</div>
                <p className="text-muted-foreground leading-relaxed font-medium">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Roadmap */}
        <section className="mb-32 py-20 bg-primary/5 rounded-[4rem] px-8 md:px-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">The <span className="text-primary">Roadmap</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {service.process.map((step: any, i: number) => (
              <div key={i} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-white glass-premium rounded-full flex items-center justify-center text-primary font-black mb-6 z-10 shadow-lg border-primary/20">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[2px] bg-primary/10" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ROI Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="glass-premium p-10 rounded-4xl border-primary/20 bg-primary/5">
            <TrendingUp className="text-primary mb-6" size={40} />
            <h2 className="text-3xl font-bold mb-6">Quantifiable Results (The ROI)</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              {service.roi}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8">Modern Stack & Tools</h2>
            <div className="flex flex-wrap gap-4">
              {service.tech.map((t: string) => (
                <div key={t} className="px-6 py-3 glass rounded-full font-bold text-sm text-primary border-primary/10">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mb-32">
          <div className="text-center mb-16">
            <CircleHelp className="mx-auto text-primary mb-4" size={40} />
            <h2 className="text-3xl md:text-5xl font-bold">Frequently Asked <span className="text-primary">Questions</span></h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {service.faqs.map((faq: any, i: number) => (
              <AccordionItem key={i} value={`item-${i}`} className="glass-premium px-8 rounded-3xl border-none">
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Final CTA */}
        <div className="text-center py-20 bg-primary rounded-[3rem] p-12 text-white shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full" />
          <h2 className="text-3xl md:text-5xl font-black mb-8">Ready to Scale Your Flow?</h2>
          <Link href="/contact" className="bg-white text-primary hover:bg-secondary font-bold py-4 px-12 rounded-full text-lg transition-all inline-flex items-center gap-2 hover:scale-105 shadow-xl">
            Book Your Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </main>
  );
}
