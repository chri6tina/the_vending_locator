import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Big Rapids, Michigan - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Big Rapids, Michigan. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Big Rapids Michigan, vending leads Big Rapids Michigan, vending locations Big Rapids Michigan, vending opportunities Big Rapids Michigan",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/big-rapids-michigan"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Big Rapids, Michigan - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Big Rapids, Michigan. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/big-rapids-michigan",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Big Rapids, Michigan - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Big Rapids, Michigan. Find qualified businesses for vending machine placement."
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
