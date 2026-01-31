import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface CityLandingPageProps {
  categoryLabel: string
  basePath: string
  city: string
  state: string
  heroTitle: string
  heroDescription: string
  benefits: string[]
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  heroClassName?: string
  showHeroAccents?: boolean
  primaryCtaClassName?: string
  secondaryCtaClassName?: string
  heroForm?: React.ReactNode
  children?: React.ReactNode
}

export default function CityLandingPage({
  categoryLabel,
  basePath,
  city,
  state,
  heroTitle,
  heroDescription,
  benefits,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  heroClassName = 'bg-white',
  showHeroAccents = false,
  primaryCtaClassName = 'bg-coral hover:bg-coral/90 text-white',
  secondaryCtaClassName = 'border border-charcoal/20 text-charcoal hover:border-charcoal/40',
  heroForm,
  children
}: CityLandingPageProps) {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-warm-white">
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-stone">
              <Link href="/" className="hover:text-navy transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href={basePath} className="hover:text-navy transition-colors">
                {categoryLabel}
              </Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{city}, {state}</span>
            </div>
          </div>
        </nav>

        <section className={`relative py-16 overflow-hidden ${heroClassName}`}>
          {showHeroAccents ? (
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-navy/20 blur-3xl" />
              <div className="absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-coral/20 blur-3xl" />
            </div>
          ) : null}
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-5">
                {heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-stone mb-8">
                {heroDescription}
              </p>
              {heroForm ? (
                <div className="mt-4 mb-6">
                  {heroForm}
                </div>
              ) : null}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href={primaryCtaHref}
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition ${primaryCtaClassName}`}
                  data-ga-event="cta_click"
                  data-ga-category="city-landing"
                  data-ga-label={`${categoryLabel} primary`}
                >
                  {primaryCtaLabel}
                </Link>
                {secondaryCtaLabel && secondaryCtaHref ? (
                  <Link
                    href={secondaryCtaHref}
                    className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${secondaryCtaClassName}`}
                    data-ga-event="cta_click"
                    data-ga-category="city-landing"
                    data-ga-label={`${categoryLabel} secondary`}
                  >
                    {secondaryCtaLabel}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-charcoal mb-6">
                What you get in {city}
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <p className="text-sm text-chocolate">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-charcoal mb-6">
                How it works
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
                  <p className="text-sm text-chocolate font-semibold mb-2">1. Tell us your goals</p>
                  <p className="text-sm text-stone">Share your target area, budget, and timeline.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
                  <p className="text-sm text-chocolate font-semibold mb-2">2. We match you locally</p>
                  <p className="text-sm text-stone">Get market-ready information for {city}, {state}.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
                  <p className="text-sm text-chocolate font-semibold mb-2">3. Move fast with support</p>
                  <p className="text-sm text-stone">Reach out with confidence and keep momentum.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {children ? (
          <section className="py-14">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-10">
                {children}
              </div>
            </div>
          </section>
        ) : null}

        <section className="py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto rounded-3xl border border-coral/20 bg-cream/40 p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-charcoal mb-4">
                Ready to get started in {city}?
              </h2>
              <p className="text-sm md:text-base text-stone mb-6">
                Get the clarity and support you need to move forward with confidence.
              </p>
              <Link
                href={primaryCtaHref}
                className="inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-coral/90"
              >
                {primaryCtaLabel}
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
