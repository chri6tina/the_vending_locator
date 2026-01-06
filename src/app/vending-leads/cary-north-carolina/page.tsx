import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Cary, North Carolina - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Cary, North Carolina. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Cary North Carolina, vending leads Cary North Carolina, vending locations Cary North Carolina, vending opportunities Cary North Carolina",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/cary-north-carolina"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Cary, North Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Cary, North Carolina. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/cary-north-carolina",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Cary, North Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Cary, North Carolina. Find qualified businesses for vending machine placement."
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

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;


// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export default function CityPage() {
  return <PageClient />
}