import { getAllTaxServicesSlugs } from '@/data/tax-services-cities'
import { getAllVendingLeadsSlugs } from '@/data/vending-leads-cities'
import { getAllVendingServicesSlugs } from '@/data/vending-services-cities'
import { getAllVendingCompaniesSlugs } from '@/data/vending-companies-cities'
import states from '@/data/states'
import { howToStartSlugs as extraHowToStartSlugs } from '@/data/how-to-start-slugs'

export const MAX_URLS_PER_SITEMAP = 2000

type SitemapEntry = {
  url: string
  lastModified: Date
  changeFrequency: 'daily' | 'weekly' | 'monthly'
  priority: number
}

function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

function generateCategoryUrls(category: string, slugs: string[]): SitemapEntry[] {
  return slugs.map((slug) => ({
    url: `https://www.thevendinglocator.com/${category}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))
}

function generateStatePages(): SitemapEntry[] {
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

  const taxServicesStates = ['florida', 'texas', 'california'].map((state) => ({
    url: `https://www.thevendinglocator.com/tax-services/${state}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }))

  return [...vendingLeadsStates, ...taxServicesStates]
}

export function buildAllUrls(): SitemapEntry[] {
  const mainPages: SitemapEntry[] = [
    { url: 'https://www.thevendinglocator.com', lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: 'https://www.thevendinglocator.com/pricing', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.thevendinglocator.com/services', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.thevendinglocator.com/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/hot-leads', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/haha-coolers', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.thevendinglocator.com/vending-leads', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.thevendinglocator.com/tax-services', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.thevendinglocator.com/ein-llc', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.thevendinglocator.com/vending-locations', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-services', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.thevendinglocator.com/bookkeeping-kpis', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.thevendinglocator.com/vending-companies', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.thevendinglocator.com/vending-machine-business-contract', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-companies/jacksonville-florida', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-companies/orlando-florida', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-companies/miami-florida', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-companies/houston-texas', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-companies/miami-florida', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-services-contact', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-companies-contact', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/guide', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.thevendinglocator.com/faq', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/terms-of-service', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]

  const statePages = generateStatePages()
  const taxServicesSlugs = getAllTaxServicesSlugs()
  const vendingLeadsSlugs = getAllVendingLeadsSlugs()
  const vendingServicesSlugs = getAllVendingServicesSlugs()
  const vendingCompaniesSlugs = getAllVendingCompaniesSlugs()
  const bookkeepingKpisSlugs = vendingLeadsSlugs

  const howToStartSlugs = Array.from(
    new Set([
      ...states.flatMap(state => state.cities.map(city => city.slug)),
      ...extraHowToStartSlugs
    ])
  )

  const taxServicesUrls = generateCategoryUrls('tax-services', taxServicesSlugs)
  const vendingLeadsUrls = generateCategoryUrls('vending-leads', vendingLeadsSlugs)
  const vendingServicesUrls = generateCategoryUrls('vending-services', vendingServicesSlugs)
  const vendingCompaniesUrls = generateCategoryUrls('vending-companies', vendingCompaniesSlugs)
  const bookkeepingKpisUrls = generateCategoryUrls('bookkeeping-kpis', bookkeepingKpisSlugs)
  const howToStartUrls = generateCategoryUrls('how-to-start-a-vending-machine-business', howToStartSlugs)

  return [
    ...mainPages,
    ...statePages,
    ...taxServicesUrls,
    ...vendingLeadsUrls,
    ...vendingServicesUrls,
    ...vendingCompaniesUrls,
    ...bookkeepingKpisUrls,
    ...howToStartUrls
  ]
}

export function chunkSitemaps(urls: SitemapEntry[]) {
  return chunk(urls, MAX_URLS_PER_SITEMAP)
}
