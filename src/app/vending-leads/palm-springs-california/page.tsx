import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Palm Springs, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Palm Springs, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines palm springs california, vending leads palm springs california, vending locations palm springs california, vending opportunities palm springs california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/palm-springs-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Palm Springs, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Palm Springs, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/palm-springs-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Palm Springs, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Palm Springs, California. Find qualified businesses for vending machine placement."
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
