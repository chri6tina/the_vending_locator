import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Macomb, Michigan - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Macomb, Michigan. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Macomb Michigan, vending leads Macomb Michigan, vending locations Macomb Michigan, vending opportunities Macomb Michigan",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/macomb-michigan"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Macomb, Michigan - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Macomb, Michigan. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/macomb-michigan",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Macomb, Michigan - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Macomb, Michigan. Find qualified businesses for vending machine placement."
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
