import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Novi, Michigan - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Novi, Michigan. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines novi michigan, vending leads novi michigan, vending locations novi michigan, vending opportunities novi michigan",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/novi-michigan"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Novi, Michigan - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Novi, Michigan. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/novi-michigan",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Novi, Michigan - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Novi, Michigan. Find qualified businesses for vending machine placement."
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

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CityPage() {
  return <PageClient />
}
