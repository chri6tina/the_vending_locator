import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Gaithersburg, Maryland - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Gaithersburg, Maryland. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Gaithersburg Maryland, vending leads Gaithersburg Maryland, vending locations Gaithersburg Maryland, vending opportunities Gaithersburg Maryland",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/gaithersburg-maryland"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Gaithersburg, Maryland - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Gaithersburg, Maryland. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/gaithersburg-maryland",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Gaithersburg, Maryland - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Gaithersburg, Maryland. Find qualified businesses for vending machine placement."
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