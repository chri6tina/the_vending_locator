import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Artesia, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Artesia, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines artesia california, vending leads artesia california, vending locations artesia california, vending opportunities artesia california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/artesia-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Artesia, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Artesia, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/artesia-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Artesia, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Artesia, California. Find qualified businesses for vending machine placement."
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

export const dynamic = 'force-dynamic';
export const revalidate = 0;


export default function CityPage() {
  return <PageClient />
}
