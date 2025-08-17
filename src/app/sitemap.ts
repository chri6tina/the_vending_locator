import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Main pages
  const mainPages = [
    { url: 'https://thevendinglocator.com', lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: 'https://thevendinglocator.com/pricing', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: 'https://thevendinglocator.com/services', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/contact', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://thevendinglocator.com/blog', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/hot-leads', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: 'https://thevendinglocator.com/vending-locations', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/guide/how-to-start-a-vending-machine-business', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  // State pages
  const statePages = [
    { url: 'https://thevendinglocator.com/vending-leads/texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/massachusetts', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/oregon', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/nevada', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/missouri', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/maryland', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/new-mexico', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/utah', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/arkansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/iowa', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/kansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/mississippi', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/nebraska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/oklahoma', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/west-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/rhode-island', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/new-jersey', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/vermont', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/maine', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/alaska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/hawaii', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ]

  // Individual city pages - All 20 high-quality city pages
  const cityPages = [
    // Batch 1: Phoenix, Philadelphia, San Francisco, Seattle
    { url: 'https://thevendinglocator.com/vending-leads/phoenix-arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/philadelphia-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/san-francisco-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/seattle-washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Batch 2: Atlanta, Denver, Boston, Miami, Portland, Las Vegas, San Diego, Orlando
    { url: 'https://thevendinglocator.com/vending-leads/atlanta-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/denver-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/boston-massachusetts', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/miami-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/portland-oregon', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/las-vegas-nevada', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/san-diego-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/orlando-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Batch 3: Austin (enhanced), San Jose, Tampa, Minneapolis
    { url: 'https://thevendinglocator.com/vending-leads/austin-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/san-jose-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/tampa-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/minneapolis-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Batch 4: Cleveland (enhanced), Pittsburgh (enhanced), Kansas City (enhanced), Cincinnati (enhanced)
    { url: 'https://thevendinglocator.com/vending-leads/cleveland-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/pittsburgh-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/kansas-city-missouri', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/cincinnati-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Batch 5: New city pages - Augusta, Savannah, Knoxville, Tampa
    { url: 'https://thevendinglocator.com/vending-leads/augusta-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/savannah-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/knoxville-tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://thevendinglocator.com/vending-leads/tampa-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ]

  // Blog posts
  const blogPosts = [
    { url: 'https://thevendinglocator.com/blog/vending-machine-business-guide', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: 'https://thevendinglocator.com/blog/vending-machine-location-strategies', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: 'https://thevendinglocator.com/blog/vending-machine-profitability', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ]

  // Vending company pages
  const vendingCompanyPages = [
    { url: 'https://thevendinglocator.com/vending-companies/austin-texas', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  return [
    ...mainPages,
    ...statePages,
    ...cityPages,
    ...blogPosts,
    ...vendingCompanyPages,
  ]
}
