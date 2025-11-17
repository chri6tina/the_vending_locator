import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Ketchikan, Alaska - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Ketchikan, Alaska. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Ketchikan Alaska, vending leads Ketchikan Alaska, vending locations Ketchikan Alaska, vending opportunities Ketchikan Alaska",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/ketchikan-alaska"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Ketchikan, Alaska - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Ketchikan, Alaska. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/ketchikan-alaska",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Ketchikan, Alaska - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Ketchikan, Alaska. Find qualified businesses for vending machine placement."
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

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CityPage() {
  return <PageClient />
}