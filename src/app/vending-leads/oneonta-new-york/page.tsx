import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Oneonta, New York - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Oneonta, New York. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Oneonta New York, vending leads Oneonta New York, vending locations Oneonta New York, vending opportunities Oneonta New York",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/oneonta-new-york"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Oneonta, New York - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Oneonta, New York. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/oneonta-new-york",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Oneonta, New York - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Oneonta, New York. Find qualified businesses for vending machine placement."
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
