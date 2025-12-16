import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Gainesville, Georgia - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Gainesville, Georgia. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Gainesville Georgia, vending leads Gainesville Georgia, vending locations Gainesville Georgia, vending opportunities Gainesville Georgia",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/gainesville-georgia"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Gainesville, Georgia - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Gainesville, Georgia. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/gainesville-georgia",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Gainesville, Georgia - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Gainesville, Georgia. Find qualified businesses for vending machine placement."
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
