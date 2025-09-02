import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Spokane, Washington - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Spokane, Washington. Find qualified businesses for vending machine placement in this major inland business and healthcare center.",
  "keywords": "vending machines Spokane Washington, vending leads Spokane Washington, vending locations Spokane Washington, vending opportunities Spokane Washington",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/spokane-washington"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Spokane, Washington - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Spokane, Washington. Find qualified businesses for vending machine placement in this major inland business and healthcare center.",
    "url": "https://www.thevendinglocator.com/vending-leads/spokane-washington",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Spokane, Washington - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Spokane, Washington. Find qualified businesses for vending machine placement in this major inland business and healthcare center."
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

export default function SpokaneWashingtonVendingLeadsPage() {
  return <PageClient />
}
