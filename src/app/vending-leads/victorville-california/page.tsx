import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Victorville, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Victorville, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines victorville california, vending leads victorville california, vending locations victorville california, vending opportunities victorville california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/victorville-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Victorville, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Victorville, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/victorville-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Victorville, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Victorville, California. Find qualified businesses for vending machine placement."
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
export const revalidate = 3600;

export default function CityPage() {
  return <PageClient />
}
