import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in St. Helena, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in St. Helena, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines St. Helena California, vending leads St. Helena California, vending locations St. Helena California, vending opportunities St. Helena California",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/st-helena-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in St. Helena, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in St. Helena, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/st-helena-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in St. Helena, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in St. Helena, California. Find qualified businesses for vending machine placement."
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
