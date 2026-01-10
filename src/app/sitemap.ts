import { MetadataRoute } from 'next'
import { getAllTaxServicesSlugs } from '@/data/tax-services-cities'
import { getAllVendingLeadsSlugs } from '@/data/vending-leads-cities'
import { getAllVendingServicesSlugs } from '@/data/vending-services-cities'
import states from '@/data/states'

// Use ISR - regenerate sitemap index every 6 hours
export const revalidate = 21600 // 6 hours in seconds

// Maximum URLs per sitemap (recommended: 1,000-2,500)
const MAX_URLS_PER_SITEMAP = 2000

// Helper to chunk array
function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

// Generate all URLs for a category
function generateCategoryUrls(category: string, slugs: string[]): MetadataRoute.Sitemap {
  return slugs.map((slug) => ({
    url: `https://www.thevendinglocator.com/${category}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))
}

// Generate state page URLs
function generateStatePages(): MetadataRoute.Sitemap {
  const states = [
    'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado',
    'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho',
    'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana',
    'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota',
    'mississippi', 'missouri', 'montana', 'nebraska', 'nevada',
    'new-hampshire', 'new-jersey', 'new-mexico', 'new-york',
    'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon',
    'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
    'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington',
    'west-virginia', 'wisconsin', 'wyoming'
  ]

  const vendingLeadsStates = states.map((state) => ({
    url: `https://www.thevendinglocator.com/vending-leads/${state}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }))

  // Tax services has limited states
  const taxServicesStates = ['florida', 'texas', 'california'].map((state) => ({
    url: `https://www.thevendinglocator.com/tax-services/${state}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }))

  return [...vendingLeadsStates, ...taxServicesStates]
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Main pages
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
    { url: 'https://www.thevendinglocator.com/vending-services', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: 'https://www.thevendinglocator.com/vending-companies', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: 'https://www.thevendinglocator.com/vending-companies/jacksonville-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-companies/orlando-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-companies/miami-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-companies/houston-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-companies/miami-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-services-contact', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-companies-contact', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/guide', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: 'https://www.thevendinglocator.com/faq', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/terms-of-service', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ]

  // State pages
  const statePages = generateStatePages()

  // Get all slugs for dynamic city pages
  const taxServicesSlugs = getAllTaxServicesSlugs()
  const vendingLeadsSlugs = getAllVendingLeadsSlugs()
  const vendingServicesSlugs = getAllVendingServicesSlugs()
  
  // Get all city slugs from states.ts for how-to-start pages
  const howToStartSlugs = states.flatMap(state => state.cities.map(city => city.slug))

  // Generate URLs for each category
  const taxServicesUrls = generateCategoryUrls('tax-services', taxServicesSlugs)
  const vendingLeadsUrls = generateCategoryUrls('vending-leads', vendingLeadsSlugs)
  const vendingServicesUrls = generateCategoryUrls('vending-services', vendingServicesSlugs)
  const howToStartUrls = generateCategoryUrls('how-to-start-a-vending-machine-business', howToStartSlugs)

  // Combine all URLs
  const allUrls = [
    ...mainPages,
    ...statePages,
    ...taxServicesUrls,
    ...vendingLeadsUrls,
    ...vendingServicesUrls,
    ...howToStartUrls
  ]

  // If total URLs exceed MAX_URLS_PER_SITEMAP, we would need chunked sitemaps
  // For now, Next.js will handle this, but if we have >50k URLs, we'd need a sitemap index
  // Since we have ~6,000 pages, we can return them all (Next.js handles this efficiently)
  
  return allUrls
}
