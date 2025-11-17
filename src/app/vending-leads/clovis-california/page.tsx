import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Clovis, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Clovis, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines clovis california, vending leads clovis california, vending locations clovis california, vending opportunities clovis california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/clovis-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Clovis, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Clovis, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/clovis-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Clovis, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Clovis, California. Find qualified businesses for vending machine placement."
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

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CityPage() {
  return <PageClient />
}
