
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
  Cpu, 
  Rocket,
  ShieldCheck,
  TrendingUp,
  Clock,
  Layers,
  Globe,
  Database,
  Terminal,
  Cpu as Chip,
  Search,
  MessageSquare,
  Network,
  Activity,
  Award,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";
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
  const techEnvImage = PlaceHolderImages.find(img => img.id === "tech-env");
  const portfolioItems = PlaceHolderImages.filter(img => img.id.startsWith("mockup-"));

  const techStack = [
    { name: "Next.js", icon: <Globe size={20} /> },
    { name: "React", icon: <Layers size={20} /> },
    { name: "Tailwind", icon: <Palette size={20} /> },
    { name: "TypeScript", icon: <Code size={20} /> },
    { name: "Genkit AI", icon: <Chip size={20} /> },
    { name: "Apps Script", icon: <Terminal size={20} /> },
    { name: "Firebase", icon: <Database size={20} /> },
    { name: "Cloud Ops", icon: <Cpu size={20} /> },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-[75vh] pt-24 lg:pt-32 pb-12 px-6 flex items-center">
        <div className="mesh-gradient-1 top-0 right-0 animate-pulse opacity-40" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
              <span className="gradient-text">Automate</span> Your Vision.<br />
              <span className="text-primary/90 italic font-serif">Design</span> Your Growth.
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              We bridge the gap between complex automation and premium aesthetics. Flowzonic transforms manual bottlenecks into seamless digital workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/services" className="btn-primary flex items-center justify-center gap-2 shadow-xl hover:shadow-primary/20">
                Explore Services <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className="glass py-3.5 px-8 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/80 dark:hover:bg-white/10 transition-all border border-primary/10">
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, base: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative z-10 animate-float w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[380px] xl:max-w-[480px]">
              <Image 
                src={heroImage?.imageUrl || ""} 
                alt="Glossy 3D Abstract" 
                width={800}
                height={800}
                className="rounded-[3rem] drop-shadow-[0_20px_50px_rgba(157,78,221,0.2)] w-full h-auto"
                priority
                data-ai-hint="abstract 3d purple"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[120px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Efficiency Showcase */}
      <section className="py-20 px-6 relative overflow-hidden bg-white/30 dark:bg-black/10">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Effortless <span className="text-primary">Workflow</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">See how custom automation transforms your daily operations from chaos to clarity.</p>
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
              "Professional document generation"
            ]}
          />
        </div>
      </section>

      {/* Infrastructure Section - The "Neural Network" */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">The Infrastructure</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The <span className="gradient-text">Neural Network</span> of Flow</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Our systems are designed to think, adapt, and scale alongside your business objectives.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Network size={24} />} 
              title="Global Grid" 
              desc="Edge-computing nodes ensure zero latency for your automated scripts." 
            />
            <FeatureCard 
              icon={<ShieldCheck size={24} />} 
              title="Secure Flow" 
              desc="Enterprise-grade encryption for every byte of data moving through your system." 
            />
            <FeatureCard 
              icon={<Activity size={24} />} 
              title="Live Pulse" 
              desc="Real-time monitoring and self-healing automation routines." 
            />
            <FeatureCard 
              icon={<Chip size={24} />} 
              title="AI Native" 
              desc="Deep integration with Gemini AI for predictive decision making." 
            />
          </div>
        </div>
      </section>

      {/* Inside the Flow - Agency Tech Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="glass p-4 rounded-[3rem] relative overflow-hidden group max-w-xl">
                <Image 
                  src={techEnvImage?.imageUrl || ""} 
                  alt="Agency Environment" 
                  width={800} 
                  height={600} 
                  className="rounded-[2.5rem] transition-transform duration-700 group-hover:scale-105 w-full h-auto"
                  data-ai-hint="modern office"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute -top-6 -left-6 glass p-6 rounded-3xl hidden md:block animate-bounce shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary rounded-xl text-white"><Zap size={24} /></div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground">AGENCY STATUS</p>
                    <p className="font-black">ALWAYS FLOWING</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Environment</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Built on a <span className="text-primary">Tech-First</span> Foundation</h2>
              <h3 className="text-xl font-bold mb-6 text-foreground/80">Innovation isn&apos;t just what we sell—it&apos;s how we operate.</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We aren't just an agency; we're a tech laboratory. Our workspace is built on the same automation principles we deliver to our clients. From AI-driven project management to custom internal neural networks, we live and breathe efficient code.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-primary/5 rounded-lg text-primary"><Database size={20} /></div>
                  <div>
                    <h4 className="font-bold mb-1">Data-Centric</h4>
                    <p className="text-sm text-muted-foreground">Every design decision is backed by real-time user flow data.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-primary/5 rounded-lg text-primary"><ShieldCheck size={20} /></div>
                  <div>
                    <h4 className="font-bold mb-1">Cloud Native</h4>
                    <p className="text-sm text-muted-foreground">Distributed global systems ensuring 99.9% uptime for all scripts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Social Proof */}
      <section className="py-24 px-6 bg-primary/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Trusted by <span className="text-primary">Visionaries</span></h2>
            <p className="text-muted-foreground text-lg">Don't just take our word for it—see the impact on businesses like yours.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Flowzonic didn't just build a site; they engineered a growth machine. Our conversion rate tripled in 90 days." 
              author="Elena Vance" 
              role="CEO, Lumina Tech" 
              avatar="https://picsum.photos/seed/face1/100/100"
            />
            <TestimonialCard 
              quote="The Google Workspace automation saved our operations team 15 hours a week. It's like having 3 extra employees." 
              author="Marcus Thorne" 
              role="COO, Global Logistics" 
              avatar="https://picsum.photos/seed/face2/100/100"
            />
            <TestimonialCard 
              quote="Their design philosophy is light years ahead. Our brand now commands the premium attention it deserves." 
              author="Sofia Rossi" 
              role="Founder, Aura Design" 
              avatar="https://picsum.photos/seed/face3/100/100"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 relative">
        <div className="mesh-gradient-1 bottom-0 left-0 opacity-10" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">What We Do <span className="text-primary">Best</span></h2>
              <p className="text-muted-foreground text-lg">Precision engineering meets high-end creative design.</p>
            </div>
            <Link href="/services" className="text-primary font-bold flex items-center gap-2 group hover:gap-3 transition-all">
              Explore All Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Code className="text-primary" size={28} />}
              title="Web Development"
              description="High-performance, scalable websites built with modern frameworks like React and NextJS."
              href="/services/web"
            />
            <ServiceCard 
              icon={<Zap className="text-primary" size={28} />}
              title="Google Automation"
              description="Custom Apps Script solutions that connect Sheets, Docs, and Gmail to save you hundreds of hours."
              href="/services/automation"
            />
            <ServiceCard 
              icon={<Palette className="text-primary" size={28} />}
              title="Graphic Design"
              description="Glossy, premium brand identities and UI/UX designs that command attention."
              href="/services/design"
            />
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">A <span className="text-primary">Global</span> Ecosystem</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              We operate as a decentralized agency, serving clients from Silicon Valley to Singapore. Our infrastructure ensures that your automation never sleeps, operating at the speed of global business 24/7.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary"><Globe size={20} /></div>
                <div>
                  <h4 className="font-bold">Distributed Talent</h4>
                  <p className="text-sm text-muted-foreground">Expert developers across 4 continents.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary"><Award size={20} /></div>
                <div>
                  <h4 className="font-bold">Global Standards</h4>
                  <p className="text-sm text-muted-foreground">Adhering to international data and design benchmarks.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="glass aspect-video rounded-[3rem] overflow-hidden p-2">
              <Image 
                src="https://picsum.photos/seed/world-map/1200/800" 
                alt="Global Network" 
                width={1200} 
                height={800} 
                className="w-full h-full object-cover rounded-[2.5rem] opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                data-ai-hint="world map"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">Our <span className="text-primary">Process</span></h2>
          <div className="space-y-12 relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-accent/50 to-transparent rounded-full -translate-x-1/2 hidden md:block" />
            
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
        <div className="max-w-7xl mx-auto glass-premium rounded-[3rem] p-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <StatItem value="500+" label="Hours Saved" icon={<Clock size={24} className="text-primary" />} />
          <StatItem value="100+" label="Custom Scripts" icon={<ShieldCheck size={24} className="text-primary" />} />
          <StatItem value="50+" label="Sites Launched" icon={<TrendingUp size={24} className="text-primary" />} />
        </div>
      </section>

      {/* Tech Stack Marquee (3rd Last) */}
      <section className="py-20 px-6 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="glass-premium rounded-[3rem] p-10 md:p-14 overflow-hidden border border-primary/10 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full" />
            
            <div className="flex whitespace-nowrap animate-marquee items-center gap-16 md:gap-24">
              {[...techStack, ...techStack].map((tech, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className="p-3 bg-white/40 dark:bg-white/5 glass rounded-2xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-purple-glow">
                    {tech.icon}
                  </div>
                  <span className="text-xl md:text-2xl font-black text-muted-foreground/40 group-hover:text-primary transition-colors duration-500 tracking-tight">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase (2nd Last) */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <Carousel className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Featured <span className="text-primary">Projects</span></h2>
                <p className="text-muted-foreground text-lg">A showcase of premium digital experiences and automated ecosystems.</p>
              </div>
              <div className="flex gap-3">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-2xl glass hover:bg-primary hover:text-white transition-all border-none shadow-lg" />
                <CarouselNext className="static translate-y-0 h-12 w-12 rounded-2xl glass hover:bg-primary hover:text-white transition-all border-none shadow-lg" />
              </div>
            </div>
            
            <CarouselContent className="-ml-6">
              {portfolioItems.map((item, index) => (
                <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="glass-premium rounded-[2.5rem] overflow-hidden group border border-primary/5 h-full flex flex-col"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image 
                        src={item.imageUrl} 
                        alt={item.description} 
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        data-ai-hint={item.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                        <span className="text-white font-bold text-sm tracking-widest uppercase">Case Study</span>
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{item.description}</h3>
                      <div className="mt-auto pt-4 flex items-center justify-between">
                        <Link href="/services" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                          View Details <ArrowRight size={18} />
                        </Link>
                        <div className="flex -space-x-2">
                          {[1, 2].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-background glass overflow-hidden">
                              <Image 
                                src={`https://picsum.photos/seed/tech-${i}/100/100`} 
                                alt="tech stack" 
                                width={32} 
                                height={32} 
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Final CTA (Last) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 blur-[100px] translate-y-1/2 -translate-x-1/2 rounded-full" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Ready to Elevate Your Flow?</h2>
            <p className="text-primary-foreground/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
              Join the elite businesses that have automated their vision with Flowzonic Solution.
            </p>
            <Link href="/contact" className="bg-white text-primary hover:bg-secondary font-bold py-5 px-12 rounded-full text-lg md:text-xl transition-all inline-flex items-center gap-3 hover:scale-105 shadow-2xl">
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
      "p-10 rounded-[2rem] h-full transition-all duration-500",
      type === 'before' ? "glass border-red-500/10 hover:border-red-500/20" : "glass border-green-500/10 hover:border-green-500/20 shadow-[0_20px_40px_rgba(34,197,94,0.05)]"
    )}>
      <h3 className={cn("text-2xl font-bold mb-8 tracking-tight", type === 'after' && "text-primary")}>{title}</h3>
      <ul className="space-y-6">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4 items-start group">
            <div className={cn(
              "mt-1 p-1.5 rounded-full transition-colors",
              type === 'before' ? "bg-red-100 text-red-500 dark:bg-red-500/20" : "bg-green-100 text-green-500 dark:bg-green-500/20"
            )}>
              <CheckCircle2 size={16} />
            </div>
            <span className="text-muted-foreground font-medium leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string }) {
  return (
    <div className="glass p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 group hover:shadow-2xl hover:border-primary/20">
      <div className="mb-8 w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground mb-8 leading-relaxed font-medium">{description}</p>
      <Link href={href} className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
        Learn More <ArrowRight size={18} />
      </Link>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="glass p-8 rounded-[2.5rem] group hover:bg-white/80 dark:hover:bg-white/10 transition-all border border-primary/5 hover:border-primary/20">
      <div className="mb-6 w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">{icon}</div>
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role, avatar }: { quote: string; author: string; role: string; avatar: string }) {
  return (
    <div className="glass-premium p-10 rounded-[3rem] border border-primary/10 relative">
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
        <MessageSquare size={20} />
      </div>
      <div className="flex gap-1 mb-6 text-primary">
        {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
      </div>
      <p className="text-lg font-medium italic mb-10 leading-relaxed text-foreground/80">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
          <Image src={avatar} alt={author} width={48} height={48} className="object-cover" />
        </div>
        <div>
          <p className="font-bold text-sm">{author}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}

function ProcessItem({ icon, step, title, description, align }: { icon: React.ReactNode; step: string; title: string; description: string; align: 'left' | 'right' }) {
  return (
    <div className={cn(
      "flex items-center gap-8 w-full",
      align === 'right' ? "md:flex-row-reverse text-right" : ""
    )}>
      <div className="hidden md:flex flex-1" />
      <div className="relative z-10 w-12 h-12 glass rounded-full flex items-center justify-center text-primary border-primary/20 shrink-0 shadow-lg">
        {icon}
      </div>
      <div className="flex-1 glass p-8 rounded-[2rem] text-left">
        <span className="text-primary font-bold text-[10px] mb-2 block tracking-[0.2em] uppercase">Step {step}</span>
        <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
        <p className="text-muted-foreground leading-relaxed font-medium">{description}</p>
      </div>
    </div>
  );
}

function StatItem({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center group">
      <div className="mb-6 p-4 bg-primary/5 rounded-2xl transition-all group-hover:bg-primary group-hover:text-white group-hover:rotate-6">
        {icon}
      </div>
      <span className="text-5xl font-extrabold mb-2 tracking-tight gradient-text">{value}</span>
      <span className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-[10px]">{label}</span>
    </div>
  );
}
