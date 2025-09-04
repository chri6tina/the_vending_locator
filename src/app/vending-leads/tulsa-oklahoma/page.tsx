import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Tulsa, Oklahoma - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Tulsa, Oklahoma. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Tulsa Oklahoma, vending leads Tulsa Oklahoma, vending locations Tulsa Oklahoma, vending opportunities Tulsa Oklahoma",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/tulsa-oklahoma"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Tulsa, Oklahoma - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Tulsa, Oklahoma. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/tulsa-oklahoma",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Tulsa, Oklahoma - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Tulsa, Oklahoma. Find qualified businesses for vending machine placement."
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