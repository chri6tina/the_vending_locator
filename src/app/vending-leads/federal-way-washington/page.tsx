import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Federal Way, Washington - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Federal Way, Washington. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines federal way washington, vending leads federal way washington, vending locations federal way washington, vending opportunities federal way washington",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/federal-way-washington"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Federal Way, Washington - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Federal Way, Washington. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/federal-way-washington",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Federal Way, Washington - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Federal Way, Washington. Find qualified businesses for vending machine placement."
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
