import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://mentorip.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/auth/', '/revalidate-site/', '/profile/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
