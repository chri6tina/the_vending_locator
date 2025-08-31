import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, Gillette Wyoming - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, Gillette Wyoming. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads Gillette Wyoming, vending leads Vending Leads Gillette Wyoming, vending locations Vending Leads Gillette Wyoming, vending opportunities Vending Leads Gillette Wyoming",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/gillette-wyoming"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, Gillette Wyoming - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Gillette Wyoming. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/gillette-wyoming",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, Gillette Wyoming - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Gillette Wyoming. Find qualified businesses for vending machine placement."
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