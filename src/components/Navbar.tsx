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
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    
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

  // Prevent flash of unthemed content
  if (!theme) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "w-full max-w-5xl glass-premium rounded-full px-2 py-2 flex items-center justify-between transition-all duration-500 pointer-events-auto border",
          scrolled ? "bg-white/90 dark:bg-black/80 shadow-2xl py-2" : "bg-white/40 dark:bg-black/20 py-3"
        )}
      >
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 pl-4 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-500">
            <Rocket size={18} />
          </div>
          <span className="font-extrabold text-xl tracking-tighter text-foreground hidden sm:block">
            FLOW<span className="text-primary">ZONIC</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={cn(
                  "px-5 py-2 text-sm font-bold rounded-full transition-all duration-300",
                  isActive 
                    ? "bg-primary text-white shadow-lg" 
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-2 pr-2">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-primary/10 text-foreground transition-all active:scale-90"
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
            className="absolute top-24 left-4 right-4 md:hidden glass-premium rounded-[2.5rem] p-4 flex flex-col gap-1 pointer-events-auto shadow-2xl"
          >
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={cn(
                  "text-lg font-bold px-8 py-4 rounded-[1.5rem] transition-colors",
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