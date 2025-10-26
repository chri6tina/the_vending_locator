import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Coral Springs, Florida - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Coral Springs, Florida. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Coral Springs Florida, vending leads Coral Springs Florida, vending locations Coral Springs Florida, vending opportunities Coral Springs Florida",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/coral-springs-florida"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Coral Springs, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Coral Springs, Florida. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/coral-springs-florida",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Coral Springs, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Coral Springs, Florida. Find qualified businesses for vending machine placement."
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