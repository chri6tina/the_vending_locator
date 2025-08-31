import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, Dayton Ohio - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, Dayton Ohio. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads Dayton Ohio, vending leads Vending Leads Dayton Ohio, vending locations Vending Leads Dayton Ohio, vending opportunities Vending Leads Dayton Ohio",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/dayton-ohio"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, Dayton Ohio - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Dayton Ohio. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/dayton-ohio",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, Dayton Ohio - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Dayton Ohio. Find qualified businesses for vending machine placement."
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