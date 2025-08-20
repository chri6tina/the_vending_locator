'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function VendingMachineServicesPage() {
  const majorCities = [
    // Florida
    { name: 'Jacksonville', state: 'Florida', slug: 'jacksonville-florida', population: '949,611', businesses: '45,000+' },
    { name: 'Miami', state: 'Florida', slug: 'miami-florida', population: '442,241', businesses: '38,000+' },
    { name: 'Orlando', state: 'Florida', slug: 'orlando-florida', population: '307,573', businesses: '32,000+' },
    { name: 'Tampa', state: 'Florida', slug: 'tampa-florida', population: '384,959', businesses: '35,000+' },
    { name: 'Fort Lauderdale', state: 'Florida', slug: 'fort-lauderdale-florida', population: '182,760', businesses: '28,000+' },
    
    // Texas
    { name: 'Austin', state: 'Texas', slug: 'austin-texas', population: '978,908', businesses: '42,000+' },
    { name: 'Dallas', state: 'Texas', slug: 'dallas-texas', population: '1,304,379', businesses: '55,000+' },
    { name: 'Houston', state: 'Texas', slug: 'houston-texas', population: '2,320,268', businesses: '65,000+' },
    { name: 'San Antonio', state: 'Texas', slug: 'san-antonio-texas', population: '1,547,253', businesses: '45,000+' },
    
    // California
    { name: 'Los Angeles', state: 'California', slug: 'los-angeles-california', population: '3,898,747', businesses: '85,000+' },
    { name: 'San Francisco', state: 'California', slug: 'san-francisco-california', population: '873,965', businesses: '52,000+' },
    { name: 'San Diego', state: 'California', slug: 'san-diego-california', population: '1,386,932', businesses: '48,000+' },
    
    // New York
    { name: 'New York City', state: 'New York', slug: 'new-york-new-york', population: '8,804,190', businesses: '220,000+' },
    
    // Illinois
    { name: 'Chicago', state: 'Illinois', slug: 'chicago-illinois', population: '2,746,388', businesses: '75,000+' },
    
    // Pennsylvania
    { name: 'Philadelphia', state: 'Pennsylvania', slug: 'philadelphia-pennsylvania', population: '1,603,797', businesses: '45,000+' },
    
    // Arizona
    { name: 'Phoenix', state: 'Arizona', slug: 'phoenix-arizona', population: '1,608,139', businesses: '52,000+' },
    
    // Washington
    { name: 'Seattle', state: 'Washington', slug: 'seattle-washington', population: '744,955', businesses: '38,000+' },
    
    // Oregon
    { name: 'Portland', state: 'Oregon', slug: 'portland-oregon', population: '652,503', businesses: '35,000+' },
    
    // Colorado
    { name: 'Denver', state: 'Colorado', slug: 'denver-colorado', population: '727,211', businesses: '42,000+' },
    
    // Georgia
    { name: 'Atlanta', state: 'Georgia', slug: 'atlanta-georgia', population: '506,811', businesses: '38,000+' },
    
    // Massachusetts
    { name: 'Boston', state: 'Massachusetts', slug: 'boston-massachusetts', population: '675,647', businesses: '35,000+' },
    
    // Nevada
    { name: 'Las Vegas', state: 'Nevada', slug: 'las-vegas-nevada', population: '651,319', businesses: '32,000+' },
    
    // Utah
    { name: 'Salt Lake City', state: 'Utah', slug: 'salt-lake-city-utah', population: '200,591', businesses: '25,000+' },
    
    // Ohio
    { name: 'Cleveland', state: 'Ohio', slug: 'cleveland-ohio', population: '372,624', businesses: '28,000+' },
    { name: 'Columbus', state: 'Ohio', slug: 'columbus-ohio', population: '898,553', businesses: '42,000+' },
    { name: 'Cincinnati', state: 'Ohio', slug: 'cincinnati-ohio', population: '309,317', businesses: '32,000+' },
    
    // Tennessee
    { name: 'Nashville', state: 'Tennessee', slug: 'nashville-tennessee', population: '689,447', businesses: '38,000+' },
    { name: 'Memphis', state: 'Tennessee', slug: 'memphis-tennessee', population: '651,073', businesses: '35,000+' },
    
    // North Carolina
    { name: 'Charlotte', state: 'North Carolina', slug: 'charlotte-north-carolina', population: '885,708', businesses: '42,000+' },
    { name: 'Raleigh', state: 'North Carolina', slug: 'raleigh-north-carolina', population: '474,069', businesses: '32,000+' }
  ]

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-warm-white via-cream to-warm-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-navy to-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                Find the Best<br />
                <span className="text-coral">Vending Machine Services</span><br />
                <span className="text-2xl md:text-3xl">Completely FREE</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
                We connect businesses with top-rated vending machine companies. 
                No cost to you - we get paid by the vendors, not you.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral">100%</div>
                  <div className="text-sm">Free Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral">500+</div>
                  <div className="text-sm">Vending Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral">50+</div>
                  <div className="text-sm">Major Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral">24hrs</div>
                  <div className="text-sm">Response Time</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#how-it-works"
                  className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  How It Works
                </Link>
                <Link
                  href="#cities"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  Browse Cities
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
                How Our Free Service Works
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                We've revolutionized how businesses find vending services. 
                No more endless searching or expensive consultations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: '1',
                  title: 'Tell Us Your Needs',
                  description: 'Fill out a simple form describing your business, location, and vending requirements.',
                  icon: '📝'
                },
                {
                  step: '2',
                  title: 'We Match You',
                  description: 'Our experts analyze your needs and connect you with the top 3-5 vending companies in your area.',
                  icon: '🔍'
                },
                {
                  step: '3',
                  title: 'Get Free Quotes',
                  description: 'Receive detailed proposals from qualified vendors. No obligation, no pressure.',
                  icon: '💬'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-coral text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{item.title}</h3>
                  <p className="text-stone leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-warm-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
                Why Businesses Choose Our Service
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                We're not just another directory - we're your vending service matchmaker.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: '100% Free',
                  description: 'No hidden fees, no charges, no obligations. We get paid by vendors, not you.',
                  icon: '💰'
                },
                {
                  title: 'Vetted Companies',
                  description: 'Every vendor is pre-screened for quality, reliability, and customer satisfaction.',
                  icon: '✅'
                },
                {
                  title: 'Local Expertise',
                  description: 'We know the local vending market in your city and can recommend the best options.',
                  icon: '🏢'
                },
                {
                  title: 'Quick Response',
                  description: 'Get matched with vendors within 24 hours, not weeks or months.',
                  icon: '⚡'
                },
                {
                  title: 'No Sales Pressure',
                  description: 'We provide information and connections, not sales pitches.',
                  icon: '🤝'
                },
                {
                  title: 'Ongoing Support',
                  description: 'We're here to help throughout your vending journey, not just the initial setup.',
                  icon: '📞'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{benefit.title}</h3>
                  <p className="text-stone leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section id="cities" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
                Find Vending Services in Your City
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Browse our comprehensive directory of cities where we provide vending service matching.
                Can't find your city? Contact us and we'll add it!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {majorCities.map((city, index) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/vending-machine-services/${city.slug}`}
                    className="block p-6 bg-warm-white hover:bg-gray-100 rounded-lg border border-gray-200 transition-all duration-200 hover:shadow-md"
                  >
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      {city.name}, {city.state}
                    </h3>
                    <div className="text-sm text-stone space-y-1">
                      <div>Population: {city.population}</div>
                      <div>Businesses: {city.businesses}</div>
                    </div>
                    <div className="mt-3 text-coral font-medium text-sm">
                      Find Vending Services →
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-lg text-stone mb-4">
                Don't see your city listed?
              </p>
              <Link
                href="/contact"
                className="inline-block bg-coral hover:bg-coral/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Request Your City
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-navy to-charcoal text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Ready to Find Your Perfect Vending Partner?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
                Join thousands of businesses who've found their ideal vending services through our free matching service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  Get Started Today
                </Link>
                <Link
                  href="#cities"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  Browse Cities
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
