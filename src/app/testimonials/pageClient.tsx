
'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { StarIcon, CheckBadgeIcon, MapPinIcon, ChartBarIcon } from '@heroicons/react/24/solid'
import { useMemo, useState } from 'react'

type Region = 'All' | 'West' | 'South' | 'Midwest' | 'East'

const testimonials = [
  {
    body: "Closed two locations from my first batch of leads. Contacts were spot-on and decision-makers actually picked up.",
    author: { name: 'A.R.', handle: 'Texas Operator' },
    rating: 5,
    ratingNumber: 5.0,
    location: 'Dallas, TX',
    industry: 'Healthcare + Office Parks',
    timeframe: '2 weeks ago',
    result: '2 deals in 10 days',
    region: 'South' as Region,
  },
  {
    body: "Exactly what I needed to expand — verified businesses with real gatekeepers. Cold calls finally turned into meetings.",
    author: { name: 'J.K.', handle: 'Florida Vendor' },
    rating: 5,
    ratingNumber: 4.9,
    location: 'Orlando, FL',
    industry: 'Hospitality + Warehouses',
    timeframe: '3 weeks ago',
    result: '6 qualified convos in week 1',
    region: 'South' as Region,
  },
  {
    body: "I tried a few services before. This one actually delivered usable leads. The data quality made outreach fast.",
    author: { name: 'S.L.', handle: 'California Operator' },
    rating: 5,
    ratingNumber: 4.9,
    location: 'San Jose, CA',
    industry: 'Tech Campuses',
    timeframe: '1 month ago',
    result: '1 contract signed, 1 pending',
    region: 'West' as Region,
  },
  {
    body: "Great communication and quick turnaround. The list matched my machine types and city radius perfectly.",
    author: { name: 'D.P.', handle: 'Illinois Vendor' },
    rating: 5,
    ratingNumber: 5.0,
    location: 'Chicago, IL',
    industry: 'Manufacturing + Schools',
    timeframe: '2 months ago',
    result: 'Booked 4 site visits',
    region: 'Midwest' as Region,
  },
  {
    body: "Went from zero pipeline to three strong conversations in a week. Clear, cold‑call‑ready details.",
    author: { name: 'M.T.', handle: 'Georgia Operator' },
    rating: 5,
    ratingNumber: 4.8,
    location: 'Atlanta, GA',
    industry: 'Logistics + Retail',
    timeframe: '3 weeks ago',
    result: '3 warm opportunities',
    region: 'South' as Region,
  },
  {
    body: "Replacements policy is legit — any dead ends got swapped fast. No wasted time.",
    author: { name: 'C.N.', handle: 'Arizona Vendor' },
    rating: 5,
    ratingNumber: 5.0,
    location: 'Phoenix, AZ',
    industry: 'Corporate Offices',
    timeframe: '4 weeks ago',
    result: 'Pipeline doubled',
    region: 'West' as Region,
  },
]

const clientStories = [
  {
    initials: 'T.O.',
    title: 'Texas operator adds two routes',
    region: 'Dallas, TX',
    story:
      'I started with a small snack route and needed offices with steady foot traffic. I called 14 businesses from the first list and reached three decision makers. Two meetings turned into signed approvals within nine days. I reordered a larger package once I saw the quality of the contacts.',
  },
  {
    initials: 'F.V.',
    title: 'Florida vendor unlocks a hospital breakroom',
    region: 'Orlando, FL',
    story:
      'Hospitals were hard for me to approach on my own. The list included the facilities manager and a secondary contact with a direct number. I booked a walkthrough and placed a combo machine in the staff lounge. Sales have been steady since week two and I am now adding a second unit.',
  },
  {
    initials: 'C.O.',
    title: 'California operator lands a tech office',
    region: 'San Jose, CA',
    story:
      'The research matched my machine type and city radius. I made 10 calls on a Monday and got a call back from operations at a mid sized tech firm. We agreed to a trial period and the machine was installed the following week. The office asked for a product rotation plan after the first restock.',
  },
  {
    initials: 'M.W.',
    title: 'Midwest route expands into a school district',
    region: 'Chicago, IL',
    story:
      'I wanted to diversify beyond warehouses. The leads included a district contact and a maintenance coordinator email. After a short review process I placed machines at two facilities. I plan to add a coffee unit next quarter based on the feedback from staff.',
  },
]

