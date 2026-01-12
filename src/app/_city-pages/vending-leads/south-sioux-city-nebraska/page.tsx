import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in South Sioux City, Nebraska - The Vending Locator",
  "description": "Get verified vending machine leads and locations in South Sioux City, Nebraska. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines South Sioux City Nebraska, vending leads South Sioux City Nebraska, vending locations South Sioux City Nebraska, vending opportunities South Sioux City Nebraska",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/south-sioux-city-nebraska"
  },
  "openGraph": {
    "title": "Vending Machine Leads in South Sioux City, Nebraska - The Vending Locator",
    "description": "Get verified vending machine leads and locations in South Sioux City, Nebraska. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/south-sioux-city-nebraska",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in South Sioux City, Nebraska - The Vending Locator",
    "description": "Get verified vending machine leads and locations in South Sioux City, Nebraska. Find qualified businesses for vending machine placement."
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

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;


// Generate on-demand to reduce build memory usage
export default function CityPage() {
  return <PageClient />
}
