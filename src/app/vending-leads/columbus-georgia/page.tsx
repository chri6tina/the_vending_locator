import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Locations in Columbus, Georgia - Find Qualified Businesses",
  description: "Get pre-qualified vending machine locations in Columbus, Georgia's diverse business economy. Access verified businesses with detailed contact information and placement opportunities.",
  keywords: "vending machine locations Columbus Georgia, vending leads Columbus, vending opportunities Columbus GA, vending business Columbus",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/columbus-georgia"
  },
  openGraph: {
    title: "Vending Machine Locations in Columbus, Georgia - Find Qualified Businesses",
    description: "Get pre-qualified vending machine locations in Columbus, Georgia's diverse business economy. Access verified businesses with detailed contact information and placement opportunities.",
    url: "https://www.thevendinglocator.com/vending-leads/columbus-georgia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Locations in Columbus, Georgia - Find Qualified Businesses",
    description: "Get pre-qualified vending machine locations in Columbus, Georgia's diverse business economy. Access verified businesses with detailed contact information and placement opportunities."
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
