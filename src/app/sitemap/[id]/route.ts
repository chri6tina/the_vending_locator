import { NextResponse } from 'next/server'
import { buildAllUrls, chunkSitemaps } from '@/lib/sitemap'

export const revalidate = 21600
export const dynamic = 'force-dynamic'

type Params = {
  id?: string
}

export async function GET(_: Request, context?: { params?: Params }) {
  const id = context?.params?.id
  const index = id ? Number.parseInt(id, 10) : Number.NaN
  const urls = buildAllUrls()
  const chunks = chunkSitemaps(urls)

  if (Number.isNaN(index) || index < 0 || index >= chunks.length) {
    return new NextResponse('Not Found', { status: 404 })
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunks[index]
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
