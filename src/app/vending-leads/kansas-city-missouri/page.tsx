import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Kansas City, Missouri - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Kansas City, Missouri. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Kansas City Missouri, vending leads Kansas City Missouri, vending locations Kansas City Missouri, vending opportunities Kansas City Missouri",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/kansas-city-missouri"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Kansas City, Missouri - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Kansas City, Missouri. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/kansas-city-missouri",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Kansas City, Missouri - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Kansas City, Missouri. Find qualified businesses for vending machine placement."
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