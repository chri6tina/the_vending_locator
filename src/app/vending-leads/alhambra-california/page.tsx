import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Alhambra, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Alhambra, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines alhambra california, vending leads alhambra california, vending locations alhambra california, vending opportunities alhambra california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/alhambra-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Alhambra, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Alhambra, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/alhambra-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Alhambra, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Alhambra, California. Find qualified businesses for vending machine placement."
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
