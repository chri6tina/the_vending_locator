import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, Indianapolis Indiana - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, Indianapolis Indiana. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads Indianapolis Indiana, vending leads Vending Leads Indianapolis Indiana, vending locations Vending Leads Indianapolis Indiana, vending opportunities Vending Leads Indianapolis Indiana",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/indianapolis-indiana"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, Indianapolis Indiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Indianapolis Indiana. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/indianapolis-indiana",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, Indianapolis Indiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Indianapolis Indiana. Find qualified businesses for vending machine placement."
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