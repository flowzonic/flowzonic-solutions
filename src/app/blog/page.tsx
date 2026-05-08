
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Search, Clock, Tag } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Flowzonic Solution Insights",
  description: "Expert insights on web development, Google Workspace automation, and modern design trends.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="pt-32 pb-20 px-6 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="badge-pill">Knowledge Hub</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1A1035]">
            Flowzonic <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-xl text-[#4B5563] max-w-2xl mx-auto mb-10 font-medium">
            Stay updated with the latest trends in automation, design, and web technology.
          </p>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={20} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full px-4 py-4 pl-14 pr-6 rounded-full border border-[#EDE9FE] bg-white text-[#1A1035] focus:outline-none focus:ring-2 focus:ring-[#A855F7]/10 transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div
              key={post.slug}
              className="card-standard p-0 overflow-hidden group flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={post.coverImage} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#7B2FBE] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    {post.tags[0] || "Article"}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-4 text-xs text-[#9CA3AF] mb-4 font-bold">
                  <span className="flex items-center gap-1"><Calendar size={12} className="text-[#7B2FBE]" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} className="text-[#7B2FBE]" /> {post.readingTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-[#1A1035] group-hover:text-[#7B2FBE] transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-[#4B5563] leading-relaxed mb-8 line-clamp-3 font-medium text-sm">
                  {post.description}
                </p>
                <div className="mt-auto">
                  <Link href={`/blog/${post.slug}`} className="text-[#7B2FBE] font-bold flex items-center gap-2 group/btn hover:gap-3 transition-all">
                    Read Full Story <ArrowRight size={18} className="transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#EDE9FE] shadow-sm">
            <p className="text-xl text-[#4B5563] font-medium">New insights arriving soon. Stay tuned!</p>
          </div>
        )}
      </div>
    </main>
  );
}
