import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in East Providence Rhode, Island - The Vending Locator",
  "description": "Get verified vending machine leads and locations in East Providence Rhode, Island. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines east providence rhode island, vending leads east providence rhode island, vending locations east providence rhode island, vending opportunities east providence rhode island",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/east-providence-rhode-island"
  },
  "openGraph": {
    "title": "Vending Machine Leads in East Providence Rhode, Island - The Vending Locator",
    "description": "Get verified vending machine leads and locations in East Providence Rhode, Island. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/east-providence-rhode-island",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in East Providence Rhode, Island - The Vending Locator",
    "description": "Get verified vending machine leads and locations in East Providence Rhode, Island. Find qualified businesses for vending machine placement."
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
