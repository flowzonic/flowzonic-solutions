
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, Clock, ArrowLeft, Share2, ArrowRight, Bookmark, Facebook, Twitter, Linkedin } from "lucide-react";
import { getPostBySlug, getPostSlugs, getAllPosts } from "@/lib/blog";
import ReadingProgressBar from "@/components/ReadingProgressBar";

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: `${post.title} | Flowzonic Solution`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        images: [post.coverImage],
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
      },
    };
  } catch {
    return { title: 'Post Not Found' };
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch (e) {
    return notFound();
  }

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <ReadingProgressBar />
      <main className="pt-32 pb-20 bg-[#FAFBFF]">
        {/* Post Hero */}
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#7B2FBE] font-bold mb-10 hover:gap-3 transition-all group">
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Back to Insights
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-[#7B2FBE] mb-8">
              {post.tags.map(tag => (
                <span key={tag} className="bg-[#F0EEFF] px-4 py-1.5 rounded-full border border-[#DDD6FE]">{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-[#1A1035] mb-10 leading-[1.05] tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-between gap-8 pb-12 border-b border-[#EDE9FE]">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#7B2FBE] to-[#A855F7] rounded-full flex items-center justify-center text-white shadow-lg">
                    <User size={28} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#1A1035]">{post.author}</p>
                    <p className="text-[10px] text-[#9CA3AF] uppercase tracking-widest font-bold">Author & Strategist</p>
                  </div>
                </div>
                <div className="h-10 w-px bg-[#EDE9FE] hidden sm:block" />
                <div className="space-y-1">
                  <p className="text-sm font-bold text-[#1A1035] flex items-center gap-2">
                    <Calendar size={16} className="text-[#7B2FBE]" /> {post.date}
                  </p>
                  <p className="text-[10px] text-[#9CA3AF] uppercase tracking-widest font-bold">Published On</p>
                </div>
                <div className="h-10 w-px bg-[#EDE9FE] hidden sm:block" />
                <div className="space-y-1">
                  <p className="text-sm font-bold text-[#1A1035] flex items-center gap-2">
                    <Clock size={16} className="text-[#7B2FBE]" /> {post.readingTime}
                  </p>
                  <p className="text-[10px] text-[#9CA3AF] uppercase tracking-widest font-bold">Read Time</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="w-12 h-12 rounded-full border border-[#EDE9FE] bg-white flex items-center justify-center text-[#4B5563] hover:text-[#7B2FBE] hover:border-[#7B2FBE] transition-all shadow-sm">
                  <Bookmark size={18} />
                </button>
                <button className="w-12 h-12 rounded-full border border-[#EDE9FE] bg-white flex items-center justify-center text-[#4B5563] hover:text-[#7B2FBE] hover:border-[#7B2FBE] transition-all shadow-sm">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </header>

          <div className="relative aspect-[21/10] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image 
              src={post.coverImage} 
              alt={post.title} 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
          {/* Side Info */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 space-y-12">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF] mb-6">Table of Contents</h4>
                <nav className="space-y-4">
                  <p className="text-sm font-bold text-[#7B2FBE] cursor-pointer hover:underline">Introduction</p>
                  <p className="text-sm font-medium text-[#4B5563] cursor-pointer hover:text-[#7B2FBE] transition-colors">The Problem Space</p>
                  <p className="text-sm font-medium text-[#4B5563] cursor-pointer hover:text-[#7B2FBE] transition-colors">Proposed Solutions</p>
                  <p className="text-sm font-medium text-[#4B5563] cursor-pointer hover:text-[#7B2FBE] transition-colors">Implementation Flow</p>
                  <p className="text-sm font-medium text-[#4B5563] cursor-pointer hover:text-[#7B2FBE] transition-colors">Conclusion</p>
                </nav>
              </div>
              
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF] mb-6">Share This Flow</h4>
                <div className="flex flex-col gap-3">
                  <button className="flex items-center gap-3 text-sm font-bold text-[#4B5563] hover:text-[#7B2FBE] transition-colors">
                    <Twitter size={16} /> Twitter
                  </button>
                  <button className="flex items-center gap-3 text-sm font-bold text-[#4B5563] hover:text-[#7B2FBE] transition-colors">
                    <Linkedin size={16} /> LinkedIn
                  </button>
                  <button className="flex items-center gap-3 text-sm font-bold text-[#4B5563] hover:text-[#7B2FBE] transition-colors">
                    <Facebook size={16} /> Facebook
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Article Body */}
          <article className="lg:col-span-6">
            <div 
              className="prose prose-xl max-w-none prose-headings:text-[#1A1035] prose-headings:font-bold prose-headings:tracking-tight prose-p:text-[#4B5563] prose-p:leading-relaxed prose-a:text-[#7B2FBE] prose-a:font-bold prose-blockquote:border-l-[#7B2FBE] prose-blockquote:bg-[#F0EEFF] prose-blockquote:px-8 prose-blockquote:py-4 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-strong:text-[#1A1035] prose-code:bg-[#F0EEFF] prose-code:text-[#7B2FBE] prose-code:px-2 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none prose-img:rounded-3xl prose-img:shadow-xl font-medium"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <footer className="mt-20 pt-12 border-t border-[#EDE9FE]">
              <div className="bg-[#F0EEFF] p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#7B2FBE] to-[#A855F7] rounded-3xl flex items-center justify-center text-white shrink-0 shadow-xl">
                  <User size={48} />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-bold text-[#1A1035] mb-2">{post.author}</h4>
                  <p className="text-[#4B5563] mb-6 font-medium leading-relaxed">
                    Lead strategist at Flowzonic Solution. Passionate about exploring the intersection of human-centric design and scalable automation.
                  </p>
                  <div className="flex justify-center md:justify-start gap-4">
                    <button className="px-6 py-2 rounded-full border border-[#DDD6FE] bg-white text-xs font-bold text-[#7B2FBE] hover:bg-[#F0EEFF] transition-all">
                      View Profile
                    </button>
                    <button className="px-6 py-2 rounded-full border border-[#DDD6FE] bg-white text-xs font-bold text-[#7B2FBE] hover:bg-[#F0EEFF] transition-all">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </footer>
          </article>

          {/* Right Gutter / Stats */}
          <aside className="hidden lg:block lg:col-span-3">
             <div className="sticky top-32">
                <div className="p-8 bg-white border border-[#EDE9FE] rounded-3xl shadow-sm mb-8">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF] mb-6">Article Engagement</h4>
                  <div className="space-y-6">
                    <div>
                      <p className="text-2xl font-bold text-[#1A1035]">1,204</p>
                      <p className="text-[10px] text-[#9CA3AF] uppercase tracking-widest font-bold">Views</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#1A1035]">15 min</p>
                      <p className="text-[10px] text-[#9CA3AF] uppercase tracking-widest font-bold">Avg. Read Time</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-gradient-to-br from-[#7B2FBE] to-[#A855F7] rounded-3xl shadow-xl text-white">
                  <Sparkles size={28} className="mb-4" />
                  <h4 className="text-xl font-bold mb-4 leading-tight">Build your vision with us.</h4>
                  <p className="text-white/80 text-sm mb-6 font-medium">Ready to automate your digital workflow? Let's connect.</p>
                  <Link href="/contact" className="w-full py-3 bg-white text-[#7B2FBE] rounded-full font-bold text-sm inline-block text-center hover:bg-[#F0EEFF] transition-all">
                    Get Started
                  </Link>
                </div>
             </div>
          </aside>
        </div>

        {/* Navigation / Prev Next */}
        <div className="max-w-5xl mx-auto px-6 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <Link href="/blog" className="p-8 bg-white border border-[#EDE9FE] rounded-3xl hover:border-[#7B2FBE] transition-all flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-[#F0EEFF] flex items-center justify-center text-[#7B2FBE] group-hover:bg-[#7B2FBE] group-hover:text-white transition-all">
                   <ArrowLeft size={20} />
                </div>
                <div>
                   <p className="text-[10px] text-[#9CA3AF] uppercase tracking-widest font-bold mb-1">Previous</p>
                   <p className="font-bold text-[#1A1035] group-hover:text-[#7B2FBE] transition-colors">Mastering Next.js 15</p>
                </div>
             </Link>
             <Link href="/blog" className="p-8 bg-white border border-[#EDE9FE] rounded-3xl hover:border-[#7B2FBE] transition-all flex flex-row-reverse items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-[#F0EEFF] flex items-center justify-center text-[#7B2FBE] group-hover:bg-[#7B2FBE] group-hover:text-white transition-all">
                   <ArrowRight size={20} />
                </div>
                <div className="text-right">
                   <p className="text-[10px] text-[#9CA3AF] uppercase tracking-widest font-bold mb-1">Next</p>
                   <p className="font-bold text-[#1A1035] group-hover:text-[#7B2FBE] transition-colors">Apps Script Magic</p>
                </div>
             </Link>
          </div>
        </div>

        {/* Related Section */}
        <section className="max-w-7xl mx-auto px-6 mt-32">
          <div className="text-center mb-16">
            <span className="badge-pill">Keep Reading</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1035]">Related <span className="gradient-text">Insights</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((rp) => (
              <Link href={`/blog/${rp.slug}`} key={rp.slug} className="group">
                <div className="card-standard p-0 overflow-hidden h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={rp.coverImage} alt={rp.title} fill className="object-cover transition-transform group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-[#1A1035] group-hover:text-[#7B2FBE] transition-colors mb-3 line-clamp-1">{rp.title}</h4>
                    <div className="flex items-center justify-between">
                       <p className="text-[10px] text-[#9CA3AF] font-bold uppercase tracking-widest">{rp.date}</p>
                       <p className="text-[10px] text-[#7B2FBE] font-bold uppercase tracking-widest">{rp.readingTime}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
