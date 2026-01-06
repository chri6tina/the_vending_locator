import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Eureka, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Eureka, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Eureka California, vending leads Eureka California, vending locations Eureka California, vending opportunities Eureka California",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/eureka-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Eureka, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Eureka, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/eureka-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Eureka, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Eureka, California. Find qualified businesses for vending machine placement."
  },
  "robots": {
    "index": true,
    "follow": true,
    "googleBot": {
      "index": true,
      "follow": true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
    }
}

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;


// Generate on-demand to reduce build memory usage
export default function CityPage() {
  return <PageClient />
}
