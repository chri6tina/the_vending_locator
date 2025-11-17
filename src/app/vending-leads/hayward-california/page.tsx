import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Hayward, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Hayward, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines hayward california, vending leads hayward california, vending locations hayward california, vending opportunities hayward california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/hayward-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Hayward, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Hayward, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/hayward-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Hayward, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Hayward, California. Find qualified businesses for vending machine placement."
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
