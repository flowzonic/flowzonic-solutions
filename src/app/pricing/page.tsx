"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Rocket, Zap, Palette, Code, Star, ArrowRight, ShieldCheck, Clock, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PRICING_DATA = {
  web: [
    {
      name: "Startup",
      price: "₹15,000",
      desc: "Perfect for single-product launches or portfolio sites.",
      features: ["One-Page Landing", "Mobile Responsive", "Contact Form", "Basic SEO", "7-Day Delivery"],
      button: "Get Started",
      popular: false
    },
    {
      name: "Business",
      price: "₹35,000",
      desc: "Full business websites with multiple pages.",
      features: ["Up to 5 Pages", "CMS Integration", "Google Maps Integration", "Advanced SEO", "15-Day Delivery", "30-Day Support"],
      button: "Choose Business",
      popular: true
    },
    {
      name: "Pro",
      price: "₹60,000",
      desc: "Scalable E-commerce engines for high-volume sales.",
      features: ["Full Online Store", "Payment Gateway Setup", "Product Dashboard", "Stock Management", "Abandoned Cart Email", "Priority Support"],
      button: "Go Pro",
      popular: false
    },
    {
      name: "Custom",
      price: "Custom",
      desc: "Enterprise-grade web applications tailored to you.",
      features: ["Custom Web Apps", "External API Integrations", "Multi-role Dashboards", "Cloud Infrastructure", "Long-term Maintenance"],
      button: "Book Consultation",
      popular: false
    }
  ],
  automation: [
    {
      name: "Essential",
      price: "₹8,000",
      desc: "Basic scripting to solve one core manual task.",
      features: ["Single Script Task", "Google Sheets Logic", "PDF Generation", "Error Handlers", "3-Day Delivery"],
      button: "Get Script",
      popular: false
    },
    {
      name: "Workflow",
      price: "₹20,000",
      desc: "Complete cross-app automation engines.",
      features: ["Multi-App Sync", "Gmail & Drive Workflows", "Automated Reporting", "Custom UI Prompts", "10-Day Delivery", "Support Included"],
      button: "Automate Now",
      popular: true
    },
    {
      name: "AI Flow",
      price: "₹45,000",
      desc: "Intelligent systems using Gemini AI.",
      features: ["Gemini AI Integration", "Smart Content Synthesis", "Automated Lead Analysis", "Semantic Data Processing", "Priority AI Support"],
      button: "Deploy AI",
      popular: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Global Workspace architecture & audits.",
      features: ["Full Org Audit", "DLP & Security Setup", "Custom Add-on Dev", "Admin Training", "SLA-backed Support"],
      button: "Discuss Needs",
      popular: false
    }
  ],
  design: [
    {
      name: "Essential",
      price: "₹5,000",
      desc: "The core identity for your brand launch.",
      features: ["Primary Logo Design", "Favicon & Icons", "Color Palette", "Basic Style Guide", "3 Concepts"],
      button: "Get Identity",
      popular: false
    },
    {
      name: "Identity",
      price: "₹12,000",
      desc: "Full brand voice for social presence.",
      features: ["Logo + Variations", "Social Media Kit", "Email Signature", "Typography Suite", "Source Files Included"],
      button: "Choose Identity",
      popular: true
    },
    {
      name: "Product",
      price: "₹25,000",
      desc: "High-fidelity UI/UX design for apps.",
      features: ["Figma Wireframes", "Prototyping", "Up to 10 Screens", "Design System", "Dev Handoff File"],
      button: "Design Product",
      popular: false
    },
    {
      name: "Elite",
      price: "₹50,000",
      desc: "Complete visual ecosystem for enterprises.",
      features: ["Full Brand System", "3D Asset Creation", "Premium Pitch Decks", "Animated UI Assets", "Brand Audit"],
      button: "Go Elite",
      popular: false
    }
  ]
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<keyof typeof PRICING_DATA>("web");

  return (
    <main className="pt-32 pb-20 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <section className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="badge-pill">Transparent Pricing</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1A1035]">
              Plans for Every <span className="gradient-text">Flow</span>
            </h1>
            <p className="text-xl text-[#4B5563] max-w-2xl mx-auto mb-12 font-medium">
              Fixed, upfront pricing with no hidden costs. Choose the expertise your business needs today.
            </p>
          </motion.div>

          {/* Service Switcher */}
          <div className="flex justify-center p-1.5 bg-white border border-[#EDE9FE] rounded-full max-w-fit mx-auto shadow-sm">
            <TabButton 
              active={activeTab === "web"} 
              onClick={() => setActiveTab("web")}
              icon={<Code size={18} />}
              label="Web Dev" 
            />
            <TabButton 
              active={activeTab === "automation"} 
              onClick={() => setActiveTab("automation")}
              icon={<Zap size={18} />}
              label="Automation" 
            />
            <TabButton 
              active={activeTab === "design"} 
              onClick={() => setActiveTab("design")}
              icon={<Palette size={18} />}
              label="Design" 
            />
          </div>
        </section>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <AnimatePresence mode="wait">
            {PRICING_DATA[activeTab].map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className={cn(
                  "card-standard p-8 flex flex-col h-full",
                  plan.popular ? "border-[#7B2FBE] shadow-xl shadow-purple-100 ring-2 ring-[#7B2FBE]/10" : "bg-white/70 backdrop-blur-md"
                )}
              >
                {plan.popular && (
                  <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6 self-start">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#1A1035] mb-2">{plan.name}</h3>
                  <p className="text-sm text-[#4B5563] font-medium leading-relaxed mb-6 h-10">{plan.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#1A1035] tracking-tight">{plan.price}</span>
                  </div>
                </div>

                <div className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm text-[#4B5563] font-medium">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#F0EEFF] text-[#7B2FBE] flex items-center justify-center shrink-0">
                        <Check size={10} strokeWidth={4} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link 
                  href="/contact" 
                  className={cn(
                    "w-full py-4 rounded-xl font-bold transition-all text-center text-sm",
                    plan.popular 
                      ? "bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] text-white shadow-lg shadow-purple-200 hover:opacity-90" 
                      : "bg-[#F0EEFF] text-[#7B2FBE] hover:bg-[#EDE9FE]"
                  )}
                >
                  {plan.button}
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Guarantees Section */}
        <section className="bg-[#1A1035] text-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative mb-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our <span className="text-primary">Quality</span> Guarantee</h2>
              <p className="text-[#C4B5FD] text-lg mb-10 font-medium">
                We treat your investment as our own. Every project is backed by our four core pillars of delivery excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <BenefitItem icon={<ShieldCheck />} title="Verified Security" text="Your data remains private." />
                <BenefitItem icon={<Clock />} title="Strict Timelines" text="On-time or it's free." />
                <BenefitItem icon={<ArrowRight />} title="Free Revisions" text="Until you are satisfied." />
                <BenefitItem icon={<Star />} title="Expert Support" text="30-day post-launch help." />
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-4xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-8">Ready to initiate your flow?</h3>
              <p className="text-[#C4B5FD] mb-10 font-medium text-sm">
                Get a response within 2 hours. Our automation experts are standing by.
              </p>
              <div className="flex flex-col gap-4">
                <Link href="/contact" className="btn-white text-center py-4 flex items-center justify-center gap-2">
                  Book a Consultation <Rocket size={18} />
                </Link>
                <a href="https://wa.me/918881907942" className="text-white text-sm font-bold flex items-center justify-center gap-2 hover:opacity-80">
                  <MessageCircle size={18} className="text-[#25D366]" /> Or Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function TabButton({ active, onClick, label, icon }: any) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all duration-300",
        active 
          ? "bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] text-white shadow-md" 
          : "text-[#4B5563] hover:text-[#7B2FBE] hover:bg-[#F0EEFF]"
      )}
    >
      {icon}
      {label}
    </button>
  );
}

function BenefitItem({ icon, title, text }: any) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-sm">{title}</h4>
        <p className="text-xs text-[#C4B5FD] font-medium">{text}</p>
      </div>
    </div>
  );
}
