
"use client";

import { useState } from "react";
import { useFirestore } from "@/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { Database, CheckCircle2, Loader2, Rocket, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function SeedPage() {
  const db = useFirestore();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const seedData = async () => {
    if (!db) return;
    setLoading(true);

    try {
      // Seed Services
      const services = [
        {
          id: "web",
          title: "Web Development",
          shortDescription: "High-performance, scalable websites built with modern frameworks like React and Next.js.",
          longDescription: "Our engineering-first approach prioritizes core web vitals and speed above all else.",
          iconName: "Code",
          imageUrl: PlaceHolderImages.find(img => img.id === "mockup-1")?.imageUrl || ""
        },
        {
          id: "automation",
          title: "Google Automation",
          shortDescription: "Custom Apps Script solutions that connect Sheets, Docs, and Gmail to save you hundreds of hours.",
          longDescription: "Eliminate human error and manual bottlenecks with intelligent scripts.",
          iconName: "Zap",
          imageUrl: PlaceHolderImages.find(img => img.id === "mockup-3")?.imageUrl || ""
        },
        {
          id: "design",
          title: "Graphic Designing",
          shortDescription: "Glossy, premium brand identities and UI/UX designs that command attention.",
          longDescription: "We create premium visual identities that make your brand impossible to ignore.",
          iconName: "Palette",
          imageUrl: PlaceHolderImages.find(img => img.id === "mockup-2")?.imageUrl || ""
        }
      ];

      for (const s of services) {
        await setDoc(doc(db, "services", s.id), s);
      }

      // Seed Blog Posts
      const posts = [
        {
          id: "script-2024",
          title: "The Future of Google Apps Script in 2024",
          slug: "script-2024",
          content: "Detailed insights into how AI is changing the landscape of automation...",
          publishDate: new Date().toISOString(),
          authorName: "Alex Flow",
          thumbnailImageUrl: PlaceHolderImages.find(img => img.id === "blog-1")?.imageUrl || "",
          seoDescription: "How AI and new V8 engine features are revolutionizing workspace automation.",
          category: "Automation",
          status: "published"
        },
        {
          id: "design-minimalism",
          title: "Why Minimalist Design Still Dominates",
          slug: "design-minimalism",
          content: "Exploring the power of negative space and premium glossy finishes...",
          publishDate: new Date().toISOString(),
          authorName: "Sarah Design",
          thumbnailImageUrl: PlaceHolderImages.find(img => img.id === "blog-2")?.imageUrl || "",
          seoDescription: "Exploring the power of negative space and premium glossy finishes.",
          category: "Design",
          status: "published"
        }
      ];

      for (const p of posts) {
        await setDoc(doc(db, "blog_posts_published", p.id), p);
      }

      // Seed Portfolio
      const portfolio = [
        {
          id: "ecomflow",
          title: "EcomFlow — Shopify Redesign",
          description: "A high-performance analytics dashboard for global logistics monitoring.",
          mockupImageUrl: PlaceHolderImages.find(img => img.id === "mockup-1")?.imageUrl || "",
          category: "Web Development",
          tech: ["Next.js", "Shopify", "Tailwind"],
          result: "Increased conversions by 40%"
        },
        {
          id: "autosheet",
          title: "AutoSheet Pro",
          description: "Custom Apps Script solution syncing real-time sales data from Sheets.",
          mockupImageUrl: PlaceHolderImages.find(img => img.id === "mockup-3")?.imageUrl || "",
          category: "Google Automation",
          tech: ["Apps Script", "Gmail API"],
          result: "Saved 20 hours per week"
        }
      ];

      for (const item of portfolio) {
        await setDoc(doc(db, "portfolio_items", item.id), item);
      }

      setSuccess(true);
    } catch (error) {
      console.error("Error seeding data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-40 pb-20 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full text-center">
        {!success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-premium p-10 rounded-4xl shadow-2xl"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8">
              <Database size={40} />
            </div>
            <h1 className="text-3xl font-bold mb-4">Database Seeder</h1>
            <p className="text-muted-foreground mb-8">
              Click the button below to populate your Firestore with default data and establish the schema.
            </p>
            <button
              onClick={seedData}
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-lg"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Rocket size={20} />}
              {loading ? "Establishing Schema..." : "Seed Default Data"}
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-premium p-10 rounded-4xl shadow-2xl"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8">
              <CheckCircle2 size={40} />
            </div>
            <h1 className="text-3xl font-bold mb-4">Schema Created!</h1>
            <p className="text-muted-foreground mb-10">
              Your Firestore is now populated. Collections for Blog, Services, and Portfolio are live.
            </p>
            <div className="flex flex-col gap-4">
              <Link href="/services" className="btn-primary flex items-center justify-center gap-2">
                View Live Services <Rocket size={18} />
              </Link>
              <Link href="/" className="text-primary font-bold flex items-center justify-center gap-2 hover:underline">
                <ArrowLeft size={18} /> Back to Home
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
