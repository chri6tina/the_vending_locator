import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Tampa, Florida - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Tampa, Florida. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Tampa Florida, vending leads Tampa Florida, vending locations Tampa Florida, vending opportunities Tampa Florida",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/tampa-florida"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Tampa, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Tampa, Florida. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/tampa-florida",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Tampa, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Tampa, Florida. Find qualified businesses for vending machine placement."
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