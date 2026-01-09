import { MetadataRoute } from 'next'

// Simplified sitemap to prevent build-time memory issues
// Only includes main pages and state pages - city pages are discovered via internal linking
// This prevents Next.js from evaluating thousands of URLs during build
export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Regenerate sitemap every hour

export default function sitemap(): MetadataRoute.Sitemap {
  // Main pages only
  const mainPages: MetadataRoute.Sitemap = [
      { url: 'https://www.thevendinglocator.com', lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
  { url: 'https://www.thevendinglocator.com/pricing', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  { url: 'https://www.thevendinglocator.com/services', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/contact', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  { url: 'https://www.thevendinglocator.com/blog', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/hot-leads', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/haha-coolers', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
   { url: 'https://www.thevendinglocator.com/vending-leads', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
   { url: 'https://www.thevendinglocator.com/tax-services', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
   { url: 'https://www.thevendinglocator.com/ein-llc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  { url: 'https://www.thevendinglocator.com/vending-locations', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/guide', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  { url: 'https://www.thevendinglocator.com/faq', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/terms-of-service', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ]

  // State pages only - city pages are discovered via internal linking
  const statePages: MetadataRoute.Sitemap = [
    // Vending Leads State Pages
    { url: 'https://www.thevendinglocator.com/vending-leads/texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/massachusetts', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/oregon', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/nevada', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/missouri', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/maryland', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/new-mexico', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/utah', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/arkansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/iowa', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/kansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/mississippi', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/nebraska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/oklahoma', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/west-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/delaware', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/rhode-island', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/connecticut', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/new-jersey', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/vermont', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/new-hampshire', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/maine', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/alaska', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/hawaii', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/north-dakota', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/south-dakota', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/montana', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/wyoming', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/idaho', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    // Tax Services State Pages
    { url: 'https://www.thevendinglocator.com/tax-services/florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/tax-services/texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/tax-services/california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ]

  // Guide pages
  const guidePages: MetadataRoute.Sitemap = [
    { url: 'https://www.thevendinglocator.com/guide/how-to-start-a-vending-machine-business', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  ]

  // Blog posts
  const blogPosts: MetadataRoute.Sitemap = [
    { url: 'https://www.thevendinglocator.com/blog/vending-machine-business-guide', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: 'https://www.thevendinglocator.com/blog/vending-machine-location-strategies', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: 'https://www.thevendinglocator.com/blog/vending-machine-profitability', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ]

  // Combine all pages
  return [
    ...mainPages,
    ...statePages,
    ...guidePages,
    ...blogPosts,
  ]
}
