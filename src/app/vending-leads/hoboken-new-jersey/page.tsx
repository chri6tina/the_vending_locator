import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Hoboken New, Jersey - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Hoboken New, Jersey. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines hoboken new jersey, vending leads hoboken new jersey, vending locations hoboken new jersey, vending opportunities hoboken new jersey",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/hoboken-new-jersey"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Hoboken New, Jersey - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Hoboken New, Jersey. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/hoboken-new-jersey",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Hoboken New, Jersey - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Hoboken New, Jersey. Find qualified businesses for vending machine placement."
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
