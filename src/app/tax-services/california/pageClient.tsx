'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPinIcon, BuildingOffice2Icon, CheckCircleIcon, UserIcon, PhoneIcon, EnvelopeIcon, UsersIcon, ClockIcon, ShieldCheckIcon, CalculatorIcon, DocumentTextIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function CaliforniaTaxServicesPage() {
  const cityDisplayName = 'California';
  const stateDisplayName = 'California'
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // City pages don't show sub-cities
  const cities = [{"name":"Anaheim","slug":"anaheim-california"},{"name":"Antioch","slug":"antioch-california"},{"name":"Bakersfield","slug":"bakersfield-california"},{"name":"Berkeley","slug":"berkeley-california"},{"name":"Burbank","slug":"burbank-california"},{"name":"Carlsbad","slug":"carlsbad-california"},{"name":"Chula Vista","slug":"chula-vista-california"},{"name":"Clovis","slug":"clovis-california"},{"name":"Compton","slug":"compton-california"},{"name":"Concord","slug":"concord-california"},{"name":"Corona","slug":"corona-california"},{"name":"Costa Mesa","slug":"costa-mesa-california"},{"name":"Daly City","slug":"daly-city-california"},{"name":"Downey","slug":"downey-california"},{"name":"El Monte","slug":"el-monte-california"},{"name":"Elk Grove","slug":"elk-grove-california"},{"name":"Escondido","slug":"escondido-california"},{"name":"Fairfield","slug":"fairfield-california"},{"name":"Fontana","slug":"fontana-california"},{"name":"Fremont","slug":"fremont-california"},{"name":"Fresno","slug":"fresno-california"},{"name":"Fullerton","slug":"fullerton-california"},{"name":"Garden Grove","slug":"garden-grove-california"},{"name":"Glendale","slug":"glendale-california"},{"name":"Hayward","slug":"hayward-california"},{"name":"Huntington Beach","slug":"huntington-beach-california"},{"name":"Inglewood","slug":"inglewood-california"},{"name":"Irvine","slug":"irvine-california"},{"name":"Lancaster","slug":"lancaster-california"},{"name":"Jurupa Valley","slug":"jurupa-valley-california"},{"name":"Lakewood","slug":"lakewood-california"},{"name":"Long Beach","slug":"long-beach-california"},{"name":"Los Angeles","slug":"los-angeles-california"},{"name":"Modesto","slug":"modesto-california"},{"name":"Moreno Valley","slug":"moreno-valley-california"},{"name":"Mountain View","slug":"mountain-view-california"},{"name":"Murrieta","slug":"murrieta-california"},{"name":"Napa","slug":"napa-california"},{"name":"Newport Beach","slug":"newport-beach-california"},{"name":"Norwalk","slug":"norwalk-california"},{"name":"Oakland","slug":"oakland-california"},{"name":"Oceanside","slug":"oceanside-california"},{"name":"Ontario","slug":"ontario-california"},{"name":"Orange","slug":"orange-california"},{"name":"Oxnard","slug":"oxnard-california"},{"name":"Palm Desert","slug":"palm-desert-california"},{"name":"Palm Springs","slug":"palm-springs-california"},{"name":"Palmdale","slug":"palmdale-california"},{"name":"Pasadena","slug":"pasadena-california"},{"name":"Pomona","slug":"pomona-california"},{"name":"Rancho Cucamonga","slug":"rancho-cucamonga-california"},{"name":"Rialto","slug":"rialto-california"},{"name":"Richmond","slug":"richmond-california"},{"name":"Riverside","slug":"riverside-california"},{"name":"Roseville","slug":"roseville-california"},{"name":"Sacramento","slug":"sacramento-california"},{"name":"Salinas","slug":"salinas-california"},{"name":"San Bernardino","slug":"san-bernardino-california"},{"name":"San Diego","slug":"san-diego-california"},{"name":"Santa Clara","slug":"santa-clara-california"},{"name":"San Francisco","slug":"san-francisco-california"},{"name":"San Jose","slug":"san-jose-california"},{"name":"Santa Ana","slug":"santa-ana-california"},{"name":"Santa Clarita","slug":"santa-clarita-california"},{"name":"Santa Maria","slug":"santa-maria-california"},{"name":"Simi Valley","slug":"simi-valley-california"},{"name":"Stockton","slug":"stockton-california"},{"name":"Sunnyvale","slug":"sunnyvale-california"},{"name":"Temecula","slug":"temecula-california"},{"name":"Thousand Oaks","slug":"thousand-oaks-california"},{"name":"Torrance","slug":"torrance-california"},{"name":"Vallejo","slug":"vallejo-california"},{"name":"Ventura","slug":"ventura-california"},{"name":"Victorville","slug":"victorville-california"},{"name":"Visalia","slug":"visalia-california"},{"name":"West Covina","slug":"west-covina-california"},{"name":"Alhambra","slug":"alhambra-california"},{"name":"Carson","slug":"carson-california"},{"name":"Chico","slug":"chico-california"},{"name":"Hawthorne","slug":"hawthorne-california"},{"name":"Redding","slug":"redding-california"},{"name":"San Mateo","slug":"san-mateo-california"},{"name":"Santa Barbara","slug":"santa-barbara-california"},{"name":"Santa Rosa","slug":"santa-rosa-california"},{"name":"Vacaville","slug":"vacaville-california"},{"name":"Whittier","slug":"whittier-california"},{"name":"El Cajon","slug":"el-cajon-california"},{"name":"Mission Viejo","slug":"mission-viejo-california"},{"name":"San Angelo","slug":"san-angelo-california"},{"name":"South Gate","slug":"south-gate-california"},{"name":"Vista","slug":"vista-california"},{"name":"Baldwin Park","slug":"baldwin-park-california"},{"name":"Bellflower","slug":"bellflower-california"},{"name":"Citrus Heights","slug":"citrus-heights-california"},{"name":"Cypress","slug":"cypress-california"},{"name":"Diamond Bar","slug":"diamond-bar-california"},{"name":"East Los Angeles","slug":"east-los-angeles-california"},{"name":"El Centro","slug":"el-centro-california"},{"name":"Hanford","slug":"hanford-california"},{"name":"Hemet","slug":"hemet-california"},{"name":"Hesperia","slug":"hesperia-california"},{"name":"Indio","slug":"indio-california"},{"name":"La Habra","slug":"la-habra-california"},{"name":"La Mesa","slug":"la-mesa-california"},{"name":"La Puente","slug":"la-puente-california"},{"name":"Lodi","slug":"lodi-california"},{"name":"Madera","slug":"madera-california"},{"name":"Menifee","slug":"menifee-california"},{"name":"Monterey Park","slug":"monterey-park-california"},{"name":"National City","slug":"national-city-california"},{"name":"Petaluma","slug":"petaluma-california"},{"name":"Redwood City","slug":"redwood-city-california"},{"name":"San Leandro","slug":"san-leandro-california"},{"name":"San Rafael","slug":"san-rafael-california"},{"name":"Santa Monica","slug":"santa-monica-california"},{"name":"Tulare","slug":"tulare-california"},{"name":"Turlock","slug":"turlock-california"},{"name":"Union City","slug":"union-city-california"},{"name":"Watsonville","slug":"watsonville-california"},{"name":"Westminster","slug":"westminster-california"},{"name":"Alameda","slug":"alameda-california"},{"name":"Arcadia","slug":"arcadia-california"},{"name":"Arvin","slug":"arvin-california"},{"name":"Atascadero","slug":"atascadero-california"},{"name":"Azusa","slug":"azusa-california"},{"name":"Banning","slug":"banning-california"},{"name":"Barstow","slug":"barstow-california"},{"name":"Beaumont","slug":"beaumont-california"},{"name":"Bell Gardens","slug":"bell-gardens-california"},{"name":"Brawley","slug":"brawley-california"},{"name":"Buena Park","slug":"buena-park-california"},{"name":"Calexico","slug":"calexico-california"},{"name":"Calimesa","slug":"calimesa-california"},{"name":"Camarillo","slug":"camarillo-california"},{"name":"Ceres","slug":"ceres-california"},{"name":"Chino Hills","slug":"chino-hills-california"},{"name":"Coachella","slug":"coachella-california"},{"name":"Coronado","slug":"coronado-california"},{"name":"Cudahy","slug":"cudahy-california"},{"name":"Culver City","slug":"culver-city-california"},{"name":"Delano","slug":"delano-california"},{"name":"Dinuba","slug":"dinuba-california"},{"name":"El Cerrito","slug":"el-cerrito-california"},{"name":"El Segundo","slug":"el-segundo-california"},{"name":"Emeryville","slug":"emeryville-california"},{"name":"Encinitas","slug":"encinitas-california"},{"name":"Folsom","slug":"folsom-california"},{"name":"Fountain Valley","slug":"fountain-valley-california"},{"name":"Glendora","slug":"glendora-california"},{"name":"Goleta","slug":"goleta-california"},{"name":"Hawaiian Gardens","slug":"hawaiian-gardens-california"},{"name":"Hercules","slug":"hercules-california"},{"name":"Huntington Park","slug":"huntington-park-california"},{"name":"Imperial Beach","slug":"imperial-beach-california"},{"name":"La Canada Flintridge","slug":"la-canada-flintridge-california"},{"name":"La Mirada","slug":"la-mirada-california"},{"name":"La Quinta","slug":"la-quinta-california"},{"name":"Laguna Beach","slug":"laguna-beach-california"},{"name":"Laguna Hills","slug":"laguna-hills-california"},{"name":"Laguna Niguel","slug":"laguna-niguel-california"},{"name":"Lake Elsinore","slug":"lake-elsinore-california"},{"name":"Larkspur","slug":"larkspur-california"},{"name":"Lemon Grove","slug":"lemon-grove-california"},{"name":"Lomita","slug":"lomita-california"},{"name":"Los Gatos","slug":"los-gatos-california"},{"name":"Lynwood","slug":"lynwood-california"},{"name":"Manhattan Beach","slug":"manhattan-beach-california"},{"name":"Millbrae","slug":"millbrae-california"},{"name":"Mill Valley","slug":"mill-valley-california"},{"name":"Monrovia","slug":"monrovia-california"},{"name":"Montclair","slug":"montclair-california"},{"name":"Morgan Hill","slug":"morgan-hill-california"},{"name":"Newark","slug":"newark-california"},{"name":"Oakdale","slug":"oakdale-california"},{"name":"Pacifica","slug":"pacifica-california"},{"name":"Palo Alto","slug":"palo-alto-california"},{"name":"Paramount","slug":"paramount-california"},{"name":"Pico Rivera","slug":"pico-rivera-california"},{"name":"Pittsburg","slug":"pittsburg-california"},{"name":"Placentia","slug":"placentia-california"},{"name":"Pleasanton","slug":"pleasanton-california"},{"name":"Poway","slug":"poway-california"},{"name":"Rancho Palos Verdes","slug":"rancho-palos-verdes-california"},{"name":"Redondo Beach","slug":"redondo-beach-california"},{"name":"Reedley","slug":"reedley-california"},{"name":"Ridgecrest","slug":"ridgecrest-california"},{"name":"Rio Vista","slug":"rio-vista-california"},{"name":"Rohnert Park","slug":"rohnert-park-california"},{"name":"Rosemead","slug":"rosemead-california"},{"name":"San Bruno","slug":"san-bruno-california"},{"name":"San Carlos","slug":"san-carlos-california"},{"name":"San Fernando","slug":"san-fernando-california"},{"name":"San Gabriel","slug":"san-gabriel-california"},{"name":"San Jacinto","slug":"san-jacinto-california"},{"name":"San Luis Obispo","slug":"san-luis-obispo-california"},{"name":"San Pablo","slug":"san-pablo-california"},{"name":"San Ramon","slug":"san-ramon-california"},{"name":"Sanger","slug":"sanger-california"},{"name":"Santa Cruz","slug":"santa-cruz-california"},{"name":"Santa Paula","slug":"santa-paula-california"},{"name":"Saratoga","slug":"saratoga-california"},{"name":"Seal Beach","slug":"seal-beach-california"},{"name":"Selma","slug":"selma-california"},{"name":"Signal Hill","slug":"signal-hill-california"},{"name":"Solana Beach","slug":"solana-beach-california"},{"name":"Soledad","slug":"soledad-california"},{"name":"Sonoma","slug":"sonoma-california"},{"name":"South El Monte","slug":"south-el-monte-california"},{"name":"South Pasadena","slug":"south-pasadena-california"},{"name":"South San Francisco","slug":"south-san-francisco-california"},{"name":"Suisun City","slug":"suisun-city-california"},{"name":"Temple City","slug":"temple-city-california"},{"name":"Tiburon","slug":"tiburon-california"},{"name":"Tracy","slug":"tracy-california"},{"name":"Tustin","slug":"tustin-california"},{"name":"Ukiah","slug":"ukiah-california"},{"name":"Upland","slug":"upland-california"},{"name":"Walnut","slug":"walnut-california"},{"name":"Walnut Creek","slug":"walnut-creek-california"},{"name":"Wasco","slug":"wasco-california"},{"name":"West Hollywood","slug":"west-hollywood-california"},{"name":"Wheatland","slug":"wheatland-california"},{"name":"Willows","slug":"willows-california"},{"name":"Windsor","slug":"windsor-california"},{"name":"Woodland","slug":"woodland-california"},{"name":"Yorba Linda","slug":"yorba-linda-california"},{"name":"Yuba City","slug":"yuba-city-california"},{"name":"Yucaipa","slug":"yucaipa-california"},{"name":"Yucca Valley","slug":"yucca-valley-california"}]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Add state information to form submission
    formData.append('state', stateDisplayName)
    formData.append('city', cityDisplayName)
    formData.append('service_type', 'tax_bookkeeping')

    try {
      const response = await fetch('https://formspree.io/f/xjgkdgpo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setFormSubmitted(true)
        setShowSuccessModal(true)
        form.reset()
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    setShowSuccessModal(false)
  }

  // FAQ items for JSON-LD
    const faqItems = [
    {
      q: "Why do vending machine owners in California need specialized tax help?",
      a: "Vending machine businesses in California have unique tax considerations including equipment depreciation, route expenses, location fees across multiple counties, product inventory, multi-location operations, and California-specific tax requirements. Specialized tax professionals understand these nuances and can help maximize deductions while ensuring compliance with state and federal regulations."
    },
    {
      q: "What tax deductions are available for vending machine businesses in California?",
      a: "California vending businesses can deduct equipment depreciation, vehicle expenses for route operations, product inventory costs, location fees throughout the state, maintenance and repairs, insurance, business licenses, professional fees, home office expenses if applicable, and mileage for servicing machines across various California cities and regions."
    },
    {
      q: "How much do tax and bookkeeping services cost for vending businesses in California?",
      a: "Costs vary based on the size of your California vending business, number of locations, machines operated, and services needed. Most professionals offer free consultations to discuss your needs. Monthly bookkeeping typically ranges from $200-$1,000+ depending on complexity, while tax preparation for vending businesses in California generally costs $500-$3,000+ annually."
    },
    {
      q: "What bookkeeping services do California vending businesses need?",
      a: "California vending businesses benefit from monthly bookkeeping that tracks revenue by location throughout the state, product costs, route expenses, equipment maintenance, location fees, profitability analysis by machine or location, and preparation of financial statements. This helps owners make informed business decisions and simplifies tax preparation."
    },
    {
      q: "When should California vending business owners contact a tax professional?",
      a: "It's best to connect with a tax professional year-round, not just during tax season. Early engagement allows for tax planning, quarterly estimate optimization, business structure review for California requirements, and proactive financial management that can save money throughout the year. California tax professionals can help plan for busy seasons and seasonal fluctuations."
    },
    {
      q: "Do California tax professionals understand vending machine business operations?",
      a: "Yes, qualified tax and bookkeeping professionals specializing in vending businesses understand route operations, cash handling, inventory management, equipment depreciation schedules, location agreements, seasonal revenue patterns, and the unique challenges of operating multiple machines across California's diverse cities and business districts."
    },
    {
      q: "What business records should California vending owners bring to tax consultations?",
      a: "Bring previous tax returns, financial statements, bank statements, expense receipts for route operations and equipment, equipment purchase records, location agreements throughout California, vehicle mileage logs, inventory records, and any questions about your business structure or operations. The more information you provide, the better the professional can assist you."
    },
    {
      q: "Are there California-specific tax considerations for vending businesses?",
      a: "Yes, California vending businesses must consider California sales tax on vending machine sales, state income tax, franchise tax board requirements, business licenses throughout the state, and potential property tax on equipment. A qualified tax professional can ensure compliance with all California-specific tax requirements."
    },
    {
      q: "How can bookkeeping help California vending businesses grow?",
      a: "Professional bookkeeping provides accurate financial insights that help California vending owners identify most profitable locations, optimize route efficiency, manage cash flow during slow seasons, make informed equipment purchase decisions, negotiate better location agreements, and plan for expansion throughout California."
    },
    {
      q: "What's the typical turnaround time for tax preparation for California vending businesses?",
      a: "Turnaround time varies by complexity, but most tax professionals can complete returns for California vending businesses within 2-4 weeks after receiving all necessary documents. Starting early in tax season and maintaining organized records throughout the year helps expedite the process and allows time for tax planning strategies specific to California requirements."
    }
  ]

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-stone">
              <Link href="/" className="hover:text-navy transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/tax-services" className="hover:text-navy transition-colors">
                Tax Services
              </Link>
              <span>/</span>
              <Link href="/tax-services/florida" className="hover:text-navy transition-colors">
                Florida
              </Link>
              <span>/</span>
              <span className="text-charcoal font-medium">California</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Column - Content */}
                <div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6 leading-tight"
                  >
                    Tax & Bookkeeping Services for Vending Machine Owners in{' '}
                    <span className="text-navy">California, California</span>
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-stone mb-8 leading-relaxed"
                  >
                    Expert tax preparation and bookkeeping services designed specifically for vending machine business owners in California. Get professional help with taxes, accounting, and financial management from professionals who understand your business.
                  </motion.p>

                  {/* Trust Signals */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-2 gap-4 mb-8"
                  >
                    <div className="bg-warm-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <CalculatorIcon className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-chocolate">Maximize Deductions</span>
                      </div>
                    </div>
                    <div className="bg-warm-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <DocumentTextIcon className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-medium text-chocolate">Stay Compliant</span>
                      </div>
                    </div>
                    <div className="bg-warm-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <CurrencyDollarIcon className="h-5 w-5 text-purple-600" />
                        <span className="text-sm font-medium text-chocolate">Financial Tracking</span>
                      </div>
                    </div>
                    <div className="bg-warm-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <MapPinIcon className="h-5 w-5 text-coral" />
                        <span className="text-sm font-medium text-chocolate">California Experts</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Benefits List */}
                  <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="space-y-3"
                  >
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Specialized knowledge of vending machine tax deductions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Monthly bookkeeping and financial tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Year-round tax planning and consultation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Florida and California-specific tax expertise</span>
                    </li>
                  </motion.ul>
                </div>

                {/* Right Column - Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-cream p-8 rounded-2xl shadow-xl border border-stone/20"
                >
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-playfair font-bold text-navy mb-2">
                        Request Received!
                      </h3>
                      <p className="text-charcoal/80">
                        We'll connect you with California tax and bookkeeping professionals within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-playfair font-bold text-navy mb-2 text-center">
                        Get Tax & Bookkeeping Help in California
                      </h3>
                      <p className="text-charcoal/70 mb-6 text-center text-sm">
                        Fill out the form and we'll connect you with professionals in your area.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Field */}
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                            Full Name *
                          </label>
                          <div className="relative">
                            <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone/50" />
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              className="w-full pl-10 pr-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all text-sm"
                              placeholder="John Smith"
                            />
                          </div>
                        </div>

                        {/* Email Field */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                            Email Address *
                          </label>
                          <div className="relative">
                            <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone/50" />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              className="w-full pl-10 pr-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all text-sm"
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>

                        {/* Phone Field */}
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone/50" />
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              className="w-full pl-10 pr-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all text-sm"
                              placeholder="(555) 123-4567"
                            />
                          </div>
                        </div>

                        {/* Number of Employees Field */}
                        <div>
                          <label htmlFor="employees" className="block text-sm font-medium text-charcoal mb-1.5">
                            Number of Employees *
                          </label>
                          <div className="relative">
                            <UsersIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone/50" />
                            <select
                              id="employees"
                              name="employees"
                              required
                              className="w-full pl-10 pr-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all appearance-none bg-white text-sm"
                            >
                              <option value="">Select range...</option>
                              <option value="1-25">1-25 employees</option>
                              <option value="26-50">26-50 employees</option>
                              <option value="51-100">51-100 employees</option>
                              <option value="101-250">101-250 employees</option>
                              <option value="251-500">251-500 employees</option>
                              <option value="500+">500+ employees</option>
                            </select>
                          </div>
                        </div>

                        {/* Zip Code Field */}
                        <div>
                          <label htmlFor="zipcode" className="block text-sm font-medium text-charcoal mb-1.5">
                            Zip Code *
                          </label>
                          <div className="relative">
                            <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone/50" />
                            <input
                              type="text"
                              id="zipcode"
                              name="zipcode"
                              required
                              pattern="[0-9]{5}"
                              maxLength={5}
                              className="w-full pl-10 pr-4 py-2.5 border border-stone/30 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral transition-all text-sm"
                              placeholder="32202"
                            />
                          </div>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-navy hover:bg-navy/90 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                        >
                          {isSubmitting ? 'Submitting...' : 'Get Professional Help'}
                        </button>

                        <p className="text-xs text-charcoal/60 text-center mt-3">
                          By submitting, you agree to be contacted by tax and bookkeeping professionals in California.
                        </p>
                      </form>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help Process Section */}
        <section className="py-16 bg-gradient-to-b from-white to-warm-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-playfair font-bold text-chocolate mb-4">
                  How We Help California Vending Business Owners Find Tax & Bookkeeping Professionals
                </h2>
                <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                  Our proven process connects you with qualified, professional tax and bookkeeping experts who understand vending machine businesses
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy mb-3">Submit Your Info</h3>
                    <p className="text-charcoal/80 text-sm">
                      Tell us about your California vending business, number of locations, and tax/bookkeeping needs.
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-coral/30 -translate-x-1/2" style={{ width: 'calc(100% - 4rem)' }}></div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy mb-3">We Match You</h3>
                    <p className="text-charcoal/80 text-sm">
                      We connect you with 2-3 pre-screened tax and bookkeeping professionals who serve California and understand vending businesses.
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-coral/30 -translate-x-1/2" style={{ width: 'calc(100% - 4rem)' }}></div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy mb-3">Compare Services</h3>
                    <p className="text-charcoal/80 text-sm">
                      Review service offerings, pricing, and expertise from multiple professionals at no obligation.
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-coral/30 -translate-x-1/2" style={{ width: 'calc(100% - 4rem)' }}></div>
                </motion.div>

                {/* Step 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-white">4</span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy mb-3">Get Started</h3>
                    <p className="text-charcoal/80 text-sm">
                      Choose your preferred professional and start getting expert tax and bookkeeping help for your vending business.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Process Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 bg-navy/5 rounded-2xl p-8 border border-navy/10"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-navy mb-2">100%</div>
                    <div className="text-charcoal/70 text-sm">Free Matching Service</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-navy mb-2">24hrs</div>
                    <div className="text-charcoal/70 text-sm">Response Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-navy mb-2">2-3</div>
                    <div className="text-charcoal/70 text-sm">Professional Options</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-playfair font-bold text-chocolate mb-4">
                  What to Expect from Tax & Bookkeeping Services in California
                </h2>
                <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                  Understanding the complete tax and bookkeeping process for California vending machine businesses
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Tax Preparation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-warm-white p-6 rounded-xl border border-stone/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DocumentTextIcon className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">Comprehensive Tax Preparation</h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed">
                        Professional tax preparation for your California vending business, including federal and Florida state returns, 
                        maximizing all eligible deductions for equipment, vehicles, locations, and operational expenses specific to vending operations.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Monthly Bookkeeping */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="bg-warm-white p-6 rounded-xl border border-stone/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CalculatorIcon className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">Monthly Bookkeeping Services</h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed">
                        Regular financial tracking including revenue by location throughout California, expense categorization, 
                        profit and loss statements, balance sheets, and cash flow analysis to help you understand your business performance.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Tax Planning */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-warm-white p-6 rounded-xl border border-stone/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CurrencyDollarIcon className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">Year-Round Tax Planning</h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed">
                        Strategic tax planning throughout the year, quarterly estimate guidance, business structure optimization, 
                        and proactive strategies to minimize your tax burden while maximizing deductions for your California vending operations.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Financial Reporting */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-warm-white p-6 rounded-xl border border-stone/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BuildingOffice2Icon className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">Financial Reporting & Analysis</h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed">
                        Detailed financial reports including profitability by location, equipment ROI analysis, expense trends, 
                        and custom reports tailored to your California vending business needs to support informed decision-making.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Compliance */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-warm-white p-6 rounded-xl border border-stone/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShieldCheckIcon className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">Compliance & Support</h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed">
                        Ensure compliance with federal, Florida state, and Duval County tax requirements. Professional support for audits, 
                        tax notices, and ongoing questions about your vending business tax obligations throughout the year.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Consultation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="bg-warm-white p-6 rounded-xl border border-stone/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ClockIcon className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">Ongoing Consultation</h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed">
                        Access to tax and financial professionals for questions, guidance on business decisions, 
                        advice on equipment purchases, expansion planning, and strategic financial management for your California vending operations.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-warm-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold text-chocolate mb-12 text-center"
              >
                Why California Vending Business Owners Choose Our Tax & Bookkeeping Partners
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CalculatorIcon className="h-8 w-8 text-coral" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">Vending Business Expertise</h3>
                  <p className="text-charcoal/80">
                    Work with professionals who understand the unique tax and accounting needs of vending machine businesses.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPinIcon className="h-8 w-8 text-coral" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">California Knowledge</h3>
                  <p className="text-charcoal/80">
                    Local professionals familiar with California and Florida tax requirements, business regulations, and economic landscape.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheckIcon className="h-8 w-8 text-coral" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">Year-Round Support</h3>
                  <p className="text-charcoal/80">
                    Ongoing consultation and support throughout the year, not just during tax season.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold text-chocolate mb-8 text-center"
              >
                Tax & Bookkeeping Services in California - FAQ
              </motion.h2>

              <div className="space-y-6">
                {faqItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="bg-warm-white p-6 rounded-lg shadow-md border border-stone/20"
                  >
                    <h3 className="text-lg font-semibold text-navy mb-2">
                      {item.q}
                    </h3>
                    <p className="text-charcoal/80">
                      {item.a}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-bold text-white mb-6">
                Ready to Get Your Taxes in Order?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join California vending business owners who trust professional tax and bookkeeping services.
              </p>
              <a
                href="#hero-form"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="inline-flex items-center px-8 py-4 bg-coral text-white font-semibold rounded-lg hover:bg-coral/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ZipCodeModalWrapper />

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-stone hover:text-charcoal transition-colors"
              aria-label="Close"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <CheckCircleIcon className="h-10 w-10 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-playfair font-bold text-navy mb-3">
                Thank You!
              </h3>
              
              <p className="text-lg text-charcoal/80 mb-2">
                Your request has been received.
              </p>
              
              <p className="text-charcoal/70 mb-6">
                We'll be reaching out to you within 24 hours to connect you with tax and bookkeeping professionals in California.
              </p>

              <button
                onClick={closeModal}
                className="w-full bg-navy hover:bg-navy/90 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200"
              >
                Got It
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* JSON-LD: Breadcrumbs and FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thevendinglocator.com/' },
              { '@type': 'ListItem', position: 2, name: 'Tax Services', item: 'https://www.thevendinglocator.com/tax-services' },
              { '@type': 'ListItem', position: 3, name: 'California', item: 'https://www.thevendinglocator.com/tax-services/california' },
              { '@type': 'ListItem', position: 4, name: 'California', item: 'https://www.thevendinglocator.com/tax-services/california' }
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
            mainEntity: faqItems.map(i => ({
              '@type': 'Question',
              name: i.q,
              acceptedAnswer: { '@type': 'Answer', text: i.a }
            }))
          })
        }}
      />
    </>
  )
}

