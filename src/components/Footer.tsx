
"use client";

import Link from "next/link";
import { Rocket, Twitter, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white/50 dark:bg-black/40 backdrop-blur-xl pt-20 pb-10 px-6 border-t border-primary/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white shadow-lg">
              <Rocket size={20} />
            </div>
            <span className="font-extrabold text-2xl tracking-tighter text-foreground">
              FLOW<span className="text-primary">ZONIC</span>
            </span>
          </Link>
          <p className="text-muted-foreground leading-relaxed mb-6 font-medium">
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
          <h4 className="font-bold text-lg mb-6 text-foreground">Quick Links</h4>
          <ul className="space-y-4">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/services">Our Services</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-foreground">Services</h4>
          <ul className="space-y-4">
            <FooterLink href="/services/web">Web Development</FooterLink>
            <FooterLink href="/services/automation">Google Automation</FooterLink>
            <FooterLink href="/services/design">Graphic Design</FooterLink>
            <FooterLink href="/contact">Consultation</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-foreground">Stay Updated</h4>
          <p className="text-muted-foreground mb-4 font-medium">Subscribe to our newsletter for insights.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full glass rounded-full py-3 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white/50 dark:bg-white/5 text-foreground placeholder:text-muted-foreground"
            />
            <button className="absolute right-1 top-1 bg-primary text-white p-2 rounded-full hover:scale-110 transition-transform shadow-lg shadow-primary/20">
              <Rocket size={16} />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-medium">
        <p>© 2024 Flowzonic Solution. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="w-10 h-10 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all border border-primary/5"
    >
      {icon}
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group font-medium">
        <div className="w-1 h-1 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform" />
        {children}
      </Link>
    </li>
  );
}
