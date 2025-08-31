import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, Wisconsin - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, Wisconsin. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads Wisconsin, vending leads Vending Leads Wisconsin, vending locations Vending Leads Wisconsin, vending opportunities Vending Leads Wisconsin",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/wisconsin"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, Wisconsin - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Wisconsin. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/wisconsin",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, Wisconsin - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Wisconsin. Find qualified businesses for vending machine placement."
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