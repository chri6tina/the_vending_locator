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

  const stateName = multiWordStates[stateSlug] || stateSlug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
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
              <Link href="#steps" className="inline-flex items-center justify-center gap-2 text-navy hover:text-navy-light font-semibold w-full sm:w-auto">Jump to Steps</Link>
            </div>
            {/* Anchor nav */}
            <div className="mt-6 flex flex-wrap gap-2 text-sm justify-center">
              <a href="#steps" className="px-3 py-1 rounded-full border border-gray-200 bg-cream/60 text-chocolate hover:text-navy">Steps</a>
              <a href="#costs" className="px-3 py-1 rounded-full border border-gray-200 bg-cream/60 text-chocolate hover:text-navy">Costs & ROI</a>
              <a href="#contracts" className="px-3 py-1 rounded-full border border-gray-200 bg-cream/60 text-chocolate hover:text-navy">Contracts & Scripts</a>
              <a href="#faq" className="px-3 py-1 rounded-full border border-gray-200 bg-cream/60 text-chocolate hover:text-navy">FAQ</a>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sticky CTA Sidebar */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-8">
          {/* Main content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Steps */}
            <div id="steps">
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-6">Steps to Launch in {cityTitle}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">1) Business Setup & Licensing</h3>
                  <p className="text-stone">Register your business (LLC recommended), obtain an EIN, and confirm general business licensing requirements for {cityTitle}. Many areas require a sales tax permit to collect and remit tax on product sales.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">2) Health & Vending Permits</h3>
                  <p className="text-stone">Contact your county/city health department to determine food and beverage vending requirements. If selling refrigerated or perishable items, additional health compliance may apply.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">3) Choose The Right Machines</h3>
                  <p className="text-stone">Start with reliable snack/soda machines; consider combo machines for smaller sites. Verify ADA compliance, card readers, and remote telemetry for inventory and cashless payments.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">4) Find High-Traffic Locations</h3>
                  <p className="text-stone">Prioritize office buildings, healthcare, education, logistics/warehouses, municipal facilities, and recreation venues in {cityTitle}. Align product mix with onsite demographics and hours.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">5) Pitch & Negotiate Placement</h3>
                  <p className="text-stone">Lead with convenience and service quality. Emphasize value adds like employee discounts and fast service SLAs. Use clear contracts to formalize terms.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">6) Install, Service, Optimize</h3>
                  <p className="text-stone">Schedule installs, verify power/space, and set a weekly/biweekly service cadence. Track product performance and expand to additional machines as sales stabilize.</p>
                </div>
              </div>
            </div>

            {/* Costs & ROI */}
            <div id="costs" className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-2xl font-playfair font-bold text-charcoal mb-4">Costs & ROI</h2>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-cream/60 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Typical Startup Costs</h3>
                  <ul className="list-disc pl-5 text-stone space-y-2">
                    <li>Refurbished snack/soda machine: $1,500 - $3,500 each</li>
                    <li>Card reader & telemetry: $200 - $400</li>
                    <li>Initial inventory: $300 - $800</li>
                    <li>Transport/installation: $150 - $500</li>
                    <li>Permits/fees (varies by city/county)</li>
                  </ul>
                </div>
                <div className="bg-cream/60 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Expected ROI</h3>
                  <p className="text-stone">Healthy locations often generate $250-$800+ per machine per month. Well-placed routes in {cityTitle} can reach payback within 10-18 months depending on traffic, product mix, and service quality.</p>
                </div>
              </div>
              {cityInfo[citySlug]?.permitNotes && (
                <div className="mt-6 bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Local resources & compliance</h3>
                  <p className="text-stone">{cityInfo[citySlug]?.permitNotes}</p>
                </div>
              )}
            </div>

            {/* EIN & LLC Filing */}
            <div id="ein-llc" className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-2xl font-playfair font-bold text-charcoal mb-4">EIN & LLC Filing in {stateName}</h2>
              <p className="text-stone">
                The fastest way to get compliant in {stateName} is to file your LLC and EIN together.
                Our service includes the state filing plus your EIN so you can open a business bank account and operate confidently.
              </p>
              {hasStatePricing ? (
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <div className="bg-cream/60 border border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-charcoal mb-3">State costs in {stateName}</h3>
                    <div className="space-y-2 text-sm text-stone">
                      <div className="flex justify-between">
                        <span>State filing fee</span>
                        <span className="font-semibold text-charcoal">${stateFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Service fee (EIN + filing support)</span>
                        <span className="font-semibold text-charcoal">${SERVICE_FEE.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-gray-200">
                        <span className="font-semibold text-charcoal">Total</span>
                        <span className="font-bold text-navy">${totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-stone">
                      State fees are passed through directly. Pricing reflects current filing fees for {stateName}.
                    </p>
                  </div>
                  <div className="bg-cream/60 border border-gray-200 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-charcoal mb-3">Start your filing</h3>
                    <p className="text-stone mb-4">
                      You’ll be matched to the {stateName} checkout so your filing and EIN are processed correctly.
                    </p>
                    <div className="space-y-3">
                      <EinLLCCheckoutButton stateSlug={stateSlug} stateName={stateName} variant="inline" />
                      <Link
                        href={`/ein-llc/${stateSlug}`}
                        className="inline-flex items-center justify-center rounded-full border border-charcoal/20 px-4 py-2 text-sm font-semibold text-charcoal transition hover:border-charcoal/40"
                      >
                        View {stateName} filing details
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-6 bg-cream/60 border border-gray-200 rounded-xl p-5">
                  <p className="text-stone">
                    We have EIN & LLC filing options for every state. Select your state to see the exact filing fee and checkout.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/ein-llc"
                      className="inline-flex items-center justify-center rounded-full bg-coral px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-coral/90"
                    >
                      View EIN & LLC options
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Tax Services */}
            <div id="tax-services" className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-2xl font-playfair font-bold text-charcoal mb-4">Tax & Bookkeeping Support</h2>
              <p className="text-stone">
                Vending businesses move fast, and clean books help you grow faster. We connect operators in {cityTitle}
                with tax and bookkeeping support that covers sales tax setup, monthly bookkeeping, and year-end filings.
              </p>
              <div className="mt-4 grid md:grid-cols-2 gap-6">
                <div className="bg-cream/60 border border-gray-200 rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Why it matters</h3>
                  <ul className="list-disc pl-5 text-stone space-y-2">
                    <li>Stay compliant with sales tax and local requirements</li>
                    <li>Track machine profitability by route and location</li>
                    <li>Prepare for growth with clean financials</li>
                  </ul>
                </div>
                <div className="bg-cream/60 border border-gray-200 rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Get help fast</h3>
                  <p className="text-stone">
                    We offer vending-focused tax services in key markets and can help you get started quickly.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href="/tax-services"
                      className="inline-flex items-center justify-center rounded-full bg-coral px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-coral/90"
                    >
                      Explore Tax Services
                    </Link>
                    <Link
                      href={`/bookkeeping-kpis/${citySlug}`}
                      className="inline-flex items-center justify-center rounded-full border border-charcoal/20 px-5 py-2 text-sm font-semibold text-charcoal transition hover:border-charcoal/40"
                    >
                      Bookkeeping + KPI Reporting
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full border border-charcoal/20 px-5 py-2 text-sm font-semibold text-charcoal transition hover:border-charcoal/40"
                    >
                      Talk to a Specialist
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contracts & Scripts */}
            <div id="contracts">
              <h2 className="text-2xl font-playfair font-bold text-charcoal mb-4">Contracts & Scripts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Contracts Pack</h3>
                  <p className="text-stone">Placement agreement, service-level terms, and onboarding checklist tailored for quick, professional sign-off in {cityTitle}.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Outreach Scripts</h3>
                  <p className="text-stone">Cold call, email, and in-person scripts with follow-up sequences designed for facility managers, HR, and operations leads.</p>
                </div>
              </div>
            </div>

            {/* Local demand drivers */}
            {(cityInfo[citySlug]?.demandDrivers?.length || cityInfo[citySlug]?.neighborhoods?.length) && (
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">Where to focus in {cityDisplayName}</h2>
                {cityInfo[citySlug]?.demandDrivers?.length && (
                  <>
                    <div className="font-semibold text-charcoal mb-2">Demand drivers</div>
                    <ul className="list-disc pl-5 text-stone space-y-2">
                      {cityInfo[citySlug]!.demandDrivers!.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                {cityInfo[citySlug]?.neighborhoods?.length && (
                  <div className="mt-4">
                    <div className="font-semibold text-charcoal mb-2">Neighborhoods & corridors</div>
                    <div className="flex flex-wrap gap-2">
                      {cityInfo[citySlug]!.neighborhoods!.map((n, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full border border-gray-200 bg-cream/60 text-chocolate text-sm">{n}</span>
                      ))}
                    </div>
                  </div>
                )}
                {cityInfo[citySlug]?.seasonalNote && (
                  <p className="mt-4 text-stone">{cityInfo[citySlug]?.seasonalNote}</p>
                )}
              </div>
            )}

            {/* FAQ */}
            <div id="faq" className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">FAQ: {cityTitle}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-cream/60 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Do I need a permit to operate?</h3>
                  <p className="text-stone">Most jurisdictions require a general business license and sales tax permit. Food vending may need additional health approvals.</p>
                </div>
                <div className="bg-cream/60 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Best places to start?</h3>
                  <p className="text-stone">Begin with offices (50+ staff), medical clinics, schools, gyms, logistics facilities, and municipal buildings in {cityTitle}.</p>
                </div>
                <div className="bg-cream/60 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">How many machines first?</h3>
                  <p className="text-stone">Start with 1-2 machines, validate sales, then add more on proven sites to manage cashflow and service time.</p>
                </div>
                <div className="bg-cream/60 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Card readers needed?</h3>
                  <p className="text-stone">Yes—cashless increases conversion and enables telemetry to track inventory and performance.</p>
                </div>
              </div>
              {cityInfo[citySlug]?.extraFaqs && (
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  {cityInfo[citySlug]!.extraFaqs!.map((f, idx) => (
                    <div key={idx} className="bg-cream/60 border border-gray-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-charcoal mb-2">{f.q}</h3>
                      <p className="text-stone">{f.a}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sticky CTA sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-playfair font-bold text-charcoal">Get the Full Guide</h3>
                <p className="text-stone mt-2">Contracts, scripts, negotiation frameworks and checklists to launch in {cityTitle}.</p>
                <a href="https://vendflow.gumroad.com/l/rxbzy" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-5 py-3 rounded-lg font-semibold w-full">Purchase ($79)</a>
                <ul className="mt-4 text-sm text-stone list-disc pl-5 space-y-1">
                  <li>Legal-ready contract templates</li>
                  <li>Cold call, email and in-person scripts</li>
                  <li>Pitch deck outline and objection handling</li>
                  <li>Install & service checklists</li>
                </ul>
              </div>
              <div className="bg-cream/60 border border-gray-200 rounded-xl p-4 text-sm text-chocolate">
                <strong className="text-charcoal">Tip:</strong> Use card readers and telemetry from day one to increase conversion and simplify inventory.
              </div>
            </div>
          </aside>
        </div>
      </section>
      {/* Related guides */}
      {/* Local SEO content (distinct layout) */}
      <section className="py-16 bg-cream border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs text-chocolate bg-white/70 border border-gray-200 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-navy" />
              Local guide • {cityDisplayName}, {stateName}
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-playfair font-bold text-charcoal">Launch playbook for {cityTitle}</h2>
            <p className="mt-2 text-stone">
              The fastest path from idea to first placement focuses on compliance, high‑fit locations, and consistent service. Use this action plan tailored to {cityTitle} to speed up results.
            </p>

            {/* Narrative + pull‑quote for variety */}
            <div className="mt-8 grid lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-charcoal">Actionable steps (localized)</h3>
                <ol className="mt-3 list-decimal pl-6 text-stone space-y-2">
                  <li>Register your business and set up a sales tax account for {stateName}.
                  </li>
                  <li>Call the city/county health office to confirm vending/food rules (refrigerated items may require extra approval).</li>
                  <li>Shortlist 20–30 locations in {cityTitle}: offices, healthcare, schools, logistics, municipal.</li>
                  <li>Prepare a simple placement agreement and a service‑level one‑pager with response times.</li>
                  <li>Install with card readers and telemetry, then service weekly; expand based on top sellers.</li>
                </ol>
              </div>
              <div className="lg:col-span-5 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="border-l-4 border-navy pl-4 text-stone">
                  <p className="italic">
                    “In {cityDisplayName}, facility managers choose vendors who keep machines full, stock proven best‑sellers, and accept cards. Consistent service and clear SLAs win placements.”
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-cream/60 border border-gray-200 rounded-lg p-3">
                    <div className="font-semibold text-charcoal">High‑fit sites</div>
                    <div className="text-stone">Offices • Clinics • Warehouses • Gyms</div>
                  </div>
                  <div className="bg-cream/60 border border-gray-200 rounded-lg p-3">
                    <div className="font-semibold text-charcoal">Essentials</div>
                    <div className="text-stone">Contracts • Card readers • Checklists</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion FAQs (local SEO long‑form) */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <details className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <summary className="cursor-pointer font-semibold text-charcoal">Do I need special permits in {cityTitle}?</summary>
                <p className="mt-2 text-stone">Most operators need a general business license and sales tax permit; food or refrigerated items can trigger health inspections. Always confirm with your local office.</p>
              </details>
              <details className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <summary className="cursor-pointer font-semibold text-charcoal">What locations work best here?</summary>
                <p className="mt-2 text-stone">Start near office parks, clinics, logistics hubs, schools, and recreation facilities in {cityTitle}. Aim for steady daily foot traffic and captive audiences.</p>
              </details>
              <details className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm md:col-span-2">
                <summary className="cursor-pointer font-semibold text-charcoal">How do you help me launch with confidence?</summary>
                <div className="mt-2 grid sm:grid-cols-2 gap-3 text-stone">
                  <div className="bg-cream/60 border border-gray-200 rounded-lg p-3">Legal‑ready contracts for quick sign‑off</div>
                  <div className="bg-cream/60 border border-gray-200 rounded-lg p-3">Proven outreach scripts for local decision‑makers</div>
                  <div className="bg-cream/60 border border-gray-200 rounded-lg p-3">Negotiation frameworks & objection handling</div>
                  <div className="bg-cream/60 border border-gray-200 rounded-lg p-3">Install & service checklists to stay reliable</div>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <a href="https://vendflow.gumroad.com/l/rxbzy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">Get the Full Guide ($79)</a>
                  <Link href="#contracts" className="inline-flex items-center justify-center gap-2 text-navy hover:text-navy-light font-semibold w-full sm:w-auto">See Contracts & Scripts</Link>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-playfair font-bold text-charcoal mb-4">
            Explore more markets
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/guide"
              className="px-3 py-2 rounded-lg border border-gray-200 bg-cream/60 text-chocolate hover:text-navy"
            >
              Browse all city guides
            </Link>
            <Link
              href="/how-to-start-a-vending-machine-business"
              className="px-3 py-2 rounded-lg border border-gray-200 bg-cream/60 text-chocolate hover:text-navy"
            >
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