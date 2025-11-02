import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in San Mateo, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in San Mateo, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines san mateo california, vending leads san mateo california, vending locations san mateo california, vending opportunities san mateo california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/san-mateo-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in San Mateo, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in San Mateo, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/san-mateo-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in San Mateo, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in San Mateo, California. Find qualified businesses for vending machine placement."
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
