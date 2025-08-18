import { Metadata } from 'next'

interface CityPageSEOProps {
  city: string
  state: string
  stateAbbr: string
  population?: string
  businessCount?: string
  industries: string[]
  description: string
}

export function generateCityMetadata({
  city,
  state,
  stateAbbr,
  population,
  businessCount,
  industries,
  description
}: CityPageSEOProps): Metadata {
  const cityState = `${city}, ${stateAbbr}`
  const fullState = `${city}, ${state}`
  
  const title = `Vending Machine Leads in ${cityState} | ${state} Vending Locations`
  const metaDescription = `Get qualified vending machine leads in ${cityState}. Access verified ${city} business locations with contact information. ${description}`
  
  const keywords = [
    `${city} vending`,
    `${city} vending machine leads`,
    `${city} vending locations`,
    `${state} vending`,
    `${state} vending opportunities`,
    'vending machine business',
    'vending machine placement',
    'vending leads',
    'vending opportunities',
    ...industries.map(industry => `${city} ${industry}`),
    `${city} business locations`,
    `${city} commercial real estate`
  ].join(', ')

  return {
    title,
    description: metaDescription,
    keywords,
    openGraph: {
      title,
      description: metaDescription,
              url: `https://www.thevendinglocator.com/vending-leads/${city.toLowerCase().replace(/\s+/g, '-')}-${state.toLowerCase().replace(/\s+/g, '-')}`,
      siteName: 'The Vending Locator',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `/images/cities/${city.toLowerCase().replace(/\s+/g, '-')}-${stateAbbr.toLowerCase()}.jpg`,
          width: 1200,
          height: 630,
          alt: `Vending Machine Opportunities in ${cityState}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metaDescription,
      images: [`/images/cities/${city.toLowerCase().replace(/\s+/g, '-')}-${stateAbbr.toLowerCase()}.jpg`],
    },
    alternates: {
      canonical: `/vending-leads/${city.toLowerCase().replace(/\s+/g, '-')}-${state.toLowerCase().replace(/\s+/g, '-')}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generateCityStructuredData({
  city,
  state,
  stateAbbr,
  population,
  businessCount,
  industries,
  description
}: CityPageSEOProps) {
  const cityState = `${city}, ${stateAbbr}`
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Vending Machine Leads in ${cityState}`,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "The Vending Locator",
              "url": "https://www.thevendinglocator.com"
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "addressRegion": stateAbbr,
      "addressCountry": "US"
    },
    "serviceType": "Vending Machine Location Leads",
    "category": "Business Services",
    "offers": {
      "@type": "Offer",
      "description": `Access to qualified vending machine locations in ${cityState}`,
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "mainEntity": {
      "@type": "Place",
      "name": city,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": stateAbbr,
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": getCityCoordinates(city, stateAbbr).lat,
        "longitude": getCityCoordinates(city, stateAbbr).lng
      },
      "description": `${city} offers excellent opportunities for vending machine placement with ${businessCount || 'thousands of'} businesses across ${industries.join(', ')} industries.`
    }
  }
}

// Helper function to get city coordinates (you can expand this)
function getCityCoordinates(city: string, stateAbbr: string) {
  const coordinates: Record<string, { lat: number; lng: number }> = {
    // Major cities
    'New York': { lat: 40.7128, lng: -74.0060 },
    'Los Angeles': { lat: 34.0522, lng: -118.2437 },
    'Chicago': { lat: 41.8781, lng: -87.6298 },
    'Houston': { lat: 29.7604, lng: -95.3698 },
    'Phoenix': { lat: 33.4484, lng: -112.0740 },
    'Philadelphia': { lat: 39.9526, lng: -75.1652 },
    'San Antonio': { lat: 29.4241, lng: -98.4936 },
    'San Diego': { lat: 32.7157, lng: -117.1611 },
    'Dallas': { lat: 32.7767, lng: -96.7970 },
    'San Jose': { lat: 37.3382, lng: -121.8863 },
    'Austin': { lat: 30.2672, lng: -97.7431 },
    'Jacksonville': { lat: 30.3322, lng: -81.6557 },
    'Fort Worth': { lat: 32.7555, lng: -97.3308 },
    'Columbus': { lat: 39.9612, lng: -82.9988 },
    'Charlotte': { lat: 35.2271, lng: -80.8431 },
    'San Francisco': { lat: 37.7749, lng: -122.4194 },
    'Indianapolis': { lat: 39.7684, lng: -86.1581 },
    'Seattle': { lat: 47.6062, lng: -122.3321 },
    'Denver': { lat: 39.7392, lng: -104.9903 },
    'Washington': { lat: 38.9072, lng: -77.0369 },
    'Boston': { lat: 42.3601, lng: -71.0589 },
    'El Paso': { lat: 31.7619, lng: -106.4850 },
    'Nashville': { lat: 36.1627, lng: -86.7816 },
    'Detroit': { lat: 42.3314, lng: -83.0458 },
    'Oklahoma City': { lat: 35.4676, lng: -97.5164 },
    'Portland': { lat: 45.5152, lng: -122.6784 },
    'Las Vegas': { lat: 36.1699, lng: -115.1398 },
    'Memphis': { lat: 35.1495, lng: -90.0490 },
    'Louisville': { lat: 38.2527, lng: -85.7585 },
    'Baltimore': { lat: 39.2904, lng: -76.6122 },
    'Milwaukee': { lat: 43.0389, lng: -87.9065 },
    'Albuquerque': { lat: 35.0844, lng: -106.6504 },
    'Tucson': { lat: 32.2226, lng: -110.9747 },
    'Fresno': { lat: 36.7378, lng: -119.7871 },
    'Sacramento': { lat: 38.5816, lng: -121.4944 },
    'Mesa': { lat: 33.4152, lng: -111.8315 },
    'Kansas City': { lat: 39.0997, lng: -94.5786 },
    'Atlanta': { lat: 33.7490, lng: -84.3880 },
    'Long Beach': { lat: 33.7701, lng: -118.1937 },
    'Colorado Springs': { lat: 38.8339, lng: -104.8214 },
    'Raleigh': { lat: 35.7796, lng: -78.6382 },
    'Miami': { lat: 25.7617, lng: -80.1918 },
    'Virginia Beach': { lat: 36.8529, lng: -75.9780 },
    'Omaha': { lat: 41.2565, lng: -95.9345 },
    'Oakland': { lat: 37.8044, lng: -122.2711 },
    'Minneapolis': { lat: 44.9778, lng: -93.2650 },
    'Tampa': { lat: 27.9506, lng: -82.4572 },
    'Tulsa': { lat: 36.1540, lng: -95.9928 },
    'Arlington': { lat: 32.7357, lng: -97.1081 },
    'New Orleans': { lat: 29.9511, lng: -90.0715 },
    'Wichita': { lat: 37.6872, lng: -97.3301 },
    'Cleveland': { lat: 41.4993, lng: -81.6944 },
    'Bakersfield': { lat: 35.3733, lng: -119.0187 },
    'Aurora': { lat: 39.7294, lng: -104.8319 },
    'Anaheim': { lat: 33.8366, lng: -117.9143 },
    'Honolulu': { lat: 21.3099, lng: -157.8581 },
    'Santa Ana': { lat: 33.7455, lng: -117.8677 },
    'Corpus Christi': { lat: 27.8006, lng: -97.3964 },
    'Riverside': { lat: 33.9533, lng: -117.3962 },
    'Lexington': { lat: 38.0406, lng: -84.5037 },
    'Stockton': { lat: 37.9577, lng: -121.2908 },
    'Henderson': { lat: 36.0395, lng: -114.9817 },
    'Saint Paul': { lat: 44.9537, lng: -93.0900 },
    'St. Louis': { lat: 38.6270, lng: -90.1994 },
    'Cincinnati': { lat: 39.1031, lng: -84.5120 },
    'Pittsburgh': { lat: 40.4406, lng: -79.9959 },
    'Anchorage': { lat: 61.2181, lng: -149.9003 },
    'Greensboro': { lat: 36.0726, lng: -79.7920 },
    'Plano': { lat: 33.0198, lng: -96.6989 },
    'Newark': { lat: 40.7357, lng: -74.1724 },
    'Durham': { lat: 35.9940, lng: -78.8986 },
    'Chula Vista': { lat: 32.6401, lng: -117.0842 },
    'Toledo': { lat: 41.6528, lng: -83.5379 },
    'Fort Wayne': { lat: 41.0793, lng: -85.1394 },
    'St. Petersburg': { lat: 27.7731, lng: -82.6400 },
    'Laredo': { lat: 27.5064, lng: -99.5075 },
    'Jersey City': { lat: 40.7178, lng: -74.0431 },
    'Chandler': { lat: 33.3062, lng: -111.8413 },
    'Madison': { lat: 43.0731, lng: -89.4012 },
    'Lubbock': { lat: 33.5779, lng: -101.8552 },
    'Scottsdale': { lat: 33.4942, lng: -111.9261 },
    'Reno': { lat: 39.5296, lng: -119.8138 },
    'Buffalo': { lat: 42.8864, lng: -78.8784 },
    'Gilbert': { lat: 33.3528, lng: -111.7890 },
    'Glendale': { lat: 33.5387, lng: -112.1860 },
    'North Las Vegas': { lat: 36.1989, lng: -115.1175 },
    'Winston-Salem': { lat: 36.0999, lng: -80.2442 },
    'Chesapeake': { lat: 36.7682, lng: -76.2875 },
    'Norfolk': { lat: 36.8508, lng: -76.2859 },
    'Fremont': { lat: 37.5485, lng: -121.9886 },
    'Garland': { lat: 32.9126, lng: -96.6389 },
    'Irving': { lat: 32.8147, lng: -96.9489 },
    'Hialeah': { lat: 25.8576, lng: -80.2781 },
    'Fayetteville': { lat: 35.0527, lng: -78.8784 },
    'Richmond': { lat: 37.5407, lng: -77.4360 },
    'Baton Rouge': { lat: 30.4515, lng: -91.1871 },
    'Boise': { lat: 43.6150, lng: -116.2023 },
    'Spokane': { lat: 47.6588, lng: -117.4260 },
    'Birmingham': { lat: 33.5207, lng: -86.8025 },
    'Modesto': { lat: 37.6391, lng: -120.9969 },
    'Des Moines': { lat: 41.5868, lng: -93.6250 },
    'Rochester': { lat: 44.0121, lng: -92.4802 },
    'Tacoma': { lat: 47.2529, lng: -122.4443 },
    'Fontana': { lat: 34.0922, lng: -117.4350 },
    'Oxnard': { lat: 34.1975, lng: -119.1771 },
    'Moreno Valley': { lat: 33.9425, lng: -117.2297 },
    'Frisco': { lat: 33.1507, lng: -96.8236 },
    'Huntington Beach': { lat: 33.6595, lng: -118.0068 },
    'Yonkers': { lat: 40.9312, lng: -73.8987 },
    'Montgomery': { lat: 32.3792, lng: -86.3077 },
    'Akron': { lat: 41.0814, lng: -81.5190 },
    'Little Rock': { lat: 34.7465, lng: -92.2896 },
    'Grand Rapids': { lat: 42.9634, lng: -85.6681 },
    'Salt Lake City': { lat: 40.7608, lng: -111.8910 },
    'Tallahassee': { lat: 30.4383, lng: -84.2807 },
    'Huntsville': { lat: 34.7304, lng: -86.5861 },
    'Worcester': { lat: 42.2626, lng: -71.8023 },
    'Knoxville': { lat: 35.9606, lng: -83.9207 },
    'Springfield': { lat: 37.2090, lng: -93.2923 },
    'Grand Prairie': { lat: 32.7459, lng: -96.9978 },
    'Brownsville': { lat: 25.9018, lng: -97.4975 },
    'Overland Park': { lat: 38.9822, lng: -94.6708 },
    'Santa Clarita': { lat: 34.3917, lng: -118.5426 },
    'Providence': { lat: 41.8240, lng: -71.4128 },
    'Garden Grove': { lat: 33.7739, lng: -117.9414 },
    'Boulder': { lat: 40.0150, lng: -105.2705 }
  }
  
  const key = `${city}, ${stateAbbr}`
  return coordinates[key] || { lat: 39.8283, lng: -98.5795 } // Default to US center
}
