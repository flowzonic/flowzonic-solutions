"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Loader2,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { useFirestore } from "@/firebase";
import { collection } from "firebase/firestore";
import { addDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { analyzeLead } from "@/ai/flows/analyze-lead-flow";

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

export default function Contact() {
  const { toast } = useToast();
  const db = useFirestore();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [debugUrlMissing, setDebugUrlMissing] = useState(false);

  useEffect(() => {
    if (!APPS_SCRIPT_URL && process.env.NODE_ENV === "development") {
      setDebugUrlMissing(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const submissionId = crypto.randomUUID();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = (formData.get("phone") as string) || "";
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    try {
      let aiAnalysis = null;

      try {
        aiAnalysis = await analyzeLead({ name, service, message });
      } catch (aiError) {
        console.warn("AI Analysis failed:", aiError);
      }

      const submissionData = {
        id: submissionId,
        name,
        email,
        phone,
        service,
        message,
        submissionDateTime: new Date().toISOString(),
        status: "new",
        aiPriority: aiAnalysis?.priority || "medium",
        aiSummary: aiAnalysis?.summary || "No summary available",
        aiNextStep: aiAnalysis?.suggestedNextStep || "Review manually",
      };

      if (db) {
        const colRef = collection(db, "contact_submissions");
        addDocumentNonBlocking(colRef, submissionData);
      }

      if (APPS_SCRIPT_URL) {
        try {
          await fetch(APPS_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify(submissionData),
          });
        } catch (fetchError) {
          console.error(fetchError);
        }
      }

      toast({
        title: "Message Sent!",
        description:
          "Flow initiated. Our team will contact you within 24 hours.",
      });

      setSuccess(true);
    } catch (error) {
      console.error(error);

      toast({
        variant: "destructive",
        title: "Submission Failed",
        description:
          "Something went wrong. Please try again or contact us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative overflow-hidden bg-[#FAFBFF] pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#A855F7]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#7B2FBE]/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {debugUrlMissing && (
          <div className="mb-8 p-4 rounded-2xl border border-amber-200 bg-amber-50 text-amber-700 text-sm">
            <p>
              <strong>Dev Hint:</strong> NEXT_PUBLIC_APPS_SCRIPT_URL is missing.
            </p>
          </div>
        )}

        <AnimatePresence mode="wait">
          {!success ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center"
            >
              {/* LEFT SIDE */}
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0EEFF] border border-[#EDE9FE] text-[#7B2FBE] text-sm font-semibold mb-6">
                  <Sparkles size={16} />
                  Get In Touch
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-[#1A1035]">
                  Let’s Build Something{" "}
                  <span className="bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] bg-clip-text text-transparent">
                    Amazing
                  </span>
                </h1>

                <p className="mt-6 text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl">
                  Tell us about your project and we’ll help you automate,
                  design, and scale your business with modern digital solutions.
                </p>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                  <GlassCard
                    icon={<Mail size={20} />}
                    title="Email"
                    value="contact@flowzonicsolutions.com"
                  />

                  <GlassCard
                    icon={<Phone size={20} />}
                    title="Phone"
                    value="+91 8881907942"
                  />

                  <GlassCard
                    icon={<MapPin size={20} />}
                    title="Location"
                    value="Lucknow, India"
                  />

                  <GlassCard
                    icon={<Rocket size={20} />}
                    title="Response Time"
                    value="Within 24 Hours"
                  />
                </div>

                {/* Bottom Info */}
                <div className="mt-10 p-6 rounded-3xl border border-[#EDE9FE] bg-white/80 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0EEFF] flex items-center justify-center text-[#7B2FBE]">
                      <Sparkles />
                    </div>

                    <div>
                      <h3 className="font-bold text-[#1A1035] text-lg">
                        AI Powered Workflow
                      </h3>
                      <p className="text-sm text-[#6B7280]">
                        Smart lead routing & automation
                      </p>
                    </div>
                  </div>

                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    Every inquiry is analyzed instantly and routed to the right
                    expert so your project gets faster responses and better
                    execution.
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7B2FBE]/10 to-[#A855F7]/10 blur-3xl rounded-[40px]"></div>

                <div className="relative bg-white/80 backdrop-blur-xl border border-[#EDE9FE] rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-2xl">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-[#1A1035]">
                      Start Your Project
                    </h2>

                    <p className="text-[#6B7280] mt-2">
                      Fill in the details and we’ll connect with you shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <InputGroup
                        label="Full Name"
                        name="name"
                        id="name"
                        placeholder="John Doe"
                        required
                      />

                      <InputGroup
                        label="Email Address"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <InputGroup
                        label="Phone Number"
                        name="phone"
                        id="phone"
                        placeholder="+91..."
                      />

                      <InputGroup
                        label="Service"
                        name="service"
                        id="service"
                        type="select"
                        options={[
                          "Web Development",
                          "Google Automation",
                          "Graphic Design",
                          "Other",
                        ]}
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-semibold text-[#1A1035]">
                        Project Details
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        placeholder="Tell us about your project..."
                        className="w-full rounded-2xl border border-[#EDE9FE] bg-[#FCFCFF] px-5 py-4 text-[#1A1035] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-4 focus:ring-[#A855F7]/10 focus:border-[#A855F7] transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative overflow-hidden w-full rounded-2xl bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] px-6 py-4 text-white font-semibold text-lg transition-all hover:scale-[1.01] hover:shadow-2xl hover:shadow-purple-300/40 disabled:opacity-60"
                    >
                      <span className="relative flex items-center justify-center gap-2">
                        {loading ? (
                          <>
                            <Loader2 className="animate-spin" size={20} />
                            Processing...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={18} />
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-3xl mx-auto text-center py-20"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-[#DCFCE7] border border-[#BBF7D0] flex items-center justify-center text-[#15803D] mb-8 shadow-lg">
                <CheckCircle2 size={42} />
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-[#1A1035] mb-5">
                Flow <span className="text-[#7B2FBE]">Initiated!</span>
              </h2>

              <p className="text-lg text-[#4B5563] leading-relaxed mb-10">
                Thank you for reaching out. Your inquiry has been successfully
                submitted and synced with our automation workflow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-3 rounded-2xl bg-[#F0EEFF] text-[#7B2FBE] font-semibold hover:bg-[#E9E4FF] transition-all"
                >
                  Send Another Message
                </button>

                <Link
                  href="/services"
                  className="px-6 py-3 rounded-2xl text-white bg-gradient-to-r from-[#7B2FBE] to-[#A855F7] font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all"
                >
                  Explore Services
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function GlassCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="group rounded-3xl border border-[#EDE9FE] bg-white/80 backdrop-blur-xl p-5 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl">
      <div className="w-12 h-12 rounded-2xl bg-[#F0EEFF] flex items-center justify-center text-[#7B2FBE] mb-4">
        {icon}
      </div>

      <p className="text-xs font-bold tracking-widest uppercase text-[#9CA3AF] mb-1">
        {title}
      </p>

      <p className="text-sm sm:text-base font-semibold text-[#1A1035] break-words">
        {value}
      </p>
    </div>
  );
}

function InputGroup({
  label,
  id,
  name,
  type = "text",
  placeholder,
  options,
  required = false,
}: any) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-semibold text-[#1A1035]"
      >
        {label}
      </label>

      {type === "select" ? (
        <div className="relative">
          <select
            id={id}
            name={name}
            className="w-full rounded-2xl border border-[#EDE9FE] bg-[#FCFCFF] px-5 py-4 text-[#1A1035] focus:outline-none focus:ring-4 focus:ring-[#A855F7]/10 focus:border-[#A855F7] appearance-none transition-all"
          >
            {options.map((opt: string) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7B2FBE] pointer-events-none">
            <Rocket size={16} className="rotate-90" />
          </div>
        </div>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-[#EDE9FE] bg-[#FCFCFF] px-5 py-4 text-[#1A1035] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-4 focus:ring-[#A855F7]/10 focus:border-[#A855F7] transition-all"
        />
      )}
    </div>
  );
}