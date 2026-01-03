import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Oneonta, Alabama - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Oneonta, Alabama. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Oneonta Alabama, vending leads Oneonta Alabama, vending locations Oneonta Alabama, vending opportunities Oneonta Alabama",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/oneonta-alabama"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Oneonta, Alabama - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Oneonta, Alabama. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/oneonta-alabama",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Oneonta, Alabama - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Oneonta, Alabama. Find qualified businesses for vending machine placement."
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
