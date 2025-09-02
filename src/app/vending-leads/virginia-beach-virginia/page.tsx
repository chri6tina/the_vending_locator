import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Virginia Beach, Virginia - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Virginia Beach, Virginia. Find qualified businesses for vending machine placement in this major coastal business and tourism center.",
  "keywords": "vending machines Virginia Beach Virginia, vending leads Virginia Beach Virginia, vending locations Virginia Beach Virginia, vending opportunities Virginia Beach Virginia",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/virginia-beach-virginia"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Virginia Beach, Virginia - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Virginia Beach, Virginia. Find qualified businesses for vending machine placement in this major coastal business and tourism center.",
    "url": "https://www.thevendinglocator.com/vending-leads/virginia-beach-virginia",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Virginia Beach, Virginia - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Virginia Beach, Virginia. Find qualified businesses for vending machine placement in this major coastal business and tourism center."
  },
  "robots": {
    "index": true,
    "follow": true,
    "googleBot": {
      "index": true,
      "follow": true,
      'max-video-preview': -1,
      'max-image-preview': "large",
      'max-snippet': -1
    }
  }
}

import PageClient from './pageClient'

export default function VirginiaBeachVirginiaVendingLeadsPage() {
  return <PageClient />
}
