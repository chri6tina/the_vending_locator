import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Palm Beach Gardens, Florida - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Palm Beach Gardens, Florida. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines palm beach gardens florida, vending leads palm beach gardens florida, vending locations palm beach gardens florida, vending opportunities palm beach gardens florida",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/palm-beach-gardens-florida"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Palm Beach Gardens, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Palm Beach Gardens, Florida. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/palm-beach-gardens-florida",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Palm Beach Gardens, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Palm Beach Gardens, Florida. Find qualified businesses for vending machine placement."
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
