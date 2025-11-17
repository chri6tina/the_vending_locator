import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Mililani, Hawaii - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Mililani, Hawaii. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines mililani hawaii, vending leads mililani hawaii, vending locations mililani hawaii, vending opportunities mililani hawaii",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/mililani-hawaii"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Mililani, Hawaii - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Mililani, Hawaii. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/mililani-hawaii",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Mililani, Hawaii - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Mililani, Hawaii. Find qualified businesses for vending machine placement."
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
