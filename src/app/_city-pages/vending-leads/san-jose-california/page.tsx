import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in San Jose, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in San Jose, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines San Jose California, vending leads San Jose California, vending locations San Jose California, vending opportunities San Jose California",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/san-jose-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in San Jose, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in San Jose, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/san-jose-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in San Jose, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in San Jose, California. Find qualified businesses for vending machine placement."
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