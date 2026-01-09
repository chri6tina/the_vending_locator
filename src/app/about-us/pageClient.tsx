'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { ChevronDownIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function AboutUsPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      title: 'Vending Leads (Cold Leads)',
      icon: '📍',
      description: 'Comprehensive database of verified business locations ready for you to contact and pitch your vending services.',
      details: [
        'Access to thousands of verified business locations across all 50 states',
        'Complete business information including address, phone, and business type',
        'Pre-screened locations suitable for vending machine placement',
        'Regularly updated database with fresh leads',
        'Perfect for vending operators who want to handle outreach themselves'
      ],
      whoItsFor: 'Ideal for vending machine operators who prefer to make their own sales calls, pitch their services directly, and build relationships with location owners through personal outreach.',
      link: '/vending-leads'
    },
    {
      title: 'Hot Leads (Ready-to-Go Leads)',
      icon: '🔥',
      description: 'Premium, verified leads that are actively seeking vending machine services and ready for immediate placement.',
      details: [
        'Pre-qualified businesses that have expressed interest in vending machines',
        'Decision-maker contact information included',
        'Businesses actively looking to add vending services',
        'Higher conversion rates than cold leads',
        'Ready for immediate contact and placement',
        'Reduced sales cycle time'
      ],
      whoItsFor: 'Perfect for vending operators who want the highest quality leads that are ready to move forward quickly, saving time on prospecting and cold calling.',
      link: '/hot-leads'
    },
    {
      title: 'Vending Services Directory',
      icon: '🤝',
      description: 'Connecting businesses with qualified vending machine service providers in their local area.',
      details: [
        'Extensive directory of professional vending operators nationwide',
        'Verified service providers with proven track records',
        'Location-based matching for optimal service coverage',
        'Business owners can easily find vending services in their area',
        'Vending operators get exposure to potential new locations',
        'Mutually beneficial marketplace connecting both sides'
      ],
      whoItsFor: 'Designed for both business owners seeking vending machine services for their location AND vending operators looking to expand their route. We help match businesses with eligible vendors in their specific geographic area.',
      link: '/vending-services'
    },
    {
      title: 'Tax & Bookkeeping Services',
      icon: '📊',
      description: 'The leading company for all vending machine tax preparation and bookkeeping services. We specialize exclusively in serving vending business owners.',
      details: [
        'Expert tax preparation designed specifically for vending machine businesses',
        'Comprehensive bookkeeping and financial management services',
        'Understanding of vending industry-specific deductions and regulations',
        'Tax planning and strategy for vending operators',
        'Quarterly and annual tax filing services',
        'Dedicated support from tax professionals familiar with vending businesses',
        'Available in all major cities across the United States'
      ],
      whoItsFor: 'Specifically designed for vending machine business owners who need professional tax preparation and bookkeeping services from experts who understand the unique financial aspects of the vending industry.',
      link: '/tax-services'
    },
    {
      title: 'EIN & LLC Formation Services',
      icon: '🏢',
      description: 'The premier company for all vending business legal services. Complete business formation including EIN filing and LLC registration in any state.',
      details: [
        'Fast and secure EIN (Employer Identification Number) application',
        'LLC formation service available in all 50 states',
        'Complete business formation package',
        'State filing fee plus affordable service fee',
        'Hassle-free process with expert guidance',
        'Essential for starting a legitimate vending business',
        'Protection of personal assets through proper business structure',
        'State-specific compliance and filing requirements handled'
      ],
      whoItsFor: 'Essential for anyone starting a vending machine business who needs proper business formation, EIN registration, and LLC filing to operate legally and protect their personal assets.',
      link: '/ein-llc'
    },
    {
      title: 'Haha Smart Coolers',
      icon: '❄️',
      description: 'Revolutionary grab-and-go smart vending coolers with 99% accurate vision technology. Full 24/7 support provided for all Amazon purchases.',
      details: [
        'Cutting-edge vision technology - no buttons, no broken products',
        'Simply open, grab, and go - the most seamless vending experience',
        '99% accuracy in product detection and payment processing',
        'Full cashless payment integration',
        'Remote management capabilities',
        'Affordable pricing starting at $2,999',
        '24/7 customer support for all units purchased through Amazon',
        'Perfect for modern locations seeking innovative vending solutions',
        'Refrigerated vending for drinks, snacks, and fresh food items'
      ],
      whoItsFor: 'Ideal for vending operators and business owners looking for the latest in smart vending technology. Perfect for tech-forward locations wanting to offer customers a frictionless, modern vending experience. All Haha Coolers purchased through Amazon include our comprehensive 24/7 support service.',
      link: '/haha-coolers'
    },
    {
      title: 'Vending Machine Products Guide',
      icon: '🛒',
      description: 'Comprehensive resource for selecting the best-selling vending machine products to maximize your profits.',
      details: [
        'Top-selling products guide for 2025',
        'Product recommendations by location type',
        'Profit margin analysis',
        'Seasonal product strategies',
        'Healthy vending options',
        'Trending products and consumer preferences',
        'Inventory management best practices'
      ],
      whoItsFor: 'Valuable for both new and experienced vending operators who want to optimize their product selection and increase profitability through data-driven product choices.',
      link: '/vending-machine-products'
    }
  ]

  const faqs = [
    {
      category: 'General About The Vending Locator',
      questions: [
        {
          q: 'What is The Vending Locator?',
          a: 'The Vending Locator is the comprehensive resource platform for everything related to the vending machine industry. We provide vending leads, connect businesses with service providers, offer specialized tax and legal services for vending operators, and provide cutting-edge vending solutions like Haha Smart Coolers. We serve as the complete ecosystem supporting vending entrepreneurs from startup to success.'
        },
        {
          q: 'What makes The Vending Locator different from other vending resources?',
          a: 'We are the only company that provides end-to-end services for the entire vending business lifecycle. From finding locations (cold and hot leads) to connecting with service providers, handling tax preparation, business formation, and providing innovative vending technology - we cover every aspect a vending operator needs. Plus, we specialize exclusively in the vending industry, ensuring deep expertise in every service we offer.'
        },
        {
          q: 'Do you serve all 50 states?',
          a: 'Yes! We provide services nationwide across all 50 states. Our vending leads database covers every state, our tax services are available in major cities across the country, and our EIN/LLC formation service can help you form a business in any state. Our vending services directory includes operators from coast to coast.'
        },
        {
          q: 'How long has The Vending Locator been in business?',
          a: 'We have been serving the vending community with comprehensive resources and services, building the largest database of vending leads and service providers in the industry. Our expertise in vending-specific tax, legal, and business services makes us the trusted partner for thousands of vending operators nationwide.'
        }
      ]
    },
    {
      category: 'Vending Leads (Cold Leads)',
      questions: [
        {
          q: 'What are cold leads and how do they differ from hot leads?',
          a: 'Cold leads are verified business locations that you will call yourself. These are businesses that may be suitable for vending machine placement, but they haven\'t yet expressed interest in having a vending machine. You\'ll need to make the initial contact, pitch your services, and build the relationship. Cold leads are perfect for vending operators who want control over their sales process and enjoy the challenge of converting prospects into placements.'
        },
        {
          q: 'What information is included with cold leads?',
          a: 'Our cold leads include complete business information: business name, physical address, phone number, business type, and industry classification. We verify this information regularly to ensure accuracy. The leads are pre-screened to identify businesses that typically make good vending locations based on foot traffic, employee count, and industry type.'
        },
        {
          q: 'How many cold leads do I get with each package?',
          a: 'Our packages range from 50+ locations (Basic) to 300+ locations (Gold), depending on your chosen package. All leads are verified and suitable for vending machine placement. You can purchase additional leads anytime as you expand your route.'
        },
        {
          q: 'Can I choose specific cities or areas for my cold leads?',
          a: 'Yes! When you purchase a lead package, you specify your target geographic area, and we provide verified business locations in that region. This allows you to build a focused route in your preferred service area.'
        },
        {
          q: 'How fresh are the cold leads?',
          a: 'Our database is regularly updated with fresh business information. We continuously verify and update contact details to ensure you\'re working with current, accurate data. Leads are checked for accuracy before being included in your package.'
        }
      ]
    },
    {
      category: 'Hot Leads (Ready-to-Go Leads)',
      questions: [
        {
          q: 'What are hot leads and why are they different?',
          a: 'Hot leads are premium, verified leads where businesses have already expressed interest in having vending machines. These are ready-to-go opportunities - the businesses are actively seeking vending services, decision-maker contacts are included, and the sales cycle is significantly shorter. Unlike cold leads where you make the first contact, hot leads are businesses that are already in the market for vending solutions.'
        },
        {
          q: 'How much better is the conversion rate with hot leads?',
          a: 'Hot leads typically have significantly higher conversion rates because the business owner has already indicated interest. While conversion rates vary, hot leads can convert 3-5x more often than cold leads since you\'re not starting from a cold pitch. The business is already primed and ready to move forward.'
        },
        {
          q: 'What makes a lead "hot"?',
          a: 'Hot leads are businesses that have actively expressed interest in adding vending services to their location. This could be through inquiries, requests for proposals, or other indicators that they\'re in the market for vending machines. We verify this interest before including businesses in our hot leads database.'
        },
        {
          q: 'Do hot leads include decision-maker contact information?',
          a: 'Yes! Hot leads include verified decision-maker contact information, saving you time on research and increasing your chances of making a direct connection with the right person who can approve vending machine placement.'
        },
        {
          q: 'How quickly can I expect results from hot leads?',
          a: 'Hot leads move much faster through the sales cycle. Since businesses are already interested, you can often secure placements within days or weeks rather than the months it might take with cold leads. This makes hot leads ideal for operators looking to grow their route quickly.'
        }
      ]
    },
    {
      category: 'Vending Services Directory',
      questions: [
        {
          q: 'How does the Vending Services Directory work?',
          a: 'Our Vending Services Directory is a two-way marketplace. Business owners can search for qualified vending operators in their area who can provide vending services. Vending operators are listed with their service areas and contact information. We help match businesses with eligible vendors based on geographic location, ensuring both parties can connect easily.'
        },
        {
          q: 'How do you match businesses with vendors?',
          a: 'We match based on geographic location and service area. Business owners searching for vending services in their city or region will see qualified vending operators who service that area. This geographic matching ensures efficient connections and reduces the hassle of finding the right vendor.'
        },
        {
          q: 'Do vending operators pay to be listed?',
          a: 'Vending operators can be listed in our comprehensive directory, which provides exposure to businesses actively seeking vending services. This creates a valuable opportunity for operators to connect with new potential locations in their service area.'
        },
        {
          q: 'How do businesses find vendors through your directory?',
          a: 'Business owners can search our directory by city, state, or zip code to find vending operators serving their area. Each listing includes contact information and service details, making it easy for businesses to reach out directly to qualified vendors.'
        },
        {
          q: 'What qualifies a vendor for the directory?',
          a: 'We verify that vendors are legitimate vending operators with proven track records. This ensures businesses connect with professional, reliable service providers who can deliver quality vending services.'
        },
        {
          q: 'Is the directory available nationwide?',
          a: 'Yes! Our directory includes vending service providers from all 50 states, making it easy for businesses anywhere in the country to find qualified vendors in their local area.'
        }
      ]
    },
    {
      category: 'Tax & Bookkeeping Services',
      questions: [
        {
          q: 'Are you THE company for vending machine tax services?',
          a: 'Yes! The Vending Locator is the leading and premier company for all vending machine tax preparation and bookkeeping services. We specialize exclusively in serving vending business owners, providing expert tax preparation, bookkeeping, and financial management services tailored specifically to the vending industry. Our tax professionals understand the unique financial aspects of vending businesses.'
        },
        {
          q: 'What tax services do you provide for vending operators?',
          a: 'We provide comprehensive tax preparation specifically designed for vending machine businesses, including annual tax filing, quarterly tax preparation, bookkeeping services, financial management, tax planning and strategy, and guidance on vending-specific deductions and regulations. Our services are available in major cities across the United States.'
        },
        {
          q: 'Why do I need specialized tax services for my vending business?',
          a: 'Vending businesses have unique tax considerations including route expenses, machine depreciation, inventory management, location commissions, and industry-specific deductions. Working with tax professionals who specialize in vending ensures you maximize legitimate deductions and remain compliant with all tax regulations.'
        },
        {
          q: 'Do you understand vending-specific tax deductions?',
          a: 'Absolutely! Our tax professionals specialize in vending businesses and understand all vending-specific deductions including vehicle expenses for route service, machine maintenance and repairs, product inventory costs, location commission payments, equipment depreciation, and other route-related expenses. We ensure you take advantage of every legitimate deduction.'
        },
        {
          q: 'Are your tax services available in my city?',
          a: 'We provide tax and bookkeeping services in major cities across all 50 states. Our network of vending-specialized tax professionals ensures you can access expert services regardless of your location. Check our tax services directory to find services in your specific city.'
        },
        {
          q: 'What documents do I need for vending tax preparation?',
          a: 'You\'ll need records of all route expenses, machine purchases and maintenance, inventory purchases, location commission payments, vehicle expenses, business registration documents, and any other financial records related to your vending operations. Our tax professionals will provide a complete checklist when you begin services.'
        },
        {
          q: 'Can you help with quarterly tax estimates?',
          a: 'Yes! We provide quarterly tax planning and preparation services to help you stay current with tax obligations throughout the year, avoiding penalties and managing cash flow more effectively.'
        }
      ]
    },
    {
      category: 'EIN & LLC Formation Services',
      questions: [
        {
          q: 'Are you THE company for vending business legal services?',
          a: 'Yes! The Vending Locator is the premier company for all vending business legal services, including EIN filing and LLC formation. We provide complete business formation services specifically for vending entrepreneurs, ensuring proper legal structure from day one.'
        },
        {
          q: 'Why do I need an EIN and LLC for my vending business?',
          a: 'An EIN (Employer Identification Number) is required for tax purposes and opening business bank accounts. An LLC (Limited Liability Company) protects your personal assets from business liabilities, provides credibility with location owners, and is often required by businesses before they\'ll allow vending machine placement. Proper business formation is essential for operating a legitimate, protected vending business.'
        },
        {
          q: 'Can you file my LLC in any state?',
          a: 'Yes! Our EIN and LLC formation service is available for all 50 states. Whether you want to form your LLC in your home state or choose a business-friendly state like Delaware or Wyoming, we can handle the filing in any state you prefer.'
        },
        {
          q: 'How long does the EIN and LLC process take?',
          a: 'EIN applications are typically processed immediately or within a few business days. LLC formation varies by state but generally takes 1-3 weeks after filing. We expedite the process and handle all paperwork to make it as fast and hassle-free as possible.'
        },
        {
          q: 'What does the service fee include?',
          a: 'Our service includes complete handling of all paperwork, filing with the appropriate state and federal agencies, expert guidance throughout the process, verification of filing completion, and support for any questions during the process. You pay the state filing fee (which varies by state) plus our affordable $50 service fee.'
        },
        {
          q: 'Is this necessary before I start placing machines?',
          a: 'Yes, it\'s highly recommended. Most legitimate businesses require proof of business registration before allowing vending machine placement. Having an LLC and EIN demonstrates professionalism, protects your personal assets, and enables you to operate as a proper business entity. It\'s best to establish your legal structure before securing locations.'
        },
        {
          q: 'Can I use my personal information or do I need business formation?',
          a: 'While you can technically operate as a sole proprietor using your Social Security Number, forming an LLC protects your personal assets (home, car, savings) if your business faces legal issues. Additionally, many location owners prefer working with registered businesses. We strongly recommend proper business formation for all serious vending operators.'
        }
      ]
    },
    {
      category: 'Haha Smart Coolers',
      questions: [
        {
          q: 'What makes Haha Smart Coolers different from traditional vending machines?',
          a: 'Haha Smart Coolers use revolutionary 99% accurate vision technology - there are no buttons to push, no product codes to enter. Customers simply open the door, grab what they want, and walk away. The system automatically detects what was taken and processes payment seamlessly. It\'s the most frictionless vending experience available.'
        },
        {
          q: 'How does the vision technology work?',
          a: 'Advanced computer vision cameras track what products customers remove from the cooler. The system identifies each item automatically and charges accordingly. With 99% accuracy, you rarely have issues with incorrect charges or inventory discrepancies.'
        },
        {
          q: 'Do Haha Coolers accept cash?',
          a: 'Haha Smart Coolers are designed for cashless payments including credit cards, debit cards, and mobile payment options like Apple Pay and Google Pay. This reduces theft, simplifies transactions, and appeals to modern consumers who prefer cashless options.'
        },
        {
          q: 'What kind of support do you provide for Haha Coolers?',
          a: 'For all Haha Smart Coolers purchased through Amazon, we provide comprehensive 24/7 support. This includes technical assistance, troubleshooting help, software updates, maintenance guidance, and any questions about operation or features. Our dedicated support team is available around the clock to ensure your coolers operate smoothly.'
        },
        {
          q: 'How much do Haha Smart Coolers cost?',
          a: 'Haha Smart Coolers start at $2,999, making them an affordable option for modern smart vending. Considering the advanced technology, cashless payment integration, and remote management capabilities, they offer excellent value compared to traditional vending machines.'
        },
        {
          q: 'Can I manage Haha Coolers remotely?',
          a: 'Yes! Haha Smart Coolers include remote management capabilities, allowing you to monitor sales, inventory levels, and performance from anywhere. This helps you optimize restocking schedules and track performance without visiting each location daily.'
        },
        {
          q: 'What products work best in Haha Smart Coolers?',
          a: 'Haha Coolers are refrigerated units perfect for drinks, fresh snacks, sandwiches, salads, yogurt, and other perishable items. The grab-and-go format works especially well in office buildings, gyms, hotels, and other locations where customers want quick, convenient access to fresh food and beverages.'
        },
        {
          q: 'Do I need special training to operate Haha Coolers?',
          a: 'Haha Coolers are designed to be user-friendly for both operators and customers. Our 24/7 support team provides guidance on setup, operation, and optimization. The remote management system makes it easy to monitor and maintain your units.'
        },
        {
          q: 'Where should I place Haha Smart Coolers?',
          a: 'Haha Coolers excel in high-traffic locations like modern office buildings, co-working spaces, gyms, hotels, hospitals, universities, and tech companies. Any location with tech-savvy customers who appreciate convenience and innovation will benefit from Haha Smart Coolers.'
        },
        {
          q: 'How do I purchase Haha Coolers?',
          a: 'Haha Smart Coolers are available through Amazon. When you purchase through Amazon, you automatically receive our comprehensive 24/7 support service, ensuring you have ongoing assistance with your smart vending investment.'
        }
      ]
    },
    {
      category: 'Getting Started & Support',
      questions: [
        {
          q: 'I\'m new to vending - where should I start?',
          a: 'Welcome to the vending industry! We recommend starting with proper business formation (EIN and LLC), then purchasing a lead package (either cold leads to learn the sales process or hot leads for faster initial placements), and selecting products based on our vending products guide. Our resources guide you through every step of starting your vending business.'
        },
        {
          q: 'What services do I need as a new vending operator?',
          a: 'New operators typically need: 1) Business formation (EIN/LLC) to operate legally, 2) A lead package to find locations, 3) Understanding of product selection (our products guide helps), and 4) Tax services to handle business finances properly. As you grow, you may add more leads, consider smart vending solutions like Haha Coolers, and leverage our services directory to expand.'
        },
        {
          q: 'Do you provide ongoing support after purchase?',
          a: 'Yes! We provide comprehensive support across all our services. Hot leads and cold leads come with purchase, our tax services include ongoing support, EIN/LLC services include filing assistance, and Haha Coolers purchased through Amazon include 24/7 support. We\'re here to help your vending business succeed.'
        },
        {
          q: 'Can I combine multiple services?',
          a: 'Absolutely! Many vending operators use multiple services. For example, you might start with EIN/LLC formation, purchase leads to build your route, use our tax services for financial management, and eventually add Haha Smart Coolers to modernize your offerings. Our services are designed to work together as a complete ecosystem.'
        },
        {
          q: 'How do I contact support?',
          a: 'You can reach our support team through our contact page. We provide support for all services including lead questions, tax service inquiries, business formation assistance, and Haha Cooler technical support (24/7 for Amazon purchases).'
        },
        {
          q: 'Do you offer resources or guides for vending operators?',
          a: 'Yes! We provide comprehensive guides including our Vending Machine Products guide with top-selling product recommendations, location selection strategies, and industry best practices. Our blog and resource sections offer valuable insights for both new and experienced operators.'
        }
      ]
    }
  ]

  // Flatten FAQs for easier rendering
  const allFaqs = faqs.flatMap(category => 
    category.questions.map((faq, index) => ({
      ...faq,
      category: category.category,
      globalIndex: faqs.slice(0, faqs.indexOf(category)).reduce((acc, cat) => acc + cat.questions.length, 0) + index
    }))
  )

  return (
    <main className="min-h-screen bg-warm-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-warm-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-playfair font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl"
            >
              About The Vending Locator
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-stone sm:text-xl"
            >
              Your complete resource for everything vending. From finding locations to handling taxes, forming your business, and accessing cutting-edge vending technology - we support vending entrepreneurs at every stage.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-stone leading-relaxed mb-6">
                The Vending Locator exists to empower vending machine entrepreneurs with the tools, resources, and services they need to build successful, profitable businesses. We understand that starting and growing a vending business requires more than just machines - it requires leads, legal structure, financial management, and innovative solutions.
              </p>
              <p className="text-lg text-stone leading-relaxed mb-6">
                That's why we've built the most comprehensive platform in the vending industry, offering everything from location leads to tax services, business formation to smart vending technology. Each service serves different purposes for different stages of your business journey, and we're here to support you every step of the way.
              </p>
              <p className="text-lg text-stone leading-relaxed">
                Whether you're a complete beginner exploring vending opportunities or an experienced operator looking to scale, The Vending Locator provides the resources and expertise you need to succeed in this exciting industry.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold text-charcoal sm:text-4xl mb-4">
              Our Complete Suite of Services
            </h2>
            <p className="text-lg text-stone">
              Each service is designed to address specific needs at different stages of your vending business journey. Here's what we offer:
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-playfair font-bold text-charcoal mb-2">
                      {service.title}
                    </h3>
                    <p className="text-stone leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-charcoal mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-stone">
                        <CheckCircleIcon className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 p-4 bg-warm-white rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Who It's For:</h4>
                  <p className="text-stone text-sm leading-relaxed">
                    {service.whoItsFor}
                  </p>
                </div>

                <Link
                  href={service.link}
                  className="inline-block btn-primary mt-4"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Differentiators */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold text-charcoal sm:text-4xl mb-4">
              Why Choose The Vending Locator?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-warm-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Vending Industry Experts</h3>
              <p className="text-stone">
                We specialize exclusively in the vending industry. Our tax professionals understand vending businesses, our leads are vending-specific, and our services are designed for vending operators.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-warm-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Nationwide Coverage</h3>
              <p className="text-stone">
                Services available across all 50 states. Whether you need leads in California, tax services in Texas, or business formation in any state, we've got you covered.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-warm-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Complete Ecosystem</h3>
              <p className="text-stone">
                From startup (EIN/LLC) to growth (leads) to operations (tax services) to innovation (Haha Coolers) - we provide everything you need in one comprehensive platform.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="bg-warm-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold text-charcoal sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-stone">
              Everything you need to know about our services and how they can help your vending business.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((category, categoryIndex) => (
              <div key={category.category} className="mb-8">
                <h3 className="text-xl font-semibold text-charcoal mb-4 pb-2 border-b border-gray-300">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = faqs.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.questions.length, 0) + faqIndex
                    return (
                      <div
                        key={globalIndex}
                        className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFaq(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-warm-white transition-colors"
                        >
                          <span className="font-semibold text-charcoal pr-4">
                            {faq.q}
                          </span>
                          <ChevronDownIcon
                            className={`h-5 w-5 text-coral flex-shrink-0 transition-transform ${
                              openFaq === globalIndex ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {openFaq === globalIndex && (
                          <div className="px-6 py-4 border-t border-gray-200 bg-warm-white">
                            <p className="text-stone leading-relaxed whitespace-pre-line">
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-navy to-navy-light py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-playfair font-bold text-white sm:text-4xl mb-4">
              Ready to Grow Your Vending Business?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Whether you're just starting or looking to expand, we have the services and resources to support your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-semibold hover:bg-warm-white transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-coral text-white px-8 py-3 rounded-lg font-semibold hover:bg-coral/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

