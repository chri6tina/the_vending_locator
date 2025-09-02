import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Main pages
  const mainPages = [
      { url: 'https://www.thevendinglocator.com', lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
  { url: 'https://www.thevendinglocator.com/pricing', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  { url: 'https://www.thevendinglocator.com/services', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/contact', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  { url: 'https://www.thevendinglocator.com/blog', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/hot-leads', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-leads', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  { url: 'https://www.thevendinglocator.com/vending-locations', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/guide/how-to-start-a-vending-machine-business', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  { url: 'https://www.thevendinglocator.com/terms-of-service', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ]

  // State pages - All 50 states
  const statePages = [
    // Original states
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
    
    // Newly created/updated state pages
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
    
    // Additional newly created state pages
    { url: 'https://www.thevendinglocator.com/vending-leads/north-dakota', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/south-dakota', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/montana', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/wyoming', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/idaho', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  // Individual city pages - Only cities that actually exist
  const cityPages = [
    // Texas cities
    { url: 'https://www.thevendinglocator.com/vending-leads/mansfield-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/grand-prairie-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/el-paso-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/corpus-christi-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lubbock-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/amarillo-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Florida cities
    { url: 'https://www.thevendinglocator.com/vending-leads/hialeah-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/cape-coral-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/gainesville-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/clearwater-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // California cities - Updated and newly created
    { url: 'https://www.thevendinglocator.com/vending-leads/fresno-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/long-beach-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/bakersfield-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/anaheim-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/glendale-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/modesto-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/chula-vista-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/stockton-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/fremont-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/riverside-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/oxnard-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/santa-ana-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/huntington-beach-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/irvine-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Colorado cities
    { url: 'https://www.thevendinglocator.com/vending-leads/aurora-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/arvada-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/pueblo-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/westminster-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/thornton-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/fort-collins-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/colorado-springs-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // New York cities - Newly created
    { url: 'https://www.thevendinglocator.com/vending-leads/buffalo-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/rochester-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/albany-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/syracuse-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/yonkers-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/schenectady-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/utica-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/binghamton-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/troy-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Georgia cities - Newly created
    { url: 'https://www.thevendinglocator.com/vending-leads/marietta-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/roswell-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/sandy-springs-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/warner-robins-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/albany-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/athens-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/macon-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/columbus-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // New high-value city pages
    { url: 'https://www.thevendinglocator.com/vending-leads/nashville-tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/charlotte-north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/orlando-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lakewood-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/fort-collins-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Maryland cities
    { url: 'https://www.thevendinglocator.com/vending-leads/silver-spring-maryland', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/columbia-maryland', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/gaithersburg-maryland', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/rockville-maryland', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/frederick-maryland', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/annapolis-maryland', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Connecticut cities
    { url: 'https://www.thevendinglocator.com/vending-leads/new-haven-connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/bridgeport-connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Michigan cities
    { url: 'https://www.thevendinglocator.com/vending-leads/saginaw-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/flint-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/kalamazoo-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/ann-arbor-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lansing-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Iowa cities
    { url: 'https://www.thevendinglocator.com/vending-leads/iowa-city-iowa', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/ames-iowa', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/waterloo-iowa', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/sioux-city-iowa', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/cedar-rapids-iowa', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/davenport-iowa', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/des-moines-iowa', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Ohio cities
    { url: 'https://www.thevendinglocator.com/vending-leads/dayton-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/youngstown-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/akron-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // North Carolina cities
    { url: 'https://www.thevendinglocator.com/vending-leads/cary-north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/durham-north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/fayetteville-north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/winston-salem-north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Massachusetts cities
    { url: 'https://www.thevendinglocator.com/vending-leads/cambridge-massachusetts', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/fall-river-massachusetts', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Idaho cities
    { url: 'https://www.thevendinglocator.com/vending-leads/twin-falls-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/coeur-dalene-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/pocatello-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/idaho-falls-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/nampa-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/meridian-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Alabama cities
    { url: 'https://www.thevendinglocator.com/vending-leads/auburn-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/dothan-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/mobile-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/tuscaloosa-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/montgomery-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Louisiana cities
    { url: 'https://www.thevendinglocator.com/vending-leads/new-orleans-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Kansas cities
    { url: 'https://www.thevendinglocator.com/vending-leads/wichita-kansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Oklahoma cities
    { url: 'https://www.thevendinglocator.com/vending-leads/tulsa-oklahoma', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/oklahoma-city-oklahoma', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Minnesota cities
    { url: 'https://www.thevendinglocator.com/vending-leads/rochester-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/saint-paul-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Pennsylvania cities
    { url: 'https://www.thevendinglocator.com/vending-leads/allentown-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/bethlehem-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/erie-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/philadelphia-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/reading-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/scranton-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Wisconsin cities
    { url: 'https://www.thevendinglocator.com/vending-leads/milwaukee-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/madison-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Wyoming cities - Newly created and fixed
    { url: 'https://www.thevendinglocator.com/vending-leads/casper-wyoming', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/cheyenne-wyoming', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/laramie-wyoming', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/rock-springs-wyoming', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/gillette-wyoming', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Additional California cities - Newly created and fixed
    { url: 'https://www.thevendinglocator.com/vending-leads/riverside-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/oxnard-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/santa-ana-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/huntington-beach-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/irvine-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Additional major city pages
    { url: 'https://www.thevendinglocator.com/vending-leads/new-york-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/san-antonio-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/san-diego-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/san-jose-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/san-francisco-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/oakland-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/sacramento-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/tampa-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/st-petersburg-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/orlando-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/sarasota-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/tallahassee-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/savannah-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/waco-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/tyler-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/plano-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/phoenix-arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/tucson-arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/salt-lake-city-utah', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    // Washington cities
    { url: 'https://www.thevendinglocator.com/vending-leads/bellevue-washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/everett-washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/kent-washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/seattle-washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/spokane-washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/tacoma-washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/vancouver-washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/portland-oregon', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/omaha-nebraska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/springfield-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/rockford-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/peoria-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    // New Illinois cities
    { url: 'https://www.thevendinglocator.com/vending-leads/aurora-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/elgin-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/joliet-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    // Phase 2 Illinois cities
    { url: 'https://www.thevendinglocator.com/vending-leads/waukegan-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/cicero-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/schaumburg-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    // New Jersey cities
    { url: 'https://www.thevendinglocator.com/vending-leads/elizabeth-new-jersey', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/edison-new-jersey', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/jersey-city-new-jersey', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/newark-new-jersey', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/paterson-new-jersey', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/woodbridge-new-jersey', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    // Ohio cities
    { url: 'https://www.thevendinglocator.com/vending-leads/akron-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/cincinnati-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/cleveland-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/columbus-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/dayton-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/youngstown-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    // Missouri cities
    { url: 'https://www.thevendinglocator.com/vending-leads/columbia-missouri', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/independence-missouri', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lees-summit-missouri', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/ofallon-missouri', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/springfield-missouri', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/st-louis-missouri', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/springfield-massachusetts', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/worcester-massachusetts', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/pittsburgh-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/york-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/providence-rhode-island', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    // Virginia cities
    { url: 'https://www.thevendinglocator.com/vending-leads/chesapeake-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/norfolk-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/richmond-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/virginia-beach-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/raleigh-north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/toledo-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    // South Carolina cities
    { url: 'https://www.thevendinglocator.com/vending-leads/charleston-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/columbia-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/greenville-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/mount-pleasant-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/north-charleston-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/rock-hill-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    // Indiana cities
    { url: 'https://www.thevendinglocator.com/vending-leads/evansville-indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/fort-wayne-indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/south-bend-indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ]

  // Blog posts
  const blogPosts = [
    { url: 'https://www.thevendinglocator.com/blog/vending-machine-business-guide', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: 'https://www.thevendinglocator.com/blog/vending-machine-location-strategies', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: 'https://www.thevendinglocator.com/blog/vending-machine-profitability', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ]

  // Vending company pages
  const vendingCompanyPages = [
    { url: 'https://www.thevendinglocator.com/vending-companies/austin-texas', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  // Checkout pages
  const checkoutPages = [
    { url: 'https://www.thevendinglocator.com/checkout/success', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: 'https://www.thevendinglocator.com/checkout/cancel', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: 'https://www.thevendinglocator.com/checkout/success-preview', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
  ]

  return [
    ...mainPages,
    ...statePages,
    ...cityPages,
    ...blogPosts,
    ...vendingCompanyPages,
    ...checkoutPages,
  ]
}
