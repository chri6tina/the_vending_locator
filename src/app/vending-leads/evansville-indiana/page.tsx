import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Evansville, Indiana - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Evansville, Indiana. Find qualified businesses for vending machine placement in this major business and industrial center.",
  "keywords": "vending machines Evansville Indiana, vending leads Evansville Indiana, vending locations Evansville Indiana, vending opportunities Evansville Indiana",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/evansville-indiana"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Evansville, Indiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Evansville, Indiana. Find qualified businesses for vending machine placement in this major business and industrial center.",
    "url": "https://www.thevendinglocator.com/vending-leads/evansville-indiana",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Evansville, Indiana - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Evansville, Indiana. Find qualified businesses for vending machine placement in this major business and industrial center."
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


// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export default function EvansvilleIndianaVendingLeadsPage() {
  return <PageClient />
}
