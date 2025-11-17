import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in New Rochelle New, York - The Vending Locator",
  "description": "Get verified vending machine leads and locations in New Rochelle New, York. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines new rochelle new york, vending leads new rochelle new york, vending locations new rochelle new york, vending opportunities new rochelle new york",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/new-rochelle-new-york"
  },
  "openGraph": {
    "title": "Vending Machine Leads in New Rochelle New, York - The Vending Locator",
    "description": "Get verified vending machine leads and locations in New Rochelle New, York. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/new-rochelle-new-york",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in New Rochelle New, York - The Vending Locator",
    "description": "Get verified vending machine leads and locations in New Rochelle New, York. Find qualified businesses for vending machine placement."
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
