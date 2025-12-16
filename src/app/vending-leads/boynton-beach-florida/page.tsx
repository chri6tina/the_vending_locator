import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Boynton Beach, Florida - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Boynton Beach, Florida. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Boynton Beach Florida, vending leads Boynton Beach Florida, vending locations Boynton Beach Florida, vending opportunities Boynton Beach Florida",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/boynton-beach-florida"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Boynton Beach, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Boynton Beach, Florida. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/boynton-beach-florida",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Boynton Beach, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Boynton Beach, Florida. Find qualified businesses for vending machine placement."
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
