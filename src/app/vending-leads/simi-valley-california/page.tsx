import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Simi Valley, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Simi Valley, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines simi valley california, vending leads simi valley california, vending locations simi valley california, vending opportunities simi valley california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/simi-valley-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Simi Valley, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Simi Valley, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/simi-valley-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Simi Valley, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Simi Valley, California. Find qualified businesses for vending machine placement."
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
