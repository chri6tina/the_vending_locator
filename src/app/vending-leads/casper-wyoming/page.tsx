import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Casper, Wyoming - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Casper, Wyoming. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Casper Wyoming, vending leads Casper Wyoming, vending locations Casper Wyoming, vending opportunities Casper Wyoming",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/casper-wyoming"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Casper, Wyoming - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Casper, Wyoming. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/casper-wyoming",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Casper, Wyoming - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Casper, Wyoming. Find qualified businesses for vending machine placement."
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