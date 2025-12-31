import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Johnstown, Pennsylvania - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Johnstown, Pennsylvania. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Johnstown Pennsylvania, vending leads Johnstown Pennsylvania, vending locations Johnstown Pennsylvania, vending opportunities Johnstown Pennsylvania",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/johnstown-pennsylvania"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Johnstown, Pennsylvania - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Johnstown, Pennsylvania. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/johnstown-pennsylvania",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Johnstown, Pennsylvania - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Johnstown, Pennsylvania. Find qualified businesses for vending machine placement."
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
