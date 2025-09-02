import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Cincinnati, Ohio - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Cincinnati, Ohio. Find qualified businesses for vending machine placement in this major business and cultural center.",
  "keywords": "vending machines Cincinnati Ohio, vending leads Cincinnati Ohio, vending locations Cincinnati Ohio, vending opportunities Cincinnati Ohio",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/cincinnati-ohio"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Cincinnati, Ohio - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Cincinnati, Ohio. Find qualified businesses for vending machine placement in this major business and cultural center.",
    "url": "https://www.thevendinglocator.com/vending-leads/cincinnati-ohio",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Cincinnati, Ohio - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Cincinnati, Ohio. Find qualified businesses for vending machine placement in this major business and cultural center."
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

export default function CincinnatiOhioVendingLeadsPage() {
  return <PageClient />
}