
"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Rocket } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating a form submission to a Google Apps Script endpoint
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Let&apos;s <span className="gradient-text">Connect</span></h1>
            <p className="text-xl text-muted-foreground mb-12">
              Have a project in mind? We&apos;d love to hear how we can help you automate your vision.
            </p>

            <div className="space-y-8">
              <ContactInfo icon={<Mail />} label="Email" value="hello@flowzonic.com" />
              <ContactInfo icon={<Phone />} label="Phone" value="+1 (555) FLOW-ZONIC" />
              <ContactInfo icon={<MapPin />} label="Office" value="San Francisco, CA (Remote Friendly)" />
            </div>

            <div className="mt-20 p-8 glass rounded-4xl border-primary/20 bg-primary/5">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Rocket className="text-primary" /> Why wait?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Most companies save over 10 hours a week within the first month of implementing our custom automation scripts.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-10 rounded-4xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Full Name" id="name" placeholder="Jane Doe" required />
                <InputGroup label="Email Address" id="email" type="email" placeholder="jane@company.com" required />
              </div>
              <InputGroup label="Service Needed" id="service" type="select" options={["Web Development", "Google Automation", "Graphic Design", "Other"]} />
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold ml-1 text-muted-foreground">How can we help?</label>
                <textarea 
                  id="message" 
                  rows={6}
                  required
                  placeholder="Tell us about your project..."
                  className="glass rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white/50"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"} <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

function ContactInfo({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-6 items-center">
      <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">{label}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}

function InputGroup({ label, id, type = "text", placeholder, options, required = false }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-bold ml-1 text-muted-foreground">{label}</label>
      {type === "select" ? (
        <select 
          id={id} 
          className="glass rounded-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white/50 appearance-none"
        >
          {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      ) : (
        <input 
          id={id}
          type={type}
          required={required}
          placeholder={placeholder}
          className="glass rounded-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white/50"
        />
      )}
    </div>
  );
}
