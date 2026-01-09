import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in San Marino, California - The Vending Locator",
  "description": "Get verified vending machine leads and locations in San Marino, California. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines san marino california, vending leads san marino california, vending locations san marino california, vending opportunities san marino california",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/san-marino-california"
  },
  "openGraph": {
    "title": "Vending Machine Leads in San Marino, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in San Marino, California. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/san-marino-california",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in San Marino, California - The Vending Locator",
    "description": "Get verified vending machine leads and locations in San Marino, California. Find qualified businesses for vending machine placement."
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

export const dynamic = 'force-dynamic';
export const revalidate = 0;


export default function CityPage() {
  return <PageClient />
}
