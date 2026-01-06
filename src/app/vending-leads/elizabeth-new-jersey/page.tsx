import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Elizabeth, New Jersey - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Elizabeth, New Jersey. Find qualified businesses for vending machine placement in this major transportation hub.",
  "keywords": "vending machines Elizabeth New Jersey, vending leads Elizabeth New Jersey, vending locations Elizabeth New Jersey, vending opportunities Elizabeth New Jersey",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/elizabeth-new-jersey"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Elizabeth, New Jersey - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Elizabeth, New Jersey. Find qualified businesses for vending machine placement in this major transportation hub.",
    "url": "https://www.thevendinglocator.com/vending-leads/elizabeth-new-jersey",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Elizabeth, New Jersey - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Elizabeth, New Jersey. Find qualified businesses for vending machine placement in this major transportation hub."
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

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export default function ElizabethNewJerseyVendingLeadsPage() {
  return <PageClient />
}
