import { NextResponse } from 'next/server'
import { buildAllUrls, chunkSitemaps } from '@/lib/sitemap'

export const revalidate = 21600

export async function GET() {
  const urls = buildAllUrls()
  const chunks = chunkSitemaps(urls)
  const now = new Date().toISOString()

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunks
  .map((_, idx) => `  <sitemap>
    <loc>https://www.thevendinglocator.com/sitemap/${idx}.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`)
  .join('\n')}
</sitemapindex>`

  return new NextResponse(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
