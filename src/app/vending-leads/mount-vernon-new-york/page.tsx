import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Mount Vernon New, York - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Mount Vernon New, York. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines mount vernon new york, vending leads mount vernon new york, vending locations mount vernon new york, vending opportunities mount vernon new york",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/mount-vernon-new-york"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Mount Vernon New, York - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Mount Vernon New, York. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/mount-vernon-new-york",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Mount Vernon New, York - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Mount Vernon New, York. Find qualified businesses for vending machine placement."
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
