import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, Mesquite Texas - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, Mesquite Texas. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads Mesquite Texas, vending leads Vending Leads Mesquite Texas, vending locations Vending Leads Mesquite Texas, vending opportunities Vending Leads Mesquite Texas",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/mesquite-texas"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, Mesquite Texas - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Mesquite Texas. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/mesquite-texas",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, Mesquite Texas - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Mesquite Texas. Find qualified businesses for vending machine placement."
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