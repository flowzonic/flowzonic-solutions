"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
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

  // Prevent body scroll when sidebar open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
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
              {NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                      isActive
                        ? "text-[#7B2FBE]"
                        : "text-[#4B5563] hover:text-[#7B2FBE]"
                    )}
                  >
                    {item.name}

                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-[#F3E8FF] rounded-full -z-10 border border-[#E9D5FF]"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
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
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
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
              transition={{
                type: "spring",
                damping: 24,
                stiffness: 220,
              }}
              className="fixed top-0 right-0 h-screen w-[85%] max-w-[360px] bg-white z-[60] md:hidden shadow-2xl border-l border-[#EDE9FE]"
            >
              {/* Top */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#F3F4F6]">
                <Image
                  src="/header-logo.png"
                  alt="Flowzonic Solutions"
                  width={150}
                  height={40}
                  className="h-8 w-auto object-contain"
                />

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-xl bg-[#F8F5FF] flex items-center justify-center text-[#7B2FBE]"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col p-5">
                {[...NAV_ITEMS, { name: "Contact", href: "/contact" }].map(
                  (item, index) => {
                    const isActive =
                      pathname === item.href ||
                      (item.href !== "/" &&
                        pathname.startsWith(item.href));

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.06,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "group flex items-center justify-between px-5 py-4 rounded-2xl mb-2 text-base font-semibold transition-all duration-300",
                            isActive
                              ? "bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] text-white shadow-lg"
                              : "text-[#1A1035] hover:bg-[#F8F5FF]"
                          )}
                        >
                          {item.name}

                          <ArrowRight
                            size={18}
                            className={cn(
                              "transition-transform duration-300",
                              !isActive && "group-hover:translate-x-1"
                            )}
                          />
                        </Link>
                      </motion.div>
                    );
                  }
                )}
              </div>

              {/* Bottom CTA */}
              <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-[#F3F4F6] bg-white">
                <div className="rounded-3xl bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] p-5 text-white">
                  <p className="text-lg font-bold mb-2">
                    Ready to grow your business?
                  </p>

                  <p className="text-sm text-white/80 mb-4">
                    Let’s automate and scale your workflow together.
                  </p>

                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center gap-2 bg-white text-[#7B2FBE] py-3 rounded-2xl font-semibold"
                  >
                    Contact Us
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}