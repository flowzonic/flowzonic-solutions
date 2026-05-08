
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Search, Clock, Tag, Sparkles, Send } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { motion } from "framer-motion";

export const metadata = {
  title: "Insights | Flowzonic Solution",
  description: "Expert advice on web development, Google Workspace automation, and modern design trends.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <main className="pt-32 pb-20 px-6 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto">
        {/* Header & Search */}
        <div className="text-center mb-16">
          <span className="badge-pill">The Knowledge Flow</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1A1035]">
            Agency <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-xl text-[#4B5563] max-w-2xl mx-auto mb-10 font-medium">
            Stay ahead of the curve with our latest thoughts on automation, engineering, and digital aesthetics.
          </p>
          
          <div className="relative max-w-xl mx-auto group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#9CA3AF] group-focus-within:text-[#7B2FBE] transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search articles, guides, and news..." 
              className="w-full px-4 py-5 pl-14 pr-6 rounded-2xl border border-[#EDE9FE] bg-white text-[#1A1035] focus:outline-none focus:ring-4 focus:ring-[#7B2FBE]/5 focus:border-[#7B2FBE] transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Featured Post - Hero */}
        {featuredPost && (
          <section className="mb-20">
            <Link href={`/blog/${featuredPost.slug}`} className="group">
              <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#EDE9FE]">
                <Image 
                  src={featuredPost.coverImage} 
                  alt={featuredPost.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
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
          </section>
        )}

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["All Insights", "Automation", "Engineering", "Design", "Case Studies"].map((cat) => (
            <button key={cat} className="px-6 py-2.5 rounded-full border border-[#EDE9FE] bg-white text-sm font-bold text-[#4B5563] hover:border-[#7B2FBE] hover:text-[#7B2FBE] transition-all shadow-sm">
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {remainingPosts.map((post, i) => (
            <div
              key={post.slug}
              className="card-standard p-0 overflow-hidden group flex flex-col h-full border-[#EDE9FE]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={post.coverImage} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-[#7B2FBE] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                    {post.tags[0] || "Article"}
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
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <section className="bg-[#1A1035] rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7B2FBE]/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-[#A855F7] mx-auto mb-8 border border-white/10">
              <Send size={28} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stay in <span className="text-[#A855F7]">the Flow</span></h2>
            <p className="text-[#C4B5FD] text-lg mb-10 font-medium">
              Join 5,000+ visionaries who receive our weekly breakdown of the latest in automation and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#7B2FBE] transition-all"
              />
              <button className="px-8 py-4 rounded-full bg-white text-[#1A1035] font-bold hover:bg-[#F0EEFF] transition-all flex items-center justify-center gap-2">
                Subscribe <ArrowRight size={18} />
              </button>
            </div>
            <p className="mt-6 text-[#9CA3AF] text-xs font-medium">✓ No spam, just value. Unsubscribe anytime.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
