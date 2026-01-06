import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Kingston, New York - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Kingston, New York. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Kingston New York, vending leads Kingston New York, vending locations Kingston New York, vending opportunities Kingston New York",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/kingston-new-york"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Kingston, New York - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Kingston, New York. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/kingston-new-york",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Kingston, New York - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Kingston, New York. Find qualified businesses for vending machine placement."
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
