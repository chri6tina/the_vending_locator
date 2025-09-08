import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Dover, Delaware - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Dover, Delaware. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Dover Delaware, vending leads Dover Delaware, vending locations Dover Delaware, vending opportunities Dover Delaware",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/dover-delaware"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Dover, Delaware - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Dover, Delaware. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/dover-delaware",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Dover, Delaware - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Dover, Delaware. Find qualified businesses for vending machine placement."
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

