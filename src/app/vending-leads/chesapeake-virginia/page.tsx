import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Chesapeake, Virginia - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Chesapeake, Virginia. Find qualified businesses for vending machine placement in this major suburban business and industrial center.",
  "keywords": "vending machines Chesapeake Virginia, vending leads Chesapeake Virginia, vending locations Chesapeake Virginia, vending opportunities Chesapeake Virginia",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/chesapeake-virginia"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Chesapeake, Virginia - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Chesapeake, Virginia. Find qualified businesses for vending machine placement in this major suburban business and industrial center.",
    "url": "https://www.thevendinglocator.com/vending-leads/chesapeake-virginia",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Chesapeake, Virginia - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Chesapeake, Virginia. Find qualified businesses for vending machine placement in this major suburban business and industrial center."
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

export default function ChesapeakeVirginiaVendingLeadsPage() {
  return <PageClient />
}
