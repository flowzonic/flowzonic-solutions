"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Code, Zap, Palette, CheckCircle, 
  Globe, Server, Database, Layers, 
  Mail, FileText, Table as TableIcon, Bot
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const SERVICE_DATA: Record<string, any> = {
  web: {
    title: "Web Development",
    icon: <Globe className="text-primary" size={48} />,
    description: "Building modern high-end web experiences with precision.",
    image: PlaceHolderImages[1].imageUrl,
    features: ["Responsive Design", "SEO Optimization", "E-commerce Solutions", "Custom CMS"],
    tech: [<Code key="1" />, <Server key="2" />, <Database key="3" />],
    content: "Our web development process focuses on creating lightning-fast, secure, and visually stunning digital assets that convert visitors into customers."
  },
  automation: {
    title: "Google Automation",
    icon: <Bot className="text-primary" size={48} />,
    description: "Automate your daily grind using Google Workspace APIs.",
    image: PlaceHolderImages[3].imageUrl,
    features: ["Custom Apps Script", "Gmail Automation", "Sheet Integrations", "Auto-Generated Reports"],
    tech: [<Mail key="1" />, <FileText key="2" />, <TableIcon key="3" />, <Zap key="4" />],
    content: "Say goodbye to repetitive tasks. We build intelligent systems inside Google Workspace that handle your data, emails, and documents automatically."
  },
  design: {
    title: "Graphic Design",
    icon: <Layers className="text-primary" size={48} />,
    description: "Visual storytelling through premium design elements.",
    image: PlaceHolderImages[2].imageUrl,
    features: ["Logo & Branding", "UI/UX Design", "Social Media Kits", "Print Ready Designs"],
    tech: [<Palette key="1" />, <Layers key="2" />],
    content: "Design is more than just aesthetics; it's communication. We craft visual languages that tell your story with professional glossy elegance."
  }
};

export default function ServicePage() {
  const { slug } = useParams();
  const service = SERVICE_DATA[slug as string];

  if (!service) return notFound();

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <div className="inline-block p-4 glass rounded-2xl mb-6">
              {service.icon}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {service.description}
            </p>
            <p className="text-lg text-muted-foreground mb-12">
              {service.content}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {service.features.map((f: string) => (
                <div key={f} className="flex gap-2 items-center">
                  <CheckCircle size={20} className="text-primary" />
                  <span className="font-medium">{f}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary inline-block">
              Request a Quote
            </Link>
          </div>
          <div className="relative">
            <div className="glass p-4 rounded-4xl">
              <Image 
                src={service.image} 
                alt={service.title} 
                width={800} 
                height={600} 
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-12">Tools & Technologies</h2>
          <div className="flex justify-center gap-12 flex-wrap">
            {service.tech.map((Icon: any, i: number) => (
              <div key={i} className="w-20 h-20 glass rounded-2xl flex items-center justify-center text-primary hover:scale-110 transition-all">
                {Icon}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}