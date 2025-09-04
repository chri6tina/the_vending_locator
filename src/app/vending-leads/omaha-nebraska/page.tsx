import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Omaha, Nebraska - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Omaha, Nebraska. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Omaha Nebraska, vending leads Omaha Nebraska, vending locations Omaha Nebraska, vending opportunities Omaha Nebraska",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/omaha-nebraska"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Omaha, Nebraska - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Omaha, Nebraska. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/omaha-nebraska",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Omaha, Nebraska - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Omaha, Nebraska. Find qualified businesses for vending machine placement."
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