import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Oregon City, Oregon - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Oregon City, Oregon. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Oregon City Oregon, vending leads Oregon City Oregon, vending locations Oregon City Oregon, vending opportunities Oregon City Oregon",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/oregon-city-oregon"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Oregon City, Oregon - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Oregon City, Oregon. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/oregon-city-oregon",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Oregon City, Oregon - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Oregon City, Oregon. Find qualified businesses for vending machine placement."
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
