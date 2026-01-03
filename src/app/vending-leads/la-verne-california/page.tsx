import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in La Verne, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in La Verne, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines La Verne California, vending leads La Verne California, vending locations La Verne California, vending opportunities La Verne California",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/la-verne-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in La Verne, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in La Verne, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/la-verne-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in La Verne, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in La Verne, California. Find qualified businesses for vending machine placement."
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
