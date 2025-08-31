'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingTable from '@/components/PricingTable';
import HotLeads from '@/components/HotLeads';
import VendingCourse from '@/components/VendingCourse';
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper';

export default function FortCollinsColoradoPage() {
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    // Simulate active users
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const cityData = {
    name: 'Fort Collins',
    state: 'Colorado',
    population: '169,000+',
    description: 'Fort Collins, home to Colorado State University, offers a vibrant mix of education, technology, and outdoor recreation businesses.',
    heroTitle: 'Vending Machine Opportunities in Fort Collins, Colorado',
    heroSubtitle: 'Connect with local businesses and secure prime vending locations in Fort Collins\' thriving economy',
    businessLandscape: [
      {
        title: 'Education & Research',
        description: 'Colorado State University and research institutions with large student and staff populations',
        icon: '🎓'
      },
      {
        title: 'Technology & Innovation',
        description: 'Growing tech sector with startups and established companies in the city',
        icon: '💻'
      },
      {
        title: 'Healthcare & Wellness',
        description: 'Medical centers, clinics, and wellness facilities serving the community',
        icon: '🏥'
      },
      {
        title: 'Outdoor Recreation',
        description: 'Companies specializing in outdoor gear, sports, and recreational activities',
        icon: '🏔️'
      },
      {
        title: 'Manufacturing',
        description: 'Diverse manufacturing sector including food processing and technology',
        icon: '🏭'
      },
      {
        title: 'Retail & Entertainment',
        description: 'Old Town shopping district and modern retail centers throughout the city',
        icon: '🛍️'
      }
    ],
    faq: [
      {
        question: 'What types of businesses in Fort Collins are good for vending machines?',
        answer: 'Educational institutions, healthcare facilities, office buildings, retail centers, and manufacturing plants in Fort Collins are excellent locations for vending machines due to high foot traffic and captive audiences.'
      },
      {
        question: 'How do I approach businesses in Fort Collins for vending machine placement?',
        answer: 'Start with educational institutions, healthcare facilities, and office buildings. Present the benefits of increased revenue, customer convenience, and our guaranteed placement service.'
      },
      {
        question: 'What are the best areas in Fort Collins for vending machine placement?',
        answer: 'Focus on areas around Colorado State University, medical districts, Old Town, and industrial areas where there\'s consistent foot traffic and employee populations.'
      },
      {
        question: 'How long does it take to get vending machines placed in Fort Collins?',
        answer: 'With our expert team handling outreach and negotiations, most placements in Fort Collins are completed within 1-6 months, depending on the specific location and business type.'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {cityData.heroTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto"
          >
            {cityData.heroSubtitle}
          </motion.p>
          
          {/* Trust Signals */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">{cityData.population}</div>
              <div className="text-sm opacity-90">Population</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">500+</div>
              <div className="text-sm opacity-90">Businesses Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">95%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
          </motion.div>

          {/* Active Users Counter */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block"
          >
            <div className="text-sm opacity-90 mb-1">Active users exploring opportunities</div>
            <div className="text-2xl font-bold text-yellow-300">{activeUsers.toLocaleString()}</div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vending Machine Pricing & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your vending machine business in {cityData.name}, {cityData.state}
            </p>
          </motion.div>
          <PricingTable />
        </div>
      </section>

      {/* Business Landscape */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {cityData.name} Business Landscape
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the diverse business opportunities in {cityData.name}, {cityData.state}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cityData.businessLandscape.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hot Leads Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <HotLeads />
        </div>
      </section>

      {/* Vending Course Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <VendingCourse />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers about vending machine opportunities in {cityData.name}, {cityData.state}
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {cityData.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ZipCodeModalWrapper />
    </div>
  );
}