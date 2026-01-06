'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircleIcon, DocumentTextIcon, ShieldCheckIcon, ClockIcon, BuildingOffice2Icon, CurrencyDollarIcon, ArrowRightIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EinLLCCheckoutButton from '@/components/EinLLCCheckoutButton'
import { calculateTotalPrice, getStateFee, SERVICE_FEE } from '@/data/stateFilingFees'

export default function VermontEinLLCPage() {
  const stateDisplayName = 'Vermont'
    const stateSlug = 'vermont'
  const totalPrice = calculateTotalPrice(stateSlug)
  const stateFee = getStateFee(stateSlug)

  const faqItems = [
    {
      q: "How much does it cost to form an LLC in Vermont?",
      a: `The total cost to form an LLC in Vermont is $${totalPrice.toFixed(2)}, which includes the $${stateFee.toFixed(2)} state filing fee paid to the Vermont Secretary of State plus our $${SERVICE_FEE.toFixed(2)} service fee. This covers all necessary filings and documentation to properly establish your Vermont LLC.`
    },
    {
      q: "How long does it take to form an LLC in Vermont?",
      a: "The Vermont Secretary of State typically processes LLC filings within 2-3 business days for standard processing. With our expedited service, you can expect your Vermont LLC to be formed within 1-2 business days. EIN (Employer Identification Number) assignment from the IRS typically takes just a few minutes to a few hours once applied for online."
    },
    {
      q: "What information do I need to form an LLC in Vermont?",
      a: "To form your Vermont LLC, you'll need: your desired LLC name (must be unique and include 'LLC' or 'Limited Liability Company'), the name and address of your registered agent (can be a Vermont resident or registered agent service), the names and addresses of all members/managers, the principal business address, and your business purpose. We'll guide you through collecting all necessary information."
    },
    {
      q: "Do I need a registered agent for my Vermont LLC?",
      a: "Yes, Vermont requires all LLCs to maintain a registered agent with a physical street address in Vermont (not a P.O. box). The registered agent must be available during normal business hours to receive legal documents and official notices on behalf of your LLC. You can serve as your own registered agent if you have a Vermont address, or use a professional registered agent service."
    },
    {
      q: "What is an EIN and do I need one for my Vermont LLC?",
      a: "An EIN (Employer Identification Number) is a federal tax ID number issued by the IRS. While single-member LLCs can use the owner's Social Security Number, we recommend getting an EIN for your Vermont LLC for several reasons: it protects your personal SSN, allows you to open business bank accounts, hire employees, build business credit, and simplifies tax filing. Multi-member LLCs must have an EIN."
    },
    {
      q: "Can I form a Vermont LLC if I don't live in Vermont?",
      a: "Yes, you can form a Vermont LLC even if you don't live in Vermont. There are no residency requirements for LLC members or managers in Vermont. However, you will need a Vermont registered agent with a physical Vermont address. Many out-of-state business owners use professional registered agent services to meet this requirement."
    },
    {
      q: "What ongoing requirements does a Vermont LLC have?",
      a: "Vermont LLCs must file an Annual Report with the Vermont Secretary of State each year by May 1st, with a fee of $138.75. You'll also need to maintain a registered agent, keep proper business records, file federal and state tax returns, and comply with any local business licenses or permits required for your specific business type."
    },
    {
      q: "What are the tax benefits of a Vermont LLC?",
      a: "Vermont LLCs offer several tax advantages: pass-through taxation (profits and losses pass through to members' personal tax returns), no state income tax (Vermont doesn't tax personal income), flexibility in how the LLC is taxed (can elect to be taxed as a partnership, S-corp, or C-corp), and the ability to deduct business expenses. Consult with a tax professional for advice specific to your situation."
    },
    {
      q: "Can I change my Vermont LLC name after formation?",
      a: "Yes, you can change your Vermont LLC name by filing Articles of Amendment with the Vermont Secretary of State and paying a $25 fee. You'll also need to update your EIN information with the IRS, notify banks and other institutions, update business licenses and permits, and update your operating agreement if applicable. We can assist with the name change process."
    },
    {
      q: "What's the difference between a member-managed and manager-managed Vermont LLC?",
      a: "In a member-managed Vermont LLC, all members participate in daily business decisions and management. In a manager-managed LLC, members appoint one or more managers (who may or may not be members) to handle daily operations. This structure is specified in your Articles of Organization and Operating Agreement. Most single-member and small multi-member LLCs are member-managed."
    },
    {
      q: "Do I need an operating agreement for my Vermont LLC?",
      a: "While Vermont doesn't legally require an operating agreement, it's highly recommended for multi-member LLCs and beneficial even for single-member LLCs. An operating agreement establishes ownership percentages, member roles and responsibilities, profit distribution, management structure, and procedures for adding/removing members. It helps protect your limited liability status and prevents disputes."
    },
    {
      q: "What business licenses do I need for my Vermont LLC?",
      a: "Business license requirements vary based on your business type and location. You may need local business tax receipts from your city or county, professional licenses (for regulated industries like real estate, healthcare, etc.), state licenses (for specific industries), and federal licenses (for businesses like alcohol, firearms, etc.). Research requirements for your specific business type, or we can help identify what's needed."
    },
    {
      q: "Can I use my home address for my Vermont LLC?",
      a: "You can use your home address as the principal business address on your Articles of Organization, but you cannot use it as your registered agent address unless it's a physical street address in Vermont (not a P.O. box). However, using your home address makes it publicly available. Many business owners prefer using a registered agent service or commercial address for privacy."
    },
    {
      q: "What happens after I file my Vermont LLC?",
      a: "After filing, you'll receive a Certificate of Status from Vermont confirming your LLC is active. You should then: get your EIN from the IRS, open a business bank account, obtain necessary business licenses and permits, create an operating agreement, set up business accounting, obtain business insurance if needed, and begin operating your business. We'll provide a checklist of next steps after your LLC is formed."
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
              <Link href="/ein-llc" className="hover:text-navy transition-colors">
                EIN & LLC Filing
              </Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{stateDisplayName}</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="relative py-16 bg-white overflow-hidden">
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
                    File Your EIN & LLC in{' '}
                    <span className="text-navy">{stateDisplayName}</span>
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-stone mb-8 leading-relaxed"
                  >
                    Start your business the right way with our complete EIN and LLC filing service for {stateDisplayName}. We handle all the paperwork, file with the state, and get your EIN from the IRS—so you can focus on building your business.
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
                        <LockClosedIcon className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-chocolate">Secure & Fast</span>
                      </div>
                    </div>
                    <div className="bg-warm-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <DocumentTextIcon className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-medium text-chocolate">Complete Filing</span>
                      </div>
                    </div>
                    <div className="bg-warm-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <ShieldCheckIcon className="h-5 w-5 text-purple-600" />
                        <span className="text-sm font-medium text-chocolate">Expert Support</span>
                      </div>
                    </div>
                    <div className="bg-warm-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <ClockIcon className="h-5 w-5 text-coral" />
                        <span className="text-sm font-medium text-chocolate">2-3 Day Processing</span>
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
                      <span className="text-charcoal/80">Complete {stateDisplayName} LLC filing with the Secretary of State</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">EIN (Employer Identification Number) from the IRS</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">Expert guidance throughout the process</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">All state filing fees included in price</span>
                    </li>
                  </motion.ul>
                </div>

                {/* Right Column - Checkout */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <EinLLCCheckoutButton 
                    stateSlug={stateSlug}
                    stateName={stateDisplayName}
                    variant="large"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Breakdown Section */}
        <section className="py-12 bg-warm-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg border border-stone/20 p-8"
              >
                <h2 className="text-2xl font-playfair font-bold text-navy mb-6 text-center">
                  Transparent Pricing - No Hidden Fees
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-stone/20">
                    <span className="text-charcoal">Vermont State LLC Filing Fee</span>
                    <span className="font-semibold text-charcoal">${stateFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-stone/20">
                    <span className="text-charcoal">Our Service Fee (EIN + Filing Support)</span>
                    <span className="font-semibold text-charcoal">${SERVICE_FEE.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-xl font-bold text-navy">Total Cost</span>
                    <span className="text-2xl font-bold text-navy">${totalPrice.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-charcoal/70 mt-4 text-center">
                    All state fees are passed through directly—we don't mark them up. The service fee covers your EIN application, filing preparation, and ongoing support.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold text-chocolate mb-12 text-center"
              >
                How Our {stateDisplayName} EIN & LLC Filing Service Works
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-coral">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">Complete Checkout</h3>
                  <p className="text-charcoal/80">
                    Click "Get Started" and complete your secure payment. We'll immediately send you a confirmation and next steps.
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
                    <span className="text-2xl font-bold text-coral">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">Provide Information</h3>
                  <p className="text-charcoal/80">
                    We'll guide you through collecting all necessary information: LLC name, member details, registered agent, and business address.
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
                    <span className="text-2xl font-bold text-coral">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">We File Everything</h3>
                  <p className="text-charcoal/80">
                    We prepare and file your {stateDisplayName} Articles of Organization and submit your EIN application to the IRS.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-coral">4</span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">Receive Documents</h3>
                  <p className="text-charcoal/80">
                    Within 2-3 business days, you'll receive your Certificate of Status from {stateDisplayName} and your EIN from the IRS.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
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
                What's Included in Your {stateDisplayName} LLC Filing Service
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-white p-6 rounded-xl border border-stone/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DocumentTextIcon className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">Articles of Organization Filing</h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed">
                        Complete preparation and filing of your {stateDisplayName} LLC Articles of Organization with the Secretary of State. We ensure all information is accurate and compliant with state requirements.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="bg-white p-6 rounded-xl border border-stone/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BuildingOffice2Icon className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">EIN Application & Assignment</h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed">
                        Complete EIN (Employer Identification Number) application with the IRS. Your EIN is essential for opening business bank accounts, hiring employees, and filing taxes.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white p-6 rounded-xl border border-stone/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShieldCheckIcon className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">Name Availability Check</h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed">
                        We verify your desired LLC name is available in {stateDisplayName} before filing. This prevents delays and ensures your business name is unique and compliant.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-white p-6 rounded-xl border border-stone/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ClockIcon className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">Expert Support & Guidance</h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed">
                        Access to our team throughout the filing process. We answer questions, help you gather information, and ensure everything is filed correctly the first time.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-white p-6 rounded-xl border border-stone/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CurrencyDollarIcon className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">All State Fees Included</h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed">
                        The ${stateFee.toFixed(2)} {stateDisplayName} state filing fee is included in your total price. No surprises—you pay once and we handle all fees.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="bg-white p-6 rounded-xl border border-stone/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">Digital Document Delivery</h3>
                      <p className="text-charcoal/80 text-sm leading-relaxed">
                        Receive all your documents digitally: Certificate of Status from {stateDisplayName}, EIN confirmation from the IRS, and a complete filing package for your records.
                      </p>
                    </div>
                  </div>
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
                Frequently Asked Questions - Filing LLC in {stateDisplayName}
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
                    <p className="text-charcoal/80 leading-relaxed">
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
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold text-white mb-6"
              >
                Ready to Start Your {stateDisplayName} LLC?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-white/90 mb-8"
              >
                Get your EIN and LLC filed in {stateDisplayName} for just ${totalPrice.toFixed(2)}. Fast, secure, and hassle-free.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center"
              >
                <EinLLCCheckoutButton 
                  stateSlug={stateSlug}
                  stateName={stateDisplayName}
                  variant="inline"
                  className="bg-coral hover:bg-coral/90 text-white px-8 py-4 text-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {/* JSON-LD: Breadcrumbs and FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thevendinglocator.com/' },
              { '@type': 'ListItem', position: 2, name: 'EIN & LLC Filing', item: 'https://www.thevendinglocator.com/ein-llc' },
              { '@type': 'ListItem', position: 3, name: stateDisplayName, item: `https://www.thevendinglocator.com/ein-llc/${stateSlug}` }
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

