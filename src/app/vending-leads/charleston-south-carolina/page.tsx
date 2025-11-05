import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Charleston, South Carolina - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Charleston, South Carolina. Find qualified businesses for vending machine placement in this major historic port city and business center.",
  "keywords": "vending machines Charleston South Carolina, vending leads Charleston South Carolina, vending locations Charleston South Carolina, vending opportunities Charleston South Carolina",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/charleston-south-carolina"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Charleston, South Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Charleston, South Carolina. Find qualified businesses for vending machine placement in this major historic port city and business center.",
    "url": "https://www.thevendinglocator.com/vending-leads/charleston-south-carolina",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Charleston, South Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Charleston, South Carolina. Find qualified businesses for vending machine placement in this major historic port city and business center."
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

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CharlestonSouthCarolinaVendingLeadsPage() {
  return <PageClient />
}
