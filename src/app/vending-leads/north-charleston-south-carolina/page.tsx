import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in North Charleston, South Carolina - The Vending Locator",
  "description": "Get verified vending machine leads and locations in North Charleston, South Carolina. Find qualified businesses for vending machine placement in this major industrial and business center.",
  "keywords": "vending machines North Charleston South Carolina, vending leads North Charleston South Carolina, vending locations North Charleston South Carolina, vending opportunities North Charleston South Carolina",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/north-charleston-south-carolina"
  },
  "openGraph": {
    "title": "Vending Machine Leads in North Charleston, South Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in North Charleston, South Carolina. Find qualified businesses for vending machine placement in this major industrial and business center.",
    "url": "https://www.thevendinglocator.com/vending-leads/north-charleston-south-carolina",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in North Charleston, South Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in North Charleston, South Carolina. Find qualified businesses for vending machine placement in this major industrial and business center."
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

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Generate on-demand to reduce build memory usage
export default function NorthCharlestonSouthCarolinaVendingLeadsPage() {
  return <PageClient />
}
