import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Weslaco, Texas - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Weslaco, Texas. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Weslaco Texas, vending leads Weslaco Texas, vending locations Weslaco Texas, vending opportunities Weslaco Texas",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/weslaco-texas"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Weslaco, Texas - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Weslaco, Texas. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/weslaco-texas",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Weslaco, Texas - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Weslaco, Texas. Find qualified businesses for vending machine placement."
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
