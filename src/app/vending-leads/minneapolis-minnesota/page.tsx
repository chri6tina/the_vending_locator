import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, Minneapolis Minnesota - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, Minneapolis Minnesota. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads Minneapolis Minnesota, vending leads Vending Leads Minneapolis Minnesota, vending locations Vending Leads Minneapolis Minnesota, vending opportunities Vending Leads Minneapolis Minnesota",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/minneapolis-minnesota"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, Minneapolis Minnesota - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Minneapolis Minnesota. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/minneapolis-minnesota",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, Minneapolis Minnesota - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Minneapolis Minnesota. Find qualified businesses for vending machine placement."
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