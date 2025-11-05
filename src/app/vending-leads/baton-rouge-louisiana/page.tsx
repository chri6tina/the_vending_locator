import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Baton Rouge, Louisiana - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Baton Rouge, Louisiana. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Baton Rouge Louisiana, vending leads Baton Rouge Louisiana, vending locations Baton Rouge Louisiana, vending opportunities Baton Rouge Louisiana",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/baton-rouge-louisiana"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Baton Rouge, Louisiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Baton Rouge, Louisiana. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/baton-rouge-louisiana",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Baton Rouge, Louisiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Baton Rouge, Louisiana. Find qualified businesses for vending machine placement."
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

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CityPage() {
  return <PageClient />
}