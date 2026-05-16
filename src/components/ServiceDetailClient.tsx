"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  TrendingUp,
  Check,
} from "lucide-react";

/* ─── Fade-up helper ─── */
const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── FAQ Item ─── */
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={index * 0.08}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left group"
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-6 py-7 border-b border-[#EDE9FE]">
          <span className="font-semibold text-lg text-[#1A1035] leading-snug group-hover:text-[#7B2FBE] transition-colors duration-300 font-display">
            {q}
          </span>
          <ChevronDown
            size={20}
            className={`text-[#9CA3AF] shrink-0 mt-1 transition-transform duration-500 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="text-[#4B5563] leading-relaxed py-5 pr-8 font-body">
            {a}
          </p>
        </motion.div>
      </button>
    </FadeUp>
  );
}

/* ─── Process Step ─── */
function ProcessStep({
  step,
  index,
  total,
}: {
  step: { title: string; desc: string };
  index: number;
  total: number;
}) {
  return (
    <FadeUp delay={index * 0.1} className="relative">
      {/* connector line */}
      {index < total - 1 && (
        <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[-calc(50%-2rem)] h-px bg-gradient-to-r from-[#EDE9FE] to-transparent z-0" />
      )}
      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-white border border-[#EDE9FE] flex items-center justify-center shadow-sm">
          <span className="text-sm font-bold text-[#7B2FBE] font-display tracking-wider">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div>
          <h3 className="font-bold text-[#1A1035] mb-2 font-display text-lg">
            {step.title}
          </h3>
          <p className="text-xs text-[#9CA3AF] leading-relaxed font-body max-w-[160px] mx-auto">
            {step.desc}
          </p>
        </div>
      </div>
    </FadeUp>
  );
}

/* ─── Main Component ─── */
export default function ServiceDetailClient({ service }: { service: any }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Mapping service IDs to work slugs
  const workPathMap: Record<string, string> = {
    web: "/work/web-development",
    automation: "/work/google-automation",
    design: "/work/graphic-design",
  };

  const workHref = workPathMap[service.id] || "/portfolio";

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAFBFF]">
      {/* ─── Ambient Background ─── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[#7B2FBE]/5 rounded-full blur-[140px] opacity-30" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#A855F7]/5 rounded-full blur-[100px] opacity-20" />
      </div>

      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative z-10 min-h-screen flex flex-col justify-center pt-28 pb-16 px-6"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#EDE9FE] bg-[#F0EEFF] mb-8"
              >
                <Sparkles size={14} className="text-[#7B2FBE]" />
                <span className="text-xs font-semibold text-[#7B2FBE] tracking-widest uppercase font-body">
                  {service.title}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-[#1A1035] mb-6 font-display"
              >
                {service.headline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg text-[#4B5563] leading-relaxed mb-10 font-body max-w-lg"
              >
                {service.subHeadline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] text-white font-bold text-sm tracking-wide hover:shadow-xl hover:shadow-purple-200 transition-all duration-300 font-body"
                >
                  Start Your Project
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href={workHref}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#7B2FBE] text-[#7B2FBE] font-semibold text-sm hover:bg-[#F0EEFF] transition-all duration-300 font-body"
                >
                  View Work <ArrowUpRight size={15} />
                </Link>
              </motion.div>
            </div>

            {/* Right — Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: heroY, opacity: heroOpacity }}
              className="relative"
            >
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-[2.5rem] border border-[#EDE9FE] pointer-events-none" />
              <div className="absolute -inset-8 rounded-[3rem] border border-[#F0EEFF]/50 pointer-events-none" />

              <div className="relative rounded-[2rem] overflow-hidden border border-[#EDE9FE] shadow-2xl bg-white p-2">
                <Image
                  src={
                    service.image ||
                    "https://picsum.photos/seed/service/900/680"
                  }
                  alt={service.title}
                  width={900}
                  height={680}
                  className="w-full h-auto object-cover rounded-3xl"
                  priority
                />
                {/* Floating stat badge */}
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-[#EDE9FE] shadow-lg">
                    <TrendingUp size={18} className="text-[#7B2FBE]" />
                    <span className="text-sm font-semibold text-[#1A1035] font-body">
                      Results-driven engineering
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] text-[#9CA3AF] uppercase font-body">
            Explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown size={16} className="text-[#9CA3AF]" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── THE EDGE (Why Us) ─── */}
      <section className="relative z-10 py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
              <div>
                <p className="text-xs font-bold tracking-widest text-[#7B2FBE] uppercase mb-3 font-body">
                  Our Difference
                </p>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1A1035] font-display leading-tight">
                  The Flowzonic{" "}
                  <span className="gradient-text">Edge</span>
                </h2>
              </div>
              <p className="text-[#9CA3AF] font-body max-w-sm leading-relaxed text-sm">
                What separates craft from commodity. Our core principles, non-negotiable.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.whyUs.map((text: string, i: number) => (
              <FadeUp key={i} delay={i * 0.12}>
                <div className="group relative h-full p-8 rounded-3xl border border-[#EDE9FE] bg-white hover:border-[#7B2FBE] hover:shadow-xl hover:shadow-purple-100 transition-all duration-500 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-[#F0EEFF] border border-[#EDE9FE] flex items-center justify-center mb-6">
                    <span className="text-xs font-extrabold text-[#7B2FBE] font-display">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-[#4B5563] leading-relaxed font-body group-hover:text-[#1A1035] transition-colors duration-300">
                    {text}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="relative z-10 py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-20">
              <p className="text-xs font-bold tracking-widest text-[#7B2FBE] uppercase mb-4 font-body">
                How We Work
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1A1035] font-display">
                Our Roadmap to <span className="gradient-text">Excellence</span>
              </h2>
            </div>
          </FadeUp>

          {/* Process Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {service.process.map((step: any, i: number) => (
              <ProcessStep
                key={i}
                step={step}
                index={i}
                total={service.process.length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK MARQUEE STRIP ─── */}
      <section className="relative z-10 py-10 border-y border-[#EDE9FE] bg-white overflow-hidden">
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {[...service.tech, ...service.tech, ...service.tech].map(
            (t: string, i: number) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 text-sm font-bold text-[#9CA3AF] uppercase tracking-widest font-body shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#7B2FBE] inline-block" />
                {t}
              </span>
            )
          )}
        </div>
      </section>

      {/* ─── ROI + FAQ ─── */}
      <section className="relative z-10 py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
          {/* FAQ */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <FadeUp>
              <p className="text-xs font-bold tracking-widest text-[#7B2FBE] uppercase mb-4 font-body">
                Common Questions
              </p>
              <h2 className="text-4xl font-extrabold text-[#1A1035] font-display mb-12">
                Frequently Asked
              </h2>
            </FadeUp>
            <div>
              {service.faqs.map((faq: any, i: number) => (
                <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>

          {/* ROI Card */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <FadeUp>
              <div className="sticky top-28 rounded-3xl overflow-hidden border border-[#EDE9FE] bg-white shadow-xl p-8 xl:p-10">
                <div className="w-full h-px bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] mb-8" />

                <TrendingUp size={32} className="text-[#7B2FBE] mb-5" />
                <h3 className="text-2xl font-extrabold text-[#1A1035] mb-4 font-display">
                  Business ROI
                </h3>
                <p className="text-[#4B5563] leading-relaxed mb-8 font-body">
                  {service.roi}
                </p>

                <div className="space-y-2 mb-8">
                  {service.tech.map((t: string) => (
                    <div
                      key={t}
                      className="flex items-center gap-3 py-2.5 px-4 rounded-xl bg-[#F0EEFF] border border-[#EDE9FE]"
                    >
                      <Check size={14} className="text-[#7B2FBE] shrink-0" />
                      <span className="text-sm font-semibold text-[#1A1035] font-body">
                        {t}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] text-white font-bold text-sm hover:shadow-xl hover:shadow-purple-200 transition-all duration-300 font-body"
                >
                  Book Strategy Call
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative z-10 py-16 px-6 pb-28">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="relative rounded-[2.5rem] overflow-hidden border border-[#EDE9FE] bg-white shadow-2xl p-14 sm:p-20 text-center">
              {/* corner accent lines */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-[#7B2FBE]/20 rounded-tl-[2.5rem]" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-[#7B2FBE]/20 rounded-br-[2.5rem]" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#EDE9FE] bg-[#F0EEFF] mb-8">
                  <Sparkles size={14} className="text-[#7B2FBE]" />
                  <span className="text-xs font-semibold text-[#7B2FBE] tracking-widest uppercase font-body">
                    Let's Build Together
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#1A1035] mb-6 font-display leading-tight">
                  Ready to elevate
                  <br />
                  <span className="gradient-text">your brand?</span>
                </h2>
                <p className="text-[#4B5563] text-lg mb-10 font-body max-w-md mx-auto">
                  Book your free strategy session and let's map out your path to market leadership.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-9 py-4 rounded-full bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] text-white font-extrabold text-base hover:shadow-2xl hover:shadow-purple-300 transition-all duration-300 font-body"
                >
                  Get Started Today
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── Marquee keyframe ─── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

        .font-display { font-family: 'Playfair Display', serif; }
        .font-body    { font-family: 'DM Sans', sans-serif; }

        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
          will-change: transform;
        }
      `}</style>
    </main>
  );
}
