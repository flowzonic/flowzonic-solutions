
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Zap, Palette, ArrowRight, Shield, Database, Layout } from "lucide-react";

const SERVICES = [
  {
    icon: <Code size={40} />,
    title: "Web Development",
    description: "Modern, fast, and SEO-optimized web applications.",
    slug: "web",
    tags: ["React", "Next.js", "Tailwind"]
  },
  {
    icon: <Zap size={40} />,
    title: "Google Automation",
    description: "Apps Script solutions to streamline your workspace.",
    slug: "automation",
    tags: ["Apps Script", "Sheets", "APIs"]
  },
  {
    icon: <Palette size={40} />,
    title: "Graphic Design",
    description: "Visual identities that resonate with your audience.",
    slug: "design",
    tags: ["Branding", "UI/UX", "Social Media"]
  }
];

export default function Services() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our <span className="gradient-text">Expertise</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized solutions designed to propel your business into the next era of digital excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-4xl group hover:shadow-2xl transition-all"
            >
              <div className="text-primary mb-8 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map(tag => (
                  <span key={tag} className="bg-primary/5 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/10">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/services/${service.slug}`} className="btn-primary w-full flex justify-center">
                Explore Details
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <section className="py-20 glass rounded-4xl p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Benefit icon={<Shield />} title="Security First" description="Enterprise-grade security in every script and line of code we write." />
            <Benefit icon={<Database />} title="Scalability" description="Solutions that grow as your team expands, without performance loss." />
            <Benefit icon={<Layout />} title="Premium UX" description="User experiences that are intuitive, beautiful, and highly functional." />
          </div>
        </section>
      </div>
    </main>
  );
}

function Benefit({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
