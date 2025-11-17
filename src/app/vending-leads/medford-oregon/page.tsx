import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Medford, Oregon - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Medford, Oregon. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines medford oregon, vending leads medford oregon, vending locations medford oregon, vending opportunities medford oregon",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/medford-oregon"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Medford, Oregon - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Medford, Oregon. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/medford-oregon",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Medford, Oregon - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Medford, Oregon. Find qualified businesses for vending machine placement."
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
