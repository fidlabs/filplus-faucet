import { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = 'https://faucet.allocator.tech'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}

export default sitemap
