import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in La Vista, Nebraska - The Vending Locator",
  "description": "Get verified vending machine leads and locations in La Vista, Nebraska. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines La Vista Nebraska, vending leads La Vista Nebraska, vending locations La Vista Nebraska, vending opportunities La Vista Nebraska",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/la-vista-nebraska"
  },
  "openGraph": {
    "title": "Vending Machine Leads in La Vista, Nebraska - The Vending Locator",
    "description": "Get verified vending machine leads and locations in La Vista, Nebraska. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/la-vista-nebraska",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in La Vista, Nebraska - The Vending Locator",
    "description": "Get verified vending machine leads and locations in La Vista, Nebraska. Find qualified businesses for vending machine placement."
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
