'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

interface BlogPost {
  id: string
  title: string
  content?: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  slug: string
  author?: string
}

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBlogPost() {
      try {
        setLoading(true)
        const response = await fetch(`/api/blog/${slug}`)
        
        if (response.ok) {
          const data = await response.json()
          if (data) {
            // Debug: Log the entire response to see what fields are available
            console.log('Contentful blog post data:', data)
            console.log('Available fields:', Object.keys(data.fields || {}))
            
            // Transform Contentful data to match our component structure
            let imageUrl = data.fields?.featuredImage?.fields?.file?.url || `https://picsum.photos/800/400?random=${Math.floor(Math.random() * 10)}`
            
            // Fix protocol-relative URLs (//) to absolute URLs (https://)
            if (imageUrl && imageUrl.startsWith('//')) {
              imageUrl = `https:${imageUrl}`
            }
            
            // Handle rich text content from Contentful
            let content = 'Content not available'
            if (data.fields?.content) {
              if (typeof data.fields.content === 'string') {
                content = data.fields.content
              } else if (data.fields.content.content) {
                // This is Contentful's rich text structure
                content = data.fields.content.content
                  .map((node: any) => {
                    if (node.nodeType === 'paragraph') {
                      return `<p>${node.content?.map((text: any) => text.value || '').join('') || ''}</p>`
                    } else if (node.nodeType === 'heading-1') {
                      return `<h1>${node.content?.map((text: any) => text.value || '').join('') || ''}</h1>`
                    } else if (node.nodeType === 'heading-2') {
                      return `<h2>${node.content?.map((text: any) => text.value || '').join('') || ''}</h2>`
                    } else if (node.nodeType === 'heading-3') {
                      return `<h3>${node.content?.map((text: any) => text.value || '').join('') || ''}</h3>`
                    } else if (node.nodeType === 'unordered-list') {
                      const items = node.content?.map((item: any) => 
                        `<li>${item.content?.map((text: any) => text.value || '').join('') || ''}</li>`
                      ).join('') || ''
                      return `<ul>${items}</ul>`
                    } else if (node.nodeType === 'ordered-list') {
                      const items = node.content?.map((item: any) => 
                        `<li>${item.content?.map((text: any) => text.value || '').join('') || ''}</li>`
                      ).join('') || ''
                      return `<ol>${items}</ol>`
                    } else if (node.nodeType === 'hyperlink') {
                      const text = node.content?.map((text: any) => text.value || '').join('') || ''
                      const url = node.data?.uri || '#'
                      return `<a href="${url}" class="text-navy hover:underline">${text}</a>`
                    }

  return ''
                  })
                  .join('')
              }
            }
            
            const transformedPost: BlogPost = {
              id: data.sys?.id || 'unknown',
              title: data.fields?.title || 'Untitled Post',
              content: content,
              excerpt: data.fields?.excerpt || 'No excerpt available',
              category: data.fields?.category || 'Uncategorized',
              date: data.fields?.publishDate ? new Date(data.fields.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : 'No date',
              readTime: data.fields?.readTime || '5 min read',
              image: imageUrl,
              slug: data.fields?.slug || slug,
              author: data.fields?.author?.fields?.name || 'Vending Locator Team'
            }
            
            console.log('Transformed post:', transformedPost)
            setPost(transformedPost)
          } else {
            setError('Blog post not found')
          }
        } else {
          setError('Failed to load blog post')
        }
      } catch (err) {
        console.error('Error fetching blog post:', err)
        setError('Failed to load blog post')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchBlogPost()
    }
  }, [slug])

  if (loading) {
    return (
      <main className="min-h-screen bg-warm-white">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mx-auto mb-4"></div>
            <p className="text-stone">Loading blog post...</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (error || !post) {
    return (
      <main className="min-h-screen bg-warm-white">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error || 'Blog post not found'}</p>
            <a href="/blog" className="text-navy hover:underline">
              ← Back to Blog
            </a>
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
        <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <nav className="mb-8">
              <a href="/blog" className="inline-flex items-center gap-2 text-navy hover:text-opacity-80 transition-colors group">
                <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </a>
            </nav>
            
            {/* Category and Date */}
            <div className="flex items-center gap-x-4 text-sm mb-8">
              <span className="bg-navy text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-stone/60">
                <time dateTime={post.date} className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {post.date}
                </time>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime}
                </span>
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl font-playfair font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl mb-8 leading-tight">
              {post.title}
            </h1>
            
            {/* Excerpt */}
            <p className="text-xl leading-8 text-stone mb-8 max-w-3xl">
              {post.excerpt}
            </p>
            
            {/* Author */}
            <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-stone/100">
              <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-stone/60">Written by</p>
                <p className="font-semibold text-charcoal">{post.author}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl relative"
          >
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a simple placeholder if image fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-navy/10 to-stone/20 flex items-center justify-center">
                        <div class="text-center">
                          <div class="w-24 h-24 bg-navy/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-12 h-12 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                            </svg>
                          </div>
                          <span class="text-navy/60 text-lg font-medium">Blog Post Image</span>
                        </div>
                      </div>
                    `;
                  }
                }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-navy/10 to-stone/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-navy/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <span className="text-navy/60 text-lg font-medium">Blog Post Image</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {post.content && post.content !== 'Content not available' ? (
              <div>
                {/* Debug: Show raw content for troubleshooting */}
                <details className="mb-8 p-4 bg-gray-100 rounded-lg border border-stone/200">
                  <summary className="cursor-pointer font-medium text-gray-700 hover:text-gray-900 transition-colors">
                    🔍 Debug: Raw Content from Contentful
                  </summary>
                  <pre className="mt-2 text-xs text-gray-600 whitespace-pre-wrap bg-white p-3 rounded border">{JSON.stringify(post.content, null, 2)}</pre>
                </details>
                
                {/* Display the actual content */}
                <article className="prose prose-lg max-w-none">
                  <div 
                    className="blog-content-enhanced"
                    dangerouslySetInnerHTML={{ 
                      __html: post.content 
                    }}
                  />
                </article>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Content not available</h3>
                <p className="text-stone/60 mb-4">This blog post doesn't have content yet.</p>
                <p className="text-sm text-stone/40">Check the debug section above to see what fields are available from Contentful.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Article Footer */}
      <div className="bg-gradient-to-br from-stone/5 via-white to-navy/5 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            {/* Share buttons */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-charcoal mb-4">Share this article</h3>
              <div className="flex justify-center gap-4">
                <button className="p-3 bg-navy text-white rounded-full hover:bg-navy/80 transition-colors shadow-md hover:shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="p-3 bg-navy text-white rounded-full hover:bg-navy/80 transition-colors shadow-md hover:shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
                <button className="p-3 bg-navy text-white rounded-full hover:bg-navy/80 transition-colors shadow-md hover:shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Back to Blog */}
            <div className="border-t border-stone/200 pt-8">
              <a
                href="/blog"
                className="inline-flex items-center gap-2 text-navy font-semibold hover:text-opacity-80 transition-colors group"
              >
                <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
