'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import SmartBreadcrumbs from '@/components/SmartBreadcrumbs'

export default function WarnerRobinsGeorgiaVendingLeadsPage() {
  const cityDisplayName = 'Warner Robins';
  const stateDisplayName = 'Georgia';
  
  const cityData = {
    'name': 'Warner Robins',
    'state': 'Georgia',
    'population': '50K-100K',
    'businesses': '5K-10K',
    'industries': '8-12',
    'verifiedLocations': '100-200',
    'rating': '4.8/5',
    'description': 'Military community with strong business economy'
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
              { name: 'Warner Robins', href: '/vending-leads/warner-robins-georgia' }
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
              Get pre-qualified vending machine locations in {cityDisplayName}'s military and business community. 
              Access verified businesses with detailed contact information and placement opportunities.
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Military Community</h3>
                <p className="text-gray-600 mb-4">
                  Warner Robins is home to Robins Air Force Base, providing a stable military population 
                  with consistent purchasing power and regular foot traffic.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Robins Air Force Base personnel</li>
                  <li>Military contractors and suppliers</li>
                  <li>Defense industry professionals</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Business Diversity</h3>
                <p className="text-gray-600 mb-4">
                  The city features a diverse business environment with manufacturing, healthcare, 
                  retail, and service industries creating multiple vending opportunities.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Manufacturing facilities</li>
                  <li>Healthcare centers</li>
                  <li>Retail and shopping centers</li>
                  <li>Office complexes</li>
                </ul>
              </div>
            </motion.div>
          </section>

          {/* Hot Leads */}
          <HotLeads />

          {/* Vending Course */}
          <VendingCourse />

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
                  Warner Robins offers excellent opportunities at Robins Air Force Base, manufacturing facilities, 
                  healthcare centers, and retail locations. The military community provides consistent foot traffic 
                  and purchasing power.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  How does the military presence affect vending opportunities in {cityDisplayName}?
                </h3>
                <p className="text-gray-600">
                  Robins Air Force Base creates a stable customer base with regular schedules, consistent income, 
                  and high demand for convenient food and beverage options. Military personnel often have limited 
                  time for meals, making vending machines highly valuable.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  What are the peak hours for vending machine sales in {cityDisplayName}?
                </h3>
                <p className="text-gray-600">
                  Peak hours typically align with military shift changes (6-8 AM, 12-2 PM, 4-6 PM) and business 
                  lunch hours. Manufacturing facilities often have 24/7 operations, providing round-the-clock 
                  vending opportunities.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Are there any special permits required for vending machines in {cityDisplayName}?
                </h3>
                <p className="text-gray-600">
                  Standard business licenses and health permits are required. For military base locations, 
                  additional security clearances and base-specific permits may be necessary. We help navigate 
                  all permit requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  How do I get started with vending machines in {cityDisplayName}?
                </h3>
                <p className="text-gray-600">
                  Start by accessing our verified location database for Warner Robins, which includes 
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

        <Footer />
      </ZipCodeModalWrapper>
    </div>
  )
}
