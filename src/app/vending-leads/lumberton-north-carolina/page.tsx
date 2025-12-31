import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Lumberton, North Carolina - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Lumberton, North Carolina. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Lumberton North Carolina, vending leads Lumberton North Carolina, vending locations Lumberton North Carolina, vending opportunities Lumberton North Carolina",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/lumberton-north-carolina"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Lumberton, North Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Lumberton, North Carolina. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/lumberton-north-carolina",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Lumberton, North Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Lumberton, North Carolina. Find qualified businesses for vending machine placement."
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
