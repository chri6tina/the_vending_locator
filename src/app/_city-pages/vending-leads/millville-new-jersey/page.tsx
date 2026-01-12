import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Millville, New Jersey - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Millville, New Jersey. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Millville New Jersey, vending leads Millville New Jersey, vending locations Millville New Jersey, vending opportunities Millville New Jersey",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/millville-new-jersey"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Millville, New Jersey - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Millville, New Jersey. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/millville-new-jersey",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Millville, New Jersey - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Millville, New Jersey. Find qualified businesses for vending machine placement."
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
