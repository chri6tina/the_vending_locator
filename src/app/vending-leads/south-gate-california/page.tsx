import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in South Gate, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in South Gate, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines South Gate California, vending leads South Gate California, vending locations South Gate California, vending opportunities South Gate California",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/south-gate-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in South Gate, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in South Gate, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/south-gate-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in South Gate, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in South Gate, California. Find qualified businesses for vending machine placement."
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

export default function CityPage() {
  return <PageClient />
}
