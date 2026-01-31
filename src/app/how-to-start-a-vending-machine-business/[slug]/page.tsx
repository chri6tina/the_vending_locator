import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import { cityInfo } from '@/data/cityInfo'
import EinLLCCheckoutButton from '@/components/EinLLCCheckoutButton'
import { calculateTotalPrice, getStateFee, SERVICE_FEE } from '@/data/stateFilingFees'
import { getCityVariantCopy } from '@/lib/city-variations'

type Params = { params: { slug: string } }

// City-specific enrichment to avoid thin/duplicate content
// Add entries here city-by-city as we enrich guides



export async function generateMetadata({ params }: Params): Promise<Metadata> {
  // Handle Next.js 15 params as Promise or Next.js 14 params as object
  const resolvedParams = params instanceof Promise ? await params : params
  
  if (!resolvedParams.slug) {
    return {
      title: 'How to Start a Vending Machine Business - The Vending Locator',
      description: 'Learn how to start a vending machine business: licensing, permits, startup costs, and locations.'
    }
  }
  
  const citySlug = resolvedParams.slug.replace(/-/g, ' ')
  const titleCity = citySlug.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
  return {
    title: `How to Start a Vending Machine Business in ${titleCity} (2026 Guide)`,
    description: `Learn how to start a vending machine business in ${titleCity}: licensing, permits, startup costs, best locations, contracts, outreach scripts, and FAQs.`,
    keywords: [`vending machine business ${titleCity}`, `how to start vending machines ${titleCity}`, `${titleCity} vending permits`, `${titleCity} vending locations`],
    alternates: { canonical: `https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/${resolvedParams.slug}` },
    openGraph: {
      title: `How to Start a Vending Machine Business in ${titleCity}`,
      description: `Permits, costs, locations, and contracts to launch in ${titleCity}.`,
      url: `https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/${resolvedParams.slug}`,
      siteName: 'The Vending Locator',
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: `How to Start a Vending Machine Business in ${titleCity}`,
      description: `Step-by-step guide for ${titleCity}: legal, locations, costs, and contracts.`
    },
    robots: { index: true, follow: true }
  }
}

// Use ISR (Incremental Static Regeneration) for SEO stability and performance
// Pages will be generated on-demand and cached, revalidating every 24 hours
export const revalidate = 86400 // 24 hours in seconds

