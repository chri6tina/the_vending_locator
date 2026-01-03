import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Lee's Summit, Missouri - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Lee's Summit, Missouri. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Lee's Summit Missouri, vending leads Lee's Summit Missouri, vending locations Lee's Summit Missouri, vending opportunities Lee's Summit Missouri",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/lee-s-summit-missouri"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Lee's Summit, Missouri - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Lee's Summit, Missouri. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/lee-s-summit-missouri",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Lee's Summit, Missouri - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Lee's Summit, Missouri. Find qualified businesses for vending machine placement."
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

export default function CityPage() {
  return <PageClient />
}
