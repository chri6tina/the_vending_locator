import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, Evanston Illinois - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, Evanston Illinois. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads Evanston Illinois, vending leads Vending Leads Evanston Illinois, vending locations Vending Leads Evanston Illinois, vending opportunities Vending Leads Evanston Illinois",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/evanston-illinois"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, Evanston Illinois - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Evanston Illinois. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/evanston-illinois",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, Evanston Illinois - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Evanston Illinois. Find qualified businesses for vending machine placement."
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