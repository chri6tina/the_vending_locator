import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Muncie, Indiana - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Muncie, Indiana. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines muncie indiana, vending leads muncie indiana, vending locations muncie indiana, vending opportunities muncie indiana",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/muncie-indiana"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Muncie, Indiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Muncie, Indiana. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/muncie-indiana",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Muncie, Indiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Muncie, Indiana. Find qualified businesses for vending machine placement."
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
