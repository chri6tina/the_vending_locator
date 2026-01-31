"use client"

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  CheckBadgeIcon,
  ClockIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
  HeartIcon,
  MapPinIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  SparklesIcon,
  StarIcon,
  TruckIcon,
  UsersIcon
} from '@heroicons/react/24/solid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import CityPageSEO from '@/components/CityPageSEO'
import states from '@/data/states'
import { getCityVariantCopy } from '@/lib/city-variations'

const getVariantIndex = (slug: string) =>
  Math.abs([...slug].reduce((acc, char) => acc * 31 + char.charCodeAt(0), 7)) % 4

const stateAbbrMap: Record<string, string> = {
  'Alabama': 'AL',
  'Alaska': 'AK',
  'Arizona': 'AZ',
  'Arkansas': 'AR',
  'California': 'CA',
  'Colorado': 'CO',
  'Connecticut': 'CT',
  'Delaware': 'DE',
  'Florida': 'FL',
  'Georgia': 'GA',
  'Hawaii': 'HI',
  'Idaho': 'ID',
  'Illinois': 'IL',
  'Indiana': 'IN',
  'Iowa': 'IA',
  'Kansas': 'KS',
  'Kentucky': 'KY',
  'Louisiana': 'LA',
  'Maine': 'ME',
  'Maryland': 'MD',
  'Massachusetts': 'MA',
  'Michigan': 'MI',
  'Minnesota': 'MN',
  'Mississippi': 'MS',
  'Missouri': 'MO',
  'Montana': 'MT',
  'Nebraska': 'NE',
  'Nevada': 'NV',
  'New Hampshire': 'NH',
  'New Jersey': 'NJ',
  'New Mexico': 'NM',
  'New York': 'NY',
  'North Carolina': 'NC',
  'North Dakota': 'ND',
  'Ohio': 'OH',
  'Oklahoma': 'OK',
  'Oregon': 'OR',
  'Pennsylvania': 'PA',
  'Rhode Island': 'RI',
  'South Carolina': 'SC',
  'South Dakota': 'SD',
  'Tennessee': 'TN',
  'Texas': 'TX',
  'Utah': 'UT',
  'Vermont': 'VT',
  'Virginia': 'VA',
  'Washington': 'WA',
  'West Virginia': 'WV',
  'Wisconsin': 'WI',
  'Wyoming': 'WY',
  'District of Columbia': 'DC'
}

interface VendingLeadsCityTemplateProps {
  city: string
  state: string
  slug: string
}

