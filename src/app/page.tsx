"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Code, 
  Zap, 
  Palette, 
  Globe, 
  Layers, 
  Terminal, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  TrendingUp, 
  Clock, 
  Search, 
  Sparkles, 
  Star, 
  Rocket 
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
  const techStack = [
    { name: "Next.js", icon: <Globe size={20} /> },
    { name: "React", icon: <Layers size={20} /> },
    { name: "Tailwind", icon: <Palette size={20} /> },
    { name: "TypeScript", icon: <Code size={20} /> },
    { name: "Apps Script", icon: <Terminal size={20} /> },
    { name: "Firebase", icon: <Database size={20} /> },
    { name: "Cloud Ops", icon: <Cpu size={20} /> },
    { name: "UI/UX", icon: <Layers size={20} /> },
  ];

  return (
    <main className="overflow-hidden">
      {/* Section 1: Hero Area - Tuned for laptop viewports */}
      <section className="relative pt-12 pb-8 md:pt-20 md:pb-12 px-6 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-20 -mt-10 lg:-mt-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-[#1A1035]">
              We Build Digital <br className="hidden xl:block" />
              Experiences That <br className="hidden xl:block" />
              <span className="gradient-text">Drive Results</span>
            </h1>
            <p className="text-lg text-[#4B5563] mb-8 max-w-lg leading-relaxed font-medium">
              Web development, Google automation, and graphic design for brands that refuse to be ordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] hover:opacity-90 hover:shadow-lg hover:shadow-purple-200 transition-all duration-200 flex items-center justify-center text-base">
                Start Your Project
              </Link>
              <Link href="/services" className="px-8 py-3.5 rounded-full font-bold text-[#7B2FBE] border-2 border-[#7B2FBE] bg-transparent hover:bg-[#F0EEFF] transition-all duration-200 flex items-center justify-center text-base">
                View Our Work
              </Link>
            </div>
          </motion.div>

          {/* Refined Mockup Visual - Compact for Laptops */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[280px] md:h-[350px] lg:h-[400px] flex items-center justify-center -mt-8 lg:-mt-12"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-purple-100/40 rounded-full blur-[100px] -z-10" />
            
            {/* Main Browser Window Mockup - Scaled down */}
            <div className="relative z-10 w-[90%] lg:w-[95%] aspect-[16/10] lg:aspect-[4/3] bg-white rounded-3xl shadow-2xl border border-[#EDE9FE] overflow-hidden p-4 md:p-5 animate-float">
              <div className="flex gap-1.5 mb-4 px-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <div className="space-y-4">
                <div className="h-6 w-3/4 bg-gray-50 rounded-lg flex items-center px-3">
                  <div className="w-20 h-2 bg-purple-200 rounded-full" />
                </div>
                <div className="space-y-2">
                  <div className="h-3.5 w-full bg-gray-50 rounded-lg" />
                  <div className="h-3.5 w-full bg-gray-50 rounded-lg" />
                  <div className="h-3.5 w-2/3 bg-gray-50 rounded-lg" />
                </div>
                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="h-20 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100/50 p-3">
                    <div className="w-6 h-6 rounded-lg bg-purple-100 mb-2" />
                    <div className="w-full h-1.5 bg-purple-100 rounded-full mb-1" />
                    <div className="w-2/3 h-1.5 bg-purple-100 rounded-full" />
                  </div>
                  <div className="h-20 rounded-2xl bg-gray-50/50 border border-gray-100 p-3">
                    <div className="w-6 h-6 rounded-lg bg-gray-100 mb-2" />
                    <div className="w-full h-1.5 bg-gray-100 rounded-full mb-1" />
                    <div className="w-2/3 h-1.5 bg-gray-100 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card: Clean Code */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 -left-2 md:-left-6 z-20 bg-white/95 backdrop-blur-md border border-[#EDE9FE] p-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 min-w-[140px] md:min-w-[160px]"
            >
              <div className="w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center text-[#7B2FBE]">
                <Code size={16} />
              </div>
              <div>
                <p className="font-bold text-[#1A1035] text-[11px] md:text-xs">Clean Code</p>
                <p className="text-[9px] md:text-[10px] text-[#9CA3AF]">Next.js & React</p>
              </div>
            </motion.div>

            {/* Floating Card: Automated Workflows */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -left-6 md:-left-10 z-20 bg-white/95 backdrop-blur-md border border-[#EDE9FE] p-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 min-w-[160px] md:min-w-[180px]"
            >
              <div className="w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center text-[#7B2FBE]">
                <Zap size={16} />
              </div>
              <div>
                <p className="font-bold text-[#1A1035] text-[11px] md:text-xs">Automated Workflows</p>
                <p className="text-[9px] md:text-[10px] text-[#9CA3AF]">Reclaiming Hours</p>
              </div>
            </motion.div>

            {/* Floating Card: Stunning Design */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-2 -right-2 md:-right-6 z-20 bg-white/95 backdrop-blur-md border border-[#EDE9FE] p-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 min-w-[140px] md:min-w-[160px]"
            >
              <div className="w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center text-[#7B2FBE]">
                <Sparkles size={16} />
              </div>
              <div>
                <p className="font-bold text-[#1A1035] text-[11px] md:text-xs">Stunning Design</p>
                <p className="text-[9px] md:text-[10px] text-[#9CA3AF]">Figma to Web</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Client Logos */}
      <section className="py-10 bg-white border-y border-[#EDE9FE]">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee items-center gap-16 md:gap-24">
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-default">
                <div className="p-3 bg-[#F0EEFF] rounded-xl text-[#7B2FBE] group-hover:bg-[#7B2FBE] group-hover:text-white transition-all duration-500">
                  {tech.icon}
                </div>
                <span className="text-xl font-bold text-[#9CA3AF] group-hover:text-[#1A1035] transition-colors duration-500">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Services Overview */}
      <section className="py-20 px-6 bg-[#F0EEFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-pill">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1A1035]">What We Do <span className="gradient-text">Best</span></h2>
            <p className="text-[#4B5563] text-lg max-w-2xl mx-auto font-medium">Precision engineering meets high-end creative design.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Code size={28} />}
              title="Web Development"
              description="High-performance, scalable websites built with modern frameworks like React and NextJS."
              href="/services/web"
            />
            <ServiceCard 
              icon={<Zap size={28} />}
              title="Google Automation"
              description="Custom Apps Script solutions that connect Sheets, Docs, and Gmail to save you hundreds of hours."
              href="/services/automation"
            />
            <ServiceCard 
              icon={<Palette size={28} />}
              title="Graphic Design"
              description="Glossy, premium brand identities and UI/UX designs that command attention."
              href="/services/design"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Why Us/Stats */}
      <section className="py-20 px-6 bg-[#1A1035] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#A855F7] uppercase tracking-widest text-xs font-semibold mb-4 block">The Infrastructure</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">The Neural Network of <span className="text-[#A855F7]">Flow</span></h2>
            <p className="text-[#C4B5FD] text-lg max-w-2xl mx-auto font-medium">Our systems are designed to think, adapt, and scale alongside your business objectives.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <DarkFeatureCard 
              icon={<Globe size={24} />} 
              title="Global Grid" 
              desc="Edge-computing nodes ensure zero latency for your automated scripts." 
            />
            <DarkFeatureCard 
              icon={<ShieldCheck size={24} />} 
              title="Secure Flow" 
              desc="Enterprise-grade encryption for every byte of data moving through your system." 
            />
            <DarkFeatureCard 
              icon={<Activity size={24} />} 
              title="Live Pulse" 
              desc="Real-time monitoring and self-healing automation routines." 
            />
            <DarkFeatureCard 
              icon={<Cpu size={24} />} 
              title="Scalable Design" 
              desc="Built with performance and future-proof scaling at the core." 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-[#2D1B69] pt-20">
            <StatItem value="500+" label="Hours Saved" icon={<Clock size={24} className="text-[#A855F7]" />} />
            <StatItem value="100+" label="Custom Scripts" icon={<Terminal size={24} className="text-[#A855F7]" />} />
            <StatItem value="50+" label="Sites Launched" icon={<TrendingUp size={24} className="text-[#A855F7]" />} />
          </div>
        </div>
      </section>

      {/* Section 5: Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-pill">Step-by-Step</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1A1035]">Our <span className="gradient-text">Process</span></h2>
            <p className="text-[#4B5563] text-lg font-medium">How we take you from concept to a high-performing digital ecosystem.</p>
          </div>
          
          <div className="space-y-12 relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#F0EEFF] rounded-full -translate-x-1/2 hidden md:block" />
            
            <ProcessItem 
              icon={<Search />} 
              step="01" 
              title="Discovery" 
              description="We dive deep into your business goals, user personas, and competitor landscape to create a bespoke roadmap."
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

      {/* Section 6: Portfolio */}
      <section className="py-20 px-6 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto">
          <Carousel className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl text-left">
                <span className="badge-pill">Showcase</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1A1035]">Featured <span className="gradient-text">Projects</span></h2>
                <p className="text-[#4B5563] text-lg font-medium">A collection of premium digital experiences and automated ecosystems.</p>
              </div>
              <div className="flex gap-3">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-xl border border-[#EDE9FE] bg-white text-[#7B2FBE] hover:bg-[#F0EEFF] transition-all" />
                <CarouselNext className="static translate-y-0 h-12 w-12 rounded-xl border border-[#EDE9FE] bg-white text-[#7B2FBE] hover:bg-[#F0EEFF] transition-all" />
              </div>
            </div>
            
            <CarouselContent className="-ml-6">
              {[1, 2, 3].map((_, index) => (
                <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="card-standard h-full flex flex-col p-0 overflow-hidden">
                    <div className="relative aspect-[16/10]">
                      <Image 
                        src={`https://picsum.photos/seed/project-${index}/800/500`} 
                        alt="Project Mockup" 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="badge-category mb-4 w-fit">Case Study</span>
                      <h3 className="text-xl font-semibold mb-4 text-[#1A1035]">Enterprise Dashboard Transformation</h3>
                      <Link href="/services" className="mt-auto text-[#7B2FBE] font-bold flex items-center gap-2 hover:text-[#A855F7] transition-colors">
                        View Details <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Section 7: Testimonials */}
      <section className="py-20 px-6 bg-[#F0EEFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-pill">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1A1035]">Trusted by <span className="gradient-text">Visionaries</span></h2>
            <p className="text-[#4B5563] text-lg font-medium">Real impact on businesses like yours.</p>
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

      {/* Section 8: Blog Preview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="badge-pill">Insights</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-[#1A1035]">Latest <span className="gradient-text">Insights</span></h2>
          <p className="text-[#4B5563] text-lg mb-12 font-medium">Expert advice on automation, design, and growth.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <BlogPreviewCard 
              title="The Future of Google Apps Script in 2024"
              excerpt="How AI and new features are revolutionizing workspace automation."
              date="March 15, 2024"
              image="https://picsum.photos/seed/blog1/600/400"
            />
            <BlogPreviewCard 
              title="Minimalist Design for High-Trust Brands"
              excerpt="Why high-end brands are moving towards cleaner, glossy aesthetics."
              date="March 10, 2024"
              image="https://picsum.photos/seed/blog2/600/400"
            />
          </div>
          <Link href="/blog" className="px-6 py-3 rounded-full font-medium text-[#7B2FBE] border-2 border-[#7B2FBE] bg-transparent hover:bg-[#F0EEFF] transition-all duration-200 mt-12 inline-block">
            View All Articles
          </Link>
        </div>
      </section>

      {/* Section 9: CTA Banner */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#1A1035] to-[#2D1B69] rounded-4xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Elevate Your Flow?</h2>
            <p className="text-[#C4B5FD] text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
              Join the elite businesses that have automated their vision with Flowzonic Solutions.
            </p>
            <Link href="/contact" className="px-8 py-4 rounded-full font-bold text-[#7B2FBE] bg-white hover:bg-[#F0EEFF] transition-all duration-200 text-lg flex items-center justify-center gap-3 w-fit mx-auto">
              Get Started Now <Rocket size={24} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string }) {
  return (
    <div className="card-standard group">
      <div className="w-12 h-12 rounded-xl bg-[#F0EEFF] flex items-center justify-center mb-6 text-[#7B2FBE] group-hover:bg-[#7B2FBE] group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-[#1A1035]">{title}</h3>
      <p className="text-[#4B5563] mb-8 leading-relaxed font-medium">{description}</p>
      <Link href={href} className="text-[#7B2FBE] font-bold flex items-center gap-2 hover:gap-3 transition-all">
        Learn More <ArrowRight size={18} />
      </Link>
    </div>
  );
}

function DarkFeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
      <div className="mb-6 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#A855F7]">{icon}</div>
      <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
      <p className="text-sm text-[#C4B5FD] leading-relaxed">{desc}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role, avatar }: { quote: string; author: string; role: string; avatar: string }) {
  return (
    <div className="card-standard flex flex-col">
      <div className="flex gap-1 mb-6 text-[#7B2FBE]">
        {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
      </div>
      <p className="text-lg font-medium italic mb-10 leading-relaxed text-[#4B5563] flex-1">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#EDE9FE]">
          <Image src={avatar} alt={author} width={48} height={48} className="object-cover" />
        </div>
        <div>
          <p className="font-bold text-[#1A1035] text-sm">{author}</p>
          <p className="text-xs text-[#9CA3AF]">{role}</p>
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
      <div className="relative z-10 w-12 h-12 bg-[#F0EEFF] text-[#7B2FBE] border border-[#DDD6FE] rounded-full flex items-center justify-center shrink-0 shadow-lg">
        {icon}
      </div>
      <div className="flex-1 card-standard text-left">
        <span className="text-[#7B2FBE] font-bold text-[10px] mb-2 block tracking-[0.2em] uppercase">Step {step}</span>
        <h3 className="text-2xl font-bold mb-3 text-[#1A1035]">{title}</h3>
        <p className="text-[#4B5563] leading-relaxed font-medium">{description}</p>
      </div>
    </div>
  );
}

function StatItem({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 p-4 bg-white/5 rounded-2xl">
        {icon}
      </div>
      <span className="text-5xl font-bold mb-2 text-white">{value}</span>
      <span className="text-[#C4B5FD] font-bold uppercase tracking-[0.2em] text-[10px]">{label}</span>
    </div>
  );
}

function BlogPreviewCard({ title, excerpt, date, image }: any) {
  return (
    <div className="card-standard p-0 overflow-hidden flex flex-col sm:flex-row">
      <div className="relative w-full sm:w-48 h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <span className="text-xs text-[#9CA3AF] mb-2">{date}</span>
        <h3 className="text-xl font-bold text-[#1A1035] mb-4">{title}</h3>
        <p className="text-sm text-[#4B5563] mb-4 line-clamp-2">{excerpt}</p>
        <Link href="/blog" className="mt-auto text-[#7B2FBE] font-bold text-sm hover:underline">
          Read More
        </Link>
      </div>
    </div>
  );
}
