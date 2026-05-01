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
          "w-full transition-all duration-500 border-b",
          scrolled 
            ? "bg-white/70 backdrop-blur-lg border-primary/10 shadow-sm py-3" 
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group transition-transform active:scale-95">
            <Image 
              src="/flowzonic-website-logo.png" 
              alt="Flowzonic Logo" 
              width={160} 
              height={40} 
              className="w-auto h-8 sm:h-10 object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300",
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden sm:flex btn-primary !py-2.5 !px-6 text-sm">
              Book a Call
            </Link>

            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center text-foreground rounded-xl glass"
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
            className="absolute top-full left-0 right-0 md:hidden bg-white/95 backdrop-blur-xl border-b border-primary/10 p-6 flex flex-col gap-2 shadow-2xl"
          >
            {[...NAV_ITEMS, { name: "Contact", href: "/contact" }].map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={cn(
                  "text-lg font-bold px-4 py-4 rounded-xl transition-colors",
                  pathname === item.href ? "bg-primary text-white" : "text-foreground hover:bg-primary/5"
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
