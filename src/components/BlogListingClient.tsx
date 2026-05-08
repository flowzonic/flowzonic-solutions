"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Search, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BlogPost } from "@/lib/blog";
import { cn } from "@/lib/utils";

interface BlogListingClientProps {
  initialPosts: BlogPost[];
}

const CATEGORIES = ["All Insights", "Automation", "Engineering", "Design", "Case Studies"];

export default function BlogListingClient({ initialPosts }: BlogListingClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Insights");

  const filteredPosts = useMemo(() => {
    if (!initialPosts) return [];
    return initialPosts.filter((post) => {
      const title = post.title || "";
      const description = post.description || "";
      const tags = post.tags || [];
      
      const matchesSearch = 
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        activeCategory === "All Insights" || 
        tags.some(tag => (tag || "").toLowerCase() === activeCategory.toLowerCase());

      return matchesSearch && matchesCategory;
    });
  }, [initialPosts, searchQuery, activeCategory]);

  const featuredPost = activeCategory === "All Insights" && searchQuery === "" && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="min-h-[400px]">
      {/* Search & Categories */}
      <div className="text-center mb-16">
        <div className="relative max-w-xl mx-auto group mb-12">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#9CA3AF] group-focus-within:text-[#7B2FBE] transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search articles, guides, and news..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-5 pl-14 pr-6 rounded-2xl border border-[#EDE9FE] bg-white text-[#1A1035] focus:outline-none focus:ring-4 focus:ring-[#7B2FBE]/5 focus:border-[#7B2FBE] transition-all shadow-sm"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full border transition-all shadow-sm text-sm font-bold",
                activeCategory === cat 
                  ? "bg-[#7B2FBE] text-white border-[#7B2FBE]" 
                  : "bg-white border-[#EDE9FE] text-[#4B5563] hover:border-[#7B2FBE] hover:text-[#7B2FBE]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      <AnimatePresence mode="wait">
        {featuredPost && (
          <motion.section 
            key="featured"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-20"
          >
            <Link href={`/blog/${featuredPost.slug}`} className="group">
              <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#EDE9FE]">
                {featuredPost.coverImage ? (
                  <Image 
                    src={featuredPost.coverImage} 
                    alt={featuredPost.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-violet-50" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1035] via-[#1A1035]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-3xl">
                  <span className="bg-[#7B2FBE] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">
                    Featured Insight
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-[#C4B5FD] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <div className="flex items-center gap-6 text-white/70 font-medium text-sm">
                    <span className="flex items-center gap-2"><User size={16} className="text-[#A855F7]" /> {featuredPost.author}</span>
                    <span className="flex items-center gap-2"><Clock size={16} className="text-[#A855F7]" /> {featuredPost.readingTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Grid Posts */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
      >
        <AnimatePresence mode="popLayout">
          {gridPosts.map((post) => (
            <motion.div
              layout
              key={post.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="card-standard p-0 overflow-hidden group flex flex-col h-full border-[#EDE9FE]"
            >
              <div className="relative h-64 overflow-hidden bg-gray-50">
                {post.coverImage ? (
                  <Image 
                    src={post.coverImage} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50" />
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-[#7B2FBE] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                    {(post.tags && post.tags[0]) || "Article"}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-[#9CA3AF] mb-4 font-bold">
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#7B2FBE]" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#7B2FBE]" /> {post.readingTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#1A1035] group-hover:text-[#7B2FBE] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-[#4B5563] leading-relaxed mb-8 line-clamp-3 font-medium text-sm">
                  {post.description}
                </p>
                <div className="mt-auto pt-6 border-t border-[#F0EEFF]">
                  <Link href={`/blog/${post.slug}`} className="text-[#7B2FBE] font-bold flex items-center justify-between group/btn">
                    <span>Read Article</span>
                    <div className="w-10 h-10 rounded-full bg-[#F0EEFF] flex items-center justify-center group-hover/btn:bg-[#7B2FBE] group-hover/btn:text-white transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-20 bg-white border border-[#EDE9FE] rounded-[2.5rem] mb-32">
          <p className="text-xl text-[#4B5563] font-medium">No articles found matching your criteria.</p>
          <button 
            onClick={() => { setSearchQuery(""); setActiveCategory("All Insights"); }}
            className="text-[#7B2FBE] font-bold mt-4 hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}