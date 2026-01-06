import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Akron, Ohio - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Akron, Ohio. Find qualified businesses for vending machine placement in this major manufacturing and research center.",
  "keywords": "vending machines Akron Ohio, vending leads Akron Ohio, vending locations Akron Ohio, vending opportunities Akron Ohio",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/akron-ohio"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Akron, Ohio - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Akron, Ohio. Find qualified businesses for vending machine placement in this major manufacturing and research center.",
    "url": "https://www.thevendinglocator.com/vending-leads/akron-ohio",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Akron, Ohio - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Akron, Ohio. Find qualified businesses for vending machine placement in this major manufacturing and research center."
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


import PageClient from './pageClient'

// Generate on-demand to reduce build memory usage
export default function AkronOhioVendingLeadsPage() {
  return <PageClient />
}