export default function VendingLeadsCityTemplate({ city, state, slug }: VendingLeadsCityTemplateProps) {
  const cityDisplayName = city
  const stateDisplayName = state
  const variantIndex = getVariantIndex(slug)
  const { heroSuffix, benefit } = getCityVariantCopy({
    category: 'vending-leads',
    slug,
    city,
    state
  })

  const statsByVariant = [
    { population: '50K+', businesses: '1K-3K', industries: '6-10', verifiedLocations: '50-150' },
    { population: '100K+', businesses: '3K-7K', industries: '8-12', verifiedLocations: '100-250' },
    { population: '250K+', businesses: '7K-15K', industries: '10-15', verifiedLocations: '200-400' },
    { population: '500K+', businesses: '15K+', industries: '12-18', verifiedLocations: '300-600' }
  ]

  const cityData = statsByVariant[variantIndex]
  const heroLeadVariants = [
    `Discover high-quality vending opportunities in ${cityDisplayName}, ${stateDisplayName}, with pre-qualified locations in office buildings, retail spaces, and transportation hubs.`,
    `Access vetted vending machine placements in ${cityDisplayName}, ${stateDisplayName} across offices, healthcare, and high-traffic retail corridors.`,
    `Get placement-ready vending leads in ${cityDisplayName}, ${stateDisplayName} with locations matched to consistent foot traffic.`,
    `Find verified vending locations in ${cityDisplayName}, ${stateDisplayName} across business districts and community hubs.`
  ]
  const pricingIntroVariants = [
    `Choose the perfect plan for your vending machine business needs and start accessing qualified locations today.`,
    `Pick a one-time package that fits your goals and start securing location leads.`,
    `Select a lead package built for fast placement and predictable results.`,
    `Choose a plan and get vetted locations without monthly commitments.`
  ]
  const landscapeIntroVariants = [
    `Discover the diverse industries and business opportunities that make ${cityDisplayName} an ideal market for vending machines.`,
    `Explore the top industries driving vending demand in ${cityDisplayName}.`,
    `See why ${cityDisplayName} supports strong vending performance across multiple sectors.`,
    `Learn which industries in ${cityDisplayName} create the best vending opportunities.`
  ]
  const whyChooseVariants = [
    `The ${cityDisplayName} market offers excellent vending opportunities through its combination of corporate headquarters, healthcare networks, and educational institutions. High foot traffic areas and captive audiences create ideal conditions for vending success.`,
    `${cityDisplayName} combines steady business traffic with diverse industries, creating dependable vending placement opportunities. Strong daytime footfall and repeat visits support consistent sales.`,
    `With a mix of offices, clinics, and retail corridors, ${cityDisplayName} offers reliable placement potential for vending operators focused on long-term revenue.`,
    `Operators choose ${cityDisplayName} for its concentrated business zones, stable demand, and favorable placement conditions across multiple location types.`
  ]
  const hotLeadsIntroVariants = [
    `Get immediate access to qualified vending machine locations without monthly commitments.`,
    `Purchase one-time location packages and start placing machines faster.`,
    `Unlock vetted location packages and avoid long-term contracts.`,
    `Access verified locations instantly with a one-time package.`
  ]
  const courseIntroVariants = [
    `Master the fundamentals of vending machine operations and maximize your success in ${cityDisplayName}.`,
    `Learn the proven steps to grow a vending route in ${cityDisplayName}.`,
    `Build confidence with training designed for operators in ${cityDisplayName}.`,
    `Get the playbook for building a profitable route in ${cityDisplayName}.`
  ]
  const faqIntroVariants = [
    `Answers to common questions about vending leads, placement, and opportunities in ${cityDisplayName}.`,
    `Quick answers to the most asked vending lead questions in ${cityDisplayName}.`,
    `FAQs to help you place machines faster in ${cityDisplayName}.`,
    `Common questions from operators looking to place in ${cityDisplayName}.`
  ]
  const industryBodyVariants = [
    {
      Healthcare: `Healthcare institutions in ${cityDisplayName} offer prime vending locations with high visitor counts, extended operating hours, and captive audiences seeking convenient snack and beverage options.`,
      Education: `${cityDisplayName}'s schools, colleges, and universities create excellent vending opportunities with high student traffic, campus events, and extended hours that maximize machine usage.`,
      Manufacturing: `Industrial operations in ${cityDisplayName} feature large workforces and shift schedules that create reliable vending revenue through employee break times and shift changes.`,
      Retail: `Retail locations throughout ${cityDisplayName} provide excellent vending opportunities in malls, shopping centers, and high-traffic commercial areas with consistent customer flow.`,
      Office: `Corporate office buildings throughout ${cityDisplayName} feature professional workforces and business operations that create reliable vending revenue through employee break times and meetings.`,
      Transportation: `Airports, bus stations, and transit centers throughout ${cityDisplayName} generate steady passenger traffic, providing excellent vending placement options in high-traffic areas frequented by travelers.`
    },
    {
      Healthcare: `${cityDisplayName} healthcare facilities see steady foot traffic and long operating hours, making them dependable vending locations.`,
      Education: `Schools and campuses in ${cityDisplayName} create consistent demand with student and staff traffic throughout the day.`,
      Manufacturing: `Shift-based workforces in ${cityDisplayName} manufacturing sites drive reliable snack and beverage sales.`,
      Retail: `Retail corridors in ${cityDisplayName} deliver repeat visitors and predictable peak periods for vending demand.`,
      Office: `Office hubs in ${cityDisplayName} provide steady weekday demand and consistent break-time traffic.`,
      Transportation: `Transit hubs in ${cityDisplayName} bring repeat travelers and all-day foot traffic.`
    },
    {
      Healthcare: `Hospitals and clinics in ${cityDisplayName} offer long hours and consistent visitor volume for vending placements.`,
      Education: `${cityDisplayName} education sites deliver dependable traffic during school hours and events.`,
      Manufacturing: `Industrial parks in ${cityDisplayName} benefit from shift changes that boost vending activity.`,
      Retail: `Shopping centers in ${cityDisplayName} provide steady customer flow and high visibility placements.`,
      Office: `Professional office buildings in ${cityDisplayName} support consistent weekday vending sales.`,
      Transportation: `Airports and stations in ${cityDisplayName} offer high-traffic, quick-purchase environments.`
    },
    {
      Healthcare: `Healthcare networks in ${cityDisplayName} create steady demand for convenient refreshments.`,
      Education: `Campus environments in ${cityDisplayName} provide predictable daily demand and event spikes.`,
      Manufacturing: `Manufacturing facilities in ${cityDisplayName} drive repeat sales from large employee bases.`,
      Retail: `Retail centers in ${cityDisplayName} support strong vending performance with continuous foot traffic.`,
      Office: `Office campuses in ${cityDisplayName} deliver reliable weekday sales patterns.`,
      Transportation: `Transportation hubs in ${cityDisplayName} generate consistent high-volume traffic for vending.`
    }
  ]
  const faqVariantSets = [
    [
      {
        q: `What types of vending machine locations are available in ${cityDisplayName}?`,
        a: `${cityDisplayName} offers diverse vending opportunities including healthcare facilities, educational institutions, retail locations, office buildings, and manufacturing facilities. Each location is pre-verified for optimal vending machine success.`
      },
      {
        q: `How quickly can I get vending machine leads for ${cityDisplayName}?`,
        a: `Our ${cityDisplayName} vending leads are delivered within 3-5 business days. We provide comprehensive research including business details, contact information, and placement opportunities to accelerate your market entry.`
      },
      {
        q: `What makes ${cityDisplayName} a good market for vending machines?`,
        a: `${cityDisplayName} features a thriving business community with diverse industries and strong economic activity. The city's business density and diverse demographics create ideal conditions for vending machine success.`
      },
      {
        q: `Do you provide ongoing support for ${cityDisplayName} locations?`,
        a: `Yes, we offer comprehensive support including location research, contact information, placement strategies, and ongoing consultation to ensure your vending machines thrive in ${cityDisplayName}.`
      },
      {
        q: `What industries in ${cityDisplayName} are best for vending machines?`,
        a: `Healthcare, education, retail, office buildings, and manufacturing in ${cityDisplayName} show the highest potential for vending machine success due to consistent foot traffic and diverse demographics.`
      },
      {
        q: `How do you verify the quality of ${cityDisplayName} vending locations?`,
        a: `We conduct thorough research on each ${cityDisplayName} location including business verification, foot traffic analysis, employee count validation, and industry research to ensure only high-quality opportunities are included.`
      },
      {
        q: `Can I get customized vending leads for specific areas of ${cityDisplayName}?`,
        a: `Absolutely! We can provide targeted vending leads for specific neighborhoods, business districts, or industrial areas within ${cityDisplayName} based on your preferences and target market requirements.`
      },
      {
        q: `What's the typical ROI for vending machines in ${cityDisplayName}?`,
        a: `Vending machines in ${cityDisplayName} typically show strong ROI due to the city's business density and diverse economy. Our research shows average payback periods of 12-18 months for well-placed machines.`
      }
    ],
    [
      {
        q: `How do I pick the best vending locations in ${cityDisplayName}?`,
        a: `We focus on foot traffic, employee count, hours of operation, and decision-maker access to identify the best locations in ${cityDisplayName}.`
      },
      {
        q: `How soon will I receive leads for ${cityDisplayName}?`,
        a: `Leads are delivered in 3-5 business days with verified contacts and placement notes.`
      },
      {
        q: `Are the contacts verified for ${cityDisplayName} locations?`,
        a: `Yes. We validate decision-makers and business details before delivery.`
      },
      {
        q: `Can I target specific industries in ${cityDisplayName}?`,
        a: `Yes, we can prioritize healthcare, offices, logistics, retail, or other sectors depending on your goals.`
      },
      {
        q: `What’s included with each ${cityDisplayName} lead?`,
        a: `Each lead includes business name, address, contact details, and placement context to speed up outreach.`
      },
      {
        q: `Do you replace unavailable locations?`,
        a: `We provide replacement leads if a location becomes unavailable.`
      },
      {
        q: `Is ${cityDisplayName} a good market for vending?`,
        a: `${cityDisplayName} has diverse business clusters and consistent demand that supports vending placements.`
      },
      {
        q: `What support do you provide after delivery?`,
        a: `We offer guidance on outreach scripts, placement strategy, and next steps.`
      }
    ],
    [
      {
        q: `How do vending leads work in ${cityDisplayName}?`,
        a: `We research and verify businesses in ${cityDisplayName}, then deliver placement-ready leads with contact details.`
      },
      {
        q: `What types of locations are common in ${cityDisplayName}?`,
        a: `Offices, clinics, logistics facilities, and retail centers are typically strong placement categories.`
      },
      {
        q: `Do you offer local targeting within ${cityDisplayName}?`,
        a: `Yes, we can focus on neighborhoods or corridors you specify.`
      },
      {
        q: `How fast can I start placing machines?`,
        a: `Most operators begin outreach within days of receiving their lead list.`
      },
      {
        q: `Is there a subscription required?`,
        a: `No, packages are one-time purchases without monthly fees.`
      },
      {
        q: `How fresh are the leads?`,
        a: `Leads are verified and updated regularly to ensure accuracy.`
      },
      {
        q: `What makes your ${cityDisplayName} leads better?`,
        a: `We focus on verified decision-makers and placement-ready locations, not scraped lists.`
      },
      {
        q: `Can you help with outreach?`,
        a: `Yes, we include scripts and guidance to improve response rates.`
      }
    ],
    [
      {
        q: `How do you qualify ${cityDisplayName} vending locations?`,
        a: `We assess foot traffic, business type, hours, and decision-maker access before delivering leads.`
      },
      {
        q: `What industries perform best in ${cityDisplayName}?`,
        a: `Healthcare, offices, education, and logistics tend to perform well in ${cityDisplayName}.`
      },
      {
        q: `Can I buy more leads later?`,
        a: `Yes, you can purchase additional packages at any time.`
      },
      {
        q: `How long does delivery take?`,
        a: `Most lead lists are delivered within 3-5 business days.`
      },
      {
        q: `Do you provide placement tips?`,
        a: `Yes, we include placement guidance and outreach best practices.`
      },
      {
        q: `What if a lead is outdated?`,
        a: `We replace leads that become unavailable or inaccurate.`
      },
      {
        q: `Is ${cityDisplayName} a competitive market?`,
        a: `We research competition and highlight placement opportunities where demand is strongest.`
      },
      {
        q: `What’s included in a lead?`,
        a: `Business name, address, decision-maker contact, and placement notes.`
      }
    ]
  ]

  const [activeUsers, setActiveUsers] = useState(25)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [usedNames, setUsedNames] = useState(new Set<number>())
  const [userNames] = useState([
    `Mike from ${cityDisplayName}`,
    `Sarah in ${cityDisplayName}`,
    `David in ${cityDisplayName}`,
    `Lisa in ${cityDisplayName}`,
    `Tom in ${cityDisplayName}`,
    `Jennifer in ${cityDisplayName}`,
    `Robert in ${cityDisplayName}`,
    `Amanda in ${cityDisplayName}`,
    `Chris in ${cityDisplayName}`,
    `Maria in ${cityDisplayName}`,
    `James in ${cityDisplayName}`,
    `Emily in ${cityDisplayName}`
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers((prev) => {
        const change = Math.floor(Math.random() * 3) - 1
        const newValue = prev + change
        return Math.max(20, Math.min(35, newValue))
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex((prev) => {
        if (usedNames.size > userNames.length * 0.8) {
          setUsedNames(new Set())
        }
        let attempts = 0
        let nextIndex = prev
        while (attempts < 50) {
          nextIndex = (nextIndex + 1) % userNames.length
          if (!usedNames.has(nextIndex)) {
            setUsedNames((prevSet) => new Set([...prevSet, nextIndex]))
            return nextIndex
          }
          attempts += 1
        }
        const randomIndex = Math.floor(Math.random() * userNames.length)
        setUsedNames((prevSet) => new Set([...prevSet, randomIndex]))
        return randomIndex
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [userNames.length, usedNames])

  const relatedCities = useMemo(() => {
    const stateSlug = stateDisplayName.toLowerCase().replace(/\s+/g, '-')
    const stateRecord = states.find((entry) => entry.slug === stateSlug)
    if (!stateRecord) return []
    return stateRecord.cities
      .filter((c) => c.slug !== slug)
      .slice(0, 8)
  }, [stateDisplayName, slug])

  const faqItems = faqVariantSets[variantIndex]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-warm-white">
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-stone">
              <Link href="/" className="hover:text-navy transition-colors">Home</Link>
              <span>/</span>
              <Link href="/vending-leads" className="hover:text-navy transition-colors">Vending Leads</Link>
              <span>/</span>
              <Link href={`/vending-leads/${stateDisplayName.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-navy transition-colors">
                {stateDisplayName}
              </Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{cityDisplayName}</span>
            </div>
          </div>
        </nav>

        <section className="relative py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-6 sm:mt-8 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto mb-6"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-chocolate">
                    <span className="font-bold text-coral">{activeUsers}</span> people are choosing plans right now
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6 leading-tight"
              >
                Vending Machine Locations in{' '}
                <span className="text-navy">{cityDisplayName}, {stateDisplayName}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-stone mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                {heroLeadVariants[variantIndex]} {heroSuffix}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto mb-8"
              >
                {[
                  { icon: CheckBadgeIcon, label: 'Verified Locations', color: 'text-green-600' },
                  { icon: StarIcon, label: '4.9/5 Rating', color: 'text-yellow-500' },
                  { icon: ShieldCheckIcon, label: 'Secure & Reliable', color: 'text-blue-600' },
                  { icon: ClockIcon, label: 'Quality Research', color: 'text-purple-600' }
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3">
                      <Icon className={`h-5 w-5 ${color}`} />
                      <span className="text-sm font-medium text-chocolate">{label}</span>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
              >
                <button
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing')
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
                >
                  Get Started
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                {[
                  { label: 'Population', value: cityData.population },
                  { label: 'Businesses', value: cityData.businesses },
                  { label: 'Industries', value: cityData.industries },
                  { label: 'Verified Locations', value: cityData.verifiedLocations }
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-2xl font-bold text-navy">{item.value}</div>
                    <div className="text-sm text-stone">{item.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                Get Access to Qualified Vending Machine Locations in {cityDisplayName}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                {pricingIntroVariants[variantIndex]}
              </motion.p>
            </div>
            <PricingTable />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                Business Landscape in {cityDisplayName}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                {landscapeIntroVariants[variantIndex]}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  key: 'Healthcare',
                  icon: HeartIcon,
                  color: 'text-blue-600',
                  bg: 'bg-blue-50',
                  body: industryBodyVariants[variantIndex].Healthcare
                },
                {
                  key: 'Education',
                  icon: AcademicCapIcon,
                  color: 'text-green-600',
                  bg: 'bg-green-50',
                  body: industryBodyVariants[variantIndex].Education
                },
                {
                  key: 'Manufacturing',
                  icon: CpuChipIcon,
                  color: 'text-purple-600',
                  bg: 'bg-purple-50',
                  body: industryBodyVariants[variantIndex].Manufacturing
                },
                {
                  key: 'Retail',
                  icon: ShoppingBagIcon,
                  color: 'text-orange-600',
                  bg: 'bg-orange-50',
                  body: industryBodyVariants[variantIndex].Retail
                },
                {
                  key: 'Office Buildings',
                  icon: BuildingOfficeIcon,
                  color: 'text-indigo-600',
                  bg: 'bg-indigo-50',
                  body: industryBodyVariants[variantIndex].Office
                },
                {
                  key: 'Transportation',
                  icon: TruckIcon,
                  color: 'text-red-600',
                  bg: 'bg-red-50',
                  body: industryBodyVariants[variantIndex].Transportation
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`${item.bg} p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow`}
                >
                  <div className={`${item.color} mb-4`}>
                    <item.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{item.key}</h3>
                  <p className="text-stone leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6"
              >
                Why Choose {cityDisplayName} for Vending Machines?
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
            >
              <p className="text-lg text-stone leading-relaxed">
                {whyChooseVariants[variantIndex]}
              </p>
            </motion.div>
          </div>
        </section>

        <section id="hot-leads" className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                One-Time Location Packages for {cityDisplayName}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                {hotLeadsIntroVariants[variantIndex]}
              </motion.p>
            </div>
            <HotLeads />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                Learn the Vending Machine Business
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                {courseIntroVariants[variantIndex]}
              </motion.p>
            </div>
            <VendingCourse />
          </div>
        </section>

        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                Vending Machine Lead FAQs in {cityDisplayName}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                {faqIntroVariants[variantIndex]}
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqItems.map((item, idx) => (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                >
                  <h3 className="text-lg font-semibold text-charcoal mb-3">{item.q}</h3>
                  <p className="text-stone leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {relatedCities.length > 0 && (
          <section className="py-12 bg-white border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="text-xl font-playfair font-bold text-charcoal mb-4">More cities in {stateDisplayName}</h2>
              <div className="flex flex-wrap gap-3">
                {relatedCities.map((cityItem) => (
                  <Link key={cityItem.slug} href={`/vending-leads/${cityItem.slug}`} className="px-3 py-2 rounded-lg border border-gray-200 bg-cream/60 text-chocolate hover:text-navy">
                    Vending Leads in {cityItem.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <CityPageSEO
        city={cityDisplayName}
        state={stateDisplayName}
        stateAbbr={stateAbbrMap[stateDisplayName] || stateDisplayName}
        description={`Get verified vending machine leads and locations in ${cityDisplayName}, ${stateDisplayName}. Find qualified businesses for vending machine placement. ${heroSuffix}`}
        faqs={faqItems.map((item) => ({ question: item.q, answer: item.a }))}
      />

      <Footer />
      <ZipCodeModalWrapper />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thevendinglocator.com/' },
              { '@type': 'ListItem', position: 2, name: 'Vending Leads', item: 'https://www.thevendinglocator.com/vending-leads' },
              { '@type': 'ListItem', position: 3, name: stateDisplayName, item: `https://www.thevendinglocator.com/vending-leads/${stateDisplayName.toLowerCase().replace(/\\s+/g, '-')}` },
              { '@type': 'ListItem', position: 4, name: cityDisplayName, item: `https://www.thevendinglocator.com/vending-leads/${slug}` }
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
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a }
            }))
          })
        }}
      />
    </>
  )
}
