import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in South Burlington, Vermont - The Vending Locator",
  "description": "Get verified vending machine leads and locations in South Burlington, Vermont. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines South Burlington Vermont, vending leads South Burlington Vermont, vending locations South Burlington Vermont, vending opportunities South Burlington Vermont",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/south-burlington-vermont"
  },
  "openGraph": {
    "title": "Vending Machine Leads in South Burlington, Vermont - The Vending Locator",
    "description": "Get verified vending machine leads and locations in South Burlington, Vermont. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/south-burlington-vermont",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in South Burlington, Vermont - The Vending Locator",
    "description": "Get verified vending machine leads and locations in South Burlington, Vermont. Find qualified businesses for vending machine placement."
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


// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export default function CityPage() {
  return <PageClient />
}
