import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in New Haven, Connecticut - The Vending Locator",
  "description": "Get verified vending machine leads and locations in New Haven, Connecticut. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines New Haven Connecticut, vending leads New Haven Connecticut, vending locations New Haven Connecticut, vending opportunities New Haven Connecticut",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/new-haven-connecticut"
  },
  "openGraph": {
    "title": "Vending Machine Leads in New Haven, Connecticut - The Vending Locator",
    "description": "Get verified vending machine leads and locations in New Haven, Connecticut. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/new-haven-connecticut",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in New Haven, Connecticut - The Vending Locator",
    "description": "Get verified vending machine leads and locations in New Haven, Connecticut. Find qualified businesses for vending machine placement."
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