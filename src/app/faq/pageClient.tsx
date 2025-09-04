'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function PageClient() {
  const qa = {
    pricing: [
      {
        q: 'What are The Vending Locator fees?',
        a: 'We offer one-time packages starting at $19 for Basic (50+ locations), $29 for Pro (100+ locations), $129 for Start (200+ locations + resources), and $899 for Gold (300+ locations + setup resources). There are no recurring monthly fees for leads.'
      },
      {
        q: 'Is there a subscription?',
        a: 'No. Our lead packages are one-time purchases. You can reorder or upgrade anytime.'
      },
      {
        q: 'Do prices include sales tax or processing fees?',
        a: 'Prices shown are the checkout prices. Your card statement will reflect exactly the package cost.'
      },
      {
        q: 'How long does delivery take?',
        a: 'Basic delivers in ~5 days. Pro, Start, and Gold deliver in ~3 days. Delivery refers to preparing and validating the lead list for your area.'
      },
    ],
    how: [
      {
        q: 'How does the service work?',
        a: 'You choose a package and share your target zip code. We generate a vetted list of qualified businesses near your area. You then use our outreach guidance (and included resources on select plans) to contact decision-makers and secure placements.'
      },
      {
        q: 'What makes a lead “qualified”?',
        a: 'We target businesses with consistent foot traffic and staff counts that historically perform well for vending: offices, healthcare, education, logistics/industrial, municipal, gyms, and hospitality. Where available, we include phone numbers from public sources.'
      },
      {
        q: 'How is the search radius applied?',
        a: 'We cluster leads within a radius around your zip code (15 miles for Basic, 25 miles for Pro/Start/Gold) and focus on realistic drive times for route-building.'
      }
    ],
    cold: [
      {
        q: 'What are cold leads?',
        a: 'Cold leads are businesses likely to fit vending but not yet contacted. They require outreach to qualify and convert. Our scripts and sequences help you book meetings and gain placements.'
      },
      {
        q: 'How many cold leads are included?',
        a: 'Basic includes 50+, Pro 100+, Start 200+, and Gold 300+ qualified locations within your defined radius.'
      },
      {
        q: 'Do you provide outreach materials?',
        a: 'Yes. Start and Gold include outreach scripts; Gold includes more business setup resources. All packages include guidance on outreach process.'
      }
    ],
    hot: [
      {
        q: 'What are hot leads?',
        a: 'Hot leads are opportunities where the site or manager has expressed active interest or is pre-vetted for immediate placement. These are limited and time-sensitive.'
      },
      {
        q: 'How do I access hot leads?',
        a: 'Hot leads are surfaced on select city pages and via our internal queue. Availability varies by market and demand. Act quickly if you see one available.'
      },
      {
        q: 'Are hot leads guaranteed placements?',
        a: 'No. They are high-fit, time-sensitive opportunities with a higher likelihood of placement when contacted promptly and professionally.'
      }
    ],
    misc: [
      { q: 'Do you offer refunds?', a: 'Because research and validation are performed to your area, purchases are non-refundable.' },
      { q: 'Do I need card readers?', a: 'Yes—cashless increases conversion and enables telemetry for inventory and performance tracking.' },
      { q: 'Do you help with contracts?', a: 'Yes. Our higher-tier packages include contract templates. We also offer a separate Guide with detailed resources.' },
    ],
    industries: [
      {
        title: 'Offices & Corporate Campuses',
        items: [
          { q: 'What office size works best?', a: 'Start with 50+ on-site staff. Multi-tenant buildings with shared lobbies and break areas perform well. Reliable service cadence and card readers are key.' },
          { q: 'Recommended product mix?', a: 'Top-seller snacks and cold drinks; add a few better-for-you options. Track telemetry and rotate slow movers quarterly.' },
          { q: 'Any building requirements?', a: 'Many buildings require proof of insurance and a placement agreement. Confirm loading access, power, and hours for servicing.' }
        ]
      },
      {
        title: 'Healthcare (Hospitals & Clinics)',
        items: [
          { q: 'What should I know about healthcare sites?', a: 'Expect steady weekday traffic. Prioritize uptime, cleanliness, and cashless. Follow facility rules for placement and servicing windows.' },
          { q: 'Compliance considerations?', a: 'Some campuses have food policy guidelines and security checkpoints. Coordinate with facilities and adhere to sanitation standards.' },
          { q: 'Best locations on campus?', a: 'Administrative areas, waiting areas, staff lounges, and near main corridors with consistent foot traffic.' }
        ]
      },
      {
        title: 'Education (Schools & Universities)',
        items: [
          { q: 'K-12 vs University differences?', a: 'K‑12 often has stricter nutrition rules and limited access windows. Universities have more flexible placement options near libraries, dorms, and student centers.' },
          { q: 'Seasonality?', a: 'Align inventory and service with the academic calendar. Expect spikes during exam periods and move-in weeks.' },
          { q: 'Popular items?', a: 'Cold beverages, study snacks, and grab‑and‑go items with clear labeling. Card acceptance is a must.' }
        ]
      },
      {
        title: 'Logistics, Warehouses & Industrial',
        items: [
          { q: 'Shift-based operations tips?', a: 'Serve multiple shifts with evening restocks when needed. Focus on energy drinks, cold beverages, and hearty snacks for long shifts.' },
          { q: 'Placement guidance?', a: 'Break rooms near time clocks or main aisles with steady worker flow. Ensure machines are protected from dust and have stable power.' },
          { q: 'Security & access?', a: 'Coordinate with site leads for access badges or escort procedures. Maintain clear service SLAs and a reliable contact.' }
        ]
      },
      {
        title: 'Gyms & Fitness Centers',
        items: [
          { q: 'What sells well in gyms?', a: 'Protein snacks, low‑sugar drinks, water, and recovery options. Test a small set of SKUs and iterate with member feedback.' },
          { q: 'Peak times?', a: 'Early mornings, evenings, and weekends. Plan restocks before peak windows to avoid outages.' },
          { q: 'Small footprint tips?', a: 'Combo machines or compact units near lobby or locker corridors. Card-first setups perform best.' }
        ]
      },
      {
        title: 'Hospitality (Hotels & Extended Stay)',
        items: [
          { q: 'Where to place in hotels?', a: 'Near elevators, lobbies, or vending alcoves on high-occupancy floors. Ensure quiet operation and proper signage.' },
          { q: 'Guest preferences?', a: 'Late-night snacks, bottled drinks, and travel essentials. Card readers are critical for quick purchases.' },
          { q: 'Staff coordination?', a: 'Work with front-desk or facilities for access and to quickly address any outages.' }
        ]
      },
      {
        title: 'Municipal & Public Buildings',
        items: [
          { q: 'Approvals?', a: 'Follow procurement or facility management processes. Be prepared to provide insurance, references, and service commitments.' },
          { q: 'Traffic patterns?', a: 'Weekday daytime peaks. Focus on quick, affordable items and maintain high uptime.' },
          { q: 'Security notes?', a: 'Some buildings have screening checkpoints and limited service windows—plan routes accordingly.' }
        ]
      },
      {
        title: 'Residential Towers & HOAs',
        items: [
          { q: 'Where do machines perform best?', a: 'Lobbies, mail rooms, and fitness areas with steady resident flow. Quiet operation and compact footprints are helpful.' },
          { q: 'Expected demand?', a: 'Evening and weekend usage dominates. Stock everyday favorites and track telemetry for reorder cadence.' },
          { q: 'HOA considerations?', a: 'Obtain HOA or property manager approval and clarify responsibilities for power, placement, and service hours.' }
        ]
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      ...qa.pricing.map(i => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
      ...qa.how.map(i => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
      ...qa.cold.map(i => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
      ...qa.hot.map(i => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
      ...qa.misc.map(i => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
      ...qa.industries.flatMap(cat => cat.items.map(i => ({ '@type': 'Question', name: `${cat.title}: ${i.q}`, acceptedAnswer: { '@type': 'Answer', text: i.a } }))),
    ]
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-warm-white">
        {/* Hero */}
        <section className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-charcoal">
                Vending Locator Fees & Pricing FAQ
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-4 text-lg text-stone max-w-3xl mx-auto">
                Clear answers about pricing, how the service works, and the difference between hot leads and cold leads.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Sections */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">Pricing</h2>
                <div className="space-y-4">
                  {qa.pricing.map((item, idx) => (
                    <details key={`p-${idx}`} className="bg-white border border-gray-200 rounded-xl p-5">
                      <summary className="cursor-pointer font-semibold text-charcoal">{item.q}</summary>
                      <p className="mt-2 text-stone">{item.a}</p>
                    </details>
                  ))}
                </div>

                {/* Pricing comparison */}
                <div className="mt-8">
                  <div className="text-xl font-playfair font-bold text-charcoal mb-3">Pricing comparison</div>
                  <div className="text-stone text-sm mb-4">Generalized comparison for educational purposes. Specific competitor offerings vary by region and agreement.</div>
                  {/* Mobile cards */}
                  <div className="lg:hidden space-y-4">
                    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                      <div className="text-charcoal font-semibold mb-2">The Vending Locator</div>
                      <ul className="text-sm text-stone space-y-1 list-disc pl-5">
                        <li><span className="text-charcoal font-medium">Pricing model:</span> One‑time packages</li>
                        <li><span className="text-charcoal font-medium">Typical cost:</span> $19–$899</li>
                        <li><span className="text-charcoal font-medium">Lead ownership:</span> You own your list</li>
                        <li><span className="text-charcoal font-medium">Delivery time:</span> ~3–5 days</li>
                        <li><span className="text-charcoal font-medium">Contracts & scripts:</span> Included on higher tiers</li>
                        <li><span className="text-charcoal font-medium">Control & targeting:</span> You choose focus areas</li>
                        <li><span className="text-charcoal font-medium">Refund policy:</span> Non‑refundable research</li>
                        <li><span className="text-charcoal font-medium">Hot leads availability:</span> Limited, market‑dependent</li>
                        <li><span className="text-charcoal font-medium">Support:</span> Priority email on higher tiers</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                      <div className="text-charcoal font-semibold mb-2">Traditional Locator Service</div>
                      <ul className="text-sm text-stone space-y-1 list-disc pl-5">
                        <li><span className="text-charcoal font-medium">Pricing model:</span> Monthly subscription or per‑placement</li>
                        <li><span className="text-charcoal font-medium">Typical cost:</span> $99–$299/mo or $1k+ onboarding</li>
                        <li><span className="text-charcoal font-medium">Lead ownership:</span> Often limited access</li>
                        <li><span className="text-charcoal font-medium">Delivery time:</span> Varies (often weeks)</li>
                        <li><span className="text-charcoal font-medium">Contracts & scripts:</span> Rarely included</li>
                        <li><span className="text-charcoal font-medium">Control & targeting:</span> Limited targeting</li>
                        <li><span className="text-charcoal font-medium">Refund policy:</span> Typically non‑refundable</li>
                        <li><span className="text-charcoal font-medium">Hot leads availability:</span> Uncommon</li>
                        <li><span className="text-charcoal font-medium">Support:</span> Basic/ticket system</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                      <div className="text-charcoal font-semibold mb-2">Full‑service Agency</div>
                      <ul className="text-sm text-stone space-y-1 list-disc pl-5">
                        <li><span className="text-charcoal font-medium">Pricing model:</span> Retainer + placement fees</li>
                        <li><span className="text-charcoal font-medium">Typical cost:</span> $2k–$10k+ depending on scope</li>
                        <li><span className="text-charcoal font-medium">Lead ownership:</span> Agency‑managed</li>
                        <li><span className="text-charcoal font-medium">Delivery time:</span> Varies (often weeks)</li>
                        <li><span className="text-charcoal font-medium">Contracts & scripts:</span> Often extra cost</li>
                        <li><span className="text-charcoal font-medium">Control & targeting:</span> Agency decides</li>
                        <li><span className="text-charcoal font-medium">Refund policy:</span> Typically non‑refundable</li>
                        <li><span className="text-charcoal font-medium">Hot leads availability:</span> Sometimes via upsell</li>
                        <li><span className="text-charcoal font-medium">Support:</span> Account manager (retainer)</li>
                      </ul>
                    </div>
                  </div>

                  {/* Desktop table */}
                  <div className="hidden lg:block overflow-x-auto border border-gray-200 rounded-xl bg-white shadow-sm">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50 text-charcoal">
                          <th className="text-left px-4 py-3 font-semibold">Feature</th>
                          <th className="text-left px-4 py-3 font-semibold">The Vending Locator</th>
                          <th className="text-left px-4 py-3 font-semibold">Traditional Locator Service</th>
                          <th className="text-left px-4 py-3 font-semibold">Full‑service Agency</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="px-4 py-3 text-charcoal font-medium">Pricing model</td>
                          <td className="px-4 py-3 bg-cream/40 font-medium">One‑time packages</td>
                          <td className="px-4 py-3">Monthly subscription or per‑placement</td>
                          <td className="px-4 py-3">Retainer + placement fees</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-charcoal font-medium">Typical cost</td>
                          <td className="px-4 py-3 bg-cream/40 font-medium">$19–$899</td>
                          <td className="px-4 py-3">$99–$299/mo or $1k+ onboarding</td>
                          <td className="px-4 py-3">$2k–$10k+ depending on scope</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-charcoal font-medium">Lead ownership</td>
                          <td className="px-4 py-3 bg-cream/40 font-medium">You own your list</td>
                          <td className="px-4 py-3">Often limited access</td>
                          <td className="px-4 py-3">Agency‑managed</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-charcoal font-medium">Delivery time</td>
                          <td className="px-4 py-3 bg-cream/40 font-medium">~3–5 days</td>
                          <td className="px-4 py-3">Varies (often weeks)</td>
                          <td className="px-4 py-3">Varies (often weeks)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-charcoal font-medium">Contracts & scripts</td>
                          <td className="px-4 py-3 bg-cream/40 font-medium">Included on higher tiers</td>
                          <td className="px-4 py-3">Rarely included</td>
                          <td className="px-4 py-3">Often extra cost</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-charcoal font-medium">Control & targeting</td>
                          <td className="px-4 py-3 bg-cream/40 font-medium">You choose focus areas</td>
                          <td className="px-4 py-3">Limited targeting</td>
                          <td className="px-4 py-3">Agency decides</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-charcoal font-medium">Refund policy</td>
                          <td className="px-4 py-3 bg-cream/40 font-medium">Non‑refundable research</td>
                          <td className="px-4 py-3">Typically non‑refundable</td>
                          <td className="px-4 py-3">Typically non‑refundable</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-charcoal font-medium">Hot leads availability</td>
                          <td className="px-4 py-3 bg-cream/40 font-medium">Limited, market‑dependent</td>
                          <td className="px-4 py-3">Uncommon</td>
                          <td className="px-4 py-3">Sometimes via upsell</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-charcoal font-medium">Support</td>
                          <td className="px-4 py-3 bg-cream/40 font-medium">Priority email on higher tiers</td>
                          <td className="px-4 py-3">Basic/ticket system</td>
                          <td className="px-4 py-3">Account manager (retainer)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3 text-xs text-stone">
                    This comparison is provided for general informational purposes based on publicly available information and market experience. Specific competitor offerings, pricing, and timelines may vary by provider and region. No third‑party endorsements are implied.
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">How it works</h2>
                <div className="space-y-4">
                  {qa.how.map((item, idx) => (
                    <details key={`h-${idx}`} className="bg-white border border-gray-200 rounded-xl p-5">
                      <summary className="cursor-pointer font-semibold text-charcoal">{item.q}</summary>
                      <p className="mt-2 text-stone">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">Cold leads</h2>
                <div className="space-y-4">
                  {qa.cold.map((item, idx) => (
                    <details key={`c-${idx}`} className="bg-white border border-gray-200 rounded-xl p-5">
                      <summary className="cursor-pointer font-semibold text-charcoal">{item.q}</summary>
                      <p className="mt-2 text-stone">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">Hot leads</h2>
                <div className="space-y-4">
                  {qa.hot.map((item, idx) => (
                    <details key={`hl-${idx}`} className="bg-white border border-gray-200 rounded-xl p-5">
                      <summary className="cursor-pointer font-semibold text-charcoal">{item.q}</summary>
                      <p className="mt-2 text-stone">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">Industry-specific FAQs</h2>
                <div className="space-y-6">
                  {qa.industries.map((cat, cIdx) => (
                    <div key={`ind-${cIdx}`} className="bg-white border border-gray-200 rounded-xl p-5">
                      <div className="text-lg font-semibold text-charcoal mb-3">{cat.title}</div>
                      <div className="space-y-3">
                        {cat.items.map((item, idx) => (
                          <details key={`ind-${cIdx}-${idx}`}>
                            <summary className="cursor-pointer font-medium text-charcoal">{item.q}</summary>
                            <p className="mt-2 text-stone">{item.a}</p>
                          </details>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">More</h2>
                <div className="space-y-4">
                  {qa.misc.map((item, idx) => (
                    <details key={`m-${idx}`} className="bg-white border border-gray-200 rounded-xl p-5">
                      <summary className="cursor-pointer font-semibold text-charcoal">{item.q}</summary>
                      <p className="mt-2 text-stone">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-playfair font-bold text-charcoal">Short on time?</h3>
                <p className="text-stone mt-2">Pick a plan and we’ll prepare your lead list. Use our scripts to book meetings and place your machines.</p>
                <a href="/pricing" className="mt-4 inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-5 py-3 rounded-lg font-semibold w-full">View Pricing</a>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}


