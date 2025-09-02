import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Rock Hill, South Carolina - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Rock Hill, South Carolina. Find qualified businesses for vending machine placement in this major business and industrial center.",
  "keywords": "vending machines Rock Hill South Carolina, vending leads Rock Hill South Carolina, vending locations Rock Hill South Carolina, vending opportunities Rock Hill South Carolina",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/rock-hill-south-carolina"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Rock Hill, South Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Rock Hill, South Carolina. Find qualified businesses for vending machine placement in this major business and industrial center.",
    "url": "https://www.thevendinglocator.com/vending-leads/rock-hill-south-carolina",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Rock Hill, South Carolina - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Rock Hill, South Carolina. Find qualified businesses for vending machine placement in this major business and industrial center."
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

export default function RockHillSouthCarolinaVendingLeadsPage() {
  return <PageClient />
}
