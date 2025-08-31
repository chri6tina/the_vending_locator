import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Vending Machine Leads Pricing - The Vending Locator",
  "description": "Affordable vending machine leads and location packages. Choose the plan that fits your business needs.",
  "keywords": "vending leads pricing, vending location packages, vending business costs, vending machine investment",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/pricing"
  },
  "openGraph": {
    "title": "Vending Machine Leads Pricing - The Vending Locator",
    "description": "Affordable vending machine leads and location packages. Choose the plan that fits your business needs.",
    "url": "https://www.thevendinglocator.com/pricing",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads Pricing - The Vending Locator",
    "description": "Affordable vending machine leads and location packages. Choose the plan that fits your business needs."
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

export default function Page() {
  return <PageClient />
}