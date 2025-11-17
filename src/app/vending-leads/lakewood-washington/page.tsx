import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Lakewood, Washington - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Lakewood, Washington. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines lakewood washington, vending leads lakewood washington, vending locations lakewood washington, vending opportunities lakewood washington",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/lakewood-washington"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Lakewood, Washington - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Lakewood, Washington. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/lakewood-washington",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Lakewood, Washington - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Lakewood, Washington. Find qualified businesses for vending machine placement."
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
