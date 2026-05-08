
import { getAllPosts } from "@/lib/blog";
import BlogListingClient from "@/components/BlogListingClient";
import { Send, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Insights | Flowzonic Solution",
  description: "Expert advice on web development, Google Workspace automation, and modern design trends.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="pt-32 pb-20 px-6 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge-pill">The Knowledge Flow</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1A1035]">
            Agency <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-xl text-[#4B5563] max-w-2xl mx-auto font-medium">
            Stay ahead of the curve with our latest thoughts on automation, engineering, and digital aesthetics.
          </p>
        </div>

        {/* Client Interactive Area */}
        <BlogListingClient initialPosts={posts} />

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
