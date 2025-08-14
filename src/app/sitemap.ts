import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thevendinglocator.com'
  const currentDate = new Date().toISOString()

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/hot-leads`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vending-locations`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide/how-to-start-a-vending-machine-business`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/vending-leads`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // State hub pages
  const states = [
    'texas', 'california', 'florida', 'colorado', 'georgia', 'massachusetts',
    'tennessee', 'north-carolina', 'ohio', 'illinois', 'pennsylvania', 'nevada',
    'oregon', 'minnesota', 'missouri', 'washington', 'new-york', 'arizona'
  ]

  const statePages = states.map(state => ({
    url: `${baseUrl}/vending-leads/${state}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // City pages
  const cities = [
    // Texas
    'houston-texas', 'dallas-texas', 'austin-texas', 'san-antonio-texas',
    // California
    'los-angeles-california', 'san-francisco-california', 'san-diego-california', 'san-jose-california',
    // Florida
    'miami-florida', 'jacksonville-florida', 'orlando-florida',
    // Colorado
    'denver-colorado', 'boulder-colorado', 'colorado-springs-colorado',
    // Georgia
    'atlanta-georgia', 'savannah-georgia', 'augusta-georgia',
    // Massachusetts
    'boston-massachusetts', 'worcester-massachusetts', 'springfield-massachusetts',
    // Tennessee
    'nashville-tennessee', 'memphis-tennessee', 'knoxville-tennessee',
    // North Carolina
    'charlotte-north-carolina', 'raleigh-north-carolina', 'greensboro-north-carolina',
    // Ohio
    'cleveland-ohio', 'columbus-ohio', 'cincinnati-ohio',
    // Other major cities
    'chicago-illinois', 'philadelphia-pennsylvania', 'pittsburgh-pennsylvania',
    'las-vegas-nevada', 'portland-oregon', 'minneapolis-minnesota',
    'kansas-city-missouri', 'seattle-washington', 'new-york-new-york', 'phoenix-arizona'
  ]

  const cityPages = cities.map(city => ({
    url: `${baseUrl}/vending-leads/${city}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...mainPages, ...statePages, ...cityPages]
}
