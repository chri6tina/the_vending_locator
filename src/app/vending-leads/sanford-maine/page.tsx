import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Sanford, Maine - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Sanford, Maine. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines sanford maine, vending leads sanford maine, vending locations sanford maine, vending opportunities sanford maine",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/sanford-maine"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Sanford, Maine - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Sanford, Maine. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/sanford-maine",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Sanford, Maine - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Sanford, Maine. Find qualified businesses for vending machine placement."
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
