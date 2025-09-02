import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Woodbridge, New Jersey - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Woodbridge, New Jersey. Find qualified businesses for vending machine placement in this major suburban center.",
  "keywords": "vending machines Woodbridge New Jersey, vending leads Woodbridge New Jersey, vending locations Woodbridge New Jersey, vending opportunities Woodbridge New Jersey",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/woodbridge-new-jersey"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Woodbridge, New Jersey - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Woodbridge, New Jersey. Find qualified businesses for vending machine placement in this major suburban center.",
    "url": "https://www.thevendinglocator.com/vending-leads/woodbridge-new-jersey",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Woodbridge, New Jersey - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Woodbridge, New Jersey. Find qualified businesses for vending machine placement in this major suburban center."
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

export default function WoodbridgeNewJerseyVendingLeadsPage() {
  return <PageClient />
}
