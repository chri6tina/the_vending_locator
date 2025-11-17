import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Pasadena, Texas - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Pasadena, Texas. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines pasadena texas, vending leads pasadena texas, vending locations pasadena texas, vending opportunities pasadena texas",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/pasadena-texas"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Pasadena, Texas - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Pasadena, Texas. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/pasadena-texas",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Pasadena, Texas - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Pasadena, Texas. Find qualified businesses for vending machine placement."
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
