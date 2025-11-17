import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Bartlett, Illinois - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Bartlett, Illinois. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Bartlett, vending leads Bartlett, vending locations Bartlett, vending opportunities Bartlett",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/bartlett-illinois"
  },
  openGraph: {
    title: "Vending Machine Leads in Bartlett, Illinois - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Bartlett, Illinois. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/bartlett-illinois",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Bartlett, Illinois - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Bartlett, Illinois. Find qualified businesses for vending machine placement."
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
