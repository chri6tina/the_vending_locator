'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { MapPinIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

// Comprehensive list of all states and their cities
const states = [
  {
    name: 'Alabama',
    slug: 'alabama',
    cities: [
      { name: 'Auburn', slug: 'auburn-alabama' },
      { name: 'Birmingham', slug: 'birmingham-alabama' },
      { name: 'Dothan', slug: 'dothan-alabama' },
      { name: 'Huntsville', slug: 'huntsville-alabama' },
      { name: 'Mobile', slug: 'mobile-alabama' },
      { name: 'Montgomery', slug: 'montgomery-alabama' },
      { name: 'Tuscaloosa', slug: 'tuscaloosa-alabama' }
    ]
  },
  {
    name: 'Alaska',
    slug: 'alaska',
    cities: []
  },
  {
    name: 'Arizona',
    slug: 'arizona',
    cities: [
      { name: 'Chandler', slug: 'chandler-arizona' },
      { name: 'Gilbert', slug: 'gilbert-arizona' },
      { name: 'Glendale', slug: 'glendale-arizona' },
      { name: 'Mesa', slug: 'mesa-arizona' },
      { name: 'Phoenix', slug: 'phoenix-arizona' },
      { name: 'Scottsdale', slug: 'scottsdale-arizona' },
      { name: 'Tucson', slug: 'tucson-arizona' }
    ]
  },
  {
    name: 'Arkansas',
    slug: 'arkansas',
    cities: [
      { name: 'Little Rock', slug: 'little-rock-arkansas' }
    ]
  },
  {
    name: 'California',
    slug: 'california',
    cities: [
      { name: 'Anaheim', slug: 'anaheim-california' },
      { name: 'Bakersfield', slug: 'bakersfield-california' },
      { name: 'Fremont', slug: 'fremont-california' },
      { name: 'Fresno', slug: 'fresno-california' },
      { name: 'Glendale', slug: 'glendale-california' },
      { name: 'Huntington Beach', slug: 'huntington-beach-california' },
      { name: 'Irvine', slug: 'irvine-california' },
      { name: 'Long Beach', slug: 'long-beach-california' },
      { name: 'Los Angeles', slug: 'los-angeles-california' },
      { name: 'Modesto', slug: 'modesto-california' },
      { name: 'Oakland', slug: 'oakland-california' },
      { name: 'Oxnard', slug: 'oxnard-california' },
      { name: 'Riverside', slug: 'riverside-california' },
      { name: 'Sacramento', slug: 'sacramento-california' },
      { name: 'San Diego', slug: 'san-diego-california' },
      { name: 'San Francisco', slug: 'san-francisco-california' },
      { name: 'San Jose', slug: 'san-jose-california' },
      { name: 'Santa Ana', slug: 'santa-ana-california' },
      { name: 'Stockton', slug: 'stockton-california' }
    ]
  },
  {
    name: 'Colorado',
    slug: 'colorado',
    cities: [
      { name: 'Arvada', slug: 'arvada-colorado' },
      { name: 'Aurora', slug: 'aurora-colorado' },
      { name: 'Boulder', slug: 'boulder-colorado' },
      { name: 'Colorado Springs', slug: 'colorado-springs-colorado' },
      { name: 'Denver', slug: 'denver-colorado' },
      { name: 'Fort Collins', slug: 'fort-collins-colorado' },
      { name: 'Lakewood', slug: 'lakewood-colorado' },
      { name: 'Pueblo', slug: 'pueblo-colorado' },
      { name: 'Thornton', slug: 'thornton-colorado' },
      { name: 'Westminster', slug: 'westminster-colorado' }
    ]
  },
  {
    name: 'Connecticut',
    slug: 'connecticut',
    cities: [
      { name: 'Bridgeport', slug: 'bridgeport-connecticut' },
      { name: 'New Haven', slug: 'new-haven-connecticut' }
    ]
  },
  {
    name: 'Florida',
    slug: 'florida',
    cities: [
      { name: 'Cape Coral', slug: 'cape-coral-florida' },
      { name: 'Clearwater', slug: 'clearwater-florida' },
      { name: 'Fort Lauderdale', slug: 'fort-lauderdale-florida' },
      { name: 'Fort Myers', slug: 'fort-myers-florida' },
      { name: 'Gainesville', slug: 'gainesville-florida' },
      { name: 'Hialeah', slug: 'hialeah-florida' },
      { name: 'Jacksonville', slug: 'jacksonville-florida' },
      { name: 'Miami', slug: 'miami-florida' },
      { name: 'Orlando', slug: 'orlando-florida' },
      { name: 'Sarasota', slug: 'sarasota-florida' },
      { name: 'St. Petersburg', slug: 'st-petersburg-florida' },
      { name: 'Tallahassee', slug: 'tallahassee-florida' },
      { name: 'Tampa', slug: 'tampa-florida' }
    ]
  },
  {
    name: 'Georgia',
    slug: 'georgia',
    cities: [
      { name: 'Albany', slug: 'albany-georgia' },
      { name: 'Athens', slug: 'athens-georgia' },
      { name: 'Atlanta', slug: 'atlanta-georgia' },
      { name: 'Augusta', slug: 'augusta-georgia' },
      { name: 'Columbus', slug: 'columbus-georgia' },
      { name: 'Macon', slug: 'macon-georgia' },
      { name: 'Marietta', slug: 'marietta-georgia' },
      { name: 'Roswell', slug: 'roswell-georgia' },
      { name: 'Sandy Springs', slug: 'sandy-springs-georgia' },
      { name: 'Savannah', slug: 'savannah-georgia' },
      { name: 'Warner Robins', slug: 'warner-robins-georgia' }
    ]
  },
  {
    name: 'Hawaii',
    slug: 'hawaii',
    cities: []
  },
  {
    name: 'Idaho',
    slug: 'idaho',
    cities: [
      { name: 'Boise', slug: 'boise-idaho' },
      { name: 'Coeur d\'Alene', slug: 'coeur-dalene-idaho' },
      { name: 'Idaho Falls', slug: 'idaho-falls-idaho' },
      { name: 'Meridian', slug: 'meridian-idaho' },
      { name: 'Nampa', slug: 'nampa-idaho' },
      { name: 'Pocatello', slug: 'pocatello-idaho' },
      { name: 'Twin Falls', slug: 'twin-falls-idaho' }
    ]
  },
  {
    name: 'Illinois',
    slug: 'illinois',
    cities: [
      { name: 'Bloomington', slug: 'bloomington-illinois' },
      { name: 'Champaign-Urbana', slug: 'champaign-urbana-illinois' },
      { name: 'Chicago', slug: 'chicago-illinois' },
      { name: 'Decatur', slug: 'decatur-illinois' },
      { name: 'Evanston', slug: 'evanston-illinois' },
      { name: 'Moline', slug: 'moline-illinois' },
      { name: 'Naperville', slug: 'naperville-illinois' },
      { name: 'Peoria', slug: 'peoria-illinois' },
      { name: 'Rockford', slug: 'rockford-illinois' },
      { name: 'Springfield', slug: 'springfield-illinois' }
    ]
  },
  {
    name: 'Indiana',
    slug: 'indiana',
    cities: [
      { name: 'Indianapolis', slug: 'indianapolis-indiana' }
    ]
  },
  {
    name: 'Iowa',
    slug: 'iowa',
    cities: [
      { name: 'Ames', slug: 'ames-iowa' },
      { name: 'Cedar Rapids', slug: 'cedar-rapids-iowa' },
      { name: 'Davenport', slug: 'davenport-iowa' },
      { name: 'Des Moines', slug: 'des-moines-iowa' },
      { name: 'Iowa City', slug: 'iowa-city-iowa' },
      { name: 'Sioux City', slug: 'sioux-city-iowa' },
      { name: 'Waterloo', slug: 'waterloo-iowa' }
    ]
  },
  {
    name: 'Kentucky',
    slug: 'kentucky',
    cities: [
      { name: 'Lexington', slug: 'lexington-kentucky' },
      { name: 'Louisville', slug: 'louisville-kentucky' }
    ]
  },
  {
    name: 'Louisiana',
    slug: 'louisiana',
    cities: [
      { name: 'New Orleans', slug: 'new-orleans-louisiana' }
    ]
  },
  {
    name: 'Maine',
    slug: 'maine',
    cities: []
  },
  {
    name: 'Maryland',
    slug: 'maryland',
    cities: [
      { name: 'Annapolis', slug: 'annapolis-maryland' },
      { name: 'Baltimore', slug: 'baltimore-maryland' },
      { name: 'Columbia', slug: 'columbia-maryland' },
      { name: 'Frederick', slug: 'frederick-maryland' },
      { name: 'Gaithersburg', slug: 'gaithersburg-maryland' },
      { name: 'Rockville', slug: 'rockville-maryland' },
      { name: 'Silver Spring', slug: 'silver-spring-maryland' }
    ]
  },
  {
    name: 'Massachusetts',
    slug: 'massachusetts',
    cities: [
      { name: 'Boston', slug: 'boston-massachusetts' },
      { name: 'Cambridge', slug: 'cambridge-massachusetts' },
      { name: 'Fall River', slug: 'fall-river-massachusetts' },
      { name: 'Springfield', slug: 'springfield-massachusetts' },
      { name: 'Worcester', slug: 'worcester-massachusetts' }
    ]
  },
  {
    name: 'Michigan',
    slug: 'michigan',
    cities: [
      { name: 'Detroit', slug: 'detroit-michigan' },
      { name: 'Flint', slug: 'flint-michigan' },
      { name: 'Grand Rapids', slug: 'grand-rapids-michigan' },
      { name: 'Kalamazoo', slug: 'kalamazoo-michigan' },
      { name: 'Lansing', slug: 'lansing-michigan' },
      { name: 'Saginaw', slug: 'saginaw-michigan' }
    ]
  },
  {
    name: 'Minnesota',
    slug: 'minnesota',
    cities: [
      { name: 'Minneapolis', slug: 'minneapolis-minnesota' },
      { name: 'Rochester', slug: 'rochester-minnesota' },
      { name: 'Saint Paul', slug: 'saint-paul-minnesota' }
    ]
  },
  {
    name: 'Mississippi',
    slug: 'mississippi',
    cities: []
  },
  {
    name: 'Missouri',
    slug: 'missouri',
    cities: [
      { name: 'Kansas City', slug: 'kansas-city-missouri' }
    ]
  },
  {
    name: 'Montana',
    slug: 'montana',
    cities: []
  },
  {
    name: 'Nebraska',
    slug: 'nebraska',
    cities: [
      { name: 'Omaha', slug: 'omaha-nebraska' }
    ]
  },
  {
    name: 'Nevada',
    slug: 'nevada',
    cities: [
      { name: 'Las Vegas', slug: 'las-vegas-nevada' }
    ]
  },
  {
    name: 'New Hampshire',
    slug: 'new-hampshire',
    cities: []
  },
  {
    name: 'New Jersey',
    slug: 'new-jersey',
    cities: []
  },
  {
    name: 'New Mexico',
    slug: 'new-mexico',
    cities: [
      { name: 'Albuquerque', slug: 'albuquerque-new-mexico' }
    ]
  },
  {
    name: 'New York',
    slug: 'new-york',
    cities: [
      { name: 'Albany', slug: 'albany-new-york' },
      { name: 'Binghamton', slug: 'binghamton-new-york' },
      { name: 'Buffalo', slug: 'buffalo-new-york' },
      { name: 'New York', slug: 'new-york-new-york' },
      { name: 'Rochester', slug: 'rochester-new-york' },
      { name: 'Schenectady', slug: 'schenectady-new-york' },
      { name: 'Syracuse', slug: 'syracuse-new-york' },
      { name: 'Troy', slug: 'troy-new-york' },
      { name: 'Utica', slug: 'utica-new-york' },
      { name: 'Yonkers', slug: 'yonkers-new-york' }
    ]
  },
  {
    name: 'North Carolina',
    slug: 'north-carolina',
    cities: [
      { name: 'Cary', slug: 'cary-north-carolina' },
      { name: 'Charlotte', slug: 'charlotte-north-carolina' },
      { name: 'Durham', slug: 'durham-north-carolina' },
      { name: 'Fayetteville', slug: 'fayetteville-north-carolina' },
      { name: 'Greensboro', slug: 'greensboro-north-carolina' },
      { name: 'Raleigh', slug: 'raleigh-north-carolina' },
      { name: 'Winston-Salem', slug: 'winston-salem-north-carolina' }
    ]
  },
  {
    name: 'North Dakota',
    slug: 'north-dakota',
    cities: []
  },
  {
    name: 'Ohio',
    slug: 'ohio',
    cities: [
      { name: 'Akron', slug: 'akron-ohio' },
      { name: 'Cincinnati', slug: 'cincinnati-ohio' },
      { name: 'Cleveland', slug: 'cleveland-ohio' },
      { name: 'Columbus', slug: 'columbus-ohio' },
      { name: 'Dayton', slug: 'dayton-ohio' },
      { name: 'Toledo', slug: 'toledo-ohio' },
      { name: 'Youngstown', slug: 'youngstown-ohio' }
    ]
  },
  {
    name: 'Oklahoma',
    slug: 'oklahoma',
    cities: [
      { name: 'Oklahoma City', slug: 'oklahoma-city-oklahoma' },
      { name: 'Tulsa', slug: 'tulsa-oklahoma' }
    ]
  },
  {
    name: 'Oregon',
    slug: 'oregon',
    cities: [
      { name: 'Portland', slug: 'portland-oregon' }
    ]
  },
  {
    name: 'Pennsylvania',
    slug: 'pennsylvania',
    cities: [
      { name: 'Philadelphia', slug: 'philadelphia-pennsylvania' },
      { name: 'Pittsburgh', slug: 'pittsburgh-pennsylvania' },
      { name: 'York', slug: 'york-pennsylvania' }
    ]
  },
  {
    name: 'Rhode Island',
    slug: 'rhode-island',
    cities: [
      { name: 'Providence', slug: 'providence-rhode-island' }
    ]
  },
  {
    name: 'South Carolina',
    slug: 'south-carolina',
    cities: []
  },
  {
    name: 'South Dakota',
    slug: 'south-dakota',
    cities: []
  },
  {
    name: 'Tennessee',
    slug: 'tennessee',
    cities: [
      { name: 'Knoxville', slug: 'knoxville-tennessee' },
      { name: 'Memphis', slug: 'memphis-tennessee' },
      { name: 'Nashville', slug: 'nashville-tennessee' }
    ]
  },
  {
    name: 'Texas',
    slug: 'texas',
    cities: [
      { name: 'Amarillo', slug: 'amarillo-texas' },
      { name: 'Arlington', slug: 'arlington-texas' },
      { name: 'Austin', slug: 'austin-texas' },
      { name: 'Beaumont', slug: 'beaumont-texas' },
      { name: 'Corpus Christi', slug: 'corpus-christi-texas' },
      { name: 'Dallas', slug: 'dallas-texas' },
      { name: 'El Paso', slug: 'el-paso-texas' },
      { name: 'Fort Worth', slug: 'fort-worth-texas' },
      { name: 'Garland', slug: 'garland-texas' },
      { name: 'Grand Prairie', slug: 'grand-prairie-texas' },
      { name: 'Houston', slug: 'houston-texas' },
      { name: 'Irving', slug: 'irving-texas' },
      { name: 'Killeen', slug: 'killeen-texas' },
      { name: 'Laredo', slug: 'laredo-texas' },
      { name: 'Lubbock', slug: 'lubbock-texas' },
      { name: 'McAllen', slug: 'mcallen-texas' },
      { name: 'Mesquite', slug: 'mesquite-texas' },
      { name: 'Plano', slug: 'plano-texas' },
      { name: 'San Antonio', slug: 'san-antonio-texas' },
      { name: 'Tyler', slug: 'tyler-texas' },
      { name: 'Waco', slug: 'waco-texas' }
    ]
  },
  {
    name: 'Utah',
    slug: 'utah',
    cities: [
      { name: 'Salt Lake City', slug: 'salt-lake-city-utah' }
    ]
  },
  {
    name: 'Vermont',
    slug: 'vermont',
    cities: []
  },
  {
    name: 'Virginia',
    slug: 'virginia',
    cities: [
      { name: 'Richmond', slug: 'richmond-virginia' }
    ]
  },
  {
    name: 'Washington',
    slug: 'washington',
    cities: [
      { name: 'Seattle', slug: 'seattle-washington' }
    ]
  },
  {
    name: 'Washington DC',
    slug: 'washington-dc',
    cities: []
  },
  {
    name: 'West Virginia',
    slug: 'west-virginia',
    cities: []
  },
  {
    name: 'Wisconsin',
    slug: 'wisconsin',
    cities: [
      { name: 'Madison', slug: 'madison-wisconsin' },
      { name: 'Milwaukee', slug: 'milwaukee-wisconsin' }
    ]
  },
  {
    name: 'Wyoming',
    slug: 'wyoming',
    cities: [
      { name: 'Casper', slug: 'casper-wyoming' },
      { name: 'Cheyenne', slug: 'cheyenne-wyoming' },
      { name: 'Gillette', slug: 'gillette-wyoming' },
      { name: 'Laramie', slug: 'laramie-wyoming' },
      { name: 'Rock Springs', slug: 'rock-springs-wyoming' }
    ]
  }
]

