import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Canandaigua, New York - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Canandaigua, New York. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Canandaigua New York, vending leads Canandaigua New York, vending locations Canandaigua New York, vending opportunities Canandaigua New York",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/canandaigua-new-york"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Canandaigua, New York - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Canandaigua, New York. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/canandaigua-new-york",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Canandaigua, New York - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Canandaigua, New York. Find qualified businesses for vending machine placement."
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


// Generate on-demand to reduce build memory usage
export default function CityPage() {
  return <PageClient />
}
