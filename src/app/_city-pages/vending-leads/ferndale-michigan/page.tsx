import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Ferndale, Michigan - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Ferndale, Michigan. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Ferndale Michigan, vending leads Ferndale Michigan, vending locations Ferndale Michigan, vending opportunities Ferndale Michigan",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/ferndale-michigan"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Ferndale, Michigan - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Ferndale, Michigan. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/ferndale-michigan",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Ferndale, Michigan - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Ferndale, Michigan. Find qualified businesses for vending machine placement."
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
