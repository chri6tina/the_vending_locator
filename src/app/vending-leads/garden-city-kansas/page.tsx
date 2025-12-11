import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Garden City, Kansas - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Garden City, Kansas. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Garden City Kansas, vending leads Garden City Kansas, vending locations Garden City Kansas, vending opportunities Garden City Kansas",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/garden-city-kansas"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Garden City, Kansas - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Garden City, Kansas. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/garden-city-kansas",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Garden City, Kansas - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Garden City, Kansas. Find qualified businesses for vending machine placement."
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
