import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Palm Desert, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Palm Desert, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines palm desert california, vending leads palm desert california, vending locations palm desert california, vending opportunities palm desert california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/palm-desert-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Palm Desert, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Palm Desert, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/palm-desert-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Palm Desert, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Palm Desert, California. Find qualified businesses for vending machine placement."
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
