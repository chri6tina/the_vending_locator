import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Tequesta, Florida - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Tequesta, Florida. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines tequesta florida, vending leads tequesta florida, vending locations tequesta florida, vending opportunities tequesta florida",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/tequesta-florida"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Tequesta, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Tequesta, Florida. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/tequesta-florida",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Tequesta, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Tequesta, Florida. Find qualified businesses for vending machine placement."
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
