import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Royal Palm Beach, Florida - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Royal Palm Beach, Florida. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines royal palm beach florida, vending leads royal palm beach florida, vending locations royal palm beach florida, vending opportunities royal palm beach florida",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/royal-palm-beach-florida"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Royal Palm Beach, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Royal Palm Beach, Florida. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/royal-palm-beach-florida",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Royal Palm Beach, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Royal Palm Beach, Florida. Find qualified businesses for vending machine placement."
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

export default function CityPage() {
  return <PageClient />
}
