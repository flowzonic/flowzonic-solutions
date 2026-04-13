
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Code, 
  Zap, 
  Palette, 
  CheckCircle2, 
  Search, 
  Cpu, 
  Rocket,
  ShieldCheck,
  TrendingUp,
  Clock
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-3d");
  const portfolioItems = PlaceHolderImages.filter(img => img.id.startsWith("mockup-"));

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 px-6 flex items-center">
        <div className="mesh-gradient-1 top-0 right-0 animate-pulse" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">Next-Gen Digital Solutions</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-8">
              <span className="gradient-text">Automate</span> Your Vision.<br />
              <span className="text-primary italic">Design</span> Your Growth.
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              We bridge the gap between complex automation and premium aesthetics. Flowzonic turns your business manual tasks into seamless digital flows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary flex items-center justify-center gap-2">
                Book a Strategy Call <ArrowRight size={20} />
              </Link>
              <Link href="/services" className="glass py-3 px-8 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/80 transition-all">
                View Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 animate-float">
              <Image 
                src={heroImage?.imageUrl || ""} 
                alt="Glossy 3D Abstract" 
                width={800}
                height={800}
                className="rounded-4xl drop-shadow-2xl"
                priority
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Efficiency Showcase (Before vs After) */}
      <section className="py-24 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Effortless <span className="text-primary">Workflow</span></h2>
          <p className="text-muted-foreground text-lg">See how Google Workspace Automation transforms your daily operations.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <EfficiencyCard 
            title="Manual Struggles" 
            type="before"
            items={[
              "Hours spent on data entry each week",
              "Fragmented spreadsheets & broken links",
              "Delayed client responses due to busy work",
              "Inconsistent document formatting"
            ]}
          />
          <EfficiencyCard 
            title="Flowzonic Efficiency" 
            type="after"
            items={[
              "Instant data synchronization across apps",
              "Custom Google Workspace integrations",
              "Automated client follow-up systems",
              "Professional document generation in seconds"
            ]}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 relative">
        <div className="mesh-gradient-1 bottom-0 left-0 opacity-30" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do <span className="text-primary">Best</span></h2>
              <p className="text-muted-foreground text-lg">From code to canvas, we build the foundations of your digital success.</p>
            </div>
            <Link href="/services" className="text-primary font-bold flex items-center gap-2 group">
              Explore All Services <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Code className="text-primary" size={32} />}
              title="Web Development"
              description="High-performance, scalable websites built with modern frameworks like React and NextJS."
              href="/services/web"
            />
            <ServiceCard 
              icon={<Zap className="text-primary" size={32} />}
              title="Google Automation"
              description="Custom Apps Script solutions that connect Sheets, Docs, and Gmail to save you hundreds of hours."
              href="/services/automation"
            />
            <ServiceCard 
              icon={<Palette className="text-primary" size={32} />}
              title="Graphic Design"
              description="Glossy, premium brand identities and UI/UX designs that command attention and drive conversion."
              href="/services/design"
            />
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our <span className="text-primary">Process</span></h2>
          <div className="space-y-12 relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full -translate-x-1/2 hidden md:block" />
            
            <ProcessItem 
              icon={<Search />} 
              step="01" 
              title="Discovery" 
              description="We dive deep into your business goals, bottlenecks, and audience to create a bespoke roadmap."
              align="left"
            />
            <ProcessItem 
              icon={<Cpu />} 
              step="02" 
              title="Scripting & Build" 
              description="Our experts develop the core automation engines and design layers tailored for your flow."
              align="right"
            />
            <ProcessItem 
              icon={<Rocket />} 
              step="03" 
              title="Launch & Scale" 
              description="We deploy your solution and provide ongoing support to ensure your growth never stalls."
              align="left"
            />
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto glass rounded-4xl p-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <StatItem value="500+" label="Hours Saved" icon={<Clock size={24} className="text-primary" />} />
          <StatItem value="100+" label="Custom Scripts" icon={<ShieldCheck size={24} className="text-primary" />} />
          <StatItem value="50+" label="Sites Launched" icon={<TrendingUp size={24} className="text-primary" />} />
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-primary">Work</span></h2>
          <p className="text-muted-foreground text-lg">Premium results for premium clients.</p>
        </div>
        
        <div className="px-6">
          <Carousel className="w-full max-w-7xl mx-auto">
            <CarouselContent className="-ml-4">
              {portfolioItems.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-2/3">
                  <div className="glass rounded-4xl overflow-hidden group">
                    <Image 
                      src={item.imageUrl} 
                      alt={item.description} 
                      width={1200}
                      height={800}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{item.description}</h3>
                      <Link href="/services" className="text-primary font-semibold flex items-center gap-2">
                        View Case Study <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-8">
              <CarouselPrevious className="relative translate-y-0 left-0" />
              <CarouselNext className="relative translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-primary rounded-4xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 blur-3xl translate-y-1/2 -translate-x-1/2 rounded-full" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Elevate Your Flow?</h2>
            <p className="text-primary-foreground/80 text-xl mb-12 max-w-2xl mx-auto">
              Join the elite businesses that have automated their vision with Flowzonic Solution.
            </p>
            <Link href="/contact" className="bg-white text-primary hover:bg-secondary font-bold py-5 px-12 rounded-full text-xl transition-all inline-flex items-center gap-3 hover:scale-105 shadow-xl">
              Get Started Now <Rocket size={24} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function EfficiencyCard({ title, items, type }: { title: string; items: string[]; type: 'before' | 'after' }) {
  return (
    <div className={cn(
      "p-10 rounded-3xl h-full transition-all duration-300 hover:shadow-2xl",
      type === 'before' ? "glass border-red-200/50" : "glass border-green-200/50"
    )}>
      <h3 className={cn("text-2xl font-bold mb-8", type === 'after' && "text-primary")}>{title}</h3>
      <ul className="space-y-6">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4 items-start">
            <div className={cn(
              "mt-1 p-1 rounded-full",
              type === 'before' ? "bg-red-100 text-red-500" : "bg-green-100 text-green-500"
            )}>
              <CheckCircle2 size={18} />
            </div>
            <span className="text-muted-foreground leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string }) {
  return (
    <div className="glass p-10 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/90 group">
      <div className="mb-8 p-4 bg-primary/5 rounded-2xl inline-block group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-8 leading-relaxed">{description}</p>
      <Link href={href} className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
        Learn More <ArrowRight size={18} />
      </Link>
    </div>
  );
}

function ProcessItem({ icon, step, title, description, align }: { icon: React.ReactNode; step: string; title: string; description: string; align: 'left' | 'right' }) {
  return (
    <div className={cn(
      "flex items-center gap-8 w-full",
      align === 'right' ? "md:flex-row-reverse" : ""
    )}>
      <div className="hidden md:flex flex-1" />
      <div className="relative z-10 w-12 h-12 glass rounded-full flex items-center justify-center text-primary border-primary/20 shrink-0">
        {icon}
      </div>
      <div className="flex-1 glass p-8 rounded-3xl text-left">
        <span className="text-primary font-bold text-sm mb-2 block tracking-widest uppercase">Step {step}</span>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function StatItem({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center group">
      <div className="mb-4 transition-transform group-hover:scale-125 duration-500">
        {icon}
      </div>
      <span className="text-5xl font-extrabold mb-2 gradient-text">{value}</span>
      <span className="text-muted-foreground font-medium uppercase tracking-widest text-sm">{label}</span>
    </div>
  );
}
