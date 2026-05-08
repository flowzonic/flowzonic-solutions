
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage: string;
  tags: string[];
  author: string;
  content: string; // This will now be the raw markdown content
  readingTime: string;
  featured?: boolean;
}

/**
 * Ensures the blog directory exists.
 */
function ensureDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export async function getPostSlugs() {
  ensureDirectory();
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'));
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // matter() parses the file and separates metadata (data) from the body (content)
  const { data, content } = matter(fileContents);

  const stats = readingTime(content);

  return {
    slug: realSlug,
    title: data.title || "Untitled Post",
    description: data.description || "No description provided.",
    date: data.date || new Date().toLocaleDateString(),
    coverImage: data.coverImage || "https://picsum.photos/seed/default/1200/800",
    tags: data.tags || [],
    author: data.author || "Flowzonic Team",
    content: content, // Returning the raw markdown content for ReactMarkdown to handle
    readingTime: stats.text,
    featured: data.featured || false,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug))
  );

  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
