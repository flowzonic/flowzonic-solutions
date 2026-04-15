
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Zap, Palette, Shield, Database, Layout, ArrowRight } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
