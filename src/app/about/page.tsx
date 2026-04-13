
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Heart, Sparkles } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function About() {
  const founderImg = PlaceHolderImages.find(img => img.id === "team-member");

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            We Are <span className="gradient-text">Flowzonic</span>
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collective of designers and developers passionate about removing the friction from modern business growth.
          </p>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div className="glass p-4 rounded-4xl">
              <Image 
                src={PlaceHolderImages[0].imageUrl} 
                alt="About our vision" 
                width={800} 
                height={600} 
                className="rounded-3xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl hidden md:block">
              <p className="text-4xl font-bold text-primary">5+</p>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              In a world drowning in data and manual tasks, we believe in the power of elegant automation. Our mission is to empower visionaries to focus on what matters most—growth and innovation—while we handle the flow.
            </p>
            <div className="space-y-4">
              <Point icon={<Award />} text="Award-winning design philosophy" />
              <Point icon={<Heart />} text="Customer-centric solution architecture" />
              <Point icon={<Sparkles />} text="Continuous innovation in Workspace automation" />
            </div>
          </div>
        </section>

        <section className="text-center mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Core Values</h2>
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
      <div className="text-primary">{icon}</div>
      <span className="font-medium text-lg">{text}</span>
    </div>
  );
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="glass p-10 rounded-3xl hover:bg-white/90 transition-all">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
