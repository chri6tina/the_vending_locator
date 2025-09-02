import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Youngstown, Ohio - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Youngstown, Ohio. Find qualified businesses for vending machine placement in this major industrial and educational center.",
  "keywords": "vending machines Youngstown Ohio, vending leads Youngstown Ohio, vending locations Youngstown Ohio, vending opportunities Youngstown Ohio",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/youngstown-ohio"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Youngstown, Ohio - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Youngstown, Ohio. Find qualified businesses for vending machine placement in this major industrial and educational center.",
    "url": "https://www.thevendinglocator.com/vending-leads/youngstown-ohio",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Youngstown, Ohio - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Youngstown, Ohio. Find qualified businesses for vending machine placement in this major industrial and educational center."
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

export default function YoungstownOhioVendingLeadsPage() {
  return <PageClient />
}