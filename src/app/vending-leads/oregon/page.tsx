import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, Oregon - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, Oregon. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads Oregon, vending leads Vending Leads Oregon, vending locations Vending Leads Oregon, vending opportunities Vending Leads Oregon",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/oregon"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, Oregon - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Oregon. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/oregon",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, Oregon - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Oregon. Find qualified businesses for vending machine placement."
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