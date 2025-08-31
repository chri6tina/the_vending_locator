import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, New Jersey - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, New Jersey. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads New Jersey, vending leads Vending Leads New Jersey, vending locations Vending Leads New Jersey, vending opportunities Vending Leads New Jersey",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/new-jersey"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, New Jersey - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, New Jersey. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/new-jersey",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, New Jersey - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, New Jersey. Find qualified businesses for vending machine placement."
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