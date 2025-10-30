import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Sandy, Utah - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Sandy, Utah. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines sandy utah, vending leads sandy utah, vending locations sandy utah, vending opportunities sandy utah",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/sandy-utah"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Sandy, Utah - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Sandy, Utah. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/sandy-utah",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Sandy, Utah - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Sandy, Utah. Find qualified businesses for vending machine placement."
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
