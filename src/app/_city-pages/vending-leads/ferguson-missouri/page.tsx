import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Ferguson, Missouri - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Ferguson, Missouri. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Ferguson Missouri, vending leads Ferguson Missouri, vending locations Ferguson Missouri, vending opportunities Ferguson Missouri",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/ferguson-missouri"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Ferguson, Missouri - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Ferguson, Missouri. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/ferguson-missouri",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Ferguson, Missouri - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Ferguson, Missouri. Find qualified businesses for vending machine placement."
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
