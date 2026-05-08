
"use client";

import { motion } from "framer-motion";
import { FileText, Scale, Zap, CreditCard, HelpCircle } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="pt-32 pb-20 px-6 bg-[#FAFBFF]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-pill">Legal</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-[#1A1035]">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-sm text-[#9CA3AF] mb-12 font-bold uppercase tracking-widest">
            Effective Date: March 2024
          </p>
        </motion.div>

        <section className="space-y-12">
          <div className="card-standard p-10 bg-white/70 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#F0EEFF] text-[#7B2FBE] rounded-xl flex items-center justify-center">
                <Scale size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#1A1035]">Agreement to Terms</h2>
            </div>
            <p className="text-[#4B5563] leading-relaxed font-medium mb-4">
              By accessing or using the services provided by Flowzonic Solution, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you are prohibited from using our services.
            </p>
          </div>

          <div className="card-standard p-10 bg-white/70 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#F0EEFF] text-[#7B2FBE] rounded-xl flex items-center justify-center">
                <Zap size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#1A1035]">Services Provided</h2>
            </div>
            <p className="text-[#4B5563] leading-relaxed font-medium mb-4">
              Flowzonic Solution provides Web Development, Google Workspace Automation, and Graphic Design services. Specific deliverables and timelines are outlined in individual project proposals provided to the client.
            </p>
          </div>

          <div className="card-standard p-10 bg-white/70 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#F0EEFF] text-[#7B2FBE] rounded-xl flex items-center justify-center">
                <CreditCard size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#1A1035]">Payment Terms</h2>
            </div>
            <ul className="space-y-4 mb-6">
              {[
                "A 50% non-refundable deposit is required to initiate any project.",
                "The remaining 50% is due upon project completion and before final delivery of assets.",
                "Fixed pricing applies as quoted in the proposal; any additional features requested later may incur extra costs.",
                "We accept UPI, Bank Transfers, and major Credit/Debit cards."
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
                <FileText size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#1A1035]">Intellectual Property</h2>
            </div>
            <p className="text-[#4B5563] leading-relaxed font-medium text-sm mb-4">
              Upon final payment, the client receives full ownership of the final deliverables (source code, design files, etc.). Flowzonic Solution retains the right to showcase the work in its portfolio for promotional purposes unless otherwise agreed in writing.
            </p>
          </div>

          <div className="card-standard p-10 bg-white/70 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#F0EEFF] text-[#7B2FBE] rounded-xl flex items-center justify-center">
                <HelpCircle size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#1A1035]">Revisions & Support</h2>
            </div>
            <p className="text-[#4B5563] leading-relaxed font-medium text-sm mb-4">
              We offer unlimited revisions during the design and development phase to ensure 100% satisfaction. Once the project is live, we provide a 30-day post-launch support period for bug fixes and minor adjustments.
            </p>
            <p className="text-[#4B5563] leading-relaxed font-medium text-sm">
              Ongoing maintenance after the support period is available as a separate monthly package.
            </p>
          </div>

          <div className="card-standard p-10 bg-white/70 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#F0EEFF] text-[#7B2FBE] rounded-xl flex items-center justify-center">
                <Scale size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#1A1035]">Limitation of Liability</h2>
            </div>
            <p className="text-[#4B5563] leading-relaxed font-medium text-sm">
              Flowzonic Solution will not be liable for any indirect, incidental, or consequential damages resulting from the use of our services or any technical issues that may arise post-delivery.
            </p>
          </div>
        </section>

        <div className="mt-20 text-center">
          <p className="text-[#9CA3AF] text-sm font-medium">
            By continuing to use Flowzonic Solution, you acknowledge that you have read and understood these terms.
          </p>
        </div>
      </div>
    </main>
  );
}
