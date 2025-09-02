import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Columbia, South Carolina - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Columbia, South Carolina. Find qualified businesses for vending machine placement in this major state capital and business center.",
  "keywords": "vending machines Columbia South Carolina, vending leads Columbia South Carolina, vending locations Columbia South Carolina, vending opportunities Columbia South Carolina",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/columbia-south-carolina"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Columbia, South Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Columbia, South Carolina. Find qualified businesses for vending machine placement in this major state capital and business center.",
    "url": "https://www.thevendinglocator.com/vending-leads/columbia-south-carolina",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Columbia, South Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Columbia, South Carolina. Find qualified businesses for vending machine placement in this major state capital and business center."
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

export default function ColumbiaSouthCarolinaVendingLeadsPage() {
  return <PageClient />
}
