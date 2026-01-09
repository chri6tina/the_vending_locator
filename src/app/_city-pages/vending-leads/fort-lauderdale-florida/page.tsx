import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Fort Lauderdale, Florida - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Fort Lauderdale, Florida. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Fort Lauderdale Florida, vending leads Fort Lauderdale Florida, vending locations Fort Lauderdale Florida, vending opportunities Fort Lauderdale Florida",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/fort-lauderdale-florida"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Fort Lauderdale, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Fort Lauderdale, Florida. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/fort-lauderdale-florida",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Fort Lauderdale, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Fort Lauderdale, Florida. Find qualified businesses for vending machine placement."
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