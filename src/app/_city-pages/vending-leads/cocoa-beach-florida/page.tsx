import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Cocoa Beach, Florida - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Cocoa Beach, Florida. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines cocoa beach florida, vending leads cocoa beach florida, vending locations cocoa beach florida, vending opportunities cocoa beach florida",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/cocoa-beach-florida"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Cocoa Beach, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Cocoa Beach, Florida. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/cocoa-beach-florida",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Cocoa Beach, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Cocoa Beach, Florida. Find qualified businesses for vending machine placement."
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
