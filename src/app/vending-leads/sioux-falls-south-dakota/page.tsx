import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Sioux Falls, South Dakota - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Sioux Falls, South Dakota. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Sioux Falls South Dakota, vending leads Sioux Falls South Dakota, vending locations Sioux Falls South Dakota, vending opportunities Sioux Falls South Dakota",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/sioux-falls-south-dakota"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Sioux Falls, South Dakota - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Sioux Falls, South Dakota. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/sioux-falls-south-dakota",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Sioux Falls, South Dakota - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Sioux Falls, South Dakota. Find qualified businesses for vending machine placement."
  },
  "robots": {
    "index": true,
    "follow": true,
    "googleBot": {
      "index": true,
      "follow": true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
}

export default function CityPage() {
  return <PageClient />
}
