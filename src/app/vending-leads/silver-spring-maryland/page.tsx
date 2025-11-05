import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Silver Spring, Maryland - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Silver Spring, Maryland. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Silver Spring Maryland, vending leads Silver Spring Maryland, vending locations Silver Spring Maryland, vending opportunities Silver Spring Maryland",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/silver-spring-maryland"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Silver Spring, Maryland - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Silver Spring, Maryland. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/silver-spring-maryland",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Silver Spring, Maryland - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Silver Spring, Maryland. Find qualified businesses for vending machine placement."
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