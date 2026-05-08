
import { MetadataRoute } from 'next';
import { getPostSlugs } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://flowzonicsolutions.com/';
  const lastModified = new Date();

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
  ];

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
