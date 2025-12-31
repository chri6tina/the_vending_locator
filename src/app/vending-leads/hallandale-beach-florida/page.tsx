import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Hallandale Beach, Florida - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Hallandale Beach, Florida. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Hallandale Beach Florida, vending leads Hallandale Beach Florida, vending locations Hallandale Beach Florida, vending opportunities Hallandale Beach Florida",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/hallandale-beach-florida"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Hallandale Beach, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Hallandale Beach, Florida. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/hallandale-beach-florida",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Hallandale Beach, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Hallandale Beach, Florida. Find qualified businesses for vending machine placement."
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
