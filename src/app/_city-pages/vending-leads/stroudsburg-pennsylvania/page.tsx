import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Stroudsburg, Pennsylvania - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Stroudsburg, Pennsylvania. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Stroudsburg Pennsylvania, vending leads Stroudsburg Pennsylvania, vending locations Stroudsburg Pennsylvania, vending opportunities Stroudsburg Pennsylvania",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/stroudsburg-pennsylvania"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Stroudsburg, Pennsylvania - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Stroudsburg, Pennsylvania. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/stroudsburg-pennsylvania",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Stroudsburg, Pennsylvania - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Stroudsburg, Pennsylvania. Find qualified businesses for vending machine placement."
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
