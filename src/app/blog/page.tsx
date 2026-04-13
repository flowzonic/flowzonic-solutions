"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const POSTS = [
  {
    title: "The Future of Google Apps Script in 2024",
    excerpt: "How AI and new V8 engine features are revolutionizing workspace automation.",
    date: "March 15, 2024",
    author: "Alex Flow",
    image: PlaceHolderImages.find(img => img.id === "blog-1")?.imageUrl,
    category: "Automation"
  },
  {
    title: "Why Minimalist Design Still Dominates",
    excerpt: "Exploring the power of negative space and premium glossy finishes.",
    date: "March 10, 2024",
    author: "Sarah Design",
    image: PlaceHolderImages.find(img => img.id === "blog-2")?.imageUrl,
    category: "Design"
  },
  {
    title: "Scaling Your Agency with Automated Workflows",
    excerpt: "Practical tips to reclaim 20% of your time every week through scripting.",
    date: "March 5, 2024",
    author: "John Dev",
    image: PlaceHolderImages.find(img => img.id === "mockup-3")?.imageUrl,
    category: "Productivity"
  },
  {
    title: "Choosing the Right Tech Stack for Your Next SaaS",
    excerpt: "A deep dive into why we prefer Next.js and Framer Motion.",
    date: "Feb 28, 2024",
    author: "Alex Flow",
    image: PlaceHolderImages.find(img => img.id === "mockup-1")?.imageUrl,
    category: "Development"
  }
];

export default function Blog() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Insightful <span className="gradient-text">Resources</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Stay updated with the latest trends in automation, design, and web technology.
          </p>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full glass rounded-full py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white/50"
            />
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-2 gap-8 space-y-8">
          {POSTS.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid glass rounded-4xl overflow-hidden group hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={post.image || ""} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <Link href="#" className="font-bold flex items-center gap-2 group/btn">
                  Read More <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}