import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bookkeeping & KPI Reporting for Vending Businesses - The Vending Locator',
  description: 'Monthly financials, route profitability reporting, and tax prep readiness for vending machine businesses.',
  alternates: { canonical: 'https://www.thevendinglocator.com/bookkeeping-kpis' },
  openGraph: {
    title: 'Bookkeeping & KPI Reporting for Vending Businesses - The Vending Locator',
    description: 'Monthly financials, route profitability reporting, and tax prep readiness for vending machine businesses.',
    url: 'https://www.thevendinglocator.com/bookkeeping-kpis',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bookkeeping & KPI Reporting for Vending Businesses',
    description: 'Monthly financials, route profitability reporting, and tax prep readiness for vending machine businesses.'
  },
  robots: { index: true, follow: true }
}

export default function BookkeepingKpisPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-warm-white">
        <section className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-6 py-16 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-charcoal">
              Bookkeeping & KPI Reporting for Vending Businesses
            </h1>
            <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
              Monthly financials, route profitability reporting, and tax prep readiness designed for vending operators.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-coral/90"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/tax-services"
                className="inline-flex items-center justify-center rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal transition hover:border-charcoal/40"
              >
                Tax Services
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-charcoal mb-2">Monthly Financials</h2>
              <p className="text-stone">
                Clear P&L, balance sheet, and cash flow summaries to track performance and growth.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-charcoal mb-2">Route Profitability</h2>
              <p className="text-stone">
                Understand which locations and routes drive profit so you can optimize inventory and service cadence.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-charcoal mb-2">Tax-Ready Books</h2>
              <p className="text-stone">
                Clean monthly books make tax preparation faster and help you avoid surprises at year end.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
