import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Roanoke, Virginia - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Roanoke, Virginia. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines roanoke virginia, vending leads roanoke virginia, vending locations roanoke virginia, vending opportunities roanoke virginia",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/roanoke-virginia"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Roanoke, Virginia - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Roanoke, Virginia. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/roanoke-virginia",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Roanoke, Virginia - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Roanoke, Virginia. Find qualified businesses for vending machine placement."
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

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CityPage() {
  return <PageClient />
}
