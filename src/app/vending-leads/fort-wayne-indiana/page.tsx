import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Fort Wayne, Indiana - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Fort Wayne, Indiana. Find qualified businesses for vending machine placement in this major business and manufacturing center.",
  "keywords": "vending machines Fort Wayne Indiana, vending leads Fort Wayne Indiana, vending locations Fort Wayne Indiana, vending opportunities Fort Wayne Indiana",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/fort-wayne-indiana"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Fort Wayne, Indiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Fort Wayne, Indiana. Find qualified businesses for vending machine placement in this major business and manufacturing center.",
    "url": "https://www.thevendinglocator.com/vending-leads/fort-wayne-indiana",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Fort Wayne, Indiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Fort Wayne, Indiana. Find qualified businesses for vending machine placement in this major business and manufacturing center."
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

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Generate on-demand to reduce build memory usage
export default function FortWayneIndianaVendingLeadsPage() {
  return <PageClient />
}
