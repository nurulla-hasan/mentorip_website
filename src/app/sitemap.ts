import { MetadataRoute } from 'next'
import { getAllCategories } from '@/services/category'
import { getAllPosts } from '@/services/post'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mentorip.com'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/team-of-lawyers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clients`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  // Dynamic category pages
  let categoryPages: MetadataRoute.Sitemap = []
  try {
    const catResponse = await getAllCategories()
    if (catResponse?.success && catResponse.data) {
      categoryPages = catResponse.data.map((cat: { slug: string }) => ({
        url: `${baseUrl}/category/${cat.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    }
  } catch {
    // If API fails, continue without category pages
  }

  // Dynamic post/article pages
  let postPages: MetadataRoute.Sitemap = []
  try {
    const postResponse = await getAllPosts({ limit: '1000' })
    if (postResponse?.success && postResponse.data) {
      postPages = postResponse.data
        .filter((post: { slug: string; category?: { slug: string } }) =>
          post.slug && post.category?.slug
        )
        .map((post: {
          slug: string;
          category: { slug: string };
          updatedAt?: string;
          createdAt?: string;
        }) => ({
          url: `${baseUrl}/category/${post.category.slug}/${post.slug}`,
          lastModified: post.updatedAt
            ? new Date(post.updatedAt)
            : post.createdAt
              ? new Date(post.createdAt)
              : new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        }))
    }
  } catch {
    // If API fails, continue without post pages
  }

  return [...staticPages, ...categoryPages, ...postPages]
}
