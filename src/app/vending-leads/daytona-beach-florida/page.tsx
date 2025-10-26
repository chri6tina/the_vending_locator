import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Daytona Beach, Florida - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Daytona Beach, Florida. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Daytona Beach Florida, vending leads Daytona Beach Florida, vending locations Daytona Beach Florida, vending opportunities Daytona Beach Florida",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/daytona-beach-florida"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Daytona Beach, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Daytona Beach, Florida. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/daytona-beach-florida",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Daytona Beach, Florida - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Daytona Beach, Florida. Find qualified businesses for vending machine placement."
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