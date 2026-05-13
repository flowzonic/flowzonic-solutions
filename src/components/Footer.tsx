
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Linkedin,
  Github,
  Mail,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#120B2B] border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#7B2FBE]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#A855F7]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14">
            
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="inline-flex mb-8 transition-transform active:scale-95"
              >
                <Image
                  src="/header-logo.png"
                  alt="Flowzonic Solutions"
                  width={220}
                  height={60}
                  className="w-auto h-12 object-contain brightness-0 invert"
                />
              </Link>

              <p className="text-[#B8B5C7] leading-relaxed text-[15px] font-medium mb-8 max-w-sm">
                Empowering businesses through intelligent automation,
                premium digital experiences, and scalable design systems.
              </p>

              <div className="flex items-center gap-4">
                <SocialIcon
                  href="https://www.instagram.com/flowzonicsolutions/"
                  label="Instagram"
                  icon={<Instagram size={18} />}
                />
                <SocialIcon
                  href="#"
                  label="LinkedIn"
                  icon={<Linkedin size={18} />}
                />
                <SocialIcon
                  href="mailto:contact@flowzonicsolutions.com"
                  label="Email"
                  icon={<Mail size={18} />}
                />
              </div>
            </div>

            {/* Quick Links */}
            <FooterColumn title="Quick Links">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/portfolio">Our Work</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
            </FooterColumn>

            {/* Services */}
            <FooterColumn title="Services">
              <FooterLink href="/services/web">
                Web Development
              </FooterLink>

              <FooterLink href="/services/automation">
                Google Automation
              </FooterLink>

              <FooterLink href="/services/design">
                Graphic Design
              </FooterLink>

              <FooterLink href="/contact">
                Consultation
              </FooterLink>
            </FooterColumn>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6 tracking-tight">
                Stay Updated
              </h4>

              <p className="text-[#B8B5C7] text-[15px] leading-relaxed mb-6">
                Get insights, design trends, and automation strategies directly
                to your inbox.
              </p>

              <div className="relative group">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] opacity-30 blur-sm group-focus-within:opacity-100 transition-opacity" />

                <div className="relative flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email address"
                    className="w-full bg-transparent px-5 py-4 text-white placeholder:text-[#8B87A3] outline-none text-sm"
                  />

                  <button
                    aria-label="Subscribe"
                    className="m-2 h-11 w-11 shrink-0 rounded-xl bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] flex items-center justify-center text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                  >
                    <Rocket size={18} />
                  </button>
                </div>
              </div>

              {/* Small CTA */}
              <div className="mt-8 p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
                <p className="text-sm text-white font-semibold mb-2">
                  Ready to scale your business?
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#C4B5FD] hover:text-white transition-colors"
                >
                  Let&apos;s build together
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 bg-black/20 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#8B87A3] font-medium text-center md:text-left">
              © 2026 Flowzonic Solutions. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-[#8B87A3] hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-[#8B87A3] hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Footer Column */
function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-white font-semibold text-lg mb-6 tracking-tight">
        {title}
      </h4>

      <ul className="space-y-4">{children}</ul>
    </div>
  );
}

/* Footer Link */
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-[#B8B5C7] hover:text-white transition-all duration-300 font-medium"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7] scale-0 group-hover:scale-100 transition-transform duration-300" />

        <span className="relative">
          {children}

          <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] transition-all duration-300 group-hover:w-full" />
        </span>
      </Link>
    </li>
  );
}

/* Social Icon */
function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-[#C4B5FD] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#A855F7]/40 hover:text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#7B2FBE] to-[#A855F7] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative z-10">{icon}</span>
    </Link>
  );
}
