import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Geneva, New York - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Geneva, New York. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Geneva New York, vending leads Geneva New York, vending locations Geneva New York, vending opportunities Geneva New York",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/geneva-new-york"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Geneva, New York - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Geneva, New York. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/geneva-new-york",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Geneva, New York - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Geneva, New York. Find qualified businesses for vending machine placement."
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
