import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Midwest City, Oklahoma - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Midwest City, Oklahoma. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines midwest city oklahoma, vending leads midwest city oklahoma, vending locations midwest city oklahoma, vending opportunities midwest city oklahoma",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/midwest-city-oklahoma"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Midwest City, Oklahoma - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Midwest City, Oklahoma. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/midwest-city-oklahoma",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Midwest City, Oklahoma - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Midwest City, Oklahoma. Find qualified businesses for vending machine placement."
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
