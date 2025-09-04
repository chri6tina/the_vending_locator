import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Fall River, Massachusetts - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Fall River, Massachusetts. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Fall River Massachusetts, vending leads Fall River Massachusetts, vending locations Fall River Massachusetts, vending opportunities Fall River Massachusetts",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/fall-river-massachusetts"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Fall River, Massachusetts - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Fall River, Massachusetts. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/fall-river-massachusetts",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Fall River, Massachusetts - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Fall River, Massachusetts. Find qualified businesses for vending machine placement."
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