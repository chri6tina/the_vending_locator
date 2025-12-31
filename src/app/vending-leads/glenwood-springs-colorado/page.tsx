import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Glenwood Springs, Colorado - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Glenwood Springs, Colorado. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Glenwood Springs Colorado, vending leads Glenwood Springs Colorado, vending locations Glenwood Springs Colorado, vending opportunities Glenwood Springs Colorado",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/glenwood-springs-colorado"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Glenwood Springs, Colorado - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Glenwood Springs, Colorado. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/glenwood-springs-colorado",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Glenwood Springs, Colorado - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Glenwood Springs, Colorado. Find qualified businesses for vending machine placement."
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
