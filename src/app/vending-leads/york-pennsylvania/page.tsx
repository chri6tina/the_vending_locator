import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in York, Pennsylvania - The Vending Locator",
  "description": "Get verified vending machine leads and locations in York, Pennsylvania. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines York Pennsylvania, vending leads York Pennsylvania, vending locations York Pennsylvania, vending opportunities York Pennsylvania",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/york-pennsylvania"
  },
  "openGraph": {
    "title": "Vending Machine Leads in York, Pennsylvania - The Vending Locator",
    "description": "Get verified vending machine leads and locations in York, Pennsylvania. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/york-pennsylvania",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in York, Pennsylvania - The Vending Locator",
    "description": "Get verified vending machine leads and locations in York, Pennsylvania. Find qualified businesses for vending machine placement."
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
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CityPage() {
  return <PageClient />
}