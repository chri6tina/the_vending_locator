import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, Arizona - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, Arizona. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads Arizona, vending leads Vending Leads Arizona, vending locations Vending Leads Arizona, vending opportunities Vending Leads Arizona",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/arizona"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, Arizona - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Arizona. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/arizona",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, Arizona - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Arizona. Find qualified businesses for vending machine placement."
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