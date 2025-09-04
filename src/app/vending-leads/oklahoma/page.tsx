import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Oklahoma - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Oklahoma. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Oklahoma, vending leads Oklahoma, vending locations Oklahoma, vending opportunities Oklahoma",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/oklahoma"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Oklahoma - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Oklahoma. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/oklahoma",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Oklahoma - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Oklahoma. Find qualified businesses for vending machine placement."
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