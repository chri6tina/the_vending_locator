import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Rock Springs, Wyoming - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Rock Springs, Wyoming. Find qualified businesses for vending machine placement.",
  "keywords": "vending machines Rock Springs Wyoming, vending leads Rock Springs Wyoming, vending locations Rock Springs Wyoming, vending opportunities Rock Springs Wyoming",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/rock-springs-wyoming"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Rock Springs, Wyoming - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Rock Springs, Wyoming. Find qualified businesses for vending machine placement.",
    "url": "https://www.thevendinglocator.com/vending-leads/rock-springs-wyoming",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Rock Springs, Wyoming - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Rock Springs, Wyoming. Find qualified businesses for vending machine placement."
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