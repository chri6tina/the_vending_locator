import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Lincoln, Nebraska - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Lincoln, Nebraska. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Lincoln Nebraska, vending leads Lincoln Nebraska, vending locations Lincoln Nebraska, vending opportunities Lincoln Nebraska",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/lincoln-nebraska"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Lincoln, Nebraska - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Lincoln, Nebraska. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/lincoln-nebraska",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Lincoln, Nebraska - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Lincoln, Nebraska. Find qualified businesses for vending machine placement."
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