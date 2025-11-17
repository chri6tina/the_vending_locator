import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Cedar Rapids, Iowa - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Cedar Rapids, Iowa. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Cedar Rapids Iowa, vending leads Cedar Rapids Iowa, vending locations Cedar Rapids Iowa, vending opportunities Cedar Rapids Iowa",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/cedar-rapids-iowa"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Cedar Rapids, Iowa - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Cedar Rapids, Iowa. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/cedar-rapids-iowa",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Cedar Rapids, Iowa - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Cedar Rapids, Iowa. Find qualified businesses for vending machine placement."
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

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CityPage() {
  return <PageClient />
}