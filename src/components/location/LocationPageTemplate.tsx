import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import Script from 'next/script'
import { CityLandingContent } from '@/config/locationPages'

interface LocationPageTemplateProps {
  content: CityLandingContent
}

export function LocationPageTemplate({ content }: LocationPageTemplateProps) {
  const { hero, sidebar, coolerLineup, sellingPoints, neighborhoods, deliverables, logistics, faq } = content

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Vending Machines for Sale in ${content.city}, ${content.state}`,
    description: hero.description,
    brand: {
      '@type': 'Organization',
      name: 'The Vending Locator'
    },
    areaServed: {
      '@type': 'Place',
      name: `${content.city}, ${content.state}`
    },
    url: `https://www.thevendinglocator.com/${content.slug}`,
    offers: coolerLineup.map((cooler) => ({
      '@type': 'Offer',
      name: cooler.name,
      price: cooler.price.replace(/[^0-9.]/g, ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: cooler.amazonUrl
    })),
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'US',
      returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
      merchantReturnDays: 30
    }
  }

  return (
    <div className="bg-warm-white min-h-screen text-charcoal">
      <Header />

      <main>
        <section className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-stone mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 font-semibold text-navy">
                <hero.eyebrow.icon className="h-4 w-4" />
                {hero.eyebrow.label}
              </div>
              <span className="inline-flex items-center gap-2 text-navy font-semibold">
                <hero.supportLink.icon className="h-5 w-5" />
                24/7 Support:{' '}
                <a
                  href={hero.supportLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  {hero.supportLink.label}
                </a>
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal mb-6">
                  {hero.headline.pre}{' '}
                  <span className="text-navy">{hero.headline.highlight}</span>
                </h1>
                <p className="text-lg leading-8 text-stone mb-6">{hero.description}</p>
                <div className="space-y-3 text-sm text-stone mb-8">
                  {hero.bullets.map((bullet) => (
                    <div key={bullet.text} className="flex items-center gap-2">
                      <bullet.icon className="h-5 w-5 text-green-600" />
                      <span>{bullet.text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  {hero.ctas.map((cta) => {
                    const baseClasses = 'w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-lg text-center transition-colors'
                    const primaryClasses = 'bg-navy hover:bg-navy-light text-white'
                    const secondaryClasses =
                      'bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white'

                    const className = `${baseClasses} ${cta.variant === 'primary' ? primaryClasses : secondaryClasses}`

                    if (cta.external) {
                      return (
                        <a key={cta.label} href={cta.href} target="_blank" rel="noopener noreferrer" className={className}>
                          {cta.label}
                        </a>
                      )
                    }

                    return (
                      <Link key={cta.label} href={cta.href} className={className}>
                        {cta.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
              <div className="relative bg-white rounded-2xl border border-gray-200 p-6 lg:p-8">
                <div className="bg-blue-50 text-navy text-sm font-semibold inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4">
                  <sidebar.badge.icon className="h-4 w-4" />
                  {sidebar.badge.label}
                </div>
                <ul className="space-y-4 text-stone leading-relaxed">
                  {sidebar.items.map((item) => (
                    <li key={item.title}>
                      <strong className="text-charcoal">{item.title}</strong> {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-warm-white border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal">
                  Best-selling smart coolers for {content.city}
                </h2>
                <p className="mt-3 text-stone leading-relaxed">
                  Pair the right Haha cooler with your placement strategy. We keep inventory in rotation so you can scale new routes without delays.
                </p>
              </div>
              <Link href="/haha-coolers" className="inline-flex items-center gap-2 text-navy font-semibold hover:underline">
                View the full Haha Coolers lineup →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coolerLineup.map((cooler) => (
                <div key={cooler.name} className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-6">
                  <img src={cooler.image.src} alt={cooler.image.alt} className="w-full h-44 object-contain" />
                  <div>
                    <h3 className="text-2xl font-semibold text-charcoal">{cooler.name}</h3>
                    <p className="mt-2 text-lg font-bold text-navy">{cooler.price}</p>
                    <p className="mt-3 text-stone leading-relaxed">{cooler.description}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-stone">
                    {cooler.bullets.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="text-navy mt-0.5">✦</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-col gap-3">
                    <a
                      href={cooler.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-navy hover:bg-navy-light text-white px-5 py-3 rounded-lg font-semibold text-center transition-colors"
                    >
                      Buy on Amazon
                    </a>
                    <Link href={cooler.learnMoreUrl} className="text-navy font-semibold text-center hover:underline">
                      Learn more about {cooler.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {sellingPoints.map((point) => (
                <div key={point.title} className="bg-warm-white border border-gray-200 rounded-2xl p-8 flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10">
                    <point.icon className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">{point.title}</h3>
                    <p className="text-stone leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-warm-white border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal text-center mb-10">
              {content.city} coverage playbook
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-charcoal mb-4 inline-flex items-center gap-2">
                  Coverage neighbourhoods
                </h3>
                <ul className="space-y-3 text-stone leading-relaxed">
                  {neighborhoods.map((area) => (
                    <li key={area} className="flex items-start gap-2">
                      <span className="text-navy mt-0.5">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-charcoal mb-4 inline-flex items-center gap-2">
                  What we deliver
                </h3>
                <ul className="space-y-3 text-stone leading-relaxed">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-navy mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {logistics.map((item) => (
                <div key={item.title} className="bg-warm-white border border-gray-200 rounded-2xl p-8 flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10">
                    <item.icon className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                    <p className="text-stone leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-warm-white border-b border-gray-200">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal text-center mb-10">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faq.map((item) => (
                <details
                  key={item.question}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <summary className="text-lg font-semibold text-charcoal cursor-pointer flex items-center justify-between">
                    {item.question}
                    <span className="ml-4 text-navy group-open:rotate-90 transition-transform">›</span>
                  </summary>
                  <p className="mt-3 text-stone leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6">
              Ready to launch in {content.city}?
            </h2>
            <p className="text-lg text-stone leading-relaxed mb-8">
              Partner with The Vending Locator to secure high-performing placements, smart vending machines, and the 24/7 support team every {content.city} operator needs. We stay in the trenches with you from shipment to your first profitable route—and beyond.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Schedule a {content.city} Strategy Call
              </Link>
              <a
                href="https://t.me/thevendinglocator"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy border-2 border-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy hover:text-white transition-colors"
              >
                Chat with Support 24/7
              </a>
            </div>
            <p className="mt-6 text-sm text-stone">
              Prefer to browse? Visit our{' '}
              <Link href="/haha-coolers" className="text-navy font-semibold hover:underline">
                smart cooler showroom
              </Link>{' '}
              for in-depth specs, placements, and Amazon purchase links.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      <Script id={`${content.slug}-jsonld`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}

