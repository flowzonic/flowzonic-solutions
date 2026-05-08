
import { MetadataRoute } from 'next';
import { getPostSlugs } from '@/lib/blog';

/**
 * Generates the sitemap.xml file dynamically.
 * Includes all core pages and individual blog posts.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://flowzonicsolutions.com';
  const lastModified = new Date();

  // Core static routes
  const coreRoutes = [
    '',
    '/about',
    '/services',
    '/services/web',
    '/services/automation',
    '/services/design',
    '/portfolio',
    '/pricing',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms',
  ];

  // Fetch all blog slugs from the local MDX content directory
  const blogSlugs = await getPostSlugs();
  const blogRoutes = blogSlugs.map(slug => `/blog/${slug.replace(/\.mdx$/, '')}`);

  const allRoutes = [...coreRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route.startsWith('/blog') || route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
