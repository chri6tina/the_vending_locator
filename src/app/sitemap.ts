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
    { url: 'https://www.thevendinglocator.com/vending-leads/delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/rhode-island', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/new-jersey', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/vermont', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/maine', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/alaska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/hawaii', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Additional newly created state pages
    { url: 'https://www.thevendinglocator.com/vending-leads/north-dakota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/south-dakota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/montana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/wyoming', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
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
    
    // California cities
    { url: 'https://www.thevendinglocator.com/vending-leads/fresno-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/long-beach-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/bakersfield-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/anaheim-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Colorado cities
    { url: 'https://www.thevendinglocator.com/vending-leads/aurora-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/arvada-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
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
    
    // South Carolina cities
    // Note: No individual city pages exist for South Carolina yet
    
    // Alaska cities
    // Note: No individual city pages exist for Alaska yet
    
    // Wisconsin cities
    { url: 'https://www.thevendinglocator.com/vending-leads/milwaukee-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/madison-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Missouri cities
    { url: 'https://www.thevendinglocator.com/vending-leads/kansas-city-missouri', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/st-louis-missouri', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/springfield-missouri', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
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
