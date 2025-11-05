import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Whittier, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Whittier, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines whittier california, vending leads whittier california, vending locations whittier california, vending opportunities whittier california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/whittier-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Whittier, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Whittier, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/whittier-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Whittier, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Whittier, California. Find qualified businesses for vending machine placement."
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
