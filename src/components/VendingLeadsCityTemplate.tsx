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
import { getVendingLeadsCityOverride } from '@/data/vending-leads-city-overrides'

const getVariantIndex = (slug: string) =>
  Math.abs([...slug].reduce((acc, char) => acc * 31 + char.charCodeAt(0), 7)) % 4

const getSlugAreaLabel = (slug: string) => {
  if (slug.includes('-metro-')) return 'metro area'
  if (slug.includes('-county-')) return 'countywide'
  if (slug.includes('-greater-')) return 'greater area'
  if (slug.includes('-downtown-')) return 'downtown core'
  if (slug.includes('-uptown-')) return 'uptown corridor'
  if (slug.includes('-central-')) return 'central district'
  if (slug.includes('-north-')) return 'north corridor'
  if (slug.includes('-south-')) return 'south corridor'
  if (slug.includes('-east-')) return 'east corridor'
  if (slug.includes('-west-')) return 'west corridor'
  return 'local market'
}

const getSlugAreaPhrase = (slug: string, city: string, state: string) => {
  if (slug.includes('-metro-')) return `the ${city} metro area`
  if (slug.includes('-county-')) return `${city} County`
  if (slug.includes('-greater-')) return `Greater ${city}`
  if (slug.includes('-downtown-')) return `downtown ${city}`
  if (slug.includes('-uptown-')) return `uptown ${city}`
  if (slug.includes('-central-')) return `central ${city}`
  if (slug.includes('-north-')) return `north ${city}`
  if (slug.includes('-south-')) return `south ${city}`
  if (slug.includes('-east-')) return `east ${city}`
  if (slug.includes('-west-')) return `west ${city}`
  return `${city}, ${state}`
}

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
  const cityOverride = getVendingLeadsCityOverride(slug)
  const areaLabel = getSlugAreaLabel(slug)
  const areaPhrase = getSlugAreaPhrase(slug, cityDisplayName, stateDisplayName)
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

  const cityData = cityOverride?.stats ?? statsByVariant[variantIndex]
  const heroLeadVariants = [
    `Discover high-quality vending opportunities in ${areaPhrase} with pre-qualified locations in office buildings, retail spaces, and transportation hubs.`,
    `Access vetted vending machine placements across ${areaPhrase}, focusing on offices, healthcare, and high-traffic retail corridors.`,
    `Get placement-ready vending leads in ${areaPhrase} with locations matched to consistent foot traffic patterns.`,
    `Find verified vending locations in ${areaPhrase} across business districts and community hubs.`,
    `Secure vetted placement opportunities throughout the ${areaLabel} in ${areaPhrase}, with lead lists organized by location type.`,
    `Build a placement pipeline in ${areaPhrase} with verified locations and decision-maker contacts.`,
    `Target consistent foot-traffic zones in ${areaPhrase} with placement-ready vending leads.`,
    `Reach decision-makers in ${areaPhrase} with vending locations pre-checked for fit and access.`
  ]
  const pricingIntroVariants = [
    `Choose the perfect plan for your vending machine business needs and start accessing qualified locations today.`,
    `Pick a one-time package that fits your goals and start securing location leads.`,
    `Select a lead package built for fast placement and predictable results.`,
    `Choose a plan and get vetted locations without monthly commitments.`,
    `Start with a one-time package designed for outreach in ${areaPhrase}.`,
    `Choose a lead list that aligns with your placement goals in ${areaPhrase}.`,
    `Get a package tailored to the pace and demand of the ${areaLabel}.`,
    `Secure vetted locations in ${areaPhrase} without long-term contracts.`
  ]
  const landscapeIntroVariants = [
    `Discover the diverse industries and business opportunities that make ${areaPhrase} an ideal market for vending machines.`,
    `Explore the top industries driving vending demand in ${areaPhrase}.`,
    `See why ${areaPhrase} supports strong vending performance across multiple sectors.`,
    `Learn which industries in ${areaPhrase} create the best vending opportunities.`,
    `Review the sector mix that sustains vending demand in the ${areaLabel}.`,
    `Understand the business landscape that keeps vending placements strong in ${areaPhrase}.`,
    `See how local industry density shapes vending success in ${areaPhrase}.`,
    `Explore the core industries that fuel steady vending demand in ${areaPhrase}.`
  ]
  const whyChooseVariants = [
    `The ${areaPhrase} market offers excellent vending opportunities through its combination of corporate headquarters, healthcare networks, and educational institutions. High foot traffic areas and captive audiences create ideal conditions for vending success.`,
    `${areaPhrase} combines steady business traffic with diverse industries, creating dependable vending placement opportunities. Strong daytime footfall and repeat visits support consistent sales.`,
    `With a mix of offices, clinics, and retail corridors, ${areaPhrase} offers reliable placement potential for vending operators focused on long-term revenue.`,
    `Operators choose ${areaPhrase} for its concentrated business zones, stable demand, and favorable placement conditions across multiple location types.`,
    `${areaPhrase} supports vending growth through consistent weekday traffic and concentrated commercial activity.`,
    `The ${areaLabel} in ${areaPhrase} blends business density with repeat foot traffic, which keeps placement performance steady.`,
    `Operators target ${areaPhrase} for its predictable demand across offices, healthcare facilities, and retail centers.`,
    `Vending placements in ${areaPhrase} benefit from a balanced mix of daytime and after-hours traffic.`
  ]
  const hotLeadsIntroVariants = [
    `Get immediate access to qualified vending machine locations without monthly commitments.`,
    `Purchase one-time location packages and start placing machines faster.`,
    `Unlock vetted location packages and avoid long-term contracts.`,
    `Access verified locations instantly with a one-time package.`,
    `Secure placement-ready locations in ${areaPhrase} with a one-time purchase.`,
    `Move faster in ${areaPhrase} with vetted locations and clear outreach steps.`,
    `Get verified locations in the ${areaLabel} without recurring fees.`,
    `Start outreach in ${areaPhrase} with a single, upfront package.`
  ]
  const courseIntroVariants = [
    `Master the fundamentals of vending machine operations and maximize your success in ${areaPhrase}.`,
    `Learn the proven steps to grow a vending route in ${areaPhrase}.`,
    `Build confidence with training designed for operators in ${areaPhrase}.`,
    `Get the playbook for building a profitable route in ${areaPhrase}.`,
    `Learn how to structure outreach and placement in the ${areaLabel}.`,
    `Get a step-by-step playbook built for growth in ${areaPhrase}.`,
    `Improve placement outcomes with training tailored to ${areaPhrase}.`,
    `Build a reliable route strategy for ${areaPhrase}.`
  ]
  const faqIntroVariants = [
    `Answers to common questions about vending leads, placement, and opportunities in ${areaPhrase}.`,
    `Quick answers to the most asked vending lead questions in ${areaPhrase}.`,
    `FAQs to help you place machines faster in ${areaPhrase}.`,
    `Common questions from operators looking to place in ${areaPhrase}.`,
    `What operators ask most before placing machines in the ${areaLabel}.`,
    `FAQs about lead quality, outreach, and placement in ${areaPhrase}.`,
    `Questions we hear from operators entering ${areaPhrase}.`,
    `Key answers for placing vending machines in ${areaPhrase}.`
  ]
  const industryBodyVariants = [
    {
      Healthcare: `Healthcare institutions in ${areaPhrase} offer prime vending locations with high visitor counts, extended operating hours, and captive audiences seeking convenient snack and beverage options.`,
      Education: `${areaPhrase} schools, colleges, and universities create excellent vending opportunities with high student traffic, campus events, and extended hours that maximize machine usage.`,
      Manufacturing: `Industrial operations in ${areaPhrase} feature large workforces and shift schedules that create reliable vending revenue through employee break times and shift changes.`,
      Retail: `Retail locations throughout ${areaPhrase} provide excellent vending opportunities in malls, shopping centers, and high-traffic commercial areas with consistent customer flow.`,
      Office: `Corporate office buildings throughout ${areaPhrase} feature professional workforces and business operations that create reliable vending revenue through employee break times and meetings.`,
      Transportation: `Airports, bus stations, and transit centers throughout ${areaPhrase} generate steady passenger traffic, providing excellent vending placement options in high-traffic areas frequented by travelers.`
    },
    {
      Healthcare: `${areaPhrase} healthcare facilities see steady foot traffic and long operating hours, making them dependable vending locations.`,
      Education: `Schools and campuses in ${areaPhrase} create consistent demand with student and staff traffic throughout the day.`,
      Manufacturing: `Shift-based workforces in ${areaPhrase} manufacturing sites drive reliable snack and beverage sales.`,
      Retail: `Retail corridors in ${areaPhrase} deliver repeat visitors and predictable peak periods for vending demand.`,
      Office: `Office hubs in ${areaPhrase} provide steady weekday demand and consistent break-time traffic.`,
      Transportation: `Transit hubs in ${areaPhrase} bring repeat travelers and all-day foot traffic.`
    },
    {
      Healthcare: `Hospitals and clinics in ${areaPhrase} offer long hours and consistent visitor volume for vending placements.`,
      Education: `${areaPhrase} education sites deliver dependable traffic during school hours and events.`,
      Manufacturing: `Industrial parks in ${areaPhrase} benefit from shift changes that boost vending activity.`,
      Retail: `Shopping centers in ${areaPhrase} provide steady customer flow and high visibility placements.`,
      Office: `Professional office buildings in ${areaPhrase} support consistent weekday vending sales.`,
      Transportation: `Airports and stations in ${areaPhrase} offer high-traffic, quick-purchase environments.`
    },
    {
      Healthcare: `Healthcare networks in ${areaPhrase} create steady demand for convenient refreshments.`,
      Education: `Campus environments in ${areaPhrase} provide predictable daily demand and event spikes.`,
      Manufacturing: `Manufacturing facilities in ${areaPhrase} drive repeat sales from large employee bases.`,
      Retail: `Retail centers in ${areaPhrase} support strong vending performance with continuous foot traffic.`,
      Office: `Office campuses in ${areaPhrase} deliver reliable weekday sales patterns.`,
      Transportation: `Transportation hubs in ${areaPhrase} generate consistent high-volume traffic for vending.`
    }
  ]
  const faqVariantSets = [
    [
      {
        q: `What types of vending machine locations are available in ${areaPhrase}?`,
        a: `${areaPhrase} offers diverse vending opportunities including healthcare facilities, educational institutions, retail locations, office buildings, and manufacturing facilities. Each location is pre-verified for optimal vending machine success.`
      },
      {
        q: `How quickly can I get vending machine leads for ${areaPhrase}?`,
        a: `Our ${areaPhrase} vending leads are delivered within 3-5 business days. We provide comprehensive research including business details, contact information, and placement opportunities to accelerate your market entry.`
      },
      {
        q: `What makes ${areaPhrase} a good market for vending machines?`,
        a: `${areaPhrase} features a thriving business community with diverse industries and strong economic activity. The area's business density and diverse demographics create ideal conditions for vending machine success.`
      },
      {
        q: `Do you provide ongoing support for ${areaPhrase} locations?`,
        a: `Yes, we offer comprehensive support including location research, contact information, placement strategies, and ongoing consultation to ensure your vending machines thrive in ${areaPhrase}.`
      },
      {
        q: `What industries in ${areaPhrase} are best for vending machines?`,
        a: `Healthcare, education, retail, office buildings, and manufacturing in ${areaPhrase} show the highest potential for vending machine success due to consistent foot traffic and diverse demographics.`
      },
      {
        q: `How do you verify the quality of ${areaPhrase} vending locations?`,
        a: `We conduct thorough research on each ${areaPhrase} location including business verification, foot traffic analysis, employee count validation, and industry research to ensure only high-quality opportunities are included.`
      },
      {
        q: `Can I get customized vending leads for specific areas of ${areaPhrase}?`,
        a: `Absolutely! We can provide targeted vending leads for specific neighborhoods, business districts, or industrial areas within ${areaPhrase} based on your preferences and target market requirements.`
      },
      {
        q: `What's the typical ROI for vending machines in ${areaPhrase}?`,
        a: `Vending machines in ${areaPhrase} typically show strong ROI due to the area's business density and diverse economy. Our research shows average payback periods of 12-18 months for well-placed machines.`
      }
    ],
    [
      {
        q: `How do I pick the best vending locations in ${areaPhrase}?`,
        a: `We focus on foot traffic, employee count, hours of operation, and decision-maker access to identify the best locations in ${areaPhrase}.`
      },
      {
        q: `How soon will I receive leads for ${areaPhrase}?`,
        a: `Leads are delivered in 3-5 business days with verified contacts and placement notes.`
      },
      {
        q: `Are the contacts verified for ${areaPhrase} locations?`,
        a: `Yes. We validate decision-makers and business details before delivery.`
      },
      {
        q: `Can I target specific industries in ${areaPhrase}?`,
        a: `Yes, we can prioritize healthcare, offices, logistics, retail, or other sectors depending on your goals.`
      },
      {
        q: `What’s included with each ${areaPhrase} lead?`,
        a: `Each lead includes business name, address, contact details, and placement context to speed up outreach.`
      },
      {
        q: `Do you replace unavailable locations?`,
        a: `We provide replacement leads if a location becomes unavailable.`
      },
      {
        q: `Is ${areaPhrase} a good market for vending?`,
        a: `${areaPhrase} has diverse business clusters and consistent demand that supports vending placements.`
      },
      {
        q: `What support do you provide after delivery?`,
        a: `We offer guidance on outreach scripts, placement strategy, and next steps.`
      }
    ],
    [
      {
        q: `How do vending leads work in ${areaPhrase}?`,
        a: `We research and verify businesses in ${areaPhrase}, then deliver placement-ready leads with contact details.`
      },
      {
        q: `What types of locations are common in ${areaPhrase}?`,
        a: `Offices, clinics, logistics facilities, and retail centers are typically strong placement categories.`
      },
      {
        q: `Do you offer local targeting within ${areaPhrase}?`,
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
        q: `What makes your ${areaPhrase} leads better?`,
        a: `We focus on verified decision-makers and placement-ready locations, not scraped lists.`
      },
      {
        q: `Can you help with outreach?`,
        a: `Yes, we include scripts and guidance to improve response rates.`
      }
    ],
    [
      {
        q: `How do you qualify ${areaPhrase} vending locations?`,
        a: `We assess foot traffic, business type, hours, and decision-maker access before delivering leads.`
      },
      {
        q: `What industries perform best in ${areaPhrase}?`,
        a: `Healthcare, offices, education, and logistics tend to perform well in ${areaPhrase}.`
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
        q: `Is ${areaPhrase} a competitive market?`,
        a: `We research competition and highlight placement opportunities where demand is strongest.`
      },
      {
        q: `What’s included in a lead?`,
        a: `Business name, address, decision-maker contact, and placement notes.`
      }
    ]
  ]

  const heroLead = cityOverride?.heroLead ?? heroLeadVariants[variantIndex]
  const pricingIntro = cityOverride?.pricingIntro ?? pricingIntroVariants[variantIndex]
  const landscapeIntro = cityOverride?.landscapeIntro ?? landscapeIntroVariants[variantIndex]
  const whyChoose = cityOverride?.whyChoose ?? whyChooseVariants[variantIndex]
  const hotLeadsIntro = cityOverride?.hotLeadsIntro ?? hotLeadsIntroVariants[variantIndex]
  const courseIntro = cityOverride?.courseIntro ?? courseIntroVariants[variantIndex]
  const faqIntro = cityOverride?.faqIntro ?? faqIntroVariants[variantIndex]
  const industryBody = cityOverride?.industryBody ?? industryBodyVariants[variantIndex]

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

  const faqItems = cityOverride?.faqItems ?? faqVariantSets[variantIndex]

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
                {heroLead} {heroSuffix}
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
                {pricingIntro}
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
                {landscapeIntro}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  key: 'Healthcare',
                  icon: HeartIcon,
                  color: 'text-blue-600',
                  bg: 'bg-blue-50',
                  body: industryBody.Healthcare
                },
                {
                  key: 'Education',
                  icon: AcademicCapIcon,
                  color: 'text-green-600',
                  bg: 'bg-green-50',
                  body: industryBody.Education
                },
                {
                  key: 'Manufacturing',
                  icon: CpuChipIcon,
                  color: 'text-purple-600',
                  bg: 'bg-purple-50',
                  body: industryBody.Manufacturing
                },
                {
                  key: 'Retail',
                  icon: ShoppingBagIcon,
                  color: 'text-orange-600',
                  bg: 'bg-orange-50',
                  body: industryBody.Retail
                },
                {
                  key: 'Office Buildings',
                  icon: BuildingOfficeIcon,
                  color: 'text-indigo-600',
                  bg: 'bg-indigo-50',
                  body: industryBody.Office
                },
                {
                  key: 'Transportation',
                  icon: TruckIcon,
                  color: 'text-red-600',
                  bg: 'bg-red-50',
                  body: industryBody.Transportation
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
                {whyChoose}
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
                {hotLeadsIntro}
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
                {courseIntro}
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
                {faqIntro}
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
        description={
          cityOverride?.seoDescription
            ? `${cityOverride.seoDescription} ${heroSuffix}`
            : `Get verified vending machine leads and locations in ${cityDisplayName}, ${stateDisplayName}. Find qualified businesses for vending machine placement. ${heroSuffix}`
        }
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
