import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Mcallen, Texas - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Mcallen, Texas. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Mcallen Texas, vending leads Mcallen Texas, vending locations Mcallen Texas, vending opportunities Mcallen Texas",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/mcallen-texas"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Mcallen, Texas - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Mcallen, Texas. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/mcallen-texas",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Mcallen, Texas - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Mcallen, Texas. Find qualified businesses for vending machine placement."
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