"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github, Mail, Rocket } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1035] pt-20 pb-0 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="inline-block mb-6 transition-transform active:scale-95">
            <Image 
              src="/header-logo.png" 
              alt="Flowzonic Solutions" 
              width={200} 
              height={55} 
              className="w-auto h-10 object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-[#9CA3AF] leading-relaxed mb-6 font-medium">
            Empowering businesses through cutting-edge automation and premium digital design.
          </p>
          <div className="flex gap-4">
            <SocialIcon href="#" icon={<Twitter size={20} />} />
            <SocialIcon href="#" icon={<Linkedin size={20} />} />
            <SocialIcon href="#" icon={<Github size={20} />} />
            <SocialIcon href="#" icon={<Mail size={20} />} />
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
          <ul className="space-y-4">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/services">Our Services</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6 text-white">Services</h4>
          <ul className="space-y-4">
            <FooterLink href="/services/web">Web Development</FooterLink>
            <FooterLink href="/services/automation">Google Automation</FooterLink>
            <FooterLink href="/services/design">Graphic Design</FooterLink>
            <FooterLink href="/contact">Consultation</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6 text-white">Stay Updated</h4>
          <p className="text-[#9CA3AF] mb-4 font-medium">Subscribe to our newsletter for insights.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full px-4 py-3 rounded-xl border border-[#2D1B69] bg-white/5 text-white placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/10 transition-all duration-200"
            />
            <button className="absolute right-1 top-1 bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] text-white p-2 rounded-lg hover:scale-105 transition-transform shadow-lg shadow-purple-900/20">
              <Rocket size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-[#0D0820] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#9CA3AF] font-medium">
          <p>© 2024 Flowzonic Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="w-10 h-10 rounded-full flex items-center justify-center text-[#C4B5FD] hover:text-[#A855F7] hover:scale-110 transition-all border border-[#2D1B69] bg-white/5"
    >
      {icon}
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[#C4B5FD] hover:text-white transition-colors flex items-center gap-2 group font-medium">
        <div className="w-1 h-1 bg-[#A855F7] rounded-full scale-0 group-hover:scale-100 transition-transform" />
        {children}
      </Link>
    </li>
  );
}