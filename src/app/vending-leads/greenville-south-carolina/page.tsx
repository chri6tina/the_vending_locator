import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Greenville, South Carolina - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Greenville, South Carolina. Find qualified businesses for vending machine placement in this major business and manufacturing center.",
  "keywords": "vending machines Greenville South Carolina, vending leads Greenville South Carolina, vending locations Greenville South Carolina, vending opportunities Greenville South Carolina",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/greenville-south-carolina"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Greenville, South Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Greenville, South Carolina. Find qualified businesses for vending machine placement in this major business and manufacturing center.",
    "url": "https://www.thevendinglocator.com/vending-leads/greenville-south-carolina",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Greenville, South Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Greenville, South Carolina. Find qualified businesses for vending machine placement in this major business and manufacturing center."
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

export default function GreenvilleSouthCarolinaVendingLeadsPage() {
  return <PageClient />
}
