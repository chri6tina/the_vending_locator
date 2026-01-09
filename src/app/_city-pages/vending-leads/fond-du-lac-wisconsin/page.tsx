import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Fond du Lac, Wisconsin - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Fond du Lac, Wisconsin. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Fond du Lac Wisconsin, vending leads Fond du Lac Wisconsin, vending locations Fond du Lac Wisconsin, vending opportunities Fond du Lac Wisconsin",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/fond-du-lac-wisconsin"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Fond du Lac, Wisconsin - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Fond du Lac, Wisconsin. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/fond-du-lac-wisconsin",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Fond du Lac, Wisconsin - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Fond du Lac, Wisconsin. Find qualified businesses for vending machine placement."
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
