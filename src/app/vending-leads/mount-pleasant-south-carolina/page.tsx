import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Mount Pleasant, South Carolina - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Mount Pleasant, South Carolina. Find qualified businesses for vending machine placement in this major suburban community and business center.",
  "keywords": "vending machines Mount Pleasant South Carolina, vending leads Mount Pleasant South Carolina, vending locations Mount Pleasant South Carolina, vending opportunities Mount Pleasant South Carolina",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/mount-pleasant-south-carolina"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Mount Pleasant, South Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Mount Pleasant, South Carolina. Find qualified businesses for vending machine placement in this major suburban community and business center.",
    "url": "https://www.thevendinglocator.com/vending-leads/mount-pleasant-south-carolina",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Mount Pleasant, South Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Mount Pleasant, South Carolina. Find qualified businesses for vending machine placement in this major suburban community and business center."
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

export default function MountPleasantSouthCarolinaVendingLeadsPage() {
  return <PageClient />
}
