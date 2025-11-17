import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Rocky Mount, North Carolina - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Rocky Mount, North Carolina. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Rocky Mount, vending leads Rocky Mount, vending locations Rocky Mount, vending opportunities Rocky Mount",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/rocky-mount-north-carolina"
  },
  openGraph: {
    title: "Vending Machine Leads in Rocky Mount, North Carolina - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Rocky Mount, North Carolina. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/rocky-mount-north-carolina",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Rocky Mount, North Carolina - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Rocky Mount, North Carolina. Find qualified businesses for vending machine placement."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function Page() {
  return <PageClient />
}
