import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Waterloo, Iowa - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Waterloo, Iowa. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Waterloo Iowa, vending leads Waterloo Iowa, vending locations Waterloo Iowa, vending opportunities Waterloo Iowa",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/waterloo-iowa"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Waterloo, Iowa - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Waterloo, Iowa. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/waterloo-iowa",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Waterloo, Iowa - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Waterloo, Iowa. Find qualified businesses for vending machine placement."
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