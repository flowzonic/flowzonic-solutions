
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className={cn(
        "max-w-4xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}>
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
            <Rocket size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block text-foreground">Flowzonic</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary py-2 px-6 text-sm">
            Get Started
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-24 left-6 right-6 md:hidden glass rounded-3xl p-6 flex flex-col gap-4"
          >
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-lg font-medium py-2 border-b border-border/50 text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="btn-primary text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { AnimatePresence } from "framer-motion";
