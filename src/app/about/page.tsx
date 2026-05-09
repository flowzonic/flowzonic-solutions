"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Heart, Sparkles, Target, Zap, ShieldCheck, Users, Mail, Linkedin } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const TEAM = [
  {
    name: "Mohammad Suhail",
    role: "Founder",
    bio: "Visionary lead architecting the future of digital flow.",
    image: "https://picsum.photos/seed/suhail/400/400",
  },
  {
    name: "Mohammad Hammad",
    role: "Co-founder",
    bio: "Strategist focused on scaling business operations and growth.",
    image: "https://picsum.photos/seed/hammad/400/400",
  },
  {
    name: "Mohammad Tauifiq Qureshi",
    role: "Senior Software Developer",
    bio: "Engineering elite systems with precision code and logic.",
    image: "https://picsum.photos/seed/tauifiq/400/400",
  },
  {
    name: "Mohd Shuaib",
    role: "Senior Graphic Designer",
    bio: "Crafting the visual language of high-end brands.",
    image: "https://picsum.photos/seed/shuaib/400/400",
  },
];

export default function About() {
  const visionImage = PlaceHolderImages.find(img => img.id === "tech-env");

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
            <div className="  rounded-4xl bg-white/50 backdrop-blur-sm">
              <Image 
                src="/about-space.png"
                alt="About our vision" 
                width={800} 
                height={600} 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white border border-[#EDE9FE] shadow-2xl p-8 rounded-3xl hidden md:block z-20">
              <p className="text-4xl font-bold text-[#7B2FBE]">5+</p>
              <p className="text-[#4B5563] font-bold uppercase tracking-widest text-[10px]">Years of Flow</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#7B2FBE] uppercase tracking-widest text-xs font-semibold mb-4 block">Our Identity</span>
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

        {/* Team Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <span className="badge-pill">The Minds Behind</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1A1035]">Our Elite <span className="gradient-text">Team</span></h2>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto font-medium">
              Flowzonic was founded on the principle that technology should be invisible. Meet the specialists treating every client project as a piece of digital architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group card-standard p-6 text-center hover:shadow-2xl hover:shadow-purple-200 transition-all duration-500 bg-white/70 backdrop-blur-md"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7B2FBE] to-[#A855F7] rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20" />
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border border-[#EDE9FE] shadow-lg bg-gray-50">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A1035] mb-1">{member.name}</h3>
                <p className="text-[#7B2FBE] text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-sm text-[#4B5563] font-medium leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-3">
                   <button className="w-8 h-8 rounded-lg bg-[#F0EEFF] text-[#7B2FBE] flex items-center justify-center hover:bg-[#7B2FBE] hover:text-white transition-all">
                      <Linkedin size={14} />
                   </button>
                   <button className="w-8 h-8 rounded-lg bg-[#F0EEFF] text-[#7B2FBE] flex items-center justify-center hover:bg-[#7B2FBE] hover:text-white transition-all">
                      <Mail size={14} />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 bg-[#1A1035] p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
            <div className="max-w-xl">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#A855F7] mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Join the Network</h3>
              <p className="text-[#C4B5FD] text-lg font-medium">We're always looking for elite talent to help us redefine the digital landscape. Ready to enter the flow?</p>
            </div>
            <Link href="/contact" className="px-10 py-4 rounded-full font-bold text-[#7B2FBE] bg-white hover:bg-[#F0EEFF] transition-all whitespace-nowrap shadow-xl">
              View Careers
            </Link>
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
