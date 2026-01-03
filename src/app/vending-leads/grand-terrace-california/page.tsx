import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Grand Terrace, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Grand Terrace, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Grand Terrace California, vending leads Grand Terrace California, vending locations Grand Terrace California, vending opportunities Grand Terrace California",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/grand-terrace-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Grand Terrace, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Grand Terrace, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/grand-terrace-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Grand Terrace, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Grand Terrace, California. Find qualified businesses for vending machine placement."
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
