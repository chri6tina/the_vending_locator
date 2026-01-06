import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Thousand Oaks, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Thousand Oaks, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Thousand Oaks California, vending leads Thousand Oaks California, vending locations Thousand Oaks California, vending opportunities Thousand Oaks California",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/thousand-oaks-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Thousand Oaks, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Thousand Oaks, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/thousand-oaks-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Thousand Oaks, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Thousand Oaks, California. Find qualified businesses for vending machine placement."
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
