"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div 
        className={cn(
          "w-full transition-all duration-500 border-b border-[#EDE9FE]",
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3" 
            : "bg-white py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group transition-transform active:scale-95">
            <Image 
              src="/header-logo.png" 
              alt="Flowzonic Solutions" 
              width={200} 
              height={55} 
              priority 
              className="h-10 w-auto object-contain" 
            />
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-bold transition-all duration-300 text-[#4B5563] hover:text-[#7B2FBE]",
                    isActive && "text-[#7B2FBE]"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#7B2FBE]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link 
              href="/contact" 
              className="hidden sm:flex px-6 py-2.5 rounded-full font-medium text-white bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] hover:opacity-90 hover:shadow-md hover:shadow-purple-200 transition-all duration-200 text-sm"
            >
              Let&apos;s Talk
            </Link>

            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center text-[#1A1035] rounded-xl border border-[#EDE9FE] bg-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 md:hidden bg-white border-b border-[#EDE9FE] p-6 flex flex-col gap-2 shadow-2xl"
          >
            {[...NAV_ITEMS, { name: "Contact", href: "/contact" }].map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={cn(
                  "text-lg font-bold px-4 py-4 rounded-xl transition-colors text-[#1A1035]",
                  pathname === item.href ? "bg-[#F0EEFF] text-[#7B2FBE]" : "hover:bg-[#F0EEFF]"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
