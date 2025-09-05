'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function VendingMachineProductsPage() {
  const [activeTab, setActiveTab] = useState('drinks')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const productData = {
    drinks: {
      title: 'Top-Selling Drinks',
      subtitle: 'Beverages that drive the highest sales and profit margins',
      categories: [
        {
          name: 'Soft Drinks & Sodas',
          products: [
            { name: 'Coca-Cola Classic', profitMargin: '65-75%', popularity: '95%', priceRange: '$1.50-$2.50' },
            { name: 'Pepsi Cola', profitMargin: '65-75%', popularity: '90%', priceRange: '$1.50-$2.50' },
            { name: 'Sprite', profitMargin: '65-75%', popularity: '85%', priceRange: '$1.50-$2.50' },
            { name: 'Mountain Dew', profitMargin: '65-75%', popularity: '80%', priceRange: '$1.50-$2.50' },
            { name: 'Dr. Pepper', profitMargin: '65-75%', popularity: '75%', priceRange: '$1.50-$2.50' }
          ]
        },
        {
          name: 'Energy Drinks',
          products: [
            { name: 'Red Bull', profitMargin: '70-80%', popularity: '90%', priceRange: '$2.50-$3.50' },
            { name: 'Monster Energy', profitMargin: '70-80%', popularity: '85%', priceRange: '$2.50-$3.50' },
            { name: 'Rockstar', profitMargin: '70-80%', popularity: '70%', priceRange: '$2.50-$3.50' },
            { name: 'Bang Energy', profitMargin: '70-80%', popularity: '65%', priceRange: '$2.50-$3.50' },
            { name: 'C4 Energy', profitMargin: '70-80%', popularity: '60%', priceRange: '$2.50-$3.50' }
          ]
        },
        {
          name: 'Water & Hydration',
          products: [
            { name: 'Smartwater', profitMargin: '80-90%', popularity: '85%', priceRange: '$1.75-$2.75' },
            { name: 'Dasani', profitMargin: '80-90%', popularity: '90%', priceRange: '$1.50-$2.50' },
            { name: 'Aquafina', profitMargin: '80-90%', popularity: '85%', priceRange: '$1.50-$2.50' },
            { name: 'Vitamin Water', profitMargin: '75-85%', popularity: '70%', priceRange: '$2.00-$3.00' },
            { name: 'BodyArmor', profitMargin: '75-85%', popularity: '65%', priceRange: '$2.25-$3.25' }
          ]
        },
        {
          name: 'Coffee & Tea',
          products: [
            { name: 'Starbucks Coffee', profitMargin: '70-80%', popularity: '85%', priceRange: '$2.50-$3.50' },
            { name: 'Arizona Iced Tea', profitMargin: '75-85%', popularity: '80%', priceRange: '$1.75-$2.75' },
            { name: 'Snapple', profitMargin: '70-80%', popularity: '75%', priceRange: '$2.00-$3.00' },
            { name: 'Lipton Iced Tea', profitMargin: '75-85%', popularity: '70%', priceRange: '$1.75-$2.75' },
            { name: 'Honest Tea', profitMargin: '70-80%', popularity: '60%', priceRange: '$2.25-$3.25' }
          ]
        },
        {
          name: 'Sports & Functional Drinks',
          products: [
            { name: 'Gatorade', profitMargin: '70-80%', popularity: '90%', priceRange: '$2.00-$3.00' },
            { name: 'Powerade', profitMargin: '70-80%', popularity: '80%', priceRange: '$2.00-$3.00' },
            { name: 'Coconut Water', profitMargin: '75-85%', popularity: '65%', priceRange: '$2.50-$3.50' },
            { name: 'Protein Shakes', profitMargin: '60-70%', popularity: '55%', priceRange: '$3.00-$4.00' },
            { name: 'Kombucha', profitMargin: '65-75%', popularity: '50%', priceRange: '$3.50-$4.50' }
          ]
        }
      ]
    },
    snacks: {
      title: 'Top-Selling Snacks',
      subtitle: 'Snack products that generate consistent sales across all locations',
      categories: [
        {
          name: 'Chips & Salty Snacks',
          products: [
            { name: 'Lay\'s Classic', profitMargin: '60-70%', popularity: '95%', priceRange: '$1.25-$2.25' },
            { name: 'Doritos Nacho Cheese', profitMargin: '60-70%', popularity: '90%', priceRange: '$1.50-$2.50' },
            { name: 'Cheetos', profitMargin: '60-70%', popularity: '85%', priceRange: '$1.25-$2.25' },
            { name: 'Fritos', profitMargin: '60-70%', popularity: '80%', priceRange: '$1.25-$2.25' },
            { name: 'Pringles', profitMargin: '65-75%', popularity: '75%', priceRange: '$1.75-$2.75' }
          ]
        },
        {
          name: 'Candy & Sweet Treats',
          products: [
            { name: 'Snickers', profitMargin: '70-80%', popularity: '90%', priceRange: '$1.50-$2.50' },
            { name: 'M&M\'s', profitMargin: '70-80%', popularity: '85%', priceRange: '$1.50-$2.50' },
            { name: 'Kit Kat', profitMargin: '70-80%', popularity: '85%', priceRange: '$1.50-$2.50' },
            { name: 'Twix', profitMargin: '70-80%', popularity: '80%', priceRange: '$1.50-$2.50' },
            { name: 'Reese\'s', profitMargin: '70-80%', popularity: '80%', priceRange: '$1.50-$2.50' }
          ]
        },
        {
          name: 'Healthy & Better-for-You',
          products: [
            { name: 'Kind Bars', profitMargin: '50-60%', popularity: '70%', priceRange: '$2.00-$3.00' },
            { name: 'Clif Bars', profitMargin: '50-60%', popularity: '65%', priceRange: '$2.25-$3.25' },
            { name: 'RXBAR', profitMargin: '45-55%', popularity: '60%', priceRange: '$2.50-$3.50' },
            { name: 'Popcorn (SkinnyPop)', profitMargin: '65-75%', popularity: '75%', priceRange: '$1.75-$2.75' },
            { name: 'Nuts & Trail Mix', profitMargin: '60-70%', popularity: '70%', priceRange: '$2.00-$3.00' }
          ]
        },
        {
          name: 'Gum & Mints',
          products: [
            { name: 'Trident Gum', profitMargin: '80-90%', popularity: '85%', priceRange: '$1.00-$2.00' },
            { name: 'Extra Gum', profitMargin: '80-90%', popularity: '80%', priceRange: '$1.00-$2.00' },
            { name: 'Tic Tacs', profitMargin: '85-95%', popularity: '90%', priceRange: '$1.25-$2.25' },
            { name: 'Altoids', profitMargin: '80-90%', popularity: '70%', priceRange: '$1.50-$2.50' },
            { name: 'Ice Breakers', profitMargin: '80-90%', popularity: '75%', priceRange: '$1.25-$2.25' }
          ]
        },
        {
          name: 'Convenience Items',
          products: [
            { name: 'Granola Bars', profitMargin: '60-70%', popularity: '80%', priceRange: '$1.50-$2.50' },
            { name: 'Crackers (Goldfish)', profitMargin: '65-75%', popularity: '75%', priceRange: '$1.25-$2.25' },
            { name: 'Pretzels', profitMargin: '65-75%', popularity: '70%', priceRange: '$1.25-$2.25' },
            { name: 'Jerky', profitMargin: '55-65%', popularity: '60%', priceRange: '$2.50-$3.50' },
            { name: 'Dried Fruit', profitMargin: '60-70%', popularity: '55%', priceRange: '$2.00-$3.00' }
          ]
        }
      ]
    }
  }

  const locationRecommendations = [
    {
      location: 'Office Buildings',
      drinks: ['Coffee drinks', 'Energy drinks', 'Water', 'Diet sodas'],
      snacks: ['Healthy bars', 'Nuts', 'Gum', 'Low-calorie snacks'],
      tips: 'Focus on productivity-boosting items and healthy options for health-conscious professionals.'
    },
    {
      location: 'Schools & Universities',
      drinks: ['Water', 'Sports drinks', 'Juice', 'Milk'],
      snacks: ['Granola bars', 'Nuts', 'Dried fruit', 'Whole grain snacks'],
      tips: 'Comply with nutrition guidelines and focus on healthier options that meet school standards.'
    },
    {
      location: 'Gyms & Fitness Centers',
      drinks: ['Protein drinks', 'Water', 'Sports drinks', 'Coconut water'],
      snacks: ['Protein bars', 'Nuts', 'Jerky', 'Healthy snacks'],
      tips: 'Emphasize protein-rich and recovery-focused products for fitness enthusiasts.'
    },
    {
      location: 'Hospitals & Healthcare',
      drinks: ['Water', 'Coffee', 'Tea', 'Energy drinks'],
      snacks: ['Healthy bars', 'Nuts', 'Gum', 'Low-sugar options'],
      tips: 'Focus on items that support long shifts and provide quick energy for healthcare workers.'
    },
    {
      location: 'Manufacturing & Warehouses',
      drinks: ['Energy drinks', 'Coffee', 'Water', 'Sports drinks'],
      snacks: ['High-calorie bars', 'Nuts', 'Jerky', 'Satisfying snacks'],
      tips: 'Provide energy-dense options for physically demanding work environments.'
    }
  ]

  const seasonalProducts = [
    {
      season: 'Spring',
      drinks: ['Iced coffee', 'Flavored water', 'Green tea', 'Light sodas'],
      snacks: ['Light snacks', 'Fruit bars', 'Trail mix', 'Nuts'],
      trends: 'Focus on lighter, refreshing options as people become more health-conscious.'
    },
    {
      season: 'Summer',
      drinks: ['Cold water', 'Sports drinks', 'Iced tea', 'Frozen treats'],
      snacks: ['Frozen snacks', 'Light chips', 'Fruit snacks', 'Cold items'],
      trends: 'Emphasize hydration and cooling products for hot weather.'
    },
    {
      season: 'Fall',
      drinks: ['Hot coffee', 'Warm tea', 'Apple cider', 'Seasonal flavors'],
      snacks: ['Nuts', 'Trail mix', 'Seasonal candy', 'Comfort snacks'],
      trends: 'Introduce warming and seasonal comfort products.'
    },
    {
      season: 'Winter',
      drinks: ['Hot beverages', 'Warm coffee', 'Hot chocolate', 'Seasonal drinks'],
      snacks: ['Comfort snacks', 'Chocolate', 'Nuts', 'Hearty bars'],
      trends: 'Focus on warming, comforting products for cold weather.'
    }
  ]

  const faqs = [
    {
      question: 'How do I determine which products to stock in my vending machines?',
      answer: 'Start with the top-selling products in each category, then track sales data to identify what works best in your specific locations. Consider your customer demographics, location type, and seasonal trends when making product selections.'
    },
    {
      question: 'What profit margins should I expect from vending machine products?',
      answer: 'Profit margins vary by product type: drinks typically yield 65-90%, snacks 60-80%, and gum/mints 80-95%. Higher-margin items like water and gum can help offset lower-margin healthy options.'
    },
    {
      question: 'How often should I rotate products in my vending machines?',
      answer: 'Rotate products monthly based on sales data. Remove slow-moving items and introduce new products seasonally. Keep 70% consistent best-sellers and 30% rotating items to maintain customer interest.'
    },
    {
      question: 'Should I stock healthy products even if they have lower profit margins?',
      answer: 'Yes, healthy products are increasingly important for location approval and customer satisfaction. Balance high-margin traditional items with healthy options to meet modern consumer demands and location requirements.'
    },
    {
      question: 'How do I price products for maximum profitability?',
      answer: 'Price products based on your cost plus desired margin (typically 2-3x cost), local market rates, and customer demographics. Test different price points and monitor sales volume to find the optimal balance.'
    },
    {
      question: 'What are the best products for high-traffic locations?',
      answer: 'High-traffic locations perform best with popular brands, quick-consumption items, and a mix of price points. Focus on top-selling drinks and snacks, plus some premium options for higher-spending customers.'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-warm-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 to-blue-50 border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }} 
                className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-charcoal"
              >
                Top-Selling Vending Machine Products 2025
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.1 }} 
                className="mt-4 text-lg text-stone max-w-3xl mx-auto"
              >
                Discover the most profitable drinks and snacks that drive sales across offices, schools, gyms, and more. 
                Complete with profit margins, popularity ratings, and location-specific recommendations.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Starter Kit Section */}
        <section className="py-16 bg-gradient-to-r from-teal-50 to-blue-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Vending Machine Starter Kit
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                The essential products every new vending machine operator should stock to maximize sales and minimize risk
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Drinks Starter Kit */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">🥤</span>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-charcoal">Drinks Starter Kit</h3>
                </div>
                <p className="text-stone mb-4">Essential beverages for any vending machine location</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-charcoal">Coca-Cola Classic</span>
                    <span className="text-sm text-navy font-medium">Must-have</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-charcoal">Water (Dasani/Smartwater)</span>
                    <span className="text-sm text-navy font-medium">High margin</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-charcoal">Red Bull</span>
                    <span className="text-sm text-navy font-medium">Premium</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-charcoal">Gatorade</span>
                    <span className="text-sm text-navy font-medium">Athletic</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-charcoal">Coffee (Starbucks)</span>
                    <span className="text-sm text-navy font-medium">Office favorite</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Pro Tip:</strong> Start with 5 core drinks, then add 2-3 seasonal items based on location type.
                  </p>
                </div>
              </motion.div>

              {/* Snacks Starter Kit */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-bold">🍿</span>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-charcoal">Snacks Starter Kit</h3>
                </div>
                <p className="text-stone mb-4">Proven snack performers across all locations</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-charcoal">Lay's Classic Chips</span>
                    <span className="text-sm text-navy font-medium">Universal hit</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-charcoal">Snickers</span>
                    <span className="text-sm text-navy font-medium">Top candy</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-charcoal">Trident Gum</span>
                    <span className="text-sm text-navy font-medium">High margin</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-charcoal">Kind Bars</span>
                    <span className="text-sm text-navy font-medium">Healthy option</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-charcoal">Granola Bars</span>
                    <span className="text-sm text-navy font-medium">Convenience</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Pro Tip:</strong> Mix 70% proven sellers with 30% new items to test customer preferences.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Starter Kit Guidelines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-lg font-playfair font-bold text-charcoal mb-4">Starter Kit Guidelines</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">For New Operators</h4>
                  <ul className="text-sm text-stone space-y-1">
                    <li>• Start with 8-12 products total</li>
                    <li>• Focus on well-known brands</li>
                    <li>• Keep 2-3 price points</li>
                    <li>• Track sales for 30 days</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Inventory Management</h4>
                  <ul className="text-sm text-stone space-y-1">
                    <li>• Restock every 1-2 weeks</li>
                    <li>• Remove slow movers monthly</li>
                    <li>• Add seasonal items quarterly</li>
                    <li>• Monitor expiration dates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Profit Optimization</h4>
                  <ul className="text-sm text-stone space-y-1">
                    <li>• Aim for 70%+ profit margins</li>
                    <li>• Balance high/low margin items</li>
                    <li>• Test price increases gradually</li>
                    <li>• Focus on volume sellers</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Tabs */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex justify-center mb-8">
              <div className="bg-white border border-gray-200 rounded-xl p-1">
                <button
                  onClick={() => setActiveTab('drinks')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    activeTab === 'drinks'
                      ? 'bg-navy text-white'
                      : 'text-charcoal hover:bg-gray-50'
                  }`}
                >
                  Drinks
                </button>
                <button
                  onClick={() => setActiveTab('snacks')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    activeTab === 'snacks'
                      ? 'bg-navy text-white'
                      : 'text-charcoal hover:bg-gray-50'
                  }`}
                >
                  Snacks
                </button>
              </div>
            </div>

            {/* Product Categories */}
            <div className="space-y-8">
              {productData[activeTab as keyof typeof productData].categories.map((category, categoryIdx) => (
                <motion.div
                  key={categoryIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIdx * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <h3 className="text-xl font-playfair font-bold text-charcoal mb-4">{category.name}</h3>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {category.products.map((product, productIdx) => (
                      <div key={productIdx} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-charcoal">{product.name}</h4>
                          <span className="text-sm text-navy font-medium">{product.profitMargin}</span>
                        </div>
                        <div className="space-y-1 text-sm text-stone">
                          <div className="flex justify-between">
                            <span>Popularity:</span>
                            <span className="font-medium">{product.popularity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Price Range:</span>
                            <span className="font-medium">{product.priceRange}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location-Specific Recommendations */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Location-Specific Product Recommendations
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Tailor your product selection to maximize sales in different types of locations
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {locationRecommendations.map((location, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-charcoal mb-3">{location.location}</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-charcoal mb-1">Top Drinks:</h4>
                      <p className="text-sm text-stone">{location.drinks.join(', ')}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal mb-1">Top Snacks:</h4>
                      <p className="text-sm text-stone">{location.snacks.join(', ')}</p>
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-sm text-stone italic">{location.tips}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal Products */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Seasonal Product Trends
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Adjust your inventory throughout the year to capitalize on seasonal demand
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {seasonalProducts.map((season, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-charcoal mb-3">{season.season}</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-charcoal mb-1">Drinks:</h4>
                      <p className="text-sm text-stone">{season.drinks.join(', ')}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal mb-1">Snacks:</h4>
                      <p className="text-sm text-stone">{season.snacks.join(', ')}</p>
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-sm text-stone italic">{season.trends}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Product Selection FAQ
              </h2>
              <p className="text-lg text-stone">
                Common questions about choosing and managing vending machine products
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left flex justify-between items-center"
                  >
                    <h3 className="font-semibold text-charcoal pr-4">{faq.question}</h3>
                    <span className="text-navy text-xl font-bold">
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-100"
                    >
                      <p className="text-stone">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-navy">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-playfair font-bold text-white mb-4">
              Ready to Stock Your Vending Machines?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Get high-quality leads for profitable vending machine locations and start maximizing your product sales today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center bg-coral hover:bg-coral-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Pricing Plans
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-navy border border-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