export default async function GuideCityPage({ params }: Params) {
  // Handle Next.js 15 params as Promise or Next.js 14 params as object
  const resolvedParams = params instanceof Promise ? await params : params
  const { slug } = resolvedParams
  
  if (!slug) return notFound()

  const citySlug = slug
  const cityTitle = citySlug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')

  // Dynamic import temporarily disabled to fix performance issues
  // Enhanced city pages can be re-enabled later with better optimization

  const slugParts = citySlug.split('-')
  const multiWordStates: Record<string, string> = {
    'south-dakota': 'South Dakota',
    'north-dakota': 'North Dakota',
    'south-carolina': 'South Carolina',
    'north-carolina': 'North Carolina',
    'west-virginia': 'West Virginia',
    'new-hampshire': 'New Hampshire',
    'new-jersey': 'New Jersey',
    'new-mexico': 'New Mexico',
    'new-york': 'New York',
    'rhode-island': 'Rhode Island',
    'washington-dc': 'Washington DC',
    'district-of-columbia': 'District of Columbia'
  }
  const stateAbbrMap: Record<string, string> = {
    'al': 'Alabama',
    'ak': 'Alaska',
    'az': 'Arizona',
    'ar': 'Arkansas',
    'ca': 'California',
    'co': 'Colorado',
    'ct': 'Connecticut',
    'de': 'Delaware',
    'fl': 'Florida',
    'ga': 'Georgia',
    'hi': 'Hawaii',
    'id': 'Idaho',
    'il': 'Illinois',
    'in': 'Indiana',
    'ia': 'Iowa',
    'ks': 'Kansas',
    'ky': 'Kentucky',
    'la': 'Louisiana',
    'me': 'Maine',
    'md': 'Maryland',
    'ma': 'Massachusetts',
    'mi': 'Michigan',
    'mn': 'Minnesota',
    'ms': 'Mississippi',
    'mo': 'Missouri',
    'mt': 'Montana',
    'ne': 'Nebraska',
    'nv': 'Nevada',
    'nh': 'New Hampshire',
    'nj': 'New Jersey',
    'nm': 'New Mexico',
    'ny': 'New York',
    'nc': 'North Carolina',
    'nd': 'North Dakota',
    'oh': 'Ohio',
    'ok': 'Oklahoma',
    'or': 'Oregon',
    'pa': 'Pennsylvania',
    'ri': 'Rhode Island',
    'sc': 'South Carolina',
    'sd': 'South Dakota',
    'tn': 'Tennessee',
    'tx': 'Texas',
    'ut': 'Utah',
    'vt': 'Vermont',
    'va': 'Virginia',
    'wa': 'Washington',
    'wv': 'West Virginia',
    'wi': 'Wisconsin',
    'wy': 'Wyoming',
    'dc': 'District of Columbia'
  }

  let stateSlug = slugParts[slugParts.length - 1]
  let cityNameParts = slugParts.slice(0, -1)

  if (slugParts.length >= 2) {
    const twoWordState = slugParts.slice(-2).join('-')
    if (multiWordStates[twoWordState]) {
      stateSlug = twoWordState
      cityNameParts = slugParts.slice(0, -2)
    } else if (slugParts.length >= 3) {
      const threeWordState = slugParts.slice(-3).join('-')
      if (multiWordStates[threeWordState]) {
        stateSlug = threeWordState
        cityNameParts = slugParts.slice(0, -3)
      }
    }
  }

  const stateName = stateAbbrMap[stateSlug] || multiWordStates[stateSlug] || stateSlug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
  const cityDisplayName = cityNameParts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')
  const totalPrice = calculateTotalPrice(stateSlug)
  const stateFee = getStateFee(stateSlug)
  const hasStatePricing = stateFee > 0
  const { heroSuffix } = getCityVariantCopy({
    category: 'how-to-start',
    slug: citySlug,
    city: cityDisplayName,
    state: stateName
  })
  
  // Related cities - simplified (can be enhanced later if needed)
  const relatedCities: Array<{ name: string; slug: string }> = []

  return (
    <>
      <Header />
      <main className="min-h-screen bg-warm-white">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <nav className="text-sm text-stone mb-4 flex items-center justify-center gap-2">
              <Link href="/" className="hover:text-navy">Home</Link>
              <span>/</span>
              <Link href="/guide" className="hover:text-navy">Guide</Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{cityTitle}</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-charcoal leading-tight">
              How to Start a Vending Machine Business in <span className="text-navy">{cityDisplayName}, {stateName}</span>
            </h1>
            <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
              Permits, startup costs, best locations, contracts and outreach scripts tailored to {cityDisplayName}, {stateName}. Use this playbook to launch and scale your vending business with confidence. {heroSuffix}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://vendflow.gumroad.com/l/rxbzy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">Get the Full Guide ($79)</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 space-y-12">
          {/* Quick start */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Get compliant', body: `Register your business, obtain an EIN, and confirm licensing for ${cityTitle}.` },
              { title: 'Lock in locations', body: `Target offices, healthcare, logistics, and education sites in ${cityTitle}.` },
              { title: 'Install & optimize', body: 'Install with card readers, service weekly, and expand based on sales.' }
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-stone">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Steps */}
          <div id="steps" className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-6">Step-by-step launch plan</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { title: 'Business setup & licensing', body: `Register your business, obtain an EIN, and confirm licensing requirements for ${cityTitle}.` },
                { title: 'Health & vending permits', body: 'Confirm food/beverage vending rules with your county or city office.' },
                { title: 'Choose machines', body: 'Start with reliable snack/soda or combo machines and add card readers.' },
                { title: 'Find locations', body: `Prioritize office buildings, healthcare, education, logistics, and municipal sites in ${cityTitle}.` },
                { title: 'Pitch & negotiate', body: 'Present value, outline service cadence, and use clear contracts.' },
                { title: 'Install & optimize', body: 'Launch, track sales, and expand once top sellers are clear.' }
              ].map((step, index) => (
                <div key={step.title} className="flex gap-4 rounded-xl border border-gray-200 p-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-charcoal">{step.title}</h3>
                    <p className="text-sm text-stone mt-1">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Costs & ROI */}
          <div id="costs" className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-6">Costs & ROI</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-cream/60 p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Typical startup costs</h3>
                <ul className="list-disc pl-5 text-stone space-y-2">
                  <li>Refurbished machine: $1,500 - $3,500</li>
                  <li>Card reader & telemetry: $200 - $400</li>
                  <li>Initial inventory: $300 - $800</li>
                  <li>Transport/installation: $150 - $500</li>
                  <li>Permits/fees (varies by city/county)</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Expected ROI</h3>
                <p className="text-stone">
                  Healthy locations often generate $250–$800+ per machine per month. Well‑placed routes in {cityTitle}
                  can reach payback within 10–18 months depending on product mix and service quality.
                </p>
              </div>
            </div>
            {cityInfo[citySlug]?.permitNotes && (
              <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Local resources & compliance</h3>
                <p className="text-stone">{cityInfo[citySlug]?.permitNotes}</p>
              </div>
            )}
          </div>

          {/* Local focus */}
          {(cityInfo[citySlug]?.demandDrivers?.length || cityInfo[citySlug]?.neighborhoods?.length) && (
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-playfair font-bold text-charcoal mb-6">Where to focus in {cityDisplayName}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {cityInfo[citySlug]?.demandDrivers?.length && (
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Demand drivers</h3>
                    <ul className="list-disc pl-5 text-stone space-y-2">
                      {cityInfo[citySlug]!.demandDrivers!.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {cityInfo[citySlug]?.neighborhoods?.length && (
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Neighborhoods & corridors</h3>
                    <div className="flex flex-wrap gap-2">
                      {cityInfo[citySlug]!.neighborhoods!.map((n, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full border border-gray-200 bg-cream/60 text-chocolate text-sm">{n}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {cityInfo[citySlug]?.seasonalNote && (
                <p className="mt-4 text-stone">{cityInfo[citySlug]?.seasonalNote}</p>
              )}
            </div>
          )}

          {/* Business setup */}
          <div className="grid gap-6 lg:grid-cols-2">
            <div id="ein-llc" className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">EIN & LLC filing in {stateName}</h2>
              <p className="text-stone">
                File your LLC and EIN together so you can open a business bank account and operate confidently.
              </p>
              {hasStatePricing ? (
                <div className="mt-5 space-y-4">
                  <div className="rounded-xl border border-gray-200 bg-cream/60 p-5">
                    <div className="flex justify-between text-sm text-stone">
                      <span>State filing fee</span>
                      <span className="font-semibold text-charcoal">${stateFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-stone mt-2">
                      <span>Service fee</span>
                      <span className="font-semibold text-charcoal">${SERVICE_FEE.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-stone mt-2 pt-2 border-t border-gray-200">
                      <span className="font-semibold text-charcoal">Total</span>
                      <span className="font-bold text-navy">${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <EinLLCCheckoutButton stateSlug={stateSlug} stateName={stateName} variant="inline" />
                    <Link href={`/ein-llc/${stateSlug}`} className="inline-flex items-center justify-center rounded-full border border-charcoal/20 px-4 py-2 text-sm font-semibold text-charcoal transition hover:border-charcoal/40">
                      View {stateName} filing details
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="mt-5 rounded-xl border border-gray-200 bg-cream/60 p-5">
                  <p className="text-stone">Select your state to see the exact filing fee and checkout.</p>
                  <div className="mt-4">
                    <Link href="/ein-llc" className="inline-flex items-center justify-center rounded-full bg-coral px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-coral/90">
                      View EIN & LLC options
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div id="tax-services" className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">Tax & bookkeeping support</h2>
              <p className="text-stone">
                We connect operators in {cityTitle} with tax and bookkeeping support for sales tax setup and monthly reporting.
              </p>
              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-gray-200 bg-cream/60 p-5">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Why it matters</h3>
                  <ul className="list-disc pl-5 text-stone space-y-2">
                    <li>Stay compliant with sales tax requirements</li>
                    <li>Track profitability by route and location</li>
                    <li>Prepare for growth with clean books</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/tax-services" className="inline-flex items-center justify-center rounded-full bg-coral px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-coral/90">
                    Explore Tax Services
                  </Link>
                  <Link href={`/bookkeeping-kpis/${citySlug}`} className="inline-flex items-center justify-center rounded-full border border-charcoal/20 px-5 py-2 text-sm font-semibold text-charcoal transition hover:border-charcoal/40">
                    Bookkeeping + KPI Reporting
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contracts & Scripts */}
          <div id="contracts" className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-6">Contracts & scripts</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Contracts pack</h3>
                <p className="text-stone">Placement agreement, service terms, and onboarding checklist tailored for quick sign‑off.</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Outreach scripts</h3>
                <p className="text-stone">Cold call, email, and in‑person scripts with follow‑up sequences for decision‑makers.</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-6">FAQ: {cityTitle}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-cream/60 p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Do I need a permit to operate?</h3>
                <p className="text-stone">Most jurisdictions require a general business license and sales tax permit. Food vending may need additional health approvals.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-cream/60 p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Best places to start?</h3>
                <p className="text-stone">Begin with offices, medical clinics, schools, gyms, logistics facilities, and municipal buildings in {cityTitle}.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-cream/60 p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2">How many machines first?</h3>
                <p className="text-stone">Start with 1–2 machines, validate sales, then add more on proven sites.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-cream/60 p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Card readers needed?</h3>
                <p className="text-stone">Yes—cashless increases conversion and enables telemetry to track inventory and performance.</p>
              </div>
            </div>
            {cityInfo[citySlug]?.extraFaqs && (
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {cityInfo[citySlug]!.extraFaqs!.map((f, idx) => (
                  <div key={idx} className="rounded-xl border border-gray-200 bg-cream/60 p-6">
                    <h3 className="text-lg font-semibold text-charcoal mb-2">{f.q}</h3>
                    <p className="text-stone">{f.a}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-playfair font-bold text-charcoal mb-4">Explore more markets</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide" className="px-3 py-2 rounded-lg border border-gray-200 bg-cream/60 text-chocolate hover:text-navy">
              Browse all city guides
            </Link>
            <Link href="/how-to-start-a-vending-machine-business" className="px-3 py-2 rounded-lg border border-gray-200 bg-cream/60 text-chocolate hover:text-navy">
              View all guides
            </Link>
          </div>
        </div>
      </section>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: `How to Start a Vending Machine Business in ${cityTitle}`,
            description: `Permits, costs, locations, and contracts for launching in ${cityTitle}.`,
            mainEntityOfPage: `https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/${citySlug}`,
            author: { '@type': 'Organization', name: 'The Vending Locator' },
            publisher: { '@type': 'Organization', name: 'The Vending Locator' },
            dateModified: new Date().toISOString()
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: `Start a Vending Machine Business in ${cityTitle}`,
            step: [
              { '@type': 'HowToStep', name: 'Business setup & licensing' },
              { '@type': 'HowToStep', name: 'Health & vending permits' },
              { '@type': 'HowToStep', name: 'Choose machines' },
              { '@type': 'HowToStep', name: 'Find locations' },
              { '@type': 'HowToStep', name: 'Pitch & negotiate' },
              { '@type': 'HowToStep', name: 'Install & optimize' }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Do I need a permit to operate?', acceptedAnswer: { '@type': 'Answer', text: 'Most jurisdictions require a general business license and sales tax permit. Food vending may need additional health approvals.' } },
              { '@type': 'Question', name: 'Best places to start?', acceptedAnswer: { '@type': 'Answer', text: `Begin with offices, medical clinics, schools, gyms, logistics facilities, and municipal buildings in ${cityTitle}.` } },
              { '@type': 'Question', name: 'How many machines first?', acceptedAnswer: { '@type': 'Answer', text: 'Start with 1-2 machines, validate sales, then add more on proven sites to manage cashflow and service time.' } },
              { '@type': 'Question', name: 'Are card readers necessary?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—cashless increases conversion and enables telemetry to track inventory and performance.' } }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thevendinglocator.com/' },
              { '@type': 'ListItem', position: 2, name: 'Guide', item: 'https://www.thevendinglocator.com/guide' },
              { '@type': 'ListItem', position: 3, name: cityTitle, item: `https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/${citySlug}` }
            ]
          })
        }}
      />
      </main>
      <Footer />
    </>
  )
}