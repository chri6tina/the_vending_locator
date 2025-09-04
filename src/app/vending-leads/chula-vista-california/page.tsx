import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Chula Vista, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Chula Vista, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Chula Vista California, vending leads Chula Vista California, vending locations Chula Vista California, vending opportunities Chula Vista California",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/chula-vista-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Chula Vista, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Chula Vista, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/chula-vista-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Chula Vista, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Chula Vista, California. Find qualified businesses for vending machine placement."
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