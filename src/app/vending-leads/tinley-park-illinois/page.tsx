import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Tinley Park, Illinois - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Tinley Park, Illinois. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines tinley park illinois, vending leads tinley park illinois, vending locations tinley park illinois, vending opportunities tinley park illinois",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/tinley-park-illinois"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Tinley Park, Illinois - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Tinley Park, Illinois. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/tinley-park-illinois",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Tinley Park, Illinois - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Tinley Park, Illinois. Find qualified businesses for vending machine placement."
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
