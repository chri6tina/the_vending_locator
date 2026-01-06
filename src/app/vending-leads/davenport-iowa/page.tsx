import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Davenport, Iowa - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Davenport, Iowa. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Davenport Iowa, vending leads Davenport Iowa, vending locations Davenport Iowa, vending opportunities Davenport Iowa",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/davenport-iowa"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Davenport, Iowa - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Davenport, Iowa. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/davenport-iowa",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Davenport, Iowa - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Davenport, Iowa. Find qualified businesses for vending machine placement."
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