export default function PageClient() {
  const [region, setRegion] = useState<Region>('All')
  const [sort, setSort] = useState<'recent' | 'rating'>('recent')

  const filtered = useMemo(() => {
    let data = region === 'All' ? testimonials : testimonials.filter(t => t.region === region)
    if (sort === 'rating') {
      data = [...data].sort((a, b) => b.ratingNumber - a.ratingNumber)
    } else {
      // Keep original order as a proxy for recency
      data = [...data]
    }
    return data
  }, [region, sort])

  return (
    <main className="min-h-screen bg-cream">
      <Header />

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-chocolate"
            >
              Testimonials
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg sm:text-xl text-chocolate/70"
            >
              Real feedback from operators nationwide. We keep client identities private, so names are abbreviated.
            </motion.p>
          </div>

          {/* Submission CTA */}
          <div className="mt-8 text-center">
            <a href="#submit-testimonial" className="inline-flex items-center gap-2 border border-navy text-navy hover:bg-navy/10 px-6 py-2.5 rounded-lg font-semibold transition-colors">Submit Your Results</a>
          </div>

          {/* Aggregate rating */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100">
                <StarIcon className="h-3.5 w-3.5 text-yellow-500" />
              </span>
              <span className="text-sm text-chocolate"><strong>4.9/5</strong> from 200+ operators</span>
            </div>
          </div>

          {/* Filters and sort */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {(['All','West','South','Midwest','East'] as Region[]).map(r => (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  className={`px-3 py-1.5 rounded-full border text-sm ${region === r ? 'bg-navy text-white border-navy' : 'bg-white border-gray-200 text-chocolate hover:bg-navy/5'}`}
                >
                  {r}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <label htmlFor="sort" className="text-chocolate/70">Sort</label>
              <select id="sort" value={sort} onChange={(e) => setSort(e.target.value as any)} className="border border-gray-200 rounded-md bg-white px-2 py-1 text-chocolate">
                <option value="recent">Most recent</option>
                <option value="rating">Top rated</option>
              </select>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className="bg-white rounded-xl p-6 sm:p-7 shadow-lg border border-gray-200"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-navy text-white flex items-center justify-center font-semibold text-sm sm:text-base shadow-sm ring-2 ring-white">
                      {t.author.name.replace(/\./g,'').slice(0,2).toUpperCase()}
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-chocolate">{t.author.name}</div>
                      <div className="text-chocolate/70">{t.author.handle}</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-1 rounded-full">
                    <CheckBadgeIcon className="h-4 w-4" /> Verified customer
                  </span>
                </div>

                {/* Meta */}
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-stone">
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-navy/10 text-navy">
                      <MapPinIcon className="h-3.5 w-3.5" />
                    </span>
                    {t.location}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span>{t.industry}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{t.timeframe}</span>
                </div>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(t.rating)].map((_, idx) => (
                      <StarIcon key={idx} className="h-4 w-4 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-stone">{t.ratingNumber.toFixed(1)}</span>
                </div>

                {/* Quote */}
                <p className="mt-3 text-chocolate/80 text-sm sm:text-base leading-relaxed">“{t.body}”</p>

                {/* Result pill */}
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-cream/60 border border-gray-200 px-3 py-1.5 text-xs text-chocolate">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-navy/10 text-navy">
                    <ChartBarIcon className="h-3.5 w-3.5" />
                  </span>
                  {t.result}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Client Stories */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate text-center mb-6">Client Stories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {clientStories.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.04 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-navy text-white flex items-center justify-center font-semibold text-sm ring-2 ring-white">
                        {s.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-chocolate">{s.title}</div>
                        <div className="text-xs text-stone">{s.region}</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-chocolate/80 leading-relaxed">{s.story}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Simple submission form */}
          <div id="submit-testimonial" className="mt-16 max-w-xl mx-auto bg-cream/60 border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-chocolate mb-2">Share Your Results</h3>
            <p className="text-stone mb-4 text-sm">We keep names private. Initials and region only.</p>
            <form action="https://formspree.io/f/xdkgqele" method="POST" className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input name="initials" required placeholder="Initials (e.g., A.R.)" className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white" />
                <input name="region" required placeholder="Region (e.g., Texas)" className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white" />
              </div>
              <textarea name="body" required placeholder="Your experience (results, timeline)" className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white w-full h-24" />
              <button type="submit" className="w-full bg-navy hover:bg-navy-light text-white px-4 py-2.5 rounded-lg font-semibold">Submit</button>
            </form>
          </div>

          {/* JSON-LD for reviews */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'The Vending Locator Leads',
              aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: 200 },
              review: testimonials.map(t => ({
                '@type': 'Review',
                reviewRating: { '@type': 'Rating', ratingValue: t.ratingNumber },
                reviewBody: t.body,
                author: { '@type': 'Person', name: t.author.name },
              }))
            }) }}
          />

          <div className="mt-12 text-center">
            <a href="/pricing" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">View Plans</a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}


