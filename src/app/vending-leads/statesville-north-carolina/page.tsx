import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Statesville, North Carolina - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Statesville, North Carolina. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Statesville North Carolina, vending leads Statesville North Carolina, vending locations Statesville North Carolina, vending opportunities Statesville North Carolina",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/statesville-north-carolina"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Statesville, North Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Statesville, North Carolina. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/statesville-north-carolina",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Statesville, North Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Statesville, North Carolina. Find qualified businesses for vending machine placement."
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
