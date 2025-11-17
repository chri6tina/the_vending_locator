import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in New Orleans, Louisiana - The Vending Locator",
  "description": "Get verified vending machine leads and locations in New Orleans, Louisiana. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines New Orleans Louisiana, vending leads New Orleans Louisiana, vending locations New Orleans Louisiana, vending opportunities New Orleans Louisiana",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/new-orleans-louisiana"
  },
  "openGraph": {
    "title": "Vending Machine Leads in New Orleans, Louisiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in New Orleans, Louisiana. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/new-orleans-louisiana",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in New Orleans, Louisiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in New Orleans, Louisiana. Find qualified businesses for vending machine placement."
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