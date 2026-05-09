"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Rocket, Zap, Palette, Code, Star, ArrowRight, ShieldCheck, Clock, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PricingData, PricingCategory } from "@/lib/pricing-data";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<PricingCategory>("web");

  return (
    <main className="pt-24 sm:pt-32 pb-20 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <section className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="badge-pill">Transparent Pricing</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-[#1A1035] leading-tight">
              Plans for Every <span className="gradient-text">Flow</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto mb-8 sm:mb-12 font-medium px-2">
              Fixed, upfront pricing with no hidden costs. Choose the expertise your business needs today.
            </p>
          </motion.div>

          {/* Service Switcher - Scrollable on mobile */}
          <div className="w-full overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
            <div className="flex justify-start sm:justify-center p-1.5 bg-white border border-[#EDE9FE] rounded-full max-w-fit mx-auto shadow-sm min-w-max">
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
          </div>
        </section>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <AnimatePresence mode="wait">
            {PricingData[activeTab].map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className={cn(
                  "card-standard p-6 sm:p-8 flex flex-col h-full",
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
                  <p className="text-sm text-[#4B5563] font-medium leading-relaxed mb-6 h-12 sm:h-10">{plan.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-bold text-[#1A1035] tracking-tight">{plan.price}</span>
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
        <section className="bg-[#1A1035] text-white rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 md:p-20 overflow-hidden relative mb-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">Our <span className="text-primary">Quality</span> Guarantee</h2>
              <p className="text-[#C4B5FD] text-base sm:text-lg mb-10 font-medium">
                We treat your investment as our own. Every project is backed by our four core pillars of delivery excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <BenefitItem icon={<ShieldCheck />} title="Verified Security" text="Your data remains private." />
                <BenefitItem icon={<Clock />} title="Strict Timelines" text="On-time or it's free." />
                <BenefitItem icon={<ArrowRight />} title="Free Revisions" text="Until you are satisfied." />
                <BenefitItem icon={<Star />} title="Expert Support" text="30-day post-launch help." />
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 sm:p-10 rounded-3xl sm:rounded-4xl backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Ready to initiate your flow?</h3>
              <p className="text-[#C4B5FD] mb-8 sm:mb-10 font-medium text-sm">
                Get a response within 2 hours. Our automation experts are standing by.
              </p>
              <div className="flex flex-col gap-4">
                <Link href="/contact" className="btn-white text-center py-4 flex items-center justify-center gap-2 text-sm sm:text-base">
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
        "flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap",
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
