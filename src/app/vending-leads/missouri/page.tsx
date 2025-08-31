import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, Missouri - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, Missouri. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads Missouri, vending leads Vending Leads Missouri, vending locations Vending Leads Missouri, vending opportunities Vending Leads Missouri",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/missouri"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, Missouri - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Missouri. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/missouri",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, Missouri - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Missouri. Find qualified businesses for vending machine placement."
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