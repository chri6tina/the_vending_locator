import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Lake Charles, Louisiana - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Lake Charles, Louisiana. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Lake Charles Louisiana, vending leads Lake Charles Louisiana, vending locations Lake Charles Louisiana, vending opportunities Lake Charles Louisiana",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/lake-charles-louisiana"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Lake Charles, Louisiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Lake Charles, Louisiana. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/lake-charles-louisiana",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Lake Charles, Louisiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Lake Charles, Louisiana. Find qualified businesses for vending machine placement."
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