import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Tigard, Oregon - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Tigard, Oregon. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines tigard oregon, vending leads tigard oregon, vending locations tigard oregon, vending opportunities tigard oregon",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/tigard-oregon"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Tigard, Oregon - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Tigard, Oregon. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/tigard-oregon",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Tigard, Oregon - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Tigard, Oregon. Find qualified businesses for vending machine placement."
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
