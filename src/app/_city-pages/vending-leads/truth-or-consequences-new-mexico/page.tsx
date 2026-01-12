import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Truth Or Consequences, New Mexico - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Truth Or Consequences, New Mexico. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Truth Or Consequences New Mexico, vending leads Truth Or Consequences New Mexico, vending locations Truth Or Consequences New Mexico, vending opportunities Truth Or Consequences New Mexico",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/truth-or-consequences-new-mexico"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Truth Or Consequences, New Mexico - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Truth Or Consequences, New Mexico. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/truth-or-consequences-new-mexico",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Truth Or Consequences, New Mexico - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Truth Or Consequences, New Mexico. Find qualified businesses for vending machine placement."
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
