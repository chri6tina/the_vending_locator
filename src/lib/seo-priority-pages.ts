// Priority pages for SEO pre-generation
// These are high-traffic/high-value pages that should be statically generated at build time
// This improves SEO by ensuring instant availability and faster TTFB

export const PRIORITY_STATE_PAGES = [
  // Top states by population and business activity
  'california', 'texas', 'florida', 'new-york', 'pennsylvania',
  'illinois', 'ohio', 'georgia', 'north-carolina', 'michigan',
  'new-jersey', 'virginia', 'washington', 'arizona', 'massachusetts',
  'tennessee', 'indiana', 'missouri', 'maryland', 'wisconsin'
]

export const PRIORITY_CITY_PAGES: Record<string, string[]> = {
  'tax-services': [
    // Major metropolitan areas with high business activity
    'miami-florida',
    'orlando-florida',
    'tampa-florida',
    'jacksonville-florida',
    'houston-texas',
    'dallas-texas',
    'austin-texas',
    'san-antonio-texas',
    'los-angeles-california',
    'san-diego-california',
    'san-jose-california',
    'san-francisco-california',
    'sacramento-california',
  ],
  'vending-leads': [
    // Top 50 cities by population and business potential
    'new-york-new-york',
    'los-angeles-california',
    'chicago-illinois',
    'houston-texas',
    'phoenix-arizona',
    'philadelphia-pennsylvania',
    'san-antonio-texas',
    'san-diego-california',
    'dallas-texas',
    'san-jose-california',
    'austin-texas',
    'jacksonville-florida',
    'fort-worth-texas',
    'columbus-ohio',
    'charlotte-north-carolina',
    'san-francisco-california',
    'indianapolis-indiana',
    'seattle-washington',
    'denver-colorado',
    'boston-massachusetts',
    'el-paso-texas',
    'detroit-michigan',
    'nashville-tennessee',
    'portland-oregon',
    'oklahoma-city-oklahoma',
    'las-vegas-nevada',
    'memphis-tennessee',
    'louisville-kentucky',
    'baltimore-maryland',
    'milwaukee-wisconsin',
    'albuquerque-new-mexico',
    'tucson-arizona',
    'fresno-california',
    'sacramento-california',
    'kansas-city-missouri',
    'atlanta-georgia',
    'raleigh-north-carolina',
    'omaha-nebraska',
    'miami-florida',
    'long-beach-california',
    'oakland-california',
    'minneapolis-minnesota',
    'tulsa-oklahoma',
    'cleveland-ohio',
    'wichita-kansas',
    'arlington-texas',
    'new-orleans-louisiana',
    'honolulu-hawaii',
    'virginia-beach-virginia',
    'tampa-florida',
  ],
  'vending-services': [
    // Same priority cities for vending-services
    'new-york-new-york',
    'los-angeles-california',
    'chicago-illinois',
    'houston-texas',
    'phoenix-arizona',
    'philadelphia-pennsylvania',
    'san-antonio-texas',
    'san-diego-california',
    'dallas-texas',
    'san-jose-california',
    'austin-texas',
    'jacksonville-florida',
    'fort-worth-texas',
    'columbus-ohio',
    'charlotte-north-carolina',
    'san-francisco-california',
    'indianapolis-indiana',
    'seattle-washington',
    'denver-colorado',
    'boston-massachusetts',
    'miami-florida',
    'tampa-florida',
    'orlando-florida',
    'atlanta-georgia',
    'detroit-michigan',
    'nashville-tennessee',
    'portland-oregon',
  ]
}

// Helper to check if a page should be pre-generated
export function isPriorityPage(category: string, slug: string): boolean {
  // Check state pages
  if (PRIORITY_STATE_PAGES.includes(slug)) {
    return true
  }

  // Check city pages by category
  const categoryPriorities = PRIORITY_CITY_PAGES[category] || []
  return categoryPriorities.includes(slug)
}

// Get all priority slugs for a category (for generateStaticParams)
export function getPrioritySlugs(category: string): string[] {
  const citySlugs = PRIORITY_CITY_PAGES[category] || []
  // Include state pages for all categories
  return [...citySlugs, ...PRIORITY_STATE_PAGES]
}

