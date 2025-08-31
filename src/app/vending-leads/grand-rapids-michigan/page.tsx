import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, Grand Rapids Michigan - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, Grand Rapids Michigan. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads Grand Rapids Michigan, vending leads Vending Leads Grand Rapids Michigan, vending locations Vending Leads Grand Rapids Michigan, vending opportunities Vending Leads Grand Rapids Michigan",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/grand-rapids-michigan"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, Grand Rapids Michigan - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Grand Rapids Michigan. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/grand-rapids-michigan",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, Grand Rapids Michigan - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Grand Rapids Michigan. Find qualified businesses for vending machine placement."
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