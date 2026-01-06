import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Twin Falls, Idaho - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Twin Falls, Idaho. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Twin Falls Idaho, vending leads Twin Falls Idaho, vending locations Twin Falls Idaho, vending opportunities Twin Falls Idaho",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/twin-falls-idaho"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Twin Falls, Idaho - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Twin Falls, Idaho. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/twin-falls-idaho",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Twin Falls, Idaho - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Twin Falls, Idaho. Find qualified businesses for vending machine placement."
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