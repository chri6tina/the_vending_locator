import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Palmdale, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Palmdale, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines palmdale california, vending leads palmdale california, vending locations palmdale california, vending opportunities palmdale california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/palmdale-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Palmdale, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Palmdale, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/palmdale-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Palmdale, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Palmdale, California. Find qualified businesses for vending machine placement."
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
