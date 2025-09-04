import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in San Diego, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in San Diego, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines San Diego California, vending leads San Diego California, vending locations San Diego California, vending opportunities San Diego California",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/san-diego-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in San Diego, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in San Diego, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/san-diego-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in San Diego, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in San Diego, California. Find qualified businesses for vending machine placement."
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