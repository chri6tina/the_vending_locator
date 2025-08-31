import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, Hampshire - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, Hampshire. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads Hampshire, vending leads Vending Leads Hampshire, vending locations Vending Leads Hampshire, vending opportunities Vending Leads Hampshire",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/hampshire"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, Hampshire - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Hampshire. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/hampshire",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, Hampshire - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Hampshire. Find qualified businesses for vending machine placement."
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