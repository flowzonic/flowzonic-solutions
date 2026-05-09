"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, Globe, Zap, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SERVICE_LINKS = [
  { name: "Web Development", href: "/services/web", icon: <Globe size={16} /> },
  { name: "Google Automation", href: "/services/automation", icon: <Zap size={16} /> },
  { name: "Graphic Design", href: "/services/design", icon: <Palette size={16} /> },
];

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div
          className={cn(
            "w-full border-b border-[#EDE9FE] transition-all duration-500",
            scrolled
              ? "bg-white/80 backdrop-blur-2xl shadow-sm py-3"
              : "bg-white/90 backdrop-blur-md py-4"
          )}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 transition-transform active:scale-95"
            >
              <Image
                src="/header-logo.png"
                alt="Flowzonic Solutions"
                width={200}
                height={55}
                priority
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                  pathname === "/" ? "text-[#7B2FBE]" : "text-[#4B5563] hover:text-[#7B2FBE]"
                )}
              >
                Home
                {pathname === "/" && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#F3E8FF] rounded-full -z-10 border border-[#E9D5FF]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>

              <Link
                href="/about"
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                  pathname === "/about" ? "text-[#7B2FBE]" : "text-[#4B5563] hover:text-[#7B2FBE]"
                )}
              >
                About
                {pathname === "/about" && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#F3E8FF] rounded-full -z-10 border border-[#E9D5FF]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="relative px-4 py-2 rounded-full text-sm font-semibold text-[#4B5563] hover:text-[#7B2FBE] transition-all duration-300 flex items-center gap-1 outline-none group">
                  Services
                  <ChevronDown size={14} className="group-data-[state=open]:rotate-180 transition-transform" />
                  {pathname.startsWith("/services") && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#F3E8FF] rounded-full -z-10 border border-[#E9D5FF]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2 min-w-[200px] rounded-2xl border-[#EDE9FE] bg-white/95 backdrop-blur-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                  {SERVICE_LINKS.map((service) => (
                    <DropdownMenuItem key={service.href} asChild>
                      <Link
                        href={service.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#4B5563] hover:text-[#7B2FBE] hover:bg-[#F8F5FF] transition-colors cursor-pointer"
                      >
                        <span className="text-[#7B2FBE]">{service.icon}</span>
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/pricing"
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                  pathname === "/pricing" ? "text-[#7B2FBE]" : "text-[#4B5563] hover:text-[#7B2FBE]"
                )}
              >
                Pricing
                {pathname === "/pricing" && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#F3E8FF] rounded-full -z-10 border border-[#E9D5FF]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>

              <Link
                href="/portfolio"
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                  pathname === "/portfolio" ? "text-[#7B2FBE]" : "text-[#4B5563] hover:text-[#7B2FBE]"
                )}
              >
                Portfolio
                {pathname === "/portfolio" && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#F3E8FF] rounded-full -z-10 border border-[#E9D5FF]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>

              <Link
                href="/blog"
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                  pathname === "/blog" || pathname.startsWith("/blog/") ? "text-[#7B2FBE]" : "text-[#4B5563] hover:text-[#7B2FBE]"
                )}
              >
                Blog
                {(pathname === "/blog" || pathname.startsWith("/blog/")) && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#F3E8FF] rounded-full -z-10 border border-[#E9D5FF]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-white bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] hover:shadow-xl hover:shadow-purple-200 transition-all duration-300 text-sm hover:scale-[1.02]"
              >
                Let&apos;s Talk
                <ArrowRight size={16} />
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden w-11 h-11 rounded-2xl border border-[#EDE9FE] bg-white/80 backdrop-blur-xl flex items-center justify-center text-[#1A1035] shadow-sm"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── MOBILE SIDEBAR ─────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 24, stiffness: 220 }}
              className="fixed top-0 right-0 h-screen w-[85%] max-w-[360px] bg-white z-[60] md:hidden shadow-2xl border-l border-[#EDE9FE] flex flex-col"
            >

              {/* ── TOP HEADER (Logo + Close) */}
              <div className="flex-shrink-0 flex items-center justify-between px-6 py-5 border-b border-[#F3F4F6]">
                <Image
                  src="/header-logo.png"
                  alt="Flowzonic Solutions"
                  width={150}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 rounded-xl bg-[#F8F5FF] flex items-center justify-center text-[#7B2FBE]"
                >
                  <X size={20} />
                </button>
              </div>

              {/* ── SCROLLABLE NAV LINKS */}
              <div className="flex-1 overflow-y-auto overscroll-contain p-5">
                <div className="flex flex-col gap-2">
                  <MobileNavLink href="/" name="Home" isActive={pathname === "/"} onClick={() => setIsOpen(false)} />
                  <MobileNavLink href="/about" name="About" isActive={pathname === "/about"} onClick={() => setIsOpen(false)} />
                  
                  {/* Mobile Services Submenu */}
                  <div className="flex flex-col">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={cn(
                        "flex items-center justify-between px-5 py-4 rounded-2xl text-base font-semibold transition-all",
                        mobileServicesOpen ? "bg-[#F8F5FF] text-[#7B2FBE]" : "text-[#1A1035]"
                      )}
                    >
                      Services
                      <ChevronDown size={18} className={cn("transition-transform duration-300", mobileServicesOpen && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-[#F8F5FF]/50 rounded-2xl mt-1"
                        >
                          {SERVICE_LINKS.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 px-8 py-3 text-sm font-medium text-[#4B5563] hover:text-[#7B2FBE]"
                            >
                              {service.icon}
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <MobileNavLink href="/pricing" name="Pricing" isActive={pathname === "/pricing"} onClick={() => setIsOpen(false)} />
                  <MobileNavLink href="/portfolio" name="Portfolio" isActive={pathname === "/portfolio"} onClick={() => setIsOpen(false)} />
                  <MobileNavLink href="/blog" name="Blog" isActive={pathname === "/blog" || pathname.startsWith("/blog/")} onClick={() => setIsOpen(false)} />
                  <MobileNavLink href="/contact" name="Contact" isActive={pathname === "/contact"} onClick={() => setIsOpen(false)} />
                </div>
              </div>

              {/* ── FOOTER INFO */}
              <div className="p-8 border-t border-[#F3F4F6] text-center">
                <p className="text-xs text-[#9CA3AF] font-medium uppercase tracking-widest">
                  © 2026 Flowzonic Solutions
                </p>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileNavLink({ href, name, isActive, onClick }: { href: string; name: string; isActive: boolean; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group flex items-center justify-between px-5 py-4 rounded-2xl text-base font-semibold transition-all duration-300",
        isActive
          ? "bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] text-white shadow-lg"
          : "text-[#1A1035] hover:bg-[#F8F5FF]"
      )}
    >
      {name}
      <ArrowRight
        size={18}
        className={cn(
          "transition-transform duration-300",
          !isActive && "group-hover:translate-x-1"
        )}
      />
    </Link>
  );
}
