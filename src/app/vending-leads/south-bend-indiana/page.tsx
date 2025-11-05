import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in South Bend, Indiana - The Vending Locator",
  "description": "Get verified vending machine leads and locations in South Bend, Indiana. Find qualified businesses for vending machine placement in this major business and educational center.",
  "keywords": "vending machines South Bend Indiana, vending leads South Bend Indiana, vending locations South Bend Indiana, vending opportunities South Bend Indiana",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/south-bend-indiana"
  },
  "openGraph": {
    "title": "Vending Machine Leads in South Bend, Indiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in South Bend, Indiana. Find qualified businesses for vending machine placement in this major business and educational center.",
    "url": "https://www.thevendinglocator.com/vending-leads/south-bend-indiana",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in South Bend, Indiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in South Bend, Indiana. Find qualified businesses for vending machine placement in this major business and educational center."
  },
  "robots": {
    "index": true,
    "follow": true,
    "googleBot": {
      "index": true,
      "follow": true,
      'max-video-preview': -1,
      'max-image-preview': "large",
      'max-snippet': -1
    }
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SouthBendIndianaVendingLeadsPage() {
  return <PageClient />
}
