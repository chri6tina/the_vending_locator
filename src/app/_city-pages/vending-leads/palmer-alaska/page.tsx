import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Palmer, Alaska - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Palmer, Alaska. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Palmer Alaska, vending leads Palmer Alaska, vending locations Palmer Alaska, vending opportunities Palmer Alaska",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/palmer-alaska"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Palmer, Alaska - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Palmer, Alaska. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/palmer-alaska",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Palmer, Alaska - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Palmer, Alaska. Find qualified businesses for vending machine placement."
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