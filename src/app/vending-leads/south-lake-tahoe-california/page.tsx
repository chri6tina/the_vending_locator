import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in South Lake Tahoe, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in South Lake Tahoe, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines South Lake Tahoe California, vending leads South Lake Tahoe California, vending locations South Lake Tahoe California, vending opportunities South Lake Tahoe California",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/south-lake-tahoe-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in South Lake Tahoe, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in South Lake Tahoe, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/south-lake-tahoe-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in South Lake Tahoe, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in South Lake Tahoe, California. Find qualified businesses for vending machine placement."
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

export default function CityPage() {
  return <PageClient />
}
