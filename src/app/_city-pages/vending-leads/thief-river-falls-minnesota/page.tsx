import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Thief River Falls, Minnesota - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Thief River Falls, Minnesota. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Thief River Falls Minnesota, vending leads Thief River Falls Minnesota, vending locations Thief River Falls Minnesota, vending opportunities Thief River Falls Minnesota",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/thief-river-falls-minnesota"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Thief River Falls, Minnesota - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Thief River Falls, Minnesota. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/thief-river-falls-minnesota",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Thief River Falls, Minnesota - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Thief River Falls, Minnesota. Find qualified businesses for vending machine placement."
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
