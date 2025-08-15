'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

// Define types for blog posts
interface BlogPost {
  id: number | string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  slug: string
}

// Fallback data in case Contentful is not set up yet
const fallbackPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 5 Industries for Vending Machine Success in 2024",
    excerpt: "Discover which industries are showing the highest potential for vending machine operators this year, from healthcare facilities to educational institutions.",
    category: "Industry Insights",
    date: "January 15, 2024",
    readTime: "5 min read",
    image: "https://picsum.photos/400/250?random=1",
    slug: "top-5-industries-vending-success-2024"
  },
  {
    id: 2,
    title: "How to Negotiate Better Vending Machine Contracts",
    excerpt: "Learn proven strategies for negotiating favorable terms with location owners and maximizing your profit margins in the vending business.",
    category: "Business Tips",
    date: "January 10, 2024",
    readTime: "7 min read",
    image: "https://picsum.photos/400/250?random=2",
    slug: "negotiate-vending-machine-contracts"
  },
  {
    id: 3,
    title: "The Complete Guide to Vending Machine Location Research",
    excerpt: "Master the art of finding qualified vending locations with our comprehensive research methodology and proven techniques.",
    category: "Location Research",
    date: "January 5, 2024",
    readTime: "8 min read",
    image: "https://picsum.photos/400/250?random=3",
    slug: "vending-machine-location-research-guide"
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
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(fallbackPosts)
  const [categories, setCategories] = useState<string[]>(fallbackCategories)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
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
            const transformedPosts: BlogPost[] = data.map((post: any, index: number) => {
              let imageUrl = post.fields?.featuredImage?.fields?.file?.url || `https://picsum.photos/400/250?random=${(index % 3) + 1}`;
              
              // Fix protocol-relative URLs (//) to absolute URLs (https://)
              if (imageUrl && imageUrl.startsWith('//')) {
                imageUrl = `https:${imageUrl}`;
              }
              
              console.log(`Post ${index + 1} image URL:`, imageUrl);
              
              return {
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
                image: imageUrl,
                slug: post.fields?.slug || `post-${index + 1}`
              };
            })
            setBlogPosts(transformedPosts)
            
            // Extract unique categories from posts
            const uniqueCategories = ["All Posts", ...new Set(transformedPosts.map((post: BlogPost) => post.category))]
            setCategories(uniqueCategories)
          } else {
            console.log('No Contentful posts found, using fallback posts');
            console.log('Fallback post images:', fallbackPosts.map(post => post.image));
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
      <div className="bg-gradient-to-br from-navy/5 via-white to-stone/5">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-navy/10 text-navy px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Industry Insights & Tips
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-playfair font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl"
            >
              Vending Industry
              <span className="block text-navy">Insights</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg leading-8 text-stone max-w-2xl mx-auto"
            >
              Stay updated with the latest trends, tips, and strategies for vending machine success. 
              Expert insights to help you grow your business.
            </motion.p>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex justify-center gap-8 text-center"
            >
              <div>
                <div className="text-2xl font-bold text-navy">{blogPosts.length}+</div>
                <div className="text-sm text-stone/60">Articles</div>
              </div>
              <div className="w-px bg-stone/20"></div>
              <div>
                <div className="text-2xl font-bold text-navy">{categories.length - 1}</div>
                <div className="text-sm text-stone/60">Categories</div>
              </div>
              <div className="w-px bg-stone/20"></div>
              <div>
                <div className="text-2xl font-bold text-navy">2024</div>
                <div className="text-sm text-stone/60">Latest</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white py-16 border-b border-stone/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-playfair font-semibold text-charcoal mb-4">Browse by Category</h2>
            <p className="text-stone/60">Filter articles by topic to find exactly what you need</p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full transition-all duration-300 shadow-sm border-2 ${
                  selectedCategory === category
                    ? 'bg-navy text-white border-navy shadow-lg'
                    : 'bg-white text-charcoal border-stone/200 hover:border-navy hover:shadow-md'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="bg-gradient-to-br from-warm-white via-white to-warm-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
              {selectedCategory === "All Posts" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h2>
            <p className="text-stone/60 max-w-2xl mx-auto">
              {selectedCategory === "All Posts" 
                ? "Discover our most recent insights and strategies for vending machine success."
                : `Expert insights and tips focused on ${selectedCategory.toLowerCase()}.`
              }
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {filteredPosts.map((post, index) => (
              <motion.article 
                key={post.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  {/* Image Container */}
                  <div className="aspect-video bg-gray-100 rounded-t-xl mb-6 overflow-hidden relative">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          // Fallback to a simple placeholder if image fails
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-navy/10 to-stone/20 flex items-center justify-center">
                                <div class="text-center">
                                  <div class="w-16 h-16 bg-navy/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <svg class="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                                    </svg>
                                  </div>
                                  <span class="text-navy/60 text-sm font-medium">Blog Post</span>
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-navy/10 to-stone/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-navy/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                          <span className="text-navy/60 text-sm font-medium">Blog Post</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-navy px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-x-4 text-xs mb-4 text-stone/60">
                      <time dateTime={post.date} className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {post.date}
                      </time>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-playfair font-semibold leading-7 text-charcoal mb-3 group-hover:text-navy transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm leading-6 text-stone mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <a
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-opacity-80 transition-colors group-hover:gap-3 duration-300"
                      >
                        Read more 
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      
                      {/* Read time indicator */}
                      <div className="w-2 h-2 bg-navy/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
          
          {/* No posts message */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">No articles found</h3>
              <p className="text-stone/60 mb-6">Try selecting a different category or check back later for new content.</p>
              <button
                onClick={() => setSelectedCategory("All Posts")}
                className="text-navy hover:underline font-medium"
              >
                View all articles
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-navy/5 via-white to-stone/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-navy/10 text-navy px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Stay Updated
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Get Vending Insights Delivered
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-stone"
            >
              Receive the latest industry news, tips, and strategies directly in your inbox. 
              No spam, just valuable insights to grow your vending business.
            </motion.p>
            
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-stone/200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy transition-all duration-200"
                required
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Subscribe
              </button>
            </motion.form>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-4 text-sm text-stone/50"
            >
              🔒 We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
