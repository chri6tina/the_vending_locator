import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Daly City, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Daly City, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines daly city california, vending leads daly city california, vending locations daly city california, vending opportunities daly city california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/daly-city-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Daly City, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Daly City, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/daly-city-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Daly City, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Daly City, California. Find qualified businesses for vending machine placement."
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
