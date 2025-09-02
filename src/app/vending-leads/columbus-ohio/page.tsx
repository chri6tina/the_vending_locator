import { Metadata } from 'next'

export const metadata: Metadata = {
  "title": "Vending Machine Leads in Columbus, Ohio - The Vending Locator",
  "description": "Get verified vending machine leads and locations in Columbus, Ohio. Find qualified businesses for vending machine placement in Ohio's capital and largest city.",
  "keywords": "vending machines Columbus Ohio, vending leads Columbus Ohio, vending locations Columbus Ohio, vending opportunities Columbus Ohio",
  "alternates": {
    "canonical": "https://www.thevendinglocator.com/vending-leads/columbus-ohio"
  },
  "openGraph": {
    "title": "Vending Machine Leads in Columbus, Ohio - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Columbus, Ohio. Find qualified businesses for vending machine placement in Ohio's capital and largest city.",
    "url": "https://www.thevendinglocator.com/vending-leads/columbus-ohio",
    "siteName": "The Vending Locator",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Vending Machine Leads in Columbus, Ohio - The Vending Locator",
    "description": "Get verified vending machine leads and locations in Columbus, Ohio. Find qualified businesses for vending machine placement in Ohio's capital and largest city."
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

export default function ColumbusOhioVendingLeadsPage() {
  return <PageClient />
}