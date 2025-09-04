'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { StarIcon, CheckBadgeIcon, MapPinIcon, ChartBarIcon } from '@heroicons/react/24/solid'

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
  },
]

export default function PageClient() {
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

          {/* Aggregate rating */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-chocolate"><strong>4.9/5</strong> from 200+ operators</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t, i) => (
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
                    <div className="h-10 w-10 rounded-full bg-coral text-white flex items-center justify-center font-semibold text-sm shadow-sm">
                      {t.author.name.replace(/\./g,'').slice(0,2)}
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
                  <span className="inline-flex items-center gap-1"><MapPinIcon className="h-4 w-4 text-navy" /> {t.location}</span>
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
                  <ChartBarIcon className="h-4 w-4 text-navy" /> {t.result}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/pricing" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">View Plans</a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}


