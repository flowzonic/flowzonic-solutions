
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Search, Loader2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useFirestore, useCollection, useMemoFirebase } from "@/firebase";
import { collection } from "firebase/firestore";

const STATIC_POSTS = [
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
  }
];

export default function Blog() {
  const firestore = useFirestore();
  const blogQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, "blog_posts_published");
  }, [firestore]);

  const { data: blogPosts, isLoading } = useCollection(blogQuery);

  // Combine static and dynamic posts for MVP, or just use dynamic if available
  const displayPosts = blogPosts && blogPosts.length > 0 ? blogPosts : STATIC_POSTS;

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

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-primary" size={40} />
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-2 gap-8 space-y-8">
            {displayPosts.map((post: any, i) => (
              <motion.div
                key={post.title || post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="break-inside-avoid glass rounded-4xl overflow-hidden group hover:shadow-2xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={post.image || post.thumbnailImageUrl || PlaceHolderImages[0].imageUrl} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.category || (post.tags && post.tags[0]) || "Article"}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date || post.publishDate || "Recently"}</span>
                    <span className="flex items-center gap-1"><User size={12} /> {post.author || post.authorName || "Flowzonic Team"}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt || post.seoDescription || "Read more about this project."}
                  </p>
                  <Link href={`/blog/${post.slug || post.id}`} className="font-bold flex items-center gap-2 group/btn">
                    Read More <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
