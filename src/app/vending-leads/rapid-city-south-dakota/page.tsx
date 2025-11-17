import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Rapid City, South Dakota - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Rapid City, South Dakota. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Rapid City South Dakota, vending leads Rapid City South Dakota, vending locations Rapid City South Dakota, vending opportunities Rapid City South Dakota",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/rapid-city-south-dakota"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Rapid City, South Dakota - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Rapid City, South Dakota. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/rapid-city-south-dakota",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Rapid City, South Dakota - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Rapid City, South Dakota. Find qualified businesses for vending machine placement."
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
