import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Casa Grande, Arizona - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Casa Grande, Arizona. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines casa grande arizona, vending leads casa grande arizona, vending locations casa grande arizona, vending opportunities casa grande arizona",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/casa-grande-arizona"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Casa Grande, Arizona - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Casa Grande, Arizona. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/casa-grande-arizona",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Casa Grande, Arizona - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Casa Grande, Arizona. Find qualified businesses for vending machine placement."
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
