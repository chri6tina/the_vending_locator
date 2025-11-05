import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Butte, Montana - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Butte, Montana. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Butte Montana, vending leads Butte Montana, vending locations Butte Montana, vending opportunities Butte Montana",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/butte-montana"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Butte, Montana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Butte, Montana. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/butte-montana",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Butte, Montana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Butte, Montana. Find qualified businesses for vending machine placement."
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