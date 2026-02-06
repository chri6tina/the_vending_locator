import { MetadataRoute } from 'next'
import { buildAllUrls, splitSitemaps } from '@/lib/sitemap'

export const revalidate = 21600

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = buildAllUrls()
  const [primary] = splitSitemaps(urls)
  return primary
}
