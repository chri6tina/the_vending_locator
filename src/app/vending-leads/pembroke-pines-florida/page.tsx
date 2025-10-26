import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Pembroke Pines, Florida - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Pembroke Pines, Florida. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Pembroke Pines Florida, vending leads Pembroke Pines Florida, vending locations Pembroke Pines Florida, vending opportunities Pembroke Pines Florida",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/pembroke-pines-florida"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Pembroke Pines, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Pembroke Pines, Florida. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/pembroke-pines-florida",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Pembroke Pines, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Pembroke Pines, Florida. Find qualified businesses for vending machine placement."
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