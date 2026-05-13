
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, Facebook, Twitter, Linkedin, Sparkles } from "lucide-react";
import { getPostBySlug, getPostSlugs, getAllPosts } from "@/lib/blog";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

const markdownComponents = {
  h1: ({ children }: any) => (
    <h1 className="text-4xl md:text-5xl font-bold text-[#1A1035] mt-14 mb-6 leading-tight tracking-tight">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-2xl md:text-3xl font-bold text-[#1A1035] mt-12 mb-5 leading-snug tracking-tight border-b border-[#EDE9FE] pb-3">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-xl md:text-2xl font-bold text-[#1A1035] mt-10 mb-4 leading-snug">
      {children}
    </h3>
  ),
  h4: ({ children }: any) => (
    <h4 className="text-lg font-bold text-[#1A1035] mt-8 mb-3">{children}</h4>
  ),
  p: ({ children }: any) => (
    <p className="text-[#4B5563] text-lg leading-relaxed mb-6 font-medium">{children}</p>
  ),
  ul: ({ children }: any) => (
    <ul className="list-none space-y-3 mb-8 pl-0">{children}</ul>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal list-outside space-y-3 mb-8 pl-6 text-[#4B5563]">{children}</ol>
  ),
  li: ({ children }: any) => (
    <li className="flex items-start gap-3 text-[#4B5563] text-base font-medium leading-relaxed">
      <span className="mt-2 w-2 h-2 rounded-full bg-[#7B2FBE] shrink-0" />
      <span>{children}</span>
    </li>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-[#7B2FBE] bg-[#F0EEFF] pl-8 pr-6 py-5 rounded-r-2xl italic text-[#4B5563] text-lg my-8 font-medium">
      {children}
    </blockquote>
  ),
  strong: ({ children }: any) => (
    <strong className="font-bold text-[#1A1035]">{children}</strong>
  ),
  em: ({ children }: any) => (
    <em className="italic text-[#4B5563]">{children}</em>
  ),
  code: ({ inline, children }: any) =>
    inline ? (
      <code className="bg-[#F0EEFF] text-[#7B2FBE] px-2 py-0.5 rounded-md text-sm font-mono font-semibold">
        {children}
      </code>
    ) : (
      <pre className="bg-[#1A1035] text-[#E9D5FF] p-6 rounded-2xl overflow-x-auto my-8 text-sm font-mono leading-relaxed shadow-xl">
        <code>{children}</code>
      </pre>
    ),
  a: ({ href, children }: any) => (
    <a
      href={href}
      className="text-[#7B2FBE] font-bold underline underline-offset-2 hover:text-[#A855F7] transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  img: ({ src, alt, node, children, ...props }: any) => (
    <span className="block my-10">
      <img 
        src={src} 
        alt={alt || ""} 
        className="rounded-3xl shadow-xl w-full object-cover" 
      />
      {alt && (
        <span className="block text-center text-xs text-[#9CA3AF] mt-3 font-semibold uppercase tracking-widest">
          {alt}
        </span>
      )}
    </span>
  ),
  hr: () => <hr className="border-[#EDE9FE] my-12" />,
  table: ({ children }: any) => (
    <div className="overflow-x-auto my-8 rounded-2xl border border-[#EDE9FE]">
      <table className="w-full text-sm text-left">{children}</table>
    </div>
  ),
  thead: ({ children }: any) => (
    <thead className="bg-[#F0EEFF] text-[#7B2FBE] text-xs uppercase tracking-widest font-bold">
      {children}
    </thead>
  ),
  th: ({ children }: any) => (
    <th className="px-6 py-4 font-bold">{children}</th>
  ),
  td: ({ children }: any) => (
    <td className="px-6 py-4 border-t border-[#EDE9FE] text-[#4B5563] font-medium">{children}</td>
  ),
};

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
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#7B2FBE] font-bold mb-10 hover:gap-3 transition-all group">
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Back to Insights
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-[#7B2FBE] mb-8">
              {(post.tags || []).map((tag: string) => (
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

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 space-y-12">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF] mb-6">Article Tools</h4>
                <div className="p-6 bg-white border border-[#EDE9FE] rounded-2xl shadow-sm">
                  <p className="text-xs text-[#4B5563] font-medium leading-relaxed">
                    This article was authored by our technical strategy team to provide insights into modern workflow optimization.
                  </p>
                </div>
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

          <article className="lg:col-span-6">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {post.content}
            </ReactMarkdown>

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

        <section className="max-w-7xl mx-auto px-6 mt-32">
          <div className="text-center mb-16">
            <span className="badge-pill">Keep Reading</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1035]">Related <span className="gradient-text">Insights</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((rp: any) => (
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