export default function VendingLeadsDirectory() {
  const [expandedStates, setExpandedStates] = useState<string[]>([])

  const toggleState = (stateSlug: string) => {
    setExpandedStates(prev => 
      prev.includes(stateSlug) 
        ? prev.filter(s => s !== stateSlug)
        : [...prev, stateSlug]
    )
  }

  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-playfair font-bold tracking-tight text-chocolate sm:text-4xl lg:text-5xl"
            >
              Vending Machine Leads Directory
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-chocolate/70 leading-relaxed"
            >
              Comprehensive directory of vending machine leads and locations across all 50 states. 
              Find qualified businesses for vending machine placement.
            </motion.p>
          </div>
        </div>
      </div>

      {/* States Directory */}
      <div className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-8 text-center"
            >
              Browse by State
            </motion.h2>
            
            <div className="grid gap-4">
              {states.map((state, index) => (
                <motion.div
                  key={state.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleState(state.slug)}
                    className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <MapPinIcon className="h-5 w-5 text-navy mr-3" />
                      <span className="font-medium text-chocolate text-lg">
                        {state.name}
                      </span>
                      <span className="ml-3 text-sm text-gray-500">
                        ({state.cities.length} cities)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Link
                        href={`/vending-leads/${state.slug}`}
                        className="mr-4 px-4 py-2 bg-navy text-white rounded-md hover:bg-navy/90 transition-colors text-sm font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View State
                      </Link>
                      <ChevronDownIcon 
                        className={`h-5 w-5 text-gray-400 transition-transform ${
                          expandedStates.includes(state.slug) ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  
                  {expandedStates.includes(state.slug) && (
                    <div className="border-t border-gray-200 bg-gray-50">
                      <div className="px-6 py-4">
                        {state.cities.length > 0 ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {state.cities.map((city) => (
                              <Link
                                key={city.slug}
                                href={`/vending-leads/${city.slug}`}
                                className="text-chocolate hover:text-navy transition-colors text-sm py-1 hover:underline"
                              >
                                {city.name}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-4">
                            <p className="text-gray-500 text-sm">
                              No city pages available yet for {state.name}.
                            </p>
                            <p className="text-gray-400 text-xs mt-1">
                              Check back soon for updates!
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
