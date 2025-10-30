import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in West Valley City, Utah - The Vending Locator",
  "description": "Get verified vending machine leads and locations in West Valley City, Utah. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines west valley city utah, vending leads west valley city utah, vending locations west valley city utah, vending opportunities west valley city utah",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/west-valley-city-utah"
  },
  "openGraph": {
    "title": "Vending Machine Leads in West Valley City, Utah - The Vending Locator",
    "description": "Get verified vending machine leads and locations in West Valley City, Utah. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/west-valley-city-utah",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in West Valley City, Utah - The Vending Locator",
    "description": "Get verified vending machine leads and locations in West Valley City, Utah. Find qualified businesses for vending machine placement."
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
