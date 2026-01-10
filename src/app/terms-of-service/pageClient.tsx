'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import Link from 'next/link'

export default function TermsOfServicePage() {
  return (
    <>
      <ZipCodeModalWrapper />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        
        {/* Breadcrumbs */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 py-3 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">Terms of Service</span>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8 text-center">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div className="space-y-8">
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to The Vending Locator. These Terms of Service ("Terms") govern your use of our website and services. 
                    By accessing or using our services, you agree to be bound by these Terms.
                  </p>
                </section>

                {/* Service Description */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Vending Locator provides the following services:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">A. Vending Location Leads Packages</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>Basic ($19):</strong> 50+ qualified locations with basic lead details</li>
                      <li><strong>Pro ($29):</strong> 100+ qualified locations with enhanced details and phone numbers</li>
                      <li><strong>Start ($129):</strong> 200+ qualified locations with comprehensive resources</li>
                      <li><strong>Gold ($899):</strong> 300+ qualified locations with full business setup support</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">B. Guaranteed Location Placement Service</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>Quick Find Package ($500):</strong> 1 guaranteed location with basic support</li>
                      <li><strong>Smart Spot Package ($1,000):</strong> 1 guaranteed location with premium support</li>
                      <li><strong>Prime Location Package ($1,500):</strong> 1 guaranteed location with account management</li>
                      <li><strong>Elite Placement Package ($2,000):</strong> 1 guaranteed location with VIP support</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">C. Hot Leads Premium Subscription</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Monthly Subscription ($20/month):</strong> A recurring monthly subscription service that provides subscribers with first access to premium vending machine location leads before they are made available to the general public.
                    </p>
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mt-4">
                      <p className="text-amber-800 font-medium mb-2">Important Subscription Terms:</p>
                      <ul className="list-disc list-inside space-y-1 text-amber-800 text-sm">
                        <li><strong>Variable Content Availability:</strong> The number and availability of leads may vary from month to month. Some months may have no leads available.</li>
                        <li><strong>No Guarantee of Leads:</strong> We do not guarantee a minimum number of leads per month or that leads will be available in your specific geographic area.</li>
                        <li><strong>First Access Priority:</strong> Subscribers receive notification and first access to leads when they become available, but availability is subject to market conditions and lead generation.</li>
                        <li><strong>Subscription Benefits:</strong> Subscribers receive exclusive pricing on available leads and priority notification when new leads match their preferences.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Service Delivery */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Service Delivery & Timeline</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Vending Location Leads Packages</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Delivery times vary by package: Basic (5 days), Pro/Start/Gold (3 days). 
                        These are digital packages providing immediate access to qualified vending machine locations.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Guaranteed Location Placement Service</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Due to the scope of our expert team's outreach work, delivery takes 1-6 months. 
                        This service involves our team personally researching and securing guaranteed locations for your vending machines.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Customer Responsibilities */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Customer Responsibilities</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Vending Location Leads Packages</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Customers are responsible for contacting the provided leads directly. Our packages include outreach guidance, 
                        scripts, and templates to assist with professional business communication.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Guaranteed Location Placement Service</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our expert team handles all outreach and location research. Customers receive guaranteed placement 
                        without needing to contact businesses themselves.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Refund Policy */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refund Policy & Subscription Cancellation</h2>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4">
                    <p className="text-amber-800 font-medium">No Refunds Policy for One-Time Purchases</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Due to the digital nature of our services and the significant time investment in research and preparation, 
                    we do not offer refunds for one-time lead packages or placement services. This policy applies to all packages and services.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                    <p className="text-blue-800 font-medium mb-2">Subscription Cancellation Policy</p>
                    <p className="text-blue-800 text-sm mb-2">
                      <strong>Hot Leads Premium Subscription:</strong> You may cancel your subscription at any time through your account settings or by contacting our support team. 
                      Cancellation will take effect at the end of your current billing period. You will continue to have access to subscriber benefits until the end of the paid period.
                    </p>
                    <p className="text-blue-800 text-sm">
                      <strong>No Refunds for Past Months:</strong> We do not provide refunds for months where no leads were available or for any portion of a billing period. 
                      Your subscription payment covers access to the subscriber platform and first-access notifications, regardless of lead availability in any given month.
                    </p>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    We are committed to providing quality leads and services. If you have concerns about your purchase or subscription, 
                    please contact our support team for assistance.
                  </p>
                </section>

                {/* Data Usage */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Usage & Privacy</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We collect and process customer information solely for the purpose of providing our services. 
                    Your personal information is protected and will not be shared with third parties without your consent.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Lead data provided in our packages is for your business use only and may not be resold or redistributed.
                  </p>
                </section>

                {/* Limitation of Liability */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Vending Locator provides qualified leads and business resources. We cannot guarantee the success 
                    of individual vending machine placements, as this depends on various factors including market conditions, 
                    customer negotiations, and business decisions.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our liability is limited to the amount paid for the specific service purchased. We are not responsible 
                    for any indirect, incidental, or consequential damages.
                  </p>
                </section>

                {/* Service Guarantees */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Guarantees</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Vending Location Leads Packages</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We guarantee the accuracy of our lead information at the time of delivery. 
                        If a location becomes unavailable, we provide replacement leads when possible.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Guaranteed Location Placement Service</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We guarantee that our expert team will secure a qualified location for your vending machine 
                        within the specified 1-6 month timeline.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For questions about these Terms of Service or our services, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700">
                      <strong>The Vending Locator</strong><br />
                      Email: <Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact Form</Link><br />
                      Website: <Link href="/" className="text-blue-600 hover:text-blue-800">www.thevendinglocator.com</Link>
                    </p>
                  </div>
                </section>

                {/* Updates to Terms */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Updates to Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to update these Terms of Service at any time. Changes will be effective 
                    immediately upon posting on our website. Continued use of our services constitutes acceptance of updated terms.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
