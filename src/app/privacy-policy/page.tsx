
"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Bell } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-20 px-6 bg-[#FAFBFF]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-pill">Compliance</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-[#1A1035]">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-sm text-[#9CA3AF] mb-12 font-bold uppercase tracking-widest">
            Last Updated: March 2024
          </p>
        </motion.div>

        <section className="space-y-12">
          <div className="card-standard p-10 bg-white/70 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#F0EEFF] text-[#7B2FBE] rounded-xl flex items-center justify-center">
                <Shield size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#1A1035]">Introduction</h2>
            </div>
            <p className="text-[#4B5563] leading-relaxed font-medium mb-4">
              At Flowzonic Solution, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
            </p>
            <p className="text-[#4B5563] leading-relaxed font-medium">
              By using our website, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <div className="card-standard p-10 bg-white/70 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#F0EEFF] text-[#7B2FBE] rounded-xl flex items-center justify-center">
                <Eye size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#1A1035]">Information We Collect</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#1A1035] mb-2">Personal Data</h3>
                <p className="text-[#4B5563] leading-relaxed font-medium text-sm">
                  When you fill out our contact form, we collect your name, email address, phone number, and any details regarding the service you are interested in.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A1035] mb-2">Usage Data</h3>
                <p className="text-[#4B5563] leading-relaxed font-medium text-sm">
                  We may also collect information on how our website is accessed and used. This include your computer's IP address, browser type, and the pages you visit.
                </p>
              </div>
            </div>
          </div>

          <div className="card-standard p-10 bg-white/70 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#F0EEFF] text-[#7B2FBE] rounded-xl flex items-center justify-center">
                <Lock size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#1A1035]">How We Use Information</h2>
            </div>
            <ul className="space-y-4">
              {[
                "To provide and maintain our service.",
                "To notify you about changes to our service.",
                "To provide customer support and answer inquiries.",
                "To gather analysis or valuable information so that we can improve our website.",
                "To monitor the usage of our website.",
                "To detect, prevent, and address technical issues."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#4B5563] font-medium text-sm leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7B2FBE] mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-standard p-10 bg-white/70 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#F0EEFF] text-[#7B2FBE] rounded-xl flex items-center justify-center">
                <Bell size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#1A1035]">Data Security</h2>
            </div>
            <p className="text-[#4B5563] leading-relaxed font-medium text-sm mb-4">
              The security of your data is important to us, but remember that no method of transmission over the Internet is 100% secure. We strive to use commercially acceptable means to protect your Personal Data.
            </p>
            <p className="text-[#4B5563] leading-relaxed font-medium text-sm">
              Inquiries submitted through our forms are stored securely in our Firestore database and managed through automated workflows that ensure minimal human exposure.
            </p>
          </div>

          <div className="card-standard p-10 bg-white/70 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#F0EEFF] text-[#7B2FBE] rounded-xl flex items-center justify-center">
                <FileText size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#1A1035]">Contact Us</h2>
            </div>
            <p className="text-[#4B5563] leading-relaxed font-medium mb-6">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="p-6 bg-[#F0EEFF] rounded-2xl border border-[#EDE9FE]">
              <p className="font-bold text-[#1A1035]">Flowzonic Solution</p>
              <p className="text-sm text-[#4B5563] font-medium">Email: contact@flowzonicsolutions.com</p>
              <p className="text-sm text-[#4B5563] font-medium">Phone: +91 8881907942</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
