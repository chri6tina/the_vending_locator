import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Params = { params: { slug: string } }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const citySlug = params.slug.replace(/-/g, ' ')
  const titleCity = citySlug.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
  return {
    title: `Guide: ${titleCity} - The Vending Locator`,
    description: `Vending machine location guide information for ${titleCity}. Purchase the full guide to access contracts, scripts, and templates.`,
    alternates: { canonical: `https://www.thevendinglocator.com/guide/${params.slug}` },
    robots: { index: true, follow: true }
  }
}

export default function GuideCityPage({ params }: Params) {
  const { slug } = params
  if (!slug) return notFound()

  return (
    <div className="min-h-screen bg-warm-white">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4">Local Guide</h1>
        <p className="text-stone mb-8">This page will host city-specific guide details soon. In the meantime, get instant access to the full guide with contracts, scripts, and templates.</p>
        <a href="https://vendflow.gumroad.com/l/rxbzy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-lg font-semibold">Purchase the Guide ($79)</a>
      </div>
    </div>
  )
}


