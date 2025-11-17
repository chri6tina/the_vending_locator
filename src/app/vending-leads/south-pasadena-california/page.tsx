import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in South Pasadena, California - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout South Pasadena, California. Find qualified businesses for vending machine placement.",
  keywords: "vending machines South Pasadena, vending leads South Pasadena, vending locations South Pasadena, vending opportunities South Pasadena",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/south-pasadena-california"
  },
  openGraph: {
    title: "Vending Machine Leads in South Pasadena, California - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout South Pasadena, California. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/south-pasadena-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in South Pasadena, California - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout South Pasadena, California. Find qualified businesses for vending machine placement."
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
