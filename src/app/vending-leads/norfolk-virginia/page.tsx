import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Norfolk, Virginia - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Norfolk, Virginia. Find qualified businesses for vending machine placement in this major port city and business center.",
  "keywords": "vending machines Norfolk Virginia, vending leads Norfolk Virginia, vending locations Norfolk Virginia, vending opportunities Norfolk Virginia",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/norfolk-virginia"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Norfolk, Virginia - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Norfolk, Virginia. Find qualified businesses for vending machine placement in this major port city and business center.",
    "url": "https://www.thevendinglocator.com/vending-leads/norfolk-virginia",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Norfolk, Virginia - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Norfolk, Virginia. Find qualified businesses for vending machine placement in this major port city and business center."
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

export default function NorfolkVirginiaVendingLeadsPage() {
  return <PageClient />
}
