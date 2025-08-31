import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, York Pennsylvania - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, York Pennsylvania. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads York Pennsylvania, vending leads Vending Leads York Pennsylvania, vending locations Vending Leads York Pennsylvania, vending opportunities Vending Leads York Pennsylvania",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/york-pennsylvania"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, York Pennsylvania - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, York Pennsylvania. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/york-pennsylvania",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, York Pennsylvania - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, York Pennsylvania. Find qualified businesses for vending machine placement."
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