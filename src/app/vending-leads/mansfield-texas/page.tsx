import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, Mansfield Texas - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, Mansfield Texas. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads Mansfield Texas, vending leads Vending Leads Mansfield Texas, vending locations Vending Leads Mansfield Texas, vending opportunities Vending Leads Mansfield Texas",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/mansfield-texas"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, Mansfield Texas - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Mansfield Texas. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/mansfield-texas",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, Mansfield Texas - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Mansfield Texas. Find qualified businesses for vending machine placement."
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