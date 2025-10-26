'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingTable from '@/components/PricingTable';
import HotLeads from '@/components/HotLeads';
import VendingCourse from '@/components/VendingCourse';
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper';
import { 
  BuildingOffice2Icon, 
  AcademicCapIcon, 
  BuildingStorefrontIcon,
  HeartIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  CheckCircleIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';

const cityName = "Rochester";
const stateName = "New Hampshire";
const stateAbbrev = "NH";

export default function PageClient() {
  const [activeUsers, setActiveUsers] = useState(127);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newValue = prev + change;
        return Math.max(95, Math.min(180, newValue));
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const faqs = [
    {
        "q": "How many vending machine locations are available in Rochester?",
        "a": "Our Rochester database includes hundreds of verified vending locations across manufacturing and healthcare center with growing commercial development. We continuously update our listings to ensure you have access to the most current opportunities in New Hampshire's growing market."
    },
    {
        "q": "What types of locations are included in Rochester's vending leads?",
        "a": "Rochester's leads span manufacturing & industrial, healthcare & medical centers, retail & commercial, and more. Our database focuses on high-traffic venues with ~32,000 residents and visitors providing consistent customer flow throughout the year."
    },
    {
        "q": "How current are the Rochester vending location leads?",
        "a": "All Rochester leads are verified and updated regularly. Our team actively monitors Rochester's business landscape to ensure you receive accurate, actionable information about venues seeking vending services in this New Hampshire community."
    },
    {
        "q": "Can I target specific industries in Rochester?",
        "a": "Yes! Our Rochester database allows filtering by industry type, including manufacturing & industrial, healthcare & medical centers, retail & commercial, and other sectors. This targeting helps you focus on locations that align with your vending machine offerings and business strategy in the Rochester area."
    },
    {
        "q": "What makes Rochester a good market for vending machines?",
        "a": "Rochester offers excellent vending opportunities with its manufacturing and healthcare center with growing commercial development. The city's diverse economy, steady population of ~32,000, and mix of workers and residents create consistent demand for convenient vending services."
    },
    {
        "q": "How do I get started with Rochester vending leads?",
        "a": "Simply choose your preferred plan, and you'll gain immediate access to our complete Rochester location database. You can begin contacting venues right away. Our platform provides all the details you need to connect with decision-makers at Rochester locations actively seeking vending services."
    },
    {
        "q": "Are Rochester locations exclusive to one vending operator?",
        "a": "No, our Rochester leads are available to all subscribers. However, acting quickly gives you a competitive advantage. Many successful vending operators in Rochester have secured multiple locations by being proactive and professional in their outreach to New Hampshire venues."
    },
    {
        "q": "What support is available for placing machines in Rochester?",
        "a": "Beyond our Rochester location database, we provide negotiation guides, contract templates, and industry best practices. Our resources help you successfully approach Rochester venues, present professional proposals, and establish profitable vending partnerships throughout the Rochester area and broader New Hampshire market."
    }
];

  const industries = [
    {
        "icon": "BuildingOffice2Icon",
        "name": "Manufacturing & Industrial"
    },
    {
        "icon": "AcademicCapIcon",
        "name": "Healthcare & Medical Centers"
    },
    {
        "icon": "BuildingStorefrontIcon",
        "name": "Retail & Commercial"
    },
    {
        "icon": "HeartIcon",
        "name": "Distribution & Logistics"
    },
    {
        "icon": "WrenchScrewdriverIcon",
        "name": "Professional Services"
    },
    {
        "icon": "UserGroupIcon",
        "name": "Education & Training"
    }
];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      BuildingOffice2Icon,
      AcademicCapIcon,
      BuildingStorefrontIcon,
      HeartIcon,
      WrenchScrewdriverIcon,
      UserGroupIcon
    };
    return icons[iconName] || BuildingOffice2Icon;
  };

  return (
    <>
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-warm-white border-b border-stone/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-chocolate hover:text-navy transition-colors">
              Home
            </Link>
            <span className="text-stone">/</span>
            <Link href="/vending-leads" className="text-chocolate hover:text-navy transition-colors">
              Vending Leads
            </Link>
            <span className="text-stone">/</span>
            <Link href={`/vending-leads/new-hampshire`} className="text-chocolate hover:text-navy transition-colors">
              {stateName}
            </Link>
            <span className="text-stone">/</span>
            <span className="text-navy font-medium">{cityName}</span>
          </div>
        </div>
      </div>

      <main className="min-h-screen bg-gradient-to-b from-warm-white to-stone/10">
        
        {/* Hero Section */}
        <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
                Vending Machine Locations in<br />
                <span className="text-chocolate">{cityName}, {stateAbbrev}</span>
              </h1>
              <p className="text-xl text-charcoal/80 max-w-3xl mx-auto mb-8">
                Access verified, high-traffic vending locations across {cityName}. Connect with venues actively seeking vending services.
              </p>

              {/* Active Users Counter */}
              <div className="flex items-center justify-center space-x-2 mb-8">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-coral border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-navy border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-bronze border-2 border-white"></div>
                </div>
                <p className="text-sm text-charcoal/70">
                  <span className="font-semibold text-navy">{activeUsers} operators</span> viewing leads now
                </p>
              </div>

              {/* Social Proof Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                <div className="flex items-center space-x-2">
                  <ShieldCheckIcon className="h-5 w-5 text-coral" />
                  <span className="text-sm text-charcoal/70">Verified Locations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-coral" />
                  <span className="text-sm text-charcoal/70">Updated Daily</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPinIcon className="h-5 w-5 text-coral" />
                  <span className="text-sm text-charcoal/70">{cityName} Focused</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <Link
                  href="/pricing"
                  className="inline-flex items-center px-8 py-4 bg-coral text-white font-semibold rounded-lg hover:bg-coral/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Stats */}
        <section className="py-12 bg-navy/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-navy mb-2">500+</div>
                <div className="text-charcoal/70">Verified Locations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-navy mb-2">95%</div>
                <div className="text-charcoal/70">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-navy mb-2">24/7</div>
                <div className="text-charcoal/70">Access</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
                Get instant access to {cityName}'s premium vending locations
              </p>
            </div>
            <PricingTable />
          </div>
        </section>

        {/* Business Landscape */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
                {cityName}'s Business Landscape
              </h2>
              <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
                Diverse vending opportunities across {cityName}'s thriving industries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => {
                const Icon = getIcon(industry.icon);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-stone/20"
                  >
                    <Icon className="h-8 w-8 text-coral mb-3" />
                    <h3 className="font-semibold text-navy mb-2">{industry.name}</h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Vending Course Section */}
        <VendingCourse />

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-charcoal/80">
                Everything you need to know about vending in {cityName}
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-stone/20"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-stone/5 transition-colors"
                  >
                    <span className="font-semibold text-navy pr-8">{faq.q}</span>
                    {openFaqIndex === index ? (
                      <ChevronUpIcon className="h-5 w-5 text-coral flex-shrink-0" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-coral flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-charcoal/80 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy to-navy/90">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Vending Business in {cityName}?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join successful vending operators across {stateName}. Get instant access to verified locations.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center px-8 py-4 bg-coral text-white font-semibold rounded-lg hover:bg-coral/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started Today
            </Link>
          </div>
        </section>

      </main>

      <Footer />
      <ZipCodeModalWrapper />
    </>
  );
}
