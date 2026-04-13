
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

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
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 px-6 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "w-full max-w-5xl glass-premium rounded-full px-4 py-2 flex items-center justify-between transition-all duration-500 pointer-events-auto",
          scrolled ? "shadow-[0_8px_32px_rgba(157,78,221,0.15)] bg-white/80 dark:bg-black/80" : "bg-white/40 dark:bg-black/40"
        )}
      >
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 pl-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-500">
            <Rocket size={20} />
          </div>
          <span className="font-extrabold text-xl tracking-tighter text-foreground">
            FLOW<span className="text-primary">ZONIC</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/20 dark:bg-black/20 rounded-full p-1 border border-white/10">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={cn(
                  "px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300",
                  isActive 
                    ? "bg-white dark:bg-white/10 text-primary shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-white/50 dark:hover:bg-white/5"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-2 pr-1">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all active:scale-90"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-foreground rounded-full glass"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-6 right-6 md:hidden glass-premium rounded-[2rem] p-4 flex flex-col gap-1 pointer-events-auto shadow-2xl border border-primary/10"
          >
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={cn(
                  "text-base font-bold px-6 py-4 rounded-2xl transition-colors",
                  pathname === item.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-primary/5"
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
