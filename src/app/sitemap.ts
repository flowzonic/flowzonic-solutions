import { MetadataRoute } from 'next'

/**
 * Generates the sitemap for the Flowzonic Solution website.
 * Includes all core pages and service-specific detail pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://flowzonic.com'
  const lastModified = new Date()

  const routes = [
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
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '/blog' || route === '/portfolio' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
