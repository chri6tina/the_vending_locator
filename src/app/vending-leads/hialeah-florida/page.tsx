import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Vending Leads, Hialeah Florida - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Vending Leads, Hialeah Florida. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Vending Leads Hialeah Florida, vending leads Vending Leads Hialeah Florida, vending locations Vending Leads Hialeah Florida, vending opportunities Vending Leads Hialeah Florida",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/hialeah-florida"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Vending Leads, Hialeah Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Hialeah Florida. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/hialeah-florida",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Vending Leads, Hialeah Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Vending Leads, Hialeah Florida. Find qualified businesses for vending machine placement."
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