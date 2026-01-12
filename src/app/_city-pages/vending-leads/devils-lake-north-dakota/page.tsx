import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Devils Lake, North Dakota - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Devils Lake, North Dakota. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Devils Lake North Dakota, vending leads Devils Lake North Dakota, vending locations Devils Lake North Dakota, vending opportunities Devils Lake North Dakota",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/devils-lake-north-dakota"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Devils Lake, North Dakota - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Devils Lake, North Dakota. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/devils-lake-north-dakota",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Devils Lake, North Dakota - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Devils Lake, North Dakota. Find qualified businesses for vending machine placement."
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
