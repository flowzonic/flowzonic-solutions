"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, X, Maximize2, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const PORTFOLIO_DATA = {
  Logo: [
    { id: 1, title: "Luxury Brand Identity", image: "https://picsum.photos/seed/logo1/800/600", dataAiHint: "luxury logo" },
    { id: 2, title: "Tech Company Logo", image: "https://picsum.photos/seed/logo2/600/800", dataAiHint: "tech logo" },
    { id: 3, title: "Restaurant Branding", image: "https://picsum.photos/seed/logo3/800/700", dataAiHint: "food branding" },
  ],
  "Social Media": [
    { id: 4, title: "Instagram Campaign", image: "https://picsum.photos/seed/social1/800/800", dataAiHint: "instagram design" },
    { id: 5, title: "Facebook Ad Concept", image: "https://picsum.photos/seed/social2/700/900", dataAiHint: "facebook ad" },
  ],
  "Packaging": [
    { id: 6, title: "Eco-Box Design", image: "https://picsum.photos/seed/package1/800/600", dataAiHint: "packaging design" },
  ],
  "Print Design": [
    { id: 7, title: "Corporate Brochure", image: "https://picsum.photos/seed/print1/900/600", dataAiHint: "brochure design" },
    { id: 8, title: "Event Flyer", image: "https://picsum.photos/seed/print2/600/900", dataAiHint: "flyer design" },
  ],
  "Web Banners": [
    { id: 9, title: "Hero Landing Banner", image: "https://picsum.photos/seed/banner1/1200/500", dataAiHint: "web banner" },
  ],
};

const tabs = Object.keys(PORTFOLIO_DATA);

export default function GraphicDesignWork() {
  const [activeTab, setActiveTab] = useState("Logo");
  const [selectedImage, setSelectedImage] = useState<{url: string, title: string} | null>(null);

  const filteredItems = useMemo(() => {
    return PORTFOLIO_DATA[activeTab as keyof typeof PORTFOLIO_DATA] || [];
  }, [activeTab]);

  return (
    <main className="bg-[#FAFBFF] min-h-screen pt-24">
      
      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden px-6">
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#A855F7]/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7B2FBE]/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-pill">Creative Portfolio</span>
            <h1 className="text-4xl md:text-7xl font-bold text-[#1A1035] mb-6 leading-tight">
              Visual <span className="gradient-text">Masterpieces</span>
            </h1>

            <p className="text-[#4B5563] text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            This portfolio showcases our graphic design and branding work, including logos, brochures, social media creatives, marketing banners, packaging, and brand identity designs. Our design approach focuses on clarity, attractiveness, and brand recall. We help businesses create strong visual impressions that communicate their message effectively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PORTFOLIO GALLERY ─────────────────────────────────────── */}
      <section className="pb-32 relative z-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-purple-500/5 border border-[#EDE9FE] overflow-hidden">

            {/* TABS - SCROLLABLE ON MOBILE */}
            <div className="flex overflow-x-auto no-scrollbar border-b border-[#F0EEFF] bg-[#FCFCFF]">
              <div className="flex w-full min-w-max px-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-8 py-5 font-bold text-sm md:text-base transition-all relative",
                      activeTab === tab
                        ? "text-[#7B2FBE]"
                        : "text-[#4B5563] hover:text-[#7B2FBE]"
                    )}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-[#7B2FBE] rounded-full"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* GRID */}
            <div className="p-6 md:p-10 min-h-[500px]">
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {filteredItems.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      whileHover={{ y: -8 }}
                      className="group relative rounded-3xl overflow-hidden border border-[#EDE9FE] bg-[#FAFBFF] shadow-sm hover:shadow-2xl hover:shadow-purple-200 transition-all cursor-zoom-in"
                      onClick={() => setSelectedImage({ url: item.image, title: item.title })}
                    >
                      {/* IMAGE */}
                      <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          data-ai-hint={item.dataAiHint}
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-[#1A1035]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* ZOOM ICON */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-xl">
                            <Maximize2 size={24} />
                          </div>
                        </div>
                      </div>

                      {/* TITLE */}
                      <div className="p-5 md:p-6 bg-white flex items-center justify-between">
                        <h3 className="font-bold text-[#1A1035] group-hover:text-[#7B2FBE] transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF]">
                          {activeTab}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* EMPTY STATE */}
              {filteredItems.length === 0 && (
                <div className="py-20 text-center">
                  <div className="w-20 h-20 bg-[#F0EEFF] rounded-full flex items-center justify-center text-[#7B2FBE] mx-auto mb-6">
                    <Search size={32} />
                  </div>
                  <p className="text-[#4B5563] font-medium">No items found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1A1035] to-[#2D1B69] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7B2FBE]/20 blur-[120px] rounded-full" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Define Your Brand?</h2>
            <p className="text-[#C4B5FD] text-lg mb-10 max-w-xl mx-auto font-medium">
              Join elite brands that use our design expertise to dominate their market.
            </p>
            <Link href="/contact" className="btn-white px-10 py-4 inline-flex items-center gap-2 text-base md:text-lg">
              Start Your Design Project <ChevronRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── LIGHTBOX MODAL ─────────────────────────────────────── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-[#1A1035]/95 z-[100] flex items-center justify-center p-4 md:p-10 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-6xl w-full max-h-full flex flex-col items-center"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full aspect-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain bg-[#1A1035]"
                />
              </div>

              {/* FOOTER INFO */}
              <div className="mt-6 text-center text-white">
                <h4 className="text-xl md:text-2xl font-bold mb-2">{selectedImage.title}</h4>
                <p className="text-[#C4B5FD] font-medium uppercase tracking-widest text-xs">{activeTab} Case Study</p>
              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 md:top-4 right-0 md:right-4 w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all shadow-xl"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
