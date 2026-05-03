"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Heart, Sparkles, Target, Zap, ShieldCheck, Users } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function About() {
  const visionImage = PlaceHolderImages.find(img => img.id === "tech-env");
  const founderImage = PlaceHolderImages.find(img => img.id === "team-member");

  return (
    <main className="pt-32 pb-20 px-6 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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

        {/* Philosophy Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="card-standard p-4 rounded-4xl bg-white/50 backdrop-blur-sm">
              <Image 
                src={visionImage?.imageUrl || ""} 
                alt="About our vision" 
                width={800} 
                height={600} 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white border border-[#EDE9FE] shadow-2xl p-8 rounded-3xl hidden md:block z-20">
              <p className="text-4xl font-bold text-[#7B2FBE]">5+</p>
              <p className="text-[#9CA3AF] font-bold uppercase tracking-widest text-[10px]">Years of Flow</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#7B2FBE] uppercase tracking-widest text-xs font-bold mb-4 block">Our Identity</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#1A1035]">The &ldquo;Flow&rdquo; Philosophy</h2>
            <p className="text-lg text-[#4B5563] mb-8 leading-relaxed font-medium">
              In a world drowning in data and manual tasks, we believe in the power of elegant automation. Our mission is to empower visionaries to focus on what matters most—growth and innovation—while we handle the technical current.
            </p>
            <div className="space-y-6">
              <Point icon={<Award size={20} />} title="Award-Winning Design" text="We don't just build, we craft experiences that command attention." />
              <Point icon={<Target size={20} />} title="Strategic Precision" text="Every line of code serves a business objective." />
              <Point icon={<Zap size={20} />} title="Elite Automation" text="Reclaiming your team's time through intelligent scripting." />
            </div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-[#F0EEFF] rounded-[4rem] px-8 md:px-20 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
          <div className="text-center mb-16 relative z-10">
            <span className="badge-pill bg-white">Purpose</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1A1035]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <ValueCard 
              icon={<ShieldCheck className="text-primary" />}
              title="Transparency" 
              description="No hidden scripts, no opaque pricing. We build with absolute clarity at every stage of the flow."
            />
            <ValueCard 
              icon={<Sparkles className="text-primary" />}
              title="Excellence" 
              description="If it's not premium, it's not Flowzonic. We strive for pixel-perfect results in every delivery."
            />
            <ValueCard 
              icon={<Zap className="text-primary" />}
              title="Agility" 
              description="The digital landscape changes daily. We move fast and pivot with precision to keep you ahead."
            />
          </div>
        </section>

        {/* Founder/Team Section Snippet */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-[#1A1035]">The Minds Behind the Flow</h2>
            <p className="text-lg text-[#4B5563] mb-8 leading-relaxed font-medium">
              Flowzonic was founded on the principle that technology should be invisible. We are a boutique team of specialists who treat every client project as a piece of digital architecture.
            </p>
            <div className="flex items-center gap-6 p-6 bg-white border border-[#EDE9FE] rounded-2xl shadow-sm">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                <Image src={founderImage?.imageUrl || ""} alt="Founder" width={64} height={64} className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-[#1A1035]">Alex Flow</p>
                <p className="text-sm text-[#9CA3AF]">Founder & Lead Architect</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#1A1035] p-12 rounded-4xl text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
            <Users className="text-primary mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4">Join the Network</h3>
            <p className="text-[#C4B5FD] mb-8 font-medium">We're always looking for elite talent to help us redefine the digital landscape.</p>
            <button className="px-8 py-3 rounded-full font-bold text-[#7B2FBE] bg-white hover:bg-[#F0EEFF] transition-all">
              Careers
            </button>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

function Point({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 shrink-0 bg-[#F0EEFF] text-[#7B2FBE] rounded-xl flex items-center justify-center border border-[#EDE9FE]">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-[#1A1035] mb-1">{title}</h4>
        <p className="text-sm text-[#4B5563] font-medium leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white border border-[#EDE9FE] p-10 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 bg-[#F0EEFF] rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-[#1A1035]">{title}</h3>
      <p className="text-[#4B5563] leading-relaxed font-medium">{description}</p>
    </div>
  );
}
