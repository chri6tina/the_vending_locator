import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Sunland Park, New Mexico - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Sunland Park, New Mexico. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Sunland Park New Mexico, vending leads Sunland Park New Mexico, vending locations Sunland Park New Mexico, vending opportunities Sunland Park New Mexico",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/sunland-park-new-mexico"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Sunland Park, New Mexico - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Sunland Park, New Mexico. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/sunland-park-new-mexico",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Sunland Park, New Mexico - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Sunland Park, New Mexico. Find qualified businesses for vending machine placement."
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
