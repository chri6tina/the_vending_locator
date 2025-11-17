import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Cleveland, Ohio - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Cleveland, Ohio. Find qualified businesses for vending machine placement in this major industrial and healthcare center.",
  "keywords": "vending machines Cleveland Ohio, vending leads Cleveland Ohio, vending locations Cleveland Ohio, vending opportunities Cleveland Ohio",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/cleveland-ohio"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Cleveland, Ohio - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Cleveland, Ohio. Find qualified businesses for vending machine placement in this major industrial and healthcare center.",
    "url": "https://www.thevendinglocator.com/vending-leads/cleveland-ohio",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Cleveland, Ohio - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Cleveland, Ohio. Find qualified businesses for vending machine placement in this major industrial and healthcare center."
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

import PageClient from './pageClient'

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ClevelandOhioVendingLeadsPage() {
  return <PageClient />
}