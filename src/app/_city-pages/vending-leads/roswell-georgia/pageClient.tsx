'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import CityPageSEO from '@/components/CityPageSEO'
import SmartBreadcrumbs from '@/components/SmartBreadcrumbs'

export default function RoswellGeorgiaVendingLeadsPage() {
  const cityDisplayName = 'Roswell';const stateDisplayName = 'Georgia';
  
  const cityData = {
    'name': 'Roswell',
    'state': 'Georgia',
    'population': '100K-200K',
    'businesses': '10K-15K',
    'industries': '12-15',
    'verifiedLocations': '200-300',
    'rating': '4.8/5',
    'description': 'Historic city with growing business community'
  };

  const userNames = [
    'Sarah M.',
    'Michael T.',
    'Jennifer L.',
    'David R.',
    'Amanda K.',
    'Robert P.',
    'Lisa W.',
    'James H.',
    'Michelle B.',
    'Thomas S.'
  ];

  const [activeUsers, setActiveUsers] = useState(0);
  const [expandedStates, setExpandedStates] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 3) - 1;
        return Math.max(0, Math.min(100, prev + change));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleState = (stateName: string) => {
    setExpandedStates(prev => 
      prev.includes(stateName) 
        ? prev.filter(name => name !== stateName)
        : [...prev, stateName]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <ZipCodeModalWrapper>
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <SmartBreadcrumbs 
            items={[
              { name: 'Home', href: '/' },
              { name: 'Vending Leads', href: '/vending-leads' },
              { name: 'Georgia', href: '/vending-leads/georgia' },
              { name: 'Roswell', href: '/vending-leads/roswell-georgia' }
            ]}
          />

          {/* Hero Section */}
          <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Vending Machine Locations in {cityDisplayName}, {stateDisplayName}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              Unlock vending opportunities in Roswell, Georgia, featuring businesses with high employee counts and consistent visitor traffic.</motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Pricing
              </button>
            </motion.div>
          </section>

          {/* Pricing Table */}
          <PricingTable />

          {/* Trust Signals */}
          <section className="text-center py-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">{cityData.verifiedLocations}+</div>
                <div className="text-gray-600">Verified Locations</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">{cityData.businesses}+</div>
                <div className="text-gray-600">Businesses</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">{cityData.rating}</div>
                <div className="text-gray-600">Customer Rating</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">{activeUsers}</div>
                <div className="text-gray-600">Active Users</div>
              </div>
            </motion.div>
          </section>

          {/* City Statistics */}
          <section className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-8 text-gray-800"
            >
              {cityDisplayName} Business Landscape
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">{cityData.population}</div>
                <div className="text-gray-600">Population</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">{cityData.businesses}</div>
                <div className="text-gray-600">Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">{cityData.industries}</div>
                <div className="text-gray-600">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">{cityData.verifiedLocations}</div>
                <div className="text-gray-600">Verified Locations</div>
              </div>
            </motion.div>
          </section>

          {/* Business Landscape */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-8 text-gray-800"
            >
              Why {cityDisplayName} is Perfect for Vending Machines
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Historic Charm & Modern Growth</h3>
                <p className="text-gray-600 mb-4">
                  Roswell combines historic charm with modern business development, creating diverse 
                  vending opportunities in both traditional and contemporary settings.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Historic downtown district</li>
                  <li>Modern office complexes</li>
                  <li>Retail and shopping centers</li>
                  <li>Healthcare facilities</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Growing Business Community</h3>
                <p className="text-gray-600 mb-4">
                  The city is experiencing steady growth with new businesses, residential developments, 
                  and commercial projects creating expanding vending opportunities.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>New commercial developments</li>
                  <li>Residential communities</li>
                  <li>Professional services</li>
                  <li>Technology companies</li>
                </ul>
              </div>
            </motion.div>
          </section>

          {/* Hot Leads */}
          <HotLeads />

          {/* Vending Course */}
          <VendingCourse />

          {/* Related Cities Section */}
          <section className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-8 text-gray-800"
            >
              Explore Other Georgia Cities
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              <Link 
                href="/vending-leads/atlanta-georgia" 
                className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="font-semibold text-gray-800">Atlanta</div>
                <div className="text-sm text-gray-600">Capital City</div>
              </Link>
              <Link 
                href="/vending-leads/savannah-georgia" 
                className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="font-semibold text-gray-800">Savannah</div>
                <div className="text-sm text-gray-600">Historic Port</div>
              </Link>
              <Link 
                href="/vending-leads/marietta-georgia" 
                className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="font-semibold text-gray-800">Marietta</div>
                <div className="text-sm text-gray-600">Retail Hub</div>
              </Link>
              <Link 
                href="/vending-leads/sandy-springs-georgia" 
                className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="font-semibold text-gray-800">Sandy Springs</div>
                <div className="text-sm text-gray-600">Business District</div>
              </Link>
              <Link 
                href="/vending-leads/warner-robins-georgia" 
                className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="font-semibold text-gray-800">Warner Robins</div>
                <div className="text-sm text-gray-600">Military Base</div>
              </Link>
              <Link 
                href="/vending-leads/augusta-georgia" 
                className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="font-semibold text-gray-800">Augusta</div>
                <div className="text-sm text-gray-600">Golf Capital</div>
              </Link>
              <Link 
                href="/vending-leads/macon-georgia" 
                className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="font-semibold text-gray-800">Macon</div>
                <div className="text-sm text-gray-600">Central Hub</div>
              </Link>
              <Link 
                href="/vending-leads/athens-georgia" 
                className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="font-semibold text-gray-800">Athens</div>
                <div className="text-sm text-gray-600">University Town</div>
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-8"
            >
              <Link 
                href="/vending-leads/georgia" 
                className="inline-flex items-center px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors font-semibold"
              >
                View All Georgia Cities
              </Link>
            </motion.div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-8 text-gray-800"
            >
              Frequently Asked Questions - {cityDisplayName}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  What types of businesses in {cityDisplayName} are best for vending machines?
                </h3>
                <p className="text-gray-600">
                  Roswell offers diverse opportunities including historic downtown businesses, modern 
                  office complexes, retail centers, and healthcare facilities. The mix of traditional 
                  and contemporary businesses provides varied vending options.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  How does the historic character affect vending opportunities in {cityDisplayName}?
                </h3>
                <p className="text-gray-600">
                  The historic downtown area attracts tourists and locals, creating foot traffic for 
                  vending machines. Historic buildings may have specific requirements, but they often 
                  provide unique and high-traffic locations.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  What are the peak hours for vending machine sales in {cityDisplayName}?
                </h3>
                <p className="text-gray-600">
                  Peak hours vary by location type. Downtown areas are busiest during lunch (11 AM-2 PM) 
                  and evening hours (5-8 PM). Office complexes peak during business hours (8 AM-6 PM), 
                  while retail locations have more consistent traffic throughout the day.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Are there any special considerations for vending machines in {cityDisplayName}?
                </h3>
                <p className="text-gray-600">
                  Standard business licenses and health permits are required. Historic district locations 
                  may have additional aesthetic requirements. The growing nature of the city means new 
                  opportunities are constantly emerging.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  How do I get started with vending machines in {cityDisplayName}?
                </h3>
                <p className="text-gray-600">
                  Start by accessing our verified location database for Roswell, which includes 
                  pre-qualified businesses ready for vending machine placement. Our platform provides 
                  contact information, business details, and placement opportunities to help you get started quickly.
                </p>
              </div>
            </motion.div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Start Your Vending Business in {cityDisplayName}?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Join {userNames[Math.floor(Math.random() * userNames.length)]} and other successful vending operators 
              who are already profiting from {cityDisplayName}'s business opportunities.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View All Locations
              </button>
            </motion.div>
          </section>
        </main>

        {/* SEO Structured Data */}


        <CityPageSEO


          city="Roswell"


          state="Georgia"


          stateAbbr="GA"


          description="Get verified vending machine leads and locations in Roswell, Georgia. Find qualified businesses for vending machine placement."
        faqs={[
          {
            question: "Historic Charm & Modern Growth",
            answer: "Roswell combines historic charm with modern business development, creating diverse vending opportunities in both traditional and contemporary settings."
          },
          {
            question: "What types of businesses in {cityDisplayName} are best for vending machines?",
            answer: "Roswell offers diverse opportunities including historic downtown businesses, modern office complexes, retail centers, and healthcare facilities. The mix of traditional and contemporary businesses provides varied vending options."
          },
          {
            question: "Growing Business Community",
            answer: "The city is experiencing steady growth with new businesses, residential developments, and commercial projects creating expanding vending opportunities."
          },
          {
            question: "How does the historic character affect vending opportunities in {cityDisplayName}?",
            answer: "The historic downtown area attracts tourists and locals, creating foot traffic for vending machines. Historic buildings may have specific requirements, but they often provide unique and high-traffic locations."
          },
          {
            question: "What are the peak hours for vending machine sales in {cityDisplayName}?",
            answer: "Peak hours vary by location type. Downtown areas are busiest during lunch (11 AM-2 PM) and evening hours (5-8 PM). Office complexes peak during business hours (8 AM-6 PM), while retail locations have more consistent traffic throughout the day."
          },
          {
            question: "Are there any special considerations for vending machines in {cityDisplayName}?",
            answer: "Standard business licenses and health permits are required. Historic district locations may have additional aesthetic requirements. The growing nature of the city means new opportunities are constantly emerging."
          },
          {
            question: "How do I get started with vending machines in {cityDisplayName}?",
            answer: "Start by accessing our verified location database for Roswell, which includes pre-qualified businesses ready for vending machine placement. Our platform provides contact information, business details, and placement opportunities to help you get started quickly."
          }
        ]}


        />


        


        <Footer />
      </ZipCodeModalWrapper>
    </div>
  )
}
