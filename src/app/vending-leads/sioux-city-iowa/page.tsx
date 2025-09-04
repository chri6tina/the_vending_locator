import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Sioux City, Iowa - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Sioux City, Iowa. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Sioux City Iowa, vending leads Sioux City Iowa, vending locations Sioux City Iowa, vending opportunities Sioux City Iowa",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/sioux-city-iowa"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Sioux City, Iowa - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Sioux City, Iowa. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/sioux-city-iowa",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Sioux City, Iowa - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Sioux City, Iowa. Find qualified businesses for vending machine placement."
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