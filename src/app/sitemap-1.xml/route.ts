import { NextResponse } from 'next/server'
import { buildAllUrls, splitSitemaps } from '@/lib/sitemap'

export const revalidate = 21600

export async function GET() {
  const urls = buildAllUrls()
  const [primary] = splitSitemaps(urls)

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${primary
  .map((entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified.toISOString()}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`)
  .join('\n')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
