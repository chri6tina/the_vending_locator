import { MetadataRoute } from 'next'
import states from '@/data/states'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  // Main pages
  const mainPages = [
      { url: 'https://www.thevendinglocator.com', lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
  { url: 'https://www.thevendinglocator.com/pricing', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  { url: 'https://www.thevendinglocator.com/services', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/contact', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  { url: 'https://www.thevendinglocator.com/blog', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/hot-leads', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/haha-coolers', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  { url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-jacksonville-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  { url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-alexandria-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.85 },
  { url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-anchorage-alaska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.85 },
  { url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-arlington-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.85 },
  { url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-augusta-maine', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.85 },
  { url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-bangor-maine', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.85 },
  { url: 'https://www.thevendinglocator.com/vending-leads', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  { url: 'https://www.thevendinglocator.com/vending-services', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  
  // Vending Services State Pages
  { url: 'https://www.thevendinglocator.com/vending-services/alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Alabama Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/auburn-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/birmingham-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/dothan-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/huntsville-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/mobile-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/montgomery-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/tuscaloosa-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/alaska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Alaska Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/anchorage-alaska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/fairbanks-alaska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/homer-alaska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/juneau-alaska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/kenai-alaska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/ketchikan-alaska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/kodiak-alaska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/palmer-alaska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/sitka-alaska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/soldotna-alaska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/wasilla-alaska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Arizona Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/chandler-arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/gilbert-arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/glendale-arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/mesa-arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/peoria-arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/phoenix-arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/scottsdale-arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/surprise-arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/tempe-arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/tucson-arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/arkansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Arkansas Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/bentonville-arkansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/conway-arkansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/fayetteville-arkansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/fort-smith-arkansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/jonesboro-arkansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/little-rock-arkansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/north-little-rock-arkansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/pine-bluff-arkansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/rogers-arkansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/springdale-arkansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // California Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/anaheim-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/bakersfield-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/fremont-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/fresno-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/glendale-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/huntington-beach-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/irvine-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/long-beach-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/los-angeles-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/modesto-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/oakland-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/oxnard-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/riverside-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/sacramento-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/san-diego-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/san-bernardino-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/san-francisco-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/san-jose-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/santa-ana-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/stockton-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Colorado Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/arvada-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/aurora-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/boulder-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/colorado-springs-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/denver-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/fort-collins-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/lakewood-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/pueblo-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/thornton-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/westminster-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Connecticut Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/bridgeport-connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/hartford-connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/new-haven-connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/norwalk-connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/stamford-connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/waterbury-connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Delaware Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/bear-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/dover-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/elsmere-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/georgetown-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/middletown-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/milford-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/new-castle-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/newark-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/seaford-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/smyrna-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/wilmington-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Florida Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/boca-raton-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/cape-coral-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/clearwater-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/coral-springs-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/daytona-beach-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/deltona-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/fort-lauderdale-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/fort-myers-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/gainesville-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/hialeah-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/hollywood-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/jacksonville-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/kissimmee-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/lakeland-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/miami-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/miramar-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/naples-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/orlando-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/palm-bay-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/pembroke-pines-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/pensacola-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/pompano-beach-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/port-st-lucie-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/sarasota-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/st-petersburg-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/tallahassee-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/tampa-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/west-palm-beach-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Georgia Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/albany-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/athens-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/atlanta-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/augusta-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/columbus-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/johns-creek-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/macon-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/roswell-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/sandy-springs-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/savannah-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/warner-robins-georgia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/hawaii', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Hawaii Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/hilo-hawaii', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/honolulu-hawaii', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/kailua-hawaii', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Idaho Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/boise-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/caldwell-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/idaho-falls-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/meridian-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/nampa-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/pocatello-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Illinois Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/arlington-heights-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/aurora-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/bloomington-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/champaign-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/chicago-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/cicero-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/decatur-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/elgin-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/evanston-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/joliet-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/naperville-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/peoria-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/rockford-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/schaumburg-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/springfield-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/waukegan-illinois', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Indiana Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/bloomington-indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/carmel-indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/evansville-indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/fishers-indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/fort-wayne-indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/hammond-indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/indianapolis-indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/south-bend-indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/iowa', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Iowa Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/cedar-rapids-iowa', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/council-bluffs-iowa', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/davenport-iowa', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/des-moines-iowa', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/iowa-city-iowa', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/sioux-city-iowa', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/waterloo-iowa', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/kansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Kansas Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/kansas-city-kansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/olathe-kansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/overland-park-kansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/topeka-kansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/wichita-kansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Kentucky Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/bowling-green-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/covington-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/elizabethtown-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/florence-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/georgetown-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/hopkinsville-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/lexington-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/louisville-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/owensboro-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/richmond-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Louisiana Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/alexandria-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/baton-rouge-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/bossier-city-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/kenner-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/lafayette-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/lake-charles-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/monroe-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/new-orleans-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/shreveport-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/maine', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Maine Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/bangor-maine', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/lewiston-maine', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/portland-maine', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/maryland', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Maryland Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/baltimore-maryland', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/columbia-maryland', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/frederick-maryland', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/germantown-maryland', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/glen-burnie-maryland', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/silver-spring-maryland', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/waldorf-maryland', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/massachusetts', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Massachusetts Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/boston-massachusetts', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/cambridge-massachusetts', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/lowell-massachusetts', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/springfield-massachusetts', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/worcester-massachusetts', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Michigan Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/ann-arbor-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/detroit-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/grand-rapids-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/lansing-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/sterling-heights-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/warren-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Minnesota Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/bloomington-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/brooklyn-park-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/duluth-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/eagan-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/lakeville-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/maple-grove-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/minneapolis-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/plymouth-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/rochester-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/saint-paul-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/st-cloud-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/woodbury-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/mississippi', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Mississippi Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/gulfport-mississippi', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/hattiesburg-mississippi', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/jackson-mississippi', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/southaven-mississippi', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/missouri', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Missouri Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/columbia-missouri', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/independence-missouri', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/kansas-city-missouri', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/springfield-missouri', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/st-louis-missouri', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/montana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Montana Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/billings-montana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/bozeman-montana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/butte-montana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/great-falls-montana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/helena-montana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/missoula-montana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/nebraska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Nebraska Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/bellevue-nebraska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/lincoln-nebraska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/omaha-nebraska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/nevada', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Nevada Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/carson-city-nevada', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/henderson-nevada', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/las-vegas-nevada', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/north-las-vegas-nevada', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/reno-nevada', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/sparks-nevada', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // New Hampshire Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/concord-new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/derry-new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/dover-new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/hudson-new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/manchester-new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/merrimack-new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/nashua-new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/rochester-new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/salem-new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/new-jersey', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // New Jersey Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/edison-new-jersey', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/elizabeth-new-jersey', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/jersey-city-new-jersey', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/newark-new-jersey', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/paterson-new-jersey', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/woodbridge-new-jersey', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/new-mexico', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // New Mexico Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/albuquerque-new-mexico', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/las-cruces-new-mexico', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/rio-rancho-new-mexico', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // New York Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/albany-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/buffalo-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/mount-vernon-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/new-rochelle-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/new-york-city-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/rochester-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/schenectady-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/syracuse-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/utica-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/yonkers-new-york', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // North Carolina Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/cary-north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/charlotte-north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/durham-north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/fayetteville-north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/greensboro-north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/raleigh-north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/winston-salem-north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/north-dakota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // North Dakota Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/bismarck-north-dakota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/fargo-north-dakota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Ohio Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/akron-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/cincinnati-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/cleveland-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/columbus-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/dayton-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/parma-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/toledo-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/oklahoma', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Oklahoma Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/oklahoma-city-oklahoma', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/tulsa-oklahoma', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/oregon', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Oregon Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/eugene-oregon', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/portland-oregon', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/salem-oregon', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Pennsylvania Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/allentown-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/bethlehem-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/erie-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/lancaster-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/philadelphia-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/pittsburgh-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/reading-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/scranton-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/rhode-island', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Rhode Island Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/cranston-rhode-island', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/providence-rhode-island', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/warwick-rhode-island', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // South Carolina Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/aiken-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/anderson-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/charleston-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/columbia-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/florence-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/goose-creek-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/greenville-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/hilton-head-island-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/mount-pleasant-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/myrtle-beach-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/north-charleston-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/rock-hill-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/spartanburg-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/summerville-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/south-dakota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // South Dakota Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/rapid-city-south-dakota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/sioux-falls-south-dakota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Tennessee Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/chattanooga-tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/clarksville-tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/franklin-tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/jackson-tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/johnson-city-tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/knoxville-tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/memphis-tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/murfreesboro-tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/nashville-tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Texas Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/amarillo-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/arlington-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/austin-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/beaumont-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/corpus-christi-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/dallas-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/el-paso-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/fort-worth-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/garland-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/grand-prairie-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/frisco-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/mckinney-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/denton-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/carrollton-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/richardson-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/lewisville-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/round-rock-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/league-city-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/sugar-land-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/pearland-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/houston-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/irving-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/killeen-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/laredo-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/lubbock-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/mcallen-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/mesquite-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/plano-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/san-antonio-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/tyler-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/waco-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/utah', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Utah Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/provo-utah', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/salt-lake-city-utah', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/west-valley-city-utah', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/vermont', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Vermont Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/burlington-vermont', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/south-burlington-vermont', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Virginia Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/chesapeake-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/norfolk-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/richmond-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/virginia-beach-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Washington Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/bellevue-washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/everett-washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/kent-washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/seattle-washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/spokane-washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/tacoma-washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/vancouver-washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Washington Dc Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/adams-morgan-washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/capitol-hill-washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/columbia-heights-washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/dupont-circle-washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/foggy-bottom-washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/georgetown-washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/h-street-corridor-washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/navy-yard-washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/shaw-washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/west-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // West Virginia Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/charleston-west-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/huntington-west-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Wisconsin Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/appleton-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/eau-claire-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/green-bay-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/janesville-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/kenosha-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/la-crosse-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/madison-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/milwaukee-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/oshkosh-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/racine-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/sheboygan-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/waukesha-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  { url: 'https://www.thevendinglocator.com/vending-services/wyoming', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  // Wyoming Vending Services Cities
  { url: 'https://www.thevendinglocator.com/vending-services/casper-wyoming', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/cheyenne-wyoming', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/gillette-wyoming', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/laramie-wyoming', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/vending-services/rock-springs-wyoming', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  
  
  { url: 'https://www.thevendinglocator.com/vending-locations', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/guide', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  { url: 'https://www.thevendinglocator.com/faq', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: 'https://www.thevendinglocator.com/terms-of-service', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ]

  // Generate city pages dynamically from states to ensure all new pages are included
  // Only include URLs where a matching page file actually exists
  const leadsDir = path.join(process.cwd(), 'src', 'app', 'vending-leads')
  const generatedCityPages: MetadataRoute.Sitemap = states.flatMap(state =>
    state.cities.map(city => {
      const filePath = path.join(leadsDir, city.slug, 'page.tsx')
      if (!fs.existsSync(filePath)) return null
      return {
        url: `https://www.thevendinglocator.com/vending-leads/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }
    }).filter(Boolean) as MetadataRoute.Sitemap
  )

  // Also include any city pages that exist on the filesystem but aren't listed in states.ts yet
  // This ensures newly added pages are automatically included in the sitemap
  const stateSlugs = new Set(states.map(s => s.slug))
  const filesystemCityPages: MetadataRoute.Sitemap = fs
    .readdirSync(leadsDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter((dir) => {
      // Must have a page.tsx
      if (!fs.existsSync(path.join(leadsDir, dir, 'page.tsx'))) return false
      // Include directories that end with a known state slug (city-state pattern)
      // but exclude pure state directories themselves
      for (const state of states) {
        if (dir !== state.slug && dir.endsWith(state.slug)) {
          return true
        }
      }
      return false
    })
    .map((slug) => ({
      url: `https://www.thevendinglocator.com/vending-leads/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

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

  // Individual city pages - raw list (will be filtered to only include pages that actually exist)
  const cityPages = [
    // Texas cities
    { url: 'https://www.thevendinglocator.com/vending-leads/mansfield-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/grand-prairie-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/el-paso-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/corpus-christi-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lubbock-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/amarillo-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/abilene-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/college-station-texas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Florida cities
    { url: 'https://www.thevendinglocator.com/vending-leads/hialeah-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/cape-coral-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/gainesville-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/clearwater-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/jacksonville-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/miami-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/fort-lauderdale-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/fort-myers-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    // New Florida cities - 2025
    { url: 'https://www.thevendinglocator.com/vending-leads/boca-raton-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/kissimmee-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lakeland-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/pembroke-pines-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/port-st-lucie-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/west-palm-beach-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/pompano-beach-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/hollywood-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/miramar-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/coral-springs-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/daytona-beach-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/pensacola-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/naples-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/deltona-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/palm-bay-florida', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
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
    { url: 'https://www.thevendinglocator.com/vending-leads/fullerton-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/riverside-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/oxnard-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/santa-ana-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/huntington-beach-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/irvine-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/antioch-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/berkeley-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/burbank-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/carlsbad-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/clovis-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/compton-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/concord-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/corona-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/costa-mesa-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/daly-city-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/downey-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/el-monte-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/elk-grove-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/escondido-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/fairfield-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/fontana-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/garden-grove-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/hayward-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/inglewood-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/jurupa-valley-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lakewood-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/moreno-valley-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/murrieta-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/norwalk-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/oceanside-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/ontario-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/orange-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/palmdale-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/pasadena-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/pomona-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/rancho-cucamonga-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/rialto-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/richmond-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/roseville-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/salinas-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/santa-clarita-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/santa-maria-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/simi-valley-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/sunnyvale-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/temecula-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/thousand-oaks-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/torrance-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/vallejo-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/ventura-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/victorville-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/visalia-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/west-covina-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/alhambra-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/carson-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/chico-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/hawthorne-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/redding-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/san-mateo-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/santa-barbara-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/santa-rosa-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/vacaville-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/whittier-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Colorado cities
    { url: 'https://www.thevendinglocator.com/vending-leads/arvada-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/aurora-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/boulder-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/centennial-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/colorado-springs-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/denver-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/fort-collins-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/grand-junction-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/greeley-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lakewood-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/pueblo-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/thornton-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/westminster-colorado', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
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
    { url: 'https://www.thevendinglocator.com/vending-leads/chattanooga-tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/clarksville-tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/murfreesboro-tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/franklin-tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/jackson-tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/johnson-city-tennessee', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/tucson-arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/scottsdale-arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/tempe-arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/peoria-arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/surprise-arizona', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
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
    { url: 'https://www.thevendinglocator.com/vending-leads/bridgeport-connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/danbury-connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/hartford-connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/new-britain-connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/new-haven-connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/norwalk-connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/stamford-connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/waterbury-connecticut', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Michigan cities
    { url: 'https://www.thevendinglocator.com/vending-leads/saginaw-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/flint-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/kalamazoo-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/ann-arbor-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lansing-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/dearborn-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/sterling-heights-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/warren-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/livonia-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/troy-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/westland-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/farmington-hills-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/rochester-hills-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/birmingham-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/kentwood-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/novi-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/pontiac-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/taylor-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/wyoming-michigan', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
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
    { url: 'https://www.thevendinglocator.com/vending-leads/wilmington-north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/high-point-north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Massachusetts cities
    { url: 'https://www.thevendinglocator.com/vending-leads/cambridge-massachusetts', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/fall-river-massachusetts', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lowell-massachusetts', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Idaho cities
    { url: 'https://www.thevendinglocator.com/vending-leads/boise-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/caldwell-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/coeur-dalene-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/idaho-falls-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/meridian-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/nampa-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/pocatello-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/rexburg-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/twin-falls-idaho', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Alabama cities
    { url: 'https://www.thevendinglocator.com/vending-leads/auburn-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/birmingham-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/decatur-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/dothan-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/hoover-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/huntsville-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/mobile-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/montgomery-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/tuscaloosa-alabama', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Louisiana cities
    { url: 'https://www.thevendinglocator.com/vending-leads/new-orleans-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/baton-rouge-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/shreveport-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lafayette-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lake-charles-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/kenner-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/bossier-city-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/monroe-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/metairie-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/alexandria-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/houma-louisiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Kansas cities
    { url: 'https://www.thevendinglocator.com/vending-leads/kansas-city-kansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lawrence-kansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/manhattan-kansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/olathe-kansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/overland-park-kansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/topeka-kansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/wichita-kansas', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Oklahoma cities
    { url: 'https://www.thevendinglocator.com/vending-leads/tulsa-oklahoma', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/oklahoma-city-oklahoma', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/norman-oklahoma', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/broken-arrow-oklahoma', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Minnesota cities - Newly expanded
    { url: 'https://www.thevendinglocator.com/vending-leads/bloomington-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/brooklyn-park-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/duluth-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/eagan-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lakeville-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/maple-grove-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/minneapolis-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/plymouth-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/rochester-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/saint-paul-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/st-cloud-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/woodbury-minnesota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Pennsylvania cities
    { url: 'https://www.thevendinglocator.com/vending-leads/allentown-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/bethlehem-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/erie-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/philadelphia-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/reading-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/scranton-pennsylvania', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Wisconsin cities - Newly expanded
    { url: 'https://www.thevendinglocator.com/vending-leads/appleton-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/eau-claire-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/green-bay-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/janesville-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/kenosha-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/la-crosse-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/madison-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/milwaukee-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/oshkosh-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/racine-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/sheboygan-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/waukesha-wisconsin', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
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
    { url: 'https://www.thevendinglocator.com/vending-leads/san-bernardino-california', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
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
    { url: 'https://www.thevendinglocator.com/vending-leads/renton-washington', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/portland-oregon', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/beaverton-oregon', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/bend-oregon', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/gresham-oregon', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/hillsboro-oregon', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/medford-oregon', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Nevada cities
    { url: 'https://www.thevendinglocator.com/vending-leads/carson-city-nevada', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/enterprise-nevada', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/henderson-nevada', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/las-vegas-nevada', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/north-las-vegas-nevada', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/pahrump-nevada', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/reno-nevada', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/sparks-nevada', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Nebraska cities
    { url: 'https://www.thevendinglocator.com/vending-leads/bellevue-nebraska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/grand-island-nebraska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lincoln-nebraska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/omaha-nebraska', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // New Mexico cities
    { url: 'https://www.thevendinglocator.com/vending-leads/albuquerque-new-mexico', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/farmington-new-mexico', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/las-cruces-new-mexico', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/rio-rancho-new-mexico', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/santa-fe-new-mexico', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Mississippi cities
    { url: 'https://www.thevendinglocator.com/vending-leads/biloxi-mississippi', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/gulfport-mississippi', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/hattiesburg-mississippi', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/jackson-mississippi', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/southaven-mississippi', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/tupelo-mississippi', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Maine cities
    { url: 'https://www.thevendinglocator.com/vending-leads/augusta-maine', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/bangor-maine', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lewiston-maine', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/portland-maine', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
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
    { url: 'https://www.thevendinglocator.com/vending-leads/canton-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/cincinnati-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/cleveland-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/columbus-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/dayton-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lorain-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/parma-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/springfield-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
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
    
    // Rhode Island cities
    { url: 'https://www.thevendinglocator.com/vending-leads/cranston-rhode-island', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/pawtucket-rhode-island', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/providence-rhode-island', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/warwick-rhode-island', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/woonsocket-rhode-island', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    // Virginia cities
    { url: 'https://www.thevendinglocator.com/vending-leads/chesapeake-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/hampton-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/newport-news-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/norfolk-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/richmond-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/virginia-beach-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lynchburg-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/portsmouth-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/roanoke-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/suffolk-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/raleigh-north-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/toledo-ohio', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Washington DC neighborhoods - Newly created
    { url: 'https://www.thevendinglocator.com/vending-leads/adams-morgan-washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/capitol-hill-washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/downtown-washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/dupont-circle-washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/georgetown-washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/logan-circle-washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/navy-yard-washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/shaw-washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/washington-dc', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // South Carolina cities - Newly expanded
    { url: 'https://www.thevendinglocator.com/vending-leads/aiken-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/anderson-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/charleston-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/columbia-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/florence-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/goose-creek-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/greenville-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/hilton-head-island-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/mount-pleasant-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/myrtle-beach-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/north-charleston-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/rock-hill-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/spartanburg-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/summerville-south-carolina', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    // Indiana cities
    { url: 'https://www.thevendinglocator.com/vending-leads/bloomington-indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/carmel-indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/evansville-indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/fort-wayne-indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/gary-indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/hammond-indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/south-bend-indiana', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Delaware cities - Newly created
    { url: 'https://www.thevendinglocator.com/vending-leads/bear-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/dover-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/elsmere-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/georgetown-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/middletown-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/milford-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/newark-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/new-castle-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/seaford-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/smyrna-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/wilmington-delaware', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Kentucky cities - Newly created
    { url: 'https://www.thevendinglocator.com/vending-leads/bowling-green-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/covington-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/florence-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/frankfort-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/georgetown-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/hopkinsville-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/lexington-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/louisville-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/owensboro-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/richmond-kentucky', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Hawaii cities - Newly created
    { url: 'https://www.thevendinglocator.com/vending-leads/hilo-hawaii', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/honolulu-hawaii', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/kailua-hawaii', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/pearl-city-hawaii', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Vermont cities - Newly created
    { url: 'https://www.thevendinglocator.com/vending-leads/burlington-vermont', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/essex-junction-vermont', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/south-burlington-vermont', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // New Hampshire cities - Newly created
    { url: 'https://www.thevendinglocator.com/vending-leads/concord-new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/derry-new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/dover-new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/manchester-new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/merrimack-new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/nashua-new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/portsmouth-new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/rochester-new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/salem-new-hampshire', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // Utah cities - Newly created
    { url: 'https://www.thevendinglocator.com/vending-leads/provo-utah', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/ogden-utah', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/west-valley-city-utah', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/orem-utah', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/west-jordan-utah', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/sandy-utah', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // North Dakota cities - Newly created
    { url: 'https://www.thevendinglocator.com/vending-leads/bismarck-north-dakota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/fargo-north-dakota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/grand-forks-north-dakota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/minot-north-dakota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // South Dakota cities - Newly created
    { url: 'https://www.thevendinglocator.com/vending-leads/aberdeen-south-dakota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/rapid-city-south-dakota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/sioux-falls-south-dakota', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    
    // West Virginia cities - Newly created
    { url: 'https://www.thevendinglocator.com/vending-leads/charleston-west-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://www.thevendinglocator.com/vending-leads/huntington-west-virginia', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ]

  // Filter manual city list to only include URLs with an existing page.tsx
  const filteredCityPages: MetadataRoute.Sitemap = cityPages.filter((item) => {
    const slug = item.url.split('/').pop() as string
    return fs.existsSync(path.join(leadsDir, slug, 'page.tsx'))
  })

  // Dynamic city guides (how-to-start-a-vending-machine-business/[slug])
  // Only include cities where pages actually exist
  const howToStartDir = path.join(process.cwd(), 'src', 'app', 'how-to-start-a-vending-machine-business')
  const cityGuidePages: MetadataRoute.Sitemap = states.flatMap(state =>
    state.cities
      .filter(city => {
        const cityPagePath = path.join(howToStartDir, city.slug, 'page.tsx')
        return fs.existsSync(cityPagePath)
      })
      .map(city => ({
        url: `https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
  )
  
  // Guide index pages
  const guidePages = [
    { url: 'https://www.thevendinglocator.com/guide', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: 'https://www.thevendinglocator.com/guide/how-to-start-a-vending-machine-business', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
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

  // Combine and dedupe by URL to avoid duplicate entries
  const combined: MetadataRoute.Sitemap = [
    ...mainPages,
    ...statePages,
    // Use filtered list so sitemap never references non-existent pages
    ...filteredCityPages,
    ...generatedCityPages,
    ...filesystemCityPages,
    ...guidePages,
    ...cityGuidePages,
    ...blogPosts,
    ...vendingCompanyPages,
    ...checkoutPages,
  ]

  const seen = new Set<string>()
  const deduped = combined.filter(item => {
    if (seen.has(item.url)) return false
    seen.add(item.url)
    return true
  })

  return deduped
}
