"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Heart, Sparkles } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function About() {
  return (
    <main className="pt-32 pb-20 px-6 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="badge-pill">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1A1035]">
              We Are <span className="gradient-text">Flowzonic</span>
            </h1>
            <p className="text-xl text-[#4B5563] max-w-2xl mx-auto font-medium">
              A collective of designers and developers passionate about removing the friction from modern business growth.
            </p>
          </motion.div>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div className="card-standard p-4 rounded-3xl">
              <Image 
                src={PlaceHolderImages[0].imageUrl} 
                alt="About our vision" 
                width={800} 
                height={600} 
                className="rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white border border-[#EDE9FE] shadow-xl p-8 rounded-3xl hidden md:block">
              <p className="text-4xl font-bold text-[#7B2FBE]">5+</p>
              <p className="text-[#9CA3AF] font-medium uppercase tracking-widest text-xs">Years of Excellence</p>
            </div>
          </div>
          <div>
            <span className="text-[#7B2FBE] uppercase tracking-widest text-xs font-semibold mb-4 block">Our Identity</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A1035]">The &ldquo;Flow&rdquo; Philosophy</h2>
            <p className="text-lg text-[#4B5563] mb-8 leading-relaxed font-medium">
              In a world drowning in data and manual tasks, we believe in the power of elegant automation. Our mission is to empower visionaries to focus on what matters most—growth and innovation—while we handle the flow.
            </p>
            <div className="space-y-4">
              <Point icon={<Award />} text="Award-winning design philosophy" />
              <Point icon={<Heart />} text="Customer-centric solution architecture" />
              <Point icon={<Sparkles />} text="Continuous innovation in Workspace automation" />
            </div>
          </div>
        </section>

        <section className="text-center mb-32 py-20 bg-[#F0EEFF] rounded-3xl px-6">
          <span className="badge-pill bg-white">Purpose</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-[#1A1035]">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              title="Transparency" 
              description="No hidden scripts, no opaque pricing. We build with clarity at every stage."
            />
            <ValueCard 
              title="Excellence" 
              description="If it's not premium, it's not Flowzonic. We strive for pixel-perfect results."
            />
            <ValueCard 
              title="Agility" 
              description="The digital landscape changes daily. We move fast to keep you ahead."
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function Point({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="text-[#7B2FBE]">{icon}</div>
      <span className="font-semibold text-[#1A1035]">{text}</span>
    </div>
  );
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white border border-[#EDE9FE] p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
      <h3 className="text-2xl font-bold mb-4 text-[#1A1035]">{title}</h3>
      <p className="text-[#4B5563] leading-relaxed font-medium">{description}</p>
    </div>
  );
}
