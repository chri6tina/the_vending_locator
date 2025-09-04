import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Gainesville, Florida - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Gainesville, Florida. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Gainesville Florida, vending leads Gainesville Florida, vending locations Gainesville Florida, vending opportunities Gainesville Florida",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/gainesville-florida"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Gainesville, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Gainesville, Florida. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/gainesville-florida",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Gainesville, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Gainesville, Florida. Find qualified businesses for vending machine placement."
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