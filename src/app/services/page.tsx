
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Zap, Palette, Shield, Database, Layout, ArrowRight, Users, Sparkles, Cpu } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const SERVICES = [
  {
    icon: <Code size={40} />,
    title: "Web Development",
    description: "We build high-performance, scalable web ecosystems that serve as the digital bedrock for your business growth.",
    slug: "web",
    tags: ["Next.js", "React", "TypeScript"],
    offers: [
      "Custom React Applications",
      "SEO-Optimized Scaling",
      "Headless CMS Implementation",
      "Enterprise-Grade Security"
    ]
  },
  {
    icon: <Zap size={40} />,
    title: "Google Automation",
    description: "Reclaim your team's most valuable asset—time—by automating the repetitive tasks that stall your innovation.",
    slug: "automation",
    tags: ["Apps Script", "Gemini AI", "Sheets"],
    offers: [
      "Custom Apps Script Solutions",
      "Gmail Workflow Engines",
      "Real-time Data Sync",
      "Automated AI Reporting"
    ]
  },
  {
    icon: <Palette size={40} />,
    title: "Graphic Designing",
    description: "We craft futuristic visual languages that command authority and build instant trust with your audience.",
    slug: "design",
    tags: ["Branding", "UI/UX", "3D Assets"],
    offers: [
      "Brand Identity Systems",
      "Conversion-Centric UI/UX",
      "Glossy 3D & Digital Assets",
      "Premium Design Strategy"
    ]
  }
];

export default function Services() {
  const techWoman = PlaceHolderImages.find(img => img.id === "tech-woman-pro");
  const techMan = PlaceHolderImages.find(img => img.id === "tech-man-dev");
  const teamCollab = PlaceHolderImages.find(img => img.id === "team-collab");

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our <span className="gradient-text">Expertise</span>
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized solutions designed to propel your business into the next era of digital excellence through precision engineering and elite design.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-premium p-10 rounded-4xl group hover:shadow-2xl transition-all h-full flex flex-col"
            >
              <div className="text-primary mb-8 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">What we offer</p>
                <ul className="space-y-3 mb-8">
                  {service.offers.map((offer) => (
                    <li key={offer} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {offer}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={`/services/${service.slug}`} className="btn-primary w-full flex justify-center items-center gap-2">
                Explore Details <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Human-Centric Tech Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-primary text-sm font-bold tracking-wide">
                <Users size={18} /> Human-Centric Innovation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Where Elite <span className="text-primary">Talent</span> Meets Future Tech
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Technology is only as powerful as the minds behind it. At Flowzonic, we pair cutting-edge automation with human intuition to create solutions that don't just work—they inspire.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass p-6 rounded-3xl">
                  <Sparkles className="text-primary mb-4" />
                  <h4 className="font-bold mb-2">Creative Vision</h4>
                  <p className="text-sm text-muted-foreground">Designers who see beyond the canvas to create immersive brand experiences.</p>
                </div>
                <div className="glass p-6 rounded-3xl">
                  <Cpu className="text-primary mb-4" />
                  <h4 className="font-bold mb-2">Technical Mastery</h4>
                  <p className="text-sm text-muted-foreground">Engineers who treat every script as a piece of high-precision architecture.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass p-4 rounded-4xl relative z-10">
                <Image 
                  src={techWoman?.imageUrl || ""} 
                  alt="Tech Strategy Expert" 
                  width={800} 
                  height={600} 
                  className="rounded-3xl object-cover"
                  data-ai-hint="woman technology"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl z-20 hidden md:block border-primary/20 bg-white/60 dark:bg-black/60">
                <p className="text-2xl font-bold text-primary">Strategy First</p>
                <p className="text-sm text-muted-foreground">Data-driven roadmaps for every project.</p>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/5 rounded-full blur-[100px] -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Collaborative Culture Section */}
        <section className="mb-32 bg-primary/5 rounded-[4rem] p-12 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="glass p-3 rounded-2xl">
                    <Image 
                      src={techMan?.imageUrl || ""} 
                      alt="Automation Engineer" 
                      width={400} 
                      height={400} 
                      className="rounded-xl object-cover"
                      data-ai-hint="man coding"
                    />
                  </div>
                  <div className="glass p-3 rounded-2xl h-40 flex items-center justify-center bg-primary text-white text-center">
                    <div>
                      <p className="text-3xl font-black">24/7</p>
                      <p className="text-xs font-bold uppercase tracking-widest">Innovation</p>
                    </div>
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="glass p-3 rounded-2xl h-40 flex items-center justify-center bg-white/80 dark:bg-black/40 text-center">
                    <div>
                      <Users className="mx-auto text-primary mb-2" />
                      <p className="text-sm font-bold">Client-First Approach</p>
                    </div>
                  </div>
                  <div className="glass p-3 rounded-2xl">
                    <Image 
                      src={teamCollab?.imageUrl || ""} 
                      alt="Team Collaboration" 
                      width={400} 
                      height={500} 
                      className="rounded-xl object-cover h-64"
                      data-ai-hint="team meeting"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-8"
            >
              <h2 className="text-4xl font-bold">A Seamless <span className="text-primary">Bridge</span> Between Concept & Reality</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't work in silos. Our developers and designers sit at the same table, ensuring that every piece of automation we build is beautiful, and every design we create is technically flawless.
              </p>
              <ul className="space-y-4">
                {[
                  "Continuous Feedback Loops",
                  "Cross-Functional Problem Solving",
                  "Iterative Agile Methodology",
                  "Direct Access to Leads"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <ArrowRight size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Meet the Team <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 glass-premium rounded-4xl p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Flowzonic Edge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Benefit icon={<Shield />} title="Precision Code" description="Enterprise-grade reliability in every script and line of code we ship." />
            <Benefit icon={<Database />} title="Scalable Architecture" description="Systems built to handle growth effortlessly, ensuring you never outgrow your tech." />
            <Benefit icon={<Layout />} title="Frictionless UX" description="User experiences that are intuitive, beautiful, and engineered for conversion." />
          </div>
        </section>
      </div>
    </main>
  );
}

function Benefit({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
