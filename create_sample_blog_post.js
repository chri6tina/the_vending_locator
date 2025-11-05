/**
 * Sample Blog Post Creation Script
 * This demonstrates creating a blog post in the system
 * 
 * To run: node create_sample_blog_post.js
 */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'YOUR_SUPABASE_URL'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper function to generate URL-friendly slug
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

async function createBlogPost() {
  console.log('🚀 Creating sample blog post...\n')

  // Complete blog post data
  const blogPost = {
    // Basic Info
    title: 'How Does The Vending Locator Work?',
    slug: generateSlug('How Does The Vending Locator Work?'),
    
    // Excerpt (short summary)
    excerpt: 'Discover how The Vending Locator connects vending machine operators with premium locations and hot leads across the United States.',
    
    // Full Content (HTML formatted)
    content: `
      <h2>Welcome to The Vending Locator</h2>
      
      <p>Starting or expanding a vending machine business can be challenging, especially when it comes to finding the right locations. That's where The Vending Locator comes in – we're your one-stop solution for finding premium vending machine opportunities across the United States.</p>
      
      <h2>What We Do</h2>
      
      <p>The Vending Locator specializes in connecting vending machine operators with high-quality placement opportunities. We do the heavy lifting of researching, vetting, and presenting lucrative vending locations so you can focus on growing your business.</p>
      
      <h3>1. Hot Leads Marketplace</h3>
      
      <p>Our flagship feature is the <strong>Hot Leads Marketplace</strong>, where we list pre-researched vending machine locations. Each lead includes:</p>
      
      <ul>
        <li><strong>Business Information:</strong> Company name, type, and employee count</li>
        <li><strong>Location Details:</strong> Full address, city, state, and ZIP code</li>
        <li><strong>Contact Information:</strong> Direct contact details for decision-makers</li>
        <li><strong>Opportunity Assessment:</strong> Why this location is a great fit for vending machines</li>
      </ul>
      
      <p>These aren't just random addresses – we carefully research each location to ensure they have the foot traffic, employee count, and demographic profile that makes for successful vending machine placements.</p>
      
      <h3>2. City-by-City Vending Services</h3>
      
      <p>We provide detailed information about vending opportunities in cities across all 50 states. Our city pages include:</p>
      
      <ul>
        <li>Local market analysis</li>
        <li>Population and demographic data</li>
        <li>Top industries and employers</li>
        <li>Vending machine placement strategies specific to that city</li>
        <li>Local regulations and requirements</li>
      </ul>
      
      <h3>3. Educational Resources</h3>
      
      <p>We don't just give you leads – we help you succeed with comprehensive guides on:</p>
      
      <ul>
        <li>How to start a vending machine business</li>
        <li>Choosing the right vending machines</li>
        <li>Negotiating with location owners</li>
        <li>Managing routes efficiently</li>
        <li>Maximizing profitability</li>
      </ul>
      
      <h2>How It Works: Step by Step</h2>
      
      <h3>Step 1: Browse Available Leads</h3>
      
      <p>Visit our <a href="/hot-leads">Hot Leads Marketplace</a> to see current opportunities. Filter by state, city, business type, or price to find leads that match your criteria.</p>
      
      <h3>Step 2: Review Lead Details</h3>
      
      <p>Click on any lead to see comprehensive information including:</p>
      
      <ul>
        <li>Detailed business profile</li>
        <li>Employee count (indicator of potential customers)</li>
        <li>Exact location and accessibility</li>
        <li>Why we believe this is a strong opportunity</li>
      </ul>
      
      <h3>Step 3: Purchase Your Lead</h3>
      
      <p>When you find a lead you like, purchase it through our secure checkout. Once purchased, you receive:</p>
      
      <ul>
        <li>Full contact information</li>
        <li>Decision-maker details</li>
        <li>Tips for approaching the location</li>
        <li>Exclusive rights to that lead (we don't sell the same lead twice)</li>
      </ul>
      
      <h3>Step 4: Make Contact</h3>
      
      <p>Use the provided contact information to reach out to the business. We recommend:</p>
      
      <ul>
        <li>Being professional and prepared</li>
        <li>Highlighting the benefits to the business (employee convenience, additional revenue share)</li>
        <li>Having your machines, pricing, and terms ready to discuss</li>
        <li>Following up persistently but respectfully</li>
      </ul>
      
      <h3>Step 5: Close the Deal</h3>
      
      <p>Negotiate terms, sign agreements, and install your vending machines. Our leads give you a head start, but your professionalism and persistence will close the deal.</p>
      
      <h2>Why Choose The Vending Locator?</h2>
      
      <h3>✅ Save Time</h3>
      
      <p>Instead of spending weeks or months driving around looking for potential locations, get immediate access to vetted opportunities.</p>
      
      <h3>✅ Quality Over Quantity</h3>
      
      <p>We focus on researching high-quality leads with strong potential, not just compiling phone books of random businesses.</p>
      
      <h3>✅ Exclusive Leads</h3>
      
      <p>When you purchase a lead, it's yours. We remove it from our marketplace so you're not competing with other operators for the same location.</p>
      
      <h3>✅ Nationwide Coverage</h3>
      
      <p>Whether you're in California, Texas, Florida, New York, or anywhere in between, we have leads in your area.</p>
      
      <h3>✅ Affordable Pricing</h3>
      
      <p>Our leads are priced competitively to give you a strong ROI. When you consider the time and gas money saved, plus the increased success rate, our leads pay for themselves many times over.</p>
      
      <h2>Success Stories</h2>
      
      <p>Operators across the country use The Vending Locator to:</p>
      
      <ul>
        <li>Launch new vending businesses with strong initial placements</li>
        <li>Expand existing routes into new territories</li>
        <li>Replace underperforming locations with better opportunities</li>
        <li>Test new markets before committing resources</li>
      </ul>
      
      <h2>Getting Started</h2>
      
      <p>Ready to grow your vending machine business? Here's what to do:</p>
      
      <ol>
        <li><strong>Browse Our Leads:</strong> Check out the <a href="/hot-leads">Hot Leads Marketplace</a></li>
        <li><strong>Research Your Market:</strong> Read our city-specific vending guides</li>
        <li><strong>Learn the Business:</strong> Review our educational resources</li>
        <li><strong>Purchase & Grow:</strong> Buy leads and start placing machines</li>
      </ol>
      
      <h2>Have Questions?</h2>
      
      <p>We're here to help! Visit our <a href="/contact">contact page</a> to get in touch with any questions about our leads, services, or the vending industry in general.</p>
      
      <p><strong>The Vending Locator – Your Partner in Vending Success</strong></p>
    `,
    
    // Featured Image URL
    featured_image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=1200&h=600&fit=crop',
    
    // Author Info
    author_name: 'The Vending Locator Team',
    author_email: 'support@thevendinglocator.com',
    
    // SEO Metadata
    meta_title: 'How Does The Vending Locator Work? | Complete Guide',
    meta_description: 'Learn how The Vending Locator helps vending machine operators find premium locations, purchase hot leads, and grow their business with our comprehensive marketplace.',
    
    // Keywords (array)
    keywords: [
      'vending locator',
      'vending machine leads',
      'vending business',
      'vending locations',
      'hot leads marketplace',
      'vending machine placement',
      'vending opportunities'
    ],
    
    // Category
    category: 'How It Works',
    
    // Status (draft or published)
    status: 'published',
    
    // Published date
    published_at: new Date().toISOString()
  }

  console.log('📝 Blog Post Details:')
  console.log('Title:', blogPost.title)
  console.log('Slug:', blogPost.slug)
  console.log('Category:', blogPost.category)
  console.log('Keywords:', blogPost.keywords.join(', '))
  console.log('Status:', blogPost.status)
  console.log('Word Count:', blogPost.content.split(' ').length, 'words')
  console.log()

  try {
    // Insert into Supabase
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([blogPost])
      .select()

    if (error) {
      console.error('❌ Error creating blog post:', error.message)
      
      if (error.message.includes('relation "blog_posts" does not exist')) {
        console.log('\n⚠️  Database table does not exist yet!')
        console.log('Please run the SQL schema from BLOG_SYSTEM_SETUP.md first.')
      } else if (error.message.includes('duplicate key')) {
        console.log('\n⚠️  This blog post already exists!')
        console.log('Try changing the slug or deleting the existing post.')
      }
      
      return
    }

    console.log('✅ Blog post created successfully!')
    console.log('\n📍 URLs:')
    console.log('Admin view:', `http://localhost:3000/admin/blog/posts`)
    console.log('Public view:', `http://localhost:3000/blog/${blogPost.slug}`)
    console.log('\nPost ID:', data[0].id)

  } catch (error) {
    console.error('❌ Unexpected error:', error)
  }
}

// Run the function
createBlogPost()

