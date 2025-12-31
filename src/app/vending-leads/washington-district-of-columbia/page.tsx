import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Washington, District of Columbia - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Washington, District of Columbia. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Washington District of Columbia, vending leads Washington District of Columbia, vending locations Washington District of Columbia, vending opportunities Washington District of Columbia",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/washington-district-of-columbia"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Washington, District of Columbia - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Washington, District of Columbia. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/washington-district-of-columbia",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Washington, District of Columbia - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Washington, District of Columbia. Find qualified businesses for vending machine placement."
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
