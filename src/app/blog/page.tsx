'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

// Fallback data in case Contentful is not set up yet
const fallbackPosts = [
  {
    id: 1,
    title: "Top 5 Industries for Vending Machine Success in 2024",
    excerpt: "Discover which industries are showing the highest potential for vending machine operators this year, from healthcare facilities to educational institutions.",
    category: "Industry Insights",
    date: "January 15, 2024",
    readTime: "5 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 2,
    title: "How to Negotiate Better Vending Machine Contracts",
    excerpt: "Learn proven strategies for negotiating favorable terms with location owners and maximizing your profit margins in the vending business.",
    category: "Business Tips",
    date: "January 10, 2024",
    readTime: "7 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 3,
    title: "The Complete Guide to Vending Machine Location Research",
    excerpt: "Master the art of finding qualified vending locations with our comprehensive research methodology and proven techniques.",
    category: "Location Research",
    date: "January 5, 2024",
    readTime: "8 min read",
    image: "/api/placeholder/400/250",
  },
]

const fallbackCategories = [
  "All Posts",
  "Industry Insights",
  "Business Tips",
  "Location Research",
  "Financial",
  "Relationship Building",
  "Technology",
]

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState(fallbackPosts)
  const [categories, setCategories] = useState(fallbackCategories)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("All Posts")

  // Fetch blog posts from Contentful
  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await fetch('/api/blog')
        if (response.ok) {
          const data = await response.json()
          if (data && data.length > 0) {
            // Transform Contentful data to match our component structure
            const transformedPosts = data.map((post: any, index: number) => ({
              id: post.sys?.id || index + 1,
              title: post.fields?.title || 'Untitled Post',
              excerpt: post.fields?.excerpt || 'No excerpt available',
              category: post.fields?.category || 'Uncategorized',
              date: post.fields?.publishDate ? new Date(post.fields.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : 'No date',
              readTime: post.fields?.readTime || '5 min read',
              image: post.fields?.featuredImage?.fields?.file?.url || '/api/placeholder/400/250',
              slug: post.fields?.slug || `post-${index + 1}`
            }))
            setBlogPosts(transformedPosts)
            
            // Extract unique categories from posts
            const uniqueCategories = ["All Posts", ...new Set(transformedPosts.map(post => post.category))]
            setCategories(uniqueCategories)
          }
        }
      } catch (err) {
        console.error('Error fetching blog posts:', err)
        setError('Failed to load blog posts')
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  // Filter posts by selected category
  const filteredPosts = selectedCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  if (loading) {
    return (
      <main className="min-h-screen bg-warm-white">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mx-auto mb-4"></div>
            <p className="text-stone">Loading blog posts...</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen bg-warm-white">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <p className="text-stone">Using fallback content for now.</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-warm-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-playfair font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Vending Industry Insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-stone"
            >
              Stay updated with the latest trends, tips, and strategies for vending machine success.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-warm-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors duration-200 shadow-sm ${
                  selectedCategory === category
                    ? 'bg-navy text-white'
                    : 'bg-white text-charcoal hover:bg-navy hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {filteredPosts.map((post) => (
              <article key={post.id} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Blog Image</span>
                </div>
                
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <span className="text-navy font-medium">{post.category}</span>
                  <span className="text-stone/50">•</span>
                  <time dateTime={post.date} className="text-stone/50">
                    {post.date}
                  </time>
                  <span className="text-stone/50">•</span>
                  <span className="text-stone/50">{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-playfair font-semibold leading-8 text-charcoal mb-3">
                  {post.title}
                </h3>
                
                <p className="text-sm leading-6 text-stone mb-4">
                  {post.excerpt}
                </p>
                
                <a
                  href={`/blog/${post.slug}`}
                  className="text-navy font-semibold text-sm hover:text-opacity-80 transition-colors"
                >
                  Read more →
                </a>
              </article>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-warm-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Stay Updated with Vending Insights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-stone"
            >
              Get the latest industry news, tips, and strategies delivered to your inbox.
            </motion.p>
            
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy"
                required
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </motion.form>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-4 text-sm text-stone/50"
            >
              No spam, unsubscribe at any time. We respect your privacy.
            </motion.p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
