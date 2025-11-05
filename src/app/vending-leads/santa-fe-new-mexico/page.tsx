import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Santa Fe, New Mexico - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Santa Fe, New Mexico. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Santa Fe New Mexico, vending leads Santa Fe New Mexico, vending locations Santa Fe New Mexico, vending opportunities Santa Fe New Mexico",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/santa-fe-new-mexico"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Santa Fe, New Mexico - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Santa Fe, New Mexico. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/santa-fe-new-mexico",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Santa Fe, New Mexico - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Santa Fe, New Mexico. Find qualified businesses for vending machine placement."
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