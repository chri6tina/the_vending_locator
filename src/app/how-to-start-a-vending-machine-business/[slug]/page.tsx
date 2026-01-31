import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import { cityInfo } from '@/data/cityInfo'
import states from '@/data/states'
import { howToStartSlugs } from '@/data/how-to-start-slugs'
import { calculateTotalPrice, getStateFee, SERVICE_FEE } from '@/data/stateFilingFees'
import { getCityVariantCopy } from '@/lib/city-variations'

type Params = { params: { slug: string } }

// City-specific enrichment to avoid thin/duplicate content
// Add entries here city-by-city as we enrich guides

const parseCityState = (slug: string) => {
  const slugParts = slug.split('-')
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
  return { stateSlug, stateName, cityDisplayName }
}



export async function generateMetadata({ params }: Params): Promise<Metadata> {
  // Handle Next.js 15 params as Promise or Next.js 14 params as object
  const resolvedParams = params instanceof Promise ? await params : params
  
  if (!resolvedParams.slug) {
    return {
      title: 'How to Start a Vending Machine Business - The Vending Locator',
      description: 'Learn how to start a vending machine business: licensing, permits, startup costs, and locations.'
    }
  }
  
  const { cityDisplayName, stateName } = parseCityState(resolvedParams.slug)
  const { heroSuffix } = getCityVariantCopy({
    category: 'how-to-start',
    slug: resolvedParams.slug,
    city: cityDisplayName,
    state: stateName
  })
  const titleCity = cityDisplayName
  return {
    title: `How to Start a Vending Machine Business in ${titleCity} (2026 Guide)`,
    description: `Learn how to start a vending machine business in ${titleCity}: licensing, permits, startup costs, best locations, contracts, outreach scripts, and FAQs. ${heroSuffix}`,
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
  const { stateSlug, stateName, cityDisplayName } = parseCityState(citySlug)
  const cityTitle = cityDisplayName

  // Dynamic import temporarily disabled to fix performance issues
  // Enhanced city pages can be re-enabled later with better optimization
  const totalPrice = calculateTotalPrice(stateSlug)
  const stateFee = getStateFee(stateSlug)
  const hasStatePricing = stateFee > 0
  const { heroSuffix } = getCityVariantCopy({
    category: 'how-to-start',
    slug: citySlug,
    city: cityDisplayName,
    state: stateName
  })
  const variantIndex = Math.abs([...citySlug].reduce((acc, char) => acc * 31 + char.charCodeAt(0), 7)) % 4
  const heroLineVariants = [
    `A focused, local playbook for licensing, location outreach, and ROI planning in ${cityDisplayName}, ${stateName}.`,
    `A city-specific guide covering permits, placement strategy, and revenue planning in ${cityDisplayName}, ${stateName}.`,
    `A practical launch guide for compliance, location wins, and cash flow in ${cityDisplayName}, ${stateName}.`,
    `A step-by-step plan for licensing, placement, and ROI goals in ${cityDisplayName}, ${stateName}.`
  ]
  const heroSupportVariants = [
    'Built for operators starting with 1-2 machines.',
    'Includes outreach scripts and placement criteria.',
    'Streamlines compliance steps so you launch faster.',
    'Covers product mix and service cadence benchmarks.'
  ]
  const valueCardVariants = [
    [
      { title: 'Permits & licensing', body: 'Exact steps to register, get your EIN, and stay compliant.' },
      { title: 'Location scouting', body: 'Shortlists, outreach scripts, and closing templates.' },
      { title: 'ROI & scaling', body: 'Cost ranges, break-even targets, and growth plan.' }
    ],
    [
      { title: 'Compliance & setup', body: 'Business registration, EIN, and local licensing checkpoints.' },
      { title: 'Placement strategy', body: 'Where to pitch, who to contact, and how to follow up.' },
      { title: 'Profit planning', body: 'Revenue ranges, margins, and expansion timing.' }
    ],
    [
      { title: 'Start correctly', body: 'Avoid early mistakes with a clean setup checklist.' },
      { title: 'Win locations', body: 'Outreach scripts and proven placement angles.' },
      { title: 'Scale smart', body: 'Targets for break-even and adding machines.' }
    ],
    [
      { title: 'Legal essentials', body: 'Permits, EIN, and city-level compliance steps.' },
      { title: 'Location playbook', body: 'Decision-maker scripts and placement criteria.' },
      { title: 'ROI roadmap', body: 'Forecasts, break-even, and growth milestones.' }
    ]
  ]
  const quickStartNotes = [
    `Local operators in ${cityDisplayName} typically start with 1-2 machines and expand after 90 days of data.`,
    `Focus on high-traffic anchors like offices, clinics, and logistics sites in ${cityDisplayName}.`,
    `Your first goal: validate sales velocity before adding more locations.`,
    `Use a simple service cadence (weekly or biweekly) to keep inventory fresh.`
  ]
  const costsIntroVariants = [
    'Understand typical startup costs and what a healthy route can earn.',
    'Estimate your startup budget and map a realistic payback timeline.',
    'Plan equipment, inventory, and setup costs before you scale.',
    'Know the upfront spend and revenue targets for a strong first route.'
  ]
  const roiCopyVariants = [
    `Healthy locations often generate $250–$800+ per machine per month. Well‑placed routes in ${cityTitle} can reach payback within 10–18 months depending on product mix and service quality.`,
    `In ${cityTitle}, operators commonly see $250–$800+ per machine per month. With smart placement, break‑even can happen in 10–18 months.`,
    `A solid ${cityTitle} location can generate $250–$800+ monthly per machine. Consistent service and product mix usually drive payback in 10–18 months.`,
    `Top ${cityTitle} locations can earn $250–$800+ per month per machine. With clean operations, payback often lands in 10–18 months.`
  ]
  const contractCopyVariants = [
    {
      title: 'Contracts pack',
      body: 'Placement agreement, service terms, and onboarding checklist tailored for quick sign‑off.'
    },
    {
      title: 'Contracts pack',
      body: 'Ready-to-use placement terms, service cadence language, and onboarding steps.'
    },
    {
      title: 'Contracts pack',
      body: 'Simple agreements and checklists to speed up approvals.'
    },
    {
      title: 'Contracts pack',
      body: 'Clear placement terms and service expectations you can reuse.'
    }
  ]
  const scriptCopyVariants = [
    {
      title: 'Outreach scripts',
      body: 'Cold call, email, and in‑person scripts with follow‑up sequences for decision‑makers.'
    },
    {
      title: 'Outreach scripts',
      body: 'Proven email and call scripts with follow‑ups that get responses.'
    },
    {
      title: 'Outreach scripts',
      body: 'Direct scripts for first contact, follow‑up, and close.'
    },
    {
      title: 'Outreach scripts',
      body: 'Messaging templates to reach facility managers quickly.'
    }
  ]
  const faqIntroVariants = [
    `Answers to the most common startup questions for ${cityTitle}.`,
    `Quick answers to common questions from new operators in ${cityTitle}.`,
    `FAQ for first‑time vending operators in ${cityTitle}.`,
    `Common questions we hear from ${cityTitle} operators.`
  ]
  const primaryCtaLabel = 'Get the Full Guide'
  const primaryCtaClassName = 'inline-flex min-h-[44px] items-center justify-center rounded-lg bg-navy px-6 py-3 font-semibold text-white transition hover:bg-navy-light'

  const allHowToStartSlugs = Array.from(new Set([
    ...states.flatMap(state => state.cities.map(city => city.slug)),
    ...howToStartSlugs
  ]))
  const getRelatedCitySlugs = () => {
    const seed = Math.abs([...citySlug].reduce((acc, char) => acc * 17 + char.charCodeAt(0), 5))
    const list: string[] = []
    for (let i = 0; i < allHowToStartSlugs.length && list.length < 6; i += 1) {
      const idx = (seed + i * 37) % allHowToStartSlugs.length
      const candidate = allHowToStartSlugs[idx]
      if (!candidate || candidate === citySlug) continue
      if (list.includes(candidate)) continue
      list.push(candidate)
    }
    return list
  }
  const relatedCities = getRelatedCitySlugs().map((slug) => ({
    slug,
    name: slug.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')
  }))

  return (
    <>
      <Header />
      <main className="min-h-screen bg-warm-white">
        {/* Hero */}
        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
            <div className="text-center">
              <nav className="text-sm text-stone mb-4 flex items-center justify-center gap-2">
                <Link href="/" className="hover:text-navy">Home</Link>
                <span>/</span>
                <Link href="/guide" className="hover:text-navy">Guide</Link>
                <span>/</span>
                <span className="text-charcoal font-medium">{cityTitle}</span>
              </nav>
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
                <span className="inline-flex items-center rounded-full border border-navy/20 bg-navy/5 px-3 py-1 text-navy">
                  Trusted by 3,000+ vending operators nationwide
                </span>
                <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700">
                  Updated for 2026
                </span>
              </div>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-charcoal leading-tight">
                Start generating passive income from vending machines in <span className="text-navy">{cityDisplayName}</span>
              </h1>
              <p className="mt-3 text-base text-stone mx-auto max-w-2xl">
                {heroLineVariants[variantIndex]} {heroSupportVariants[variantIndex]} {heroSuffix}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://vendflow.gumroad.com/l/rxbzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryCtaClassName}
                  data-ga-event="cta_click"
                  data-ga-category="guide"
                  data-ga-label={`how_to_start_${citySlug}`}
                >
                  {primaryCtaLabel}
                </a>
                <span className="text-sm font-semibold text-charcoal">$79 one-time</span>
              </div>
              <p className="mt-2 text-xs font-semibold text-stone">
                Instant download • yours forever • printable checklists
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {valueCardVariants[variantIndex].map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-4 text-center">
                  <p className="text-sm font-semibold text-charcoal">{item.title}</p>
                  <p className="mt-2 text-sm text-stone">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social proof removed */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-12">
          {/* Quick start cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Get compliant fast', body: `Register your business, obtain an EIN, and confirm licensing for ${cityTitle}.` },
              { title: 'Lock in locations', body: `Target offices, healthcare, logistics, and education sites in ${cityTitle}.` },
              { title: 'Install & optimize', body: 'Install with card readers, service weekly, and expand based on sales.' }
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-stone">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-stone">
            {quickStartNotes[variantIndex]}
          </p>
          {relatedCities.length > 0 && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-playfair font-bold text-charcoal">Explore nearby guides</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {relatedCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/how-to-start-a-vending-machine-business/${city.slug}`}
                    className="rounded-full border border-gray-200 bg-cream/60 px-4 py-2 text-sm font-semibold text-chocolate hover:text-navy"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Step-by-step */}
          <div id="steps" className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-6">Step‑by‑step launch plan</h2>
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold leading-none text-white">
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
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-playfair font-bold text-charcoal mb-2">Costs & ROI</h2>
                <p className="text-stone">{costsIntroVariants[variantIndex]}</p>
              </div>
              <a
                href="https://vendflow.gumroad.com/l/rxbzy"
                target="_blank"
                rel="noopener noreferrer"
                className={primaryCtaClassName}
                data-ga-event="cta_click"
                data-ga-category="guide"
                data-ga-label={`how_to_start_${citySlug}`}
              >
                {primaryCtaLabel}
              </a>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
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
                  {roiCopyVariants[variantIndex]}
                </p>
                <div className="mt-4 rounded-lg border border-gray-200 bg-cream/60 p-4 text-sm text-stone">
                  <strong className="text-charcoal">Case study:</strong> 2 machines × $450/mo avg = $900/mo gross. Break‑even in ~12 months.
                </div>
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
                  <div className="mt-4 text-sm">
                    <Link href={`/ein-llc/${stateSlug}`} className="font-semibold text-navy hover:text-navy-light">
                      View {stateName} filing details
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="mt-5 rounded-xl border border-gray-200 bg-cream/60 p-5">
                  <p className="text-stone">Select your state to see the exact filing fee and checkout.</p>
                  <div className="mt-4">
                    <Link href="/ein-llc" className="text-sm font-semibold text-navy hover:text-navy-light">
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
                <div className="flex flex-wrap gap-4 text-sm font-semibold">
                  <Link href="/tax-services" className="text-navy hover:text-navy-light">
                    Explore Tax Services
                  </Link>
                  <Link href={`/bookkeeping-kpis/${citySlug}`} className="text-navy hover:text-navy-light">
                    Bookkeeping + KPI Reporting
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contracts & Scripts */}
          <div id="contracts" className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-playfair font-bold text-charcoal">Contracts & scripts</h2>
              <Link href="/vending-leads" className="text-sm font-semibold text-navy hover:text-navy-light">
                Explore placement services
              </Link>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2">{contractCopyVariants[variantIndex].title}</h3>
                <p className="text-stone">{contractCopyVariants[variantIndex].body}</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-2">{scriptCopyVariants[variantIndex].title}</h3>
                <p className="text-stone">{scriptCopyVariants[variantIndex].body}</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-playfair font-bold text-charcoal">FAQ: {cityTitle}</h2>
              <a
                href="https://vendflow.gumroad.com/l/rxbzy"
                target="_blank"
                rel="noopener noreferrer"
                className={primaryCtaClassName}
                data-ga-event="cta_click"
                data-ga-category="guide"
                data-ga-label={`how_to_start_${citySlug}`}
              >
                {primaryCtaLabel}
              </a>
            </div>
            <p className="mt-2 text-sm text-stone">{faqIntroVariants[variantIndex]}</p>
            <div className="mt-6 grid gap-4">
              {[
                { q: 'Do I need a permit to operate?', a: 'Most jurisdictions require a general business license and sales tax permit. Food vending may need additional health approvals.' },
                { q: 'Best places to start?', a: `Begin with offices, medical clinics, schools, gyms, logistics facilities, and municipal buildings in ${cityTitle}.` },
                { q: 'How many machines first?', a: 'Start with 1–2 machines, validate sales, then add more on proven sites.' },
                { q: 'Card readers needed?', a: 'Yes—cashless increases conversion and enables telemetry to track inventory and performance.' }
              ].map((item) => (
                <details key={item.q} className="rounded-xl border border-gray-200 bg-cream/60 p-5">
                  <summary className="cursor-pointer font-semibold text-charcoal">{item.q}</summary>
                  <p className="mt-2 text-stone">{item.a}</p>
                </details>
              ))}
              {cityInfo[citySlug]?.extraFaqs?.map((f, idx) => (
                <details key={idx} className="rounded-xl border border-gray-200 bg-cream/60 p-5">
                  <summary className="cursor-pointer font-semibold text-charcoal">{f.q}</summary>
                  <p className="mt-2 text-stone">{f.a}</p>
                </details>
              ))}
            </div>
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