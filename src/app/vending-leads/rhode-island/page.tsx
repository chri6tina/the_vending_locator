import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Rhode Island - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Rhode Island. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Rhode Island, vending leads Rhode Island, vending locations Rhode Island, vending opportunities Rhode Island",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/rhode-island"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Rhode Island - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Rhode Island. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/rhode-island",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Rhode Island - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Rhode Island. Find qualified businesses for vending machine placement."
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