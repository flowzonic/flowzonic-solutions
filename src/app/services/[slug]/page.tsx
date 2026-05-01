
"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Globe, Bot, Layers, TrendingUp, HelpCircle,
  ArrowRight, Rocket
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SERVICE_DATA: Record<string, any> = {
  web: {
    title: "Web Development",
    icon: <Globe className="text-primary" size={48} />,
    headline: "Websites that Outpace the Competition",
    subHeadline: "Stop losing leads to slow, outdated platforms. We build lightning-fast digital engines that convert visitors into loyal customers.",
    image: PlaceHolderImages[1].imageUrl,
    whyUs: [
      "Our engineering-first approach prioritizes core web vitals and speed above all else. In a world where milliseconds cost millions, we ensure your site is the fastest in its niche.",
      "We don't just 'build sites'; we architect digital ecosystems. Every line of code is optimized for SEO and scalability, ensuring your brand grows without technical friction.",
      "Security and reliability are non-negotiable. Using modern stacks like Next.js and Firebase, we provide enterprise-grade protection for your data and your users' privacy."
    ],
    process: [
      { title: "Discovery", desc: "We deep-dive into your business goals, user personas, and competitor landscape to define a technical roadmap." },
      { title: "Strategy", desc: "Architecting the sitemap, wireframes, and tech-stack choice to ensure the foundation is future-proof." },
      { title: "Execution", desc: "High-speed development phase where design meets code, utilizing modern frameworks for maximum performance." },
      { title: "QA & Testing", desc: "Rigorous stress tests across all devices and browsers to ensure a pixel-perfect, bug-free experience." },
      { title: "Launch & Support", desc: "Deploying your asset to the world and providing the ongoing maintenance needed to stay ahead." }
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Firebase", "CloudOps"],
    roi: "Expect a significant reduction in bounce rates and a direct increase in user session duration. Our optimized performance leads to better SEO rankings, lower customer acquisition costs, and a premium brand perception that drives higher average order values.",
    faqs: [
      { q: "Will my website be mobile-responsive?", a: "Every site we build is mobile-first. It will look and function perfectly on smartphones, tablets, and desktops." },
      { q: "How long does a typical build take?", a: "Most enterprise-grade websites take between 4 to 8 weeks, depending on the complexity and integrations required." },
      { q: "Do you offer post-launch maintenance?", a: "Yes, we provide ongoing support packages to keep your site updated, secure, and performing at its peak." }
    ]
  },
  automation: {
    title: "Google Automation",
    icon: <Bot className="text-primary" size={48} />,
    headline: "Your Business on Autopilot",
    subHeadline: "Eliminate human error and manual bottlenecks with intelligent scripts that connect your favorite Google Workspace tools seamlessly.",
    image: PlaceHolderImages[3].imageUrl,
    whyUs: [
      "We specialize in the intersection of Google Apps Script and Generative AI. This allows us to build systems that don't just move data, but understand it.",
      "Our solutions are lightweight and reside directly within your Google Workspace. There's no expensive third-party software to subscribe to—you own the automation.",
      "We focus on 'Zero-Friction' workflows. If a task requires more than one click, we find a way to make it zero. Our goal is to make your backend operations invisible."
    ],
    process: [
      { title: "Audit", desc: "We map out your manual workflows and identify the highest-impact areas for immediate automation." },
      { title: "Architecture", desc: "Designing the data flow between Sheets, Docs, Gmail, and external APIs to ensure a seamless bridge." },
      { title: "Scripting", desc: "Development of custom Google Apps Script and AI integrations tailored specifically to your internal logic." },
      { title: "Testing", desc: "Edge-case testing and user acceptance phases to ensure the automation handles data with 100% accuracy." },
      { title: "Deployment", desc: "Integration into your active Workspace with comprehensive training for your team." }
    ],
    tech: ["Google Apps Script", "Gemini AI", "Sheets API", "Drive API", "Gmail API", "Firebase Functions"],
    roi: "Our clients save an average of 10-20 hours per week per department. By eliminating manual data entry, you remove the 3-5% error rate typical in human processes, leading to cleaner data and faster decision-making that directly impacts your bottom line.",
    faqs: [
      { q: "Is my data secure within the scripts?", a: "Yes. The scripts run within your own Google account or organization, meaning you retain full control over data access and permissions." },
      { q: "Can scripts connect to non-Google apps?", a: "Absolutely. We use APIs to connect your Google Workspace to tools like Slack, Shopify, Stripe, and more." },
      { q: "What if the automation breaks?", a: "Our code is built with robust error-logging. If a script fails, it automatically notifies us so we can resolve it instantly." }
    ]
  },
  design: {
    title: "Graphic Designing",
    icon: <Layers className="text-primary" size={48} />,
    headline: "Aesthetics That Drive Authority",
    subHeadline: "Generic design is invisible. We create premium visual identities that make your brand impossible to ignore and command higher trust.",
    image: PlaceHolderImages[2].imageUrl,
    whyUs: [
      "Our design philosophy is rooted in 'Glossy Minimalism'. We use negative space and premium textures to create a look that feels futuristic and expensive.",
      "We design for conversion, not just beauty. Every color choice, font weight, and layout structure is engineered to guide the user's eye toward your primary call to action.",
      "We provide a complete visual system. From your logo to your UI components, we ensure a consistent aesthetic that builds brand recognition across every touchpoint."
    ],
    process: [
      { title: "Branding Deep-Dive", desc: "We analyze your brand values and audience psychology to establish a visual tone of voice." },
      { title: "Conceptualization", desc: "Development of diverse design directions and moodboards to align on the futuristic vision." },
      { title: "Refinement", desc: "Iterative design phase where we polish the chosen concepts into high-fidelity assets." },
      { title: "Asset Production", desc: "Generating all final deliverables, from web-ready UI to high-resolution print and social assets." },
      { title: "Handoff", desc: "Delivery of a comprehensive brand style guide to ensure consistent application of your new look." }
    ],
    tech: ["Figma", "Adobe Creative Suite", "Framer", "Blender 3D", "After Effects"],
    roi: "Premium design allows you to command premium pricing. A professional, futuristic visual identity builds instant trust, reducing the 'skepticism barrier' for new customers and lowering your customer acquisition costs through better engagement.",
    faqs: [
      { q: "Do I get ownership of the source files?", a: "Yes. Once the project is complete, you receive all source files (Figma, AI, PSD) and full intellectual property rights." },
      { q: "How many revisions do we get?", a: "Our standard process includes 3 rounds of major revisions to ensure the final result is exactly what you envisioned." },
      { q: "Can you design for both web and print?", a: "Absolutely. We provide high-fidelity assets optimized for both digital displays and high-end physical printing." }
    ]
  }
};

// This function is required for static export to generate the paths for dynamic segments
export async function generateStaticParams() {
  return [
    { slug: 'web' },
    { slug: 'automation' },
    { slug: 'design' },
  ];
}

export default function ServicePage() {
  const { slug } = useParams();
  const service = SERVICE_DATA[slug as string];

  if (!service) return notFound();

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
                  <div className="w-14 h-14 bg-white dark:bg-black/40 glass-premium rounded-full flex items-center justify-center text-primary font-black mb-6 z-10 shadow-lg border-primary/20">
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
            <HelpCircle className="mx-auto text-primary mb-4" size={40} />
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
