import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Westminster, Colorado - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Westminster, Colorado. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Westminster Colorado, vending leads Westminster Colorado, vending locations Westminster Colorado, vending opportunities Westminster Colorado",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/westminster-colorado"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Westminster, Colorado - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Westminster, Colorado. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/westminster-colorado",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Westminster, Colorado - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Westminster, Colorado. Find qualified businesses for vending machine placement."
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