import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Thousand Oaks, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Thousand Oaks, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines thousand oaks california, vending leads thousand oaks california, vending locations thousand oaks california, vending opportunities thousand oaks california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/thousand-oaks-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Thousand Oaks, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Thousand Oaks, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/thousand-oaks-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Thousand Oaks, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Thousand Oaks, California. Find qualified businesses for vending machine placement."
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
