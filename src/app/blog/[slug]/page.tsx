
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, Clock, ArrowLeft, Tag, Share2 } from "lucide-react";
import { getPostBySlug, getPostSlugs, getAllPosts } from "@/lib/blog";

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
      title: `${post.title} | Flowzonic Blog`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        images: [post.coverImage],
        type: 'article',
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
    .slice(0, 2);

  return (
    <main className="pt-32 pb-20 bg-[#FAFBFF]">
      <article className="max-w-4xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[#7B2FBE] font-bold mb-8 hover:gap-3 transition-all">
          <ArrowLeft size={18} /> Back to Insights
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-[#7B2FBE] mb-6">
            {post.tags.map(tag => (
              <span key={tag} className="bg-[#F0EEFF] px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1035] mb-8 leading-[1.1]">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 p-6 bg-white border border-[#EDE9FE] rounded-2xl shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F0EEFF] rounded-full flex items-center justify-center text-[#7B2FBE]">
                <User size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#1A1035]">{post.author}</p>
                <p className="text-[10px] text-[#9CA3AF] uppercase tracking-widest">Author</p>
              </div>
            </div>
            <div className="w-px h-10 bg-[#EDE9FE]" />
            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-[#7B2FBE]" />
              <p className="text-sm font-bold text-[#1A1035]">{post.date}</p>
            </div>
            <div className="w-px h-10 bg-[#EDE9FE] hidden sm:block" />
            <div className="hidden sm:flex items-center gap-3">
              <Clock size={18} className="text-[#7B2FBE]" />
              <p className="text-sm font-bold text-[#1A1035]">{post.readingTime}</p>
            </div>
          </div>
        </header>

        <div className="relative aspect-video rounded-4xl overflow-hidden mb-16 shadow-2xl">
          <Image 
            src={post.coverImage} 
            alt={post.title} 
            fill 
            className="object-cover"
            priority
          />
        </div>

        <div 
          className="prose prose-lg max-w-none prose-headings:text-[#1A1035] prose-headings:font-bold prose-p:text-[#4B5563] prose-p:leading-relaxed prose-a:text-[#7B2FBE] prose-strong:text-[#1A1035] prose-code:bg-[#F0EEFF] prose-code:text-[#7B2FBE] prose-code:px-2 prose-code:py-0.5 prose-code:rounded-md mb-20 font-medium"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <hr className="border-[#EDE9FE] mb-20" />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mb-20">
            <h3 className="text-3xl font-bold text-[#1A1035] mb-8">Related <span className="text-[#7B2FBE]">Insights</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((rp) => (
                <Link href={`/blog/${rp.slug}`} key={rp.slug} className="group">
                  <div className="card-standard p-6 flex items-center gap-6">
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                      <Image src={rp.coverImage} alt={rp.title} fill className="object-cover transition-transform group-hover:scale-110" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A1035] group-hover:text-[#7B2FBE] transition-colors mb-2 line-clamp-1">{rp.title}</h4>
                      <p className="text-xs text-[#9CA3AF] font-bold uppercase tracking-widest">{rp.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Share Section */}
        <div className="bg-[#1A1035] text-white p-12 rounded-4xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#7B2FBE]/20 blur-3xl rounded-full" />
          <h2 className="text-2xl font-bold mb-6">Enjoyed the read?</h2>
          <p className="text-[#C4B5FD] mb-8 font-medium">Share these insights with your network and help them find their flow.</p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 rounded-full bg-white text-[#7B2FBE] font-bold flex items-center gap-2 hover:bg-[#F0EEFF] transition-all">
              <Share2 size={18} /> Share Article
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
