import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  "title": "Haha Smart Coolers - Grab & Go Vision Technology Vending",
  "description": "Revolutionary grab & go vending with 99% accurate vision technology. No buttons, no broken products. Just open, grab, and go! Cashless payments, remote management, $2,999.",
  "keywords": "haha coolers, smart vending machines, grab and go vending, vision technology vending, cashless vending, US360 cooler, smart refrigerated vending",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/haha-coolers"
  },
  "openGraph": {
    "title": "Haha Smart Coolers - Grab & Go Vision Technology Vending",
    "description": "Revolutionary grab & go vending with 99% accurate vision technology. No buttons, no broken products. Just open, grab, and go! Cashless payments, remote management, $2,999.",
    "url": "https://www.thevendinglocator.com/haha-coolers",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Haha Smart Coolers - Grab & Go Vision Technology Vending",
    "description": "Revolutionary grab & go vending with 99% accurate vision technology. No buttons, no broken products. Just open, grab, and go! Cashless payments, remote management, $2,999."
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

