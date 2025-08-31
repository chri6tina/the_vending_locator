import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, South Carolina - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, South Carolina. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads South Carolina, vending leads Vending Leads South Carolina, vending locations Vending Leads South Carolina, vending opportunities Vending Leads South Carolina",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/south-carolina"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, South Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, South Carolina. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/south-carolina",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, South Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, South Carolina. Find qualified businesses for vending machine placement."
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