
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Phone, Mail, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { useFirestore } from "@/firebase";
import { collection } from "firebase/firestore";
import { addDocumentNonBlocking } from "@/firebase/non-blocking-updates";

// Pulled from environment variables for security and Vercel compatibility
const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL; 

export default function Contact() {
  const { toast } = useToast();
  const db = useFirestore();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const submissionId = crypto.randomUUID();
    const submissionData = {
      id: submissionId,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      service: formData.get("service") as string,
      message: formData.get("message") as string,
      submissionDateTime: new Date().toISOString(),
      status: "new"
    };

    try {
      // 1. Save to Firestore (Persistent Backup)
      if (db) {
        const colRef = collection(db, "contact_submissions");
        addDocumentNonBlocking(colRef, submissionData);
      }

      // 2. Send to Google Apps Script (Sheets + Email Automation)
      if (APPS_SCRIPT_URL) {
        await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        });
      }

      toast({
        title: "Message Sent!",
        description: "Flow initiated. Our team will contact you within 24 hours.",
      });
      setSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Something went wrong. Please try again or contact us via email.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-32 pb-20 px-6 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!success ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-20"
            >
              <div>
                <span className="badge-pill">Get in Touch</span>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1A1035]">Let&apos;s <span className="gradient-text">Connect</span></h1>
                <p className="text-xl text-[#4B5563] mb-12 font-medium">
                  Have a project in mind? We&apos;d love to hear how we can help you automate your vision.
                </p>

                <div className="space-y-8">
                  <ContactInfo icon={<Mail />} label="Email" value="flowzonicsolutions@gmail.com" />
                  <ContactInfo icon={<Phone />} label="Phone" value="+91 8881907942" />
                  <ContactInfo icon={<MapPin />} label="Office" value="Lucknow, Uttar Pradesh, India" />
                </div>

                <div className="mt-20 p-8 bg-[#F0EEFF] border border-[#EDE9FE] rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#1A1035]">
                    <Rocket className="text-[#7B2FBE]" /> Why wait?
                  </h3>
                  <p className="text-[#4B5563] leading-relaxed font-medium">
                    Most companies save over 10 hours a week within the first month of implementing our custom automation workflows.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white border border-[#EDE9FE] p-10 rounded-2xl shadow-xl"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputGroup label="Full Name" name="name" id="name" placeholder="Jane Doe" required />
                    <InputGroup label="Email Address" name="email" id="email" type="email" placeholder="jane@company.com" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputGroup label="Phone Number" name="phone" id="phone" placeholder="+91 ..." />
                    <InputGroup label="Service Needed" name="service" id="service" type="select" options={["Web Development", "Google Automation", "Graphic Design", "Other"]} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="block text-sm font-medium text-[#1A1035] mb-2">How can we help?</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-xl border border-[#EDE9FE] bg-white text-[#1A1035] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/10 transition-all duration-200"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] hover:opacity-90 hover:shadow-lg hover:shadow-purple-200 transition-all duration-200 w-full flex items-center justify-center gap-2 text-lg disabled:opacity-50"
                  >
                    {loading ? "Processing Flow..." : "Send Message"} <Send size={20} />
                  </button>
                </form>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-3xl mx-auto text-center py-20"
            >
              <div className="w-20 h-20 bg-[#DCFCE7] border border-[#BBF7D0] rounded-full flex items-center justify-center text-[#15803D] mx-auto mb-8">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1035]">Flow <span className="text-[#7B2FBE]">Initiated!</span></h2>
              <p className="text-xl text-[#4B5563] mb-12 font-medium">
                Thank you for reaching out. Your request has been successfully captured. Our automation engine is now syncing this to our team dashboard.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setSuccess(false)}
                  className="px-6 py-3 rounded-full font-medium text-[#7B2FBE] bg-[#F0EEFF] hover:bg-[#EDE9FE] transition-all duration-200"
                >
                  Send Another Message
                </button>
                <Link 
                  href="/services" 
                  className="px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] hover:opacity-90 hover:shadow-lg hover:shadow-purple-200 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Explore Services <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function ContactInfo({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-6 items-center">
      <div className="w-14 h-14 bg-[#F0EEFF] rounded-2xl flex items-center justify-center text-[#7B2FBE] border border-[#EDE9FE]">
        {icon}
      </div>
      <div>
        <p className="text-xs text-[#9CA3AF] font-bold uppercase tracking-widest">{label}</p>
        <p className="text-xl font-bold text-[#1A1035]">{value}</p>
      </div>
    </div>
  );
}

function InputGroup({ label, id, name, type = "text", placeholder, options, required = false }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="block text-sm font-medium text-[#1A1035] mb-2">{label}</label>
      {type === "select" ? (
        <select 
          id={id} 
          name={name}
          className="w-full px-4 py-3 rounded-xl border border-[#EDE9FE] bg-white text-[#1A1035] appearance-none focus:outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/10 transition-all duration-200"
        >
          {options.map((opt: string) => <option key={opt} value={opt} className="bg-white">{opt}</option>)}
        </select>
      ) : (
        <input 
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-xl border border-[#EDE9FE] bg-white text-[#1A1035] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/10 transition-all duration-200"
        />
      )}
    </div>
  );
}
