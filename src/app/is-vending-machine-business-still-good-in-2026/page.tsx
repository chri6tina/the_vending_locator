import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Is Vending Machine Business Still Good in 2026? - The Vending Locator",
  "description": "Discover why the vending machine business remains a profitable opportunity in 2026. Learn about market trends, technology advances, and growth potential in the vending industry.",
  "keywords": "vending machine business 2026, is vending profitable 2026, vending machine opportunities 2026, starting vending business 2026, vending industry trends 2026",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/is-vending-machine-business-still-good-in-2026"
  },
  "openGraph": {
    "title": "Is Vending Machine Business Still Good in 2026? - The Vending Locator",
    "description": "Discover why the vending machine business remains a profitable opportunity in 2026. Learn about market trends, technology advances, and growth potential in the vending industry.",
    "url": "https://www.thevendinglocator.com/is-vending-machine-business-still-good-in-2026",
    "siteName": "The Vending Locator",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Is Vending Machine Business Still Good in 2026? - The Vending Locator",
    "description": "Discover why the vending machine business remains a profitable opportunity in 2026. Learn about market trends, technology advances, and growth potential in the vending industry."
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

export default function IsVendingBusinessGood2026Page() {
  return <PageClient />
}

