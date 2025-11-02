import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Santa Rosa, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Santa Rosa, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines santa rosa california, vending leads santa rosa california, vending locations santa rosa california, vending opportunities santa rosa california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/santa-rosa-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Santa Rosa, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Santa Rosa, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/santa-rosa-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Santa Rosa, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Santa Rosa, California. Find qualified businesses for vending machine placement."
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
