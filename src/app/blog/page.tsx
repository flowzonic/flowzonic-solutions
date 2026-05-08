import { getAllPosts } from "@/lib/blog";
import BlogListingClient from "@/components/BlogListingClient";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Insights | Flowzonic Solution",
  description: "Expert advice on web development, Google Workspace automation, and modern design trends.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 pt-28 pb-0 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Top label row */}
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <span className="w-6 h-px bg-gray-900" />
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-gray-400">
              Flowzonic · Insights
            </span>
          </div>

          {/* Headline — editorial outlined type */}
          <div className="mb-10 overflow-hidden">
            <h1
              className="font-black uppercase leading-[0.88] tracking-[-0.03em] text-gray-900 block"
              style={{ fontSize: "clamp(2.8rem, 11vw, 9.5rem)" }}
            >
              Agency
            </h1>
            <h1
              className="font-black uppercase leading-[0.88] tracking-[-0.03em] block"
              style={{
                fontSize: "clamp(2.8rem, 11vw, 9.5rem)",
                WebkitTextStroke: "2px #111111",
                color: "transparent",
              }}
            >
              Insights
            </h1>
          </div>

          {/* Bottom strip — sub copy + stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-10 border-t border-gray-100 pt-8">
            <p className="text-gray-500 text-base leading-relaxed max-w-sm">
              Expert perspectives on automation, engineering, and the digital craft — updated weekly.
            </p>
            <div className="flex items-start sm:justify-end gap-8 sm:gap-10">
              {[
                { value: `${posts.length}+`, label: "Articles" },
                { value: "5K+",             label: "Readers" },
                { value: "Weekly",          label: "Updates" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-xl sm:text-2xl font-black text-gray-900 leading-none">{value}</p>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-gray-400 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog Listing ──────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-14 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <BlogListingClient initialPosts={posts} />
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 pb-20 sm:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="border border-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left — dark panel */}
              <div className="bg-gray-900 px-8 sm:px-10 py-12 sm:py-14">
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-gray-500 mb-7">
                  Weekly Newsletter
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-5">
                  Stay in<br />the flow.
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-xs">
                  Join 5,000+ readers who get our weekly breakdown on automation, design, and engineering.
                </p>
                <div className="flex flex-col gap-3">
                  {["No spam, ever", "Unsubscribe anytime", "Pure value only"].map((t) => (
                    <div key={t} className="flex items-center gap-3 text-gray-400 text-sm">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center text-[9px] text-gray-300">✓</span>
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — white form panel */}
              <div className="bg-white px-8 sm:px-10 py-12 sm:py-14 flex flex-col justify-center">
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-gray-400 mb-5">
                  Drop your email
                </p>
                <p className="text-xl sm:text-2xl font-black text-gray-900 leading-tight mb-8">
                  Get the weekly digest →
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-900 transition-all text-sm font-medium bg-gray-50"
                  />
                  <button className="w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 bg-gray-900 text-white hover:bg-gray-800 active:scale-[0.99] transition-all">
                    Subscribe Now <ArrowRight size={15} />
                  </button>
                </div>
                <p className="mt-6 text-gray-400 text-xs font-medium">
                  Trusted by teams at Notion, Linear, Vercel & more
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}