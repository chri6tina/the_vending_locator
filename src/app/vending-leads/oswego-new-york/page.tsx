import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Oswego, New York - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Oswego, New York. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Oswego New York, vending leads Oswego New York, vending locations Oswego New York, vending opportunities Oswego New York",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/oswego-new-york"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Oswego, New York - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Oswego, New York. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/oswego-new-york",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Oswego, New York - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Oswego, New York. Find qualified businesses for vending machine placement."
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
