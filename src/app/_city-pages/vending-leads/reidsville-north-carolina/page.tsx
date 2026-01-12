import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Reidsville, North Carolina - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Reidsville, North Carolina. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Reidsville North Carolina, vending leads Reidsville North Carolina, vending locations Reidsville North Carolina, vending opportunities Reidsville North Carolina",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/reidsville-north-carolina"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Reidsville, North Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Reidsville, North Carolina. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/reidsville-north-carolina",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Reidsville, North Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Reidsville, North Carolina. Find qualified businesses for vending machine placement."
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


// Generate on-demand to reduce build memory usage
export default function CityPage() {
  return <PageClient />
}
