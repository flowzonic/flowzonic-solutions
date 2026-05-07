import { MetadataRoute } from 'next'

/**
 * Generates the robots.txt file to guide search engine crawlers.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://flowzonic.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
