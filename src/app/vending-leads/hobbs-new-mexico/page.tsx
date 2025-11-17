import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Hobbs New, Mexico - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Hobbs New, Mexico. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines hobbs new mexico, vending leads hobbs new mexico, vending locations hobbs new mexico, vending opportunities hobbs new mexico",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/hobbs-new-mexico"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Hobbs New, Mexico - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Hobbs New, Mexico. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/hobbs-new-mexico",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Hobbs New, Mexico - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Hobbs New, Mexico. Find qualified businesses for vending machine placement."
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
