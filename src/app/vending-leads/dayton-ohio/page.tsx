import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Dayton, Ohio - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Dayton, Ohio. Find qualified businesses for vending machine placement in this major aerospace and technology center.",
  "keywords": "vending machines Dayton Ohio, vending leads Dayton Ohio, vending locations Dayton Ohio, vending opportunities Dayton Ohio",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/dayton-ohio"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Dayton, Ohio - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Dayton, Ohio. Find qualified businesses for vending machine placement in this major aerospace and technology center.",
    "url": "https://www.thevendinglocator.com/vending-leads/dayton-ohio",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Dayton, Ohio - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Dayton, Ohio. Find qualified businesses for vending machine placement in this major aerospace and technology center."
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

export default function DaytonOhioVendingLeadsPage() {
  return <PageClient />
}