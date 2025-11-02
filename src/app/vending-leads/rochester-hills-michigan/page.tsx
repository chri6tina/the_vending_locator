import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Rochester Hills, Michigan - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Rochester Hills, Michigan. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines rochester hills michigan, vending leads rochester hills michigan, vending locations rochester hills michigan, vending opportunities rochester hills michigan",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/rochester-hills-michigan"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Rochester Hills, Michigan - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Rochester Hills, Michigan. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/rochester-hills-michigan",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Rochester Hills, Michigan - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Rochester Hills, Michigan. Find qualified businesses for vending machine placement."
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
