import { NextResponse } from 'next/server'
import { buildAllUrls, splitSitemaps } from '@/lib/sitemap'

export const revalidate = 21600

export async function GET() {
  const urls = buildAllUrls()
  const [primary, secondary] = splitSitemaps(urls)
  const now = new Date().toISOString()

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.thevendinglocator.com/sitemap-1.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
${secondary.length > 0 ? `  <sitemap>
    <loc>https://www.thevendinglocator.com/sitemap-2.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>` : ''}
</sitemapindex>`

  return new NextResponse(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
