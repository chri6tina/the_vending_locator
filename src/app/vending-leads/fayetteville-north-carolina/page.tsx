import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Fayetteville, North Carolina - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Fayetteville, North Carolina. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Fayetteville North Carolina, vending leads Fayetteville North Carolina, vending locations Fayetteville North Carolina, vending opportunities Fayetteville North Carolina",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/fayetteville-north-carolina"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Fayetteville, North Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Fayetteville, North Carolina. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/fayetteville-north-carolina",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Fayetteville, North Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Fayetteville, North Carolina. Find qualified businesses for vending machine placement."
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