import { Metadata } from 'next'
import CityLandingPage from '@/components/CityLandingPage'
import { getCityVariantCopy } from '@/lib/city-variations'

export const metadata: Metadata = {
  title: 'Bookkeeping & KPI Reporting in Jacksonville, Florida - The Vending Locator',
  description: 'Monthly financials, route profitability reporting, and tax prep readiness for vending businesses in Jacksonville, Florida.',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/bookkeeping-kpis/jacksonville-florida'
  },
  openGraph: {
    title: 'Bookkeeping & KPI Reporting in Jacksonville, Florida - The Vending Locator',
    description: 'Monthly financials, route profitability reporting, and tax prep readiness for vending businesses in Jacksonville, Florida.',
    url: 'https://www.thevendinglocator.com/bookkeeping-kpis/jacksonville-florida',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bookkeeping & KPI Reporting in Jacksonville, Florida',
    description: 'Monthly financials, route profitability reporting, and tax prep readiness for vending businesses in Jacksonville, Florida.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function JacksonvilleBookkeepingKpisPage() {
  const { heroSuffix, benefit } = getCityVariantCopy({
    category: 'bookkeeping-kpis',
    slug: 'jacksonville-florida',
    city: 'Jacksonville',
    state: 'Florida'
  })
  const benefits = [
    'Monthly P&L and cash flow summaries for Jacksonville routes',
    'Location-level KPI tracking to highlight top-performing machines',
    benefit
  ]

  return (
    <CityLandingPage
      categoryLabel="Bookkeeping + KPIs"
      basePath="/bookkeeping-kpis"
      city="Jacksonville"
      state="Florida"
      heroTitle="Bookkeeping & KPI Reporting in Jacksonville, Florida"
      heroDescription={`Get monthly financials, route profitability reporting, and tax prep readiness built for vending operators in Jacksonville. ${heroSuffix}`}
      benefits={benefits}
      primaryCtaLabel="Schedule a Consultation"
      primaryCtaHref="/contact"
      secondaryCtaLabel="Tax Services"
      secondaryCtaHref="/tax-services/jacksonville-florida"
      heroClassName="bg-gradient-to-br from-blue-50 via-white to-coral/5"
      showHeroAccents={false}
      primaryCtaClassName="bg-navy hover:bg-navy-light text-white"
      secondaryCtaClassName="border-2 border-chocolate text-chocolate hover:bg-chocolate hover:text-white"
      heroForm={
        <div className="mx-auto w-full max-w-4xl rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div className="rounded-2xl bg-cream/60 p-5 text-left order-2 lg:order-1">
              <h3 className="text-lg font-semibold text-charcoal mb-2">What you’ll receive</h3>
              <ul className="list-disc pl-5 text-stone space-y-2">
                <li>Monthly financials with clear owner summaries</li>
                <li>Route profitability and location-level KPIs</li>
                <li>Tax-ready books and clean reconciliations</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy">Fast onboarding</span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-coral">Vending focused</span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-chocolate">Monthly insights</span>
              </div>
            </div>
            <form
              action="https://formspree.io/f/mwvvokpz"
              method="POST"
              className="space-y-3 order-1 lg:order-2"
            >
              <input
                name="name"
                type="text"
                required
                placeholder="Full name"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-charcoal focus:border-navy focus:outline-none"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-charcoal focus:border-navy focus:outline-none"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone (optional)"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-charcoal focus:border-navy focus:outline-none"
              />
              <input
                name="company"
                type="text"
                placeholder="Business name"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-charcoal focus:border-navy focus:outline-none"
              />
              <input
                name="locations"
                type="text"
                placeholder="Machines / locations"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-charcoal focus:border-navy focus:outline-none"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy-light"
              >
                Get a KPI Plan
              </button>
              <p className="text-xs text-stone">
                We’ll follow up within 1 business day with next steps.
              </p>
            </form>
          </div>
        </div>
      }
    >
      <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-2">What’s included</h2>
            <p className="text-stone">
              A monthly reporting package designed around vending operations, with clean financials and location-level clarity.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-navy/10 px-3 py-1 text-xs font-semibold text-navy">Monthly close</span>
            <span className="rounded-full bg-coral/10 px-3 py-1 text-xs font-semibold text-coral">Route KPIs</span>
            <span className="rounded-full bg-cream/80 px-3 py-1 text-xs font-semibold text-chocolate">Tax-ready</span>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-100 bg-white p-5">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Monthly financials</h3>
            <ul className="list-disc pl-5 text-stone space-y-2">
              <li>P&amp;L, balance sheet, and cash flow summary</li>
              <li>Category-level revenue and expense tracking</li>
              <li>Owner-ready monthly snapshot and insights</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white p-5">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Route profitability</h3>
            <ul className="list-disc pl-5 text-stone space-y-2">
              <li>Location-level performance and margin tracking</li>
              <li>Restock cadence and product mix guidance</li>
              <li>Identify top routes and underperformers</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">KPI dashboard</h2>
            <p className="text-stone">
              A simple scorecard that shows where Jacksonville routes are winning and where margins leak.
            </p>
          </div>
          <div className="lg:col-span-7 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-cream/60 p-4 text-sm text-stone">Avg revenue per machine</div>
            <div className="rounded-2xl border border-gray-200 bg-cream/60 p-4 text-sm text-stone">Route margin by location</div>
            <div className="rounded-2xl border border-gray-200 bg-cream/60 p-4 text-sm text-stone">Service cadence efficiency</div>
            <div className="rounded-2xl border border-gray-200 bg-cream/60 p-4 text-sm text-stone">Inventory sell-through</div>
            <div className="rounded-2xl border border-gray-200 bg-cream/60 p-4 text-sm text-stone">Top SKU performance</div>
            <div className="rounded-2xl border border-gray-200 bg-cream/60 p-4 text-sm text-stone">Cash vs card mix</div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-coral/30 bg-gradient-to-r from-white via-cream/60 to-white p-8 shadow-sm">
        <h2 className="text-2xl font-playfair font-bold text-charcoal mb-3">Tax-ready, month by month</h2>
        <p className="text-stone">
          Clean books make filing faster and reduce surprises. We reconcile monthly so year-end tax prep is straightforward.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white/80 p-4 text-sm text-chocolate shadow-sm">Monthly reconciliation</div>
          <div className="rounded-2xl bg-white/80 p-4 text-sm text-chocolate shadow-sm">Owner summaries</div>
          <div className="rounded-2xl bg-white/80 p-4 text-sm text-chocolate shadow-sm">Tax prep readiness</div>
        </div>
      </div>
    </CityLandingPage>
  )
}
