import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in San Leandro, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in San Leandro, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines San Leandro California, vending leads San Leandro California, vending locations San Leandro California, vending opportunities San Leandro California",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/san-leandro-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in San Leandro, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in San Leandro, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/san-leandro-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in San Leandro, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in San Leandro, California. Find qualified businesses for vending machine placement."
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
