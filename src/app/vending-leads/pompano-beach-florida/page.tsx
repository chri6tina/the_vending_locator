import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Pompano Beach, Florida - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Pompano Beach, Florida. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Pompano Beach Florida, vending leads Pompano Beach Florida, vending locations Pompano Beach Florida, vending opportunities Pompano Beach Florida",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/pompano-beach-florida"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Pompano Beach, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Pompano Beach, Florida. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/pompano-beach-florida",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Pompano Beach, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Pompano Beach, Florida. Find qualified businesses for vending machine placement."
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