import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Bushnell, Florida - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Bushnell, Florida. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines bushnell florida, vending leads bushnell florida, vending locations bushnell florida, vending opportunities bushnell florida",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/bushnell-florida"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Bushnell, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Bushnell, Florida. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/bushnell-florida",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Bushnell, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Bushnell, Florida. Find qualified businesses for vending machine placement."
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

export const dynamic = 'force-dynamic';
export const revalidate = 0;


export default function CityPage() {
  return <PageClient />
}
